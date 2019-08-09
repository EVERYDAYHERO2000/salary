const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const gap = require('gulp-append-prepend');
const watch = require('gulp-watch');
const normalizeUrl = require('normalize-url');
const babel = require('gulp-babel');


sass.compiler = require('node-sass');

const DEV_PATH = __dirname;

const config = require( DEV_PATH + '/package.json');



/*
scss -> css
*/
gulp.task('sass', function () {
  
  gulp.src(DEV_PATH + '/assets/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DEV_PATH + '/dist/css/'));
    
  
});



/*
combine js files to main.js
*/
gulp.task('js', function () {
	
  gulp.src(DEV_PATH + '/assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gap.prependText('$(function(){'))
    .pipe(gap.appendText(`console.log("version: ${config.version}"); });`))
    .pipe(babel({
       presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DEV_PATH + '/dist/js/'));
  
});



/*
npm run dev
*/
gulp.task('default',['sass','js'], function () {
  
    watch( DEV_PATH + '/assets/css/**/*.scss', function () {
      gulp.start('sass');
    });
  
    watch( DEV_PATH + '/assets/js/**/*.js', function () {
      gulp.start('js');
    });
  
});
