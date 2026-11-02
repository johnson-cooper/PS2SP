import test from "node:test";
import assert from "node:assert/strict";
import { BudgetStop, HostUnavailable, createExternalGitClient } from "../lib/external-git-client.mjs";

const options = { maxRequests: 20, userAgent: "test", retryDelayMs: 0, warn() {} };
const url = "https://forge.example/api/v1/repos/ps2/sdk";

for (const status of [408, 429, 500, 521, 503]) {
  test(`HTTP ${status}: bounded retry and host isolation`, async () => {
    const client = createExternalGitClient({ ...options, fetchImpl: async (request) =>
      request.startsWith("https://healthy.example") ? Response.json({ ok: true }) : new Response("down", { status }) });
    await assert.rejects(client.fetchJson(url), HostUnavailable);
    assert.equal(client.requests, 2);
    await assert.rejects(client.fetchJson(`${url}/branches`), HostUnavailable);
    assert.equal(client.requests, 2);
    assert.deepEqual(await client.fetchJson("https://healthy.example/repo"), { ok: true });
    assert.deepEqual(client.failedHosts, ["https://forge.example"]);
  });
}

test("transient failure can recover on retry", async () => {
  let calls = 0;
  const client = createExternalGitClient({ ...options, fetchImpl: async () => {
    if (++calls === 1) throw new TypeError("fetch failed", { cause: { code: "ECONNRESET" } });
    return Response.json([1]);
  } });
  assert.deepEqual(await client.fetchJson(url), [1]);
  assert.equal(client.requests, 2);
  assert.deepEqual(client.failedHosts, []);
});

for (const phase of ["headers", "body"]) {
  test(`deadline includes stalled ${phase}`, async () => {
    const client = createExternalGitClient({ ...options, timeoutMs: 10, fetchImpl: async (_, { signal }) => {
      const stalled = () => new Promise((_, reject) => signal.addEventListener("abort", () => reject(signal.reason), { once: true }));
      return phase === "headers" ? stalled() : { ok: true, status: 200, json: stalled };
    } });
    await assert.rejects(client.fetchJson(url), HostUnavailable);
    assert.equal(client.requests, 2);
  });
}

test("retry attempts obey the global request budget", async () => {
  const client = createExternalGitClient({ ...options, maxRequests: 1, fetchImpl: async () => new Response(null, { status: 503 }) });
  await assert.rejects(client.fetchJson(url), BudgetStop);
  assert.equal(client.requests, 1);
});

for (const status of [404, 409, 410, 451]) {
  test(`HTTP ${status} remains an absent resource`, async () => {
    const client = createExternalGitClient({ ...options, fetchImpl: async () => new Response(null, { status }) });
    assert.equal(await client.fetchJson(url), null);
    assert.equal(client.requests, 1);
  });
}

for (const status of [401, 403]) {
  test(`HTTP ${status} remains fatal`, async () => {
    const client = createExternalGitClient({ ...options, fetchImpl: async () => new Response(null, { status }) });
    await assert.rejects(client.fetchJson(url), new RegExp(`HTTP ${status}`));
    assert.equal(client.requests, 1);
    assert.deepEqual(client.failedHosts, []);
  });
}

test("invalid JSON and programming errors are not hidden as outages", async () => {
  for (const fetchImpl of [async () => new Response("not JSON"), async () => { throw new TypeError("bug"); }]) {
    const client = createExternalGitClient({ ...options, fetchImpl });
    await assert.rejects(client.fetchJson(url), (error) => !(error instanceof HostUnavailable));
    assert.equal(client.requests, 1);
  }
});
