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
        // Warm, appetizing brand palette — deep saffron + charcoal + cream.
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
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 25, 23, 0.18)',
        lift: '0 24px 60px -18px rgba(28, 25, 23, 0.30)',
        glass: '0 8px 32px rgba(28, 25, 23, 0.12)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
