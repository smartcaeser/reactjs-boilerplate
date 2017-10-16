var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


gulp.task('react', function() {
    return browserify({
        extensions: ['.js', '.jsx'],
        entries: './src/js/main.js',
    })
    .transform(babelify.configure({
        ignore: /(bower_components)|(node_modules)/
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
	.pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist/js/'));
});
gulp.task('sass', function () {
  return gulp
    .src('./src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('watch:sass', function() {
  return gulp
    .watch('./src/scss/**/*.scss', ['sass'])
    .on('change', function(event) {
		console.log('SCSS File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
gulp.task('watch:react', function() {
  return gulp
    .watch('./src/js/**/*.js', ['react'])
    .on('change', function(event) {
		console.log('JSX File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
gulp.task('default', ['react','watch:react', 'sass','watch:sass']);