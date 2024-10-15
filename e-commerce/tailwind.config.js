/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      sm: { max: "770px" },

    },
    extend: {},
  },
  plugins: [],
};
/*screens: {
  tablet: { max: "767px" },

  laptop: "1024px",
  
  desktop: "1280px",

},*/