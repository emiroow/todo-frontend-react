/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  darkMode: ["class", '[data-theme="night"]'],
  plugins: [require("daisyui")],
};
