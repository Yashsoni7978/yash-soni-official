const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('app/anchor-in-*/page.jsx');

let totalFixed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Check if we need to add import Image from 'next/image';
    if (content.includes('<img') || content.includes('<img\n')) {
        // Regex to match multi-line img tags in gallery
        const imgRegex = /<img\s+src=\{src\}\s+alt=\{`([^`]+)`\}\s*className="w-full\s+h-full\s+object-cover[^"]*"\s*\/>/g;
        
        // Let's do a more robust regex that catches all <img ...> in the gallery marquee
        const genericImgRegex = /<img\s+src=\{src\}[^>]+>/g;
        
        content = content.replace(genericImgRegex, (match) => {
            // extract alt
            let altMatch = match.match(/alt=\{`([^`]+)`\}/) || match.match(/alt="([^"]+)"/);
            let altRaw = altMatch ? altMatch[0] : 'alt=""';
            return `<Image src={src} ${altRaw} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />`;
        });
        
        // Also look for the parent div to add relative class
        const divRegex = /(<div[^>]+className="[^"]*w-[0-9]+\s+h-[0-9]+[^"]*overflow-hidden[^"]*shrink-0)(")/g;
        content = content.replace(divRegex, (match, p1, p2) => {
            if (!p1.includes('relative')) {
                return p1 + ' relative"';
            }
            return match;
        });
        
        // Add import if missing
        if (!content.includes('import Image from "next/image"') && !content.includes("import Image from 'next/image'")) {
            content = content.replace('"use client";\n', '"use client";\nimport Image from "next/image";\n');
        }

        hasChanges = true;
    }

    // Hero or other stray imgs
    const otherImgRegex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/>/g;
    content = content.replace(otherImgRegex, (match, src, alt, className) => {
        // usually scale section or hero
        return `<Image src="${src}" alt="${alt}" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />`;
    });

    if (hasChanges && content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content);
        console.log(`Fixed ${file}`);
        totalFixed++;
    }
});

console.log('Total files fixed: ' + totalFixed);
