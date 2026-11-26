// Famous Last Words at 1 Percent
// make.fun bounty: u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// Writes one farewell line from a dying phone, exactly one line, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FAREWELL =
  "Goodbye, cruel world — I lasted longer than your New Year resolutions, and all I got was this lousy low-power mode.";

// The gag is the phone's complaint: it outlasted the resolutions and
// its only reward is low-power mode. Dramatic farewell, petty grievance.
// The gate allows 1 to 199 characters; refuse to emit an over-long line.
if (FAREWELL.length > 199) {
  throw new Error(`farewell is ${FAREWELL.length} characters, over the 199 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FAREWELL, "utf8");
