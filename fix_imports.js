const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('import Link from "next/link";import React')) {
        content = content.replace('import Link from "next/link";import React', 'import Link from "next/link";\nimport React');
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed formatting in ${fullPath}`);
      }
      if (content.includes('import Link from "next/link";import Image')) {
        content = content.replace('import Link from "next/link";import Image', 'import Link from "next/link";\nimport Image');
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed formatting in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'app'));
