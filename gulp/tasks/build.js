var gulp = require('gulp');
var runSequence = require('run-sequence');

// Performs all required build tasks.
gulp.task('build', function (callback) {
    runSequence('clean-dist',
        ['app', 'css', 'fonts', 'images', 'javascript', 'sass'],
        callback
    );
});