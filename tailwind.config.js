module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "icon-close": "url('/images/icon-close.svg')",
        "icon-hamburger": "url('/images/icon-hamburger.svg')",
      },
      boxShadow: {
        timeline: "0px 0px 3px 0px rgb(0 0 0 / 20%)",
      },
      colors: {
        "github-black": "#171515",
        "instagram-magenta": "#C32AA3",
        "linkedin-blue": "#0077B5",
        "twitter-blue": "#1DA1F2",
      },
      minWidth: {
        photo: "200px",
      },
      maxWidth: {
        xxs: "17rem",
      },
      inset: {
        "-7/5": "-1.87rem",
      },
      zIndex: {
        1000: 1000,
        9999: 9999,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
