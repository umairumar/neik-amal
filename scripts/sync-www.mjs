import { mkdir, copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
const vendor = join(www, 'vendor');

async function fileExists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

await mkdir(vendor, { recursive: true });
await mkdir(join(www, 'icons'), { recursive: true });
await copyFile(join(root, 'index.html'), join(www, 'index.html'));

for (const file of ['react.production.min.js', 'react-dom.production.min.js']) {
  const dest = join(vendor, file);
  if (!(await fileExists(dest))) {
    const pkg = file.startsWith('react-dom') ? 'react-dom@18' : 'react@18';
    const url = `https://cdn.jsdelivr.net/npm/${pkg}/umd/${file}`;
    execSync(`curl -fsSL -o "${dest}" "${url}"`, { stdio: 'inherit' });
  }
}

console.log('Synced index.html and vendor bundles into www/');
