var gulp = require('gulp');

// Copies all required files for the Angular 2 app from the "client/app" folder to the "dist/app" folder.
gulp.task('app', function() {
    return gulp.src('./src/client/app/**/*.{html,css,js}')
        .pipe(gulp.dest('./dist/app'));
});
