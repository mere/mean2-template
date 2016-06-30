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

// Copies all javascript files from the "src" folder to the "dist" folder.
gulp.task('javascript', function() {
    // Move all plugins
    var plugins = gulp.src(['./src/javascript/**/*', '!./src/javascript/*.js'])
        .pipe(gulp.dest('./dist/js'));

    // Browserify and minify application specific javascript
    var appjs = browserify('./src/javascript/app.js')
        .bundle()
        .pipe(sourceStream('bundle.js'))
        .pipe(buffer())
        .pipe(gulpIf(isProd, minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            ignoreFiles: ['.min.js']
        })))
        .pipe(gulpIf(isProd, gulpIgnore.include('*.min.js')))
        .pipe(gulp.dest('./dist/js'));

    return merge(plugins, appjs);
});
