var gulp        = require('gulp');
var jasmine     = require('gulp-jasmine');
var nodemon     = require('gulp-nodemon');
var jshint      = require('gulp-jshint');
var karma       = require('gulp-karma');

gulp.task('default', function() {
    nodemon({ script: 'server/src/server.js',
        ext: 'html js css',
        ignore: ['server/test/**/*.js', 'client/test/**/*.js'] })
        .on('restart', function() {
            console.log('Application restarted!');
        })
});

gulp.task('test:unit', function () {
    gulp.src('client/test/unit/*Spec.js')
        .pipe(jasmine());
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
        })
});

gulp.task('test', function() {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});

gulp.task('autotest', function() {
    return gulp.watch(['www/js/**/*.js', 'test/spec/*.js'], ['test']);
});