# Fix all the multi-line <img> patterns that didn't get caught by single-line regex

$files = @(
  'app/anchor-in-udaipur/page.jsx',
  'app/anchor-in-ranthambore/page.jsx',
  'app/anchor-in-mumbai/page.jsx',
  'app/anchor-in-kumbhalgarh/page.jsx',
  'app/anchor-in-jodhpur/page.jsx',
  'app/anchor-in-delhi/page.jsx',
  'app/anchor-in-jaipur/page.jsx',
  'app/anchor-in-bikaner/page.jsx',
  'app/anchor-in-chittorgarh/page.jsx',
  'app/anchor-in-alwar/page.jsx'
)

foreach ($file in $files) {
  if (-Not (Test-Path $file)) { continue }
  $c = [System.IO.File]::ReadAllText($file)
  $changed = $false

  # Ensure Image import
  if ($c -notmatch "import Image from 'next/image'") {
    $c = $c -replace "import Link from 'next/link';", "import Image from 'next/image';`nimport Link from 'next/link';"
    $changed = $true
  }

  # Fix hero bg imgs that span multiple lines (alt before className, or className before alt)
  # Using [regex]::Replace for multiline support
  $pattern1 = '(<div className="absolute inset-0 z-0">)\s*<img\s+src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s*/>'
  $replace1 = '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'
  $new = [regex]::Replace($c, $pattern1, $replace1, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Gallery marquee {src} multi-line
  $pattern2 = '(<div[^>]*className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">)\s*<img src=\{src\} alt=\{([^}]+)\}\s+className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700"\s*/>'
  $replace2 = '$1<div class="relative w-full h-full"><Image src={src} alt={$2} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" /></div>'
  $new = [regex]::Replace($c, $pattern2, $replace2, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Also try without class="relative": gallery already has shrink-0 relative version
  $pattern2b = '(<div[^>]*className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/8 shrink-0">)\s*<img src=\{src\} alt=\{([^}]+)\}\s*\n\s+className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700" />'
  $replace2b = '$1<div class="relative w-full h-full"><Image src={src} alt={$2} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" /></div>'
  $new = [regex]::Replace($c, $pattern2b, $replace2b, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Scale section bg (aspect-video, multi-line)
  $pattern3 = '(<div className="aspect-video rounded-2xl overflow-hidden border border-\[#D4AF37\]/20 relative group">)\s*<img src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"\s*/>'
  $replace3 = '$1<Image src="$2" alt="$3" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />'
  $new = [regex]::Replace($c, $pattern3, $replace3, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Same pattern but attrs on separate line
  $pattern3b = '(<div className="aspect-video rounded-2xl overflow-hidden border border-\[#D4AF37\]/20 relative group">)\s*<img src="(/backgrounds/[^"]+)"\s+alt="([^"]+)"\s*\n\s+className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"\s*/>'
  $new = [regex]::Replace($c, $pattern3b, $replace3, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Jaipur gallery grid - static files
  $pattern4 = '<img src="/gallery-(\d)\.webp" alt="([^"]+)" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />'
  $replace4_1 = '<Image src="/gallery-1.webp" alt="$2" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />'
  $new = [regex]::Replace($c, $pattern4, {
    param($m)
    $n = $m.Groups[1].Value
    $alt = $m.Groups[2].Value
    "<Image src=""/gallery-$n.webp"" alt=""$alt"" fill sizes=""(max-width:768px) 50vw, 25vw"" className=""object-cover transition-transform duration-700 group-hover:scale-105"" />"
  })
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Jaipur service card images
  $pat5 = '<img src=\{s\.img\} alt=\{([^}]+)\} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 grayscale group-hover:grayscale-0" />'
  $rep5 = '<Image src={s.img} alt={$1} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />'
  $new = [regex]::Replace($c, $pat5, $rep5)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Bikaner/Chittorgarh unique hero (non-/backgrounds/ path)
  $pat6 = '(<div className="absolute inset-0 z-0">)\s*<img src="(/[^/][^"]+\.webp)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover slow-zoom"\s*/>'
  $rep6 = '$1<div class="relative w-full h-full"><Image src="$2" alt="$3" fill priority sizes="100vw" className="object-cover slow-zoom" /></div>'
  $new = [regex]::Replace($c, $pat6, $rep6, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  # Bikaner/Chittorgarh scale img
  $pat7 = '(<div className="aspect-video rounded-2xl overflow-hidden border border-\[#D4AF37\]/20 relative group">)\s*<img src="(/[^/][^"]+\.webp)"\s+alt="([^"]+)"\s+className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"\s*/>'
  $rep7 = '$1<Image src="$2" alt="$3" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />'
  $new = [regex]::Replace($c, $pat7, $rep7, [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if ($new -ne $c) { $c = $new; $changed = $true }

  if ($changed) {
    [System.IO.File]::WriteAllText($file, $c)
    Write-Host "FIXED: $file"
  } else {
    Write-Host "CLEAN: $file"
  }
}

Write-Host "Deep fix done."
