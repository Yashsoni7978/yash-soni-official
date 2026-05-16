const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walk(filepath, filelist);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const allFiles = walk(path.join(__dirname, 'app')).concat(walk(path.join(__dirname, 'components')));

let fixedCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // We need to fix cases where there are multiple className props on a single JSX element.
  // Example: `className={\`bg-clip-text text-transparent bg-cover bg-center \${className || ""}\`}\n    className="gold-gradient-text"`
  
  // This is a known result of my previous script which replaced `style={{...}}` with `className="..."`.
  // The simplest fix is to find `className="gold-gradient-text"` and `className="abs-fill"` and merge them into the existing className prop if it exists, or just use string manipulation since there are only 31 files.
  
  // Actually, let's just find `className={something} className="gold-gradient-text"` and fix it.
  
  // Regex to find duplicate classNames spanning newlines:
  // `className={...} \n className="..."`
  content = content.replace(/className=\{([^}]+)\}\s*className="([^"]+)"/g, 'className={`$1 $2`}');
  content = content.replace(/className="([^"]+)"\s*className=\{([^}]+)\}/g, 'className={`$1 $2`}');
  content = content.replace(/className="([^"]+)"\s*className="([^"]+)"/g, 'className="$1 $2"');
  
  // Fix the specific case in GoldText.jsx and contact/page.jsx
  // `className={\`bg-clip-text ... \${className}\`}\n    className="gold-gradient-text"`
  const complexRegex = /className=\{([^}]+)\}\s+className="([^"]+)"/g;
  content = content.replace(complexRegex, 'className={`${$1} $2`}');

  // Let's do a manual pass for the specific known cases if regex missed them:
  if (content.includes('className="gold-gradient-text"')) {
     const splitContent = content.split('<');
     for (let i = 0; i < splitContent.length; i++) {
        if (splitContent[i].includes('className=') && splitContent[i].includes('className="gold-gradient-text"')) {
           // If a single tag has multiple classNames
           const classMatches = [...splitContent[i].matchAll(/className=(\{.*?\}|"[^"]+")/gs)];
           if (classMatches.length > 1) {
              // It has multiple classNames! Let's manually merge them.
              let newClassStr = '';
              for (const match of classMatches) {
                 let val = match[1];
                 if (val.startsWith('"')) {
                    val = val.slice(1, -1);
                 } else if (val.startsWith('{`') && val.endsWith('`}')) {
                    val = val.slice(2, -2);
                 } else if (val.startsWith('{') && val.endsWith('}')) {
                    val = `\${${val.slice(1, -1)}}`;
                 }
                 newClassStr += val + ' ';
              }
              // Replace all old classNames with nothing
              for (const match of classMatches) {
                 splitContent[i] = splitContent[i].replace(match[0], '');
              }
              // Add the merged className at the end of the tag
              // Wait, the tag might not end immediately, but we can just append it before `>` or `/>`
              splitContent[i] = splitContent[i].replace(/>/, ` className={\`${newClassStr.trim()}\`}>`);
           }
        }
     }
     content = splitContent.join('<');
  }

  // Check abs-fill as well
  if (content.includes('className="abs-fill"')) {
     const splitContent = content.split('<');
     for (let i = 0; i < splitContent.length; i++) {
        if (splitContent[i].includes('className=') && splitContent[i].includes('className="abs-fill"')) {
           const classMatches = [...splitContent[i].matchAll(/className=(\{.*?\}|"[^"]+")/gs)];
           if (classMatches.length > 1) {
              let newClassStr = '';
              for (const match of classMatches) {
                 let val = match[1];
                 if (val.startsWith('"')) {
                    val = val.slice(1, -1);
                 } else if (val.startsWith('{`') && val.endsWith('`}')) {
                    val = val.slice(2, -2);
                 } else if (val.startsWith('{') && val.endsWith('}')) {
                    val = `\${${val.slice(1, -1)}}`;
                 }
                 newClassStr += val + ' ';
              }
              for (const match of classMatches) {
                 splitContent[i] = splitContent[i].replace(match[0], '');
              }
              splitContent[i] = splitContent[i].replace(/>/, ` className={\`${newClassStr.trim()}\`}>`);
           }
        }
     }
     content = splitContent.join('<');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with duplicate classNames.`);
