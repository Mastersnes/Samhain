'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/map",
        "app/utils/viewUtils",
        "text!app/template/game/jeuGarde.html",
        "app/manager/jeuGardeManager"
        ], function($, _, Utils, HashMap, ViewUtils, page, JeuGardeManager){
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
            this.playerData = parent.playerManager;

            this.garde = new JeuGardeManager(this, "garde");
            this.player = new JeuGardeManager(this, "player");

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
            $(".ui").fadeOut();

            this.onWin = onWin;
            this.onFail = onFail;
            this.onAbandon = onAbandon;
            this.but = but;
            this.startMise = startMise!=null?startMise:100;
            this.nbWin = 0;
            this.firstTime = true;

            if (this.but == -1) this.el.find("legende #victoires").hide();
            else {
                this.el.find("legende #victoires span#max").html(this.but);
                this.el.find("legende #victoires").show();
            }

            this.render();
            this.el.find("#accueil-jeu").hide();
            this.el.find("#plateau-jeu").hide();
            this.el.fadeIn();

            this.accueil();
        };

        this.accueil = function() {
            this.gameOver = false;
            this.el.find("#accueil-jeu").fadeIn();
            this.el.find("#plateau-jeu").hide();

            ViewUtils.verticalCenter();

            if (this.firstTime) this.el.find("#accueil-jeu texte").html(this.Textes.get("pokgard-debut"));
            else this.el.find("#accueil-jeu texte").html(this.Textes.get("pokgard-win"));
        };

        this.launchGame = function(isTuto) {
            this.garde.initGame();
            this.player.initGame();

            var that = this;
            Utils.then(function() {
                that.el.find("#accueil-jeu").hide();
                that.el.find("#plateau-jeu").fadeIn();
                that.resetGame(isTuto);
            }, 500);
        };

        /**
        * Reinitialise les parametres du jeu de garde
        **/
        this.resetGame = function(isTuto) {
            this.tuto = -1
            if (isTuto) this.tuto = 0;

            var that = this;
            this.el.find("#plateau-jeu").removeClass("pendingCallback");
            this.centerAlert(false);
            this.refreshVictoires();

            this.alertCallback = null;
            this.gameOver = false;
            this.lockMise = true; this.isPlayerTurn = false;
            this.lockPasser = false; this.lockPiocher = false;
            this.mise = this.startMise; this.total = 0;
            this.pioche = [
                "pomme", "pomme", "pomme", "pomme", "pomme",
                "fromage", "fromage", "fromage", "fromage",
                "potionSante", "potionSante", "potionSante",
                "pokgard-voir-action", "pokgard-voir-action", "pokgard-voir-action", "pokgard-voir-action",
                "pokgard-voler-action", "pokgard-voler-action", "pokgard-voler-action",
                "pokgard-detruire-action", "pokgard-detruire-action"
            ];
            this.garde.reset(); this.player.reset();

            // On lance la premiere mise
            var gardeBegin = Utils.rand(0, 2);
            if (this.tuto == -1 && gardeBegin) {
                this.alert("garde-begin");
                if (this.garde.miser()) this.garde.piocher();
            }

            this.garde.renderActions();
            this.player.renderActions();
            this.playerTurn(gardeBegin == 0);
            this.firstTime = false;
        };

        /**
        * Le tour du joueur est simple, on attends juste qu'il mise une premiere fois
        **/
        this.playerTurn = function(playerBegin, hasMise) {
            this.player.hasMise = hasMise;
            this.isPlayerTurn = true;
            this.lockMise = false;
            this.lockPasser = false;
            this.lockPiocher = false;
            this.player.alreadyPioche  = false;

            this.checkMise(playerBegin);
        };
        this.checkMise = function(playerBegin) {
            if (!this.isPlayerTurn) return;

            if (this.player.getGold() < this.mise) this.lockMise = true;
            if (!this.manageTuto()) {
                if (playerBegin) return this.alert("player-begin");

                if (!this.player.hasMise) {
                    if (this.player.getGold() >= this.mise) this.alert("player-turn");
                    else this.alert("player-impossible");
                }else this.alert("player-turn-2");
            };
        }

        this.gardeTurn = function() {
            var that = this;
            this.alert("garde-turn");
            this.lockMise = true;
            this.isPlayerTurn = false;

            // Le garde mise forcement en premier
            if (this.garde.miser()) {
                Utils.then(function() {
                    that.garde.manageIA();
                }, 300);
            } else {
                this.alert("garde-non-mise");
                Utils.then(function() {
                    that.playerTurn();
                });
            }
        };

        this.manageTuto = function() {
            var that = this;
            if (this.tuto == 0) {
                this.lockMise = true;
                this.lockPasser = true;
                this.centerAlert(true, function() {
                    that.alert(["pokgard-tuto-0", "pokgard-tuto-1", "pokgard-tuto-2", "pokgard-tuto-3"], function() {
                        that.centerAlert(false, function() {
                            that.alert("pokgard-tuto-4");
                            that.lockMise = false;
                            that.tuto = 1;
                        });
                    });
                });
                return true;
            }else if (this.tuto == 1) {
                this.tuto = 2;
                this.lockMise = true;
                this.lockPasser = true;
                this.player.hasMise = false;
                this.centerAlert(true, function() {
                    that.alert(["pokgard-tuto-5", "pokgard-tuto-6", "pokgard-tuto-7", "pokgard-tuto-8"], function() {
                        that.centerAlert(false, function() {
                            that.alert("pokgard-tuto-9");
                            that.player.hasMise = true;
                            that.tuto = 3;
                        });
                    });
                });
                return true;
            }else if (this.tuto == 3) {
                that.tuto = 4;
                this.lockMise = true;
                this.lockPasser = true;
                this.lockPiocher = true;
                this.centerAlert(true, function() {
                    that.alert(["pokgard-tuto-10", "pokgard-tuto-11", "pokgard-tuto-12", "pokgard-tuto-13", "pokgard-tuto-14", "pokgard-tuto-15"], function() {
                        that.centerAlert(false, function() {
                            that.alert("pokgard-tuto-16");
                            that.player.hasMise = true;
                            that.tuto = 5;
                        });
                    });
                });
                return true;
            }else if (this.tuto == 5) {
                that.tuto = 6;
                this.lockMise = true;
                this.lockPasser = true;
                this.centerAlert(true, function() {
                    if (that.saved) {
                        that.alert(["pokgard-tuto-17", "pokgard-tuto-18-2"], function() {
                            that.centerAlert(false, function() {
                                that.lockPasser = false;
                                that.lockPiocher = false;
                                that.tuto = -1;
                                that.restoreState();
                            });
                        });
                    }else {
                        that.alert(["pokgard-tuto-17", "pokgard-tuto-18"], function() {
                            that.centerAlert(false, function() {
                                that.lockMise = false;
                                that.lockPasser = false;
                                that.lockPiocher = false;
                                that.player.hasMise = false;
                                that.checkMise();
                            });
                        });
                    }
                });
                return true;
            }
            return false;
        };

        /**
        * Raffraichissement et rendus
        **/
        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes
            };
            this.el.html(template(templateData));
            ViewUtils.verticalCenter();

            this.el.find("legende #confirm").hide();
            this.el.find("legende #legendes").show();

            this.makeEvents();
        };

        this.loop = function() {
            if (!this.jeuGardeLaunch) return;
            if (!$("carnet").hasClass("hide")) $("carnet").addClass("hide");
            if (!$("loupe").hasClass("hide")) $("loupe").addClass("hide");

            this.refreshActions();
            this.refreshTotal();
            this.refreshMise();

            this.el.find("legende #bourse .val").html(this.player.getGold());
        };

        this.refreshMise = function() {
            if (this.player.firstMise)
                this.el.find("action#miser span#mise").html(this.startMise);
            else
                this.el.find("action#miser span#mise").html(this.mise);
        };
        this.refreshTotal = function() {
            if (!this.total) return this.el.find("total").hide();
            else this.el.find("total").fadeIn();

            this.el.find("total montant").html(this.total);

            var digits = 1;
            if (this.total) digits = Math.floor((Math.log(this.total) / Math.LN10) + 1);
            this.el.find("total montant").attr("digits", digits);

            var stepNumber = 17; var max = 2000;
            var step = Math.ceil((this.total * stepNumber) / max);
            if (step > stepNumber) step = stepNumber;
            this.el.find("total > picture").attr("step", step);
        };

        this.refreshActions = function() {
            if (this.gameOver) {
                this.el.find("#plateau-jeu action:not(.lock)").addClass("lock");
            } else if (this.isPlayerTurn) {
                if (this.pendingAction)
                    this.el.find("#gardeActions action").removeClass("lock");
                else
                    this.el.find("#gardeActions action:not(.lock)").addClass("lock");

                if (this.lockMise) this.el.find("plateau #miser:not(.lock)").addClass("lock");
                else this.el.find("plateau #miser").removeClass("lock");

                if (this.lockPasser) this.el.find("plateau #passer:not(.lock)").addClass("lock");
                else this.el.find("plateau #passer").removeClass("lock");

                if (this.player.hasMise) {
                    this.el.find("#playerActions action").removeClass("lock");

                    if (this.lockPiocher || this.player.length() >= 5)
                        this.el.find("plateau pioche action:not(.lock)").addClass("lock");
                    else
                        this.el.find("plateau pioche action").removeClass("lock");
                }else {
                    // Si il a pas miser, il a pas le droit d'utiliser d'action ou de piocher
                    this.el.find("#playerActions action:not(.lock)").addClass("lock");
                    this.el.find("plateau pioche action:not(.lock)").addClass("lock");
                }
            }else {
                this.el.find("#gardeActions action:not(.lock)").addClass("lock");
                this.el.find("plateau #miser:not(.lock)").addClass("lock");
                this.el.find("plateau #passer:not(.lock)").addClass("lock");
                this.el.find("#playerActions action:not(.lock)").addClass("lock");
                this.el.find("plateau pioche action:not(.lock)").addClass("lock");
            }
        };

        this.refreshVictoires = function() {
            if (this.but == -1 || this.tuto > -1) this.el.find("legende #victoires").hide();
            else {
                this.el.find("legende #victoires").fadeIn();
                this.el.find("legende #victoires span.val").html(this.nbWin);
                this.el.find("legende #victoires span.max").html(this.but);
            }
        };
        this.refreshScore = function() {
            var points = this.player.getPoints();
            this.el.find("legende #score span.val").html(points);
        };

        /**
        * Affiche un message d'information
        **/
        this.alert = function(texte, callback, params) {
            var that = this;
            if (Array.isArray(texte)) {
                if (texte.length == 0) return;
                else if (texte.length > 1) {
                    var firstTexte = texte.splice(0, 1);
                    this.alert(firstTexte[0], function() {
                        that.alert(texte, callback, params);
                    }, params);
                    return;
                }else texte = texte[0];
            }

            texte = this.Textes.get(texte);
            if (!params) params = [];
            for (var i in params) {
                texte = texte.replace("?", params[i]);
            }

            this.el.find("plateau alert texte").html(texte);
            ViewUtils.verticalCenter();

            if (callback) {
                this.alertCallback = callback;
                this.el.find("#plateau-jeu").addClass("pendingCallback");
            }
        };

        this.centerAlert = function(center, then) {
            if (center || center == undefined)
                this.el.find("#plateau-jeu alert:not(.end)").addClass("end");
            else
                this.el.find("#plateau-jeu alert").removeClass("end");

            if (then) {
                Utils.then(function() {
                    then();
                }, 100);
            }
        };

        this.makeEvents = function() {
            var that = this;

            this.el.find("#plateau-jeu").click(function() {
                if (!that.alertCallback) return;
                var callback = that.alertCallback;
                that.alertCallback = null;
                callback();
            });

            this.el.find("action#miser").click(function() {
                if ($(this).hasClass("lock")) return;
                that.player.miser();
                that.checkMise();
            });
            this.el.find("action#passer").click(function() {
                if ($(this).hasClass("lock")) return;
                if (!that.playerTurn) return;
                that.gardeTurn();
            });
            this.el.find("action#piocher").click(function() {
                if ($(this).hasClass("lock")) return;
                $(this).addClass("lock");
                that.player.piocher();
            });

            this.el.find("#playerActions action").click(function() {
                if ($(this).hasClass("lock")) return;
                if ($(this).hasClass("pending")) return;
                if ($(this).attr("type").indexOf("-action") == -1) return;

                that.closePending();
                that.alert("player-use");
                that.pendingAction = that.player.getCarte($(this).attr("id"));
                $(this).addClass("pending");
                $(this).animate({"top" : "20%"}, 300);
            });
            this.el.find("#gardeActions action").click(function() {
                if ($(this).hasClass("lock")) return;
                if (!that.pendingAction) return;

                var actionId = $(this).attr("id");
                that.player.use(that.pendingAction, that.garde.getCarte(actionId));
                that.closePending();
            });

            this.el.contextmenu(function() {
                that.closePending();
                return false;
            });


            this.el.find("info#abandonner").click(function() {
                that.el.find("legende #confirm").show();
                that.el.find("legende #legendes").hide();
            });

            this.el.find("legende #confirm #oui").click(function() {
                that.abandon();
            });
            this.el.find("legende #confirm #oui").hover(function() {
                $(this).find("case").addClass("coche");
            }, function() {
                $(this).find("case").removeClass("coche");
            });

            this.el.find("legende #confirm #non").click(function() {
                that.el.find("legende #confirm").hide();
                that.el.find("legende #legendes").show();
            });
            this.el.find("legende #confirm #non").hover(function() {
                $(this).find("case").addClass("coche");
            }, function() {
                $(this).find("case").removeClass("coche");
            });

            /**
            * Accueil
            **/
            this.el.find("#accueil-jeu action#continuer").click(function() {
                if (that.firstTime) that.launchGame();
                else {
                    that.el.find("#accueil-jeu").hide();
                    that.el.find("#plateau-jeu").fadeIn();
                    that.resetGame();
                }
            });
            this.el.find("#accueil-jeu action#partir").click(function() {
                that.abandon();
            });
            this.el.find("#accueil-jeu action#regles").click(function() {
                if (that.firstTime) that.launchGame(true);
                else {
                    that.el.find("#accueil-jeu").hide();
                    that.el.find("#plateau-jeu").fadeIn();
                    that.resetGame(true);
                }
            });
            this.el.find("info#regles").click(function() {
                if (that.tuto > -1) return;
                that.saveState();
                that.resetGame(true);
            });
        };

        this.saveState = function() {
            this.saved = {
                "pioche" : this.pioche,
                "mise" : this.mise,
                "total" : this.total,
                "player" : {
                    "main" : this.player.main,
                    "hasMise" : this.player.hasMise,
                },
                "garde" : {
                    "main" : this.garde.main,
                    "gold" : this.garde.gold
                },
                "lockMise" : this.lockMise,
                "isPlayerTurn" : this.isPlayerTurn
            };
        };
        this.restoreState = function() {
            this.pioche = this.saved.pioche;
            this.mise = this.saved.mise;
            this.total = this.saved.total;
            this.player.main = this.saved.player.main;
            this.garde.main = this.saved.garde.main;
            this.garde.gold = this.saved.garde.gold;
            this.lockMise = this.saved.lockMise;
            this.isPlayerTurn = this.saved.isPlayerTurn;

            var that = this;
            Utils.then(function() {
                that.player.renderActions();
                that.garde.renderActions();
                if (that.isPlayerTurn) that.playerTurn(false, that.saved.player.hasMise);
                else that.gardeTurn();
            }, 300);
        };

        this.closePending = function() {
            if (!this.pendingAction) return;
            var actionId = this.pendingAction.id;
            var actionDom = this.el.find("#playerActions action[id='"+actionId+"']");
            $(actionDom).animate({"top" : "0"}, 300);
            $(actionDom).removeClass("pending");
            this.pendingAction = null;
            this.checkMise();
        };

        /**
        * Conditions de victoires ou d'echec
        **/
        this.checkGameOver = function() {
            var that = this;
            if (this.player.length() == 5 || this.garde.length() == 5) {
                this.gameOver = true;
                this.garde.montre();
                var playerPoints = this.player.getPoints();
                var gardePoints = this.garde.getPoints();

                Utils.then(function() {
                    that.centerAlert(true, function() {
                        if (playerPoints > gardePoints) {
                            that.nbWin++;
                            that.player.addGold(that.total);
                            that.total = 0;
                            that.alert("player-win", function() {
                                if (that.but != -1 && that.nbWin >= that.but) {
                                    that.endJeuGarde();
                                    that.onWin();
                                }else that.accueil();
                            });
                        } else if (gardePoints > playerPoints) {
                            that.garde.addGold(that.total);
                            that.total = 0;
                            that.alert("player-lose", function() {
                                that.fail();
                            }, [playerPoints, gardePoints]);
                        } else that.alert("match-nul", function() {
                            if (that.player.getGold() < that.startMise)
                                that.fail();
                            else that.resetGame();
                        });
                    });
                });

                return true;
            }else return false;
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
            $(".ui").fadeIn();
            $("carnet").removeClass("hide");
            $("loupe").removeClass("hide");
        };

        this.init(parent);
    };
});