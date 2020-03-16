const { src, dest, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const merge = require('merge2');
const del = require("del");
const ts = require('gulp-typescript');



function cleanReleaseTask(cb) {
    del.sync(["release/**/*"]);
    cb();
}

function compileTsTask(cb) {
    let tsProject = ts.createProject('tsconfig.json');
    let tsResult = tsProject.src()
        .pipe(tsProject())
        .on('error', err => {
            cb();
        });

    merge([
        tsResult.dts.pipe(dest('release')),
        tsResult.js
            // .pipe(uglify())
            .pipe(dest('release'))
    ]).end(cb);
}

function copyPackageResourceTask(cb) {
    merge([
        src("package.json").pipe(dest('release')),
        src("LICENSE").pipe(dest('release')),
        src("README.md").pipe(dest('release'))
    ]).end(cb);
}

function watchAndReCompileTask(cb) {
    watch(['src/**/*.ts', 'tsconfig.json'], { ignoreInitial: true }, series(compileTsTask)).on('end', cb);
}

exports.default = series(cleanReleaseTask,copyPackageResourceTask, compileTsTask, watchAndReCompileTask);