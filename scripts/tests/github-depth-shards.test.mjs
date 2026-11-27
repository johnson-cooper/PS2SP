import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  GITHUB_DEPTH_SHARD_MAX_BYTES,
  depthShardIndex,
  mergeDepthShards,
  shardDepthGroups
} from "../../src/lib/github-depth-shards.mjs";

const groups = [
  { category: "B", description: "b", links: [
    { name: "zeta", url: "https://github.com/o/z" },
    { name: "Alpha", url: "https://github.com/o/a/" }
  ] },
  { category: "A", description: "a", links: [] }
];

test("depth shards round-trip to one sorted group per category", () => {
  const shards = shardDepthGroups(groups, 4);
  assert.equal(shards.length, 4);
  for (const shard of shards) assert.deepEqual(shard.map((g) => g.category), ["B", "A"]);
  assert.deepEqual(mergeDepthShards(shards), [
    { category: "B", description: "b", links: [groups[0].links[1], groups[0].links[0]] },
    { category: "A", description: "a", links: [] }
  ]);
});

test("a link's shard depends only on its canonical URL", () => {
  assert.equal(depthShardIndex("https://github.com/o/a/"), depthShardIndex("https://github.com/o/a#x"));
  assert.ok(depthShardIndex("https://github.com/o/a") < 32);
});

test("committed depth shards stay under the per-file budget", async () => {
  const root = fileURLToPath(new URL("../../", import.meta.url));
  const dir = path.join(root, "data", "resources", "github-depth-live");
  const files = (await fs.readdir(dir)).filter((name) => name.endsWith(".json"));
  assert.ok(files.length > 0);
  for (const file of files) {
    const { size } = await fs.stat(path.join(dir, file));
    assert.ok(size <= GITHUB_DEPTH_SHARD_MAX_BYTES, `${file} is ${size} bytes`);
  }
  await assert.rejects(fs.stat(path.join(root, "data", "resources", "github-depth-live.json")), { code: "ENOENT" });
});
