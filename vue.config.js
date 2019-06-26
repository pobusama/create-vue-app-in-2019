const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "//some.cdn.com" : "/",
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: "window.Vue",
      "vue-router": "window.VueRouter",
      axios: "window.axios",
      "element-ui": "window.ELEMENT"
    }
  }
};
