module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            '../src/bower_components/angular/angular.js',
            '../src/bower_components/angular-route/angular-route.js',
            '../src/bower_components/angular-mocks/angular-mocks.js',
            'src/js/app/UserData.js',
            'src/js/app/WeekDays.js',
            'src/js/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
//            'karma-chrome-launcher',
//            'karma-firefox-launcher',
//            'karma-jasmine',
//            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
