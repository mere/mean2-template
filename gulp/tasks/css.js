var gulp = require('gulp');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// Copies all CSS files from the "src" folder to the "dist" folder.
gulp.task('css', function() {
    gulp.src('./src/css/**/*')
        .pipe(gulpIf('*.css', cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});