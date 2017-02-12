const path = require('path');

const resolvePath = (relativePath) => (
  path.resolve(__dirname, '..', relativePath)
);

module.exports = {
  APP_PATH: resolvePath('src'),
  DIST_PATH: resolvePath('dist'),
  NODE_MODULES_PATH: resolvePath('node_modules')
};
