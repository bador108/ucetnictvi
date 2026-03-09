/** @type {import('tailwindcss').Config} */
export default {
  // Přidali jsme 'class' pro ten tvůj Dark/Light mode přepínač
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tady si můžeš definovat vlastní font, pokud ho chceš mít globálně
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}