const path = require('path');

module.exports = {
  entry: {
    homeBundle: './src/js/page_actions/home.js',
    loginFuncBundle: './src/js/page_actions/loginFuncionario.js',
    perfilBundle: './src/js/page_actions/perfil.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // isso cria homeBundle.js e loginFuncBundle.js
  },
  mode: 'development', // pode trocar para 'production' para produção
  devtool: 'source-map' // facilita o debug, melhor que 'eval'
};
/*const path = require('path');

module.exports = {
  entry: './src/js/page_actions/home.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'homeBundle.js'
  },
};*/