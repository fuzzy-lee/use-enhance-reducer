var config = require("./webpack.config");

module.exports = {
    ...config(),
    mode: "production",
    // mode: "development",
    //排除外部依赖
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "_",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "_",
        }
    }
};
