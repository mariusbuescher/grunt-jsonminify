'use strict';

module.exports = function( grunt ) {
    grunt.initConfig({
        jsonminify: {
            test: {
                files: [
                    {
                        src: '**/*.json',
                        dest: 'test-result',
                        cwd: 'test/'
                    }
                ]
            }
        }
    });

    grunt.loadTasks('tasks');
};
