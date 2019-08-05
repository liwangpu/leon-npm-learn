const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');  // Requires separate installation

let tsProject = ts.createProject('tsconfig.json');


gulp.task('default', function () {
    var tsResult = gulp.src('lib/**/*.ts')
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('release/types')),
        tsResult.js.pipe(gulp.dest('release'))
    ]);
});