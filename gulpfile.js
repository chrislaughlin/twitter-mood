var gulp        = require('gulp');
var jasmine     = require('gulp-jasmine');
var nodemon     = require('gulp-nodemon');
var jshint      = require('gulp-jshint');
var karma       = require('gulp-karma');
var jasmine     = require('gulp-jasmine');

gulp.task('default', function() {
    nodemon({ script: 'server/src/server.js',
        ext: 'html js css',
        ignore: ['server/test/**/*.js', 'client/test/**/*.js'] })
        .on('restart', function() {
            console.log('Application restarted!');
        })
});

gulp.task('lint', function () {
    gulp.src('./**/*.js')
        .pipe(jshint())
});

gulp.task('develop', function () {
    nodemon({ script: 'server/src/server.js', ext: 'html js css', ignore: ['server/test/**/*.js', 'client/test/**/*.js'] })
        .on('change', ['lint'])
        .on('restart', function () {
            console.log('restarted!')
        });
});

gulp.task('clientTest:unit', function() {
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            //this.emit('end'); //instead of erroring the stream, end it
        });
});

gulp.task('autoUnitTest:server', function() {
    return gulp.watch(['server/src/**/*.js', 'server/test/unit/**/*.js'], ['serverTest:unit']);
});

gulp.task('autoUnitTest:client', function() {
    return gulp.watch(['client/src/**/*.js', 'client/test/unit/**/*.js'], ['clientTest:unit']);
});

gulp.task('serverTest:unit', function() {
    return gulp.src('server/test/unit/**/*.js')
        .pipe(jasmine({verbose: true}));
});

gulp.task('serverTest:e2e', function() {
    return gulp.src('server/test/integration/**/*.js')
        .pipe(jasmine({verbose: true}));
});

