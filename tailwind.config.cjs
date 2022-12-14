/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                 "light-pattern": "url('/light/pattern.png')",
                 "dark-pattern": "url('/dark/pattern.png')",
                 "light-alt-pattern": "url('/light/pattern2.png')",
                 "dark-alt-pattern": "url('/dark/pattern2.png')",
                }),
      colors: {
        "main-red": "#ff4949",
        "main-purple": "#541690",
      }
    },
  },
  plugins: [],
}
