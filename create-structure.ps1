# create-structure.ps1
Write-Host "=== Creating Next.js Project Structure ===" -ForegroundColor Green

# Root folder (gunakan current directory atau minta input)
$rootPath = Get-Location
Write-Host "Creating structure in: $rootPath" -ForegroundColor Cyan

# Fungsi untuk membuat folder
function Create-Folder {
    param($path)
    New-Item -ItemType Directory -Force -Path $path | Out-Null
    Write-Host "  Created: $path" -ForegroundColor Gray
}

# Fungsi untuk membuat file
function Create-File {
    param($path)
    New-Item -ItemType File -Force -Path $path | Out-Null
    Write-Host "  Created: $path" -ForegroundColor Gray
}

# 1. Folder structure - App
Write-Host "`nCreating app structure..." -ForegroundColor Yellow
Create-Folder "app/api"
Create-File "app/layout.tsx"
Create-File "app/page.tsx"
Create-File "app/loading.tsx"
Create-File "app/not-found.tsx"
Create-File "app/globals.css"

# 2. Folder structure - Layouts
Write-Host "`nCreating layouts..." -ForegroundColor Yellow
Create-Folder "layouts"
Create-File "layouts/desktop-layout.tsx"
Create-File "layouts/mobile-layout.tsx"

# 3. Folder structure - Components
Write-Host "`nCreating components..." -ForegroundColor Yellow

# Desktop components
$desktopComponents = @(
    "loader", "header", "manifesto", "identity", "expertise",
    "projects", "process", "tech", "stats", "contact"
)
foreach ($component in $desktopComponents) {
    Create-Folder "components/desktop/desktop-$component"
    Create-File "components/desktop/desktop-$component/desktop-$component.tsx"
}

# Mobile components
$mobileComponents = @(
    "loader", "header", "manifesto", "identity", "expertise",
    "projects", "process", "tech", "stats", "contact"
)
foreach ($component in $mobileComponents) {
    Create-Folder "components/mobile/mobile-$component"
    Create-File "components/mobile/mobile-$component/mobile-$component.tsx"
}

# Shared components
$sharedComponents = @(
    "button", "magnetic-button", "reveal-text", "section-title",
    "social-link", "project-image", "noise-overlay", "cursor", "divider"
)
foreach ($component in $sharedComponents) {
    Create-Folder "components/shared/$component"
    Create-File "components/shared/$component/$component.tsx"
}

# 4. Data files
Write-Host "`nCreating data files..." -ForegroundColor Yellow
Create-Folder "data"
$dataFiles = @("profile.ts", "projects.ts", "expertise.ts", "process.ts", "socials.ts", "tech-stack.ts", "stats.ts")
foreach ($file in $dataFiles) {
    Create-File "data/$file"
}

# 5. Hooks
Write-Host "`nCreating hooks..." -ForegroundColor Yellow
Create-Folder "hooks"
$hooks = @("use-device.ts", "use-lenis.ts", "use-window-size.ts", "use-scroll-progress.ts", "use-mouse-position.ts")
foreach ($hook in $hooks) {
    Create-File "hooks/$hook"
}

# 6. Lib folder structure
Write-Host "`nCreating lib structure..." -ForegroundColor Yellow
Create-Folder "lib/gsap"
Create-Folder "lib/lenis"
Create-Folder "lib/seo"
Create-Folder "lib/utils"

$gsapFiles = @("hero.ts", "reveal.ts", "projects.ts", "process.ts", "contact.ts")
foreach ($file in $gsapFiles) {
    Create-File "lib/gsap/$file"
}

Create-File "lib/lenis/lenis.ts"
Create-File "lib/seo/metadata.ts"

$utilsFiles = @("device.ts", "format.ts", "constants.ts")
foreach ($file in $utilsFiles) {
    Create-File "lib/utils/$file"
}

# 7. Styles folder structure
Write-Host "`nCreating styles structure..." -ForegroundColor Yellow
Create-Folder "styles/base"
Create-Folder "styles/desktop"
Create-Folder "styles/mobile"
Create-Folder "styles/shared"
Create-Folder "styles/animations"

# Base styles
$baseStyles = @("reset.css", "variables.css", "typography.css", "utilities.css")
foreach ($style in $baseStyles) {
    Create-File "styles/base/$style"
}

# Desktop styles
foreach ($component in $desktopComponents) {
    Create-File "styles/desktop/desktop-$component.css"
}

# Mobile styles
foreach ($component in $mobileComponents) {
    Create-File "styles/mobile/mobile-$component.css"
}

# Shared styles
$sharedStyles = @("button.css", "cursor.css", "magnetic-button.css", "reveal-text.css", "divider.css")
foreach ($style in $sharedStyles) {
    Create-File "styles/shared/$style"
}

# Animation styles
Create-File "styles/animations/gsap.css"
Create-File "styles/animations/transitions.css"

# 8. Types
Write-Host "`nCreating types..." -ForegroundColor Yellow
Create-Folder "types"
$types = @("profile.ts", "project.ts", "expertise.ts", "social.ts")
foreach ($type in $types) {
    Create-File "types/$type"
}

# 9. Constants
Write-Host "`nCreating constants..." -ForegroundColor Yellow
Create-Folder "constants"
$constants = @("routes.ts", "theme.ts", "animation.ts")
foreach ($const in $constants) {
    Create-File "constants/$const"
}

# 10. Metadata
Write-Host "`nCreating metadata..." -ForegroundColor Yellow
Create-Folder "metadata"
$metadata = @("sitemap.ts", "robots.ts", "open-graph.ts")
foreach ($meta in $metadata) {
    Create-File "metadata/$meta"
}

# 11. Public folder structure
Write-Host "`nCreating public structure..." -ForegroundColor Yellow
Create-Folder "public/profile"
Create-Folder "public/projects"
Create-Folder "public/icons"
Create-Folder "public/logos"
Create-Folder "public/backgrounds"
Create-Folder "public/og"

# Public files
Create-File "public/profile/avatar.webp"
Create-File "public/profile/profile.webp"
Create-File "public/profile/cv.pdf"

$projectImages = @("zenversehub.webp", "zenmovie.webp", "cryptoanalyticsagent.webp", "portfolio.webp")
foreach ($img in $projectImages) {
    Create-File "public/projects/$img"
}

Create-File "public/og/og-image.png"

# 12. Root configuration files
Write-Host "`nCreating root configuration files..." -ForegroundColor Yellow
Create-File ".env.local"
Create-File ".gitignore"
Create-File "next.config.ts"
Create-File "tsconfig.json"
Create-File "package.json"
Create-File "eslint.config.mjs"
Create-File "README.md"

# 13. Create basic .gitignore content
@"
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8

# 14. Create basic package.json
@"
{
  "name": "nextjs-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "gsap": "^3.12.5",
    "lenis": "^1.0.42"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3",
    "eslint": "^8",
    "eslint-config-next": "latest"
  }
}
"@ | Out-File -FilePath "package.json" -Encoding UTF8

# 15. Create basic tsconfig.json
@"
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
"@ | Out-File -FilePath "tsconfig.json" -Encoding UTF8

Write-Host "`n=== Structure Created Successfully! ===" -ForegroundColor Green
Write-Host "Total folders and files have been created." -ForegroundColor Cyan
Write-Host "`nOpening in VS Code..." -ForegroundColor Yellow

# Buka di VS Code
code .

Write-Host "`nNext steps:" -ForegroundColor Magenta
Write-Host "1. Run 'npm install' to install dependencies" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start development server" -ForegroundColor White
Write-Host "3. Start building your components!" -ForegroundColor White
