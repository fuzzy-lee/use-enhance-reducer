const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function () {
    return {
        entry: "./src/index.js",
        plugins: [
            new CleanWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    }
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: "useEnhanceReducer.js",
            //sayHello 被赋值为入口起点的返回值（库的入口，在此为../dist/say-hello.js）
            library: 'useEnhanceReducer',
            libraryTarget: "umd",
        }

    }
};
