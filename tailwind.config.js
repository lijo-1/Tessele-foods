/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-green': '#02934Eff',
        'mint-cream': '#F1FFFAff',
        'emerald': '#5DC98Fff',
        'jade': '#30AE6Eff'
      },
      fontFamily:{
        Mont:["Montserrat"]
      },
      screens: {
        'sm': '620px', // small tablet
        'md': '760px',//laptop
        'lg': '1200px',//desktop
      },
    },
  },
  plugins: [require("daisyui")],
}

