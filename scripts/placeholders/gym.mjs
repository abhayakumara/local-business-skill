// Generates rich, branded SVG placeholder art named 1:1 to the content layer.
// High-energy scenes: molten orange light, volt accents, chevrons, speed
// lines and grain — no flat colour blocks. Real .webp photos drop in 1:1.
//
// Run with: node scripts/placeholders/gym.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'gym');

const palettes = [
  { a: '#762012', b: '#e0350a', c: '#ff9568', volt: '#b6f93f' },
  { a: '#932312', b: '#f24a16', c: '#ffc0a3', volt: '#d2ff85' },
  { a: '#48760c', b: '#7ec40c', c: '#d2ff85', volt: '#ffc0a3' },
  { a: '#b9270c', b: '#fc6a37', c: '#ffe2d3', volt: '#b6f93f' },
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function defs(p, id) {
  return `<defs>
    <linearGradient id="bg${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.a}"/><stop offset="0.55" stop-color="${p.b}"/><stop offset="1" stop-color="${p.a}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.7" cy="0.3" r="0.7">
      <stop offset="0" stop-color="${p.c}" stop-opacity="0.75"/><stop offset="1" stop-color="${p.c}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig${id}" cx="0.5" cy="0.5" r="0.95">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1a0c05" stop-opacity="0.5"/>
    </radialGradient>
    <linearGradient id="fade${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#170a04" stop-opacity="0"/><stop offset="1" stop-color="#170a04" stop-opacity="0.78"/></linearGradient>
  </defs>`;
}

function chevrons(cx, cy, sc, color) {
  return `<g stroke="${color}" stroke-opacity="0.75" stroke-width="${13 * sc}" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M${cx - 60 * sc} ${cy - 46 * sc} L${cx - 8 * sc} ${cy} L${cx - 60 * sc} ${cy + 46 * sc}" opacity="0.45"/>
    <path d="M${cx - 6 * sc} ${cy - 46 * sc} L${cx + 46 * sc} ${cy} L${cx - 6 * sc} ${cy + 46 * sc}" opacity="0.8"/>
    <path d="M${cx + 48 * sc} ${cy - 46 * sc} L${cx + 100 * sc} ${cy} L${cx + 48 * sc} ${cy + 46 * sc}"/>
  </g>`;
}

function barbell(cx, cy, sc, color) {
  return `<g transform="translate(${cx},${cy}) scale(${sc})" stroke="${color}" stroke-width="9" stroke-linecap="round" fill="none" opacity="0.85">
    <line x1="-96" y1="0" x2="96" y2="0"/>
    <rect x="-92" y="-34" width="22" height="68" rx="8" fill="${color}" stroke="none"/>
    <rect x="70" y="-34" width="22" height="68" rx="8" fill="${color}" stroke="none"/>
    <rect x="-116" y="-22" width="14" height="44" rx="6" fill="${color}" stroke="none" opacity="0.7"/>
    <rect x="102" y="-22" width="14" height="44" rx="6" fill="${color}" stroke="none" opacity="0.7"/>
  </g>`;
}

function speedlines(w, h, color) {
  return `<g stroke="${color}" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round">
    <line x1="${-w * 0.05}" y1="${h * 0.2}" x2="${w * 0.24}" y2="${h * 0.14}"/>
    <line x1="${-w * 0.05}" y1="${h * 0.34}" x2="${w * 0.16}" y2="${h * 0.3}"/>
    <line x1="${w * 0.76}" y1="${h * 0.82}" x2="${w * 1.04}" y2="${h * 0.76}"/>
    <line x1="${w * 0.84}" y1="${h * 0.92}" x2="${w * 1.04}" y2="${h * 0.88}"/>
  </g>`;
}

function diagonal(w, h, color) {
  return `<path d="M${w * 0.55} 0 L${w} ${h * 0.7} V0 Z" fill="${color}" opacity="0.14"/>`;
}

function label(w, h, id, text, sub) {
  return `<g>
    <rect x="0" y="${h * 0.7}" width="${w}" height="${h * 0.3}" fill="url(#fade${id})"/>
    <rect x="36" y="${h - 100}" width="34" height="5" fill="#b6f93f"/>
    <text x="36" y="${h - 42}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.082)}" font-weight="800" letter-spacing="1.5" fill="#fff">${esc(text.toUpperCase())}</text>
    ${sub ? `<text x="36" y="${h - 16}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.032)}" font-weight="700" letter-spacing="3" fill="#d2ff85">${esc(sub.toUpperCase())}</text>` : ''}
  </g>`;
}

function programSvg(name, sub, w = 800, h = 600) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${diagonal(w, h, '#ffffff')}
  ${speedlines(w, h, '#ffffff')}
  ${chevrons(w * 0.6, h * 0.38, h / 520, '#ffffff')}
  <circle cx="${w * 0.6}" cy="${h * 0.38}" r="${h * 0.3}" fill="none" stroke="${p.volt}" stroke-opacity="0.5" stroke-width="3" stroke-dasharray="10 14"/>
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, id, name, sub)}
</svg>`;
}

function portraitSvg(name, sub, w = 600, h = 800) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  const cx = w / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${diagonal(w, h, '#ffffff')}
  <circle cx="${cx}" cy="${h * 0.38}" r="${w * 0.34}" fill="none" stroke="${p.volt}" stroke-opacity="0.6" stroke-width="3" stroke-dasharray="12 16"/>
  <circle cx="${cx}" cy="${h * 0.35}" r="${w * 0.19}" fill="#fbe9dc"/>
  <path d="M${cx - w * 0.32} ${h * 0.98} q 0 -${h * 0.27} ${w * 0.32} -${h * 0.27} q ${w * 0.32} 0 ${w * 0.32} ${h * 0.27} Z" fill="#fbe9dc"/>
  <path d="M${cx - w * 0.32} ${h * 0.98} q 0 -${h * 0.27} ${w * 0.32} -${h * 0.27} q ${w * 0.32} 0 ${w * 0.32} ${h * 0.27} Z" fill="#1a0c05" opacity="0.35"/>
  ${barbell(cx, h * 0.8, w / 640, p.volt)}
  ${speedlines(w, h, '#ffffff')}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, id, name, sub)}
</svg>`;
}

