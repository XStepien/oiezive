var gulp = require('gulp'),
    livereload = require('gulp-livereload');
    image = require('gulp-image');

gulp.task('css', function() {
    gulp.src(['css/*.css','*.html'])
        .pipe(livereload());
});

gulp.task('image', function () {
    gulp.src('./img/**/*')
        .pipe(image())
        .pipe(gulp.dest('./images'));
});

gulp.task('watch', function() {
    livereload({ start: true });
    livereload.listen(35729);
    gulp.watch(['css/*.css','*.html'], ['css']);
});
