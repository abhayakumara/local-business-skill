// Generates rich, branded SVG placeholder art named 1:1 to the content layer.
// Layered gradients, plate motifs, steam, spice scatter and grain make every
// tile feel art-directed; real .webp photography drops in as a 1:1 replacement.
//
// Run with: node scripts/placeholders/restaurant.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'restaurant');

const palettes = [
  { a: '#9c4711', b: '#d97915', c: '#f2cd8f', leaf: '#9bb78f' },
  { a: '#683115', b: '#bf5f0f', c: '#e9ad53', leaf: '#c2d4ba' },
  { a: '#7f3a15', b: '#e2922b', c: '#f9e7c8', leaf: '#739668' },
  { a: '#344d30', b: '#557a4b', c: '#c2d4ba', leaf: '#e9ad53' },
  { a: '#8a3d10', b: '#c96a12', c: '#f2cd8f', leaf: '#9bb78f' },
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
    <radialGradient id="glow${id}" cx="0.68" cy="0.3" r="0.75">
      <stop offset="0" stop-color="${p.c}" stop-opacity="0.55"/><stop offset="1" stop-color="${p.c}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig${id}" cx="0.5" cy="0.5" r="0.9">
      <stop offset="0.6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#241205" stop-opacity="0.45"/>
    </radialGradient>
    <filter id="grain${id}"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer><feComposite operator="over" in2="SourceGraphic"/></filter>
  </defs>`;
}

function scatter(seed, w, h, color, n = 14) {
  let out = '';
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 1103515245 + 12345) >>> 0;
    const x = (s % 1000) / 1000 * w;
    s = (s * 1103515245 + 12345) >>> 0;
    const y = (s % 1000) / 1000 * h * 0.75;
    s = (s * 1103515245 + 12345) >>> 0;
    const r = 1.5 + (s % 10) / 4;
    out += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="${color}" opacity="0.35"/>`;
  }
  return out;
}

function steam(cx, cy, sc, color) {
  return `<g stroke="${color}" stroke-opacity="0.5" stroke-width="${3 * sc}" fill="none" stroke-linecap="round">
    <path d="M${cx - 22 * sc} ${cy} c ${-8 * sc} ${-18 * sc}, ${8 * sc} ${-26 * sc}, 0 ${-44 * sc}"/>
    <path d="M${cx} ${cy - 6 * sc} c ${-8 * sc} ${-20 * sc}, ${8 * sc} ${-28 * sc}, 0 ${-48 * sc}"/>
    <path d="M${cx + 22 * sc} ${cy} c ${-8 * sc} ${-18 * sc}, ${8 * sc} ${-26 * sc}, 0 ${-44 * sc}"/>
  </g>`;
}

function plate(cx, cy, r, p) {
  return `<g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" opacity="0.14"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.82}" fill="none" stroke="${p.c}" stroke-opacity="0.6" stroke-width="2"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.58}" fill="${p.b}" opacity="0.85"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.58}" fill="none" stroke="#fff" stroke-opacity="0.25" stroke-width="3"/>
    <path d="M${cx - r * 0.3} ${cy - r * 0.05} q ${r * 0.3} ${-r * 0.35} ${r * 0.6} 0 q ${-r * 0.3} ${r * 0.35} ${-r * 0.6} 0 Z" fill="${p.c}" opacity="0.85"/>
    <circle cx="${cx - r * 0.12}" cy="${cy + r * 0.22}" r="${r * 0.06}" fill="#fff" opacity="0.7"/>
    <circle cx="${cx + r * 0.2}" cy="${cy + r * 0.18}" r="${r * 0.045}" fill="#fff" opacity="0.55"/>
  </g>`;
}

function leaves(x, y, sc, color) {
  return `<g fill="${color}" opacity="0.5">
    <path d="M${x} ${y} q ${18 * sc} ${-30 * sc} 0 ${-58 * sc} q ${-18 * sc} ${28 * sc} 0 ${58 * sc} Z"/>
    <path d="M${x + 20 * sc} ${y + 6 * sc} q ${26 * sc} ${-20 * sc} ${16 * sc} ${-52 * sc} q ${-26 * sc} ${20 * sc} ${-16 * sc} ${52 * sc} Z"/>
  </g>`;
}

