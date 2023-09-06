/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1360px",
      },
      colors: {
        "dark-green": "#28A745",
        "light-green": "#2ebf4f",
        Blue: "#0284D0",
        Dark: "#333333",
        Creme: "#F4F4F4",
        backdrop: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
