/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-01": "#0e1133",
        "dark-02": "#505056",
        "dark-03": "#00c0c1",
      },
      fontFamily: {
        inter: ["Inter", "sans"], // 'inter' is a custom name for the Inter font
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
