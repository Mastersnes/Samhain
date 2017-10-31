/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/credit.html"], 
function($, _, page) {
	'use strict';

	return function(parent, Textes) {
		this.init = function(parent, Textes) {
			this.el = $("#creditPopup");
			this.Textes = Textes;
			this.render();
		};
		
		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
			        text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.checkEvents();
		};
		
		this.checkEvents = function() {
		    var that = this;
            $(this.el).find(".close").click(function() {
                $(that.el).hide("slow");
            });
            $("#deviant").click(function() {
                window.open("https://lesjeuxdebebel.deviantart.com/", "_blank");
            });
		};
		
		this.show = function() {
			this.el.show("slow");
		};
		
		this.init(parent, Textes);
	};
});