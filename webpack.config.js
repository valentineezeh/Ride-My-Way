const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(parentDir, 'client/index.js')
    ],
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [
                path.join(__dirname, 'client'),
                path.join(__dirname, 'server'),
            ],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        },
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty',
        fs: 'empty',
    },
    output: {
        path: path.resolve(__dirname, 'server', 'client'),
        filename: '[hash].min.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(parentDir, 'client'),
        historyApiFallback: true,
    
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client/index.html')
    })]
};
