module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      [
        "@babel/env",
        {
          "modules": false
        }
      ]
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
