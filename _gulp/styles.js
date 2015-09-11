var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autopre     = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require('gulp-minify-css');
var inject      = require('gulp-inject');
var flatten     = require('gulp-flatten');

gulp.task('styles', function (cb) {
    return gulp.src('./client/style.scss')
    .pipe(inject(gulp.src(['app/**/*.scss'], {read: false, cwd: 'client'}), {
            starttag: '/* inject:imports */',
            endtag: '/* endinject */',
            transform: function (filepath) {
                return '@import \'.' + filepath + '\';';
            }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autopre({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(sourcemaps.write())
    .pipe(flatten())
    .pipe(gulp.dest('.tmp'));
});