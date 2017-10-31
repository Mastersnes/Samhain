/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/mediatheque",
        "app/data/textes",
        "text!app/template/main.html",
        "app/view/gameView",
        "app/view/creditView",
        "app/view/optionView"], 
function($, _, Utils, Mediatheque, Textes, page, GameView, CreditView, OptionView) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#app");
			this.mediatheque = new Mediatheque();
			this.render();
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
			        text : Textes
			};
			this.el.html(template(templateData));
			
			this.credit = new CreditView(this, Textes);
			this.option = new OptionView(this, Textes);
			
			this.checkContinue();
			this.checkEvents();
		};
		
		this.checkContinue = function() {
			var save = sessionStorage.getItem(Utils.name);
			if (save) {
				$("#continue").show();
			}else {
				$("#continue").hide();
			}
		};
		
		this.checkEvents = function() {
			var that = this;
			$("#new").click(function() {
				new GameView(true, that.mediatheque, Textes);
			});
			$("#continue").click(function() {
				new GameView(false, that.mediatheque, Textes);
			});
			$("#credits").click(function() {
				that.credit.show();
			});
			$("#option").click(function() {
			    that.option.show();
			});
		};
		
		this.init();
	};
});