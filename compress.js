const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'gold-texture.webp',
  'jal-mahal-jaipur-artist.webp',
  'intro-portrait-bottom.webp',
  'vintage-car-couple-shoot.webp',
  'bride-groom-haldi-celebration.webp',
  'bride-groom-flower-petals.webp',
  'corporate-gala-dinner-green.webp',
  'rajasthani-artist-fort-entry.webp',
  'bride-groom-white-decor.webp',
  'haldi-bride-groom-family.webp',
  'chittorgarh.webp',
  'white-flower-mandap-jaipur.webp',
  'sangeet-red-glitter-stage.webp',
  'rose-petal-tree-background.webp',
  'bharatpur.webp',
  'hawa-mahal-portrait.webp',
  'bride-entry-white-chunni.webp',
  'service-corporate.webp',
  'intro-portrait-top.webp',
  '19316.webp',
  'bride-groom-fort-shoot.webp',
];

const publicDir = path.join(process.cwd(), 'public');
let totalSaved = 0;

async function compressImages() {
  for (const filename of images) {
    const filepath = path.join(publicDir, filename);
    
    if (!fs.existsSync(filepath)) {
      console.log(`SKIP: ${filename} not found`);
      continue;
    }

    const originalSize = fs.statSync(filepath).size;
    
    // Read into buffer to prevent Windows locking the file
    const inputBuffer = fs.readFileSync(filepath);

    try {
      const metadata = await sharp(inputBuffer).metadata();
      
      const resizeOptions = metadata.width > 1920 
        ? { width: 1920, withoutEnlargement: true }
        : { withoutEnlargement: true };

      const outputBuffer = await sharp(inputBuffer)
        .resize(resizeOptions)
        .webp({ 
          quality: 82,
          effort: 6,
          smartSubsample: true 
        })
        .toBuffer();

      const newSize = outputBuffer.length;
      
      if (newSize < originalSize) {
        fs.writeFileSync(filepath, outputBuffer);
        const saving = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        const newKB = (newSize / 1024).toFixed(0);
        const oldKB = (originalSize / 1024).toFixed(0);
        totalSaved += (originalSize - newSize);
        console.log(`✅ ${filename}: ${oldKB}KB -> ${newKB}KB (${saving}% smaller)`);
      } else {
        console.log(`⏭️  ${filename}: already optimal, skipped`);
      }
    } catch (err) {
      console.log(`❌ ${filename}: ERROR — ${err.message}`);
    }
  }
  console.log(`\nTotal saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

compressImages();
