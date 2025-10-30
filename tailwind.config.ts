import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          foreground: 'rgb(var(--brand-foreground) / <alpha-value>)',
        },
        peach: {
          DEFAULT: 'rgb(var(--peach) / <alpha-value>)',
          foreground: 'rgb(255 255 255 / <alpha-value>)',
        },
        muted: 'rgb(var(--muted) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config


