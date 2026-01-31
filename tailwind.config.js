module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini ada dan benar!
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#0b4f6c',
        'sea-blue-dark': '#063246',
        'coral': '#ff6b6b',
        'teal-accent': '#2dd4bf'
      }
    }
  },
  plugins: []
}
