var gulp        = require('gulp');
var paths       = require('../paths');
var chalk       = require('chalk');

gulp.task('watch', function (cb) {
    gulp.watch(['client/src/**/*.scss', 'client/*.scss'], ['style-sass']).on('change', function(event) {
      console.log(chalk.yellow('Styles have ' + event.type));
    });
    gulp.watch(paths.source, ['build-system']).on('change', function(event) {
      console.log(chalk.green('Scripts have ' + event.type));
    });
    gulp.watch(paths.html, ['build-html']).on('change', function(event) {
      console.log(chalk.blue('HTML has ' + event.type));
    });

});
