'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/fight.html",
        "app/manager/monsterManager",
        "app/manager/actionManager"
        ], function($, Utils, ViewUtils, page, MonsterManager, ActionManager){
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
            this.fightLaunch = false;
            this.el.hide();
        };

        /**
        * Lance un nouveau combat
        **/
        this.fight = function(adversaires, onWin, onFail) {
            this.fightLaunch = true;
            var that = this;
            $(".histoire").fadeOut();
            this.el.fadeIn();

            this.onWin = onWin;
            this.onFail = onFail;
            if (!onFail) this.onFail = function() {
                that.parent.gameOver();
            };

            this.monsters.length = 0;
            this.actions.length = 0;

            for (var i in adversaires) {
                var adversaire = adversaires[i];
                this.monsters.push(new MonsterManager(this, adversaire, i));
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

        this.pioche = function() {
            var PIOCHE_MAX = 5;

            var that = this;
            var player = this.player;
            var arme = player.currentArme();
            var bouclier = player.currentBouclier();
            var magies = player.usableMagie();
            var consosDispo = [].concat(player.get("equipment.conso"));

            this.actions.length = 0;

            var bouclierFound = false;
            while (this.actions.length < PIOCHE_MAX) {
                var actionsPossibles = ["arme", "bouclier"];
                if (magies.length) actionsPossibles.push("magie");
                if (consosDispo.length) actionsPossibles.push("conso");

                var randNumber = Utils.rand(0, actionsPossibles.length);
                var randType = actionsPossibles[randNumber];

                if (this.actions.length == PIOCHE_MAX-1 && !bouclierFound) {
                    // On oblige d'avoir au moins un bouclier pour repiocher
                    randType = "bouclier";
                }

                var actionFound;
                switch (randType) {
                    case "arme":
                        actionFound = arme;
                        break;
                    case "bouclier":
                        bouclierFound = true;
                        actionFound = bouclier;
                        break;
                    case "magie":
                        if (!magies.length) continue;
                        var randNumber = Utils.rand(0, magies.length);
                        actionFound = magies[randNumber];
                        magies.splice(randNumber, 1);
                        break;
                    case "conso":
                        if (!consosDispo.length) continue;
                        var randNumber = Utils.rand(0, consosDispo.length);
                        actionFound = consosDispo[randNumber];
                        consosDispo.splice(randNumber, 1);
                        break;
                }
                this.actions.push(new ActionManager(this, actionFound));
            }

            this.eraseCurrentPioche();
            setTimeout(function() {
                that.renderNewPioche();
                ViewUtils.verticalCenter();            }, 300);
        };

        this.eraseCurrentPioche = function() {
            this.el.find("action").attr("state", "erase");
        };
        this.renderNewPioche = function() {
            var that = this;
            this.el.find("action name").empty();
            for (var i in this.actions) {
                var action = this.actions[i];
                var actionDom = this.el.find("action:nth("+i+")");
                actionDom.find("name").html(this.Textes.get(action.name + "-action"));
                actionDom.attr("state", "new");
                actionDom.attr("id", i);
                actionDom.attr("type", action.name);
            }
            this.el.find("action").removeAttr("state");
        };


        this.loop = function() {
            if (!this.fightLaunch) return;

            if (this.player.get("life.current") <= 0) {
                this.fail();
            }else {
                this.refreshMonsters();
                this.refreshActions();
            }
        };

        /**
        * Raffraichit l'etat des monstres
        **/
        this.refreshMonsters = function() {
            var allDied = true;
            for (var i in this.monsters) {
                var monster = this.monsters[i];
                var monsterDom = this.el.find("monster#"+i);

                monsterDom.find("name").html(monster.completeName());

                var life = monster.get("life");
                var percent = Utils.toPercent(life.current, life.max) + "%";
                monsterDom.find("life current").css({
                    "width": percent
                });

                if (life.current <= 0) monsterDom.fadeOut("fast");
                else {
                    allDied = false
                    monsterDom.show();
                }
            }
            if (allDied) this.win();
        };

        /**
        * Raffraichit l'etat des actions
        **/
        this.refreshActions = function() {
            for (var i in this.actions) {
                var action = this.actions[i];
                var actionDom = this.el.find("action:nth("+i+")");

                var domState = actionDom.attr("state");
                if (action.state) actionDom.attr("state", action.state);
                else if (domState == "used" || domState == "pending") {
                    actionDom.removeAttr("state");
                }

                actionDom.find("name").html(this.Textes.get(action.name + "-action"));
            }
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("monster").click(function() {
                if (!that.pendingAction) return;
                var actionDom = that.pendingAction;
                var id = $(this).attr("id");
                var monster = that.monsters[id];
                if (monster.get("life").current <= 0) return;

                that.pendingAction.useOn(monster);
            });
            this.el.find("monster").hover(function() {
                if (!that.pendingAction) return;
                $(this).addClass("actif");
            }, function() {
                $(this).removeClass("actif");
            });
            this.el.find("action").click(function() {
                if ($(this).attr("state")) return;
                var actionId = $(this).attr("id");
                var action = that.actions[actionId];
                if (action.state) return;

                that.closePending();
                action.click();
            });
            this.el.contextmenu(function() {
                that.closePending();
                return false;
            });
        };

        /**
        * Renvoi les monstres encore en vie
        **/
        this.aliveMonsters = function() {
            var alive = [];
            for (var i in this.monsters) {
                var monster = this.monsters[i];
                if (monster.get("life").current > 0)
                    alive.push(monster);
            }
            return alive;
        };

        this.setPending = function(action) {
            if (!action) return;
            this.pendingAction = action;
            this.pendingAction.state = "pending";
            this.showCiblage();
        };
        this.closePending = function() {
            if (!this.pendingAction) return;
            this.pendingAction.state = null;
            this.pendingAction = null;
            this.closeCiblage();
        };

        this.showCiblage = function() {
            this.el.find("cible").fadeIn();
        };
        this.closeCiblage = function() {
            this.el.find("cible").fadeOut();
        };

        /**
        * Joue les animations de degats
        **/
        this.playAnim = function(cibles, anim) {
            var ciblesDom = $("");
            for (var i in cibles) {
                var cible = cibles[i];
                var index = cible.index;
                ciblesDom = ciblesDom.add("monster#"+index+" anim");
            }

            ciblesDom.addClass(anim);
            ciblesDom.fadeIn(200, function() {
                ciblesDom.fadeOut(500, function() {
                    ciblesDom.removeClass(anim);
                });
            });
        };

        this.win = function() {
            this.endFight();

            var goldEarn = 0;
            var xpEarn = 0;

            for (var i in this.monsters) {
                var adversaire = this.monsters[i];
                console.log("adversaire vaincu", adversaire);
                goldEarn += adversaire.data.gold;
                xpEarn += adversaire.data.xp;
            }

            console.log("gain total", goldEarn, xpEarn);

            this.player.addGold(goldEarn);
            this.player.addXp(xpEarn);

            this.onWin();
        };

        this.fail = function() {
            this.endFight();
            this.onFail();
        };

        this.endFight = function() {
            this.fightLaunch = false;
        };

        this.init(parent);
    };
});