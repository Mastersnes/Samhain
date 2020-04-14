'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/jeuGarde.html"
        ], function($, _, Utils, ViewUtils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".jeuGarde");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;

            this.jeuGardeLaunch = false;
            this.el.hide();
        };

        /**
        * Lance un nouveau jeu de garde
        **/
        this.launch = function(but, onWin, onFail, onAbandon, startMise) {
            this.jeuGardeLaunch = true;
            var that = this;
            $(".histoire").fadeOut();
            $(".boutique").fadeOut();
            $(".fight").fadeOut();

            this.onWin = onWin;
            this.onFail = onFail;
            this.onAbandon = onAbandon;
            this.but = but;
            this.nbWin = 0;

            this.resetGame();

            this.render();

            this.el.fadeIn();
        };

        /**
        * Reinitialise les parametres du jeu de garde
        **/
        this.resetGame = function() {
        };

        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes
            };
            this.el.html(template(templateData));

            this.makeEvents();
        };

        this.loop = function() {
            if (!this.jeuGardeLaunch) return;
        };

        this.makeEvents = function() {
            var that = this;
        };

        this.win = function() {
            this.nbWin++;
            if (this.nbWin >= this.but) {
                this.endJeuGarde();
                this.onWin();
            }else this.resetGame();
        };

        this.fail = function() {
            this.endJeuGarde();
            this.onFail();
        };

        this.abandon = function() {
            this.endJeuGarde();
            this.onAbandon();
        };

        this.endJeuGarde = function() {
            this.jeuGardeLaunch = false;
        };

        this.init(parent);
    };
});