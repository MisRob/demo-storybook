const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.vue$/,
      enforce: 'pre',
      loader: 'svg-icon-inline-loader',
      exclude: /node_modules/,
    })
  
    return config;
  },
};