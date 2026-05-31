module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: '#3b82f6',
          DEFAULT: '#1e3a8a', // Deep trust blue
          dark: '#172554',
        },
        brandOrange: {
          light: '#ffedd5',
          DEFAULT: '#f97316', // High visibility action orange
          dark: '#ea580c',
        },
        neutralBg: '#ffffff',
        neutralOff: '#f8fafc'
      }
    },
  },
  plugins: [],
}