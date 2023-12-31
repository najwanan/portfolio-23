/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        port: {
          magenta: "#BF045B",
          turquiose: "#1C8C78",
          citron: "#D9C14A",
          tangerine: "#F28E13",
          sunset: "#F26B1D",
          poppy: "#F23030",
          black: "#1C1C1C",
          white: "#FEFFFF",
          cream: "#FEFAE0",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        dmserif: ["DM Serif Text"],
        mono: ["Victor Mono", "monospace"],
      },

      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
        lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
        xl: "0 2px 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    /*eslint-env node*/
  require("daisyui"),

  ],
};


