import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'accent': '#CBF34D',
      'sub_orange': '#F3894D',
      'sub_aqua': '#4DD5F3',
      'sub_blue': '#4D5EF3',
      'sub_purple': '#BE4DF3',
      'black': '#212121',
      'gray_900': '#333333',
      'gray_666': '#666666',
      'gray_700': '#999999',
      'gray_600': '#CCCCCC',
      'gray_100': '#EEEEEE',
      'white': '#FDFDFD',
    },
    fontFamily: {
      'ja': ['noto-sans-jp'],
      'en': ['inter']
    },
    fontSize: {
      '2xs': '10px',
      'xs': '12px',
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '48px',
      '7xl': '56px',
      '8xl': '64px',
      '9xl': '80px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: 'noto-sans-jp, inter', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}
export default config