function sceneSvg(name, sub, w = 900, h = 700) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  const rig = `<g stroke="#ffffff" stroke-opacity="0.4" stroke-width="5" fill="none">
    <path d="M${w * 0.14} ${h * 0.66} V${h * 0.2} H${w * 0.5} V${h * 0.66}"/>
    <path d="M${w * 0.5} ${h * 0.2} H${w * 0.86} V${h * 0.66}"/>
    <line x1="${w * 0.24}" y1="${h * 0.2}" x2="${w * 0.24}" y2="${h * 0.42}"/>
    <line x1="${w * 0.24}" y1="${h * 0.42}" x2="${w * 0.4}" y2="${h * 0.42}" stroke="${p.volt}" stroke-opacity="0.8"/>
  </g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${diagonal(w, h, '#ffffff')}
  ${rig}
  ${barbell(w * 0.68, h * 0.6, w / 900, p.volt)}
  ${speedlines(w, h, '#ffffff')}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, id, name, sub)}
</svg>`;
}

function heroSvg(w = 1920, h = 1080) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Apex Athletic Club training floor">
  <defs>
    <linearGradient id="hb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5c1408"/><stop offset="0.45" stop-color="#b9270c"/><stop offset="0.8" stop-color="#f24a16"/><stop offset="1" stop-color="#932312"/>
    </linearGradient>
    <radialGradient id="hg1" cx="0.72" cy="0.3" r="0.55"><stop offset="0" stop-color="#ffc0a3" stop-opacity="0.75"/><stop offset="1" stop-color="#ffc0a3" stop-opacity="0"/></radialGradient>
    <radialGradient id="hg2" cx="0.15" cy="0.85" r="0.5"><stop offset="0" stop-color="#9eea1a" stop-opacity="0.3"/><stop offset="1" stop-color="#9eea1a" stop-opacity="0"/></radialGradient>
    <radialGradient id="hv" cx="0.5" cy="0.5" r="0.95"><stop offset="0.5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1a0c05" stop-opacity="0.6"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#hb)"/>
  <rect width="${w}" height="${h}" fill="url(#hg1)"/>
  <rect width="${w}" height="${h}" fill="url(#hg2)"/>
  <path d="M${w * 0.5} 0 L${w} ${h * 0.85} V0 Z" fill="#ffffff" opacity="0.07"/>
  ${chevrons(w * 0.74, h * 0.4, h / 460, '#ffffff')}
  <circle cx="${w * 0.74}" cy="${h * 0.4}" r="${h * 0.32}" fill="none" stroke="#b6f93f" stroke-opacity="0.5" stroke-width="4" stroke-dasharray="14 20"/>
  ${barbell(w * 0.18, h * 0.82, h / 620, '#b6f93f')}
  <g stroke="#fff" stroke-opacity="0.2" stroke-width="4" stroke-linecap="round">
    <line x1="0" y1="${h * 0.18}" x2="${w * 0.2}" y2="${h * 0.14}"/>
    <line x1="0" y1="${h * 0.3}" x2="${w * 0.13}" y2="${h * 0.27}"/>
    <line x1="${w * 0.82}" y1="${h * 0.9}" x2="${w}" y2="${h * 0.86}"/>
  </g>
  <rect width="${w}" height="${h}" fill="url(#hv)"/>
