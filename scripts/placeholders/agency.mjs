// Generates the agency landing page's Open Graph image.
// Run with: node scripts/placeholders/agency.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'agency');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="Lumen Studio — Websites that win local customers">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d0d17"/>
      <stop offset="1" stop-color="#07070d"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.85" cy="0.2" r="0.6">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.1" cy="0.9" r="0.55">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <path d="M96 120v90h70" fill="none" stroke="url(#mark)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="96" y="330" font-family="Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Lumen Studio</text>
  <text x="98" y="396" font-family="Arial, sans-serif" font-size="34" font-weight="500" fill="#a5b4fc">Websites that win local customers</text>
  <text x="98" y="500" font-family="Arial, sans-serif" font-size="24" fill="#71717a">Restaurants · Salons · Dental · Fitness — explore the live demos</text>
</svg>`;

mkdirSync(root, { recursive: true });
writeFileSync(join(root, 'og-image.svg'), og.trim() + '\n');
console.log('wrote agency/og-image.svg');
