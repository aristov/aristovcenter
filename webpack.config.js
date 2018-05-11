const path = require('path')

module.exports = {
    mode : 'none',
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, 'build'),
        filename : 'build.index.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'raw-loader'
            }
        ]
    }
}