</svg>`;
}

function ogSvg(w = 1200, h = 630) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Apex Athletic Club — Train With Intent">
  <defs>
    <linearGradient id="ob" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5c1408"/><stop offset="0.6" stop-color="#b9270c"/><stop offset="1" stop-color="#f24a16"/></linearGradient>
    <radialGradient id="og1" cx="0.85" cy="0.35" r="0.55"><stop offset="0" stop-color="#ffc0a3" stop-opacity="0.65"/><stop offset="1" stop-color="#ffc0a3" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#ob)"/>
  <rect width="${w}" height="${h}" fill="url(#og1)"/>
  ${chevrons(w * 0.84, h * 0.46, 1.5, '#ffffff')}
  <circle cx="${w * 0.84}" cy="${h * 0.46}" r="${h * 0.36}" fill="none" stroke="#b6f93f" stroke-opacity="0.55" stroke-width="4" stroke-dasharray="12 18"/>
  <rect x="64" y="${h * 0.28}" width="40" height="6" fill="#b6f93f"/>
  <text x="64" y="${h * 0.48}" font-family="Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="2" fill="#fff">APEX</text>
  <text x="66" y="${h * 0.58}" font-family="Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="4" fill="#d2ff85">TRAIN WITH INTENT · HYDERABAD</text>
</svg>`;
}

const programs = [
  ['strength-foundations', 'Strength Foundations', 'All levels'],
  ['powerbuilding', 'Powerbuilding', 'Intermediate'],
  ['kettlebell-strength', 'Kettlebell', 'All levels'],
  ['hiit-engine', 'HIIT Engine', 'Conditioning'],
  ['rowing-intervals', 'Rowing', 'Conditioning'],
  ['metcon', 'MetCon', 'Advanced'],
  ['olympic-lifting', 'Olympic Lifting', 'Skill'],
  ['boxing-fundamentals', 'Boxing', 'Skill'],
  ['mobility-flow', 'Mobility Flow', 'Recovery'],
  ['yoga-restore', 'Yoga & Restore', 'Recovery'],
];
const trainers = [
  ['marcus-reid', 'Marcus', 'Head coach'],
  ['tasha-bell', 'Tasha', 'Strength'],
  ['diego-santos', 'Diego', 'Conditioning'],
  ['priya-nair', 'Priya', 'Mobility & yoga'],
];
const galleryScenes = [
  ['training-floor', 'Training Floor', '10,000 sq ft'],
  ['rig', 'The Rig', 'Built to load'],
  ['free-weights', 'Free Weights', 'Iron library'],
  ['conditioning-zone', 'Conditioning', 'Engine room'],
  ['community', 'Community', 'Show up together'],
  ['recovery-lounge', 'Recovery', 'Earn the rest'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [f, n, s] of programs) write(`programs/${f}.svg`, programSvg(n, s));
for (const [f, n, s] of trainers) write(`trainers/${f}.svg`, portraitSvg(n, s));
for (const [f, n, s] of galleryScenes) write(`gallery/${f}.svg`, sceneSvg(n, s));
write('hero.svg', heroSvg());
write('about-gym.svg', sceneSvg('The Floor', 'Since 2016', 800, 1000));
write('og-image.svg', ogSvg());
console.log('\nDone — gym placeholders generated.');
