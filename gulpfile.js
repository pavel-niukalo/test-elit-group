"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");

gulp.task("css", function () {
  return gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {
  gulp.watch("less/**/*.less").on("change", gulp.series("css"));
});

gulp.task("start", gulp.series("css", "watch"));
