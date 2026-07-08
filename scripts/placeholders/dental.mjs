// Generates rich, branded SVG placeholder art named 1:1 to the content layer.
// Light, clinical-calm scenes: soft sky/mint waves, sparkles and rounded
// shapes — no flat colour blocks. Real .webp photography drops in 1:1.
//
// Run with: node scripts/placeholders/dental.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'dental');

const palettes = [
  { a: '#d8ebf6', b: '#eef6fb', deep: '#2a7fb6', mint: '#3fbf9c', ink: '#1c507b' },
  { a: '#d2f5e9', b: '#edfbf6', deep: '#23a283', mint: '#459ace', ink: '#156857' },
  { a: '#aed6ec', b: '#eef6fb', deep: '#1f6498', mint: '#71d8ba', ink: '#1c4566' },
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function defs(p, id, w, h) {
  return `<defs>
    <linearGradient id="bg${id}" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0" stop-color="${p.b}"/><stop offset="0.6" stop-color="${p.a}"/><stop offset="1" stop-color="${p.b}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.7" cy="0.25" r="0.7">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="wave${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${p.deep}" stop-opacity="0.16"/><stop offset="1" stop-color="${p.mint}" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="fade${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.ink}" stop-opacity="0"/><stop offset="1" stop-color="${p.ink}" stop-opacity="0.78"/></linearGradient>
  </defs>`;
}

function waves(w, h, id) {
  return `<g>
    <path d="M0 ${h * 0.62} C ${w * 0.25} ${h * 0.5}, ${w * 0.4} ${h * 0.74}, ${w * 0.68} ${h * 0.64} S ${w} ${h * 0.52}, ${w} ${h * 0.52} V${h} H0 Z" fill="url(#wave${id})"/>
    <path d="M0 ${h * 0.76} C ${w * 0.3} ${h * 0.64}, ${w * 0.5} ${h * 0.88}, ${w * 0.78} ${h * 0.76} S ${w} ${h * 0.68}, ${w} ${h * 0.68} V${h} H0 Z" fill="url(#wave${id})" opacity="0.8"/>
  </g>`;
}

function tooth(cx, cy, sc, p) {
  return `<g transform="translate(${cx},${cy}) scale(${sc})">
    <circle cx="0" cy="0" r="86" fill="#ffffff" opacity="0.75"/>
    <circle cx="0" cy="0" r="86" fill="none" stroke="${p.deep}" stroke-opacity="0.3" stroke-width="2"/>
    <path d="M-34 -30 c 0 -22 20 -30 34 -30 c 14 0 34 8 34 30 c 0 16 -7 26 -10 42 c -2.6 14 -4 34 -13 34 c -8 0 -6 -26 -11 -26 c -5 0 -3 26 -11 26 c -9 0 -10.4 -20 -13 -34 c -3 -16 -10 -26 -10 -42 Z" fill="${p.deep}" opacity="0.85"/>
    <path d="M-14 -42 q 8 -8 20 -6" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  </g>`;
}

function sparkle(x, y, r, color, o = 0.7) {
  return `<path d="M${x} ${y - r} q ${r * 0.2} ${r * 0.8} ${r} ${r} q ${-r * 0.8} ${r * 0.2} ${-r} ${r} q ${-r * 0.2} ${-r * 0.8} ${-r} ${-r} q ${r * 0.8} ${-r * 0.2} ${r} ${-r} Z" fill="${color}" opacity="${o}"/>`;
}

function bubbles(seed, w, h, color, n = 8) {
  let out = '';
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 1103515245 + 12345) >>> 0;
    const x = (s % 1000) / 1000 * w;
    s = (s * 1103515245 + 12345) >>> 0;
    const y = (s % 1000) / 1000 * h * 0.6;
    const r = 4 + (s % 14);
    out += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r}" fill="none" stroke="${color}" stroke-opacity="0.25" stroke-width="1.5"/>`;
  }
  return out;
}

function label(w, h, id, text, sub) {
  return `<g>
    <rect x="0" y="${h * 0.7}" width="${w}" height="${h * 0.3}" fill="url(#fade${id})"/>
    <rect x="36" y="${h - 92}" width="26" height="3" rx="1.5" fill="#71d8ba"/>
    <text x="36" y="${h - 44}" font-family="Georgia, serif" font-size="${Math.round(h * 0.068)}" font-weight="600" fill="#ffffff">${esc(text)}</text>
    ${sub ? `<text x="36" y="${h - 18}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.03)}" letter-spacing="3" fill="#d2f5e9">${esc(sub.toUpperCase())}</text>` : ''}
  </g>`;
}

