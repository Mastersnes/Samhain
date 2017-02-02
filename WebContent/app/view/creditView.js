/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/credit.html"], 
function($, _, page) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#creditPopup");
			this.render();
		};
		
		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {};
			this.el.html(template(templateData));
			
			this.checkEvents();
		};
		
		this.checkEvents = function() {
			var that = this;
			this.el.click(function() {
				that.el.hide("slow");
			});
		};
		
		this.show = function() {
			this.el.show("slow");
		};
		
		this.init();
	};
});