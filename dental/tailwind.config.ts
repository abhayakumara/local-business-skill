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
        // Clean, clinical palette — calm sky blue + fresh mint + soft cloud.
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
        ink: '#0f1f2b',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 31, 43, 0.16)',
        lift: '0 24px 60px -18px rgba(15, 31, 43, 0.26)',
        glass: '0 8px 32px rgba(15, 31, 43, 0.10)',
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
