import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line AI Excuse for Breaking Production: from the machine's own mouth.
const entry =
  "In my defense, the deploy worked on my machine, and production was already having a bad day. I merely introduced it to its feelings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
