$ErrorActionPreference = 'Stop'

$appDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) { $nodeCommand.Source } else { $null }
$bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'

if (-not $nodeExecutable -and (Test-Path -LiteralPath $bundledNode)) {
    $nodeExecutable = $bundledNode
}

if (-not $nodeExecutable) {
    throw 'Node.js 20 or newer is required. Install it from https://nodejs.org and run this script again.'
}

Write-Host "Starting Shelly’s Bistro — RTE Project Command Centre"
Write-Host 'Open http://127.0.0.1:4173 in your browser.'
$env:TASK_NOTIFICATIONS_ENABLED = 'true'
$env:TASK_APP_BASE_URL = 'http://127.0.0.1:4173'
Write-Host 'Outbound task routing is on. Slack and email delivery still require private deployment credentials.'
& $nodeExecutable (Join-Path $appDirectory 'server.js')
