module.exports = function(grunt) {
    // Grunt config
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            dev: {
                files: {
                'src/js/responsive-embed-angular.min.js': 'src/js/responsive-embed-angular.js'
                }
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // For development
    grunt.registerTask('default', ['uglify']);
};