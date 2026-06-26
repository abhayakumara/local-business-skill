import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Calm, elegant spa palette — soft mauve + warm gold + ivory.
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
        ink: '#241f23',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(36, 31, 35, 0.16)',
        lift: '0 24px 60px -18px rgba(36, 31, 35, 0.28)',
        glass: '0 8px 32px rgba(36, 31, 35, 0.10)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
