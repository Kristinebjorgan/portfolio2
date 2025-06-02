/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenish: "#296f5c",
        gold: "#c2a14d",
        offwhite: "#f8f4ec",
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
