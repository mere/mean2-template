var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var merge = require('gulp-merge');

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    var appImages = gulp.src('./client/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./build/img'));

    var favicon = gulp.src('./client/images/favicon.ico')
        .pipe(gulp.dest('./build/img'));

    return merge(appImages, favicon);
});
