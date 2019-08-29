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
            this.refresh("fiole.life", life.current, life.max, true, 11);

            if (this.player.get("unlockMana")) {
                var mana = this.player.get("mana");
                this.el.find("fiole.mana").fadeIn()
                this.refresh("fiole.mana", mana.current, mana.max, true, 11);
            }else this.el.find("fiole.mana").hide();

            var gold = this.player.get("gold");
            this.refresh("gold", gold, 1000, false, 8);
            if (gold > 0) this.el.find("gold montant").show();
            else this.el.find("gold montant").hide();

            var xp = this.player.get("xp");
            var palier = this.player.levelManager.nextPalier();
            this.refresh("level", xp, palier, false, 10);

            var level = this.player.get("level");
            this.el.find("level montant").html(this.Textes.get("lvl") + " " + level);
        };

        this.refresh = function(id, current, max, wantPercent, stepNumber) {
            if (!max) {
                this.el.find(id).hide();
                return;
            }else this.el.find(id).fadeIn();
            stepNumber--;

            var display = current;
            if (wantPercent) {
                display = Math.round(Utils.toPercent(current, max));
                this.el.find(id + " montant").html(display + "%");
            }
            else this.el.find(id + " montant").html(display);

            var digits = Math.floor(Math.log10(display) + 1);
            if (display == 0) digits = 1;
            this.el.find(id + " montant").attr("digits", digits);

            var step = Math.ceil((current * stepNumber) / max);
            if (step > stepNumber) step = stepNumber;
            this.el.find(id + " picture").attr("step", step);
        };

        this.makeEvents = function() {
            var that = this;
        };

        this.init(parent);
    };
});