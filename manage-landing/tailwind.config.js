// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)",
        },
        neutral: {
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          darkBlue: "hsl(233, 12%, 13%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
    fontSize: {
      base: "16px",
    },
    screens: {
      sm: "320px", // For testing smaller screens
      md: "768px",
      lg: "1024px",
      xl: "1440px", // Aligns with desktop design width
    },
  },
  plugins: [],
};
