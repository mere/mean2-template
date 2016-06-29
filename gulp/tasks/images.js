var gulp = require('gulp');
var merge = require('gulp-merge');
var imagemin = require('gulp-imagemin');

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    var images = gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img'));

    // Move the favicon
    var favicon = gulp.src('./src/images/favicon.ico')
        .pipe(gulp.dest('./dist/img'));

    return merge(images, favicon);
});
