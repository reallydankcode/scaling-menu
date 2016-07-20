var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps');

function dankHandler(error) {
  notify.onError({
    title: "!Dank error!",
    message: "Something happened, check the console.",
    sound: true
  })(error);
  console.log(error.toString());
  this.emit("end");
}

gulp.task('sass', function() {
  return gulp.src('./src/sass/style.sass')
    .pipe(plumber({errorHandler: dankHandler}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init(['./src/index.html','./src/sass/style.sass', './src/js/*.js'], {
    server: {
      baseDir: './src'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(['./src/sass/*.sass'], ['sass']);
});

gulp.task('default', ['watch', 'browser-sync']);
