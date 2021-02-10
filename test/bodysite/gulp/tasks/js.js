const gulp = require('gulp');
const browserSync = require('browser-sync');
const webpack = require('webpack-stream');
const pathSrc = require('path');

const path = require('../path.json');

function jsDev() {
  return gulp.src(path.input + 'js/*.js')
    .pipe(webpack({
      mode: 'development',
      devtool: 'inline-source-map',
      context: pathSrc.resolve(__dirname, '../../src/js/'),
      entry: {
        script: './index.js'
      },
      output: {
        filename: '[name].js',
        
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(path.output + 'js'))
    .pipe(browserSync.stream({once: true}));
}

function jsBuild() {
  return gulp.src(path.input + 'js/*.js')
    .pipe(webpack({
      mode: 'production',
      context: pathSrc.resolve(__dirname, '../../src/js/'),
      entry: {
        script: './index.js'
      },
      output: {
        filename: '[name].js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(path.output + 'js'));
}

exports.jsDev = jsDev;
exports.jsBuild = jsBuild;
