const path = require("path");

const transpileModules = (config) => {
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
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });


    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules=true'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video"
          }
        }
      ]
    });

    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ]
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};

module.exports = {
    stories: [
      '../src/**/*.stories.@(js|ts|tsx|mdx)',
      '../docs/**/*.stories.@(js|ts|tsx|mdx)',
    ],
    addons: [
      {
        name: '@storybook/preset-typescript',
        options: { transpileManager: true },
      },
      '@storybook/addon-docs',
      '@storybook/addon-actions',
    ],
    webpackFinal: transpileModules,
    managerWebpack: transpileModules,
};
  