const gulp = require('gulp');

const { html } = require('./html');
const { cssDev } = require('./css');
const { jsDev } = require('./js');
const { imgDev, svg } = require('./img');
const { fonts } = require('./fonts');

const path = require('../path.json');

function watch() {
  gulp.watch([
    path.input + 'pug/**/*.pug',
    path.input + 'pages/**/*.pug',
    path.input + 'components/**/*.pug'
  ], gulp.series(html));

  gulp.watch([
    path.input + 'scss/**/*.scss',
    path.input + 'pages/**/*.scss',
    path.input + 'components/**/*.scss'
  ], gulp.series(cssDev));

  gulp.watch(path.input + 'js/**/*.js', gulp.series(jsDev));

  gulp.watch(path.input + 'img/**/*.*', gulp.parallel(imgDev, svg));

  gulp.watch(path.input + 'fonts/**/*.*', gulp.series(fonts))
}

exports.watch = watch;
