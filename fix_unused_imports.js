/**
 * fix_unused_imports.js
 * Runs ESLint to find all unused variables/imports, then surgically removes
 * the unused names from their import lines. Handles named imports only.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ─── Step 1: Get all ESLint unused-var findings ───────────────────────────────
console.log('🔍 Running ESLint to find all unused imports...\n');

let eslintOutput = '';
try {
  eslintOutput = execSync(
    'npx eslint app --ext .jsx,.tsx,.js,.ts --max-warnings=9999 --format json',
    { cwd: __dirname, encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
} catch (e) {
  // ESLint exits with code 1 when it finds issues; output is still in stdout
  eslintOutput = e.stdout || '';
}

if (!eslintOutput.trim()) {
  console.error('❌ No ESLint output received. Exiting.');
  process.exit(1);
}

const results = JSON.parse(eslintOutput);

// ─── Step 2: Build a map: filePath -> [unusedName, unusedName, ...] ──────────
const fileUnusedMap = {}; // { filePath: Set<string> }

for (const result of results) {
  for (const msg of result.messages) {
    if (msg.ruleId !== '@typescript-eslint/no-unused-vars') continue;

    // Extract the variable/import name from the message
    // Message format: "'Foo' is defined but never used" or "'Foo' is assigned a value but never used"
    const match = msg.message.match(/^'(.+?)' is (defined|assigned a value) but never used/);
    if (!match) continue;

    const name = match[1];
    const filePath = result.filePath;

    if (!fileUnusedMap[filePath]) fileUnusedMap[filePath] = new Set();
    fileUnusedMap[filePath].add(name);
  }
}

const affectedFiles = Object.keys(fileUnusedMap);
console.log(`📁 Found unused vars/imports in ${affectedFiles.length} files.\n`);

// ─── Step 3: For each file, remove unused names from import statements ────────
let totalFixed = 0;
let totalFilesChanged = 0;

for (const filePath of affectedFiles) {
  const unusedNames = fileUnusedMap[filePath];
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  for (const name of unusedNames) {
    // Match named imports: { Foo, Bar, Baz } — remove just the target name
    // Handles: ", Name" or "Name, " or "{ Name }" (sole import)
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern 1: "Name, " at start of named list
    content = content.replace(
      new RegExp(`\\b${escapedName},\\s*`, 'g'),
      ''
    );

    // Pattern 2: ", Name" anywhere in named list
    content = content.replace(
      new RegExp(`,\\s*\\b${escapedName}\\b`, 'g'),
      ''
    );

    // Pattern 3: Sole import "{ Name }" → remove entire import line
    content = content.replace(
      new RegExp(`^import\\s*\\{\\s*${escapedName}\\s*\\}\\s*from\\s*['"][^'"]+['"];?\\r?\\n`, 'gm'),
      ''
    );

    // Pattern 4: const/let/var Name = ... (unused local variable assignments)
    // Only remove simple single-line assignments that are flagged as unused
    content = content.replace(
      new RegExp(`^(\\s*)(const|let|var)\\s+${escapedName}\\s*=\\s*[^;\\n]+;?\\r?\\n`, 'gm'),
      (match) => {
        // Only remove if it's a standalone variable declaration (not destructuring)
        if (match.includes('{') || match.includes('[')) return match; // skip destructuring
        return '';
      }
    );
  }

  // Clean up empty import braces: "import { } from ..." → remove entire line
  content = content.replace(/^import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\r?\n/gm, '');

  // Clean up double commas that might have been left: { , Foo } or {Foo , , Bar}
  content = content.replace(/\{\s*,\s*/g, '{ ');
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/,\s*\}/g, ' }');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.relative(__dirname, filePath)} — removed: ${[...unusedNames].join(', ')}`);
    totalFilesChanged++;
    totalFixed += unusedNames.size;
  } else {
    console.log(`⚠️  Skipped (no change made): ${path.relative(__dirname, filePath)} — ${[...unusedNames].join(', ')}`);
  }
}

console.log(`\n🎉 Done! Removed ${totalFixed} unused imports/vars across ${totalFilesChanged} files.`);
