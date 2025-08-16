// Tailwind v3 config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: { 900: "#0B1220", 800: "#0F172A", card: "#162038" },
        brand: { DEFAULT: "#38BDF8", 500: "#0EA5E9" }
      },
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
        cairo: ["Cairo", "ui-sans-serif", "system-ui"]
      },
      container: {
        center: true,
        padding: "2rem"
      }
    },
  },
  plugins: [],
}
