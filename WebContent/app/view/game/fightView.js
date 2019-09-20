'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/fight.html",
        "app/manager/monsterManager",
        "app/manager/actionManager",
        "app/data/items"
        ], function($, Utils, ViewUtils, page, MonsterManager, ActionManager, Items){
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
            this.player.fightView = this;

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
            this.el.fadeIn();
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
        * Ranime ou ajoute des monstres supplementaires au plateau
        **/
        this.addMonstre = function(monstres, max) {
            if (!max) max = 6;
            if (!Array.isArray(monstres)) monstres = [monstres];
            var aliveMonsters = this.aliveMonsters();
            if (aliveMonsters.length + 1 > max) return;

            var base = this.monsters.length;
            for (var i in monstres) {
                var adversaire = monstres[i];
                var monstre = this.firstDeadMonster(adversaire);
                if (monstre) monstre.restore();
                else this.monsters.push(new MonsterManager(this, adversaire, base + parseInt(i)));
            }
            this.render();
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
            var manaStock = this.player.get("mana").current;
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
                        var actionFound = magies[randNumber];
                        magies.splice(randNumber, 1);
                        var magie = Items.get("magie", actionFound);
                        if (magie.manaCost > manaStock) continue;
                        else manaStock -= magie.manaCost;
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
                ViewUtils.verticalCenter();
            }, 300);
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
                monsterDom.find(".life current").css({
                    "width": percent
                });

                var mana = monster.get("mana");
                if (mana.max) {
                    percent = Utils.toPercent(mana.current, mana.max) + "%";
                    monsterDom.find(".mana current").css({
                        "width": percent
                    });
                }else monsterDom.find(".mana").hide();

                this.refreshMonsterEtats(monster, monsterDom);

                if (life.current <= 0) monsterDom.fadeOut("fast");
                else {
                    allDied = false
                    monsterDom.show();
                }
            }
            if (allDied) this.win();
        };

        this.refreshMonsterEtats = function(monster, monsterDom) {
            var buff = monster.data.buff;
            if (buff) {
                monsterDom.find("etat#buff").attr("type", buff.element);
                monsterDom.find("etat#buff").fadeIn();
            } else {
                monsterDom.find("etat#buff").attr("type", null);
                monsterDom.find("etat#buff").fadeOut();
            }

            var debuff = monster.data.debuff;
            if (debuff) {
                monsterDom.find("etat#debuff").attr("type", debuff.element);
                monsterDom.find("etat#debuff").fadeIn();
            } else {
                monsterDom.find("etat#debuff").attr("type", null);
                monsterDom.find("etat#debuff").fadeOut();
            }
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

        /**
        * Renvoi le premier monstre morts portant le nom indiqué
        **/
        this.firstDeadMonster = function(name) {
            for (var i in this.monsters) {
                var monster = this.monsters[i];
                if (monster.get("life").current <= 0 && monster.name == name)
                    return monster;
            }
            return null;
        };

        /**
        * Renvoi les monstres encore en vie autre que celui indiqué
        **/
        this.otherMonsters = function(monsterExclude) {
            var alive = [];
            for (var i in this.monsters) {
                var monster = this.monsters[i];
                if (monster.get("life").current > 0 && monster != monsterExclude)
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

        this.monstersAttaque = function(blockSound) {
            var that = this;
            var aliveMonsters = this.aliveMonsters();
            this.eraseCurrentPioche();
            this.recursiveAttaque(0, aliveMonsters, blockSound, function() {
                that.pioche();
            });
        };
        this.recursiveAttaque = function(index, aliveMonsters, blockSound, endFunction) {
             if (index >= aliveMonsters.length) return endFunction();
             var that = this;
             var monster = aliveMonsters[index];
             var monsterDom = this.el.find("monster#"+monster.index);

            monsterDom.animate({
                "top" : "15%"
            }, 200, function() {
                monster.launchAttaque(monsterDom, that.player, aliveMonsters, blockSound);

                monsterDom.animate({
                    "top" : "0%"
                }, 200, function() {
                    that.recursiveAttaque(index+1, aliveMonsters, blockSound, endFunction);
                });

            });
        };

        this.win = function() {
            this.endFight();

            var goldEarn = 0;
            var xpEarn = 0;

            for (var i in this.monsters) {
                var adversaire = this.monsters[i];
                goldEarn += adversaire.data.gold;
                xpEarn += adversaire.data.xp;
            }

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