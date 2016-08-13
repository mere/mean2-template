var gulp = require('gulp');

// Watches for changes in the front-end assets and copies them to the "build" folder when a change is detected.
gulp.task('watch', function () {
    gulp.watch('./client/app/**/*.{html,js}', ['app']);
    gulp.watch('./client/javascript/**/*', ['javascript']);
    gulp.watch('./client/sass/**/*', ['sass']);
});
