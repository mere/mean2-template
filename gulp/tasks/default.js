var gulp = require('gulp');
var runSequence = require('run-sequence');

// DEFAULT TASK: Performs all tasks to run the application
gulp.task('default', function (callback) {
    runSequence(['app', 'watch', 'browser-sync'],
        callback
    );
});
