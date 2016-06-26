(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // path where the TypeScript compiled JS output is located
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',

        'app/benefits',
        'app/benefits/health',
        'app/benefits/life-insurance',
        'app/benefits/retirement',
        'app/home',
        'app/search',
        'app/shared',
        'app/shared/content-block',
        'app/shared/digital-assistant',
        'app/shared/employee',
        'app/shared/team-viewer',
        'app/shared/utils',
        'app/shared/vacation-request',
        'app/time-off',
        'app/time-off/leave-of-absence',
        'app/time-off/paid-time',
        'app/time-off/paid-time/paid-time-details',
        'app/time-off/paid-time/sick-time',
        'app/time-off/paid-time/vacation-time'
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Add package entries for angular packages and app defined packages.
    packageNames.forEach(packIndex);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
