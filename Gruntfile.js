"use strict";
const path = require("path");
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    pug: {
      compile: {
        options: {
          pretty: true,
          data: "src/html/index.json"
        },
        files: {
          "dist/index.html": ["src/html/index.pug"]
        }
      }
    },
    concat: {
      options: {
        separator: ";",
      },
      css: {
        src: ["src/css/**"],
        dest: "dist/assets/styles.css",
      },
      js: {
        src: ["src/*.js", "src/vendor/*.js", "src/panel/*.js"],
        dest: "dist/assets/scripts.js"
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "src/extension/",
            src: [".debug", "CSXS/**"],
            dest: "dist/"
          },
        ],
      },
      deploy: {
        expand: true,
        cwd: "dist/",
        src: [".debug", "**"],
        dest: path.join(process.env.APPDATA, "Adobe/CEP/extensions", "<%= pkg.name %>")
      },

      deploy2: {
        expand: true,
        cwd: "dist/",
        src: [".debug", "**"],
        dest: path.join(process.env.APPDATA, "Adobe/CEPServiceManager4/extensions", "<%= pkg.name %>")
      }

    },
  });

  grunt.loadNpmTasks("grunt-contrib-pug");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["pug", "concat", "copy"]);
};
