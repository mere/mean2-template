var gulp = require('gulp');
var merge = require('gulp-merge');

// Copy all libraries from "node_modules" that the Angular 2 app will use
gulp.task('vendor', function() {

    var polyfills = gulp.src('./node_modules/systemjs/dist/system-polyfills.js')
        .pipe(gulp.dest('./dist/vendor/systemjs/dist'));

    var systemjs = gulp.src('./node_modules/systemjs/dist/system.src.js')
        .pipe(gulp.dest('./dist/vendor/systemjs/dist'));

    var zonejs = gulp.src('./node_modules/zone.js/dist/**/*.+(js|js.map)')
        .pipe(gulp.dest('./dist/vendor/zone.js/dist'));

    var es6shim = gulp.src('./node_modules/es6-shim/es6-shim.js')
        .pipe(gulp.dest('./dist/vendor/es6-shim'));

    var reflectMetadata = gulp.src('./node_modules/reflect-metadata/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest('./dist/vendor/reflect-metadata'));

    var rxjs = gulp.src('./node_modules/rxjs/**/*.+(js|js.map)')
        .pipe(gulp.dest('./dist/vendor/rxjs'));

    var angular2 = gulp.src('./node_modules/@angular/**/*.+(js|js.map)')
        .pipe(gulp.dest('./dist/vendor/@angular'));

    return merge(polyfills, systemjs, zonejs, es6shim, reflectMetadata, rxjs, angular2);
});