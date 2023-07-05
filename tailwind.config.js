module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@sqb/tailwind-base")],
  theme: {
    fontFamily: {
      lato: ["Lato-Bold"],
    },
  },
  plugins: [],
};
