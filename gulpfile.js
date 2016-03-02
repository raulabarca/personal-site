/*
* Dependencias
*/
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');

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

// Jade to Html
gulp.task('jade', function() {
  return gulp.src('./app/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./app/'))
});

// Default task
