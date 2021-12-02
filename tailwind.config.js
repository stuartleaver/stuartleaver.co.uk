module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxs: "17rem",
      },
      boxShadow: {
        timeline: "0px 0px 3px 0px rgb(0 0 0 / 20%)",
      },
      inset: {
        "-7/5": "-1.87rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
