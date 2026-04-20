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
    
    // Replace any leftover <img .../> with <Image .../> for the gallery or hero.
    // Extremely aggressive regex to catch ANY remaining <img ... >
    const anyImgRegex = /<img\s+([^>]+)>/gi;
    
    content = content.replace(anyImgRegex, (match, attrs) => {
        // preserve src and alt
        let srcMatch = attrs.match(/src=\{([^}]+)\}/) || attrs.match(/src="([^"]+)"/);
        let src = srcMatch ? srcMatch[0] : 'src=""';
        
        let altMatch = attrs.match(/alt=\{`([^`]+)`\}/) || attrs.match(/alt="([^"]+)"/);
        let alt = altMatch ? altMatch[0] : 'alt=""';

        return `<Image ${src} ${alt} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />`;
    });

    if (content !== original) {
        // Enusre relative class on wrapper divs
        const divRegex = /(<div[^>]+className="[^"]*w(?:-56|-full|-72)\s+h(?:-72|-full|-96)[^"]*overflow-hidden[^"]*shrink-0)(".*?>)\s*<Image/g;
        content = content.replace(divRegex, (match, p1, p2) => {
            if (!p1.includes('relative')) {
                return p1 + ' relative' + p2 + ' <Image';
            }
            return match;
        });

        const secondDivRegex = /(<div[^>]+className="[^"]*shrink-0[^"]*overflow-hidden)(".*?>)\s*<Image/g;
        content = content.replace(secondDivRegex, (match, p1, p2) => {
            if (!p1.includes('relative')) {
                return p1 + ' relative' + p2 + ' <Image';
            }
            return match;
        });
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${filePath}`);
        totalFixed++;
    }
}

console.log('Total files forcefully fixed: ' + totalFixed);
