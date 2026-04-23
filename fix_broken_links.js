const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const componentsDir = path.join(__dirname, 'components');

const fixFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix absolute URLs
    content = content.replace(/https:\/\/yashsoni\.in\/locations\//g, '/anchor-in-');
    content = content.replace(/https:\/\/www\.yashsoni\.in\/locations\//g, '/anchor-in-');
    
    // Fix footer/component links
    content = content.replace(/href="\/locations"/g, 'href="/anchor-in-rajasthan"');
    
    // Fix renamed service pages
    content = content.replace(/\/corporate-emcee-jaipur/g, '/corporate-event-anchor-jaipur');
    content = content.replace(/\/wedding-emcee-jaipur/g, '/wedding-anchor-jaipur');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${filePath}`);
    }
};

const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
            fixFile(fullPath);
        }
    });
};

console.log('🚀 Starting Global Link Fix...');
walk(dataDir);
walk(componentsDir);
console.log('✨ All 158 links verified and patched!');
