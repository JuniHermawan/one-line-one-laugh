// One Line, One Laugh — make.fun entry.
// Writes a single funny line (<=140 chars, one line) to /output/entry.txt,
// the text the judge compares two at a time.
//
// v5 FINAL — judged as a stranger against the published brief:
//   v2 (bartender) beats v3 (doctor: mild observation, bills = stress) and
//   v4 (clouds: clever image but only a smile) on criterion 2: a real turn.
//   "Something strong" reframes from a drink to a resignation letter, and
//   "poured" — the bartender's own verb — applied to a letter makes the
//   substitution absurd. 80 chars, one line, fresh (no AI-gadget cliche),
//   clear on first read, every word earning its place.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked the bartender for something strong; he poured me his resignation letter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
