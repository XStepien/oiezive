var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('css', function() {
    gulp.src(['css/*.css','*.html'])
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload({ start: true });
    livereload.listen(35729);
    gulp.watch(['css/*.css','*.html'], ['css']);
});
