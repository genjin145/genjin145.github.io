"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");
 
gulp.task("sass", function () {
  return gulp.src("./sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("js", function() {
  return gulp.src("js/**/*.js")
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
});
 
gulp.task("serve", function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./js/**/*.js", gulp.series("js"));
});