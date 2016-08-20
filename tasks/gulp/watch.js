var gulp = require('gulp');

// Watches for changes in the front-end assets and copies them to the "build" folder when a change is detected.
gulp.task('watch', function () {
    gulp.watch('./src/client/app/**/*.{html,js}', ['app']);
    gulp.watch('./src/client/javascript/**/*', ['javascript']);
    gulp.watch('./src/client/sass/**/*', ['sass']);
});
