/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/components/navbar/navbar.component.{html,ts}",
    "./src/app/components/header/header.component.{html,ts}",
    "./src/app/components/main/main.component.{html,ts}",
    "./src/app/components/footer/footer.component.{html,ts}",
    "./src/app/components/moviesections/moviesections.component.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
