module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: require.resolve("jquery"),
          use: [
            {
              loader: "expose-loader",
              options: "jQuery"
            },
            {
              loader: "expose-loader",
              options: "$"
            }
          ]
        }
      ]
    }
  },
  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,

  css: undefined
};
