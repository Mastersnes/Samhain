'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "app/utils/map",
        "text!app/template/game/quetes.html",
        "app/data/quetes"
        ], function($, _, Utils, ViewUtils, HashMap, page, Quetes){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".quetes");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;

            this.quetesOpen = false;
            this.el.hide();
        };

        /**
        * Ouvre le panneau des quetes
        **/
        this.open = function(onReturn) {
            this.quetesOpen = true;
            this.onReturn = onReturn;
            $(".histoire").fadeOut();
            $(".fight").fadeOut();
            $(".jeuGarde").fadeOut();
            $(".boutique").fadeOut();

            this.list();
            this.el.fadeIn();
        };

        /**
        * Liste les quetes dispo
        **/
        this.list = function() {
            var that = this;
            this.quetes = Quetes.list(this.player);
            this.render();

            this.el.find(".actionsContainer #quitter").show();
            this.el.find(".actionsContainer #accepter").hide();
            this.el.find(".actionsContainer #retour").hide();
            this.el.find("storyContainer#details").hide();

            this.el.find("storyContainer#nothing").fadeIn();
            this.el.find(".quetesContainer").fadeIn();

            ViewUtils.verticalCenter();
            Utils.then(function() {
                that.showActions();
            }, 50);
        };

        this.details = function() {
            var that = this;
            var quete = this.currentQuete;
            var detailsDom = this.el.find("storyContainer#details");

            detailsDom.find("titre").html(this.Textes.get(quete.name));

            var textesDom = detailsDom.find("textes");
            textesDom.empty();
            for (var i in quete.description) {
                var texte = quete.description[i];
                var texteDom = $("<texte></texte>");
                texteDom.html(this.Textes.get(texte));
                textesDom.append(texteDom);
            }

            detailsDom.find("#recompense .val").html(quete.price);
            detailsDom.find("#difficulte .val").html(this.Textes.get(quete.difficulty));

            this.el.find(".actionsContainer #quitter").hide();
            this.el.find(".actionsContainer #accepter").show();
            this.el.find(".actionsContainer #retour").show();
            this.el.find("storyContainer#details").fadeIn();

            this.el.find("storyContainer#nothing").hide();
            this.el.find(".quetesContainer").hide();

            ViewUtils.verticalCenter();
            Utils.then(function() {
                that.showActions();
            }, 50);
        };

        this.render = function() {
            var that = this;
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes,
                    quetes : this.quetes
            };
            this.el.html(template(templateData));
            this.makeEvents();
        };

        this.loop = function() {
            if (!this.quetesOpen) return;
            if (!$("carnet").hasClass("hide")) $("carnet").addClass("hide");
            if (!$("loupe").hasClass("hide")) $("loupe").addClass("hide");
        };

        this.showActions = function(then) {
            var that = this;
            this.el.find("action").css({
                "top" : "0%"
            });

            Utils.then(function() {
                that.el.find(".quetesContainer").css("overflow", "auto");
                if (then) then();
            }, 500);
        };
        this.hideActions = function(then) {
            this.el.find(".quetesContainer").removeAttr("style");
            this.el.find("action").css({
                "top" : "150%"
            });
            this.el.find("storyContainer#details").fadeOut();

            Utils.then(function() {
                if (then) then();
            }, 500);
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find(".quetesContainer action").click(function() {
                var id = parseInt($(this).attr("id"));
                var quete = that.quetes[id];
                if (!quete) return;
                that.hideActions(function() {
                    that.currentQuete = quete;
                    that.details();
                });
            });
            this.el.find("#quitter").click(function() {
                that.hideActions(function() {
                    that.close();
                    that.onReturn();
                });
            });
            this.el.find("#accepter").click(function() {
                that.hideActions(function() {
                    that.close();
                    that.parent.histoireView.startQuest(that.currentQuete);
                });
            });
            this.el.find("#retour").click(function() {
                console.log("Retour");
                that.hideActions(function() {
                    that.currentQuete = null;
                    that.list();
                });
            });
        };

        this.close = function() {
            this.quetesOpen = false;
        };

        this.init(parent);
    };
});