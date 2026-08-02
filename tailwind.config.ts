import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navBg: 'var(--nav-bg)',
        border: 'var(--border)',
        borderHover: 'var(--border-hover)',
        cardBg: 'var(--card-bg)',
        cardHover: 'var(--card-hover)',
        amber: 'var(--accent-amber)',
        teal: 'var(--accent-teal)',
        slateBlue: 'var(--accent-slate)'
      },
    },
  },
  plugins: [],
}
export default config
