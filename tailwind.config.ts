import type {Config} from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: ['./pages/**/*.{html,js,ts,jsx,tsx,mdx}', './src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      '2xs': ['10px', '15px'],
      xs: ['12px', '18px'],
      sm: ['14px', '21px'],
      md: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '36px'],
      '3xl': ['28px', '42px'],
      '4xl': ['32px', '48px'],
      '5xl': ['40px', '60px'],
      '6xl': ['3rem', '4.5rem'],
      '7xl': ['56px', '84px'],
      '8xl': ['64px', '96px'],
      '9xl': ['80px', '120px'],
    },
    // fontFamily: {
    //   ja: ['Noto Sans JP'],
    //   en: ['Inter var'],
    // },
    extend: {
      colors: {
        accent: '#CBF34D',
        sub_orange: '#F3894D',
        sub_aqua: '#4DD5F3',
        sub_blue: '#4D5EF3',
        sub_purple: '#BE4DF3',
        black: '#212121',
        gray_900: '#333333',
        gray_666: '#666666',
        gray_700: '#999999',
        gray_600: '#CCCCCC',
        gray_100: '#EEEEEE',
        white: '#FDFDFD',
      },
      fontFamily: {
        // ja: ['Noto Sans JP'],
        // en: ['Inter'],
        'ja-bold': ['NotoSansJPBold'],
        'ja-medium': ['NotoSansJPMedium'],
        'en-bold': ['InterBold'],
        'en-medium': ['InterMedium'],
      },
      backgroundImage: {
        // init
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // background images
        'home-background-pc': "url('/pc/home_backround@3x.jpg')",
        'home-background-sp': "url('/sp/home_backround@3x.png')",
        'contact-background-pc': "url('/pc/contact@3x.jpg')",
        'contact-background-sp': "url('/sp/contact@3x.jpg')",
      },
      spacing: {
        '96': '24rem',
        '100': '25rem',
        '128': '32rem',
        '320': '80rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss-convert-px-to-rem'),
  ],
};
export default config;
