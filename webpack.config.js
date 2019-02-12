const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = env => {
console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
    return {
        output: {
            path:__dirname + '/build'
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                {
                    loader: "html-loader"
                }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader', 
                        options: {
                            sourceMap: env.NODE_ENV !== 'production'
                        }
                    },
                    {
                        loader:'sass-loader', 
                        options: {
                            sourceMap: env.NODE_ENV !== 'production'
                        }
                    }
                ]
            }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
                minify: {
                  collapseWhitespace: env.NODE_ENV === 'production',
                  preserveLineBreaks: env.NODE_ENV === 'production',
                  removeComments: env.NODE_ENV === 'production',
                  removeScriptTypeAttributes: env.NODE_ENV === 'production',
                  removeStyleLinkTypeAttributes: env.NODE_ENV === 'production',
                  useShortDoctype: env.NODE_ENV === 'production',
                  removeRedundantAttributes: env.NODE_ENV === 'production',
                }
            })
        ]
    }
};