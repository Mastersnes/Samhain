'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/map",
        "app/utils/viewUtils",
        "text!app/template/game/inventaire.html",
        "app/data/items"
        ], function($, Utils, HashMap, ViewUtsils, page, Items){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".inventaire");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;
            this.inventaireOpen = false;

            this.el.hide();
        };

        this.initConsos = function() {
            this.consos = new HashMap();
            var consosAvailables = this.player.get("equipment.conso")
            for (var i in consosAvailables) {
                var consoName = consosAvailables[i];
                var conso = this.consos.get(consoName);
                if (conso) conso++;
                else conso = 1;

                this.consos.put(consoName, conso);
            }
        };

        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes,
                    player : this.player,
                    consos : this.consos
            };
            this.el.html(template(templateData));
            this.makeEvents();
        };

        /**
        * Lance la consultation
        **/
        this.show = function(key, isChange) {
            this.inventaireOpen = true;
            this.initConsos();
            this.render();
            this.el.fadeIn();
            this.refreshStats();
        };

        this.refreshStats = function() {
            this.refreshInfo(this.player.get("life").current, "life");
            this.refreshEtat(this.player.get("debuff"), "debuff");
            this.refreshEtat(this.player.get("buff"), "buff");
            this.refreshInfo(this.player.get("mana").current, "mana", this.player.get("unlockMana"));

            var arme = this.player.arme();
            var bonusArme = "[" + arme.degats[0] + "-" + arme.degats[1] + "]";
            this.refreshInfo(bonusArme, "arme");

            var lifeSteal;
            if (arme.lifeSteal) lifeSteal = "[" + arme.lifeSteal[0] + "-" + arme.lifeSteal[1] + "]";
            this.refreshInfo(lifeSteal, "lifeSteal");

            var manaSteal;
            if (arme.manaSteal) manaSteal = "[" + arme.manaSteal[0] + "-" + arme.manaSteal[1] + "]";
            this.refreshInfo(manaSteal, "manaSteal");

            var bouclier = this.player.bouclier();
            var bonusBouclier = "[" + bouclier.defense[0] + "-" + bouclier.defense[1] + "]";
            this.refreshInfo(bonusBouclier, "bouclier");
        };

        this.refreshInfo = function(info, key, conditionToShow) {
            if (conditionToShow == undefined) {
                conditionToShow = (info != undefined);
            }

            var infoDom = this.el.find("profil info."+key);
            if (conditionToShow) {
                infoDom.show();
                infoDom.find("span").html(info);
            }else infoDom.hide();
        };

        this.refreshEtat = function(etat, key) {
            var etatDom = this.el.find("profil info."+key);
            if (etat) {
                etatDom.show();

                var amount = amount = "[" + etat.vie[0] + "-" + etat.vie[1] + "]";
                if (etat.offensif) amount = "[" + etat.degats[0] + "-" + etat.degats[1] + "]";
                etatDom.find("span.amount").html(amount);
                etatDom.find("span.duree").html(etat.current);
            }else etatDom.hide();
        };

        this.loop = function() {
            if (!this.inventaireOpen) return;
            if (!$("carnet").hasClass("hide")) $("carnet").addClass("hide");
        };

        this.makeEvents = function() {
            var that = this;

            this.el.find("armes element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.el.find("armes case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectArme($(this).attr("id"));
                    that.refreshStats();
                }
            });
            this.el.find("boucliers element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.el.find("boucliers case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectBouclier($(this).attr("id"));
                    that.refreshStats();
                }
            });

            this.el.find("magies element").hover(function() {
                var id = $(this).attr("id");
                var magie = Items.get("magie", id);
                var currentMana = that.player.get("mana.current");

                var html = $(this).html();
                $(this).removeClass("clickable", "interdit");
                if (!magie.offensif) {
                    if (magie.manaCost <= currentMana) {
                        $(this).addClass("clickable");
                        $(this).html("<b>"+html+ "</b>");
                    } else {
                        $(this).addClass("interdit");
                        $(this).html("<s>"+html+ "</s>");
                    }
                }
            }, function() {
                var name = that.Textes.get($(this).attr("id"));
                $(this).html(name);
            });

            this.el.find("consos element").hover(function() {
                var id = $(this).attr("id");
                var item = Items.get("conso", id);

                var html = $(this).html();
                $(this).removeClass("clickable");
                if (!item.offensif) {
                    $(this).addClass("clickable");
                    $(this).html("<b>"+html+ "</b>");
                }
            }, function() {
                var name = that.Textes.get($(this).attr("id"));
                $(this).html(name);
            });

            this.el.find("magies element").click(function() {
                var id = $(this).attr("id");
                var magie = Items.get("magie", id);
                if (!magie.offensif) {
                    that.player.spell(id);
                    that.player.etatsManager.infligeEtats();
                    that.refreshStats();
                }
            });
            this.el.find("consos element").click(function() {
                var id = $(this).attr("id");
                var item = Items.get("conso", id);

//                if (!item.offensif) {
                    that.player.use(id, null)
                    var nb = that.consos.get(id)-1;
                    if (nb <= 0) {
                        that.consos.remove(id);
                        $(this).remove();
                    }else that.consos.put(id, nb);
                    that.player.etatsManager.infligeEtats();
                    that.refreshStats();
//                }
            });

            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.inventaireOpen = false;
                    $("carnet").removeClass("hide");
                    that.el.fadeOut();
                }
            });
        };

        this.init(parent);
    };
});