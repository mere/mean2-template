// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // notify karma of the available plugins
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        // list of files / patterns to load in the browser
        files: [
            { pattern: 'build/vendor/es6-shim/es6-shim.js', included: true, watched: false },
            { pattern: 'build/vendor/zone.js/dist/zone.js', included: true, watched: false },
            { pattern: 'build/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
            { pattern: 'build/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
            { pattern: 'build/vendor/systemjs/dist/system.src.js', included: true, watched: false },
            { pattern: 'build/vendor/zone.js/dist/async-test.js', included: true, watched: false },
            { pattern: 'build/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false },

            { pattern: 'karma-test-shim.js', included: true, watched: true },

            // Distribution folder
            { pattern: 'build/**/*', included: false, watched: true }
        ],

        // list of files to exclude
        exclude: [
            // Vendor packages might include spec files. We don't want to use those.
            'build/vendor/**/*.spec.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'PhantomJS'],
        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
