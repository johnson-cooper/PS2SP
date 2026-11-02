export class BudgetStop extends Error {}
export class HostUnavailable extends Error {}

// A failed host gets at most two attempts per run, not two per queued repo.
export function createExternalGitClient({ maxRequests, userAgent, timeoutMs = 30_000,
  retryDelayMs = 1_000, fetchImpl = fetch, warn = console.warn }) {
  let requests = 0;
  const unavailable = new Map();
  return {
    get requests() { return requests; },
    get failedHosts() { return [...unavailable.keys()]; },
    async fetchJson(url) {
      const host = new URL(url).origin;
      if (unavailable.has(host)) throw new HostUnavailable(unavailable.get(host));
      for (let attempt = 0; attempt < 2; attempt++) {
        if (requests >= maxRequests) throw new BudgetStop(`External Git request budget reached (${maxRequests}).`);
        requests++;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), timeoutMs);
        let failure;
        try {
          const response = await fetchImpl(url, {
            headers: { "User-Agent": userAgent, Accept: "application/json" },
            redirect: "follow", signal: controller.signal
          });
          if ([404, 409, 410, 451].includes(response.status)) {
            await response.body?.cancel();
            return null;
          }
          if (!response.ok) {
            await response.body?.cancel();
            if (response.status === 408 || response.status === 429 || response.status >= 500) {
              throw new HostUnavailable(`HTTP ${response.status}`);
            }
            throw new Error(`HTTP ${response.status}: ${url}`);
          }
          // Keep the deadline active until the entire body has been consumed.
          return await response.json();
        } catch (error) {
          const networkFailure = error instanceof TypeError &&
            (error.message === "fetch failed" || error.cause?.code);
          if (!(error instanceof HostUnavailable) && !controller.signal.aborted &&
              !networkFailure && !["AbortError", "TimeoutError"].includes(error.name)) throw error;
          failure = `${error.message}${error.cause?.code ? ` (${error.cause.code})` : ""}`;
        } finally {
          clearTimeout(timeout);
        }
        if (attempt === 0) {
          warn(`::warning::External Git request failed; retrying ${url}: ${failure}`);
          await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
        } else {
          const message = `External Git host deferred until next run: ${host}; ${url}: ${failure}`;
          unavailable.set(host, message);
          warn(`::warning::${message}`);
          throw new HostUnavailable(message);
        }
      }
    }
  };
}
