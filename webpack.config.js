const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    module: {
        rules: [
            
            {
                test: /\.ts$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'SimpleGraph'
                }, {
                    loader: 'ts-loader'
                }],
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './www'),
    },
};