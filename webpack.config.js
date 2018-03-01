module.exports = {

    entry: [
        "./app/app.jsx",
    ],

    output: {
        path:  __dirname,
        filename: "./public/bundle.js",
    },

    resolve: {
        extensions: [ '.js', '.jsx'],
        alias: {
            actions: __dirname + '/app/actions/actions.jsx',
            reducers: __dirname + '/app/reducers/reducers.jsx',
            configureStore: __dirname + '/app/store/configureStore.jsx',
            config: __dirname + '/app/config/config.jsx',

            Page: __dirname + '/app/components/Page.jsx',
            Header: __dirname + '/app/components/Header.jsx',
            Body: __dirname + '/app/components/Body.jsx',
        }
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: [ 'react', 'env', 'stage-0']
            },
            exclude: /(node_modules|bower_components)/

            },
            {
                test: /\.css$/,

                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }]

            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },

            { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }]
            }

        ],

    },

    devtool: 'cheap-module-eval-source-map', // just for you to watch things ;)
};