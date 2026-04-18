import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
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
        serif: ['Georgia', 'Cambria', 'serif'],
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
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#334155',
            '--tw-prose-headings': '#0A2540',
            '--tw-prose-lead': '#425466',
            '--tw-prose-links': '#0570DE',
            '--tw-prose-bold': '#0A2540',
            '--tw-prose-counters': '#6B7C93',
            '--tw-prose-bullets': '#b8dbff',
            '--tw-prose-hr': '#E3E8EE',
            '--tw-prose-quotes': '#0A2540',
            '--tw-prose-quote-borders': '#0570DE',
            '--tw-prose-captions': '#6B7C93',
            '--tw-prose-code': '#0A2540',
            '--tw-prose-pre-code': '#E3E8EE',
            '--tw-prose-pre-bg': '#0A2540',
            '--tw-prose-th-borders': '#E3E8EE',
            '--tw-prose-td-borders': '#E3E8EE',
            maxWidth: '72ch',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            h2: {
              fontSize: '1.875rem',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              marginTop: '2.5em',
              marginBottom: '0.75em',
            },
            h3: {
              fontSize: '1.375rem',
              fontWeight: '600',
              letterSpacing: '-0.005em',
              marginTop: '2em',
              marginBottom: '0.6em',
            },
            p: {
              marginTop: '1.1em',
              marginBottom: '1.1em',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: '#0570DE',
              background: 'rgba(5, 112, 222, 0.04)',
              padding: '1rem 1.25rem',
              fontStyle: 'normal',
              fontWeight: '500',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(5, 112, 222, 0.3)',
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: '#0570DE',
              },
            },
            code: {
              background: '#F6F9FC',
              padding: '0.15em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.92em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            img: {
              borderRadius: '0.75rem',
              boxShadow: '0 10px 40px rgba(10, 37, 64, 0.08)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
