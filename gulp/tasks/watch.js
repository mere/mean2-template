var gulp = require('gulp');

// Watches for changes in the front-end assets and copies them to the "build" folder when a change is detected.
gulp.task('watch', function () {
    gulp.watch('./src/app/**/*.{html,js}', ['app']);
    gulp.watch('./src/js/**/*', ['javascript']);
    gulp.watch('./src/css/**/*', ['css']);
    gulp.watch('./src/img/**/*', ['images']);
    gulp.watch('./src/sass/**/*', ['sass']);
});