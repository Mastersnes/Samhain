'use strict';
define(["jquery",
        "app/utils/utils",
        "text!app/template/game/ui.html"
        ], function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".ui");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.player = parent.playerManager;
        };

        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
        };

        this.loop = function(game) {
            var life = this.player.get("life");
            this.refresh("fiole.life", life.current, life.max, true, 21);

            var mana = this.player.get("mana");
            this.refresh("fiole.mana", mana.current, mana.max, true, 21);
            if (this.player.get("unlockMana")) this.el.find("fiole.mana").fadeIn();
            else this.el.find("fiole.mana").hide();

            var gold = this.player.get("gold");
            this.refresh("gold", gold, 1000, false, 6);

            var xp = this.player.get("xp");
            var palier = this.player.levelManager.nextPalier();
            this.refresh("level", xp, palier, false, 10);

            var level = this.player.get("level");
            this.el.find("level montant").html(this.Textes.get("lvl") + " " + level);
        };

        this.refresh = function(id, current, max, wantPercent, stepNumber) {
            stepNumber--;

            var percent = Math.round(Utils.toPercent(current, max));
            if (wantPercent) this.el.find(id + " montant").html(percent + "%");
            else this.el.find(id + " montant").html(current);

            var step = Math.ceil((current * stepNumber) / max);
            if (step > stepNumber) step = stepNumber;
            this.el.find(id + " picture").attr("step", step);
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("fiole.life").click(function() {
                that.player.achete("potionSante");
            });
            this.el.find("fiole.mana").click(function() {
                that.player.achete("elixir");
            });
            this.el.find("level").click(function() {
                that.player.addXp(1);
            });
            this.el.find("gold").click(function() {
                that.player.addGold(10);
            });
        };

        this.init(parent);
    };
});