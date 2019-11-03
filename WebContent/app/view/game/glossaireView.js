'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/glossaire.html",
        "app/data/items",
        "app/data/glossaire",
        "app/data/suffixe",
        "app/data/etats"
        ], function($, Utils, ViewUtils, page, Items, Glossaire, Suffixe, Etats){
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
                    text : this.Textes,
                    suffixes : Suffixe.list()
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
        this.show = function(key, isChange) {
            this.current = key;
//            this.el.find(".liste").hide();
            var monster = Glossaire.get(key);
            if (monster) this.showMonster(monster, isChange);
            else this.showItem(key);
            this.makeZoomEvents();
            this.el.find(".zoom").show();
            this.el.fadeIn();
            this.list(true);
        };
        this.showItem = function(key) {
            var item = Items.get(key);
            var itemName = this.Textes.get(item.name);
            this.el.find("titre").html(itemName);
            this.el.find("suffixe").hide();
            this.el.find("texte").html(this.Textes.get(item.texte));

            this.currentLetter = Utils.normalize(itemName).charAt(0);

            this.el.find("infos").empty();
            this.addInfo("degats", item.degats);
            this.addInfo("defense", item.defense);
            this.addInfo("lifeSteal", item.lifeSteal);
            this.addInfo("manaSteal", item.manaSteal);
            this.addInfo("manaCost", item.manaCost);
            this.addInfo("lifeGain", item.vie);
            this.addInfo("manaGain", item.mana);
            if (item.multicible) this.addInfo("multicible", this.Textes.get("oui"));

            if (item.effet) {
                for (var i in item.effet) {
                    var effet = Etats.get(item.effet[i]);
                    if (effet.offensif) this.addInfo("inflige", this.Textes.get(effet.name));
                    else this.addInfo("octroie", this.Textes.get(effet.name));
                }
            }
        };

        this.showMonster = function(monster, isChange) {
            var monsterName = this.Textes.get(monster.name);
            this.currentLetter = Utils.normalize(monsterName).charAt(0);

            this.el.find("titre").html(monsterName + " ");
            if (monster.sexe == "f") {
                this.el.find("suffixe .masculin").hide();
                this.el.find("suffixe .feminin").show();
            }else {
                this.el.find("suffixe .masculin").show();
                this.el.find("suffixe .feminin").hide();
            }
            this.el.find("suffixe").show();
            this.el.find("texte").html(this.Textes.get(monster.texte));

            var suffixe = this.el.find("suffixe select option:first").attr("name");
            if (isChange) suffixe = this.el.find("suffixe select option:selected").attr("name");
            else if (monster.baseSuffixe) suffixe = monster.baseSuffixe;

            this.el.find("suffixe select option").removeAttr("selected");
            this.el.find("suffixe select option[id="+suffixe+"-"+monster.sexe+"]").attr("selected", "selected");
            suffixe = Suffixe.get(suffixe);

            this.el.find("infos").empty();
            this.addInfo("vie", monster.vie, suffixe.vie);
            this.addInfo("mana", monster.mana, suffixe.mana);
            this.addInfo("attack", monster.attaque, suffixe.attaque);
//            this.addInfo("defense", monster.defense, suffixe.defense);
            this.addInfo("experienceGain", monster.xp, suffixe.xp);
            this.addInfo("argentGain", monster.argent, suffixe.argent);
            this.addInfoList("competences", monster.abilities);
        };

        this.addInfo = function(titre, infos, suffixe) {
            if (infos == undefined) return;
            if (suffixe == undefined) suffixe = 1;

            var infoDom = $("<info></info>");
            if (Array.isArray(infos)) {
                var min = Math.round(infos[0] * suffixe);
                var max = Math.round(infos[1] * suffixe);
                infoDom.html(this.Textes.get(titre) + " : [" + min + "-" + max + "]");
            }else if(infos >= 0 || infos < 0) infoDom.html(this.Textes.get(titre) + " : " + Math.round(infos * suffixe));
            else infoDom.html(this.Textes.get(titre) + " : " + infos);

            if (infoDom.html().length > 16) infoDom.addClass("large");
            this.el.find("infos").append(infoDom);
        };

        this.addInfoList = function(titre, infos) {
            if (infos == undefined || infos.length == 0) return;
            var infoDom = $("<infoList></infoList>");
            var texte = this.Textes.get(titre) + " : ";
            for (var i=0; i<infos.length; i++) {
                var info = Items.get(infos[i]);
                texte += "<span ref='"+infos[i]+"'>" + this.Textes.get(info.name) + "</span>";
                if (i<infos.length-1) texte += ", ";
            }
            infoDom.html(texte);
            this.el.find("infos").append(infoDom);
        };

        this.list = function(refresh) {
            var that = this;
            var letter = this.currentLetter;

            if (!refresh) this.el.find(".zoom").hide();

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
            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) that.el.fadeOut();
            });
//            this.el.find(".zoom retour").click(function() {
//                that.list();
//            });
            this.el.find(".zoom suffixe select").change(function() {
                that.show(that.current, true);
            });
            this.el.find(".liste alphabet letter").click(function() {
                that.currentLetter = $(this).attr("id");
                that.list(true);
            });
        };

        this.makePropositionEvents = function() {
            var that = this;
            this.el.find(".liste propositions proposition").click(function() {
                var name = $(this).attr("id");
                that.show(name);
            });
        };

        this.makeZoomEvents = function() {
            var that = this;
            this.el.find(".zoom span").click(function() {
                var name = $(this).attr("ref");
                that.show(name);
            });
        };

        this.init(parent);
    };
});