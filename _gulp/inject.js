var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('injectsass', function () {
  var target = gulp.src('./client/style.scss');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./client/app/**/*.scss'], {read: false});


    return gulp.src('client/style.scss')

        .pipe(inject(gulp.src(['app/**/*.scss'], {read: false, cwd: 'client'}), {
            starttag: '/* inject:imports */',
            endtag: '/* endinject */',
            transform: function (filepath) {
                return '@import \'.' + filepath + '\';';
            }
        }))
        .pipe(gulp.dest('client'));

});