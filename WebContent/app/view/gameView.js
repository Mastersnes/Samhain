/*global define */
define(["jquery",
        'underscore', 
        "app/utils/utils",
        "text!app/template/game.html",
        "app/model/save",
        "app/view/histoireView",
        "app/view/combatView",
        "app/view/glossaireView",
        "app/view/inventaireView"], 
function($, _, Utils, page, Save, HistoireView, CombatView, GlossaireView, InventaireView) {
	'use strict';

	return function(start, mediatheque) {
		this.init = function(start, mediatheque) {
			this.el = $("#game");
			this.mediatheque = mediatheque;
			this.render(start);
		};
		
		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {};
			this.el.html(template(templateData));
			
			this.checkEvents();
			
			this.el.animate({
				left: "0"
			}, "slow");
			$(".mainPage").hide("slow");
			
			this.histoire = new HistoireView(this);
			this.combat = new CombatView(this);
			this.inventaire = new InventaireView(this);
			this.glossaire = new GlossaireView();
			
			this.save = new Save();
			if (!start) {
				this.save.loadGame();
			}
			
			this.refresh();
			this.go(this.save.getLieu());
		};
		
		this.refresh = function() {
			var vie = this.save.getLife() + "%";
			$("#vieHero").animate({
				width: vie
			}, "slow");

			var magie = this.save.getMagie() + "%";
			$("#magieHero").animate({
				width: magie
			}, "slow");
			
			var niveau = this.save.getNiveau();
			$("#niveau").text(niveau, "slow");

			var argent = this.save.getArgent();
			$("#argent").text(argent, "slow");
			
			var xp = this.save.getXp() + "%";
			$("#xpHero").animate({
				width: xp
			}, "slow");
			
			var sound = this.save.isSound();
			if (sound) {
				$(".sound").removeClass("mute");
			}else {
				$(".sound").addClass("mute");
			}
		};
		
		this.openGlossaire = function (key) {
			this.glossaire.load(key);
		};
		
		this.go = function(lieu) {
			this.save.setLieu(lieu);
			if (!lieu || lieu == "ville") {
				this.histoire.load("ville");
			}else {
				this.histoire.load(lieu);
			}
		};
		this.fight = function(monstres, but) {
			this.combat.load(monstres, but, this.save.getActions());
		};
		
		this.checkEvents = function() {
			var that = this;
			$(".sound").click(function() {
				that.save.setSound(!that.save.isSound());
				that.refresh();
			});
			$(".level").click(function() {
				that.inventaire.load();
			});
		};
		
		this.init(start, mediatheque);
	};
});