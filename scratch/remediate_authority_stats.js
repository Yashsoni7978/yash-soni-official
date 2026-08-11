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

let modifiedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Fix years on stage / experience: val: "8" -> val: "5", val: "4" -> val: "5"
  content = content.replace(/val:\s*"8"/g, 'val: "5"');
  content = content.replace(/val:\s*"4"/g, 'val: "5"');
  content = content.replace(/value:\s*"8\+"/g, 'value: "5+"');
  content = content.replace(/value:\s*"4\+"/g, 'value: "5+"');

  // 2. Fix reviewCount: "200" or "40" -> "50" in schema and metadata
  content = content.replace(/reviewCount:\s*"200"/g, 'reviewCount: "50"');
  content = content.replace(/reviewCount:\s*"40"/g, 'reviewCount: "50"');
  content = content.replace(/"reviewCount":\s*"200"/g, '"reviewCount": "50"');
  content = content.replace(/"reviewCount":\s*"40"/g, '"reviewCount": "50"');

  // 3. Fix non-Rajasthan city page stat counter residual subtitles
  // Specific non-Rajasthan city directories
  const nonRjCities = [
    'anchor-in-agra', 'anchor-in-alibaug', 'anchor-in-andaman', 'anchor-in-bangalore',
    'anchor-in-chennai', 'anchor-in-coorg', 'anchor-in-[#daramshala]', 'anchor-in-dharamshala',
    'anchor-in-goa', 'anchor-in-haridwar', 'anchor-in-hyderabad', 'anchor-in-kolkata',
    'anchor-in-[#manali]', 'anchor-in-manali', 'anchor-in-mumbai', 'anchor-in-mussoorie',
    'anchor-in-nainital', 'anchor-in-ooty', 'anchor-in-rishikesh', 'anchor-in-shimla',
    'anchor-in-varanasi'
  ];

  const rel = path.relative(appDir, filePath).replace(/\\/g, '/');
  const cityFolder = rel.split('/')[0];

  if (nonRjCities.includes(cityFolder)) {
    // Replace residual "across Jaipur & Rajasthan" with "Across India" or relevant context
    content = content.replace(/sub:\s*"across Jaipur & Rajasthan"/g, 'sub: "Across India"');
    content = content.replace(/sub:\s*"across Jaipur \\u0026 Rajasthan"/g, 'sub: "Across India"');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated: ${rel}`);
  }
});

// Also check layout.tsx and components
const extraFiles = [
  path.join(__dirname, '../app/layout.tsx'),
  path.join(__dirname, '../components/Footer.jsx'),
  path.join(__dirname, '../components/Navbar.jsx')
];

extraFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/reviewCount:\s*"200"/g, 'reviewCount: "50"');
  content = content.replace(/reviewCount:\s*"40"/g, 'reviewCount: "50"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated extra: ${path.basename(filePath)}`);
  }
});

console.log(`Total files remediated: ${modifiedCount}`);
