var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    browser_sync = require('browser-sync');



gulp.task('sass', function () {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(browser_sync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browser_sync.init({
        server: "./",
        notify: false
    });
});



gulp.task('watch', ['browser-sync', 'sass'], function () {
    /*gulp.watch(
        [
            '!catalog/view/theme/default/stylesheet/stylesheet.css',
            'catalog/view/theme/default/stylesheet/**/
    /*.css'
            //]).on('change', browser_sync.reload({stream: true}));*/
    gulp.watch('*.scss', ['sass']);
    //gulp.watch('public_html/catalog/view/theme/*/template/**/*.tpl').on('change', browser_sync.reload);
});