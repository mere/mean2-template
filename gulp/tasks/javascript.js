var gulp = require('gulp');
var gulpIgnore = require('gulp-ignore');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

// Copies all javascript files from the "src" folder to the "dist" folder.
gulp.task('javascript', function() {
    gulp.src(['./src/javascript/**/*', '!./src/javascript/*.js'])
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({ stream: true }));

    //Minify application specific javascript
    gulp.src('./src/javascript/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulpIgnore.include('*.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({ stream: true }));
});