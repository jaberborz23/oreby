/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'bl': '#262626',
        "gr" : "#767676",
        "grr" : "#6D6D6D"
      },
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1536px'
        
  
       
      },







    },
  },
  plugins: [],
}








