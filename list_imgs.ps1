$files = @('app/anchor-in-udaipur/page.jsx','app/anchor-in-mumbai/page.jsx','app/anchor-in-kumbhalgarh/page.jsx','app/anchor-in-jodhpur/page.jsx','app/anchor-in-delhi/page.jsx','app/anchor-in-bikaner/page.jsx','app/anchor-in-chittorgarh/page.jsx')
foreach ($f in $files) {
  $lines = [System.IO.File]::ReadAllLines($f)
  for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '<img src=') {
      Write-Host "${f}:$($i+1): $($lines[$i].Trim())"
    }
  }
}
