module.exports = {
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}