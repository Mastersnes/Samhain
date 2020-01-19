'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "app/utils/map",
        "text!app/template/game/boutique.html",
        "app/data/items"
        ], function($, Utils, ViewUtils, HashMap, page, Items){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".boutique");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;

            this.itemsAvailable = [];
            this.items = new HashMap();
            this.purchase = [];

            this.boutiqueOpen = false;
            this.el.hide();
        };

        /**
        * Ouvre la boutique
        **/
        this.open = function(items, onPurchase, onNoPurchase) {
            this.boutiqueOpen = true;
            $(".histoire").fadeOut();
            $(".fight").fadeOut();

            this.onPurchase = onPurchase;
            this.onNoPurchase = onNoPurchase;
            this.itemsAvailable = items;
            this.purchase = [];

            this.acheter();
        };

        this.acheter = function() {
            this.items.clear();
            for (var i in this.itemsAvailable) {
                var item = this.itemsAvailable[i];
                this.items.put(item, Items.get(item));
            }

            this.render("achat");
            this.el.fadeIn();
        };
        this.vendre = function() {
            this.items.clear();

            this.addItemsVente(this.player.get("equipment.arme"));
            this.addItemsVente(this.player.get("equipment.bouclier"));
            this.addItemsVente(this.player.get("equipment.magie"));
            this.addItemsVente(this.player.get("equipment.conso"));

            this.render("vente");
            this.refresh();

            this.el.fadeIn();
        };

        this.addItemsVente = function(itemsAvailable) {
            for (var i in itemsAvailable) {
                var itemName = itemsAvailable[i];
                var item = this.items.get(itemName);
                if (item) {
                    item.nb++;
                    this.items.put(itemName, item);
                }else {
                    var item = Items.get(itemName);
                    if (item.price) {
                        item.price = Math.round(item.price * 0.5);
                        item.nb = 1;
                        this.items.put(itemName, item);
                    }
                }
            }
        };

        this.render = function(mode) {
            this.mode = mode;
            var that = this;
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes,
                    items : this.items,
                    mode : this.mode
            };
            this.el.html(template(templateData));
            ViewUtils.verticalCenter();

            setTimeout(function() {
                that.showActions();
            }, 50);
            this.makeEvents();
        };

        this.loop = function() {
            if (!this.boutiqueOpen) return;
            if (!$("carnet").hasClass("hide")) $("carnet").addClass("hide");
        };
        this.refresh = function() {
            if (!this.boutiqueOpen) return;

            if (this.mode = "vente") {
                if (this.el.find(".itemsContainer actions").children().length == 0) {
                    this.el.find(".itemsContainer").hide();
                    this.el.find("storyContainer").show();
                }else {
                    this.el.find(".itemsContainer").show();
                    this.el.find("storyContainer").hide();
                }
            }
        };

        /**
        * Vend et raffraichit l'etat de la boutique
        **/
        this.sellAndRefresh = function(itemToRemove) {
            var item = this.items.get(itemToRemove);
            item.nb--;

            var itemDom = this.el.find(".itemsContainer #"+itemToRemove);
            if (item.nb <= 0) {
                this.items.remove(itemToRemove);
                itemDom.remove();
            }else {
                this.items.put(itemToRemove, item);
                itemDom.find("quantity amount").html("x" + item.nb);
                if (item.nb == 1) itemDom.find("quantity amount").hide();
            }

            this.refresh();
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("#acheter").click(function() {
                that.hideActions(function() {
                    that.acheter();
                });
            });
            this.el.find("#vendre").click(function() {
                that.hideActions(function() {
                    that.vendre();
                });
            });
            this.el.find("#quitter").click(function() {
                that.hideActions(function() {
                    that.close();
                });
            });
            this.el.find(".itemsContainer action").click(function() {
                var itemId = $(this).attr("id");
                var operate = false;
                if (that.mode == "achat") operate = that.player.achete(itemId);
                else if (that.player.vend(itemId)) {
                    operate = true;
                    that.sellAndRefresh(itemId);
                }
                if (operate) that.purchase.push(itemId);
            });
        };

        this.showActions = function(then) {
            var that = this;
            this.el.find("action").css({
                "top" : "0%"
            });
            setTimeout(function() {
                that.el.find(".itemsContainer").css("overflow", "auto");
                if (then) then();
            }, 300);
        };
        this.hideActions = function(then) {
            this.el.find(".itemsContainer").removeAttr("style");
            this.el.find("action").css({
                "top" : "150%"
            });
            setTimeout(then, 300);
        };

        this.close = function() {
            this.boutiqueOpen = false;
            if (this.onNoPurchase && this.purchase.length == 0) {
                this.onNoPurchase();
            } else this.onPurchase();
        };

        this.init(parent);
    };
});