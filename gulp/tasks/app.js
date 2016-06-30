var gulp = require('gulp');

// Copies all required files for the Angular 2 app from the "src" folder to the "dist" folder.
gulp.task('app', function() {
    return gulp.src('./client/src/app/**/*.{html,css,js}')
        .pipe(gulp.dest('./client/dist/app'));
});
