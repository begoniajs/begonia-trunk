const { parallel } = require('gulp');
const { combineRollupConfig, cpTypes } = require('./util');

const config = {
  input: './src/versionCheck/VersionChecker.js',
  fileName: 'VersionChecker',
  outDir: './dist/versionCheck',
  banner: `// bebark/versionCheck v1.0.0 by Brave Chan`
};

async function root(cb) {
  await combineRollupConfig(Object.assign({}, config, { outDir: './versionCheck' }));
  cb();
}

async function dist(cb) {
  await combineRollupConfig(config);
  cb();
}

module.exports = parallel(
  parallel(root, cpTypes('./src/versionCheck/VersionChecker.d.ts', './versionCheck/')),
  dist
);