module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-color-functional-notation": {},
    "postcss-pxtorem": { rootValue: 37.5, propList: ["*"] },
  },
};
