var gulp = require('gulp');
var gulpIgnore = require('gulp-ignore');
var merge = require('gulp-merge');
var minify = require('gulp-minify');
var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

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
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulpIgnore.include('*.min.js'))
        .pipe(gulp.dest('./dist/js'));

    return merge(plugins, appjs);
});
