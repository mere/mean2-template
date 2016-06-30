var gulp = require('gulp');

// Watches for changes in the front-end assets and copies them to the "build" folder when a change is detected.
gulp.task('watch', function () {
    //gulp.watch('./client/src/app/**/*.{html,js}', ['app']);
    gulp.watch('./client/src/javascript/**/*', ['javascript']);
    gulp.watch('./client/src/css/**/*', ['css']);
    gulp.watch('./client/src/images/**/*', ['images']);
    gulp.watch('./client/src/sass/**/*', ['sass']);
});
