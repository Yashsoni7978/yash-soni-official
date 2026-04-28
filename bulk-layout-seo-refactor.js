// bulk-layout-seo-refactor.js
// ------------------------------------------------------------
// This script updates every layout.jsx (or layout.js) under the 'app/' directory:
//   • Removes `import Script from "next/script"`.
//   • Replaces any <Script ...> JSX block with a native <script type="application/ld+json"> tag.
//   • Updates the meta description to a CTR‑optimized version.
//   • Ensures only a single `export const metadata` block per file.
// Backups (*.bak) are created before any modification.
// ------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const globby = require('globby');

const ROOT = path.resolve(__dirname, 'app');
const GLOBS = ['**/layout.jsx', '**/layout.js'];
const BACKUP_EXT = '.bak';

// Regexes -------------------------------------------------------
const IMPORT_SCRIPT_REGEX = /import\s+Script\s+from\s+['"]next\/script['"];?\s*\n?/g;
const SCRIPT_TAG_REGEX = /<Script\b([^>]*)>([\s\S]*?)<\/Script>/g;
const METADATA_EXPORT_REGEX = /export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};/g;
const DESCRIPTION_REGEX = /description\s*:\s*([`'"])([\s\S]*?)\1\s*,/;

// Old description pattern (pilot) – we’ll replace any description that looks like the original generic one.
const OLD_DESC_PATTERN = /Plan your dream destination wedding in Jaipur, Udaipur, Jodhpur or Pushkar with Anchor Yash Soni\. We handle hotels, travel, decor & full event management\./;

// New CTR‑optimized description (same for all hubs)
const NEW_DESCRIPTION = "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.";

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;

  // 1️⃣ Backup (once)
  const backupPath = filePath + BACKUP_EXT;
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
  }

  // 2️⃣ Remove import Script
  content = content.replace(IMPORT_SCRIPT_REGEX, '');

  // 3️⃣ Replace <Script> JSX with native <script>
  content = content.replace(SCRIPT_TAG_REGEX, (match, attrs, inner) => {
    // Preserve id attribute if present
    const idMatch = /id\s*=\s*{?"?([^"'}]+)"?}?/.exec(attrs);
    const idAttr = idMatch ? ` id="${idMatch[1]}"` : '';
    // Build native script tag
    return `<script type="application/ld+json"${idAttr} dangerouslySetInnerHTML={{ __html: ${inner.trim()} }} />`;
  });

  // 4️⃣ Update description if it matches old pattern
  const metaMatch = content.match(METADATA_EXPORT_REGEX);
  if (metaMatch) {
    // Replace description inside the export block
    content = content.replace(DESCRIPTION_REGEX, (match, quote) => {
      return `description: ${quote}${NEW_DESCRIPTION}${quote},`;
    });
  }

  // 5️⃣ Ensure a single metadata export
  const metadataMatches = [...content.matchAll(METADATA_EXPORT_REGEX)];
  if (metadataMatches.length > 1) {
    let first = true;
    content = content.replace(METADATA_EXPORT_REGEX, (m) => {
      if (first) { first = false; return m; }
      return `/* ${m} */`;
    });
  }

  // 6️⃣ Clean up extra blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  // 7️⃣ Write if changed
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✔ Updated ${filePath}`);
  } else {
    console.log(`ℹ No changes needed ${filePath}`);
  }
}

(async () => {
  try {
    const files = await globby(GLOBS, { cwd: ROOT, absolute: true });
    if (files.length === 0) {
      console.log('⚠️ No layout files found.');
      return;
    }
    console.log(`🔎 Found ${files.length} layout files. Processing...`);
    files.forEach(processFile);
    console.log('✅ Bulk SEO update complete. Backups have *.bak extension.');
  } catch (err) {
    console.error('❌ Script failed:', err);
    process.exit(1);
  }
})();
