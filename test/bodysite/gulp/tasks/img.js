const gulp = require('gulp');
const browserSync = require('browser-sync');
const svgSprite = require('gulp-svg-sprite');
const imagemin = require('gulp-imagemin');

const path = require('../path.json');

function imgDev() {
  return gulp.src([
      path.input + 'img/**/*.*',
      '!' + path.input + 'img/svg/sprite/*.svg'
    ])
    .pipe(gulp.dest(path.output + 'img'))
    .pipe(browserSync.stream({once: true}));
}

function imgBuild() {
  return gulp.src([
      path.input + 'img/**/*.*',
      '!' + path.input + 'img/svg/sprite/*.svg'
    ])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 85, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(path.output + 'img'));
}

function svg() {
  return gulp.src(path.input + 'img/svg/sprite/*.svg')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {cleanupIDs: false},
          {removeAttrs: {attrs: '(stroke|fill)'}}
        ]
      })
    ]))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.output + 'img/svg'))
    .pipe(browserSync.stream({once: true}));
}

exports.imgDev = imgDev;
exports.imgBuild = imgBuild;
exports.svg = svg;
