var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Contains the server settings
var config = require('../../config/config');

// Startup the app's homepage and watch for changes to the Angular 2 HTML and JS files
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:' + config.server.port,
        port: 8080,
        files: [
            'dist/app/**/*',
            'dist/css/**/*',
            'dist/img/**/*',
            'dist/js/**/*'
        ]
    });
});
