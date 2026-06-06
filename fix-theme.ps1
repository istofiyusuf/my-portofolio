Write-Host "Fixing theme provider issue..." -ForegroundColor Yellow

# Backup file yang ada (opsional)
Copy-Item "app/layout.tsx" "app/layout.tsx.backup" -ErrorAction SilentlyContinue

# Hapus node_modules dan cache
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Uninstall next-themes dari package.json
$packageJson = Get-Content package.json -Raw | ConvertFrom-Json
if ($packageJson.dependencies.'next-themes') {
    $packageJson.dependencies.PSObject.Properties.Remove('next-themes')
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content package.json
}

# Install dependencies
npm install

# Install React 18 dan Next.js 14 (stabil)
npm install next@14.0.4 react@18.2.0 react-dom@18.2.0

Write-Host "Done! Now run 'npm run dev'" -ForegroundColor Green
