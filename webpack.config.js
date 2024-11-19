const path = require('path');

module.exports = {
  entry: './src/js/animations/sliderEffect.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'indexBundle.js',
  },
};