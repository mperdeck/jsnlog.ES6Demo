var gulp = require('gulp'),
    babel = require('gulp-babel'),
    es6Path = 'es6/*.js',
    compilePath = 'es6/compiled';

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('default', ['babel']);


