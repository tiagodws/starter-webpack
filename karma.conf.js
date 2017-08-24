const webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        basePath: "src/",
        plugins: [
            "karma-jasmine",
            "karma-phantomjs-launcher",
            "karma-sourcemap-loader",
            "karma-verbose-reporter",
            "karma-webpack"
        ],
        frameworks: ["jasmine"],
        files: [
            "test.js"
        ],
        exclude: [],
        preprocessors: {
            "test.js": ["webpack", "sourcemap"]
        },
        reporters: ["verbose"],
        webpack: webpackConfig("test"),
        webpackMiddleware: {
            stats: "errors-only",
            noInfo: true
        },
        port: 9876,
        colors: true,
        failOnEmptyTestSuite: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};
