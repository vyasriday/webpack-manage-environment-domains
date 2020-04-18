const path = require("path");
const webpack = require("webpack");
const setConfiguration = require("./config/config").setConfiguration;

module.exports = (env, argv) => {
  const environmentConfig = setConfiguration(env);
  console.log(environmentConfig);

  return {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    mode: argv.mode,
    plugins: [
      new webpack.DefinePlugin({
        __API_DOMAIN__: JSON.stringify(environmentConfig.domain),
      }),
    ],
  };
};
