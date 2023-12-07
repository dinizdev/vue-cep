// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background_primary: "#0f0d12",
        button: "#f8b558",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
