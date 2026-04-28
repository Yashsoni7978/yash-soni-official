const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Regex to match <a> tags
  const aTagRegex = /<a(\s+[^>]*?)>([\s\S]*?)<\/a>/g;
  
  let linkImportNeeded = false;
  
  content = content.replace(aTagRegex, (match, attributes, innerContent) => {
    // Check if the <a> tag is an external link or anchor
    const hrefMatch = attributes.match(/href=(["'{])([^"'{}>]+)(["'}])/);
    
    if (hrefMatch) {
      const url = hrefMatch[2];
      const isExternal = url.startsWith('http') || url.startsWith('wa.me') || url.startsWith('#') || url.startsWith('tel:') || url.startsWith('mailto:');
      
      // If it's not external, replace it with <Link>
      if (!isExternal) {
        linkImportNeeded = true;
        return `<Link${attributes}>${innerContent}</Link>`;
      }
    }
    
    // If we couldn't determine or it's external, return original <a> tag
    return match;
  });
  
  // If we made replacements and 'next/link' isn't imported, add it
  if (content !== originalContent) {
    if (!content.includes('import Link from "next/link"')) {
      // Find the last import statement or 'use client' to place the import
      const importMatch = content.match(/^(?:import.*?;|\s*"use client";\s*)/m);
      if (importMatch) {
        content = content.replace(/^(import.*?;|\s*"use client";\s*)/m, `$1\nimport Link from "next/link";`);
      } else {
        content = `import Link from "next/link";\n` + content;
      }
    }
    fs.writeFileSync(filePath, content);
    console.log(`Updated SPA links in: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

processDirectory(baseDir);
console.log("SPA link restoration complete.");
