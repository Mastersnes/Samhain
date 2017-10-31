/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/option.html"], 
function($, _, page) {
	'use strict';

	return function(parent, Textes) {
        this.init = function(parent, Textes) {
		    this.el = "#option-popup";
            this.Textes = Textes;
            this.parent = parent;
            this.render();
		};
		
		this.render = function() {
		    _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes
            };
            $(this.el).html(template(templateData));
            
            this.makeEvents();
		};
		
		this.makeEvents = function() {
            var that = this;
            $(this.el).find(".close").click(function() {
                $(that.el).hide("slow");
            });
            $(this.el).find(".flag.fr").click(function() {
                that.Textes.local = "fr";
                parent.render();
            });
            $(this.el).find(".flag.en").click(function() {
                that.Textes.local = "en";
                parent.render();
            });
            $(this.el).find("#fullscreen").click(function() {
                var elem = $("body")[0];
                if (elem.requestFullscreen) {
                  elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                  elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                  elem.webkitRequestFullscreen();
                }
            });
        };
        
        this.show = function() {
            $(this.el).show("slow");
        };
        
        this.init(parent, Textes);
	};
});