const fs = require('fs');

const oldDesc = "700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.";

const updates = [
  {
    file: "app/anchor-in-delhi/page.tsx",
    newDesc: "Yash Soni is a bilingual event anchor serving Delhi NCR. With 700+ shows hosted, he brings high-energy anchoring to Chhatarpur farmhouses, Aerocity hotels, Taj Palace Delhi, and ITC Maurya. Expert in large Punjabi-style weddings, corporate summits, and award nights."
  },
  {
    file: "app/anchor-in-mumbai/page.tsx",
    newDesc: "Yash Soni hosts premium events in Mumbai — from Bollywood-style sangeets in Andheri to corporate galas at Trident Nariman Point and BKC venues. Bilingual Hindi/English anchor with 700+ shows. Available for destination weddings in Mumbai and Navi Mumbai."
  }
];

updates.forEach(u => {
  let content = fs.readFileSync(u.file, 'utf-8');
  
  // Replace description
  content = content.replace(oldDesc, u.newDesc);
  
  // Remove first 5 FAQs using Regex (matches 'const FAQS = [' followed by exactly 5 lines)
  const regex = /const FAQS = \[\r?\n(?:.*\r?\n){5}/;
  content = content.replace(regex, "const FAQS = [\n");
  
  fs.writeFileSync(u.file, content);
  console.log(`Successfully updated ${u.file}`);
});
