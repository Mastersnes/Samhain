/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/popupUtils",
        "text!app/template/game/game.html",
        "app/manager/recompenseManager",
        "app/manager/playerManager",
        "app/view/game/uiView",
        "app/view/game/histoireView",
        "app/view/game/fightView",
        "app/view/game/boutiqueView",
        "app/view/game/glossaireView",
        "app/view/game/inventaireView",
        "app/view/game/endView"
        ],
function($, _, Utils, PopupUtils, page,
            RecompenseManager, PlayerManager,
            UIView, HistoireView, FightView, BoutiqueView, GlossaireView, InventaireView, EndView) {
	'use strict';

	return function(parent, didacticiel) {
		this.init = function(parent, didacticiel) {
		    this.el = $("#app");
			this.parent = parent;
		    this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;
			this.easterEggs = 0;

			this.render();
			
			// Manager
			parent.scene.resize();
			this.saveManager = parent.saveManager;

			this.recompenseManager = new RecompenseManager(this);
            this.recompenseManager.reloadSuccess();

            this.playerManager = new PlayerManager(this);

            //subView
            this.uiView = new UIView(this);
            this.uiView.render();

            this.didacticiel = didacticiel;
            this.histoireView = new HistoireView(this, didacticiel);
            this.fightView = new FightView(this);
            this.boutiqueView = new BoutiqueView(this);
            this.glossaireView = new GlossaireView(this);
            this.inventaireView = new InventaireView(this);

            this.endView = new EndView(this);

			if (!this.alreadyLoop) {
			    this.alreadyLoop = true;
                this.makeEvents();
                this.loop();
                this.hardLoop();
                this.renderLoop();
            }
		};
		
		this.resetGame = function() {
			this.endGame = true;
			this.parent.render();
		};

		this.render = function(load) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			var isFullscreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
            (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
            (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
            (document.msFullscreenElement && document.msFullscreenElement !== null);
			if (!isFullscreen) {
				$("fullscreen").removeClass("exit");
			}else {
				$("fullscreen").addClass("exit");
			}
		};

        /**
        * Loop every 5min
        **/
		this.hardLoop = function() {
            if (!this.endGame) {
                if (!this.didacticiel) this.saveManager.saveInCloud();
                var that = this;
                setTimeout(function() {
                    that.hardLoop();
                }, 1*5*1000);
            }
        };

		/**
        * Loop every 1sec
        **/
		this.loop = function() {
		    if (!this.endGame) {
    		    if (!this.pause) {
                    if (!this.didacticiel) this.saveManager.saveInSession();
                    this.playerManager.showNextAmount();
                }
                var that = this;
                setTimeout(function() {
                    that.loop();
                }, 1000);
		    }
        };

        /**
        * Loop every 100ms
        **/
        this.renderLoop = function() {
        	var that = this;
        	if (!this.endGame) {
    		    if (!this.pause) {
        		    this.uiView.loop(this);
        		    this.fightView.loop(this);
        		    this.boutiqueView.loop(this);
        		    this.inventaireView.loop(this);
        		    this.playerManager.showNextAmount();
        		    if (this.easterEggs == 0) {
        		        this.el.find("loupe").removeAttr("style");
        		        this.el.find("loupe").removeClass("easterEggs");
                    }
    		    }
    		    
    		    setTimeout(function() {
    		        if (!window.stopLoop) {
                        that.renderLoop();
                    }
                }, 100);
        	}
        };

        this.gameOver = function(gagne) {
        	if (gagne) {
        	    this.mediatheque.stopAllMusic();
        	    var musicName = "music/victory.ogg";
        		var gameComplete = this.saveManager.load("GameComplete");
                this.saveManager.save("GameComplete", gameComplete+1);
                this.kongregateUtils.score("GameComplete", gameComplete+1);
                var that = this;
//                setTimeout(function() {
//                    that.mediatheque.play(musicName, "", function() {
//                        that.mediatheque.play("music/menu.ogg");
//                    });
//                }, 200);
                this.endGame = true;
                this.endView.render(gagne);
        	} else {
        	    this.playerManager.data.checkpoint = this.playerManager.data.lieu;
        		var gameOver = this.saveManager.load("GameOver");
        		this.saveManager.save("GameOver", gameOver+1);
        		this.kongregateUtils.score("GameOver", gameOver+1);
        		this.histoireView.go("die");
        	}
        	this.saveManager.saveInSession();
        };

        this.fight = function(adversaires, onWin, onFail, textes) {
            this.fightView.fight(adversaires, onWin, onFail, textes);
        };
        this.boutique = function(items, onPurchase, onNoPurchase) {
            this.boutiqueView.open(items, onPurchase, onNoPurchase);
        };
        this.glossaire = function(key) {
            this.glossaireView.show(key);
        };

        this.makeEvents = function() {
            var that = this;

            //Make Sub events
            console.log("Mon premier a un gout de fraise.");
            this.uiView.el.find("fiole.life").click(function(e) {
                if (that.easterEggs == 0) {
                    console.log("Mon second a de la pratique.");
                    that.easterEggs++;
                } else if (that.easterEggs == 3) {
                    console.log("Mon cinquieme est adroit(e).");
                    that.easterEggs++;
                } else that.easterEggs = 0;
            });
            this.uiView.el.find("level picture").click(function(e) {
                if (that.easterEggs == 1) {
                    console.log("Mon troisieme ne fait pas le bonheur.");
                    that.easterEggs++;
                } else that.easterEggs = 0;
            });
            this.uiView.el.find("gold").click(function(e) {
                if (that.easterEggs == 2) {
                    console.log("Mon quatrieme aurait voulu etre premier.");
                    that.easterEggs++;
                } else that.easterEggs = 0;
            });
            $("body").contextmenu(function() {
                if (that.easterEggs == 4) {
                    console.log("Je ne verrais rien sans mon dernier.");
                    that.easterEggs++;
                } else that.easterEggs = 0;
                return false;
            });

            /**
            * Loupe - Glossaire
            **/
            this.el.find("loupe hitbox").hover(function(e) {
                if(that.easterEggs > 5) return;
                that.el.find("loupe").addClass("hover");
            }, function(e) {
                if(that.easterEggs > 5) return;
                that.el.find("loupe").removeClass("hover");
            });
            this.el.find("loupe hitbox").click(function(e) {
                if(that.easterEggs == 5) {
                    that.easterEggs = 6;
                    console.log("Bravo ! Vous l'avez =) !");
                    that.recompenseManager.addSuccess("EasterEggs", true);
                    return
                } else if (that.easterEggs < 5) that.glossaireView.list();

                that.easterEggs = 0;
            });

            /**
            * Inventaire - Carnet
            **/
            this.el.find("carnet hitbox").hover(function(e) {
                that.el.find("carnet").addClass("hover");
            }, function(e) {
                that.el.find("carnet").removeClass("hover");
            });
            this.el.find("carnet hitbox").click(function(e) {
                that.inventaireView.show();
            });

            $("body").mousemove(function(e) {
                if (that.easterEggs == 6) {
                    var loupe = that.el.find("loupe");
                    loupe.addClass("easterEggs");
                    var left = (event.clientX - $(".scene").position().left) - (loupe.width() / 2);
                    var top = event.clientY - (loupe.height() / 2);

                    loupe.css({
                        "left":  left,
                        "top": top
                    });
                }
            });

            $("fullscreen").click(function() {
            	var isFullscreen = Utils.fullscreen();
				if (isFullscreen) {
					$("fullscreen").removeClass("exit");
				}else {
					$("fullscreen").addClass("exit");
				}
			});
            $("mute").click(function() {
            	that.mediatheque.mute("all");
			});
        };

        /**
         * Appel la fonction permettant d'afficher une information
         */
        this.alertPopup = function(texte, callback, noButton) {
        	var that = this;
            PopupUtils.alert(this.Textes, texte, "suivant", function() {
                if (callback) callback();
            }, noButton);
        };
		
		this.init(parent, didacticiel);
	};
});