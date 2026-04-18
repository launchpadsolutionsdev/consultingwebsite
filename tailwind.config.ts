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
        // Navy scale — tuned around Launchpad Navy #1B2A4A
        primary: {
          50: '#F4F6FA',
          100: '#E5E9F1',
          200: '#C8D0E1',
          300: '#9AA8C6',
          400: '#677AA2',
          500: '#415581',
          600: '#2E4066',
          700: '#243352',
          800: '#1B2A4A',
          900: '#0F172A',
        },
        // Brand + legacy-compatible accent aliases
        brand: {
          orange: '#FF6B2B',
          amber: '#F5A623',
          navy: '#1B2A4A',
        },
        accent: {
          // Legacy names mapped to new palette so existing className usage re-tints automatically
          blue: '#FF6B2B', // was #0570DE — now Launchpad Orange (primary CTA accent)
          cyan: '#F5A623', // was #12D8FA — now Launchpad Amber (secondary accent)
          navy: '#1B2A4A',
          light: '#FFB385', // soft peach highlight for surfaces
        },
        surface: '#F8F9FB',
        divider: '#E5E7EB',
        muted: '#6B7280',
      },
      backgroundImage: {
        // Vertical brand gradient (per brand guide §2)
        'gradient-brand': 'linear-gradient(180deg, #FF6B2B 0%, #F5A623 100%)',
        'gradient-brand-reverse': 'linear-gradient(180deg, #F5A623 0%, #FF6B2B 100%)',
        'gradient-brand-horizontal': 'linear-gradient(90deg, #FF6B2B 0%, #F5A623 100%)',
        // Subtle warm tint for cards and surfaces
        'gradient-subtle': 'linear-gradient(135deg, rgba(255, 107, 43, 0.06) 0%, rgba(245, 166, 35, 0.06) 100%)',
      },
      fontFamily: {
        sans: ['Stolzl', 'Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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
            '--tw-prose-body': '#1B2A4A',
            '--tw-prose-headings': '#1B2A4A',
            '--tw-prose-lead': '#415581',
            '--tw-prose-links': '#FF6B2B',
            '--tw-prose-bold': '#1B2A4A',
            '--tw-prose-counters': '#6B7280',
            '--tw-prose-bullets': '#FFB385',
            '--tw-prose-hr': '#E5E7EB',
            '--tw-prose-quotes': '#1B2A4A',
            '--tw-prose-quote-borders': '#FF6B2B',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-code': '#1B2A4A',
            '--tw-prose-pre-code': '#E5E7EB',
            '--tw-prose-pre-bg': '#1B2A4A',
            '--tw-prose-th-borders': '#E5E7EB',
            '--tw-prose-td-borders': '#E5E7EB',
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
              borderLeftColor: '#FF6B2B',
              background: 'rgba(255, 107, 43, 0.05)',
              padding: '1rem 1.25rem',
              fontStyle: 'normal',
              fontWeight: '500',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255, 107, 43, 0.35)',
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: '#FF6B2B',
              },
            },
            code: {
              background: '#F8F9FB',
              padding: '0.15em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.92em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            img: {
              borderRadius: '0.75rem',
              boxShadow: '0 10px 40px rgba(27, 42, 74, 0.08)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
