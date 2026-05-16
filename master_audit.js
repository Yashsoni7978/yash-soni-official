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
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const appDir = path.join(__dirname, 'app');
const allFiles = walk(appDir);
const pageFiles = allFiles.filter(f => f.endsWith('page.jsx') || f.endsWith('page.tsx'));
const layoutFiles = allFiles.filter(f => f.endsWith('layout.jsx') || f.endsWith('layout.tsx'));

const results = {
  inventory: [],
  globalIssues: [],
  metrics: {
    totalImages: 0,
    rawImgTags: 0,
    imagesWithoutAlt: 0,
    inlineStyles: 0
  }
};

// Simple heuristic word counter (strips HTML)
function countWords(str) {
  const text = str.replace(/<[^>]+>/g, ' ').replace(/\{[^\}]+\}/g, ' ');
  const words = text.split(/\s+/).filter(w => w.length > 2 && /^[a-zA-Z]+$/.test(w));
  return words.length;
}

// 1. Parse Pages
pageFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let url = file.replace(appDir, '').replace(/\\/g, '/').replace(/\/page\.(jsx|tsx)$/, '');
  if (url === '') url = '/';

  // Attempt to find metadata in the layout file if it exists
  let layoutContent = '';
  const expectedLayout = path.join(path.dirname(file), 'layout.jsx');
  const expectedLayoutTsx = path.join(path.dirname(file), 'layout.tsx');
  if (fs.existsSync(expectedLayout)) layoutContent = fs.readFileSync(expectedLayout, 'utf-8');
  else if (fs.existsSync(expectedLayoutTsx)) layoutContent = fs.readFileSync(expectedLayoutTsx, 'utf-8');

  const fullContent = content + '\n' + layoutContent;

  const titleMatch = fullContent.match(/title:\s*["']([^"']+)["']/);
  const descMatch = fullContent.match(/description:\s*["']([^"']+)["']/);
  
  // Find H1s
  const h1Matches = [...content.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)];
  const h1Texts = h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // Count words
  const wordCount = countWords(content);

  // Schema presence
  const hasSchema = fullContent.includes('application/ld+json') || fullContent.includes('schema');

  // Next/Image usage
  const imgMatches = [...content.matchAll(/<img\s[^>]+>/gi)];
  const nextImgMatches = [...content.matchAll(/<Image\s[^>]+>/gi)];
  
  results.metrics.rawImgTags += imgMatches.length;
  results.metrics.totalImages += imgMatches.length + nextImgMatches.length;

  nextImgMatches.forEach(m => {
    if (!m[0].includes('alt=')) results.metrics.imagesWithoutAlt++;
  });
  imgMatches.forEach(m => {
    if (!m[0].includes('alt=')) results.metrics.imagesWithoutAlt++;
  });

  results.inventory.push({
    url,
    title: titleMatch ? titleMatch[1] : 'MISSING',
    description: descMatch ? descMatch[1] : 'MISSING',
    h1: h1Texts.length === 1 ? h1Texts[0] : (h1Texts.length > 1 ? 'MULTIPLE' : 'MISSING'),
    wordCount,
    hasSchema,
    mobileOk: true, // Assuming true for heuristic
    themeOk: !content.includes('bg-white'),
    issues: []
  });
});

// Write to JSON
fs.writeFileSync(path.join(__dirname, 'master_audit_raw.json'), JSON.stringify(results, null, 2));
console.log('Audit data extracted to master_audit_raw.json');
