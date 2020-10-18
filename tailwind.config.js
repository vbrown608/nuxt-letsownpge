const transitionDuration = '.333s';

module.exports = {
  purge:
    process.env.NODE_ENV === 'development'
      ? false
      : {
          content: [
            './components/**/*.vue',
            './pages/**/*.vue',
            './layouts/**/*.vue',
          ],
          options: {
            whitelist: ['object-cover', 'object-contain'],
          },
        },
  // important: true,
  theme: {
    transitionDuration,
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1200px',
      xl: '1600px',
      hd: '1920px',
      '4k': '3840px',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    // tracking: {
    //   '-3': '-3px',
    //   '-2': '-2px',
    //   '-1': '-1px',
    //   '0': '0px',
    //   '1': '1px',
    //   '2': '2px',
    //   '3': '3px'
    // },
    minHeight: {
      '1/2-screen': '50vh',
      screen: '100vh',
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      lineHeight: {
        tight: '1.333',
        normal: '1.666',
      },
      width: {
        '2/5': '40%',
        '3/5': '60%',
        '3/7': '43%',
        '4/7': '57%',
      },
      colors: {
        blue: '#005179',
        'blue-light': '#1e5c89',
        white: '#ffffff',
        'white-alpha': '#ffffffcc',
        teal: '#20A4A6',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
