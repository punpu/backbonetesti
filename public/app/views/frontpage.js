define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/demotemplate.html'
], function($, _, Backbone, demoTemplate){
    var frontpageView = Backbone.View.extend({
        el: '.page-container',
        render: function(){
            $(this.el).html(_.template(demoTemplate));
        }

    });
    return frontpageView;
});