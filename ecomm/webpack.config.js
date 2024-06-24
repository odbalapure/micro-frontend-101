const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
}