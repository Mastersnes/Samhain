/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/inventaire.html"], 
function($, _, page) {
	'use strict';

	return function(game) {
		this.init = function(game) {
			this.el = $("#inventaire");
			this.Textes = game.Textes;
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
			var templateData = {
                    text : this.Textes
            };
			this.el.html(template(templateData));
		};
		
		this.checkEvents = function() {
			var that = this;
			this.el.click(function() {
				that.el.hide("slow");
			});
		};
		
		this.init(game);
	};
});