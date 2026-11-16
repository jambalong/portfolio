import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const DIST = 'dist';
const TEXT = new Set(['.html', '.xml', '.js', '.css', '.json', '.txt', '.svg']);
// Private patterns, one per line, in a file that is never committed.
// John Alvin's employer name lives there so it is not written anywhere in the repo.
const LOCAL = '.forbidden.local';
const localPatterns = existsSync(LOCAL)
  ? readFileSync(LOCAL, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
      .map((l) => new RegExp(l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'))
  : [];
if (localPatterns.length === 0) console.warn(`check-dist: no ${LOCAL} file, employer name not checked`);

const FORBIDDEN = [
  ...localPatterns,
  /software engineer/i, /support engineer/i,
  /open to work/i, /available for work/i, /right team/i,
  /engineering role/i, /jobtitle/i,
];
// An old post addresses "aspiring software engineers" as a group. See SPEC 0.5.
const ALLOW = [{ file: 'blog/my-approach-to-self-study/index.html', pattern: /software engineer/i }];
// Em dashes are banned in site copy. Individual posts are John Alvin's own writing and are skipped.
const isPost = (f) => /^blog\/[^/]+\/index\.html$/.test(f);

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);

let failures = 0;
for (const path of walk(DIST)) {
  if (!TEXT.has(extname(path))) continue;
  const file = relative(DIST, path).replaceAll('\\', '/');
  const text = readFileSync(path, 'utf8');
  for (const pattern of FORBIDDEN) {
    if (!pattern.test(text)) continue;
    if (ALLOW.some((a) => a.file === file && String(a.pattern) === String(pattern))) continue;
    const label = localPatterns.includes(pattern) ? 'a private pattern' : String(pattern);
    console.error(`FORBIDDEN ${label} in ${file}`);
    failures++;
  }
  if (extname(path) === '.html' && !isPost(file) && text.includes(String.fromCharCode(8212))) {
    console.error(`EM DASH in ${file}`);
    failures++;
  }
}
console.log(failures === 0 ? 'check-dist: clean' : `check-dist: ${failures} problem(s)`);
process.exit(failures === 0 ? 0 : 1);
