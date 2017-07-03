/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/mediatheque",
        "text!app/template/main.html",
        "app/view/gameView",
        "app/view/creditView",
        "app/view/partenairesView"], 
function($, _, Utils, Mediatheque, page, GameView, CreditView, PartenairesView) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#app");
			this.mediatheque = new Mediatheque();
			Utils.load("connect", {"where" : "Connexion"}, function(data) {}, "POST");
			this.render();
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {};
			this.el.html(template(templateData));
			
			this.credit = new CreditView();
			this.partenaires = new PartenairesView();
			
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
				Utils.load("connect", {"where" : "Nouveau Jeu"}, function(data) {}, "POST");
				new GameView(true, that.mediatheque);
			});
			$("#continue").click(function() {
				Utils.load("connect", {"where" : "Continue"}, function(data) {}, "POST");
				new GameView(false, that.mediatheque);
			});
			$("#credits").click(function() {
				Utils.load("connect", {"where" : "Credit"}, function(data) {}, "POST");
				that.credit.show();
			});
			$("#partenaires").click(function() {
				Utils.load("connect", {"where" : "Partenaires"}, function(data) {}, "POST");
				that.partenaires.show();
			});
		};
		
		this.init();
	};
});