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
        Green: "#28A745",
        Blue: "#0284D0",
        Dark: "#333333",
        Creme: "#F4F4F4",
      },
      backgroundImage: {
        "hero-mobile": "url('./src/assets/mobile/image-hero-mobile.svg')",
        "hero-tablet": "url('./src/assets/tablet/image-hero-tablet.svg')",
        "hero-desktop": "url('./image-hero-desktop.svg')",
      },
    },
  },
  plugins: [],
};
