/*
* Dependencias
*/
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    stylus = require('gulp-stylus'),
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

// Default task
gulp.task('default',['server', 'watch']);
