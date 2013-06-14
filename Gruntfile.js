"use strict";

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('./tasks/');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'tasks/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                trailing: true,
                node: true
            },
            globals: {}
        },
        leadingIndent : { // eating own food
            all : ['Gruntfile.js', 'tasks/**/*.js'],
            indentation : "spaces"
        }
    });

    grunt.registerTask('default', ['jshint:all', 'leadingIndent:all']);
};