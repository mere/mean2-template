var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// Processes SASS files and copies resulting CSS file "dist/css" folder.
gulp.task('sass', function() {
    gulp.src('./src/sass/style.scss')
        .pipe(sass())
        .pipe(cssnano( {
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});