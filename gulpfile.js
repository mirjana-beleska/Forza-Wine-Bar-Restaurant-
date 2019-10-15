const gulp = require('gulp');
const sass = require('gulp-sass');

var styleSRC = 'src/scss/**/*.scss';
var styleDES = 'src/css';

function style(){
	return gulp
	//1. where is my scss file/s
	.src(styleSRC)
	//2. pass that file through sass compiler
	.pipe(sass( {outputStyle: 'compressed'} ))
	//3. where do I save the compiled CSS file/s
	.pipe(gulp.dest(styleDES))
}

function watch(){
	gulp.watch(styleSRC, style);
}

exports.style = style;
exports.watch = watch;