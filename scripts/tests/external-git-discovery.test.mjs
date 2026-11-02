import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
const exec = promisify(execFile);
const source = new URL("../", import.meta.url);

async function fixture(t, scenario, budget = 50) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ps2sp-discovery-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  for (const dir of ["scripts/lib", "config", "discovery", "data/resources"]) await fs.mkdir(path.join(root, dir), { recursive: true });
  for (const file of ["discover-external-git.mjs", "lib/external-git-client.mjs"]) await fs.copyFile(new URL(file, source), path.join(root, "scripts", file));
  const host = "https://healthy.example";
  const record = (repository, webBase = host) => ({ apiBase: `${webBase}/api/v1`, webBase, repository });
  const queue = [record("ps2/first"), record("ps2/bad", "https://down.example"), record("ps2/last")];
  const original = [{ category: "Preserved", links: [{ name: "Existing", url: "https://old.example/resource" }] }];
  await fs.writeFile(path.join(root, "config/external-git-sources.json"), JSON.stringify({ forgejoOrganizations: [{ ...record("unused", "https://down.example"), organization: "ps2" }] }));
  await fs.writeFile(path.join(root, "data/resources/external-git-live.json"), JSON.stringify(original));
  await fs.writeFile(path.join(root, "discovery/external-git-state.json"), JSON.stringify({ queue, queueCursor: 0, branchPage: { [`${host}/api/v1|ps2/first`]: 3 } }));
  await fs.writeFile(path.join(root, "mock.mjs"), `
    globalThis.fetch = async (value) => {
      const url = new URL(value);
      if (url.hostname === 'down.example') return new Response(null, { status: 521 });
      if (url.pathname.includes('/git/trees/')) {
        if (${JSON.stringify(scenario)} === 'tree-failure' && url.pathname.includes('/first/')) throw new DOMException('timeout', 'AbortError');
        return Response.json({ tree: [{ type: 'blob', path: 'tools/ps2/README.md' }] });
      }
      if (url.pathname.endsWith('/forks')) return Response.json([]);
      if (url.pathname.endsWith('/branches')) return Response.json(url.searchParams.get('page') === '1' ? [{ name: 'main', commit: { id: 'abc' } }] : []);
      return Response.json({ full_name: 'ps2/repo' });
    };
  `);
  const result = await exec(process.execPath, ["--import", pathToFileURL(path.join(root, "mock.mjs")).href, path.join(root, "scripts/discover-external-git.mjs")], { env: { ...process.env, MAX_EXTERNAL_GIT_REQUESTS: String(budget) } });
  const state = JSON.parse(await fs.readFile(path.join(root, "discovery/external-git-state.json")));
  const groups = JSON.parse(await fs.readFile(path.join(root, "data/resources/external-git-live.json")));
  assert.ok(groups.flatMap(g => g.links).some(link => link.url === original[0].links[0].url));
  return { state, groups, result };
}

test('seed host outage preserves existing resources and scans healthy queued repos', async (t) => {
  const { state, groups, result } = await fixture(t, 'success');
  assert.match(result.stderr, /host deferred/);
  assert.deepEqual(state.lastRun.failedHosts, ['https://down.example']);
  assert.equal(state.lastRun.treesScanned, 2);
  assert.equal(Object.keys(state.branchHeads).length, 2);
  assert.ok(groups.flatMap(g => g.links).some(link => link.url.includes('/ps2/last/src/branch/main/tools/ps2')));
});

test('tree outage does not cache failed head or advance its deep page', async (t) => {
  const { state } = await fixture(t, 'tree-failure');
  assert.deepEqual(state.branchHeads, {});
  assert.equal(state.branchPage['https://healthy.example/api/v1|ps2/first'], 3);
  assert.equal(state.lastRun.failedHosts.length, 2);
});

test('budget exhaustion during seeding still writes a checkpoint', async (t) => {
  const { state } = await fixture(t, 'success', 1);
  assert.equal(state.lastRun.requests, 1);
  assert.equal(state.lastRun.stoppedForBudget, true);
  assert.equal(state.queue.length, 3);
  assert.equal(state.queueCursor, 0);
});

test('mid-scan budget stop saves completed trees and retries the interrupted repo', async (t) => {
  const { state } = await fixture(t, 'success', 8);
  assert.equal(state.lastRun.requests, 8);
  assert.equal(state.lastRun.stoppedForBudget, true);
  assert.equal(state.queueCursor, 2);
  assert.equal(state.branchHeads['https://healthy.example/api/v1|ps2/first@main'], 'abc');
  assert.equal(state.branchHeads['https://healthy.example/api/v1|ps2/last@main'], undefined);
});
