'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/map",
        "app/utils/viewUtils",
        "text!app/template/game/inventaire.html",
        "app/data/items"
        ], function($, _, Utils, HashMap, ViewUtsils, page, Items){
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
            this.player.arme();
            this.player.bouclier();
            this.render();

            this.mediatheque.playSound("ui/openInventaire.wav");
            this.el.fadeIn();
            this.refreshStats();
        };

        this.refreshStats = function() {
            this.refreshInfo(this.player.get("life").current, "life");
            this.refreshEtat(this.player.get("debuff"), "debuff");
            this.refreshEtat(this.player.get("buff"), "buff");
            this.refreshInfo(this.player.get("mana").current, "mana", this.player.get("unlockMana"));

            var arme = this.player.arme();
            var bonusArme = arme.degats[0] + "-" + arme.degats[1];
            this.refreshInfo(bonusArme, "arme");

            var lifeSteal;
            if (arme.lifeSteal) {
                var baseAttaque = this.player.get("attaque");
                var lifeStealMin = Math.round(Utils.percent(baseAttaque + arme.degats[0], arme.lifeSteal[0]));
                var lifeStealMax = Math.round(Utils.percent(baseAttaque + arme.degats[1], arme.lifeSteal[1]));
                lifeSteal = lifeStealMin + "-" + lifeStealMax;
            }
            this.refreshInfo(lifeSteal, "lifeSteal");

            var manaSteal;
            if (arme.manaSteal) manaSteal = arme.manaSteal[0] + "-" + arme.manaSteal[1] + "%";
            this.refreshInfo(manaSteal, "manaSteal");

            var bouclier = this.player.bouclier();
            var bonusBouclier = bouclier.defense[0] + "-" + bouclier.defense[1];
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

                var amount;
                if (etat.offensif) amount = etat.degats[0] + "-" + etat.degats[1];
                else {
                    var lifeMax = this.player.get("life").max;
                    var vieMin = Math.round(Utils.percent(lifeMax, etat.vie[0]));
                    var vieMax = Math.round(Utils.percent(lifeMax, etat.vie[1]));
                    amount = vieMin + "-" + vieMax;
                }
                etatDom.find("span.amount").html(amount);
                etatDom.find("span.duree").html(etat.current);
            }else etatDom.hide();
        };

        this.loop = function() {
            if (!this.inventaireOpen) return;
            if (!$("carnet").hasClass("hide")) $("carnet").addClass("hide");
        };

        this.refreshConso = function(consoDom) {
            var name = this.Textes.get(consoDom.attr("id"));
            var nb = parseInt(consoDom.attr("nb"));

            if (nb == 1) consoDom.html(name);
            else consoDom.html(name + "(x"+nb+")");
        }
        this.refreshMagie = function(magieDom) {
            var id = magieDom.attr("id");
            var magie = Items.get("magie", id);
            var currentMana = this.player.get("mana.current");

            magieDom.removeClass("clickable");
            magieDom.removeClass("interdit");
            if (!magie.offensif) {
                if (magie.manaCost <= currentMana) magieDom.addClass("clickable");
                else magieDom.addClass("interdit");
            }
        }

        this.makeEvents = function() {
            var that = this;

            this.el.find("armes element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.mediatheque.playSound("ui/crayon.wav");
                    that.el.find("armes case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectArme($(this).attr("id"));
                    that.refreshStats();
                }
            });
            this.el.find("boucliers element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.mediatheque.playSound("ui/crayon.wav");
                    that.el.find("boucliers case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectBouclier($(this).attr("id"));
                    that.refreshStats();
                }
            });

            this.el.find("magies element").hover(function() {
                that.refreshMagie($(this));
            }, function() {
                $(this).removeClass("clickable");
                $(this).removeClass("interdit");
            });

            this.el.find("consos element").hover(function() {
                var id = $(this).attr("id");
                var item = Items.get("conso", id);

                var html = $(this).html();
                $(this).removeClass("clickable");
                if (!item.offensif) {
                    $(this).addClass("clickable");
                }
            }, function() {
                $(this).removeClass("clickable");
            });

            this.el.find("magies element").click(function() {
                var id = $(this).attr("id");
                var magie = Items.get("magie", id);
                if (!magie.offensif) {
                    that.player.spell(id);
                    that.player.etatsManager.infligeEtats();
                    that.refreshStats();
                    that.refreshMagie($(this));
                }
            });
            this.el.find("consos element").click(function() {
                var id = $(this).attr("id");
                var item = Items.get("conso", id);

                if (!item.offensif) {
                    that.player.use(id, null)
                    var nb = that.consos.get(id)-1;
                    if (nb <= 0) {
                        that.consos.remove(id);
                        $(this).remove();
                    }else {
                        that.consos.put(id, nb);
                        $(this).attr("nb", nb);
                        that.refreshConso($(this));
                    }

                    that.player.etatsManager.infligeEtats();
                    that.refreshStats();
                }
            });

            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.inventaireOpen = false;
                    $("carnet").removeClass("hide");
                    that.mediatheque.playSound("ui/closeInventaire.wav");
                    that.el.fadeOut();
                }
            });
        };

        this.init(parent);
    };
});