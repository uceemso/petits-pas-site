import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const parts = [
  'src/assets/generated/illustration-choix-voiture/part-01.txt',
  'src/assets/generated/illustration-choix-voiture/part-02.txt',
  'src/assets/generated/illustration-choix-voiture/part-03.txt',
  'src/assets/generated/illustration-choix-voiture/part-04.txt',
  'src/assets/generated/illustration-choix-voiture/part-05.txt'
];
const output = 'public/images/illustration-choix-voiture.webp';

const encoded = (await Promise.all(
  parts.map((part) => readFile(resolve(root, part), 'utf8'))
)).join('').replace(/\s+/g, '');

await mkdir(dirname(resolve(root, output)), { recursive: true });
await writeFile(resolve(root, output), Buffer.from(encoded, 'base64'));
