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
          navy: '#071328',        // Rich Midnight Navy (Headers, Footer, Primary Dark)
          'navy-dark': '#040C1A',   // Ultra Deep Midnight Navy
          'navy-card': '#0E1E38',   // Elevated Navy for Dark Cards
          'navy-border': '#1E3A5F', // Border color for dark elements
          blue: '#2563EB',        // Electric Royal Blue (Primary actions)
          'blue-hover': '#1D4ED8', // Darker blue hover
          'blue-light': '#EFF6FF', // Soft Blue Background fill
          cyan: '#0EA5E9',        // Radiant Sky Cyan Accent
          'cyan-hover': '#0284C7',
          'cyan-light': '#F0F9FF', // Soft Cyan tint
          slate: '#475569',       // Body typography
          bgLight: '#F8FAFC',     // Light background canvas
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px -5px rgba(14, 165, 233, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
        'card': '0 4px 20px -2px rgba(7, 19, 40, 0.05), 0 2px 6px -1px rgba(7, 19, 40, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(7, 19, 40, 0.12), 0 8px 16px -4px rgba(7, 19, 40, 0.06)',
        'glass': '0 8px 32px 0 rgba(7, 19, 40, 0.08)',
      }
    },
  },
  plugins: [],
}
