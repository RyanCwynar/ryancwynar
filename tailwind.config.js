module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      fontSize:{
        'rem' : '20px',
        'vrem' : '1vw'
      },
      width: {
        min: 'min-content',
        max: 'max-content'
      },
      inset: {
        '1/2' : '50%'
      },
    },
  },
  variants: {},
  plugins: [],
}
