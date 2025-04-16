/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Si usas index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos .jsx para React
  ],
  theme: {
    extend: {
      colors: {
        verde: '#2E8B57',
        petroleo: '#00587A',
        menta: '#B2F2BB',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
