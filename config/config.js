const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'ps-express'
    },
    port: process.env.PORT || 4500,
  },

  test: {
    root: rootPath,
    app: {
      name: 'ps-express'
    },
    port: process.env.PORT || 4500,
  },

  production: {
    root: rootPath,
    app: {
      name: 'ps-express'
    },
    port: process.env.PORT || 4500,
  }
};

module.exports = config[env];