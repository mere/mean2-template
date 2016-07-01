var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var rename = require('gulp-rename');
var merge = require('gulp-merge');
var util = require('gulp-util');

// Checks for "--production" command-line param. The !! will normalize undefined to false.
var isProd = !!util.env.production;

// Copies the proper environment configuration file from the 'client/config' directory and
// renames it to 'client/app/environment.ts'. This MUST be done prior to TypeScript compilation.
gulp.task('copy-client-env', function() {
    var devConfig = gulp.src('./client/config/environment.dev.ts')
        .pipe(rename('environment.ts'))
        .pipe(gulpIf(!isProd, gulp.dest('./client/app')));

    var prodConfig = gulp.src('./client/config/environment.prod.ts')
        .pipe(rename('environment.ts'))
        .pipe(gulpIf(isProd, gulp.dest('./client/app')));

    return merge(devConfig, prodConfig);
});
