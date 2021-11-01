module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxs: "17rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
