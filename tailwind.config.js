export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cblack: {
          400: '#300E46',
          500: '#23003B',
          600: '#320551fc',
        },
        cpurple: {
          500: '#9C11F3',
        },
        cwhite: {
          500: '#F8F2F8',
          400: '#F1F1F1',
        },
        cgray: {
          500: '#D9D9D9',
        },
        cblue: {
          500: '#9C11F3',
        },
      },
      boxShadow: {
        '1xl': '0px 4px 20px rgba(0, 0, 0, 0.1)',
        '3xl': '0 40px 80px 5px rgba(0, 0, 0, 0.3)'
      },
      inset: {
        'modal': '40% auto auto 50%',
      }
    },
  },
  plugins: [],
}
