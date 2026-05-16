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

let fixedCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Fix the invalid JSX created by the previous script:
  // e.g. `<Image ... / quality={75}>` -> `<Image ... quality={75} />`
  // and `<Image ... / quality={75} sizes="...">` -> `<Image ... quality={75} sizes="..." />`
  // Basically if there's a `/` before `quality=` or `sizes=`, move it to the end before `>`.

  // Let's use a simpler approach: 
  // Find all `<Image ...>` tags
  const imageRegex = /<Image\s([^>]+)>/g;
  content = content.replace(imageRegex, (match, props) => {
    // If props ends with / or has / somewhere before the end that shouldn't be there.
    // Wait, the issue is literally the `/` being followed by `quality={75}` or `sizes=...`
    // So let's just strip all `/` from the end of props, then append `/>` at the very end.
    
    // Actually, `<Image` tags MUST be self-closing in Next.js, unless they have children (which they don't).
    // Let's remove the trailing `/` if it's there (even if it's buried before quality)
    let cleanProps = props.replace(/\/\s*quality=\{75\}/, 'quality={75}').replace(/\/\s*sizes="/, 'sizes="');
    
    // Now if the cleanProps has a `/` at the very end, that's fine.
    // If it doesn't, we add it. Wait, the original match ends with `>`.
    
    if (cleanProps.endsWith('/')) {
      return `<Image ${cleanProps.slice(0, -1).trim()} />`;
    } else {
      // It might have ended with something else
      // We know it needs to be self-closing.
      // Remove any trailing slashes just in case, then add `/>`
      cleanProps = cleanProps.replace(/\/$/, '').trim();
      return `<Image ${cleanProps} />`;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);
