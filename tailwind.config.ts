import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dbff',
          300: '#7abfff',
          400: '#2490ff',
          500: '#0570de',
          600: '#0058b8',
          700: '#004494',
          800: '#003370',
          900: '#0A2540',
        },
        accent: {
          cyan: '#12D8FA',
          blue: '#0570DE',
          navy: '#0A2540',
          light: '#2490FF',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0A2540 0%, #0570DE 50%, #12D8FA 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #12D8FA 0%, #0570DE 50%, #0A2540 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(5, 112, 222, 0.08) 0%, rgba(18, 216, 250, 0.08) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
