var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Contains the server settings
var config = require('../../server/config/config');

// Startup the app's homepage and watch for changes to the Angular 2 HTML and JS files
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:' + config.server.port,
        port: 8080,
        ui: {
            port: 8081
        },
        files: [
            //'./client/dist/app/**/*',
            './client/dist/css/**/*',
            './client/dist/img/**/*',
            './client/dist/js/**/*'
        ]
    });
});
