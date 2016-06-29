var gulp = require('gulp');

// Copies all font files from the "src" folder to the "dist" folder.
gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});