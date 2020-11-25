'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/glossaire.html",
        "app/data/items",
        "app/data/glossaire",
        "app/data/suffixe",
        "app/data/etats"
        ], function($, _, Utils, ViewUtils, page, Items, Glossaire, Suffixe, Etats){
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
            this.el.find(".alphabet marqueurs").empty();
            this.letters = [
                ["a","b","c","d"],["e","f","g","h"],["i","j","k","l"],
                ["m","n","o","p"],["q","r","s","t"],["u","v","w","x","y","z"]
            ];
            if (this.Textes.local == "eo") {
                this.letters = [
                    ["a","b","c","ĉ","d"],["e","f","g","ĝ","h", "ĥ"],["i","j","ĵ","k","l"],
                    ["m","n","o","p"],["r","s","ŝ","t"],["u","ŭ","v","z"]
                ];
            }

            for (var i in this.letters) {
                var resultats = Glossaire.list(this.letters[i], this.Textes, true);
                if(resultats.length <= 0) resultats = Items.list(this.letters[i], this.Textes, true);
                if(resultats.length <= 0) resultats = Etats.list(this.letters[i], this.Textes, true);

                if(resultats.length > 0) {
                    var marqueurs = this.letters[i];
                    var marqueurDom = $("<marqueur></marqueur>");
                    marqueurDom.attr("id", i);
                    marqueurDom.attr("name", this.letters[i]);
                    var nom = marqueurs[0].toUpperCase() + "-" + marqueurs[marqueurs.length-1].toUpperCase();
                    marqueurDom.html("<texte>" + nom + "</texte>");
                    this.el.find(".alphabet marqueurs").append(marqueurDom);
                }
            }
            this.currentLetter = this.letters[0];
        };

        this.initSuffixesDispo = function(monster, suffixeBonus) {
            var suffixes = Suffixe.list();
            var suffixesDom = this.el.find("suffixes");
            suffixesDom.empty();

            var monsterSuffixes = [];
            if (monster.suffixes) monsterSuffixes = monster.suffixes;
            for (var i in suffixes) {
                var suffixe = suffixes[i];
                if (suffixe.unique && i != suffixeBonus) {
                    if (monsterSuffixes.indexOf(i) == -1) continue;
                }
                var suffixeDom = $("<suffixe></suffixe>")
                suffixeDom.attr("id", i);
                if (monster.sexe == "m") suffixeDom.html(this.Textes.get(suffixe.namem));
                else suffixeDom.html(this.Textes.get(suffixe.namef));

                suffixesDom.append(suffixeDom);
            }
        };

        /**
        * Lance la consultation
        **/
        this.show = function(key, suffixe) {
            this.current = key;

            this.el.find(".liste").hide();
            this.el.find(".description suffixes").hide();

            if (!this.showEtat(key)) {
                if (!this.showMonster(key, suffixe)) {
                    this.showItem(key);
                }
            }

            this.el.find(".description").show();
            this.el.fadeIn();
        };

        this.showEtat = function(key) {
            var etat = Etats.get(key);
            if (!etat || !etat.name) return false;

            var el = this.el.find(".description");

            var etatName = this.Textes.get(etat.name);
            el.find("titre").html(etatName);
            el.find("suffixe#selected, fleche").hide();
            el.find("texte").html(this.Textes.get(etat.name + "-texte"));

            el.find("infos").empty();
            this.addInfoTxt(etat.commentaire);
            this.addInfo("duree", etat.duree, null, "tours");
            this.addInfo("degats", etat.degats, null);
            this.addInfo("lifeGain", etat.vie, null, "lifeGain-glossaire");

            if (etat.multicible) this.addInfo("multicible", this.Textes.get("oui"));
            this.makeZoomEvents();
            return true;
        };

        this.showItem = function(key) {
            var item = Items.get(key);
            if (!item || !item.name) return false;

            var el = this.el.find(".description");

            var itemName = this.Textes.get(item.name);
            el.find("titre").html(itemName);
            el.find("suffixe#selected, fleche").hide();
            el.find("texte").html(this.Textes.get(item.texte));

            el.find("infos").empty();
            this.addInfoTxt(item.commentaire);
            this.addInfo("degats", item.degats, null);
            this.addInfo("defense", item.defense, null);

            if (item.degats) this.addInfo("lifeSteal", item.lifeSteal, null, "lifeSteal-glossaire");
            else this.addInfo("lifeSteal", item.lifeSteal, null, "lifeSteal2-glossaire");

            this.addInfo("manaSteal", item.manaSteal, null, "manaSteal-glossaire");
            this.addInfo("manaCost", item.manaCost, null);

            this.addInfo("lifeGain", item.vie, null, "lifeGain-glossaire");
            this.addInfo("manaGain", item.mana, null, "manaGain-glossaire");
            if (item.multicible) this.addInfo("multicible", this.Textes.get("oui"));

            if (item.effet) {
                var inflige = [];
                var octroie = [];
                for (var i in item.effet) {
                    var effetId = item.effet[i];
                    var effet = Etats.get(effetId);
                    if (effet.offensif) inflige.push(effetId);
                    else octroie.push(effetId);
                }
                this.addInfoList("inflige", inflige);
                this.addInfoList("octroie", octroie);
            }
            this.makeZoomEvents();
            return true;
        };

        this.showMonster = function(key, selectSuffixe, refresh) {
            var monster = Glossaire.get(key);
            if (!monster || !monster.name) return false;

            var el = this.el.find(".description");

            if (!refresh) this.initSuffixesDispo(monster, selectSuffixe);

            var monsterName = this.Textes.get(monster.name);
            if (!refresh) el.find("titre").html(monsterName + " ");
            el.find("suffixe#selected, fleche").show();

            var suffixe = el.find("suffixes suffixe:first").attr("id");
            if (monster.baseSuffixe) suffixe = monster.baseSuffixe;
            if (selectSuffixe) suffixe = selectSuffixe;

            if (!refresh) el.find("texte").html(this.Textes.get(monster.texte));

            suffixe = Suffixe.get(suffixe);
            if (monster.sexe == "m") el.find("suffixe#selected").html(this.Textes.get(suffixe.namem));
            else el.find("suffixe#selected").html(this.Textes.get(suffixe.namef));

            el.find("infos").empty();
            this.addInfoTxt(monster.commentaire);
            this.addInfo("vie", monster.vie, suffixe.vie);
            this.addInfo("mana", monster.mana, suffixe.mana);
            this.addInfo("attack", monster.attaque, suffixe.attaque);
            this.addInfo("experienceGain", monster.xp, suffixe.xp);
            this.addInfo("argentGain", monster.argent, suffixe.argent);
            this.addInfoList("competences", monster.abilities);
            this.addInfoList("items", monster.consos);
            this.makeZoomEvents();
            return true;
        };

        this.addInfoTxt = function(infos, next) {
            if (infos == undefined) return;
            var infoDom = $("<info></info>");

            infoDom.html(this.Textes.get(infos));

            if (next) infoDom.append(this.Textes.get(next));

            infoDom.addClass("large");
            infoDom.addClass("texte");
            this.el.find("infos").append(infoDom);
        };
        this.addInfo = function(titre, infos, suffixe, next) {
            if (infos == undefined) return;
            if (suffixe == undefined) suffixe = 1;

            var infoDom = $("<info></info>");

            var titreTexte = "";
            if (titre) titreTexte = "<b>" + this.Textes.get(titre) + " :</b> ";

            if (Array.isArray(infos)) {
                var min = Math.round(infos[0] * suffixe);
                var max = Math.round(infos[1] * suffixe);
                if (min == max) infoDom.html(titreTexte + min);
                else infoDom.html(titreTexte + min + "-" + max);
            }else if(infos >= 0 || infos < 0) infoDom.html(titreTexte + Math.round(infos * suffixe));
            else infoDom.html(titreTexte + infos);

            if (next) infoDom.append(this.Textes.get(next));

            // On enleve 7 pour les balises <b>
            if (infoDom.html().length - 7 > 16) infoDom.addClass("large");
            this.el.find("infos").append(infoDom);
        };

        this.addInfoList = function(titre, infos) {
            if (infos == undefined || infos.length == 0) return;
            var infoDom = $("<infoList></infoList>");
            var texte = "<b>" + this.Textes.get(titre) + " :</b> ";
            for (var i=0; i<infos.length; i++) {
                var info = Items.get(infos[i]);
                if (!info.name) info = Etats.get(infos[i]);
                texte += "<span ref='"+infos[i]+"'>" + this.Textes.get(info.name) + "</span>";
                if (i<infos.length-1) texte += ", ";
            }
            infoDom.html(texte);
            this.el.find("infos").append(infoDom);
        };

        this.list = function() {
            var that = this;
            var letter = this.currentLetter;

            this.el.find(".description").hide();

            this.el.find("marqueur").removeClass("selected");
            this.el.find("marqueur[name='" + letter + "']").addClass("selected");

            this.el.find(".liste propositions").empty();
            var propositions = Glossaire.list(letter, this.Textes);
            propositions = propositions.concat(Items.list(letter, this.Textes));
            propositions = propositions.concat(Etats.list(letter, this.Textes));
            propositions.sort(function(elmt1, elmt2) {
                var elmt1Txt = that.Textes.get(elmt1);
                var elmt2Txt = that.Textes.get(elmt2);
                return elmt1Txt.localeCompare(elmt2Txt);
            });
            var parentDom = this.el.find(".gauche propositions");
            for (var i in propositions) {
                var proposition = propositions[i];
                var propositionDom = $("<proposition></proposition>")
                propositionDom.html(this.Textes.get(proposition));
                propositionDom.attr("id", proposition);
                parentDom.append(propositionDom);
                if (i>=9) parentDom = this.el.find(".droite propositions");
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
            this.el.find(".alphabet marqueur").click(function() {
                var id = parseInt($(this).attr("id"));
                that.currentLetter = that.letters[id];
                that.list();
            });

            this.el.find(".description suffixe#selected, .description fleche").click(function(e) {
                var el = that.el.find(".description");

                if (el.find("suffixes").is(":visible")) el.find("suffixes").hide();
                else {
                    var left = el.find("suffixe#selected").position().left;
                    el.find("suffixes").css({
                        "left" : Utils.toPercent(left, el.find("entete").width()) + "%"
                    });
                    el.find("suffixes").show();
                }
            });
        };

        this.makePropositionEvents = function() {
            var that = this;
            this.el.find(".liste propositions proposition").click(function() {
                var name = $(this).attr("id");
                that.show(name);
            });
            // On ferme la fenetre des suffixes si on clique ailleurs
            this.el.find(".description").click(function(e) {
                var target = $(e.target);
                if (target.is("suffixes, suffixe, fleche")) return;

                var el = that.el.find(".description suffixes");
                if (el.is(":visible")) el.hide();
            });
        };

        this.makeZoomEvents = function() {
            var that = this;


            this.el.find(".description suffixes suffixe").off("click");
            this.el.find(".description suffixes suffixe").click(function(e) {
                that.el.find(".description suffixes").hide();

                var selectSuffixe = $(this).attr("id");
                that.showMonster(that.current, selectSuffixe, true);
            });

            this.el.find(".description span").off("click");
            this.el.find(".description span").click(function() {
                var name = $(this).attr("ref");
                that.show(name);
            });
        };

        this.init(parent);
    };
});