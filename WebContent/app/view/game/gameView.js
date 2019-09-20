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
        "app/view/game/glossaireView",
        "app/view/game/endView"
        ],
function($, _, Utils, PopupUtils, page,
            RecompenseManager, PlayerManager,
            UIView, HistoireView, FightView, GlossaireView, EndView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#app");
			this.parent = parent;
		    this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;

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

            this.histoireView = new HistoireView(this);
            this.fightView = new FightView(this);
            this.glossaireView = new GlossaireView(this);

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
			
			this.mediatheque.refreshMute();
		};

        /**
        * Loop every 5min
        **/
		this.hardLoop = function() {
            if (!this.endGame) {
                this.saveManager.saveInCloud();
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
                    this.saveManager.saveInSession();
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
    		    }
    		    
    		    setTimeout(function() {
    		        if (!window.stopLoop) {
                        that.renderLoop();
                    }
                }, 100);
        	}
        };
        
        this.gameOver = function(gagne) {
        	this.mediatheque.stopAllMusic();
        	var musicName = "";
        	if (gagne) {
        		musicName = "music/victory.ogg";
        		this.saveManager.save("GameComplete", 1);
        		this.kongregateUtils.score("GameComplete", 1);
        	} else {
        		musicName = "music/gameover.ogg";
        		var gameOver = this.saveManager.load("GameOver");
        		this.saveManager.save("GameOver", gameOver+1);
        		this.playerManager.data.life.current = this.playerManager.data.life.max / 2;
        		this.kongregateUtils.score("GameOver", gameOver+1);
        	}
        	this.saveManager.saveInSession();
        	var that = this;
        	setTimeout(function() {
        		that.mediatheque.play(musicName, "", function() {
        			that.mediatheque.play("music/menu.ogg");
        		});
        	}, 200);
        	this.endGame = true;
            this.endView.render(gagne);
        };

        this.fight = function(adversaires, onWin, onFail) {
            this.fightView.fight(adversaires, onWin, onFail);
        };

        this.glossaire = function(key) {
            this.glossaireView.show(key);
        };

        this.makeEvents = function() {
            var that = this;

            //Make Sub events
            this.uiView.makeEvents();

            $(".text", "montant").click(function(e) {
            	e.preventDefault();
            	return true;
            });
            $(".text", "montant").bind('selectstart', function(e){
            	e.preventDefault();
            	return false;
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
//            $("body").contextmenu(function() {
//				return false;
//			});
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
		
		this.init(parent);
	};
});