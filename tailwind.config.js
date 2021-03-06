module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('1-bg.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
