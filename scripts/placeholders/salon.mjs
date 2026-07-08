// Generates rich, branded SVG placeholder art named 1:1 to the content layer.
// Soft mauve/gold blends, petal fans, gold rings and grain — designed to feel
// like an art-directed brand shoot until real photography drops in.
//
// Run with: node scripts/placeholders/salon.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'images', 'salon');

const palettes = [
  { a: '#5f3d58', b: '#8d5e82', c: '#e8cd92', soft: '#efe7ed' },
  { a: '#43303f', b: '#744a6b', c: '#dcb35f', soft: '#ddccd8' },
  { a: '#744a6b', b: '#a87f9d', c: '#f4e7c9', soft: '#f8f5f7' },
  { a: '#58381f', b: '#9a6824', c: '#efe7ed', soft: '#e8cd92' },
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
    <radialGradient id="glow${id}" cx="0.7" cy="0.25" r="0.8">
      <stop offset="0" stop-color="${p.soft}" stop-opacity="0.5"/><stop offset="1" stop-color="${p.soft}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig${id}" cx="0.5" cy="0.5" r="0.9">
      <stop offset="0.6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#2a1f27" stop-opacity="0.4"/>
    </radialGradient>
    <linearGradient id="fade${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1f27" stop-opacity="0"/><stop offset="1" stop-color="#2a1f27" stop-opacity="0.7"/></linearGradient>
  </defs>`;
}

function petals(cx, cy, r, color) {
  let out = `<g fill="${color}" opacity="0.6">`;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const x = cx + Math.cos(a) * r * 0.55;
    const y = cy + Math.sin(a) * r * 0.55;
    out += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${r * 0.42}" ry="${r * 0.2}" transform="rotate(${(a * 180 / Math.PI).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})" opacity="0.55"/>`;
  }
  out += `<circle cx="${cx}" cy="${cy}" r="${r * 0.16}" fill="#fff" opacity="0.8"/></g>`;
  return out;
}

function rings(cx, cy, r, gold) {
  return `<g fill="none" stroke="${gold}" stroke-opacity="0.55">
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke-width="1.5"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.8}" stroke-width="1" stroke-dasharray="3 7"/>
    <path d="M${cx - r * 1.15} ${cy} a${r * 1.15} ${r * 1.15} 0 0 1 ${r * 2.3} 0" stroke-width="2"/>
  </g>`;
}

function sparkles(seed, w, h, color, n = 9) {
  let out = '';
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 1103515245 + 12345) >>> 0;
    const x = (s % 1000) / 1000 * w;
    s = (s * 1103515245 + 12345) >>> 0;
    const y = (s % 1000) / 1000 * h * 0.7;
    const r = 5 + (s % 8);
    out += `<path d="M${x} ${y - r} q ${r * 0.18} ${r * 0.82} ${r} ${r} q ${-r * 0.82} ${r * 0.18} ${-r} ${r} q ${-r * 0.18} ${-r * 0.82} ${-r} ${-r} q ${r * 0.82} ${-r * 0.18} ${r} ${-r} Z" fill="${color}" opacity="0.5"/>`;
  }
  return out;
}

function label(w, h, id, text, sub) {
  return `<g>
    <rect x="0" y="${h * 0.72}" width="${w}" height="${h * 0.28}" fill="url(#fade${id})"/>
    <rect x="36" y="${h - 92}" width="26" height="2.5" rx="1.25" fill="#e8cd92"/>
    <text x="36" y="${h - 44}" font-family="Georgia, serif" font-size="${Math.round(h * 0.07)}" font-weight="500" font-style="italic" fill="#fdfbf8">${esc(text)}</text>
    ${sub ? `<text x="36" y="${h - 18}" font-family="Arial, sans-serif" font-size="${Math.round(h * 0.03)}" letter-spacing="3" fill="#e8cd92" opacity="0.9">${esc(sub.toUpperCase())}</text>` : ''}
  </g>`;
}