function serviceSvg(name, sub, w = 800, h = 600) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id, w, h)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${waves(w, h, id)}
  ${bubbles(hash(name), w, h, p.deep)}
  ${tooth(w * 0.66, h * 0.38, h / 620, p)}
  ${sparkle(w * 0.52, h * 0.18, 13, p.mint)}
  ${sparkle(w * 0.82, h * 0.55, 9, p.deep, 0.5)}
  ${label(w, h, id, name, sub)}
</svg>`;
}

function portraitSvg(name, sub, w = 600, h = 800) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  const cx = w / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id, w, h)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  <circle cx="${cx}" cy="${h * 0.4}" r="${w * 0.33}" fill="#ffffff" opacity="0.55"/>
  <circle cx="${cx}" cy="${h * 0.36}" r="${w * 0.185}" fill="#fdf6ef"/>
  <path d="M${cx - w * 0.3} ${h * 0.98} q 0 -${h * 0.25} ${w * 0.3} -${h * 0.25} q ${w * 0.3} 0 ${w * 0.3} ${h * 0.25} Z" fill="#ffffff"/>
  <path d="M${cx - w * 0.3} ${h * 0.98} q 0 -${h * 0.25} ${w * 0.3} -${h * 0.25} q ${w * 0.3} 0 ${w * 0.3} ${h * 0.25} Z" fill="${p.deep}" opacity="0.14"/>
  <path d="M${cx - w * 0.06} ${h * 0.79} h${w * 0.12} l${-w * 0.02} ${h * 0.1} h${-w * 0.08} Z" fill="${p.mint}" opacity="0.7"/>
  ${sparkle(w * 0.2, h * 0.18, 11, p.mint)}
  ${sparkle(w * 0.82, h * 0.26, 8, p.deep, 0.5)}
  ${bubbles(hash(name), w, h * 0.5, p.deep, 5)}
  ${label(w, h, id, name, sub)}
</svg>`;
}

function sceneSvg(name, sub, w = 900, h = 700) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id, w, h)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${waves(w, h, id)}
  <g opacity="0.5">
    <rect x="${w * 0.12}" y="${h * 0.24}" width="${w * 0.3}" height="${h * 0.34}" rx="18" fill="#ffffff" opacity="0.7"/>
    <rect x="${w * 0.48}" y="${h * 0.16}" width="${w * 0.22}" height="${h * 0.26}" rx="16" fill="#ffffff" opacity="0.5"/>
    <rect x="${w * 0.16}" y="${h * 0.3}" width="${w * 0.22}" height="6" rx="3" fill="${p.deep}" opacity="0.4"/>
    <rect x="${w * 0.16}" y="${h * 0.36}" width="${w * 0.16}" height="6" rx="3" fill="${p.deep}" opacity="0.25"/>
  </g>
  ${bubbles(hash(name) + 5, w, h, p.deep, 7)}
  ${sparkle(w * 0.8, h * 0.2, 13, p.mint)}
  ${label(w, h, id, name, sub)}
</svg>`;
}

function heroSvg(w = 1920, h = 1080) {
  const p = palettes[0];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Northway Dental Studio">
  <defs>
    <linearGradient id="hb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#12314a"/><stop offset="0.5" stop-color="#1f6498"/><stop offset="0.85" stop-color="#2a7fb6"/><stop offset="1" stop-color="#1c507b"/>
    </linearGradient>
    <radialGradient id="hg1" cx="0.75" cy="0.3" r="0.55"><stop offset="0" stop-color="#d2f5e9" stop-opacity="0.55"/><stop offset="1" stop-color="#d2f5e9" stop-opacity="0"/></radialGradient>
    <radialGradient id="hg2" cx="0.12" cy="0.85" r="0.5"><stop offset="0" stop-color="#71d8ba" stop-opacity="0.35"/><stop offset="1" stop-color="#71d8ba" stop-opacity="0"/></radialGradient>
    <radialGradient id="hv" cx="0.5" cy="0.5" r="0.95"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0d2438" stop-opacity="0.5"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#hb)"/>
  <rect width="${w}" height="${h}" fill="url(#hg1)"/>
  <rect width="${w}" height="${h}" fill="url(#hg2)"/>
  <path d="M0 ${h * 0.72} C ${w * 0.25} ${h * 0.6}, ${w * 0.45} ${h * 0.84}, ${w * 0.7} ${h * 0.72} S ${w} ${h * 0.62}, ${w} ${h * 0.62} V${h} H0 Z" fill="#ffffff" opacity="0.06"/>
  ${tooth(w * 0.74, h * 0.4, h / 560, { deep: '#eef6fb', mint: '#71d8ba', ink: '#fff' })}
  ${sparkle(w * 0.6, h * 0.16, 16, '#d2f5e9')}
  ${sparkle(w * 0.86, h * 0.6, 11, '#71d8ba', 0.6)}
  ${sparkle(w * 0.12, h * 0.24, 12, '#d8ebf6', 0.45)}
  <rect width="${w}" height="${h}" fill="url(#hv)"/>
</svg>`;
}

