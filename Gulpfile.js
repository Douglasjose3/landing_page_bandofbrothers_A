//importando os plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') //apenas recupera os arquivos
        .pipe(sass({outputStyle: 'compressed'})) //compilar o sass
        .pipe(gulp.dest('./dist/css')); //enviar os arquivos comprimidos para uma pasta
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function compileBootstrap() {
    return gulp.src(bootstrapSass.in + 'bootstrap.scss')
      .pipe(sass()) // Compila o SASS
      .pipe(cleanCSS()) // Minifica o CSS
      .pipe(gulp.dest(css.out)); // Salva o CSS no diretório
}

gulp.task('bootstrap', compileBootstrap);

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos que serão observados //nome das funções que serão executadas em paralelo
}