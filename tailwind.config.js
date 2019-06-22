const transitionDuration = '.333s'

module.exports = {
  // important: true,
  theme: {
    transitionDuration: transitionDuration,
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1200px',
      xl: '1600px',
      hd: '1920px',
      '4k': '3840px'
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
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
      screen: '100vh'
    },
    extend: {
      lineHeight: {
        tight: '1.333',
        normal: '1.666'
      },
      width: {
        '2/5': '40%',
        '3/5': '60%',
        '3/7': '43%',
        '4/7': '57%'
      },
      colors: {
        blue: '#005179',
        white: '#ffffff',
        teal: '#20A4A6'
      },
      margin: {
        '96': '24rem',
        '128': '32rem'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: `all ${transitionDuration} ease`,
      transitions: {
        slow: 'all 2s ease',
        'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }
    })
  ]
}
