var gulp = require('gulp');
var runSequence = require('run-sequence');

// Performs all required build tasks.
gulp.task('build', function (callback) {
    runSequence('clean-build',
        'del-env-file',
        'copy-client-env',
        ['app', 'images', 'javascript', 'sass'],
        callback
    );
});
