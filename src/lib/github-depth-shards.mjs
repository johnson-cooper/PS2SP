// The GitHub depth index grows every hour. A single JSON file crossed GitHub's
// 100 MB per-file push limit, so the index is stored as a fixed number of
// shards. A link's shard is chosen from a hash of its canonical URL, so a run
// only rewrites the shards that actually gained or changed links.

export const GITHUB_DEPTH_SHARD_COUNT = 32;

// GitHub warns at 50 MB and rejects at 100 MB. Fail the run well before that
// so the fix is raising GITHUB_DEPTH_SHARD_COUNT, not a rejected push.
export const GITHUB_DEPTH_SHARD_MAX_BYTES = 40 * 1024 * 1024;

export function canonicalDepthUrl(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(value).replace(/\/$/, "");
  }
}

// FNV-1a, 32-bit: stable across Node versions and platforms.
function hash(text) {
  let value = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 0x01000193) >>> 0;
  }
  return value;
}

export function depthShardIndex(url, count = GITHUB_DEPTH_SHARD_COUNT) {
  return hash(canonicalDepthUrl(url)) % count;
}

export function depthShardName(index) {
  return `shard-${String(index).padStart(2, "0")}.json`;
}

const byName = (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" });

// Every shard carries every group (possibly with no links) so the group order
// and descriptions survive a round trip.
export function shardDepthGroups(groups, count = GITHUB_DEPTH_SHARD_COUNT) {
  const shards = Array.from({ length: count }, () =>
    groups.map((group) => ({ category: group.category, description: group.description, links: [] }))
  );
  groups.forEach((group, groupIndex) => {
    for (const link of group.links ?? []) {
      shards[depthShardIndex(link.url, count)][groupIndex].links.push(link);
    }
  });
  for (const shard of shards) {
    for (const group of shard) group.links.sort(byName);
  }
  return shards;
}

// Rebuild one group per category, links sorted by name: the same shape the
// single-file index had.
export function mergeDepthShards(shards) {
  const groups = [];
  const byCategory = new Map();
  for (const shard of shards) {
    for (const group of shard) {
      let merged = byCategory.get(group.category);
      if (!merged) {
        merged = { category: group.category, description: group.description, links: [] };
        byCategory.set(group.category, merged);
        groups.push(merged);
      }
      for (const link of group.links ?? []) merged.links.push(link);
    }
  }
  for (const group of groups) group.links.sort(byName);
  return groups;
}

export function serializeDepthShard(shard) {
  return `${JSON.stringify(shard, null, 2)}\n`;
}
