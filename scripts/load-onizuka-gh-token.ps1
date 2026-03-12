if (-not (Test-Path ".env")) {
    throw ".env not found in current working directory."
}

$line = Get-Content -Path ".env" | Where-Object { $_ -match '^ONIZUKA_GITHUB_PAT=' } | Select-Object -First 1
if (-not $line) {
    throw "ONIZUKA_GITHUB_PAT is not defined in .env."
}

$token = $line.Split('=', 2)[1].Trim()
if (-not $token) {
    throw "ONIZUKA_GITHUB_PAT is empty."
}

$env:GH_TOKEN = $token
$env:GITHUB_TOKEN = $token
