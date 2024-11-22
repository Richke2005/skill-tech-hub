const path = require('path');

module.exports = {
  entry: './src/js/page_actions/loginEnterprise.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'loginEntBundle.js',
  },
};