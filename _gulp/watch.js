var gulp        = require('gulp');
var chalk       = require('chalk');

gulp.task('watch', function (cb) {
    var watcher = gulp.watch(['client/app/**/*.scss'], ['styles_sass']);
    watcher.on('change', function(event) {
      console.log(chalk.yellow('Styles have ' + event.type));
    });
});