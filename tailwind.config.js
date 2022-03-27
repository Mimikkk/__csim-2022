module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css,scss}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    imageRendering: ["responsive"],
  },
  plugins: [require("tailwindcss-image-rendering")()],
};
