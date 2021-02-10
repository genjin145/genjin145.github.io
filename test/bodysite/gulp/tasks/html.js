const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug'); 

const path = require('../path.json');

function html() {
  return gulp.src(path.input + 'pages/**/*.pug')
    .pipe(pug({
      // pretty: true
    }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream({once: true}));
}

exports.html = html;
