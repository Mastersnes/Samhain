'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/glossaire.html",
        "app/data/items",
        "app/data/glossaire"
        ], function($, Utils, ViewUtils, page, Items, Glossaire){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".glossaire");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;


            this.render();
            this.el.hide();
        };

        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes
            };
            this.el.html(template(templateData));
            ViewUtils.verticalCenter();
            this.initAlphabetDispo();
            this.makeEvents();
        };

        this.initAlphabetDispo = function() {
            var that = this;
            this.el.find(".liste alphabet").empty();
            var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            for (var i in letters) {
                var resultats = Glossaire.list(letters[i], this.Textes);
                if(resultats.length <= 0) resultats = Items.list(letters[i], this.Textes);

                if(resultats.length > 0) {
                    var letterDom = $("<letter></letter>")
                    letterDom.attr("id", letters[i]);
                    letterDom.html(letters[i]);
                    this.el.find(".liste alphabet").append(letterDom);
                }
            }
            this.currentLetter = "a";
        };

        /**
        * Lance la consultation
        **/
        this.show = function(key) {
            this.el.find(".liste").hide();
            var monster = Glossaire.get(key);
            if (monster) {
                var monsterName = this.Textes.get(monster.name);
                this.el.find("titre").html(monsterName);
                this.el.find("texte").html(this.Textes.get(monster.texte));

                this.currentLetter = Utils.normalize(monsterName).charAt(0);

                this.el.find("infos").empty();
                this.addInfo("vie", monster.vie);
                this.addInfo("mana", monster.mana);
                this.addInfo("attack", monster.attaque);
                this.addInfo("defense", monster.defense);
                this.addInfo("experienceGain", monster.xp);
                this.addInfo("argentGain", monster.argent);
            }else {
                var item = Items.get(key);
                var itemName = this.Textes.get(item.name);
                this.el.find("titre").html(itemName);
                this.el.find("texte").html(this.Textes.get(item.texte));

                this.currentLetter = Utils.normalize(itemName).charAt(0);

                this.el.find("infos").empty();
                this.addInfo("degats", item.degats);
                this.addInfo("defense", item.defense);
                this.addInfo("lifeSteal", item.lifeSteal);
                this.addInfo("manaCost", item.manaCost);
                this.addInfo("lifeGain", item.vie);
                this.addInfo("manaGain", item.mana);
                if (item.multicible) this.addInfo("multicible", this.Textes.get("oui"));
            }
            this.el.find(".zoom").show();
            this.el.fadeIn();
        };

        this.addInfo = function(titre, infos) {
            if (infos == undefined) return;
            var infoDom = $("<info></info>");
            if (Array.isArray(infos)) {
                infoDom.html(this.Textes.get(titre) + " : [" + infos[0] + "-" + infos[1] + "]");
            }else infoDom.html(this.Textes.get(titre) + " : " + infos);
            this.el.find("infos").append(infoDom);
        };

        this.list = function() {
            var that = this;
            var letter = this.currentLetter;
            this.el.find(".zoom").hide();

            this.el.find(".liste letter").removeClass("selected");
            this.el.find(".liste letter#" + letter).addClass("selected");

            this.el.find(".liste propositions").empty();
            var propositions = Glossaire.list(letter, this.Textes);
            propositions = propositions.concat(Items.list(letter, this.Textes));
            for (var i in propositions) {
                var proposition = propositions[i];
                var propositionDom = $("<proposition></proposition>")
                propositionDom.html(this.Textes.get(proposition));
                propositionDom.attr("id", proposition);
                this.el.find(".liste propositions").append(propositionDom);
            }

            this.makePropositionEvents();
            this.el.find(".liste").show();
            this.el.fadeIn();
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("close, mask").click(function() {
                that.el.fadeOut();
            });
            this.el.find(".zoom retour").click(function() {
                that.list();
            });
            this.el.find(".liste alphabet letter").click(function() {
                that.currentLetter = $(this).attr("id");
                that.list();
            });
        };

        this.makePropositionEvents = function() {
            var that = this;
            this.el.find(".liste propositions proposition").click(function() {
                var name = $(this).attr("id");
                that.show(name);
            });
        };

        this.init(parent);
    };
});