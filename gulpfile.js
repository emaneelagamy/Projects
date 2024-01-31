// gulpfile.js
const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Paths
const paths = {
  styles: {
    src: 'styles/**/*.scss',
    dest: 'dist'
  },
  scripts: {
    src: 'scripts/**/*.js',
    dest: 'dist'
  }
};

// Compile SASS
function compileSass() {
  return src(paths.styles.src)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(dest(paths.styles.dest));
}

// Minify CSS
function minifyCSS() {
  return src('dist/main.css')
    .pipe(cleanCSS())
    .pipe(dest(paths.styles.dest));
}

// Concatenate and minify JS
function minifyJS() {
  return src(paths.scripts.src)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(paths.scripts.dest));
}

// Watch for changes
function watchFiles() {
  watch(paths.styles.src, series(compileSass, minifyCSS));
  watch(paths.scripts.src, minifyJS);
}

// Export tasks
exports.build = series(compileSass, minifyCSS, minifyJS);
exports.watch = watchFiles;
