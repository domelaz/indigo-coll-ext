"use strict";

module.exports = function(grunt) {
  require("load-grunt-config")(grunt, {
    data: {
      ccVersion: "4",
      pkg: grunt.file.readJSON("package.json"),
    }
  });
};
