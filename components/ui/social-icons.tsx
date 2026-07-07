// Shared social icon set covering every network the content layer can
// reference (see SocialLink in lib/types.ts). Inline SVG, currentColor,
// decorative-only — the surrounding link carries the accessible label.
import type { SVGProps } from 'react';
import type { SocialLink } from '@/lib/types';

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  </svg>
);

export const WhatsappIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.3A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M8.5 9.5c0 3 2 5 5 5 .7 0 1.3-.6 1.3-1.3 0-.3-.2-.6-.5-.7l-1.2-.4c-.3-.1-.6 0-.8.2-.4-.2-.8-.6-1-1 .2-.2.3-.5.2-.8l-.4-1.2c-.1-.3-.4-.5-.7-.5-.7 0-1.4.6-1.4 1.4Z" />
  </svg>
);

export const TripadvisorIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="7.5" cy="13" r="3" />
    <circle cx="16.5" cy="13" r="3" />
    <path d="M7.5 13h.01M16.5 13h.01M5 8c4-2 10-2 14 0" />
  </svg>
);

export const PinterestIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 18c-.4-1.2-.2-2.6.2-4 .4-1.6 1-3.6 1-3.6a2 2 0 1 1 1.8 1.2c-.5 1-.2 2.2.6 2.7 1.6.9 3.4-.6 3.4-2.9 0-2.2-1.8-3.9-4.3-3.9-2.9 0-4.6 2-4.6 4.1 0 .8.3 1.6.8 2.1" />
  </svg>
);

export const LinkedinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
  </svg>
);

export const YoutubeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
  </svg>
);

export const TiktokIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46" />
    <path d="M14 6a5 5 0 0 0 5 4" />
  </svg>
);

export const socialIcons: Record<
  SocialLink['icon'],
  (p: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsappIcon,
  tripadvisor: TripadvisorIcon,
  pinterest: PinterestIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};
