const Path = require("path");

const Package = require("./package.json");

function resolve(path) {
  return Path.resolve(__dirname, path);
}

module.exports = {
  mode: `production`,
  entry: ["@babel/polyfill", resolve(`./index.js`)],
  output: {
    path: resolve(`dist`),
    filename: `index.min.js`, // `${Package.name}.js`,
    libraryTarget: `umd`
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: false,
                    browsers: [
                      "> 1%",
                      "last 4 versions",
                      "not ie <= 8",
                      "iOS >= 6",
                      "Android > 4"
                    ]
                  }
                }
              ],
              ["minify"]
            ],
            plugins: [
              // "@babel/plugin-transform-runtime",
              // "@babel/plugin-transform-exponentiation-operator",
              "@babel/plugin-transform-block-scoping",
              // "@babel/plugin-transform-object-super",
              "@babel/plugin-transform-parameters",
              "@babel/plugin-transform-spread"
            ]
          }
        }
      }
    ]
  },
  externals: {
    // "ua-parse.js": "ua-parse.js",
    // netinfo: "netinfo"
  }
};
