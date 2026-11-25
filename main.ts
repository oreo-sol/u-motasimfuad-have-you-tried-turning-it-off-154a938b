import { mkdirSync, writeFileSync } from "node:fs";

const a = "Good news \u2014 I've escalated your case to our highest level: ";
const b = "me, tomorrow, with coffee and absolutely no new ideas.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b, "utf8");
