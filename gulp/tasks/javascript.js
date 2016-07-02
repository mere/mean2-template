var gulp = require('gulp');
var gulpIgnore = require('gulp-ignore');
var gulpIf = require('gulp-if');
var util = require('gulp-util');
var merge = require('gulp-merge');
var minify = require('gulp-minify');
var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Checks for "--production" command-line param. The !! will normalize undefined to false.
var isProd = !!util.env.production;

gulp.task('javascript', function() {
    // Browserify and minify application specific javascript. Then copy the resulting javascript file
    // to the "public/js" folder.
    var appjs = browserify('./client/javascript/app.js')
        .bundle()
        .pipe(sourceStream('bundle.js'))
        .pipe(buffer())
        .pipe(gulpIf(isProd, minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        })))
        .pipe(gulpIf(isProd, gulpIgnore.include('*.min.js')))
        .pipe(gulp.dest('./build/js'));

    // Copy over vendor plugins
    var plugins = gulp.src('./client/javascript/plugins/**/*')
        .pipe(gulp.dest('./build/js/plugins'));

    return merge(appjs, plugins);
});
