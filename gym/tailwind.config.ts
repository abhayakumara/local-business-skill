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
        // Bold, athletic palette — high-energy forge orange + electric volt.
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
        ink: '#15130f',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(21, 19, 15, 0.20)',
        lift: '0 24px 60px -18px rgba(21, 19, 15, 0.34)',
        glass: '0 8px 32px rgba(21, 19, 15, 0.14)',
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
