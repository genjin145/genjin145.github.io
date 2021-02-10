const gulp = require('gulp');

const { clear } = require('./gulp/tasks/clear.js');
const { html } = require('./gulp/tasks/html');
const { cssDev, cssBuild } = require('./gulp/tasks/css');
const { jsDev, jsBuild } = require('./gulp/tasks/js');
const { imgDev, imgBuild, svg } = require('./gulp/tasks/img');
const { fonts } = require('./gulp/tasks/fonts');
const { serve } = require('./gulp/tasks/serve');
const { watch } = require('./gulp/tasks/watch');

exports.clear = clear;
exports.html = html;
exports['css:dev'] = cssDev;
exports['css:build'] = cssBuild;
exports['js:dev'] = jsDev;
exports['js:build'] = jsBuild;
exports['img:dev'] = imgDev;
exports['img:build'] = imgBuild;
exports.svg = svg;
exports.fonts = fonts;
exports.fonts = fonts;
exports.serve = serve;
exports.watch = watch;

exports.build = gulp.series(
  clear,
  gulp.parallel(
    html,
    cssBuild,
    jsBuild,
    imgBuild,
    svg,
    fonts
  )
);

exports.default = gulp.series(
  clear,
  gulp.parallel(
    html,
    cssDev,
    jsDev,
    imgDev,
    svg,
    fonts
  ),
  gulp.parallel(
    serve,
    watch
  )
);
