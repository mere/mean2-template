var gulp = require('gulp');
var del = require('del');

// Cleans the "dist" folder.
gulp.task('clean-dist', function() {
    return del.sync('./client/dist');
});