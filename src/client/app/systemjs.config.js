(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // web server virtual path where the TypeScript compiled JS output is located
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs'
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

        'app/home',
        'app/shared',
        'app/shared/utils'
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
