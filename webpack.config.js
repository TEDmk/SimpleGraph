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
                    options: 'SimpleTimeChart'
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
        filename: 'simple-time-chart.js',
        path: path.resolve(__dirname, './www'),
    },
};