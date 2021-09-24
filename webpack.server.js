const path = require("path");
const baseConfig = require("./webpack.base.");
const { merge } = require('webpack-merge');
const serverConfig = {
    devtool: "eval",
    entry: "./src/server",
    target: "node",
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./dist")
    },
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
            }
        ]
    }
};

module.exports = merge(baseConfig, serverConfig);