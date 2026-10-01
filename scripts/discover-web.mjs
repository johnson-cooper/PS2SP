import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_PATH = path.join(ROOT, "data", "resources", "ps2dev-forum-live.json");
const STATE_PATH = path.join(ROOT, "discovery", "web-state.json");

const PS2DEV_FORUM = "https://forums.ps2dev.org/viewforum.php?f=11";
const PAGE_SIZE = 50;
const USER_AGENT = "PS2SP-indexer/1.0 (+https://github.com/johnson-cooper/PS2SP)";

function decodeHtml(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function cleanText(value = "") {
  return decodeHtml(value.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function fetchHtml(url) {
  let lastError;

  for (let attempt = 1; attempt <= 2; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 75_000);

    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          "Accept": "text/html,application/xhtml+xml",
          "Accept-Language": "en-US,en;q=0.8",
          "Cache-Control": "no-cache"
        },
        redirect: "follow",
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const html = await response.text();
      if (html.length < 5_000) {
        throw new Error(`response unexpectedly small (${html.length} bytes)`);
      }
      return html;
    } catch (error) {
      lastError = error;
      console.warn(`Fetch attempt ${attempt}/2 failed for ${url}: ${error.message}`);
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 5_000));
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError ?? new Error("request failed");
}

function parseForumPage(html) {
  const topics = new Map();
  let maxStart = 0;

  const anchorPattern = /<a\b[^>]*href=(?:"([^"]+)"|'([^']+)')[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorPattern.exec(html))) {
    const href = decodeHtml(match[1] ?? match[2] ?? "");
    const title = cleanText(match[3] ?? "");
    if (!href || !title) continue;

    try {
      const parsed = new URL(href, PS2DEV_FORUM);

      if (parsed.pathname.endsWith("/viewforum.php") && parsed.searchParams.get("f") === "11") {
        const start = Number(parsed.searchParams.get("start") ?? 0);
        if (Number.isFinite(start)) maxStart = Math.max(maxStart, start);
      }

      if (!parsed.pathname.endsWith("/viewtopic.php")) continue;
      if (parsed.searchParams.get("f") !== "11") continue;

      const topicId = parsed.searchParams.get("t");
      if (!topicId || !/^\d+$/.test(topicId)) continue;
      if (/^(go to last post|last post|next|previous|\d+)$/i.test(title)) continue;

      const canonical = `https://forums.ps2dev.org/viewtopic.php?t=${topicId}`;
      const current = topics.get(topicId);
      if (!current || title.length > current.name.length) {
        topics.set(topicId, {
          name: `PS2Dev Forums — ${title}`,
          url: canonical,
          keywords: [
            "PS2",
            "PlayStation 2",
            "PS2Dev",
            "forum",
            "development",
            "archive"
          ]
        });
      }
    } catch {
      // Ignore malformed forum links.
    }
  }

  return { topics: [...topics.values()], maxStart };
}

function canonicalKey(url) {
  try {
    const parsed = new URL(url);
    const topicId = parsed.searchParams.get("t");
    if (parsed.hostname === "forums.ps2dev.org" && parsed.pathname.endsWith("/viewtopic.php") && topicId) {
      return `https://forums.ps2dev.org/viewtopic.php?t=${topicId}`;
    }
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return String(url).replace(/\/$/, "");
  }
}

const defaultGroups = [{
  category: "PS2Dev Forums — Live Deep Index",
  description: "Automatically rotating index of individual PS2 Development topics from forums.ps2dev.org. The newest page is checked every run while historical pages are progressively backfilled.",
  links: []
}];

const groups = await readJson(OUTPUT_PATH, defaultGroups);
const group = groups[0] ?? defaultGroups[0];
groups[0] = group;
if (!Array.isArray(group.links)) group.links = [];

const state = await readJson(STATE_PATH, {
  version: 1,
  ps2devForum: {
    nextStart: PAGE_SIZE,
    maxStart: 2100,
    lastRun: null
  }
});
state.version = 1;
state.ps2devForum ??= { nextStart: PAGE_SIZE, maxStart: 2100, lastRun: null };

const requestedStart = Math.max(PAGE_SIZE, Number(state.ps2devForum.nextStart) || PAGE_SIZE);
const targets = [0, requestedStart];
const found = [];
let observedMaxStart = Number(state.ps2devForum.maxStart) || 2100;
let latestSucceeded = false;
let historicalSucceeded = false;

for (let index = 0; index < targets.length; index++) {
  const start = targets[index];
  const url = start === 0 ? PS2DEV_FORUM : `${PS2DEV_FORUM}&start=${start}`;
  try {
    const html = await fetchHtml(url);
    const parsed = parseForumPage(html);
    if (parsed.topics.length === 0) {
      throw new Error("page parsed but no PS2 Development topics were found");
    }

    found.push(...parsed.topics);
    observedMaxStart = Math.max(observedMaxStart, parsed.maxStart);
    if (start === 0) latestSucceeded = true;
    else historicalSucceeded = true;
    console.log(`PS2Dev forum page start=${start}: ${parsed.topics.length} topics`);
  } catch (error) {
    console.warn(`PS2Dev forum page start=${start} failed: ${error.message}`);
  }

  if (index + 1 < targets.length) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
}

const linksByKey = new Map(group.links.map((link) => [canonicalKey(link.url), link]));
let added = 0;
let refreshed = 0;

for (const link of found) {
  const key = canonicalKey(link.url);
  const existing = linksByKey.get(key);
  if (existing) {
    if (existing.name !== link.name && link.name.length > existing.name.length) {
      existing.name = link.name;
      refreshed++;
    }
    existing.keywords = [...new Set([...(existing.keywords ?? []), ...(link.keywords ?? [])])];
    continue;
  }

  group.links.push(link);
  linksByKey.set(key, link);
  added++;
}

group.links.sort((a, b) => {
  const aId = Number(new URL(a.url).searchParams.get("t") ?? 0);
  const bId = Number(new URL(b.url).searchParams.get("t") ?? 0);
  return bId - aId || a.name.localeCompare(b.name);
});

const next = historicalSucceeded
  ? (requestedStart + PAGE_SIZE > observedMaxStart ? PAGE_SIZE : requestedStart + PAGE_SIZE)
  : requestedStart;

state.ps2devForum = {
  nextStart: next,
  maxStart: observedMaxStart,
  lastRun: new Date().toISOString(),
  latestSucceeded,
  historicalSucceeded
};

await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(groups, null, 2)}\n`);
await fs.writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);

console.log(
  `PS2Dev web discovery complete: ${added} added, ${refreshed} refreshed, ${group.links.length} live-indexed; latest=${latestSucceeded ? "ok" : "failed"}, historical=${historicalSucceeded ? "ok" : "failed"}, next historical start=${next}/${observedMaxStart}.`
);
