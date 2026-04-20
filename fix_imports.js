const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const dirs = fs.readdirSync(appDir).filter(f => f.startsWith('anchor-in-'));

let totalFixed = 0;

for (const dir of dirs) {
    const filePath = path.join(appDir, dir, 'page.jsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (content.includes('<Image') || content.includes('<Image ')) {
        const hasImport = content.includes('import Image from "next/image"') || content.includes("import Image from 'next/image'");
        if (!hasImport) {
            content = content.replace('"use client";', '"use client";\nimport Image from "next/image";');
            // Check if it doesn't have semicolon
            if (content === original) {
                content = content.replace('"use client"', '"use client";\nimport Image from "next/image";');
            }
        }
    }
    
    // Alwar fix: if next/image is imported as something else? or not at all.
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Added missing next/image import to ${filePath}`);
        totalFixed++;
    }
}

console.log('Fixed imports: ' + totalFixed);
