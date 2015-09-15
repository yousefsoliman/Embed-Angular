module.exports = function(grunt) {
    // Grunt config
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ['src/css']
                },
                files: {
                    'src/css/responsive-embed-angular.css': 'src/css/responsive-embed-angular.less'
                }
            }
        },
        watch: {
            css: {
                files: 'src/css/**/*.less',
                tasks: ['less:dev']
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // For development
    grunt.registerTask('default', ['less:dev']);
};