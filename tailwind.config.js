module.exports = {
    content: ['./src/**/*.js',"./node_modules/flowbite/**/*.js"],
    theme: {
      extend: {
        fontFamily: {
          'Reem': ['Reem Kufi Fun'],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }
  