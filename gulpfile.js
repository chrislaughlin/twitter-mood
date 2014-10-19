var gulp        = require('gulp');
var jasmine     = require('gulp-jasmine');
var nodemon     = require('gulp-nodemon');
var jshint      = require('gulp-jshint');

gulp.task('default', function() {

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
})