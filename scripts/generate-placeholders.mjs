// Generates lightweight, branded SVG placeholders named 1:1 to the content
// layer. Each is a distinct warm gradient + plated motif + label, so the demo
// looks intentional and real .webp photography is a drop-in replacement later.
//
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

// A small deterministic palette of appetizing gradient pairs.
const palettes = [
  ['#f3a847', '#bf5f0f'],
  ['#e9ad53', '#9c4711'],
  ['#d97915', '#683115'],
  ['#e2922b', '#7f3a15'],
  ['#f2cd8f', '#bf5f0f'],
  ['#c2d4ba', '#41613a'],
  ['#f9e7c8', '#d97915'],
  ['#e9ad53', '#557a4b'],
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Food-style placeholder: gradient backdrop, soft plate, layered "food" blobs.
function dishSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  const cx = w / 2;
  const cy = h * 0.46;
  const r = Math.min(w, h) * 0.3;
  const seed = hashIndex(label, 360);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="plate" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#fff" stop-opacity="0.96"/>
      <stop offset="1" stop-color="#fbf7f0" stop-opacity="0.9"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${cy + 8}" r="${r + 6}" fill="#1c1917" opacity="0.18" filter="url(#soft)"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#plate)"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.72}" fill="none" stroke="${b}" stroke-opacity="0.18" stroke-width="2"/>
  <g transform="rotate(${seed} ${cx} ${cy})">
    <ellipse cx="${cx - r * 0.22}" cy="${cy - r * 0.1}" rx="${r * 0.42}" ry="${r * 0.34}" fill="${b}" opacity="0.85"/>
    <ellipse cx="${cx + r * 0.26}" cy="${cy + r * 0.14}" rx="${r * 0.36}" ry="${r * 0.3}" fill="${a}" opacity="0.95"/>
    <circle cx="${cx + r * 0.05}" cy="${cy - r * 0.26}" r="${r * 0.16}" fill="#fff" opacity="0.7"/>
    <circle cx="${cx - r * 0.3}" cy="${cy + r * 0.28}" r="${r * 0.1}" fill="#fff" opacity="0.55"/>
  </g>
  <text x="${cx}" y="${h - 34}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(h * 0.07)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
</svg>`;
}

// Ambient/scene placeholder: layered gradient bands + grain feel, label badge.
function sceneSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.7" cy="0.2" r="0.8">
      <stop offset="0" stop-color="#fff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="#1c1917" opacity="0.12">
    <rect x="0" y="${h * 0.62}" width="${w}" height="${h * 0.38}"/>
  </g>
  <g stroke="#fff" stroke-opacity="0.16" stroke-width="2">
    <line x1="0" y1="${h * 0.3}" x2="${w}" y2="${h * 0.22}"/>
    <line x1="0" y1="${h * 0.5}" x2="${w}" y2="${h * 0.44}"/>
  </g>
  <text x="40" y="${h - 38}" font-family="Georgia, serif" font-size="${Math.round(h * 0.06)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
</svg>`;
}

// Hero: cinematic, wide.
function heroSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Saffron and Sage dining">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7f3a15"/>
      <stop offset="0.5" stop-color="#bf5f0f"/>
      <stop offset="1" stop-color="#683115"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.3" cy="0.25" r="0.6">
      <stop offset="0" stop-color="#f3a847" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#f3a847" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.8" cy="0.8" r="0.5">
      <stop offset="0" stop-color="#557a4b" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#557a4b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <g opacity="0.5" fill="#fbf7f0">
    <circle cx="${w * 0.2}" cy="${h * 0.7}" r="120" opacity="0.08"/>
    <circle cx="${w * 0.75}" cy="${h * 0.4}" r="180" opacity="0.06"/>
  </g>
</svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Saffron and Sage">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7f3a15"/>
      <stop offset="1" stop-color="#d97915"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${w * 0.82}" cy="${h * 0.5}" r="220" fill="#f3a847" opacity="0.25"/>
  <text x="80" y="${h * 0.46}" font-family="Georgia, serif" font-size="84" font-weight="700" fill="#fff">Saffron &amp; Sage</text>
  <text x="84" y="${h * 0.46 + 70}" font-family="Inter, sans-serif" font-size="34" fill="#fbf7f0" opacity="0.9">A Modern Indian Kitchen</text>
</svg>`;
}

const menu = [
  ['masala-dosa', 'Masala Dosa'],
  ['idli', 'Idli'],
  ['chicken-tikka', 'Chicken Tikka'],
  ['samosa-chaat', 'Samosa Chaat'],
  ['paneer-butter-masala', 'Paneer Butter Masala'],
  ['butter-chicken', 'Butter Chicken'],
  ['lamb-rogan-josh', 'Lamb Rogan Josh'],
  ['dal-makhani', 'Dal Makhani'],
  ['garlic-naan', 'Garlic Naan'],
  ['saffron-biryani', 'Saffron Biryani'],
  ['gulab-jamun', 'Gulab Jamun'],
  ['pistachio-kulfi', 'Pistachio Kulfi'],
];

const galleryScenes = [
  ['dining-room', 'Dining Room'],
  ['tandoor', 'The Tandoor'],
  ['thali', 'Sharing Thali'],
  ['spices', 'House Spices'],
  ['cocktails', 'Signature Cocktails'],
  ['terrace', 'Terrace Seating'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [file, label] of menu) write(`menu/${file}.svg`, dishSvg(label, 800, 600));
for (const [file, label] of galleryScenes) write(`gallery/${file}.svg`, sceneSvg(label, 900, 700));
write('hero.svg', heroSvg(1920, 1080));
write('about-chef.svg', sceneSvg('In the Kitchen', 800, 1000));
write('og-image.svg', ogSvg(1200, 630));

console.log('\nDone — placeholders generated.');
