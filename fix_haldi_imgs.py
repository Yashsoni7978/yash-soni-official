import re

file_path = 'app/haldi-anchor-jaipur/page.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the first img tag
content = re.sub(
    r'<img\s+src="/gallery-1\.webp"\s+className="w-full h-full object-cover scale-105 animate-slow-zoom"\s+alt="Top Haldi Games Anchor and Interactive Emcee"\s+/>',
    '<Image src="/gallery-1.webp" fill priority sizes="100vw" className="object-cover scale-105 animate-slow-zoom" alt="Top Haldi Games Anchor and Interactive Emcee" />',
    content
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
