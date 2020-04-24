"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");

gulp.task("css", function () {
  return gulp.src("less/style.less")
    .pipe(less())
    .pipe(rename("style.css"))
    .pipe(gulp.dest("css"))
});

gulp.task("start", gulp.series("css"));
