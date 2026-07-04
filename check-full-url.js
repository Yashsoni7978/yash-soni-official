const fs = require('fs');
const path = require('path');

let results = [];

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('FULL_URL')) {
        const hasDeclaration = /const\s+FULL_URL\s*=|let\s+FULL_URL\s*=|var\s+FULL_URL\s*=/.test(content);
        const hasImport = /import\s+.*FULL_URL.*from/.test(content);
        
        if (hasDeclaration || hasImport) {
            results.push(`- ${filePath}: Properly declared/imported`);
        } else {
            results.push(`- ${filePath}: **CAUSING AN ERROR** (Used but not declared)`);
        }
    }
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
            walk(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            checkFile(filePath);
        }
    });
}

walk('.');
console.log(results.join('\n'));
