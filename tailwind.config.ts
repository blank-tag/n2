import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#047CFC',
          neutral: '#14244C',
          red: '#FF2D46',
          yellow: '#FFC700',
          green: '#63DE77',
          grey: {
            A9: '#A9A9A9',
            E0: '#E0E0E0',
          },
        },
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        workSans: ['"Work Sans"', 'sans-serif'],
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px', // Extra small devices
        '3xl': '1800px', // Extra large screens
        '4xl': '2100px', // For ultra-wide screens
      },
      backgroundPosition: {
        'top-60px': 'center -60px',
        'center-right': 'center right',
      },
      backgroundImage: {
        'hero-neurify': "url('/neurify/HeroImage.png')",
        'gradient-card': 'linear-gradient(180deg, rgba(20, 36, 76, 0.5) 0%, rgba(4, 8, 16, 0.5) 100%)',
      },
      boxShadow: {
        inset: '0px 0px 16.8px #040810 inset, -15px 15px 15.11px #04081073 inset',
        'soft-xl': '0px 10px 30px rgba(0, 0, 0, 0.2)',
        'hard-xl': '0px 15px 45px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '4.5': '1.125rem', // For finer spacing adjustments
        '18': '4.5rem', // Additional spacing utility
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#14244C',
            a: {
              color: '#047CFC',
              '&:hover': {
                color: '#FF2D46',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
