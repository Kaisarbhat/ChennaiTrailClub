/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '240px',
        sm: '600px',
        md: '821px',
        lg: '1024px',
        sxl: '1200px',
        xl: '1340px',
      },
      listStyleType: {
        alpha: 'lower-alpha',
        'alpha-upper': 'upper-alpha',
        decimal: 'decimal',
        'decimal-leading-zero': 'decimal-leading-zero',
      },
      boxShadow: {
        mine: '10px 10px 0 0 rgba(115, 40, 246, 1)',
      },
      width: {
        45: '48%',
        maxWidth: '1320px',
      },
      colors: {
        primary: '#D0F700',
        primaryLight: '#BCD700',
        primaryLighter: '#DDF94A',
        primaryExtraLight: '#F6FFC7',
        secondary: '#7328F6',
        white: '#FCFDF8',
        whiteDark: '#B6B6B3',
        whiteExtraDark: '#7A7B76',
        black: '#070802',
        blackLight: '#50514C',
        blackExtraLight: '#5d5d5d',
        grey: '#1B1C16',
        greyLight: '#FFFFFFBF',
        shadeLighter: '#FFFFFFD8',
        shadeLight: '#E4E4E4',
        shade: '#ffffffa6',
        shadeDark: '#21221c',
        shadeDarker: '#121212',
        rose: '#f86b6b',
        roseLight: '#fcf6e4',
        roseLighter: '#FFF1F1',
      },
    },
  },
  plugins: [],
};
