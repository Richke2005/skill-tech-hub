const path = require('path');

module.exports = {
  entry: './src/js/page_actions/catalogoCursos.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'catalogoBundle.js',
  },
};