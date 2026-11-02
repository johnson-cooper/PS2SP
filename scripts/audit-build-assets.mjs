import fs from "node:fs/promises";
import path from "node:path";

const limit = 25 * 1024 * 1024;
const oversized = [];
async function inspect(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await inspect(file);
    else if (entry.isFile()) {
      const { size } = await fs.stat(file);
      if (size > limit) oversized.push({ file, size });
    }
  }
}
await inspect("dist");
if (oversized.length) {
  for (const { file, size } of oversized) console.error(`::error::Cloudflare Pages asset exceeds 25 MiB: ${file} (${size} bytes)`);
  process.exitCode = 1;
} else {
  console.log("Cloudflare Pages asset size audit passed (all files <= 25 MiB).");
}
