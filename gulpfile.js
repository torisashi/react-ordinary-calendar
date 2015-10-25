var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('transpile', function() {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
          .pipe(babel())
          .pipe(gulp.dest('lib'));
});

gulp.task('default', ['transpile']);
