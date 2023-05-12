export default {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,jsx,js,ts,tsx}",
    "./index.html"
  ],
  important: true,
  darkMode: 'class',
  theme: {
    screens: {
      'monitor-lg': { 'max': '2560px' },
      'laptop-lg': { 'max': '1440px' },
      'laptop-sm': { 'max': '1280px' },
      'tablet-lg': { 'max': '1024px' },
      'tablet-md': { 'max': '834px' },
      'tablet-sm': { 'max': '768px' },
      'mobile-lg': { 'max': '480px' },
      'mobile-md': { 'max': '428px' },
      'mobile-sm': { 'max': '384px' },
      'mobile-xs': { 'max': '320px' },
    },
    extend: {
      fontFamily: {
        mono: ['Jetbrains Mono', 'monospace'],
        robotoMono: ['Roboto Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        urban: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        tag: '.7rem',
      },
      letterSpacing: {
        header: '.16em',
        section: '.2em',
      },
      screens: {
        'landscape-tablet-lg': { 'raw': '(max-width: 1366px) and (min-width : 768px) and (orientation : landscape)' },
        'landscape-tablet-md': { 'raw': '(max-width: 1194px) and (min-width : 768px) and (orientation : landscape)' },
        'landscape-tablet-sm': { 'raw': '(max-width: 1024px) and (min-width : 768px) and (orientation : landscape)' },
        'landscape-mobile-lg': { 'raw': '(max-width: 926px) and (min-width: 320px) and (orientation : landscape)' },
        'landscape-mobile-md': { 'raw': '(max-width: 854px) and (min-width: 320px) and (orientation : landscape)' },
        'landscape-mobile-sm': { 'raw': '(max-width: 667px) and (min-width: 320px) and (orientation : landscape)' },
        'landscape-mobile-xs': { 'raw': '(max-width: 568px) and (min-width: 320px) and (orientation : landscape)' },
      }
    },
  },
  plugins: [],
}