function label(w, h, text, sub) {
  return `<g>
    <rect x="0" y="${h * 0.72}" width="${w}" height="${h * 0.28}" fill="url(#fade)"/>
    <rect x="36" y="${h - 92}" width="26" height="3" rx="1.5" fill="#f2cd8f"/>
    <text x="36" y="${h - 44}" font-family="Georgia, serif" font-size="${Math.round(h * 0.075)}" font-weight="600" fill="#fff8ef">${esc(text)}</text>
    ${sub ? `<text x="36" y="${h - 18}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.032)}" letter-spacing="2.5" fill="#f2cd8f" opacity="0.9">${esc(sub.toUpperCase())}</text>` : ''}
  </g>`;
}

const fadeDef = `<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#241205" stop-opacity="0"/><stop offset="1" stop-color="#241205" stop-opacity="0.72"/></linearGradient>`;

function dishSvg(name, sub, w = 800, h = 600) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}${fadeDef ? `<defs>${fadeDef}</defs>` : ''}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${scatter(hash(name), w, h, p.c)}
  ${plate(w * 0.62, h * 0.4, h * 0.26, p)}
  ${steam(w * 0.62, h * 0.13, h / 600, '#fff')}
  ${leaves(w * 0.12, h * 0.62, h / 480, p.leaf)}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, name, sub)}
</svg>`;
}

function sceneSvg(name, sub, w = 900, h = 700) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  const arches = `<g fill="none" stroke="${p.c}" stroke-opacity="0.35" stroke-width="2.5">
    <path d="M${w * 0.12} ${h} v-${h * 0.42} a${w * 0.09} ${w * 0.09} 0 0 1 ${w * 0.18} 0 V${h}"/>
    <path d="M${w * 0.38} ${h} v-${h * 0.52} a${w * 0.1} ${w * 0.1} 0 0 1 ${w * 0.2} 0 V${h}"/>
    <path d="M${w * 0.66} ${h} v-${h * 0.42} a${w * 0.09} ${w * 0.09} 0 0 1 ${w * 0.18} 0 V${h}"/>
  </g>`;
  const lanterns = `<g>
    <circle cx="${w * 0.22}" cy="${h * 0.2}" r="14" fill="${p.c}" opacity="0.85"/>
    <circle cx="${w * 0.5}" cy="${h * 0.13}" r="10" fill="${p.c}" opacity="0.6"/>
    <circle cx="${w * 0.8}" cy="${h * 0.22}" r="12" fill="${p.c}" opacity="0.75"/>
    <line x1="${w * 0.22}" y1="0" x2="${w * 0.22}" y2="${h * 0.2 - 14}" stroke="${p.c}" stroke-opacity="0.4"/>
    <line x1="${w * 0.5}" y1="0" x2="${w * 0.5}" y2="${h * 0.13 - 10}" stroke="${p.c}" stroke-opacity="0.4"/>
    <line x1="${w * 0.8}" y1="0" x2="${w * 0.8}" y2="${h * 0.22 - 12}" stroke="${p.c}" stroke-opacity="0.4"/>
  </g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}<defs>${fadeDef}</defs>
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${arches}${lanterns}
  ${scatter(hash(name) + 7, w, h, '#ffffff', 10)}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, name, sub)}
</svg>`;
}

function heroSvg(w = 1920, h = 1080) {
  const p = palettes[2];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Saffron &amp; Sage dining room at dusk">
  <defs>
    <linearGradient id="hb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3a1c08"/><stop offset="0.45" stop-color="#7f3a15"/><stop offset="0.8" stop-color="#bf5f0f"/><stop offset="1" stop-color="#9c4711"/>
    </linearGradient>
    <radialGradient id="hg1" cx="0.72" cy="0.34" r="0.5"><stop offset="0" stop-color="#f9e7c8" stop-opacity="0.8"/><stop offset="1" stop-color="#f9e7c8" stop-opacity="0"/></radialGradient>
    <radialGradient id="hg2" cx="0.18" cy="0.75" r="0.45"><stop offset="0" stop-color="#557a4b" stop-opacity="0.45"/><stop offset="1" stop-color="#557a4b" stop-opacity="0"/></radialGradient>
    <radialGradient id="hv" cx="0.5" cy="0.5" r="0.95"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1c0d03" stop-opacity="0.6"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#hb)"/>
  <rect width="${w}" height="${h}" fill="url(#hg1)"/>
  <rect width="${w}" height="${h}" fill="url(#hg2)"/>
  ${plate(w * 0.72, h * 0.38, h * 0.24, p)}
  ${steam(w * 0.72, h * 0.1, h / 620, '#fff')}
  <g fill="#f9e7c8">
    <circle cx="${w * 0.1}" cy="${h * 0.18}" r="5" opacity="0.5"/><circle cx="${w * 0.2}" cy="${h * 0.32}" r="3.4" opacity="0.4"/>
    <circle cx="${w * 0.33}" cy="${h * 0.14}" r="4" opacity="0.45"/><circle cx="${w * 0.48}" cy="${h * 0.26}" r="2.6" opacity="0.35"/>
    <circle cx="${w * 0.58}" cy="${h * 0.68}" r="4.5" opacity="0.3"/><circle cx="${w * 0.88}" cy="${h * 0.7}" r="3.4" opacity="0.35"/>
  </g>
  ${leaves(w * 0.06, h * 0.9, h / 420, '#9bb78f')}
  <rect width="${w}" height="${h}" fill="url(#hv)"/>
</svg>`;
}

