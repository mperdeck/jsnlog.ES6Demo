var gulp = require('gulp'),
    babel = require('gulp-babel'),
    es6Path = 'es6/*.js',
    compilePath = '.';

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(babel())
        .pipe(gulp.dest(compilePath));
});

gulp.task('default', ['babel']);


