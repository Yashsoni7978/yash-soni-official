# Fix remaining raw <img> tags across ALL pages

$allPages = Get-ChildItem -Recurse -Filter "page.jsx" -Path "app" | Select-Object -ExpandProperty FullName

foreach ($file in $allPages) {
  $c = [System.IO.File]::ReadAllText($file)
  $changed = $false

  # 1. Add Image import if missing but file uses <img> tags
  if ($c -match '<img ' -and $c -notmatch "import Image from 'next/image'") {
    $c = $c -replace "import Link from 'next/link';", "import Image from 'next/image';`nimport Link from 'next/link';"
    $changed = $true
  }

  # 2. Fix hero full-bleed bg img (absolute inset-0 z-0 parent)
  # Simple slow-zoom hero — alt before or after className
  if ($c -match "absolute inset-0 z-0.*<img") {
    $c = $c -replace '(<div className="absolute inset-0 z-0">)\s*<img\s+src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s*/>', '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'
    $c = $c -replace '(<div className="absolute inset-0 z-0">)\s*<img\s+src="(/backgrounds/[^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s+alt="([^"]+)"\s*/>', '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'
    $changed = $true
  }

  # 3. Fix gallery marquee images (w-56 h-72 divs) — using src={src}
  if ($c -match 'w-56 h-72.*<img src=\{src\}') {
    $c = $c -replace '(<div[^>]*className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">)\s*<img src=\{src\} alt=\{([^}]+)\}\s+className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700"\s*/>', '$1<div class="relative w-full h-full"><Image src={src} alt={$2} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" /></div>'
    $changed = $true
  }

  # 4. Fix aspect-video background images (crowd command section)
  if ($c -match 'aspect-video.*<img src="/backgrounds/') {
    $c = $c -replace '(<div className="aspect-video rounded-2xl overflow-hidden border border-\[#D4AF37\]/20 relative group">)\s*<img src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"\s*/>', '$1<Image src="$2" alt="$3" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />'
    $changed = $true
  }

  # 5. Fix portrait images NOT yet fixed (without 'relative' on parent)
  if ($c -match 'aspect-\[3/4\].*overflow-hidden.*border.*white/10.*group">.*<img src="/intro-portrait') {
    $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-top\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="Yash Soni Anchor" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-top.webp" alt="Yash Soni Anchor" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'
    $c = $c -replace '<div className="aspect-\[3/4\] rounded-2xl overflow-hidden border border-white/10 group">\s*<img src="/intro-portrait-bottom\.webp" className="w-full h-full object-cover grayscale-\[30%\] group-hover:grayscale-0 transition-all duration-700" alt="([^"]+)" />', '<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group relative"><Image src="/intro-portrait-bottom.webp" alt="$1" fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />'
    $changed = $true
  }

  # 6. Fix haldi-anchor gallery images with loading=lazy
  if ($c -match 'gallery-3\.webp.*loading="lazy"') {
    $c = $c -replace '<img src="/gallery-3\.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="([^"]+)" loading="lazy" />', '<Image src="/gallery-3.webp" alt="$1" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" loading="lazy" />'
    $changed = $true
  }

  # 7. Fix jaipur VenueCard: img src={img}  
  if ($c -match 'VenueCard.*img src=\{img\}' -or $c -match '<img src=\{img\} alt=\{name\}') {
    $c = $c -replace '<img src=\{img\} alt=\{name\} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />', '<Image src={img} alt={name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />'
    $changed = $true
  }

  # 8. Fix jaipur service cards: img src={s.img}
  if ($c -match '<img src=\{s\.img\}') {
    $c = $c -replace '<img src=\{s\.img\} alt=\{([^}]+)\} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0" />', '<Image src={s.img} alt={$1} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />'
    $changed = $true
  }

  # 9. Fix jaipur gallery grid single images (gallery-1 through gallery-5)
  if ($c -match 'grid.*gallery-1\.webp.*<img src="/gallery') {
    $c = $c -replace '<img src="/gallery-(\d)\.webp" alt="([^"]+)" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />', '<Image src="/gallery-$1.webp" alt="$2" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />'
    $changed = $true
  }

  # 10. Fix alwar hero
  if ($c -match 'alwar_bg\.webp.*<img' -or $c -match '<img.*alwar_bg') {
    $c = $c -replace '<img\s+src="/backgrounds/alwar_bg\.webp"\s+alt="([^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s*/>', '<div class="relative w-full h-full"><Image src="/backgrounds/alwar_bg.webp" alt="$1" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'
    $changed = $true
  }

  if ($changed) {
    [System.IO.File]::WriteAllText($file, $c)
    $rel = $file.Replace((Get-Location).Path + "\", "")
    Write-Host "UPDATED: $rel"
  }
}

Write-Host "Final pass complete."
