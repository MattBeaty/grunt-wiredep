'use strict';

function wiredep(grunt) {
  grunt.registerMultiTask('wiredep', 'Inject Bower packages into your source code.', function () {
    this.requiresConfig(['wiredep', this.target, 'src']);

    var options = this.options(this.data);
    require('wiredep')(options);
  });
}

function npm_wiredep(grunt) {
  grunt.registerMultiTask('npm_wiredep', 'Inject NPM packages into source code.', function () {
    this.requiresConfig(['npm_wiredep', this.target, 'src']);

    var options = this.options(this.data);
    require('npm-wiredep')(options);
  });
}

module.exports = wiredep;
module.exports = npm_wiredep;
