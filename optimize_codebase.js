const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walk(filepath, filelist);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const allFiles = walk(path.join(__dirname, 'app')).concat(walk(path.join(__dirname, 'components')));

let updatedImageCount = 0;
let updatedStyleCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // 1. Optimize <Image /> tags
  // We look for <Image and check if it has quality={75}
  const imageRegex = /<Image\s([^>]+)>/g;
  content = content.replace(imageRegex, (match, props) => {
    let newProps = props;
    let modified = false;

    if (!newProps.includes('quality=')) {
      newProps += ' quality={75}';
      modified = true;
    }
    
    // Add sizes if it has fill, but let's just add it if it doesn't have sizes
    if (!newProps.includes('sizes=') && newProps.includes('fill')) {
      newProps += ' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"';
      modified = true;
    }

    if (modified) {
      updatedImageCount++;
      return `<Image ${newProps}>`;
    }
    return match;
  });

  // 2. Replace specific inline styles
  const goldGradientStyle = /style=\{\{\s*backgroundImage:\s*["']linear-gradient\(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C\)["'][^}]*\}\}/g;
  if (goldGradientStyle.test(content)) {
    content = content.replace(goldGradientStyle, 'className="gold-gradient-text"');
    updatedStyleCount++;
  }

  const absFillStyle = /style=\{\{\s*position:\s*["']absolute["'],\s*top:\s*0,\s*left:\s*0,\s*width:\s*["']100%["'],\s*height:\s*["']100%["']\s*\}\}/g;
  if (absFillStyle.test(content)) {
    content = content.replace(absFillStyle, 'className="abs-fill"');
    updatedStyleCount++;
  }

  if (content !== originalContent) {
    // If we replaced style={{...}} with className="...", we might have duplicate classNames.
    // Let's do a simple fix if className="..." className="..."
    content = content.replace(/className=(["'])([^"']+)["']\s+className=(["'])([^"']+)["']/g, 'className=$1$2 $4$3');
    fs.writeFileSync(file, content, 'utf-8');
  }
});

console.log(`Updated ${updatedImageCount} Image components.`);
console.log(`Updated ${updatedStyleCount} inline styles.`);
