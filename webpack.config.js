const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const detenv = require('dotenv-safe');

detenv.load({
    allowEmptyValues: true,
    path: path.join(__dirname, './.env'),
    sample: path.join(__dirname, './.env.example'),
});

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'client', 'index.tsx'),
            'webpack-hot-middleware/client',
        ],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build', 'public'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': `http://localhost:${process.env.API_HTTP_PORT}`,
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: './client/tsconfig.json' }),
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'templates', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}