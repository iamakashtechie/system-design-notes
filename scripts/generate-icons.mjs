import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../docs/public');
const logoSvgPath = path.resolve(publicDir, 'logo.svg');

const svgBuffer = fs.readFileSync(logoSvgPath);

async function generate() {
  console.log('Generating PWA icons from logo.svg...');

  // 64x64
  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.resolve(publicDir, 'pwa-64x64.png'));
  console.log('✓ pwa-64x64.png');

  // 192x192
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.resolve(publicDir, 'pwa-192x192.png'));
  console.log('✓ pwa-192x192.png');

  // 512x512
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve(publicDir, 'pwa-512x512.png'));
  console.log('✓ pwa-512x512.png');

  // apple-touch-icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // maskable icon: 512x512 with safe area margin (solid gradient background + centered icon)
  const maskableSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
      <linearGradient id="lg" x1="0" y1="0" x2="384" y2="384" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#8b5cf6"/>
      </linearGradient>
      <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#ef4444"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" fill="url(#bg)"/>
    <g transform="translate(64, 64)">
      <rect width="384" height="384" rx="96" fill="url(#lg)"/>
      <rect x="96" y="108" width="192" height="60" rx="18" fill="white" opacity="0.9"/>
      <rect x="96" y="192" width="192" height="60" rx="18" fill="white" opacity="0.7"/>
      <circle cx="252" cy="138" r="12" fill="url(#lg2)"/>
      <circle cx="252" cy="222" r="12" fill="url(#lg2)"/>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.resolve(publicDir, 'maskable-icon-512x512.png'));
  console.log('✓ maskable-icon-512x512.png');

  // favicon.ico (can be 32x32 png saved as ico/png)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.resolve(publicDir, 'favicon.ico'));
  console.log('✓ favicon.ico');

  console.log('All icons generated successfully!');
}

generate().catch(console.error);
