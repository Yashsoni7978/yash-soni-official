const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const publicDir = path.join(process.cwd(), 'public');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const assets = new Set();
// Get all public assets
function walkPublic(dir, prefix = '') {
    fs.readdirSync(dir).forEach(f => {
        let fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            walkPublic(fullPath, prefix + f + '/');
        } else {
            assets.add('/' + prefix + f);
        }
    });
}
walkPublic(publicDir);

const results = [];

walkDir(appDir, (filePath) => {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const relPath = path.relative(appDir, filePath);
    
    // 1. Check for broken assets
    const srcMatches = content.match(/src="(\/.*?)"/g) || [];
    const urlMatches = content.match(/url\('(\/.*?)'\)/g) || [];
    
    srcMatches.forEach(m => {
        const p = m.match(/"(\/.*?)"/)[1];
        if (!assets.has(p)) results.push({ file: relPath, error: `Broken image: ${p}` });
    });
    
    urlMatches.forEach(m => {
        const p = m.match(/'(\/.*?)'/)[1];
        if (!assets.has(p)) results.push({ file: relPath, error: `Broken texture: ${p}` });
    });
    
    // 2. Check for "Jaipur" in Hero/H1 of non-Jaipur national pages
    if (relPath.includes('anchor-in-') && !relPath.includes('anchor-in-jaipur') && !relPath.includes('rajasthan')) {
        const lines = content.split('\n');
        const heroSection = lines.slice(0, 150).join('\n');
        if (heroSection.includes('<span>JAIPUR</span>')) {
            results.push({ file: relPath, error: 'Hero badge still says JAIPUR' });
        }
        const h1Match = content.match(/<h1>(.*?)<\/h1>/s);
        if (h1Match && h1Match[1].includes('Jaipur')) {
            results.push({ file: relPath, error: 'H1 still mentions Jaipur' });
        }
    }
});

if (results.length === 0) {
    console.log("NO VOLTAGE ERRORS FOUND.");
} else {
    results.forEach(r => console.log(`${r.file}: ${r.error}`));
}
