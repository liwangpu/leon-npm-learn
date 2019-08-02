const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new copyWebpackPlugin([
            { from: 'resources' }
        ]),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs2"
    }
};