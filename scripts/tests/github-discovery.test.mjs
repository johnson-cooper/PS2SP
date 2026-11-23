import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { execFile } from "node:child_process";

const exec = promisify(execFile);
const watermark = "2026-01-01T00:00:00.000Z";

async function runDiscovery(t, { failurePath, statuses, budget = 20 }) {
  const prefix = fileURLToPath(new URL("../../node_modules/.discovery-test-", import.meta.url));
  const root = await fs.mkdtemp(prefix);
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  for (const dir of ["scripts/lib", "content/projects", "config", "discovery"]) {
    await fs.mkdir(path.join(root, dir), { recursive: true });
  }
  for (const file of ["discover-github.mjs", "lib/categorization.mjs"]) {
    await fs.copyFile(new URL(`../${file}`, import.meta.url), path.join(root, "scripts", file));
  }
  const statePath = path.join(root, "discovery/state.json");
  await fs.writeFile(statePath, JSON.stringify({
    bootstrap: { nextMonth: "2026-01", complete: true },
    incremental: { watermark },
    forks: { queue: ["ps2/first", "ps2/second"], scannedRepositories: [] }
  }));
  await fs.writeFile(path.join(root, "config/discovery-sources.json"), JSON.stringify({
    starredUsers: [], queries: ["topic:ps2"], incrementalOnlyQueries: []
  }));
  const mock = `
    const statuses = ${JSON.stringify(statuses)};
    globalThis.setTimeout = (callback) => queueMicrotask(callback);
    globalThis.fetch = async (value) => {
      const { pathname } = new URL(value);
      if (pathname === ${JSON.stringify(failurePath)} && statuses.length) {
        return new Response(null, { status: statuses.shift() });
      }
      if (pathname === '/search/repositories') return Response.json({ items: [] });
      if (pathname.endsWith('/forks')) return Response.json([]);
      throw new Error('Unexpected API request: ' + pathname);
    };
  `;
  const result = await exec(process.execPath, ["--import", `data:text/javascript,${encodeURIComponent(mock)}`, path.join(root, "scripts/discover-github.mjs")], {
    env: { ...process.env, GITHUB_TOKEN: "test", GITHUB_SEARCH_DELAY_MS: "0", MAX_DISCOVERY_API_REQUESTS: String(budget) }
  }).catch((error) => error);
  const state = JSON.parse(await fs.readFile(statePath, "utf8"));
  return { result, state };
}

test("a GitHub 502 is retried and the completed search advances its watermark", async (t) => {
  const { result, state } = await runDiscovery(t, { failurePath: "/search/repositories", statuses: [502] });
  assert.equal(result.code, undefined);
  assert.match(result.stderr, /HTTP 502.*retrying/);
  assert.notEqual(state.incremental.watermark, watermark);
  assert.equal(state.lastRun.searchRequests, 2);
  assert.equal(state.lastRun.deferredByGitHub, false);
});

test("a persistent outage checkpoints the unfinished fork root", async (t) => {
  const { result, state } = await runDiscovery(t, { failurePath: "/repos/ps2/second/forks", statuses: [502, 502, 502] });
  assert.equal(result.code, undefined);
  assert.match(result.stderr, /still failing.*ps2\/second\/forks/);
  assert.deepEqual(state.forks.queue, ["ps2/second"]);
  assert.deepEqual(state.forks.scannedRepositories, ["ps2/first"]);
  assert.equal(state.incremental.watermark, watermark);
  assert.equal(state.lastRun.requests, 4);
  assert.equal(state.lastRun.deferredByGitHub, true);
});

test("discovery retries stay within the request budget", async (t) => {
  const { state } = await runDiscovery(t, { failurePath: "/search/repositories", statuses: [502, 502], budget: 3 });
  assert.equal(state.incremental.watermark, watermark);
  assert.equal(state.lastRun.requests, 3);
  assert.equal(state.lastRun.searchRequests, 1);
  assert.equal(state.lastRun.stoppedForRateLimit, true);
});

test("authentication errors still fail discovery without retries", async (t) => {
  const { result, state } = await runDiscovery(t, { failurePath: "/search/repositories", statuses: [401] });
  assert.equal(result.code, 1);
  assert.match(result.stderr, /GitHub API 401/);
  assert.equal(state.incremental.watermark, watermark);
  assert.equal(state.lastRun.searchRequests, 1);
});
