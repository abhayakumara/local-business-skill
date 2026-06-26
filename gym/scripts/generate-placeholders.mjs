// Generates lightweight, branded SVG placeholders named 1:1 to the content
// layer. Each is a distinct forge/volt gradient + motif + label, so the demo
// looks intentional and real .webp photography is a drop-in replacement later.
//
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

// Bold, high-energy gradient pairs (forge orange / volt lime / charcoal).
const palettes = [
  ['#fc6a37', '#b9270c'],
  ['#f24a16', '#762012'],
  ['#9eea1a', '#3b5d10'],
  ['#b6f93f', '#48760c'],
  ['#ff9568', '#932312'],
  ['#2c2a25', '#15130f'],
  ['#fc6a37', '#15130f'],
  ['#7ec40c', '#15130f'],
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Program tile: bold gradient + an energetic chevron motif + label.
function programSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  const cx = w / 2;
  const cy = h * 0.42;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <g stroke="#fff" stroke-opacity="0.16" stroke-width="${Math.round(h * 0.05)}" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M${cx - h * 0.18} ${cy - h * 0.14} L${cx} ${cy} L${cx - h * 0.18} ${cy + h * 0.14}"/>
    <path d="M${cx + h * 0.02} ${cy - h * 0.14} L${cx + h * 0.2} ${cy} L${cx + h * 0.02} ${cy + h * 0.14}"/>
  </g>
  <rect x="0" y="${h * 0.7}" width="${w}" height="${h * 0.3}" fill="#15130f" opacity="0.32"/>
  <text x="40" y="${h - 34}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.085)}" font-weight="800" letter-spacing="1" fill="#fff" text-transform="uppercase">${escapeXml(label.toUpperCase())}</text>
</svg>`;
}

// Portrait placeholder for trainers.
function portraitSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  const cx = w / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${h * 0.42}" r="${w * 0.2}" fill="#f4f4f2" opacity="0.92"/>
  <path d="M${cx - w * 0.3} ${h} C ${cx - w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h} Z" fill="#f4f4f2" opacity="0.92"/>
  <text x="${cx}" y="${h - 26}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.05)}" font-weight="800" fill="#fff" opacity="0.95">${escapeXml(label.toUpperCase())}</text>
</svg>`;
}

// Ambient scene placeholder.
function sceneSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.7" cy="0.2" r="0.8">
      <stop offset="0" stop-color="#fff" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="#15130f" opacity="0.22"><rect x="0" y="${h * 0.66}" width="${w}" height="${h * 0.34}"/></g>
  <g stroke="#9eea1a" stroke-opacity="0.5" stroke-width="3">
    <line x1="40" y1="${h - 64}" x2="${w * 0.32}" y2="${h - 64}"/>
  </g>
  <text x="40" y="${h - 36}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.065)}" font-weight="800" letter-spacing="1" fill="#fff" opacity="0.96">${escapeXml(label.toUpperCase())}</text>
</svg>`;
}

function heroSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Apex Athletic Club training floor">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2c2a25"/>
      <stop offset="0.55" stop-color="#15130f"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.72" cy="0.28" r="0.6">
      <stop offset="0" stop-color="#f24a16" stop-opacity="0.65"/>
      <stop offset="1" stop-color="#f24a16" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.2" cy="0.85" r="0.5">
      <stop offset="0" stop-color="#9eea1a" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#9eea1a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <g stroke="#fff" stroke-opacity="0.05" stroke-width="2">
    <line x1="0" y1="${h * 0.7}" x2="${w}" y2="${h * 0.66}"/>
    <line x1="0" y1="${h * 0.82}" x2="${w}" y2="${h * 0.8}"/>
  </g>
</svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Apex Athletic Club">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2c2a25"/>
      <stop offset="1" stop-color="#15130f"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${w * 0.84}" cy="${h * 0.5}" r="220" fill="#f24a16" opacity="0.35"/>
  <text x="80" y="${h * 0.46}" font-family="Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="2" fill="#fff">APEX</text>
  <text x="84" y="${h * 0.46 + 64}" font-family="Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="3" fill="#9eea1a">TRAIN WITH INTENT</text>
</svg>`;
}

const programs = [
  ['strength-foundations', 'Strength Foundations'],
  ['powerbuilding', 'Powerbuilding'],
  ['kettlebell-strength', 'Kettlebell'],
  ['hiit-engine', 'HIIT Engine'],
  ['rowing-intervals', 'Rowing'],
  ['metcon', 'MetCon'],
  ['olympic-lifting', 'Olympic Lifting'],
  ['boxing-fundamentals', 'Boxing'],
  ['mobility-flow', 'Mobility Flow'],
  ['yoga-restore', 'Yoga & Restore'],
];

const trainers = [
  ['marcus-reid', 'Marcus'],
  ['tasha-bell', 'Tasha'],
  ['diego-santos', 'Diego'],
  ['priya-nair', 'Priya'],
];

const galleryScenes = [
  ['training-floor', 'Training Floor'],
  ['rig', 'The Rig'],
  ['free-weights', 'Free Weights'],
  ['conditioning-zone', 'Conditioning'],
  ['community', 'Community'],
  ['recovery-lounge', 'Recovery'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [file, label] of programs) write(`programs/${file}.svg`, programSvg(label, 800, 600));
for (const [file, label] of trainers) write(`trainers/${file}.svg`, portraitSvg(label, 600, 800));
for (const [file, label] of galleryScenes) write(`gallery/${file}.svg`, sceneSvg(label, 900, 700));
write('hero.svg', heroSvg(1920, 1080));
write('about-gym.svg', sceneSvg('The Floor', 800, 1000));
write('og-image.svg', ogSvg(1200, 630));

console.log('\nDone — placeholders generated.');
