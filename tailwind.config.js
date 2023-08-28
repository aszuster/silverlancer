/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1536px",
      xxxl: "1727px",
    },
    colors: {
      slBeige: "#FDF8ED",
      slLightBlue: "#7DA2AB",
      slBlack: "#1D1E16",
      slGold: "#ECB947",
      slWine: "#862729",
    },
    fontFamily: {
      'montserrat': ['Montserrat', "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

