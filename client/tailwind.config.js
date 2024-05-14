const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     color: {
      sky:{
        50: "#232f3e",
        100: "#232f3e",
        200: "#232f3e",
        300: "#232f3e",
        400: "#232f3e",
        500: "#232f3e",
        600: "#232f3e",
        700: "#232f3e",
        800: "#232f3e",
        900: "#232f3e",
      }
     },
     Typography: {
            styles: {
      variants: {
        h1: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-5xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-tight",
        },
        h2: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-4xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-[1.3]",
        },
        h3: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-3xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
        },
        h4: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-2xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
        },
        h5: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
        },
        h6: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-base",
          fontWeight: "font-semibold",
          lineHeight: "leading-relaxed",
        },
        lead: {
          display: "block",
          fontSmoothing: "antialiased",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-xl",
          fontWeight: "font-normal",
          lineHeight: "leading-relaxed",
        },
        paragraph: {
          display: "block",
          fontSmoothing: "antialiased",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-base",
          fontWeight: "font-light",
          lineHeight: "leading-relaxed",
        },
        small: {
          display: "block",
          fontSmoothing: "antialiased",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "text-sm",
          fontWeight: "font-light",
          lineHeight: "leading-normal",
        },}}
     }
    },
  },
  plugins: [],
})