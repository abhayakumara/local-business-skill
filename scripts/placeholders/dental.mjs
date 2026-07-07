// Generates lightweight, branded SVG placeholders named 1:1 to the content
// layer. Each is a distinct sky/mint gradient + motif + label, so the demo
// looks intentional and real .webp photography is a drop-in replacement later.
//
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'dental');

// Clean, clinical gradient pairs (sky / mint / soft slate).
const palettes = [
  ['#79bade', '#1f6498'],
  ['#aed6ec', '#2a7fb6'],
  ['#71d8ba', '#17826a'],
  ['#a8ead4', '#23a283'],
  ['#d8ebf6', '#459ace'],
  ['#d2f5e9', '#3fbf9c'],
  ['#79bade', '#23a283'],
  ['#aed6ec', '#1c5078'],
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Service tile: soft gradient + a calm circular motif + label.
function serviceSvg(label, w, h) {
  const [a, b] = palettes[hashIndex(label, palettes.length)];
  const cx = w / 2;
  const cy = h * 0.44;
  const r = Math.min(w, h) * 0.26;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="disc" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#fff" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#f3f8fb" stop-opacity="0.85"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${cy + 8}" r="${r + 6}" fill="#0f1f2b" opacity="0.12" filter="url(#soft)"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#disc)"/>
  <g transform="translate(${cx} ${cy})" opacity="0.9">
    <path d="M0 ${-r * 0.5} C ${-r * 0.42} ${-r * 0.62}, ${-r * 0.62} ${-r * 0.3}, ${-r * 0.5} ${r * 0.05} C ${-r * 0.42} ${r * 0.5}, ${-r * 0.2} ${r * 0.62}, ${-r * 0.08} ${r * 0.3} C ${-r * 0.02} ${r * 0.12}, ${r * 0.02} ${r * 0.12}, ${r * 0.08} ${r * 0.3} C ${r * 0.2} ${r * 0.62}, ${r * 0.42} ${r * 0.5}, ${r * 0.5} ${r * 0.05} C ${r * 0.62} ${-r * 0.3}, ${r * 0.42} ${-r * 0.62}, 0 ${-r * 0.5} Z" fill="${b}" opacity="0.45"/>
  </g>
  <text x="${cx}" y="${h - 34}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(h * 0.072)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
</svg>`;
}

// Portrait placeholder for team members.
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
  <circle cx="${cx}" cy="${h * 0.42}" r="${w * 0.2}" fill="#f3f8fb" opacity="0.94"/>
  <path d="M${cx - w * 0.3} ${h} C ${cx - w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h} Z" fill="#f3f8fb" opacity="0.94"/>
  <text x="${cx}" y="${h - 26}" text-anchor="middle" font-family="Inter, sans-serif" font-size="${Math.round(h * 0.05)}" font-weight="600" fill="#fff" opacity="0.9">${escapeXml(label)}</text>
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
      <stop offset="0" stop-color="#fff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="#0f1f2b" opacity="0.08"><rect x="0" y="${h * 0.64}" width="${w}" height="${h * 0.36}"/></g>
  <g stroke="#fff" stroke-opacity="0.18" stroke-width="2">
    <line x1="0" y1="${h * 0.3}" x2="${w}" y2="${h * 0.24}"/>
    <line x1="0" y1="${h * 0.5}" x2="${w}" y2="${h * 0.45}"/>
  </g>
  <text x="40" y="${h - 38}" font-family="Georgia, serif" font-size="${Math.round(h * 0.06)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
</svg>`;
}

function heroSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Northway Dental Studio reception">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1f6498"/>
      <stop offset="0.5" stop-color="#2a7fb6"/>
      <stop offset="1" stop-color="#1b3a56"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.7" cy="0.25" r="0.6">
      <stop offset="0" stop-color="#3fbf9c" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#3fbf9c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.2" cy="0.8" r="0.5">
      <stop offset="0" stop-color="#aed6ec" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#aed6ec" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <g fill="#f3f8fb">
    <circle cx="${w * 0.25}" cy="${h * 0.68}" r="120" opacity="0.07"/>
    <circle cx="${w * 0.78}" cy="${h * 0.42}" r="180" opacity="0.05"/>
  </g>
</svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Northway Dental Studio">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1f6498"/>
      <stop offset="1" stop-color="#2a7fb6"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${w * 0.82}" cy="${h * 0.5}" r="220" fill="#3fbf9c" opacity="0.28"/>
  <text x="80" y="${h * 0.46}" font-family="Georgia, serif" font-size="76" font-weight="700" fill="#fff">Northway Dental</text>
  <text x="84" y="${h * 0.46 + 64}" font-family="Inter, sans-serif" font-size="32" fill="#d2f5e9" opacity="0.95">Modern, Gentle Dentistry</text>
</svg>`;
}

const services = [
  ['checkup-and-clean', 'Check-up & Clean'],
  ['dental-hygiene', 'Hygiene & Gum Care'],
  ['childrens-dentistry', "Children's Dentistry"],
  ['emergency-care', 'Emergency Care'],
  ['teeth-whitening', 'Teeth Whitening'],
  ['porcelain-veneers', 'Porcelain Veneers'],
  ['composite-bonding', 'Composite Bonding'],
  ['clear-aligners', 'Clear Aligners'],
  ['retainers', 'Retainers'],
  ['dental-implants', 'Dental Implants'],
  ['crowns-and-bridges', 'Crowns & Bridges'],
  ['tooth-coloured-fillings', 'Tooth-Coloured Fillings'],
];

const team = [
  ['dr-elena-marsh', 'Dr. Marsh'],
  ['dr-james-oduya', 'Dr. Oduya'],
  ['dr-aisha-khan', 'Dr. Khan'],
  ['marie-chen', 'Marie'],
];

const galleryScenes = [
  ['reception', 'Reception'],
  ['treatment-room', 'Treatment Room'],
  ['technology', 'Technology'],
  ['consultation', 'Consultation'],
  ['kids-corner', 'Kids Corner'],
  ['sterilization', 'Sterilization'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [file, label] of services) write(`services/${file}.svg`, serviceSvg(label, 800, 600));
for (const [file, label] of team) write(`team/${file}.svg`, portraitSvg(label, 600, 800));
for (const [file, label] of galleryScenes) write(`gallery/${file}.svg`, sceneSvg(label, 900, 700));
write('hero.svg', heroSvg(1920, 1080));
write('about-practice.svg', sceneSvg('Treatment Room', 800, 1000));
write('og-image.svg', ogSvg(1200, 630));

console.log('\nDone — placeholders generated.');
