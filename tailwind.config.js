/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        alpha: 'lower-alpha',
        'alpha-upper': 'upper-alpha',
        decimal: 'decimal',
        'decimal-leading-zero': 'decimal-leading-zero',
      },
      fontFamily:{
        serif : ['Urbanist','sans-serif'],
        man : ['Manrope','sans-serif']
      },
      boxShadow:{
        mine:'10px 10px 0 0 rgba(115, 40, 246, 1)',
      }
    },
  },
  plugins: [],
}