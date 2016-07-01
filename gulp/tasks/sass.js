var gulp = require('gulp');
var gulpIf = require('gulp-if');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var util = require('gulp-util');

// Checks for "--production" command-line param. The !! will normalize undefined to false.
var isProd = !!util.env.production;


// Processes SASS files and copies resulting CSS file "public/css" folder.
gulp.task('sass', function() {
    return gulp.src('./client/sass/style.scss')
        .pipe(sass())
        .pipe(gulpIf(isProd, cssnano( {
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(gulp.dest('./public/css'));
});
