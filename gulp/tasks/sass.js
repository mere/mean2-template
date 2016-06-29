var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

// Processes SASS files and copies resulting CSS file "dist/css" folder.
gulp.task('sass', function() {
    return gulp.src('./src/sass/style.scss')
        .pipe(sass())
        .pipe(cssnano( {
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest('./dist/css'));
});
