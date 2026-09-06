/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pragmatto: {
          navy: '#0C1E38',       // Deep Navy Blue (Headers, Footer, Primary typography, Dark sections)
          'navy-dark': '#071324',  // Extra Deep Navy for background contrast
          'navy-light': '#162C4E', // Elevated Navy for dark cards
          blue: '#165BB5',       // Professional Medium Blue (Primary buttons, active links, highlights)
          'blue-hover': '#114A98',// Darker blue hover state
          cyan: '#00A8E8',       // Sky Blue / Cyan Accent (Highlights, badges, subtle geometric glow)
          'cyan-light': '#E0F2FE',// Very soft cyan background fill
          slate: '#475569',      // Muted body typography text
          bgLight: '#F8FAFC',    // 70% light background
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 168, 232, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(22, 91, 181, 0.3)',
        'card': '0 4px 20px -2px rgba(12, 30, 56, 0.06), 0 2px 6px -1px rgba(12, 30, 56, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(12, 30, 56, 0.12), 0 4px 10px -2px rgba(12, 30, 56, 0.06)',
      }
    },
  },
  plugins: [],
}
