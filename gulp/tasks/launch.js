var gulp = require('gulp');
var runSequence = require('run-sequence');

// DEFAULT TASK: Performs all tasks required to launch the application for debugging.
gulp.task('launch', function (callback) {
    runSequence(['watch', 'browser-sync'], callback);
});
