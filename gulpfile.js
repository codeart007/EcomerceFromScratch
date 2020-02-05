var gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  console.log("Working fine");
});

gulp.task('styles', function(){
  gulp
    .src("style/sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
       browsers: ["last 2 versions"]
    }))
    .on("error", sass.logError)
    .pipe(gulp.dest("style/css"));
});
