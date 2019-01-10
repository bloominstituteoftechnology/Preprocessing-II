/* global module:true 
 * 
 * Gruntfile.js
 * npm install -g grunt-cli
 * npm install grunt-contrib-less grunt-contrib-watch grunt-contrib-connect --save-dev
 * https://gist.github.com/henrik-farre/7533196
 */
module.exports = function(grunt) {
  'use strict';
  // Default port
  var LIVERELOAD_PORT = 35729;

  grunt.initConfig({
    connect: {
      server: {
        options: {
          // dumb dot!
          base: '.',
          // This will inject live reload script into the html
          livereload: LIVERELOAD_PORT
        }
      }
    },
    // Less files are in app/less, output is in app/css
    less: {
      development: {
        options: {
          paths: ["./less"],
          yuicompress: false
        },
        files: {
        "./css/index.css": "./less/index.less"
        }
      }
    },
  
    watch: {
      options: {
        livereload: LIVERELOAD_PORT
      },
      files: ['*.html', "./less/*.less"],
      tasks: ["less"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Run grunt server to get going
  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);
};