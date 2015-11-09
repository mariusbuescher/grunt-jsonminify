/**
 * grunt-jsonminify
 * https://github.com/mariusbuescher/grunt-jsonminify
 * Copyright (c) 2015 Marius Büscher
 * Licensed under the MIT license
 */

'use strict';

module.exports = function( grunt ) {
    var path = require( 'path' );

    grunt.task.registerMultiTask( 'jsonminify', 'Minify JSON', function() {
        var options = this.options();

        this.files.forEach( function( files ) {
            files.src.forEach( function( file ) {
                var data = grunt.file.readJSON( path.join( files.cwd, file ) );
                grunt.file.write( path.join( files.dest, file ), JSON.stringify( data ) );
            } );
        } );
    } );
};
