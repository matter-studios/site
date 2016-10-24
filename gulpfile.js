var gulp            = require('gulp')
var path            = require('path')
var less            = require('gulp-less')
var autoprefixer    = require('gulp-autoprefixer')
var sourcemaps      = require('gulp-sourcemaps')
var minifyCSS       = require('gulp-minify-css')
var rename          = require('gulp-rename')
var concat          = require('gulp-concat')
var uglify          = require('gulp-uglify')
var connect         = require('gulp-connect')
var open            = require('gulp-open')
var data            = require('gulp-data')
var nunjucksRender  = require('gulp-nunjucks-render')
var nunjucks        = require('gulp-nunjucks-html')
var browserSync     = require('browser-sync').create()
var gulpSheets      = require('gulp-google-spreadsheets')

gulp.task('default', ['less-min', 'js-min'])

gulp.task('docs', ['server'], function () {
  gulp.src(__filename)
    .pipe(open({uri: 'http://localhost:9001/docs/'}))
})

gulp.task('fetch-data', function () {
  gulpSheets('1rzbzTQuAzRhv_QpU7fkQ1IeMj35Z1AVdKTkGxq4aOmw')
    .pipe(gulp.dest('./app/data'))
})

gulp.task('server', ['fetch-data', 'less', 'nunjucks', 'js'], function () {
  browserSync.init({
    server: 'app'
  })

  gulp.watch('app/pages/*.nunjucks', ['nunjucks'])
  gulp.watch('less/*.less', ['less'])
  gulp.watch('js/custom/*.js', ['js'])
  gulp.watch('app/*.html').on('change', browserSync.reload)
})

gulp.task('less', function () {
  return gulp.src('./less/toolkit*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('less-min', ['less'], function () {
  return gulp.src('./less/toolkit*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('js', function () {
  return gulp.src([
      './js/bootstrap/transition.js',
      './js/bootstrap/alert.js',
      './js/bootstrap/affix.js',
      './js/bootstrap/button.js',
      './js/bootstrap/carousel.js',
      './js/bootstrap/collapse.js',
      './js/bootstrap/dropdown.js',
      './js/bootstrap/modal.js',
      './js/bootstrap/tooltip.js',
      './js/bootstrap/popover.js',
      './js/bootstrap/scrollspy.js',
      './js/bootstrap/tab.js',
      './js/custom/*'
    ])
    .pipe(concat('toolkit.js'))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('js-min', ['js'], function () {
  return gulp.src('app/dist/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('nunjucks', function () {
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  .pipe(data(function() {
    return require('./app/data/faq.json')
  }))
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  .pipe(gulp.dest('app'))
})
