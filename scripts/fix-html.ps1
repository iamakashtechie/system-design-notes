# Fix all raw HTML issues in VitePress chapter markdown files
# Converts <img src="..." width="..."> to proper markdown ![](...)
# Removes wrapping <div style="margin-left"> elements

$docsChapters = "D:\Shared\system-design-notes\docs\chapters"

$files = Get-ChildItem -Path $docsChapters -Filter "*.md"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # 1. Fix self-closing <img ... > and <img ...> tags (convert to markdown)
    #    Pattern: <img src="PATH" alt="ALT" width="W"> or variants
    $content = [regex]::Replace($content, 
        '<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+width="[^"]*")?(?:\s+height="[^"]*")?\s*/?>', 
        { param($m) "![$($m.Groups[2].Value)]($($m.Groups[1].Value))" })
    
    # Also handle alt after width
    $content = [regex]::Replace($content, 
        '<img\s+src="([^"]+)"(?:\s+width="[^"]*")?(?:\s+alt="([^"]*)")?(?:\s+height="[^"]*")?\s*/?>', 
        { param($m) "![$($m.Groups[2].Value)]($($m.Groups[1].Value))" })
    
    # 2. Remove wrapping div with margin-left
    $content = [regex]::Replace($content, 
        '<div\s+style="[^"]*margin[^"]*">\s*', 
        '', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    
    # 3. Remove closing </div> that are standalone on a line (after removing opening divs)
    $content = [regex]::Replace($content, 
        '^\s*</div>\s*$', 
        '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    # 4. Remove remaining standalone <div> / </div> lines
    $content = [regex]::Replace($content, 
        '^\s*</?div[^>]*>\s*$', 
        '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    # 5. Collapse triple+ blank lines into double blank lines
    $content = [regex]::Replace($content, '\n{3,}', "`n`n")
    
    if ($content -ne $original) {
        $content | Set-Content -Path $file.FullName -Encoding UTF8 -NoNewline
        Write-Host "✓ Fixed: $($file.Name)"
    } else {
        Write-Host "  (no changes): $($file.Name)"
    }
}

Write-Host "`n✅ All files processed!"
