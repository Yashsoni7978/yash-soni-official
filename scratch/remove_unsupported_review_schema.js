const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const appDir = path.join(__dirname, '../app');
const files = walk(appDir);

let count = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Remove aggregateRating in multiline JS object definition:
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ...
  // },
  content = content.replace(/aggregateRating:\s*\{\s*"@type":\s*"AggregateRating"[^}]*\},?\n?/g, '');
  content = content.replace(/"aggregateRating":\s*\{\s*"@type":\s*"AggregateRating"[^}]*\},?\n?/g, '');

  // 2. Remove aggregateRating inline:
  // aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "50", bestRating: "5" },
  content = content.replace(/aggregateRating:\s*\{\s*"@type":\s*"AggregateRating"[^}]*\},?\s*/g, '');
  content = content.replace(/"aggregateRating":\s*\{\s*"@type":\s*"AggregateRating"[^}]*\},?\s*/g, '');

  // 3. In app/page.jsx remove reviewSchema injection in Head/Script if present, or remove reviewSchema definition
  content = content.replace(/\/\/\s*Review schema using existing REVIEWS data\nconst reviewSchema =[\s\S]*?\n\};\n?/g, '');
  content = content.replace(/<script[^>]*dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(reviewSchema\)[\s\S]*?\/>\n?/g, '');

  // 4. Remove standalone reviewRating / reviewArray in schemas if present in JSON-LD
  content = content.replace(/reviewRating:\s*\{\s*"@type":\s*"Rating"[^}]*\},?\n?/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log(`Cleaned schema in: ${path.relative(appDir, filePath)}`);
  }
});

// Also check layout.tsx
const layoutPath = path.join(__dirname, '../app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  let content = fs.readFileSync(layoutPath, 'utf8');
  let original = content;
  content = content.replace(/aggregateRating:\s*\{\s*"@type":\s*"AggregateRating"[^}]*\},?\n?/g, '');
  if (content !== original) {
    fs.writeFileSync(layoutPath, content, 'utf8');
    count++;
    console.log('Cleaned layout.tsx schema');
  }
}

console.log(`Total files cleaned: ${count}`);
