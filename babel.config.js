module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "not dead", "not ie <= 11"],
        },
        useBuiltIns: "usage",
        corejs: "3.18.1",
      },
    ],
    "@babel/preset-react",
  ];

  return {
    presets,
  };
};
