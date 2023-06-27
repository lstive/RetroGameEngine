const path = require('path')

module.exports = {
  mode: 'production',
  watch: true,
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '=': path.resolve(__dirname, 'src')
    }
  },
  entry: {
    retroGameEngine: './src/retroGameEngine/retroGameEngine.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
}
