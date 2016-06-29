var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Copies all required files for the Angular 2 app from the "src" folder to the "dist" folder.
gulp.task('app', function() {
    gulp.src('./src/app/**/*.{html,css,js}')
        .pipe(gulp.dest('./dist/app'))
        .pipe(browserSync.reload({ stream: true }));
});