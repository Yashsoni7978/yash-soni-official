const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'app', 'contact', 'page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove Link import if unnecessary (optional, but keep it clean)
// 2. Remove the Locations link block

const removalBlock = `
                 <div className="pt-6">
                    <Link href="/locations" className="inline-flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold hover:gap-4 transition-all">
                      Browse All 35+ Event Destinations <ArrowUpRight size={14} />
                    </Link>
                 </div>`;

content = content.replace(removalBlock, '');

// Clean up potential double newlines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully removed locations link from contact page.");
