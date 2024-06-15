/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ca00ff",

          secondary: "#00fc00",

          accent: "#0069e1",

          neutral: "#181818",

          "base-100": "#19203a",

          info: "#0091ff",

          success: "#00ae60",

          warning: "#ff9500",

          error: "#ff006d",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="night"]'],
  plugins: [require("daisyui")],
};
