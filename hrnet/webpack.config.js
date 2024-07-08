const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Pour les fichiers .js et .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Ajoutez @babel/preset-react pour le JSX
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Si vous avez des fichiers CSS à gérer
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Ajoutez .jsx pour que Webpack puisse résoudre ces extensions
  }
};