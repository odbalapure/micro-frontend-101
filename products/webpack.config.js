const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        // Expose the `products` service
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                // The `mount` function is exported from bootstrap not `index.js`
                // './ProductsIndex': './src/index'
                './ProductsIndex': './src/bootstrap'
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
        })
    ]
}