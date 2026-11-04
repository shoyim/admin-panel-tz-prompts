# AdminLTE 2.4.18 vendor fayllarini lokal papkaga yuklab oladi (CDN siz ishlash uchun).
# Foydalanish: powershell -ExecutionPolicy Bypass -File install-assets.ps1 public\admin\vendor
param([string]$Dest = "public\admin\vendor")
$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$list = Join-Path $here "..\assets\assets.txt"
$base = "https://cdn.jsdelivr.net/npm/"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$failed = 0
foreach ($line in Get-Content $list) {
  $path = $line.Trim()
  if ($path -eq "" -or $path.StartsWith("#")) { continue }
  $target = Join-Path $Dest $path
  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $target) | Out-Null
  try {
    Invoke-WebRequest -UseBasicParsing -Uri ($base + $path) -OutFile $target
    Write-Output "ok   $path"
  } catch {
    Write-Output "FAIL $path"
    $failed++
  }
}
$parent = Split-Path -Parent (Resolve-Path $Dest)
Copy-Item (Join-Path $here "..\assets\admin.css"), (Join-Path $here "..\assets\admin.js") $parent -Force
Write-Output "Tayyor: $Dest  (admin.css va admin.js -> $parent). Xatolar: $failed"
if ($failed -gt 0) { exit 1 }
