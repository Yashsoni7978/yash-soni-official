# Fix gold-template pages: anchor-in-jaipur, ranthambore, jodhpur, udaipur, mumbai, kumbhalgarh, jaisalmer, delhi, bangalore, hyderabad, chennai

$goldPages = @(
  'anchor-in-ranthambore',
  'anchor-in-jodhpur',
  'anchor-in-udaipur',
  'anchor-in-mumbai',
  'anchor-in-kumbhalgarh',
  'anchor-in-jaisalmer',
  'anchor-in-delhi',
  'anchor-in-bangalore',
  'anchor-in-hyderabad',
  'anchor-in-chennai',
  'anchor-in-jaipur'
)

foreach ($page in $goldPages) {
  $file = "app/$page/page.jsx"
  if (-Not (Test-Path $file)) { Write-Host "SKIP: $file not found"; continue }
  
  $c = [System.IO.File]::ReadAllText($file)

  # 1. Add Image import if missing
  if ($c -notmatch "import Image from 'next/image'") {
    $c = $c -replace "import Link from 'next/link';", "import Image from 'next/image';`nimport Link from 'next/link';"
  }

  # 2. Fix portrait-top (same pattern as standard pages)
  $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-top\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="Yash Soni Anchor" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'

  # 3. Fix portrait-bottom — alt text varies
  $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-bottom\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="([^"]+)" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="$1" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'

  # 4. Fix portrait-top with mt-12 offset wrapper (some pages)
  $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-top\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="Yash Soni Anchor" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'

  # 5. Fix hero full-screen bg image (inside absolute inset-0 z-0 div)
  # Hero bg: <img src="/backgrounds/CITY_bg.webp" className="w-full h-full object-cover slow-zoom" />
  $c = $c -replace '(<div className="absolute inset-0 z-0">)\s*<img src="(/backgrounds/[^"]+)" alt="([^"]+)" className="w-full h-full object-cover slow-zoom" />', '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'

  # Also simpler hero pattern without alt
  $c = $c -replace '(<div className="absolute inset-0 z-0">)\s*<img src="(/backgrounds/[^"]+)" className="w-full h-full object-cover slow-zoom" alt="([^"]+)" />', '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'

  # 6. Fix gallery marquee images (used only in gold/premium pages)
  # Pattern: inside w-56 h-72 divs with marquee
  $c = $c -replace '<div([ ]+)className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">\s*<img src=\{src\} alt=\{([^}]+)\} className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700" />', '<div$1className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative"><Image src={src} alt={$2} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />'

  # 7. Fix scale-section background image (aspect-video with hover scale)
  $c = $c -replace '(<div className="aspect-video rounded-2xl overflow-hidden border border-\[#D4AF37\]/20 relative group">)\s*<img src="(/backgrounds/[^"]+)" alt="([^"]+)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />', '$1<Image src="$2" alt="$3" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />'

  # 8. Fix VenueCard and gallery grid raw <img> in anchor-in-jaipur specifically 
  # These have: <img src={img} alt={name} className="w-full h-full object-cover..." />
  # The parent already has overflow-hidden + h-full

  [System.IO.File]::WriteAllText($file, $c)
  Write-Host "DONE: $file"
}

Write-Host "All gold-template pages done."
