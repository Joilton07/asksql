import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)'],
      },
      colors: {
        blueberry: {
          300: '#323842',
          600: '#151A2A',
          900:'#07061D'
        },
        'cotton-candy': '#66D9EF',
        lemon: '#2DFF0B',
        gum: '#FD78C4',
        background : '#030712',
        pistachio : '#D3FFCC',
        cream : '#E2DFCD',
        foam : '#D7DAE2',
        snow : '#FFFFFF',
        '8-lemon' : '#0F140F',
        '20-guava' : '#2C332B',
        '80-snow' : '#CCCCCC',
      }
    },
  },
  plugins: [],
}
export default config
