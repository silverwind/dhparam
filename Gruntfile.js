"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    bump: {
      options: {
        files: ["package.json"],
        commit: true,
        commitMessage: "%VERSION%",
        commitFiles: ["package.json"],
        createTag: true,
        tagName: "%VERSION%",
        tagMessage: "Version %VERSION%",
        push: false
      }
    },
    shell: {
      options: {
        stdout: true,
        stderr: true,
        failOnError: true
      },
      push: {
        command: "git push -u --tags origin master"
      },
      publish: {
        command: "npm publish"
      },
      update: {
        command: "ncu --packageFile package.json -ua"
      },
      modules: {
        command: "rm -rf node_modules && npm install"
      },
      lint: {
        command: "eslint --color --quiet *.js"
      },
      test: {
        command: "npm test"
      }
    }
  });

  grunt.registerTask("update", ["shell:update", "shell:modules"]);
  grunt.registerTask("patch",  ["shell:lint", "shell:test", "bump", "shell:push", "shell:publish"]);
  grunt.registerTask("minor",  ["shell:lint", "shell:test", "bump:minor", "shell:push", "shell:publish"]);
  grunt.registerTask("major",  ["shell:lint", "shell:test", "bump:major", "shell:push", "shell:publish"]);
  grunt.registerTask("test",   ["shell:test"]);
  grunt.registerTask("lint",   ["shell:lint"]);

  grunt.loadNpmTasks("grunt-bump");
  grunt.loadNpmTasks("grunt-shell");
};