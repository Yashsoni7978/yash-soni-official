const fs = require('fs');
const path = require('path');

const folders = ['data', 'components'];
const replacements = [
  { search: /https:\/\/yashsoni\.in\/locations\//g, replace: '/anchor-in-' },
  { search: /https:\/\/www\.yashsoni\.in\/locations\//g, replace: '/anchor-in-' },
  { search: /href="\/locations"/g, replace: 'href="/anchor-in-rajasthan"' }
];

let totalReplacements = 0;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let fileReplacementCount = 0;
      
      replacements.forEach(r => {
        const matches = content.match(r.search);
        if (matches) {
          fileReplacementCount += matches.length;
          content = content.replace(r.search, r.replace);
        }
      });
      
      if (fileReplacementCount > 0) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}: ${fileReplacementCount} replacements`);
        totalReplacements += fileReplacementCount;
      }
    }
  });
}

const baseDir = 'c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main';

folders.forEach(f => {
  const dirPath = path.join(baseDir, f);
  if (fs.existsSync(dirPath)) {
    processDir(dirPath);
  }
});

console.log(`Total replacements: ${totalReplacements}`);
