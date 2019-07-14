/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/menu/popup/option.html"], 
function($, _, Utils, page) {
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
			
			this.refresh();
			
			this.makeEvents();
		};
		
		this.refresh = function() {
			if (this.parent.mediatheque.isMuteMusic)
				$("#muteMusic").html(this.Textes.get("demuteMusic"));
			else
				$("#muteMusic").html(this.Textes.get("muteMusic"));

			if (this.parent.mediatheque.isMuteSound)
				$("#muteSound").html(this.Textes.get("demuteSound"));
			else
				$("#muteSound").html(this.Textes.get("muteSound"));
		};
		
		this.makeEvents = function() {
			var that = this;
			$(this.el).find(".close-button, mask").click(function() {
				$(that.el).fadeOut();
			});
			$(this.el).find(".flag.fr").click(function() {
				that.Textes.setLanguage("fr");
				that.parent.render();
			});
			$(this.el).find(".flag.en").click(function() {
				that.Textes.setLanguage("en");
				that.parent.render();
			});
			$(this.el).find("#fullscreen").click(function() {
				var isFullscreen = Utils.fullscreen();
				if (isFullscreen) {
					$("fullscreen").removeClass("exit");
				}else {
					$("fullscreen").addClass("exit");
				}
			});
			$(this.el).find("#muteMusic").click(function() {
				that.parent.mediatheque.mute("music");
				that.refresh();
			});
			$(this.el).find("#muteSound").click(function() {
				that.parent.mediatheque.mute("sound");
				that.refresh();
			});
		};
		
		this.show = function() {
			$(this.el).fadeIn();
		};
		
		this.init(parent, Textes);
	};
});