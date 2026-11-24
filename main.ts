import fs from 'node:fs';
const ENTRY = "I pushed to prod because staging looked lonely. On the bright side, the outage gave everyone a lovely coffee break.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
