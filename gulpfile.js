var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem') // generates rem units from pixel units
var pixrem = require('pixrem') // pixel fallbacks for rem units

gulp.task('generate-gridfile', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}),
    pxtorem({
      prop_white_list: []
    }),
    pixrem()
  ]
  return gulp.src('sass/grid.scss')
    .pipe(sass({
      sourceComments: false,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(''))
})

gulp.task('default', ['generate-gridfile'])
