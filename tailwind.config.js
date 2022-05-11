module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#49A078",
          400: "#98f198",
          100: "#DFFFF0"
        }
      },
      borderRadius: {
        md: '4px'
      } 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}