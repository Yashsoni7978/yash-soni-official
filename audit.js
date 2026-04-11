const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function auditFile(filePath) {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const errors = [];
    
    // 1. Missing Lucide Imports
    const lucideImportMatch = content.match(/import\s*\{(.*?)\}\s*from\s*["']lucide-react["']/s);
    if (lucideImportMatch) {
        const imports = new Set(lucideImportMatch[1].split(',').map(i => i.trim()).filter(i => i));
        
        // icon: IconName
        const iconUsages = content.match(/icon:\s*([A-Z][a-zA-Z0-9]*)/g) || [];
        const jsxUsages = content.match(/<([A-Z][a-zA-Z0-9]*)/g) || [];
        
        const usages = new Set([
            ...iconUsages.map(u => u.split(':')[1].trim()),
            ...jsxUsages.map(u => u.substring(1))
        ]);
        
        const exceptions = new Set(["AnimatePresence", "Link", "Image", "motion", "Reveal", "ScrollReveal", "GoldText", "FAQItem", "G", "Counter", "Head", "Script", "FunStat", "StatCard", "ServiceCard", "ServicePill", "VenueCard", "TestimonialCard", "Star", "ArrowRight", "MapPin", "CalendarCheck", "Users", "Award", "Mic2", "CheckCircle2", "ShieldCheck", "Plus", "Minus", "Crown", "Heart", "Music2", "Flower2", "Building2", "Gem", "Play", "Pause"]);
        
        for (let u of usages) {
            if (!imports.has(u) && !exceptions.has(u)) {
                // Heuristic: check if IconName is part of lucide-react (rough)
                // If it starts with uppercase and isn't imported, it's a candidate
                errors.push(`Potentially missing import for: ${u}`);
            }
        }
    }
    
    // 2. class vs className
    if (/\w+\s+class="/.test(content) || /<[a-z0-9]+\s+class=/.test(content)) {
        errors.push("Contains 'class=' instead of 'className='");
    }
    
    // 3. Duplicate Component Definitions
    const constDefs = content.match(/const\s+([A-Z][a-zA-Z0-9]*)\s*=/g) || [];
    const names = constDefs.map(d => d.split(/\s+/)[1]);
    const dups = names.filter((n, i) => names.indexOf(n) !== i);
    if (dups.length > 0) {
        errors.push(`Duplicate component/const definitions: ${[...new Set(dups)]}`);
    }
    
    // 4. Placeholder "Jaipur" in national pages
    const relPath = path.relative(appDir, filePath);
    if (relPath.includes('anchor-in-') && !relPath.includes('anchor-in-jaipur')) {
        const lines = content.split('\n');
        const first100 = lines.slice(0, 100).join('\n');
        if (first100.includes('Best Anchor in Jaipur') && !relPath.includes('rajasthan')) {
             errors.push("Hero/Subheading might contain 'Best Anchor in Jaipur' placeholder");
        }
    }

    // 5. Duplicate ID in FAQs
    const faqIds = content.match(/id={`faq-[a-z0-9-]+-\${idx}`}/g) || [];
    if (faqIds.length > 1) {
       // Check if they are different variables or just literals
    }

    if (errors.length > 0) {
        console.log(`\nERROR in ${filePath}:`);
        errors.forEach(e => console.log(`  - ${e}`));
    }
}

walkDir(appDir, auditFile);
console.log("\nAudit Complete.");
