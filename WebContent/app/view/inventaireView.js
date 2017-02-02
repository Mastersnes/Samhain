/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/inventaire.html"], 
function($, _, page) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#inventaire");
			this.checkEvents();
		};
		
		/**
		 * Charge l'ecran d'inventaire
		 */
		this.load = function() {
			this.render();
			this.el.show("slow");
		};
		
		this.render = function() {
			var data = null;
			_.templateSettings.variable = "data";
			var template = _.template(page);
			this.el.html(template(data));
		};
		
		this.checkEvents = function() {
			var that = this;
			this.el.click(function() {
				that.el.hide("slow");
			});
		};
		
		this.init();
	};
});