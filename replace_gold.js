const fs = require('fs');
const path = require('path');

const gradient = "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)";

function processDirectory(directory) {
    let fixedCount = 0;
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            fixedCount += processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Replace double quote version
            content = content.replace(/"url\('\/gold-texture\.webp'\)"/g, `"${gradient}"`);
            content = content.replace(/"url\('\/gold-texture\.webp'\)"/g, `"${gradient}"`);
            
            // Replace single quote version if it exists
            content = content.replace(/'url\(\\"\/gold-texture\.webp\\"\)'/g, `'${gradient}'`);
            
            // Replace just the string if it's somehow different
            content = content.replace(/url\('\/gold-texture\.webp'\)/g, gradient);

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`Replaced gradient in: ${fullPath}`);
                fixedCount++;
            }
        }
    }
    return fixedCount;
}

const totalFixed = processDirectory(path.join(__dirname, 'app'));
console.log(`Total files updated with new pure CSS gold gradient: ${totalFixed}`);
