const path = require("path");
const baseConfig = require("./webpack.base.");
const { merge } = require('webpack-merge');
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
    devtool: "eval",
    entry: "./src/server",
    target: "node",
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "isomorphic-style-loader", 
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ] 
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[hash:5].[ext]",
                            emitFile: false
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = merge(baseConfig, serverConfig);