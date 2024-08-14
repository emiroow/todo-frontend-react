/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansBold: ["sansBold"],
        sansMedium: ["sansMedium"],
        sansRegular: ["sansRegular"],
        sansLight: ["sansLight"],
      },
    },
  },
  daisyui: {
    themes: ["night", "cupcake"],
  },
  darkMode: ["class", '[data-theme="night"]'],
  plugins: [require("daisyui")],
};
