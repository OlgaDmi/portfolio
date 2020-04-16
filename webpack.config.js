const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
const conf = {
   entry: './src/index.js',
   output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        publicPath: 'dist/'
   },
   devServer: {
        contentBase: path.join(__dirname, "dist"),
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                // images / icons
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                  name: "[name].[ext]"
                }
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            },
            {
                // Fonts
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }, 
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  use: "css-loader"
                })
              }, 
                {
                  test: /\.hbs/,
                  loader: 'handlebars-loader'
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
          { from: `./src/img`, to: `img` },
          { from: `./src/fonts`, to: `fonts` },
          { from: `./src/data`, to: `data` }
        ])
    ]
}
 
module.exports = conf;