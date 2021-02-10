const del = require('del');

const path = require('../path.json');

function clear() {
  return del(path.output);
}

exports.clear = clear;
