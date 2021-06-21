const { parallel, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');

function css() {
    return src('src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('loop-main.min.css'))
        .pipe(cssmin())
        .pipe(dest(`./docs/assets/css`));
}

function html() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(concat('index.html'))
        .pipe(dest(`./docs/`));
}

function js() {
    return src('src/assets/js/*.js')
        .pipe(
            rollup({
                input: './src/assets/js/main.js',
                allowRealFiles: true,
                plugins: [
                    babel(),
                ],
                output: {
                    name: 'testing',
                    format: 'umd',
                },
            })
        )
        .pipe(babel())
        .pipe(jsmin())
        .pipe(dest(`./docs/assets/js`));
}
exports.watch = (cb) => {
    watch('src/assets/scss/**/*.scss', css);
    watch('src/*.html', html);
    watch('src/assets/js/*.js', js);
    cb();
};

exports.css = css;
exports.html = html;
exports.js = js;

exports.default = parallel(css, html, js);