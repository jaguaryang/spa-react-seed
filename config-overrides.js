/**
 * Created by Jaguar on 18/7/14.
 */

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const {injectBabelPlugin} = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  // add a plugin
  config = injectBabelPlugin(['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}], config);

  // config.exports = {
  //   module: {
  //     rules: [{
  //       test: require.resolve("jquery"),
  //       loader: "expose-loader?jquery"
  //     }]
  //   }
  // };

  config.resolve.alias = {
    '@': resolve('src')
  };

  if (env === "production") {
    console.log("⚡ Production build with Preact");
  }

  return config;
};