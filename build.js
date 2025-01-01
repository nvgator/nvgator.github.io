#!/usr/bin/env node

var
  fs = require('fs'),
  jsProcessor = require('uglify-js'),
  jsConfig = {
    toplevel: true,
    compress: true,
    mangle: true,
    output: {
      beautify: false
    }
  };

function js(source) {
  return jsProcessor.minify(source, jsConfig);
}
function read(filename) {
  return fs.readFileSync(filename).toString();
}
function write(filename, contents) {
  return fs.writeFileSync(filename, contents)
}

var
  jsDev   = read('assets/javascripts/main.src.js'),
  jsMin   = js(jsDev, jsConfig).code;

write('assets/javascripts/main.js', jsMin);