function serviceSvg(name, sub, w = 800, h = 600) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${rings(w * 0.66, h * 0.38, h * 0.22, p.c)}
  ${petals(w * 0.66, h * 0.38, h * 0.16, p.soft)}
  ${sparkles(hash(name), w, h, p.c)}
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
  <path d="M${w * 0.16} ${h} v-${h * 0.52} a${w * 0.34} ${w * 0.34} 0 0 1 ${w * 0.68} 0 V${h}" fill="${p.soft}" opacity="0.16"/>
  <circle cx="${cx}" cy="${h * 0.36}" r="${w * 0.19}" fill="#f6efe9" opacity="0.95"/>
  <path d="M${cx - w * 0.3} ${h * 0.98} q 0 -${h * 0.26} ${w * 0.3} -${h * 0.26} q ${w * 0.3} 0 ${w * 0.3} ${h * 0.26} Z" fill="#f6efe9" opacity="0.95"/>
  <path d="M${cx - w * 0.21} ${h * 0.33} a${w * 0.21} ${w * 0.21} 0 0 1 ${w * 0.42} 0 v${h * 0.06} h-${w * 0.42} Z" fill="${p.a}" opacity="0.85"/>
  ${rings(cx, h * 0.36, w * 0.26, p.c)}
  ${sparkles(hash(name), w, h * 0.5, p.c, 5)}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, id, name, sub)}
</svg>`;
}

function sceneSvg(name, sub, w = 900, h = 700) {
  const p = palettes[hash(name) % palettes.length];
  const id = hash(name) % 97;
  const arch = `<g fill="${p.soft}" opacity="0.14">
    <path d="M${w * 0.1} ${h} v-${h * 0.44} a${w * 0.11} ${w * 0.11} 0 0 1 ${w * 0.22} 0 V${h}"/>
    <path d="M${w * 0.4} ${h} v-${h * 0.56} a${w * 0.12} ${w * 0.12} 0 0 1 ${w * 0.24} 0 V${h}"/>
    <path d="M${w * 0.72} ${h} v-${h * 0.44} a${w * 0.1} ${w * 0.1} 0 0 1 ${w * 0.2} 0 V${h}"/>
  </g>
  <g fill="none" stroke="${p.c}" stroke-opacity="0.5" stroke-width="1.5">
    <path d="M${w * 0.4} ${h} v-${h * 0.56} a${w * 0.12} ${w * 0.12} 0 0 1 ${w * 0.24} 0 V${h}"/>
  </g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}">
  ${defs(p, id)}
  <rect width="${w}" height="${h}" fill="url(#bg${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${arch}
  ${petals(w * 0.82, h * 0.2, h * 0.1, p.soft)}
  ${sparkles(hash(name) + 3, w, h, p.c, 7)}
  <rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  ${label(w, h, id, name, sub)}
</svg>`;
}

function heroSvg(w = 1920, h = 1080) {
  const p = palettes[0];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Maison Lumière salon interior">
  <defs>
    <linearGradient id="hb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2e2029"/><stop offset="0.5" stop-color="#5f3d58"/><stop offset="0.85" stop-color="#8d5e82"/><stop offset="1" stop-color="#744a6b"/>
    </linearGradient>
    <radialGradient id="hg1" cx="0.75" cy="0.3" r="0.55"><stop offset="0" stop-color="#f4e7c9" stop-opacity="0.65"/><stop offset="1" stop-color="#f4e7c9" stop-opacity="0"/></radialGradient>
    <radialGradient id="hg2" cx="0.15" cy="0.8" r="0.5"><stop offset="0" stop-color="#dcb35f" stop-opacity="0.3"/><stop offset="1" stop-color="#dcb35f" stop-opacity="0"/></radialGradient>
    <radialGradient id="hv" cx="0.5" cy="0.5" r="0.95"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#221721" stop-opacity="0.55"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#hb)"/>
  <rect width="${w}" height="${h}" fill="url(#hg1)"/>
  <rect width="${w}" height="${h}" fill="url(#hg2)"/>
  <path d="M${w * 0.58} ${h} v-${h * 0.62} a${w * 0.13} ${w * 0.13} 0 0 1 ${w * 0.26} 0 V${h}" fill="#efe7ed" opacity="0.1"/>
  <path d="M${w * 0.58} ${h} v-${h * 0.62} a${w * 0.13} ${w * 0.13} 0 0 1 ${w * 0.26} 0 V${h}" fill="none" stroke="#e8cd92" stroke-opacity="0.5" stroke-width="2"/>
  ${rings(w * 0.71, h * 0.42, h * 0.16, '#e8cd92')}
  ${petals(w * 0.71, h * 0.42, h * 0.12, '#efe7ed')}
  ${sparkles(11, w, h, '#e8cd92', 12)}
  <rect width="${w}" height="${h}" fill="url(#hv)"/>
</svg>`;
}

