/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      cream: "#FAFAFA",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      dark: "#2B3844",
      body: "#202C36",
    },
    // zIndex: {
    //   "00": "-1",
    // },
    height: {
      114: "56",
      20: "80px",
      336: "390px",
      300: "210px",
      999: "855px",
      max: "1000px",
    },
  },
  plugins: [],
};
