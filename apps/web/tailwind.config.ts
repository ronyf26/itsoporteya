import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: '#111827',
          foreground: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#00D9FF',
          foreground: '#0B0F19',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1F2937',
          foreground: '#94A3B8',
        },
        accent: {
          DEFAULT: '#1F2937',
          foreground: '#FFFFFF',
        },
        border: '#1F2937',
        input: '#1F2937',
        ring: '#00D9FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', '1.5'],
        'small': ['14px', '1.4'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
