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
    
    // Check if we need to add import Image from 'next/image';
    if (content.includes('<img') || content.includes('<img\n')) {
        // Find generic multi-line img tags
        const genericImgRegex = /<img\s*[\n\r\s]*src=\{src\}[^>]+>/g;
        
        content = content.replace(genericImgRegex, (match) => {
            let altMatch = match.match(/alt=\{`([^`]+)`\}/) || match.match(/alt="([^"]+)"/);
            let altRaw = altMatch ? altMatch[0] : 'alt=""';
            return `<Image src={src} ${altRaw} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />`;
        });

        // Add relative class to the parent div
        const divRegex = /(<div[^>]+className="[^"]*w-(?:56|full|72)\s+h-(?:72|full|96)[^"]*overflow-hidden[^"]*shrink-0)(")/g;
        content = content.replace(divRegex, (match, p1, p2) => {
            if (!p1.includes('relative')) {
                return p1 + ' relative"';
            }
            return match;
        });

        const secondDivRegex = /(<div[^>]+className="[^"]*shrink-0[^"]*overflow-hidden)(")/g;
        content = content.replace(secondDivRegex, (match, p1, p2) => {
            if (!p1.includes('relative')) return p1 + ' relative"';
            return match;
        });
        
        // Add import if missing
        if (!content.includes('import Image from "next/image"') && !content.includes("import Image from 'next/image'")) {
            content = content.replace('"use client";\n', '"use client";\nimport Image from "next/image";\n');
            content = content.replace('"use client"\n', '"use client";\nimport Image from "next/image";\n');
        }
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${filePath}`);
        totalFixed++;
    }
}

console.log('Total files fixed: ' + totalFixed);
