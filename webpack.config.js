const path = require('path');

module.exports = {
  entry: './src/js/page_actions/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};