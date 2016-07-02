var gulp = require('gulp');
var del = require('del');

// Cleans the "build" folder.
gulp.task('clean-build', function() {
    return del.sync('./build');
});