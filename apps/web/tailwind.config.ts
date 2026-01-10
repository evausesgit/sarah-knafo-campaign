import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Reconquête!
        'reconquete': {
          'navy': '#1B2A4E',
          'navy-light': '#2D4A7C',
          'navy-dark': '#0F1A2E',
          'red': '#E63946',
          'red-light': '#EF5A67',
          'red-dark': '#C41E2A',
          'white': '#FFFFFF',
          'gold': '#D4AF37',
        },
        // Couleurs sémantiques
        'primary': '#1B2A4E',
        'secondary': '#E63946',
        'accent': '#D4AF37',
        'background': '#F8F9FA',
        'surface': '#FFFFFF',
        'text': {
          'primary': '#1B2A4E',
          'secondary': '#4A5568',
          'muted': '#718096',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        countUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
