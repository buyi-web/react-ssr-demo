const path = require("path");
const baseConfig = require("./webpack.base.");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const clientConfig = {
    devtool: "source-map",
    entry: "./src/client",
    output: {
        filename: "js/bundle.[hash:5].js",
        path: path.resolve(__dirname, "./public")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash:5].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, 
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

module.exports = merge(baseConfig, clientConfig);
