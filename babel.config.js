module.exports = function(api /*: ApiType */) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: ['@kiwicom/babel-preset-kiwicom', 'next/babel'],
  };
};
