'use strict';
define(["jquery",
        "app/utils/utils",
        "text!app/template/game/fight.html",
        "app/manager/monsterManager",
        ], function($, Utils, page, MonsterManager){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".fight");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;

            this.monsters = [];
            this.actions = [];
            this.el.hide();
        };

        /**
        * Lance un nouveau combat
        **/
        this.fight = function(adversaires, onWin, onFail) {
            $(".histoire").hide();
            this.el.show();

            this.onWin = onWin;
            this.onFail = onFail;

            this.monsters.length = 0;

            for (var i in adversaires) {
                var adversaire = adversaires[i];
                var suffixe =
                this.monsters.push(new MonsterManager(this, adversaire));
            }

            this.render();
            this.pioche();
        };

        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes,
                    monsters : this.monsters
            };
            this.el.html(template(templateData));

            this.makeEvents();
        };

        /**
        * Relance une pioche
        * RG :
        * On commence avec l'arme (entre 0 et x fois) + les autres items parmis la magie ou les consos
        * Quand on utilise un item ca repioche un item qu'on a et qui ne se trouve pas sur la pioche existante ou l'arme
        **/
        this.pioche = function() {
            var that = this;
            var player = this.player;
            var arme = player.currentArme();
            var soinObj = player.getRandSoin();
            var magies = player.usableMagie();
            var consosDispo = [].concat(player.get("equipment.conso"));

            this.actions.length = 0;
            // Au minimum, on veut l'arme et un objet de soin
            this.actions.push(arme);
            if (soinObj != null) {
                this.actions.push(soinObj);
                consosDispo.splice(consosDispo.indexOf(soinObj), 1);
            }

            for (var magieId in magies) {
                if (this.actions.length < 6)
                    this.actions.push(magies[magieId]);
            }

            while (consosDispo.length > 0 && this.actions.length < 6) {
                var randNumber = Utils.rand(0, consosDispo.length);
                var randConso = consosDispo[randNumber];
                this.actions.push(randConso);
                consosDispo.splice(randNumber, 1);
            }

            this.eraseCurrentPioche();
            this.renderNewPioche();
        };

        this.eraseCurrentPioche = function() {
            this.el.find("action").empty();
            this.el.find("action").attr("state", "erase");

            this.el.find("action").animate({
                "top" : "150%"
            }, "fast");
        };
        this.renderNewPioche = function() {
            var that = this;
            for (var i in this.actions) {
                var action = this.actions[i];
                var actionDom = this.el.find("action[state=erase]:first");
                actionDom.html(this.Textes.get(action));
                actionDom.attr("state", "new");
            }

            this.el.find("action").animate({
                "top" : "0"
            }, "fast", function() {
                that.el.find("action").removeAttr("state");
            });
        };


        this.loop = function() {
            this.refreshMonsters();
            this.refreshActions();
        };

        /**
        * Raffraichit l'etat des monstres
        **/
        this.refreshMonsters = function() {
            for (var i in this.monsters) {
                var monster = this.monsters[i];
                if (monster.get("life").current <= 0)
                    this.el.find("monster#"+i).fadeOut("fast");
                else this.el.find("monster#"+i).show();
            }
        };

        /**
        * Raffraichit l'etat des actions (voir si on garde)
        **/
        this.refreshActions = function() {
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("monster").click(function() {
                var id = $(this).attr("id");
                var monster = that.monsters[id];
                if (monster.get("life").current <= 0) return;

                console.log("monster", monster);
            });
            this.el.find("action").click(function() {
                that.pioche();
            });
        };

        this.init(parent);
    };
});