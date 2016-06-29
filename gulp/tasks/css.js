var gulp = require('gulp');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

// Copies all CSS files from the "src" folder to the "dist" folder.
gulp.task('css', function() {
    return gulp.src('./src/css/**/*')
        .pipe(gulpIf('*.css', cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(gulp.dest('./dist/css'));
});
