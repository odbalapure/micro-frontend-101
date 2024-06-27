const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        // Expose the `cart` service
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            // Load 'faker' only once across different service
            // If the major version is similar
            shared: ['faker']
            // shared: {
            //     faker: {
            //         singleton: true
            //     }
            // }
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
    ]
}
