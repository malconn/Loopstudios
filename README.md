# Loopstudios

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Run the Project](#run-the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Run the project
```html
npm install //install dependencies
npm start  // start gulp watch
npm run build  // start gulp
```


### Links

- Solution URL: https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw
- Live Site URL: https://malconn.github.io/Loopstudios/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Bootstrap Grid
- Mobile-first workflow
- Scss compiled to CSS
- Gulp Automation 
- Javascript to interactive


### What I learned
First of all, those tecnologies that you can see bellow I was learning, without gulp, because I was using other app to compile and automation my aplications on web with no terminal commands. So I decided to make different, learning how to use and try. 


```scss
$posicoes: 1 url(../../img/desktop/image-bg-1.jpg),
2 url(../../img/desktop/image-bg-2.jpg),
3 url(../../img/desktop/image-bg-3.jpg),
4 url(../../img/desktop/image-bg-4.jpg),
5 url(../../img/desktop/image-bg-5.jpg),
6 url(../../img/desktop/image-bg-6.jpg),
7 url(../../img/desktop/image-bg-7.jpg),
8 url(../../img/desktop/image-bg-8.jpg);
@each $pos,
$images in $posicoes {
    .bg-pos-#{$pos} {
        background: {
            position: center;
            repeat: no-repeat;
            size: cover;
            image: $images;
        }
        height: 450px;
    }
}
```
```js
const bgHeader = document.querySelector("header");
const btNav = document.querySelector(".navbar-toggler");
const icon = document.querySelector(".fa-bars");

btNav.addEventListener("click", () => {
    bgHeader.classList.toggle("active");
    icon.classList.toggle("fa-times");
})
```
```js
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
        .pipe(dest(`./dist/assets/css`));
}

function html() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(concat('index.html'))
        .pipe(dest(`./dist/`));
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
        .pipe(dest(`./dist/assets/js`));
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
```


### Continued development

For the next step on my repositories, I want to continue developing and trying to be better on SCSS and Js. Making more complex aplications and doing more structured codes.


### Useful resources

- [Scss](https://sass-lang.com/documentation) - This helped me for Scss reason. 
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - This helped me for Js reason. 
- [Npm](https://docs.npmjs.com/) - This helped me for Gulp reason. 


## Author

- Website - [Malcon Augusto](https://linktr.ee/malconn)
- Twitter - [@maicaosgz](https://twitter.com/maicaosgz)
- Twitch - [@maicaosgz](https://www.twitch.tv/maicaosgz)
- Discord - [@turing-legion](https://discord.gg/tmrpPqmqhe)
- Instagram - [@malcon.dev](https://www.instagram.com/malcon.dev/)
- LinkedIn - [@malconn](https://www.linkedin.com/in/malconn/)
## Acknowledgments
Person that has big resposability with inspiration for this project are : [@Kvnol](https://github.com/kvnol)
