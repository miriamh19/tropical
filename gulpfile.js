var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', function() {
  // place code for your default task here
return gulp.src("css/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("app.css"));

});