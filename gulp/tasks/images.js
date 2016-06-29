var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.reload({ stream: true }));

    // Move the favicon
    gulp.src('./src/images/favicon.ico')
        .pipe(gulp.dest('./dist/img'));
});
