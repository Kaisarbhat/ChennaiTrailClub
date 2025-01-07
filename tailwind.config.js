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
        xs: '340px',
        sm: '600px',
        md: '820px',
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
      },
    },
  },
  plugins: [],
};
