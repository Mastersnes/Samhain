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

            this.initConsos();
            this.render();
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
            this.el.fadeIn();
        };

        this.makeEvents = function() {
            var that = this;

            this.el.find("armes element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.el.find("armes case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectArme($(this).attr("id"));
                }
            });
            this.el.find("boucliers element").click(function() {
                var coche = $(this).find("case");
                if (!coche.hasClass("coche")) {
                    that.el.find("boucliers case").removeClass("coche");
                    coche.addClass("coche");
                    that.player.selectBouclier($(this).attr("id"));
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
                if (!magie.offensif) that.player.spell(id);
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
                    }else that.consos.put(id, nb);
                }
            });

            this.el.find("close, contour").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) that.el.fadeOut();
            });
        };

        this.init(parent);
    };
});