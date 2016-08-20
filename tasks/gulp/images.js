var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var merge = require('gulp-merge');

// Optimizes the images, caches the optimizations and then copies all image files from the "src" folder to the "dist" folder.
gulp.task('images', function(){
    var appImages = gulp.src('./src/client/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img'));

    var favicon = gulp.src('./src/client/images/favicon.ico')
        .pipe(gulp.dest('./dist/img'));

    return merge(appImages, favicon);
});
