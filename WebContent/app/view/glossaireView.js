/*global define */
define(["jquery",
        'underscore', 
        "text!app/template/glossaire.html",
        "app/data/glossaire",
        "app/data/item"], 
function($, _, page, Glossaire, Item) {
	'use strict';

	return function(game) {
		this.init = function(game) {
			this.el = $("#glossaire");
			this.Textes = game.Textes;
			this.checkEvents();
		};
		
		/**
		 * Charge l'ecran de glossaire en fonction de la clef
		 */
		this.load = function(key) {
			var that = this;
			this.render(key);
			$("#glossaire").show("slow", function() {
			console.log("show complete")
			    $("#glossaire .texte").css("overflow-y", "auto");
			});
		};
		
		this.render = function(key) {
			var data = Glossaire.get(key);
			data.type = "monstre";
			if (!data.textes) {
				data = Item.get(key);
				data.type = "item";
			}
			
			data.text = this.Textes;
			
			_.templateSettings.variable = "data";
			var template = _.template(page);
			$("#glossaire").html(template(data));
		};
		
		this.checkEvents = function() {
			var that = this;
			$("#glossaire").click(function() {
			    $("#glossaire .texte").css("overflow-y", "");
				$("#glossaire").hide("slow");
			});
		};
		
		this.init(game);
	};
});