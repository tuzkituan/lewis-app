const path = require('path')

module.exports = {
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}