const fs = require('fs');
const path = require('path');

const files = [
  "app/anchor-in-udaipur/page.tsx",
  "app/best-anchor-in-jaipur/page.tsx",
  "app/anchor-in-varanasi/page.tsx",
  "app/anchor-in-rishikesh/page.tsx",
  "app/anchor-in-shimla/page.tsx",
  "app/anchor-in-ranthambore/page.tsx",
  "app/anchor-in-pushkar/page.tsx",
  "app/anchor-in-ooty/page.tsx",
  "app/anchor-in-neemrana/page.tsx",
  "app/anchor-in-mussoorie/page.tsx",
  "app/anchor-in-nainital/page.tsx",
  "app/anchor-in-mumbai/page.tsx",
  "app/anchor-in-mount-abu/page.tsx",
  "app/anchor-in-mandawa/page.tsx",
  "app/anchor-in-manali/page.tsx",
  "app/anchor-in-kumbhalgarh/page.tsx",
  "app/anchor-in-kota/page.tsx",
  "app/anchor-in-kolkata/page.tsx",
  "app/anchor-in-jodhpur/page.tsx",
  "app/anchor-in-jaisalmer/page.tsx",
  "app/anchor-in-jaipur/page.tsx",
  "app/anchor-in-haridwar/page.tsx",
  "app/anchor-in-hyderabad/page.tsx",
  "app/anchor-in-dharamshala/page.tsx",
  "app/anchor-in-goa/page.tsx",
  "app/anchor-in-coorg/layout.jsx",
  "app/anchor-in-delhi/page.tsx",
  "app/anchor-in-chittorgarh/page.tsx",
  "app/anchor-in-bikaner/page.tsx",
  "app/anchor-in-chennai/page.tsx",
  "app/anchor-in-bangalore/page.tsx",
  "app/anchor-in-bharatpur/page.tsx",
  "app/anchor-in-alwar/page.tsx",
  "app/anchor-in-andaman/page.tsx",
  "app/anchor-in-alibaug/page.tsx",
  "app/anchor-in-ajmer/page.tsx",
  "app/anchor-in-agra/page.tsx"
];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const folderName = relPath.split('/')[1];
    
    // Replace `@id: `${FULL_URL}/#webpage`,` with hardcoded version
    // Can match both `${FULL_URL}` and ${FULL_URL} just in case
    const target = '`${FULL_URL}/#webpage`';
    const replacement = '`https://yashsoni.in/' + folderName + '/#webpage`';
    
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${relPath}`);
    } else {
      console.log(`Target not found in ${relPath}`);
    }
  } else {
    console.log(`File not found: ${relPath}`);
  }
}
