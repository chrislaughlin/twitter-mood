var gulp    = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function() {

});

gulp.task('test:unit', function () {
    gulp.src('client/test/unit/*Spec.js')
        .pipe(jasmine());
});