const path = require('path');

module.exports = {
  entry: './src/js/page_actions/loginFuncionario.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'loginFuncBundle.js',
  },
};