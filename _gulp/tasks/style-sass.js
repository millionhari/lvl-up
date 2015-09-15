var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autopre     = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require('gulp-minify-css');
var inject      = require('gulp-inject');
var flatten     = require('gulp-flatten');
var paths       = require('../paths');

gulp.task('style-sass', function (cb) {
    return gulp.src('./client/styles.scss')
    .pipe(inject(gulp.src(['src/_common/styles/**/[^_]*.scss'], {read: false, cwd: 'client'}), {
            starttag: '/* inject:common */',
            endtag: '/* endinject */',
            transform: function (filepath) {
                return '@import \'.' + filepath + '\';';
            }
    }))
    .pipe(inject(gulp.src(['src/**/*.scss', '!src/_common/styles/**/*.scss'], {read: false, cwd: 'client'}), {
            starttag: '/* inject:imports */',
            endtag: '/* endinject */',
            transform: function (filepath) {
                return '@import \'.' + filepath + '\';';
            }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      // includePaths: require('node-neat').with('other/path', 'another/path')
      // - or -
      includePaths: require('node-neat').includePaths
    }).on('error', sass.logError))
    .pipe(autopre({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(sourcemaps.write())
    .pipe(flatten())
    .pipe(gulp.dest(paths.output));
});


