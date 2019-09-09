const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['@kiwicom'],
  webpack: config => {
    config.resolve.extensions = [
      ...config.resolve.extensions,
      '.web.js',
      '.js'
    ];
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web'
    };
    config.module.rules.push(
      {
        test: /\.(?:woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './static/fonts/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(?:gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }
    );

    return config;
  }
});
