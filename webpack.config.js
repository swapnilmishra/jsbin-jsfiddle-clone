module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  devServer : {
      inline: true
  },
  devtool: "cheap-eval-source-map"
}