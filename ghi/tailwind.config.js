/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#82AAE3",
          secondary: "#E191A7",
          accent: "#91D8E4",
          neutral: "#EAFDFC",
          'base-100': "#ffffff",
        },
      }
    ],
  },
}
