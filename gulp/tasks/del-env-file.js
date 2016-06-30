var gulp = require('gulp');
var del = require('del');

// Cleans the "dist" folder.
gulp.task('del-env-file', function() {
    return del.sync('./src/app/environment.ts');
});
