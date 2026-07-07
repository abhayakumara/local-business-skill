import type { Config } from 'tailwindcss';

// One design system, five brands. Static palettes are uniquely named per
// vertical; the semantic tokens (ink / brand / surface) resolve through CSS
// variables set by each `.theme-*` class in app/globals.css, so shared
// components automatically re-skin per demo.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic, theme-driven tokens */
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        brand: 'rgb(var(--brand-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',

        /* Agency (landing page) */
        night: '#07070d',
        aurora: {
          violet: '#8b5cf6',
          iris: '#6366f1',
          cyan: '#22d3ee',
          rose: '#fb7185',
        },

        /* Restaurant — Saffron & Sage */
        saffron: {
          50: '#fdf6ec',
          100: '#f9e7c8',
          200: '#f2cd8f',
          300: '#e9ad53',
          400: '#e2922b',
          500: '#d97915',
          600: '#bf5f0f',
          700: '#9c4711',
          800: '#7f3a15',
          900: '#683115',
        },
        sage: {
          50: '#f3f6f2',
          100: '#e0e9dc',
          200: '#c2d4ba',
          300: '#9bb78f',
          400: '#739668',
          500: '#557a4b',
          600: '#41613a',
          700: '#344d30',
          800: '#2b3e29',
          900: '#243323',
        },
        cream: '#fbf7f0',
        charcoal: '#1c1917',

        /* Salon — Maison Lumière */
        mauve: {
          50: '#f8f5f7',
          100: '#efe7ed',
          200: '#ddccd8',
          300: '#c4a8bd',
          400: '#a87f9d',
          500: '#8d5e82',
          600: '#744a6b',
          700: '#5f3d58',
          800: '#4f3449',
          900: '#43303f',
        },
        gold: {
          50: '#fbf6ec',
          100: '#f4e7c9',
          200: '#e8cd92',
          300: '#dcb35f',
          400: '#cf9c3c',
          500: '#b9842c',
          600: '#9a6824',
          700: '#7b5021',
          800: '#664221',
          900: '#58381f',
        },
        ivory: '#faf7f4',

        /* Dental — Northway Dental Studio */
        sky: {
          50: '#eef6fb',
          100: '#d8ebf6',
          200: '#aed6ec',
          300: '#79bade',
          400: '#459ace',
          500: '#2a7fb6',
          600: '#1f6498',
          700: '#1c507b',
          800: '#1c4566',
          900: '#1b3a56',
        },
        mint: {
          50: '#edfbf6',
          100: '#d2f5e9',
          200: '#a8ead4',
          300: '#71d8ba',
          400: '#3fbf9c',
          500: '#23a283',
          600: '#17826a',
          700: '#156857',
          800: '#155346',
          900: '#13453b',
        },
        cloud: '#f3f8fb',

        /* Gym — Apex Athletic Club */
        forge: {
          50: '#fff3ed',
          100: '#ffe2d3',
          200: '#ffc0a3',
          300: '#ff9568',
          400: '#fc6a37',
          500: '#f24a16',
          600: '#e0350a',
          700: '#b9270c',
          800: '#932312',
          900: '#762012',
        },
        volt: {
          50: '#f6ffe3',
          100: '#e9ffbf',
          200: '#d2ff85',
          300: '#b6f93f',
          400: '#9eea1a',
          500: '#7ec40c',
          600: '#5f9c07',
          700: '#48760c',
          800: '#3b5d10',
          900: '#324f12',
        },
        concrete: '#f4f4f2',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgb(var(--ink-rgb) / 0.18)',
        lift: '0 24px 60px -18px rgb(var(--ink-rgb) / 0.30)',
        glass: '0 8px 32px rgb(var(--ink-rgb) / 0.12)',
        glow: '0 0 48px -8px rgb(var(--brand-rgb) / 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, 4%) scale(0.96)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        marquee: 'marquee 36s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
