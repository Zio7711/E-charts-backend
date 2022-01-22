const { resolve } = require('path');
module.exports = {
  node: {
    net: 'empty',
    fs: 'empty',
  },

  output: {
    filename: 'chart.js',
    path: resolve(__dirname, 'build'),
  },
};
