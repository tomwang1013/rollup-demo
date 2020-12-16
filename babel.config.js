module.exports = api => {
  return {
    "presets": [
      ["@babel/preset-env", { "modules": false }],
      "@babel/preset-typescript",
      "@babel/react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      ["@babel/plugin-transform-runtime", { useESModules: true }]
    ]
  }
};