function ogSvg(w = 1200, h = 630) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Maison Lumière — Hair, Skin & Sanctuary">
  <defs>
    <linearGradient id="ob" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a2836"/><stop offset="0.6" stop-color="#744a6b"/><stop offset="1" stop-color="#8d5e82"/></linearGradient>
    <radialGradient id="og1" cx="0.85" cy="0.35" r="0.5"><stop offset="0" stop-color="#f4e7c9" stop-opacity="0.6"/><stop offset="1" stop-color="#f4e7c9" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#ob)"/>
  <rect width="${w}" height="${h}" fill="url(#og1)"/>
  <path d="M${w * 0.72} ${h} v-${h * 0.7} a${w * 0.11} ${w * 0.11} 0 0 1 ${w * 0.22} 0 V${h}" fill="#efe7ed" opacity="0.12"/>
  ${rings(w * 0.83, h * 0.42, h * 0.2, '#e8cd92')}
  ${petals(w * 0.83, h * 0.42, h * 0.15, '#efe7ed')}
  <rect x="64" y="${h * 0.3}" width="30" height="3" rx="1.5" fill="#e8cd92"/>
  <text x="64" y="${h * 0.47}" font-family="Georgia, serif" font-size="76" font-weight="500" font-style="italic" fill="#fdfbf8">Maison Lumière</text>
  <text x="66" y="${h * 0.57}" font-family="Arial, sans-serif" font-size="26" letter-spacing="4" fill="#e8cd92">HAIR · SKIN · SANCTUARY · MUMBAI</text>
</svg>`;
}

const services = [
  ['cut-and-style', 'Cut & Style', 'Hair studio'],
  ['hair-spa', 'Hair Spa', 'Deep repair'],
  ['balayage', 'Balayage', 'Hand-painted colour'],
  ['keratin-treatment', 'Keratin Treatment', 'Silk finish'],
  ['signature-facial', 'Signature Facial', 'House ritual'],
  ['hydrating-facial', 'Hydrating Facial', 'Dewy glow'],
  ['anti-aging-facial', 'Anti-Aging Facial', 'Firm & lift'],
  ['aromatherapy-massage', 'Aromatherapy Massage', 'Unwind'],
  ['hot-stone-massage', 'Hot Stone Massage', 'Deep release'],
  ['body-polish', 'Body Polish', 'Head to toe'],
  ['manicure', 'Manicure', 'Nail atelier'],
  ['pedicure', 'Pedicure', 'Nail atelier'],
  ['gel-nails', 'Gel Nails', 'Lasting shine'],
];
const team = [
  ['amara-okafor', 'Amara', 'Creative director'],
  ['lena-park', 'Lena', 'Colour specialist'],
  ['sofia-rossi', 'Sofia', 'Skin therapist'],
  ['maya-singh', 'Maya', 'Spa therapist'],
];
const galleryScenes = [
  ['salon-interior', 'The Salon', 'Soft light'],
  ['styling-station', 'Styling Studio', 'At the chair'],
  ['spa-room', 'The Spa Room', 'Quiet luxury'],
  ['product-shelf', 'The Apothecary', 'Curated'],
  ['nail-bar', 'The Nail Bar', 'Detail work'],
  ['reception', 'Reception', 'Welcome in'],
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
write('about-studio.svg', sceneSvg('The Studio', 'Since 2012', 800, 1000));
write('og-image.svg', ogSvg());
console.log('\nDone — salon placeholders generated.');
