// Generates lightweight, branded SVG placeholders named 1:1 to the content
// layer. Each is a distinct mauve/gold gradient + motif + label, so the demo
// looks intentional and real .webp photography is a drop-in replacement later.
//
// Run with: node scripts/generate-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'salon');

// Soft, spa-like gradient pairs (mauve / gold / blush).
const palettes = [
  ['#c4a8bd', '#744a6b'],
  ['#a87f9d', '#5f3d58'],
  ['#ddccd8', '#8d5e82'],
  ['#e8cd92', '#9a6824'],
  ['#dcb35f', '#7b5021'],
  ['#efe7ed', '#a87f9d'],
  ['#c4a8bd', '#9a6824'],
  ['#a87f9d', '#43303f'],
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
  const seed = hashIndex(label, 360);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="disc" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#fff" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#faf7f4" stop-opacity="0.82"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${cy + 8}" r="${r + 6}" fill="#241f23" opacity="0.16" filter="url(#soft)"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#disc)"/>
  <g transform="rotate(${seed} ${cx} ${cy})" opacity="0.85">
    <path d="M${cx} ${cy - r * 0.55} C ${cx + r * 0.5} ${cy - r * 0.2}, ${cx + r * 0.5} ${cy + r * 0.4}, ${cx} ${cy + r * 0.55} C ${cx - r * 0.5} ${cy + r * 0.4}, ${cx - r * 0.5} ${cy - r * 0.2}, ${cx} ${cy - r * 0.55} Z" fill="${b}" opacity="0.5"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.18}" fill="${a}"/>
  </g>
  <text x="${cx}" y="${h - 34}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(h * 0.075)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
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
  <circle cx="${cx}" cy="${h * 0.42}" r="${w * 0.2}" fill="#faf7f4" opacity="0.92"/>
  <path d="M${cx - w * 0.3} ${h} C ${cx - w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h * 0.72}, ${cx + w * 0.3} ${h} Z" fill="#faf7f4" opacity="0.92"/>
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
      <stop offset="0" stop-color="#fff" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="#241f23" opacity="0.10"><rect x="0" y="${h * 0.64}" width="${w}" height="${h * 0.36}"/></g>
  <g stroke="#fff" stroke-opacity="0.16" stroke-width="2">
    <line x1="0" y1="${h * 0.3}" x2="${w}" y2="${h * 0.24}"/>
    <line x1="0" y1="${h * 0.5}" x2="${w}" y2="${h * 0.45}"/>
  </g>
  <text x="40" y="${h - 38}" font-family="Georgia, serif" font-size="${Math.round(h * 0.06)}" font-weight="600" fill="#fff" opacity="0.96">${escapeXml(label)}</text>
</svg>`;
}

function heroSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Maison Lumiere interior">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5f3d58"/>
      <stop offset="0.5" stop-color="#8d5e82"/>
      <stop offset="1" stop-color="#43303f"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.7" cy="0.25" r="0.6">
      <stop offset="0" stop-color="#dcb35f" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#dcb35f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.2" cy="0.8" r="0.5">
      <stop offset="0" stop-color="#c4a8bd" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#c4a8bd" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <g fill="#faf7f4">
    <circle cx="${w * 0.25}" cy="${h * 0.68}" r="120" opacity="0.07"/>
    <circle cx="${w * 0.78}" cy="${h * 0.42}" r="180" opacity="0.05"/>
  </g>
</svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Maison Lumiere">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5f3d58"/>
      <stop offset="1" stop-color="#8d5e82"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${w * 0.82}" cy="${h * 0.5}" r="220" fill="#dcb35f" opacity="0.25"/>
  <text x="80" y="${h * 0.46}" font-family="Georgia, serif" font-size="80" font-weight="700" fill="#fff">Maison Lumi&#232;re</text>
  <text x="84" y="${h * 0.46 + 68}" font-family="Inter, sans-serif" font-size="34" fill="#f4e7c9" opacity="0.95">Hair &#183; Skin &#183; Spa</text>
</svg>`;
}

const services = [
  ['cut-and-style', 'Cut & Style'],
  ['hair-spa', 'Hair Spa'],
  ['balayage', 'Balayage'],
  ['keratin-treatment', 'Keratin Treatment'],
  ['signature-facial', 'Signature Facial'],
  ['hydrating-facial', 'Hydrating Facial'],
  ['anti-aging-facial', 'Anti-Aging Facial'],
  ['aromatherapy-massage', 'Aromatherapy Massage'],
  ['hot-stone-massage', 'Hot Stone Massage'],
  ['body-polish', 'Body Polish'],
  ['manicure', 'Manicure'],
  ['pedicure', 'Pedicure'],
  ['gel-nails', 'Gel Nails'],
];

const team = [
  ['amara-okafor', 'Amara'],
  ['lena-park', 'Lena'],
  ['sofia-rossi', 'Sofia'],
  ['maya-singh', 'Maya'],
];

const galleryScenes = [
  ['salon-interior', 'Salon Interior'],
  ['styling-station', 'Styling Station'],
  ['spa-room', 'Spa Room'],
  ['product-shelf', 'Products'],
  ['nail-bar', 'Nail Bar'],
  ['reception', 'Reception'],
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
write('about-studio.svg', sceneSvg('The Studio', 800, 1000));
write('og-image.svg', ogSvg(1200, 630));

console.log('\nDone — placeholders generated.');
