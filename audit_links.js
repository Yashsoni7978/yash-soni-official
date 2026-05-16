const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walk(filepath, filelist);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const allFiles = walk(path.join(__dirname, 'app')).concat(walk(path.join(__dirname, 'components')));
const validRoutes = new Set(['/', '/about', '/portfolio', '/locations', '/contact', '/privacy', '/terms', '/press']);

// Collect all valid routes from app directory
function collectRoutes(dir, baseRoute = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      collectRoutes(filepath, `${baseRoute}/${file}`);
    } else if (file === 'page.jsx' || file === 'page.tsx') {
      let route = baseRoute || '/';
      validRoutes.add(route);
    }
  }
}
collectRoutes(path.join(__dirname, 'app'));

// Add dynamic routes
validRoutes.add('/blog');
// We won't strictly check dynamic blog slugs here unless we parse data/blogs.js

const brokenLinks = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Find href="..." or href={'...'}
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let url = match[1];
    
    // Ignore external links, anchors, mailto, tel
    if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) {
      continue;
    }
    
    // Clean up url (remove query params, hash)
    let cleanUrl = url.split('?')[0].split('#')[0];
    
    // Remove trailing slash
    if (cleanUrl !== '/' && cleanUrl.endsWith('/')) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    // Special case for dynamic routes
    if (cleanUrl.startsWith('/blog/')) continue;

    if (!validRoutes.has(cleanUrl)) {
      brokenLinks.push({ file: path.relative(__dirname, file), url });
    }
  }
});

console.log(`Found ${brokenLinks.length} broken links.`);
brokenLinks.forEach(link => {
  console.log(`${link.file} -> ${link.url}`);
});
