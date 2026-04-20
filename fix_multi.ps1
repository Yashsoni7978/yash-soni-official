# Fix the exact multiline gallery marquee and scale section images in specific pages

$fixes = @(
  @{
    file = 'app/anchor-in-udaipur/page.jsx'
    line = 462  # 0-based, so line 463 in 1-based
    city = 'Udaipur'
    bgSrc = '/backgrounds/udaipur_bg.webp'
    bgAlt = 'Udaipur Lake Palace view'
    scaleLine = 476
  },
  @{
    file = 'app/anchor-in-mumbai/page.jsx'
    line = 476
    city = 'Mumbai'
    bgSrc = '/backgrounds/mumbai_bg.webp'
    bgAlt = 'Mumbai Sea Link Skyline'
    scaleLine = 490
  },
  @{
    file = 'app/anchor-in-kumbhalgarh/page.jsx'
    line = 487
    city = 'Kumbhalgarh'
    bgSrc = '/backgrounds/kumbhalgarh_bg.webp'
    bgAlt = 'Kumbhalgarh Fort Great Wall'
    scaleLine = 501
  },
  @{
    file = 'app/anchor-in-jodhpur/page.jsx'
    line = 457
    city = 'Jodhpur'
    bgSrc = '/backgrounds/jodhpur_bg.webp'
    bgAlt = 'Mehrangarh Fort Jodhpur'
    scaleLine = 471
  },
  @{
    file = 'app/anchor-in-delhi/page.jsx'
    line = 477
    city = 'Delhi NCR'
    bgSrc = '/backgrounds/delhi_bg.webp'
    bgAlt = 'Delhi Heritage Scale'
    scaleLine = 491
  }
)

foreach ($f in $fixes) {
  $lines = [System.IO.File]::ReadAllLines($f.file)
  $i = $f.line  # 0-indexed

  # The multiline img pattern is:
  # Line i: "                <div key={i} className="w-56 h-72 ... shrink-0">"
  # Line i+1: "                  <img src={src} alt={...}"
  # Line i+2: "                    className="w-full h-full ..."/>"
  # We need to find the exact lines

  # Search for the img line
  $imgLine = -1
  for ($j = 0; $j -lt $lines.Count; $j++) {
    if ($lines[$j] -match "<img src=\{src\} alt=\{``Anchor Yash Soni $($f.city) event \$\{i \+ 1\}``\}") {
      $imgLine = $j
      break
    }
  }

  if ($imgLine -ge 0) {
    # Fix the parent div (line before imgLine) to add 'relative'
    $parentLine = $imgLine - 1
    $lines[$parentLine] = $lines[$parentLine] -replace 'shrink-0">', 'shrink-0 relative">'
    
    # Replace the img tag (potentially multiline - check next line)
    $altText = "Anchor Yash Soni $($f.city) event `${i + 1}`"
    if ($lines[$imgLine] -match '_' -or $lines[$imgLine+1] -match 'className=') {
      # Multi-line: merge and replace
      $lines[$imgLine] = "                  <Image src={src} alt={``Anchor Yash Soni $($f.city) event `${i + 1}``} fill sizes=""(max-width:768px) 224px, 288px"" className=""object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"" />"
      $lines[$imgLine + 1] = ""  # remove next line (className line)
    } else {
      $lines[$imgLine] = "                  <Image src={src} alt={``Anchor Yash Soni $($f.city) event `${i + 1}``} fill sizes=""(max-width:768px) 224px, 288px"" className=""object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"" />"
    }
    Write-Host "Fixed gallery in $($f.file)"
  } else {
    Write-Host "Gallery img NOT FOUND in $($f.file)"
  }

  # Fix scale section bg img
  $scaleLine = -1
  for ($j = 0; $j -lt $lines.Count; $j++) {
    if ($lines[$j] -match "<img src=""$([regex]::Escape($f.bgSrc))""") {
      $scaleLine = $j
      break
    }
  }

  if ($scaleLine -ge 0) {
    # Could be single or multiline
    if ($lines[$scaleLine] -match '/>') {
      $lines[$scaleLine] = "              <Image src=""$($f.bgSrc)"" alt=""$($f.bgAlt)"" fill sizes=""(max-width:768px) 100vw, 50vw"" className=""object-cover group-hover:scale-105 transition-transform duration-1000"" />"
    } else {
      $lines[$scaleLine] = "              <Image src=""$($f.bgSrc)"" alt=""$($f.bgAlt)"" fill sizes=""(max-width:768px) 100vw, 50vw"" className=""object-cover group-hover:scale-105 transition-transform duration-1000"" />"
      $lines[$scaleLine + 1] = ""  # clear next line (className=... />)
    }
    Write-Host "Fixed scale bg in $($f.file)"
  } else {
    Write-Host "Scale bg NOT FOUND in $($f.file)"
  }

  # Write back
  $content = [string]::Join("`n", $lines)
  [System.IO.File]::WriteAllText($f.file, $content)
}

# Fix bikaner and chittorgarh single-line gallery imgs
$bikiFile = 'app/anchor-in-bikaner/page.jsx'
$c = [System.IO.File]::ReadAllText($bikiFile)
$c = $c -replace '(<div[^>]*shrink-0">)\s*<img src=\{src\} alt=\{`Anchor Yash Soni Bikaner event \$\{i \+ 1\}`\} className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700" />', '$1<div class="relative w-full h-full"><Image src={src} alt={`Anchor Yash Soni Bikaner event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" /></div>'
[System.IO.File]::WriteAllText($bikiFile, $c)
Write-Host "Fixed bikaner gallery"

$chitFile = 'app/anchor-in-chittorgarh/page.jsx'
$c = [System.IO.File]::ReadAllText($chitFile)
$c = $c -replace '(<div[^>]*shrink-0">)\s*<img src=\{src\} alt=\{`Anchor Yash Soni Chittorgarh heritage event \$\{i \+ 1\}`\} className="w-full h-full object-cover grayscale-\[20%\] hover:grayscale-0 transition-all duration-700" />', '$1<div class="relative w-full h-full"><Image src={src} alt={`Anchor Yash Soni Chittorgarh heritage event ${i + 1}`} fill sizes="(max-width:768px) 224px, 288px" className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" /></div>'
[System.IO.File]::WriteAllText($chitFile, $c)
Write-Host "Fixed chittorgarh gallery"

Write-Host "ALL DONE."
