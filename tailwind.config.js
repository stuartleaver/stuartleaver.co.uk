module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'icon-close': "url('/src/assets/icon-close.svg')",
                'icon-hamburger': "url('/src/assets/icon-hamburger.svg')",
            },
            minWidth: {
                photo: "200px",
            },
            maxWidth: {
                xxs: "17rem",
            },
            boxShadow: {
                timeline: "0px 0px 3px 0px rgb(0 0 0 / 20%)",
            },
            inset: {
                "-7/5": "-1.87rem",
            },
            zIndex: {
                "1000": 1000,
                "9999": 9999,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};