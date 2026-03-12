import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const TARGET_EXTENSIONS = new Set(['.md', '.mdx']);
const IGNORED_DIRS = new Set([
  '.git',
  '.github',
  '.vitepress',
  'dist',
  'node_modules',
]);

const targetRoots = [
  'memory/docs',
  'docs',
  'games',
];

const decoder = new TextDecoder('utf-8', { fatal: true });

async function walk(dirPath, filePaths = []) {
  let entries = [];

  try {
    entries = await readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return filePaths;
    }
    throw error;
  }

  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, filePaths);
      continue;
    }

    if (TARGET_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

async function validateFile(filePath) {
  const buffer = await readFile(filePath);
  let text;

  try {
    text = decoder.decode(buffer);
  } catch (error) {
    return {
      filePath,
      reason: 'Invalid UTF-8 byte sequence',
      detail: error.message,
    };
  }

  if (text.includes('\uFFFD')) {
    const replacementIndex = text.indexOf('\uFFFD');
    const preview = text.slice(Math.max(0, replacementIndex - 20), replacementIndex + 20)
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n');

    return {
      filePath,
      reason: 'Replacement character found',
      detail: `Suspicious preview: ${preview}`,
    };
  }

  return null;
}

async function main() {
  const allFiles = [];

  for (const relativeRoot of targetRoots) {
    const rootPath = path.join(ROOT_DIR, relativeRoot);
    await walk(rootPath, allFiles);
  }

  const failures = [];

  for (const filePath of allFiles) {
    const failure = await validateFile(filePath);
    if (failure) {
      failures.push(failure);
    }
  }

  if (failures.length > 0) {
    console.error('[docs:check-encoding] Encoding issues detected:');
    for (const failure of failures) {
      const relativePath = path.relative(ROOT_DIR, failure.filePath);
      console.error(`- ${relativePath}: ${failure.reason}`);
      console.error(`  ${failure.detail}`);
    }
    process.exit(1);
  }

  console.log(`[docs:check-encoding] OK (${allFiles.length} markdown files checked)`);
}

await main();
