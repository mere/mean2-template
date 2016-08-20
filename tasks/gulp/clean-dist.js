var gulp = require('gulp');
var del = require('del');

// Cleans the "build" folder.
gulp.task('clean-dist', function() {
    return del.sync('./dist');
});