const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Minify JS
gulp.task('minify-js', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

// Watch JS files for changes
gulp.task('watch-js', () => {
  gulp.watch('src/js/*.js', gulp.series('minify-js'));
});

// Default task
gulp.task('default', gulp.series('minify-js', 'watch-js'));
