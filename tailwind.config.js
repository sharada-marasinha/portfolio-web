import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(), "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
