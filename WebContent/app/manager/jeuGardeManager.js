/*global define */
define(["jquery",
        'underscore',
        "app/utils/viewUtils",
        "app/utils/utils"],
function($, _, ViewUtils, Utils) {
	'use strict';

	return function(parent, type) {
		this.init = function(parent, type) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.playerData = parent.playerData;
			this.type = type;
		};

		/**
		* Initialisation du jeu
		**/
		this.initGame = function() {
            this.gold = 2000;
			this.clearMain();
			this.renderActions();
		};
		this.reset = function() {
		    this.clearMain();
		    this.firstMise = true;

		    if (this.type == "garde") {
		        if (this.parent.tuto > -1) this.ia = 1;
		        else this.ia = Utils.rand(0, 5);
		    }
		};
		this.clearMain = function() {
            this.main = {
                "carte-0" : null,
                "carte-1" : null,
                "carte-2" : null,
                "carte-3" : null,
                "carte-4" : null,
            };
        };

        /**
        * Getter / Setter
        **/
        this.getGold = function() {
            if (this.type == "garde" || this.parent.tuto > -1) {
                return this.gold;
            } else return this.playerData.get("gold");
        };
        this.addGold = function(amount) {
            if (this.type == "garde" || this.parent.tuto > -1) {
                this.gold += amount;
            } else this.playerData.addGold(amount);
        };
        this.getFirstAction = function() {
            for (var i in this.main) {
                var carte = this.main[i];
                if (!carte) continue;
                if (carte.name.indexOf("-action") > -1) {
                    return carte;
                }
            }
        };
        this.getCarte = function(carteId) {
            return this.main[carteId];
        };
        this.getPoints = function() {
            var points = 0
            for (var i in this.main) {
                var carte = this.main[i];
                if (!carte) continue;
                if (carte.name == "pomme") points++;
                if (carte.name == "fromage") points+=2;
                if (carte.name == "potionSante") points+=3;
            }
            return points;
        };
        this.getRandCarte = function() {
            var first;
            for (var i in this.main) {
                var carte = this.main[i];
                if (!carte) continue;
                if (Utils.rand(0, 2)) return carte;
            }
            return this.getFirstCarte();
        };
        this.getFirstCarte = function() {
            for (var i in this.main) {
                var carte = this.main[i];
                if (carte) return carte;
            }
        };
        this.length = function() {
            var l = 0;
            for (var i in this.main) {
                if (this.main[i]) l++;
            }
            return l;
        };

        this.add = function(name, visible, then) {
            var result = false;
            for (var i in this.main) {
                if (!this.main[i]) {
                    this.main[i] = {
                        "id" : i,
                        "name" : name,
                        "visible" : visible
                    };
                    result = true;
                    break;
                }
            }

            var that = this;
            Utils.then(function() {
                that.renderActions();
                if (then) then();
            }, 300);

            return result;
        };
        this.remove = function(actionToRemove, then) {
            for (var i in this.main) {
                if (i == actionToRemove.id) {
                    this.main[i] = null;
                    break;
                }
            }

            var that = this;
            Utils.then(function() {
                that.renderActions();
                if (then) then();
            }, 300);
        };

        /**
        * Actions
        **/
        this.miser = function() {
            var type = this.type;
            var mise = this.parent.mise;
            if (this.firstMise) mise = this.parent.startMise;

            if (this.getGold() < mise) {
                this.parent.checkMise();
                return false;
            }
            if (type == "garde") {
                if (this.parent.isPlayerTurn) return false;
                this.parent.alert("garde-mise", null, [mise]);
            }else {
                if (!this.parent.isPlayerTurn) return false;
                if (this.parent.lockMise) return false;
                this.parent.alert("player-turn-2");
            }

            this.addGold(-mise);
            this.parent.total += mise;
            if (this.firstMise) this.parent.mise = 1;
            else this.parent.mise += 2;

            this.firstMise = false;
            this.hasMise = true;
            this.parent.checkMise();
            return true;
        };

        this.piocher = function() {
            if (this.type != "garde") {
                if (this.alreadyPioche) {
                    console.log("Erreur, vous avez deja pioché");
                    return false;
                }
                if (!this.hasMise) {
                    console.log("Erreur, Impossible de piocher, le joueur n'a pas misé.");
                    return false;
                }
                if (!this.parent.isPlayerTurn) {
                    console.log("Erreur, Impossible de piocher, ce n'est pas votre tour");
                    return false;
                }
            }

            this.alreadyPioche = true;

            var that = this;
            var pioche = this.parent.pioche;

            var randId;
            if (this.parent.tuto == 3) {
                if (this.type != "garde") randId = this.parent.pioche.indexOf("pokgard-voir-action");
                else randId = this.parent.pioche.indexOf("pomme");
            } else randId = Utils.rand(0, this.parent.pioche.length);

            var randAction = this.parent.pioche.splice(randId, 1)[0];

            if (this.length() < 5) this.add(randAction);
            else return false;

            if (!this.parent.checkGameOver()) {
                Utils.then(function() {
                    if (that.type == "garde") that.parent.playerTurn();
                    else that.parent.gardeTurn();
                });
            }

            return true;
        };
        this.use = function(action, cible, then) {
            if (!action || action.name.indexOf("-action") == -1 || action.used) {
                if (then) then();
                return false;
            }
            action.used = true;

            var that = this;

            var adversaire = this.parent.garde;
            if (this.type == "garde") {
                var actionName = this.Textes.get(action.name);
                this.parent.alert("garde-use", null, [actionName]);
                adversaire = this.parent.player;
                cible = this.parent.player.getRandCarte();
            }else if (!cible) {
                if (!then) then();
                return false;
            }

            this.remove(action, function() {
                Utils.then(function() {
                    switch(action.name) {
                        case "pokgard-voir-action":
                            if (!that.parent.isPlayerTurn) {
                                if (then) then();
                                break;
                            }
                            cible.visible = true;
                            adversaire.renderActions();
                            if (then) then();
                            break;
                        case "pokgard-voler-action":
                            adversaire.remove(cible);
                            that.add(cible.name, true, function() {
                                if (then) then();
                            });
                            break;
                        case "pokgard-detruire-action":
                            adversaire.remove(cible, function() {
                                if (then) then();
                            });
                            break;
                        default:
                            if (then) then();
                            break;
                    }
                }, 300);
            });

            this.parent.closePending();
        };
        this.recursiveUse = function(id, callbackFinal) {
            var that = this;
            if (id < 5) {
                this.use(this.main["carte-"+id], null, function() {
                    that.recursiveUse(id+1, callbackFinal);
                });
            }else Utils.then(callbackFinal);
        };

        this.montre = function() {
            for (var i in this.main) {
                var carte = this.main[i];
                if (carte) carte.visible = true;
            }
            var that = this;
            Utils.then(function() {
                that.renderActions();
            }, 300);
        };

        /**
        * Render
        **/
        this.renderActions = function() {
            var that = this;
            var el = this.parent.el;

            var dom = el.find("#playerActions");
            var cartes = this.main;
            var top = "150%";
            if (this.type == "garde") {
                dom = el.find("#gardeActions");
                top = "-150%";
            }

            dom.find("action").attr("vide", "vide");
            for (var i in cartes) {
                if (!cartes[i]) continue;

                var carte = cartes[i];
                var elmt = dom.find("action[id='"+i+"']");
                $(elmt).removeAttr("vide");
                if (that.type == "garde" && !carte.visible) {
                    $(elmt).find("name").html("???");
                    $(elmt).attr("type", "");
                }else {
                    $(elmt).find("name").html(that.Textes.get(carte.name));
                    $(elmt).attr("type", carte.name);
                }
                $(elmt).animate({"top" : "0"}, 300);
            }
            Utils.then(function() {
                dom.find("action[vide]").each(function(idx, elmt) {
                    $(elmt).animate({"top" : top}, 300, function() {
                        $(elmt).find("name").html("");
                        $(elmt).attr("type", "");
                    });
                });
                ViewUtils.verticalCenter();
            }, 100);

            if (this.type != "garde") this.parent.refreshScore();
        };

        /**
        * IA
        **/
        this.manageIA = function() {
            var that = this;
            switch(this.ia) {
                // Garde gourmand impatient : Mise de nouveau, puis pioche
                case 0:
                    if (Utils.rand(0, 2)) this.miser();
                // Garde Impatient simple : Pioche simplement
                case 1:
                    this.piocher();
                    break;
                // Garde gourmand rapide : Mise de nouveau, utilise sa premiere action puis pioche
                case 2:
                    if (Utils.rand(0, 2)) this.miser();
                // Garde Rapide simple : utilise sa premiere action puis pioche
                case 3:
                    this.use(this.getFirstAction(),  null, function() {
                        that.piocher();
                    });
                    break;
                // Garde gourmand malin : Mise de nouveau, utilise toute ses actions puis pioche
                case 4:
                    if (Utils.rand(0, 2)) this.miser();
                // Garde Malin simple : utilise toute ses actions puis pioche
                case 5:
                    this.recursiveUse(0, function() {
                        that.piocher();
                    });
                    break;
            }
        };

		this.init(parent, type);
	};
});