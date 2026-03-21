$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$repoRoot = Split-Path -Parent $PSScriptRoot
$logPath = Join-Path $repoRoot "memory\docs\history\automation-runtime-check.log"
$logDir = Split-Path -Parent $logPath

if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir -Force | Out-Null
}

function Invoke-CommandCheck {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [Parameter(Mandatory = $true)]
        [scriptblock]$Action
    )

    try {
        $output = & $Action 2>&1
        $text = ($output | ForEach-Object { "$_" }) -join " "
        [pscustomobject]@{
            Name = $Name
            Status = "OK"
            Detail = if ($text) { $text.Trim() } else { "(no output)" }
        }
    }
    catch {
        [pscustomobject]@{
            Name = $Name
            Status = "FAIL"
            Detail = $_.Exception.Message.Trim()
        }
    }
}

$checks = @(
    (Invoke-CommandCheck -Name "powershell" -Action {
        powershell -NoProfile -Command '$PSVersionTable.PSVersion.ToString()'
    }),
    (Invoke-CommandCheck -Name "gh-command" -Action {
        $gh = Get-Command gh -ErrorAction Stop
        & $gh.Source --version | Select-Object -First 1
    }),
    (Invoke-CommandCheck -Name "gh-auth" -Action {
        $gh = Get-Command gh -ErrorAction Stop
        & $gh.Source auth status
    })
)

$ghCommandOk = @($checks | Where-Object { $_.Name -eq "gh-command" -and $_.Status -eq "OK" }).Count -gt 0
$powerShellOk = @($checks | Where-Object { $_.Name -eq "powershell" -and $_.Status -eq "OK" }).Count -gt 0
$ghAuthOk = @($checks | Where-Object { $_.Name -eq "gh-auth" -and $_.Status -eq "OK" }).Count -gt 0

$readiness = if ($ghCommandOk -and $powerShellOk -and $ghAuthOk) {
    "ready for gh-based automation work"
} elseif ($ghCommandOk -and $powerShellOk) {
    "command execution works, but gh auth still needs attention"
} else {
    "not ready for gh-based automation work"
}

$timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss K")
$lines = @(
    "[$timestamp] automation runtime check"
)

foreach ($check in $checks) {
    $lines += "- $($check.Name): $($check.Status) | $($check.Detail)"
}

$lines += "- readiness: $readiness"
$lines += ""

Add-Content -Path $logPath -Value $lines
$lines | ForEach-Object { Write-Output $_ }
