'use strict';

// import
import gulp from 'gulp';
import gutil from 'gutil';
import pleeease from 'gulp-pleeease';
import watchify from 'watchify';
import browserify from 'browserify';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import watch from 'gulp-watch';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';

import transform from './lib/vinyl-transform';

// const
const SRC = './src';
const HTDOCS = './public';
const BASE_PATH = '';
const DEST = `${HTDOCS}${BASE_PATH}`;

// css
gulp.task('css', () => {
    return gulp.src(`${SRC}/styles/style.css`)
        .pipe(pleeease({
            autoprefixer: true,
            minifier: true,
            mqpacker: true
        }))
        .pipe(gulp.dest(`${DEST}/styles`));
});

gulp.task('css', gulp.series('css'));

// js
gulp.task('watchify', () => {
    return gulp.src(`${SRC}/scripts/script*`)
        .pipe(transform((file) => {
            return watchify(browserify(file.path))
                .transform(babelify)
                .bundle();
        }))
        .on("error", function(err) {
            gutil.log(err.message);
            gutil.log(err.codeFrame);
            this.emit('end');
        })
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(`${DEST}/scripts`));
});

gulp.task('js', gulp.parallel('watchify'));

// html
gulp.task('html', () => {
    return gulp.src(`${SRC}/**/*.html`)
        .pipe(gulp.dest(`${DEST}`));
});

gulp.task('html', gulp.series('html'));

// image
gulp.task('image', () => {
    return gulp.src(`${DEST}/images/*.png`)
        .pipe(gulp.dest(`${DEST}/images`));
});

gulp.task('image', gulp.series('image'));

// serve
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: HTDOCS
        },
        startPath: `${BASE_PATH}/`,
        ghostMode: false
    });

    watch([`${SRC}/styles/**/*.css`], gulp.series('css', browserSync.reload));
    watch([`${SRC}/scripts/**/*.js`], gulp.series('watchify', browserSync.reload));
    watch([`${SRC}/**/*.html`], gulp.series('html', browserSync.reload));
});

gulp.task('serve', gulp.series('browser-sync'));

// default
gulp.task('build', gulp.parallel('css', 'js', 'html'));
gulp.task('default', gulp.series('build', 'serve'));
