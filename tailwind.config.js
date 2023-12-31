/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      istok:['Istok Web'],
    },
    extend: {
      screens:{
        lmd:{'min':'430px','max':'767px'},
      },
    },
  },
  plugins: [],
}

