/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/kongregateUtils",
        "app/utils/mediatheque",
        "app/data/textes",
        "text!app/template/main.html",
        "app/view/gameView",
        "app/view/creditView",
        "app/view/optionView",
        "app/manager/sceneManager"],
function($, _, Utils, Kongregate, Mediatheque, Textes, page, GameView, CreditView, OptionView, SceneManager) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#app");
			this.mediatheque = new Mediatheque();
			this.scene = new SceneManager(this);

			this.kongregateUtils = new Kongregate(Textes);
			
			var that = this;
			if (window.location.href.indexOf("kongregate") > -1) {
	            console.log("kongregate Load");
				this.kongregateUtils.load(function() {
	            	that.render();
	            });
			}else {
				console.log("Pas sur kongregate !");
				this.render();
				this.scene.resize();
			}
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
			        text : Textes
			};
			this.el.html(template(templateData));
			
			this.kongregateUtils.render();
			
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
				new GameView(that, true, that.mediatheque, Textes, that.kongregateUtils);
			});
			$("#continue").click(function() {
				new GameView(that, false, that.mediatheque, Textes, that.kongregateUtils);
			});
			$("#credits").click(function() {
				that.credit.show();
			});
			$("#option").click(function() {
			    that.option.show();
			});
			
			$("#login").click(function() {
				that.kongregateUtils.login();
			});
		};
		
		this.init();
	};
});