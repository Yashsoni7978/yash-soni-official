$pages = @(
  'anchor-in-shimla',
  'anchor-in-rishikesh',
  'anchor-in-manali',
  'anchor-in-ooty',
  'anchor-in-neemrana',
  'anchor-in-nainital',
  'anchor-in-pushkar',
  'anchor-in-mussoorie',
  'anchor-in-kolkata',
  'anchor-in-kota',
  'anchor-in-mount-abu',
  'anchor-in-mandawa',
  'anchor-in-haridwar',
  'anchor-in-dharamshala',
  'anchor-in-coorg',
  'anchor-in-alibaug',
  'anchor-in-andaman',
  'anchor-in-bikaner',
  'anchor-in-chittorgarh',
  'anchor-in-agra',
  'anchor-in-varanasi',
  'anchor-in-ajmer',
  'anchor-in-bharatpur',
  'anchor-in-goa'
)

foreach ($page in $pages) {
  $file = "app/$page/page.jsx"
  if (-Not (Test-Path $file)) { Write-Host "SKIP: $file not found"; continue }
  
  $c = [System.IO.File]::ReadAllText($file)

  # 1. Add Image import if missing
  if ($c -notmatch "import Image from 'next/image'") {
    $c = $c -replace "import Link from 'next/link';", "import Image from 'next/image';`nimport Link from 'next/link';"
  }

  # 2. Fix hero background <img> — full-screen hero bg images
  # Pattern: absolute inset-0 div containing <img with slow-zoom
  $c = $c -replace '(<div className="absolute inset-0 z-0">)\s*<img\s+src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s*/>', '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'

  # 3. Fix portrait-top image (the wrapper div needs relative)
  $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-top\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="Yash Soni Anchor" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'

  # 4. Fix portrait-bottom image — alt text varies per page
  $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-bottom\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="([^"]+)" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="$1" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'

  # 5. Fix gallery marquee images: w-56 h-72 divs
  $c = $c -replace '<div(.*?)className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">\s*<img\s+src=\{src\}\s+alt=\{([^}]+)\}\s+className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700"\s*/>', '<div$1className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative"><Image src={src} alt={$2} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />'

  # 6. Fix scale section background image (aspect-video divs)
  $c = $c -replace '(<div className="aspect-video rounded-2xl overflow-hidden[^"]*" relative group">)\s*<img\s+src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"\s*/>', '$1<Image src="$2" alt="$3" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />'

  [System.IO.File]::WriteAllText($file, $c)
  Write-Host "DONE: $file"
}

Write-Host "All standard pages done."
