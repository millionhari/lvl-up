var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');

gulp.task('serve', function (cb) {
    var started = false;
    return nodemon({
        script: 'server/app.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});