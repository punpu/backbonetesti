// Created from https://github.com/volojs/create-template

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({


    paths: {
        // Major libraries
        jquery: '../lib/jquery/dist/jquery',
        underscore: '../lib/underscore/underscore',
        backbone: '../lib/backbone/backbone',

        // Require.js plugins
        text: '../lib/requirejs-text/text',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates: './templates'
    }

});


define([
    'jquery',
    'underscore',
    'backbone',
    'views/frontpage'
], function ($, _, Backbone, Frontpage) {

    // Viewit täytyy luoda new:llä
    var frontpage = new Frontpage();
    frontpage.render();
});


