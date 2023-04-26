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
          primary: "#ffffff",
          secondary: "#f8f8f8",
          accent: "#F2F2F2",
          neutral: "#ffffff",
          'base-100': "#ffffff",



        },
      }
    ],
  },
}
