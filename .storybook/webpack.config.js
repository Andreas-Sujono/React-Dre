const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    use: [{
      loader: require.resolve('awesome-typescript-loader')
    },
    {
      loader: require.resolve('react-docgen-typescript-loader'),
    }]
  });

  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'markdown-loader',
      }
    ]
  })

  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};