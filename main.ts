// Tell a Whole Story in 32 Characters
// Writes one Wi-Fi network name (the whole story) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NAME = "He Proposed, I Said Maybe";

// Count characters as code points, so the 32-character gate is measured
// the way a reader counts characters (not UTF-16 code units).
const charCount = [...NAME].length;

// The gate: UTF-8 text, 1-32 characters, not only whitespace.
if (charCount === 0) {
  throw new Error("name must not be empty");
}
if (charCount > 32) {
  throw new Error(`name is ${charCount} characters, over the 32 limit`);
}
if (NAME.trim().length === 0) {
  throw new Error("name must not be only whitespace");
}
if (NAME.includes("\n") || NAME.includes("\r")) {
  throw new Error("name must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, NAME, "utf8"); // no trailing newline

const back = readFileSync(outPath, "utf8");
if (back !== NAME) {
  throw new Error("verification failed: output is not byte-identical to the name");
}
if (back.endsWith("\n")) {
  throw new Error("verification failed: output has a trailing newline");
}

console.log(`Wrote ${charCount} characters to ${outPath}`);
