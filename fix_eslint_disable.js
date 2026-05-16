const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all layout.jsx / layout.tsx files
let files = [];
try {
  const output = execSync('dir /s /b app\\layout.jsx app\\layout.tsx', { encoding: 'utf8' });
  files = output.trim().split('\n').filter(f => f.trim() !== '');
} catch (e) {
  // Ignore error if some patterns not found
  if (e.stdout) {
    files = e.stdout.trim().split('\n').filter(f => f.trim() !== '');
  }
}

let changedCount = 0;

for (const file of files) {
  const filePath = file.trim();
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the exact comment
  const newContent = content.replace(/\/\* eslint-disable @next\/next\/no-sync-scripts \*\/\r?\n?/g, '');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
    changedCount++;
  }
}

console.log(`Removed stale eslint-disable from ${changedCount} files.`);
