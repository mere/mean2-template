var gulp = require('gulp');
var del = require('del');

// Cleans the "build" folder of ".spec.js" and ".spec.js.map" unit test files.
gulp.task('del-spec-files', function() {
    return del.sync('./build/app/**/*.spec.+(js|js.map)');
});