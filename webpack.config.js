const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssoPlugin = require('csso-webpack-plugin').default

const NODE_ENV = process.env.NODE_ENV

const CSS_EXT_RE = /\.css$/
const JS_EXT_RE = /\.js$/

const rules = [
    {
        test : CSS_EXT_RE,
        use : [
            MiniCssExtractPlugin.loader,
            {
                loader : 'css-loader',
                options : {
                    importLoaders : 1,
                    url : false
                }
            },
            'postcss-loader'
        ]
    },
    {
        test : /\.svg$/,
        use : 'raw-loader'
    }
]
const plugins = [
    new MiniCssExtractPlugin({ filename : 'build.[name].css' })
]

if(NODE_ENV === 'production') {
    rules.push({
        test : JS_EXT_RE,
        use : { loader : 'babel-loader' }
    })
    plugins.push(new UglifyJsPlugin({
        uglifyOptions : {
            keep_fnames : true,
            keep_classnames : true,
            output : {
                comments : false
            }
        }
    }))
    plugins.push(new CssoPlugin)
}

module.exports = {
    mode : 'none',
    entry : {
        index : './src/index.js'
    },
    output : {
        path : path.join(__dirname, 'build'),
        filename : 'build.[name].js'
    },
    module : { rules },
    plugins
}
