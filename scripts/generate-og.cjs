/**
 * OG 이미지 생성기 — sharp 로 SVG → PNG (1200x630)
 * 기본 컬러: 다크 블루(Navy). 실행: node scripts/generate-og.cjs
 */
const sharp = require('sharp');
const path = require('path');

const W = 1200;
const H = 630;

// 다크 블루(Navy) 팔레트 — site.ts colors[0] = blue(#1B2A4A) 기준
const NAVY_900 = '#0A1428';
const NAVY_800 = '#1B2A4A';
const BLUE = '#3D6FE0';
const BLUE_LIGHT = '#5B8AF0';

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY_900}"/>
      <stop offset="60%" stop-color="${NAVY_800}"/>
      <stop offset="100%" stop-color="#24365C"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BLUE}"/>
      <stop offset="100%" stop-color="${BLUE_LIGHT}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="1050" cy="80" r="280" fill="${BLUE}" opacity="0.05"/>
  <circle cx="1080" cy="50" r="180" fill="${BLUE}" opacity="0.04"/>
  <circle cx="100" cy="600" r="200" fill="${BLUE}" opacity="0.04"/>

  <!-- Grid overlay -->
  <line x1="400" y1="0" x2="400" y2="${H}" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="800" y1="0" x2="800" y2="${H}" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="0" y1="210" x2="${W}" y2="210" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="0" y1="420" x2="${W}" y2="420" stroke="white" stroke-width="0.3" opacity="0.04"/>

  <!-- Mini bar-chart motif (right) -->
  <g transform="translate(890,360)">
    <rect x="0"   y="60"  width="34" height="80"  rx="4" fill="${BLUE}" opacity="0.55"/>
    <rect x="48"  y="20"  width="34" height="120" rx="4" fill="${BLUE_LIGHT}" opacity="0.7"/>
    <rect x="96"  y="92"  width="34" height="48"  rx="4" fill="${BLUE}" opacity="0.45"/>
    <rect x="144" y="0"   width="34" height="140" rx="4" fill="${BLUE_LIGHT}" opacity="0.85"/>
    <rect x="192" y="48"  width="34" height="92"  rx="4" fill="${BLUE}" opacity="0.6"/>
    <polyline points="17,70 65,30 113,100 161,10 209,58" fill="none" stroke="white" stroke-width="3" opacity="0.55"/>
  </g>

  <!-- Branding eyebrow -->
  <rect x="72" y="60" width="32" height="3" fill="url(#accent)" rx="1"/>
  <text x="72" y="92" fill="${BLUE_LIGHT}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="3">DREAMIT BIZ · 2026 KERIS</text>

  <!-- Main title -->
  <text x="72" y="232" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" letter-spacing="-1">데이터 분석 실습</text>
  <text x="72" y="312" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" letter-spacing="-1">&amp; 시각화</text>

  <!-- Subtitle -->
  <text x="72" y="368" fill="rgba(255,255,255,0.72)" font-family="Arial, sans-serif" font-size="23" font-weight="400">엑셀 기반 EDA · 시각화 · 대시보드 구축 · 1일 6시간 중급</text>

  <!-- Accent line -->
  <rect x="72" y="398" width="100" height="4" fill="url(#accent)" rx="2"/>

  <!-- Tag chips -->
  <rect x="72" y="456" width="76" height="38" rx="6" fill="rgba(61,111,224,0.16)" stroke="${BLUE}" stroke-width="1"/>
  <text x="110" y="481" fill="${BLUE_LIGHT}" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle">EDA</text>

  <rect x="160" y="456" width="120" height="38" rx="6" fill="rgba(61,111,224,0.16)" stroke="${BLUE}" stroke-width="1"/>
  <text x="220" y="481" fill="${BLUE_LIGHT}" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle">Visualization</text>

  <rect x="292" y="456" width="116" height="38" rx="6" fill="rgba(61,111,224,0.16)" stroke="${BLUE}" stroke-width="1"/>
  <text x="350" y="481" fill="${BLUE_LIGHT}" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle">Dashboard</text>

  <!-- Bottom URL -->
  <text x="72" y="572" fill="rgba(255,255,255,0.42)" font-family="monospace" font-size="16" letter-spacing="1">data.dreamitbiz.com</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accent)"/>
</svg>`;

(async () => {
  const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(outPath);

  const stats = require('fs').statSync(outPath);
  console.log(`OG image generated: ${outPath}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(1)} KB · ${W}x${H}`);
})();
