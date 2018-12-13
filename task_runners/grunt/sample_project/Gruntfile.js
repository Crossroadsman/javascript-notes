// wrapper function
module.exports = function(grunt) {

    // initialize configuration object
    grunt.initConfig({

        // store the project settings from package.json into the pkg
        // property (lets us refer to the values of properties within
        // package.json)
        pkg: grunt.file.readJSON('package.json'),

        // now we define a configuration for each task. The config
        // object for each plugin lives as a property on the main
        // configuration object (typically with the same name as the
        // plugin, e.g., grunt-contrib-concat goes under the `concat` key)
        concat: {
            options: {
                // define a string to put between each file in the
                // concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['src/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint
            // (docs at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                },
                esversion: 6
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            task: ['jshint', 'qunit']
        }
    });

    // load the configured tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // set up some tasks
    // these are run by typing `grunt <taskname>` on the command line
    // (omitting `<taskname>` runs the default task)
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};
