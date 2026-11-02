import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
const exec = promisify(execFile);
const script = fileURLToPath(new URL("../audit-build-assets.mjs", import.meta.url));

test("build audit accepts the exact limit and rejects a nested asset one byte over", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ps2sp-assets-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  await fs.mkdir(path.join(root, "dist", "api"), { recursive: true });
  const file = path.join(root, "dist", "api", "large.json");
  await fs.writeFile(file, "");
  await fs.truncate(file, 25 * 1024 * 1024);
  const passed = await exec(process.execPath, [script], { cwd: root });
  assert.match(passed.stdout, /audit passed/);
  await fs.truncate(file, 25 * 1024 * 1024 + 1);
  await assert.rejects(exec(process.execPath, [script], { cwd: root }), (error) => {
    assert.equal(error.code, 1);
    assert.match(error.stderr, /large.json.*26214401 bytes/);
    return true;
  });
});
