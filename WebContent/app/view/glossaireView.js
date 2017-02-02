/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/glossaire.html",
        "app/data/glossaire",
        "app/data/item"], 
function($, _, page, Glossaire, Item) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#glossaire");
			this.checkEvents();
		};
		
		/**
		 * Charge l'ecran de glossaire en fonction de la clef
		 */
		this.load = function(key) {
			this.render(key);
			this.el.show("slow");
		};
		
		this.render = function(key) {
			var data = Glossaire.get(key);
			data.type = "monstre";
			if (!data.textes) {
				data = Item.get(key);
				data.type = "item";
			}
			
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