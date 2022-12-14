"use strict";

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import gulp from 'gulp';
import webpack from 'webpack-stream';
import browsersync from 'browser-sync';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';

// const dist = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на локальном сервере
const dist = "./dist";

// Таска копирует хтмл файл и перемещает его в папку dist
gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest(dist))
        .pipe(browsersync.stream());
});

// Таска компилирует SASS в CSS + перезагрузка браузера
gulp.task("build-sass", () => {
    return gulp.src("./src/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist))
        .pipe(browsersync.stream());
});

// Режим разработчика
gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest(dist))
        .on("end", browsersync.reload);
});

// для запуска лок сервера на порту 4000
gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/sass/**/*.scss", gulp.parallel("build-sass"));
});


gulp.task("build", gulp.parallel("copy-html", "build-js", "build-sass"));

// Режим продакшена (минимизации кода)
gulp.task("prod", () => {
    gulp.src("./src/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist));

    return gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env', {
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest(dist));
});
// отслеживание изменений до запуска галпа
gulp.task("default", gulp.parallel("watch", "build"));