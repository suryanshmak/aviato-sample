module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  media: false,
  theme: {
    colors: {

    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [ 
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}