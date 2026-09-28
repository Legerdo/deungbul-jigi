import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = resolve(projectRoot, 'dist');
const docsDirectory = resolve(projectRoot, 'docs');

if (relative(projectRoot, docsDirectory) !== 'docs') {
  throw new Error('Refusing to replace a Pages directory outside the project root.');
}
if (!existsSync(resolve(distDirectory, 'index.html'))) {
  throw new Error('Build output is missing. Run npm run build first.');
}

rmSync(docsDirectory, { recursive: true, force: true });
mkdirSync(docsDirectory, { recursive: true });
cpSync(distDirectory, docsDirectory, { recursive: true });
writeFileSync(resolve(docsDirectory, '.nojekyll'), '');
console.log('GitHub Pages files are ready in docs/.');
