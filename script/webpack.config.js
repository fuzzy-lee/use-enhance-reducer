var path = require('path');

module.exports = function () {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: "useEnhanceReducer.js",
            //sayHello 被赋值为入口起点的返回值（库的入口，在此为../dist/say-hello.js）
            library: 'useEnhanceReducer',
            libraryTarget: "umd",
        }

    }
};
