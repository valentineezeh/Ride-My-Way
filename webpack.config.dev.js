const path = require('path');
const parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(parentDir, 'client/index.js')
    ],
    mode:'development',
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
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        }
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty',
        fs: 'empty',
    },
    output: {
        path: `${parentDir}/index`,
        filename: 'bundle.min.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(parentDir, 'client'),
        historyApiFallback: true,
    
    },
};
