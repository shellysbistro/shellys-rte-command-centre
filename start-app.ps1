$ErrorActionPreference = 'Stop'

$appDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) { $nodeCommand.Source } else { $null }

if (-not $nodeExecutable) {
    throw 'Node.js 20 or newer is required. Install it from https://nodejs.org and run this script again.'
}

Write-Host 'Starting Shelly’s Bistro — RTE Project Command Centre'
Write-Host 'Open http://127.0.0.1:4173 in your browser.'
& $nodeExecutable (Join-Path $appDirectory 'server.js')
