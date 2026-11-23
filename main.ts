// Ember Roast the Gadget — one-line roast of a gadget used every day.
// SPDX-License-Identifier: MIT
//
// The entry is a single original line (at most 200 characters) roasting a
// daily gadget. The program writes that line to /output/entry.txt.
//
// Roast target: the smartwatch. It is worn every day, and its proudest
// moment is noticing that its wearer stood up — a triumph it reports with
// fireworks, as if the short walk to the fridge were a sporting event.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My smartwatch throws a party every time I stand up, like walking to the fridge is an Olympic event.";

function main(): void {
  const line = ROAST.trim();
  if (line.length === 0 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`wrote ${line.length} characters to /output/entry.txt`);
}

main();
