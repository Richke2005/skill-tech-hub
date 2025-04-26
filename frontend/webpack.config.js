const path = require('path');

module.exports = {
  entry: './src/js/page_actions/home.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'homeBundle.js'
  },
};