function ogSvg(w = 1200, h = 630) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Northway Dental Studio — Modern, Gentle Dentistry">
  <defs>
    <linearGradient id="ob" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#143a58"/><stop offset="0.6" stop-color="#1f6498"/><stop offset="1" stop-color="#2a7fb6"/></linearGradient>
    <radialGradient id="og1" cx="0.85" cy="0.35" r="0.5"><stop offset="0" stop-color="#d2f5e9" stop-opacity="0.55"/><stop offset="1" stop-color="#d2f5e9" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#ob)"/>
  <rect width="${w}" height="${h}" fill="url(#og1)"/>
  ${tooth(w * 0.83, h * 0.48, 1.5, { deep: '#eef6fb', mint: '#71d8ba', ink: '#fff' })}
  ${sparkle(w * 0.66, h * 0.16, 15, '#d2f5e9')}
  <rect x="64" y="${h * 0.3}" width="30" height="3.5" rx="1.75" fill="#71d8ba"/>
  <text x="64" y="${h * 0.47}" font-family="Georgia, serif" font-size="70" font-weight="600" fill="#ffffff">Northway Dental Studio</text>
  <text x="66" y="${h * 0.57}" font-family="Arial, sans-serif" font-size="26" letter-spacing="4" fill="#d2f5e9">MODERN, GENTLE DENTISTRY · NEW DELHI</text>
</svg>`;
}

const services = [
  ['checkup-and-clean', 'Check-up & Clean', 'Every 6 months'],
  ['dental-hygiene', 'Hygiene & Gum Care', 'Healthy foundations'],
  ['childrens-dentistry', "Children's Dentistry", 'Gentle & fun'],
  ['emergency-care', 'Emergency Care', 'Same-day'],
  ['teeth-whitening', 'Teeth Whitening', 'Brighter smile'],
  ['porcelain-veneers', 'Porcelain Veneers', 'Handcrafted'],
  ['composite-bonding', 'Composite Bonding', 'Subtle fixes'],
  ['clear-aligners', 'Clear Aligners', 'Nearly invisible'],
  ['retainers', 'Retainers', 'Keep it straight'],
  ['dental-implants', 'Dental Implants', 'Permanent'],
  ['crowns-and-bridges', 'Crowns & Bridges', 'Restore & protect'],
  ['tooth-coloured-fillings', 'Tooth-Coloured Fillings', 'Invisible repair'],
];
const team = [
  ['dr-elena-marsh', 'Dr. Marsh', 'Principal dentist'],
  ['dr-james-oduya', 'Dr. Oduya', 'Implants & surgery'],
  ['dr-aisha-khan', 'Dr. Khan', 'Orthodontics'],
  ['marie-chen', 'Marie', 'Hygienist'],
];
const galleryScenes = [
  ['reception', 'Reception', 'Calm from the start'],
  ['treatment-room', 'Treatment Room', 'Modern comfort'],
  ['technology', 'Digital Dentistry', '3D scanning'],
  ['consultation', 'Consultation', 'Honest advice'],
  ['kids-corner', 'Kids Corner', 'Little smiles'],
  ['sterilization', 'Sterilization', 'Hospital-grade'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [f, n, s] of services) write(`services/${f}.svg`, serviceSvg(n, s));
for (const [f, n, s] of team) write(`team/${f}.svg`, portraitSvg(n, s));
for (const [f, n, s] of galleryScenes) write(`gallery/${f}.svg`, sceneSvg(n, s));
write('hero.svg', heroSvg());
write('about-practice.svg', sceneSvg('The Practice', 'Since 2009', 800, 1000));
write('og-image.svg', ogSvg());
console.log('\nDone — dental placeholders generated.');
