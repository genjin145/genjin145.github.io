const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');


gulp.task('sass', () => {
  return gulp.src("src/sass/style.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });

  gulp.watch("src/sass/**/*.scss", gulp.series('sass'));
  gulp.watch("dist/*.html").on('change', browserSync.reload);
});