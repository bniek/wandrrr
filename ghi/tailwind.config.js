/** @type {import('tailwindcss').Config} */
module.exports = {
  //...

  // add daisyUI plugin

  plugins: [require("daisyui")],
  // daisyUI config (optional)
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: "",
//     darkTheme: "dark",
//   },


  content:[
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
          neutral: "#000000",
          'base-100': "#ffffff",



        },
      }
    ],
  },
}
