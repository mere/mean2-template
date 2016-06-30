var gulp = require('gulp');
var merge = require('gulp-merge');
var imagemin = require('gulp-imagemin');

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    var images = gulp.src('./client/src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./client/dist/img'));

    // Move the favicon
    var favicon = gulp.src('./client/src/images/favicon.ico')
        .pipe(gulp.dest('./client/dist/img'));

    return merge(images, favicon);
});
