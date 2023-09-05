/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1360px",
      },
      colors: {
        Green: "#28A745",
        Blue: "#0284D0",
        Dark: "#333333",
        Creme: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
