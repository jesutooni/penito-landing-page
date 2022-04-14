module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      color: {
        penito: {
          black: "#122025",
          white: "#F8FBFB",
          gray: "#58666B",
          yellow: "#F2C229",
          "yellow-light": "#FDD835",
          blue: "#0EBFDD",
          "blue-dark": "#1C2A2F",
          pink: "#FF89A8",
          orange: "#FB7844",
          green: "#4EA00B",
          "green-light": "#1FB890",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
