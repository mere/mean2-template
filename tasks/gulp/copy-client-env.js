var gulp = require('gulp');
var rename = require('gulp-rename');
var util = require('gulp-util');

// Checks for "--production" command-line param. The !! will normalize undefined to false.
var isProd = !!util.env.production;

// Copies the proper environment configuration file from the 'client/config' directory and
// renames it to 'client/app/environment.ts'. This MUST be done prior to TypeScript compilation.
gulp.task('copy-client-env', function() {
    if (isProd) {
        return gulp.src('./src/client/config/environment.prod.ts')
            .pipe(rename('environment.ts'))
            .pipe(gulp.dest('./src/client/app'));
    } else {
        return gulp.src('./src/client/config/environment.dev.ts')
            .pipe(rename('environment.ts'))
            .pipe(gulp.dest('./src/client/app'));
    }
});
