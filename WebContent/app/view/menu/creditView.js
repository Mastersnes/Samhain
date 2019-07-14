/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/menu/popup/credit.html"], 
function($, _, Utils, page) {
	'use strict';

	return function(Textes) {
		this.init = function(Textes) {
			this.el = "#credit-popup";
			this.Textes = Textes;
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
			$(this.el).find(".close-button, mask").click(function() {
				$(that.el).fadeOut();
			});
			$("#avn").click(function() {
				window.open("https://avn2dgameartist.wordpress.com", "_blank");
			});
			$("#bandcamp").click(function() {
				window.open("https://lesjeuxdebebel.bandcamp.com/album/yule-a-god-birth", "_blank");
			});
			$(".facebook").click(function() {
				window.open("https://www.facebook.com/lesjeuxdebebel/", "_blank");
			});
			$(".twitter").click(function() {
				window.open("https://twitter.com/lesjeuxdebebel", "_blank");
			});
			$(".wordpress").click(function() {
				window.open("https://lesjeuxdebebel.wordpress.com", "_blank");
			});
			$(".instagram").click(function() {
				window.open("https://www.instagram.com/lesjeuxdebebel/", "_blank");
			});
			$(".kongregate").click(function() {
				window.open("https://www.kongregate.com/games/JeuxBebel", "_blank");
			});
		};
		
		this.show = function() {
			$(this.el).fadeIn();
		};
		
		this.init(Textes);
	};
});