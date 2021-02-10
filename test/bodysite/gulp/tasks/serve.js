const browserSync = require('browser-sync');

const path = require('../path.json');

function serve() {
  browserSync.init({
    server: {
      baseDir: path.output
    }
  });
}

exports.serve = serve;
