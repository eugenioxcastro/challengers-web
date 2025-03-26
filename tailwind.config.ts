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
        primary: '#ffcb30',
        secondary: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          purple: '#6366F1',
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 