const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const dirsToScan = ['app', 'components', 'data'];

const fixFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix Ghost Links to /locations
    content = content.replace(/href="\/locations"/g, 'href="/anchor-in-rajasthan"');
    
    // Fix Ghost Links to /best-anchor-in-jaipur
    content = content.replace(/href="\/best-anchor-in-jaipur"/g, 'href="/anchor-in-jaipur"');
    
    // Fix Schema IDs and Canonicals in layout files
    content = content.replace(/https:\/\/yashsoni\.in\/best-anchor-in-jaipur/g, 'https://yashsoni.in/anchor-in-jaipur');
    content = content.replace(/https:\/\/yashsoni\.in\/locations/g, 'https://yashsoni.in/anchor-in-rajasthan');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Patched: ${path.relative(projectRoot, filePath)}`);
    }
};

const walk = (dir) => {
    const fullDir = path.join(projectRoot, dir);
    if (!fs.existsSync(fullDir)) return;
    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
        const fullPath = path.join(fullDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(path.join(dir, file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
            fixFile(fullPath);
        }
    });
};

console.log('🚀 Starting Comprehensive SEO Spiderweb Link Cleanup...');
dirsToScan.forEach(dir => walk(dir));
console.log('✨ Link integrity verification complete.');
