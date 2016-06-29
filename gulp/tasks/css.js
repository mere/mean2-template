var gulp = require('gulp');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var util = require('gulp-util');

// Checks for "--production" command-line param. The !! will normalize undefined to false.
var isProd = !!util.env.production;

// Copies all CSS files from the "src" folder to the "dist" folder.
gulp.task('css', function() {
    return gulp.src('./src/css/**/*')
        .pipe(gulp.dest('./dist/css'));
});
