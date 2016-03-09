/*
* Dependencias
*/
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    stylus = require('gulp-stylus'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    gutil = require('gulp-util'),
    eol = require('gulp-eol'),
    nib = require('nib');


// Developer server
gulp.task('server', function() {
  connect.server({
    root: './app/',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [historyApiFallback()];
    }
  });
});

// Production server
gulp.task('server-dist', function() {
  connect.server({
    root: './dist/',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
  });
});

// Jade to Html
gulp.task('jade', function() {
  return gulp.src('./app/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./app/'))
});

// Stylus to CSS
gulp.task('css', function() {
  gulp.src('./app/css/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

// Reload Browser
gulp.task('html', function() {
  gulp.src('.app/**/*.html')
    .pipe(connect.reload());
});

// Watch for change on the code and start tasks
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/**/*.styl'], ['css']);
  gulp.watch(['./app/**/*.jade'], ['jade']);
});

// Production files
gulp.task('compress', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy',	function()	{
		gulp.src('./app/fonts/**')
				.pipe(gulp.dest('./dist/fonts'));
    gulp.src('./app/img/**')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('build', ['compress', 'copy']);

// Default task
gulp.task('default',['server', 'watch']);
