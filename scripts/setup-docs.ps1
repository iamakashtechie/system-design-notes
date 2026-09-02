# Script to copy all chapter notes into docs/chapters/ and fix image paths
# Also copies images into docs/public/images/<chapter>/

$root = "D:\Shared\system-design-notes"
$docsChapters = "$root\docs\chapters"
$docsPublic = "$root\docs\public"

# Mapping: source folder name -> target slug, title, chapter number
$chapters = @(
  @{ Src = "01. Scaling";                              Slug = "01-scaling";                    Title = "Ch 1 · Scale from Zero to Millions of Users" }
  @{ Src = "02. Back Of the Envelope Estimation";      Slug = "02-estimation";                 Title = "Ch 2 · Back-of-the-Envelope Estimation" }
  @{ Src = "03. System Design Framework";              Slug = "03-framework";                  Title = "Ch 3 · A Framework for System Design Interviews" }
  @{ Src = "04. Rate Limiter";                         Slug = "04-rate-limiter";               Title = "Ch 4 · Design a Rate Limiter" }
  @{ Src = "05. Consistent Hashing";                   Slug = "05-consistent-hashing";         Title = "Ch 5 · Design Consistent Hashing" }
  @{ Src = "06. Key-Value Store";                      Slug = "06-key-value-store";            Title = "Ch 6 · Design a Key-Value Store" }
  @{ Src = "07. Unique-Id Generator";                  Slug = "07-unique-id-generator";        Title = "Ch 7 · Design a Unique ID Generator" }
  @{ Src = "08. URL Shortener";                        Slug = "08-url-shortener";              Title = "Ch 8 · Design a URL Shortener" }
  @{ Src = "09. Web Crawler";                          Slug = "09-web-crawler";                Title = "Ch 9 · Design a Web Crawler" }
  @{ Src = "10. Notification System";                  Slug = "10-notification-system";        Title = "Ch 10 · Design a Notification System" }
  @{ Src = "11. News Feed System";                     Slug = "11-news-feed-system";           Title = "Ch 11 · Design a News Feed System" }
  @{ Src = "12. Chat System";                          Slug = "12-chat-system";                Title = "Ch 12 · Design a Chat System" }
  @{ Src = "13. Search Autocomplete";                  Slug = "13-search-autocomplete";        Title = "Ch 13 · Design a Search Autocomplete System" }
  @{ Src = "14. Youtube";                              Slug = "14-youtube";                    Title = "Ch 14 · Design YouTube" }
  @{ Src = "15. Google Drive";                         Slug = "15-google-drive";               Title = "Ch 15 · Design Google Drive" }
  @{ Src = "16. Proximity Service";                    Slug = "16-proximity-service";          Title = "Ch 16 · Proximity Service" }
  @{ Src = "17. Nearby Friends";                       Slug = "17-nearby-friends";             Title = "Ch 17 · Nearby Friends" }
  @{ Src = "18. Google Maps";                          Slug = "18-google-maps";                Title = "Ch 18 · Design Google Maps" }
  @{ Src = "19. Distributed Message Queue";            Slug = "19-distributed-message-queue";  Title = "Ch 19 · Distributed Message Queue" }
  @{ Src = "20. Metrics Monitoring and Alerting System"; Slug = "20-metrics-monitoring";       Title = "Ch 20 · Metrics Monitoring and Alerting System" }
  @{ Src = "21. Ad Click Event Aggregation";           Slug = "21-ad-click-aggregation";       Title = "Ch 21 · Ad Click Event Aggregation" }
  @{ Src = "22. Hotel Reservation System";             Slug = "22-hotel-reservation";          Title = "Ch 22 · Hotel Reservation System" }
  @{ Src = "23. Distributed Email Service";            Slug = "23-distributed-email";          Title = "Ch 23 · Distributed Email Service" }
  @{ Src = "24. S3-like Object Storage";               Slug = "24-object-storage";             Title = "Ch 24 · S3-like Object Storage" }
  @{ Src = "25. Real-time Gaming Leaderboard";         Slug = "25-gaming-leaderboard";         Title = "Ch 25 · Real-time Gaming Leaderboard" }
  @{ Src = "26. Payment System";                       Slug = "26-payment-system";             Title = "Ch 26 · Payment System" }
  @{ Src = "27.  Digital Wallet";                      Slug = "27-digital-wallet";             Title = "Ch 27 · Digital Wallet" }
  @{ Src = "28. Stock Exchange";                       Slug = "28-stock-exchange";             Title = "Ch 28 · Stock Exchange" }
)

foreach ($ch in $chapters) {
    $srcFolder = Join-Path $root $ch.Src
    $slug = $ch.Slug
    $title = $ch.Title
    
    # Find the readme (case-insensitive)
    $readmeFile = Get-ChildItem -Path $srcFolder -Filter "*.md" | Select-Object -First 1
    if (-not $readmeFile) {
        Write-Warning "No markdown file found in: $srcFolder"
        continue
    }
    
    # Read content
    $content = Get-Content $readmeFile.FullName -Raw -Encoding UTF8
    
    # Fix image paths: ./images/foo.png -> /images/<slug>/foo.png
    $content = $content -replace '\./images/', "/images/$slug/"
    $content = $content -replace '\./images//', "/images/$slug/"  # fix double slash variants
    
    # Add frontmatter if not present
    if (-not $content.TrimStart().StartsWith("---")) {
        $frontmatter = "---`ntitle: $title`n---`n`n"
        $content = $frontmatter + $content
    }
    
    # Write to docs/chapters/<slug>.md
    $outFile = Join-Path $docsChapters "$slug.md"
    $content | Set-Content -Path $outFile -Encoding UTF8 -NoNewline
    Write-Host "✓ Created: chapters/$slug.md"
    
    # Copy images
    $srcImages = Join-Path $srcFolder "images"
    if (Test-Path $srcImages) {
        $destImages = Join-Path $docsPublic "images\$slug"
        New-Item -ItemType Directory -Path $destImages -Force | Out-Null
        Copy-Item -Path "$srcImages\*" -Destination $destImages -Recurse -Force
        $imgCount = (Get-ChildItem $destImages).Count
        Write-Host "  → Copied $imgCount images to public/images/$slug/"
    }
}

Write-Host "`n✅ All chapters processed!"