function ogSvg(w = 1200, h = 630) {
  const p = palettes[2];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Saffron &amp; Sage — A Modern Indian Kitchen">
  <defs>
    <linearGradient id="ob" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a2409"/><stop offset="0.6" stop-color="#9c4711"/><stop offset="1" stop-color="#bf5f0f"/></linearGradient>
    <radialGradient id="og1" cx="0.85" cy="0.4" r="0.5"><stop offset="0" stop-color="#f9e7c8" stop-opacity="0.7"/><stop offset="1" stop-color="#f9e7c8" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#ob)"/>
  <rect width="${w}" height="${h}" fill="url(#og1)"/>
  ${plate(w * 0.82, h * 0.5, h * 0.34, p)}
  ${steam(w * 0.82, h * 0.12, 1.1, '#fff')}
  ${leaves(70, h * 0.92, 1.3, '#9bb78f')}
  <rect x="64" y="${h * 0.3}" width="30" height="4" rx="2" fill="#f2cd8f"/>
  <text x="64" y="${h * 0.46}" font-family="Georgia, serif" font-size="78" font-weight="600" fill="#fff8ef">Saffron &amp; Sage</text>
  <text x="66" y="${h * 0.56}" font-family="Arial, sans-serif" font-size="28" letter-spacing="4" fill="#f2cd8f">A MODERN INDIAN KITCHEN · BENGALURU</text>
</svg>`;
}

const dishes = [
  ['samosa-chaat', 'Samosa Chaat', 'Street classic'],
  ['idli', 'Idli', 'Steamed & soft'],
  ['chicken-tikka', 'Chicken Tikka', 'Tandoor-fired'],
  ['masala-dosa', 'Masala Dosa', 'Crisp & golden'],
  ['paneer-butter-masala', 'Paneer Butter Masala', 'House favourite'],
  ['butter-chicken', 'Butter Chicken', 'Signature'],
  ['lamb-rogan-josh', 'Lamb Rogan Josh', 'Slow-braised'],
  ['dal-makhani', 'Dal Makhani', '48-hour simmer'],
  ['garlic-naan', 'Garlic Naan', 'Fresh from tandoor'],
  ['saffron-biryani', 'Saffron Biryani', 'Signature'],
  ['gulab-jamun', 'Gulab Jamun', 'Warm & rose-scented'],
  ['pistachio-kulfi', 'Pistachio Kulfi', 'House-churned'],
];

const gallery = [
  ['dining-room', 'The Dining Room', 'Warm evenings'],
  ['tandoor', 'The Tandoor', 'Open kitchen'],
  ['thali', 'Festive Thali', 'Seasonal menu'],
  ['spices', 'The Spice Library', 'Ground daily'],
  ['cocktails', 'Bar & Cocktails', 'Spice-forward'],
  ['terrace', 'The Terrace', 'Under the stars'],
];

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log('wrote', rel);
}

for (const [file, name, sub] of dishes) write(`menu/${file}.svg`, dishSvg(name, sub));
for (const [file, name, sub] of gallery) write(`gallery/${file}.svg`, sceneSvg(name, sub));
write('hero.svg', heroSvg());
write('about-chef.svg', sceneSvg('The Open Kitchen', 'Since 2009', 800, 1000));
write('og-image.svg', ogSvg());
console.log('\nDone — restaurant placeholders generated.');
