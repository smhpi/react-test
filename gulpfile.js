const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/server/bin/**/*.js')
        .pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['babel-preset-env']
        }))
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('src/server'))
);