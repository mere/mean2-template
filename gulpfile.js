var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();


// Performs all required build tasks.
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['app', 'css', 'fonts', 'images', 'javascript', 'sass'],
        callback
    );
});

// DEFAULT TASK: Performs all tasks to run the application
gulp.task('default', function (callback) {
    runSequence(['app', 'browser-sync', 'watch'],
        callback
    );
});

// Startup the app's homepage and watch for changes to the Angular 2 HTML and JS files
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:3000',
        port: 8080
    });
});

// Copies all required files for the Angular 2 app from the "src" folder to the "dist" folder.
gulp.task('app', function() {
    gulp.src('./src/app/**/*.{html,css,js}')
        .pipe(gulp.dest('./dist/app'))
        .pipe(browserSync.reload({ stream: true }));
});

// Copies all CSS files from the "src" folder to the "dist" folder.
gulp.task('css', function() {
    gulp.src('./src/css/**/*')
        .pipe(gulpIf('*.css', cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});

// Copies all font files from the "src" folder to the "dist" folder.
gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.reload({ stream: true }));
});

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

// Processes SASS files and copies resulting CSS file "dist/css" folder.
gulp.task('sass', function() {
    gulp.src('./src/sass/style.scss')
        .pipe(sass())
        .pipe(cssnano( {
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});

// Watches for changes in the front-end assets and copies them to the "build" folder when a change is detected.
gulp.task('watch', function () {
    gulp.watch('./src/app/**/*.{html,js}', ['app']);
    gulp.watch('./src/js/**/*', ['javascript']);
    gulp.watch('./src/css/**/*', ['css']);
    gulp.watch('./src/img/**/*', ['images']);
    gulp.watch('./src/sass/**/*', ['sass']);
});

// Cleans the "dist" folder.
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

// Clears the image optimization cache.
gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});