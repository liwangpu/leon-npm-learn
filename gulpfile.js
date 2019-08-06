const { src, dest, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const merge = require('merge2');
const ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');


function cleanReleaseTask(cb) {
    src('release/**/*', { read: false }).pipe(clean());
    cb();
}

function compileTsTask(cb) {
    let tsResult = src("src/**/*.ts")
        .pipe(tsProject());

    merge([
        tsResult.dts.pipe(dest('release')),
        tsResult.js.pipe(uglify()).pipe(dest('release'))
    ]);
    cb();
}

function copyPackageResourceTask(cb) {
    src("package.json").pipe(dest('release'));
    src("LICENSE").pipe(dest('release'));
    src("README.md").pipe(dest('release'));
    cb();
}

function watchTsChangeTask(cb) {
    watch('src/**/*.ts', { ignoreInitial: true }, compileTsTask);
    cb();
}

exports.watch = watchTsChangeTask;
exports.default = series(cleanReleaseTask, copyPackageResourceTask, compileTsTask);