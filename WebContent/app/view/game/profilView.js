'use strict';
define(["jquery",
        "app/utils/utils",
        "text!app/template/game/profil.html"
        ], function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".profil");

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

			this.refreshAll();
        };

        this.refreshAll = function() {
            var equipment = this.player.get("equipment");
            this.refresh("liste.armes items", equipment.arme, equipment.currentArme);
            this.refresh("liste.boucliers items", equipment.bouclier, equipment.currentBouclier);
            this.refresh("liste.magies items", equipment.magie);
            this.refresh("liste.consos items", equipment.conso);
            this.refresh("liste.clefs items", equipment.clef);

            this.makeEvents();
        };

        this.refresh = function(balise, items, current) {
            this.el.find(balise).empty();
            for (var index in items) {
                var item = items[index];
                var newBalise = $("<item></item>");

                var name;
                if (current == item) name = "*" + this.Textes.get(item) + "*";
                else name = this.Textes.get(item);
                newBalise.html(name);

                newBalise.attr("name", item);
                this.el.find(balise).append(newBalise);
            }
        };

        this.makeEvents = function() {
            var that = this;

            this.el.find(".armes item").click(function() {
                var arme = $(this).attr("name");
                that.player.selectArme(arme);
                that.player.attaque(that.player);
                that.refreshAll();
            });

            this.el.find(".boucliers item").click(function() {
                var bouclier = $(this).attr("name");
                that.player.selectBouclier(bouclier);
                that.refreshAll();
            });

            this.el.find(".magies item").click(function() {
                var magie = $(this).attr("name");
                that.player.spell(magie, that.player);
            });

            this.el.find(".consos item").click(function() {
                var conso = $(this).attr("name");
                that.player.use(conso, that.player);
                that.refreshAll();
            });

            this.el.find(".clefs item").click(function() {
                var clef = $(this).attr("name");
                if (that.player.has(clef)) {
                    alert("Le joueur possede " + that.Textes.get(clef));
                }
            });

        };

        this.init(parent);
    };
});