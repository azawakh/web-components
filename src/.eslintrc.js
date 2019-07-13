const { resolve } = require('path');

module.exports = {
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.tsx']
      },
      webpack: {
        config: 'webpack.config.js'
      }
    }
  }
};
