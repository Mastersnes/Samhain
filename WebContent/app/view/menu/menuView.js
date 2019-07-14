/*global define */
define(["jquery",
        'underscore',
        "app/manager/sceneManager",
        "app/utils/utils",
        "app/utils/popupUtils",
        "app/utils/kongregateUtils",
        "app/data/textes",
        "app/utils/mediatheque",
        "app/manager/saveManager",
        "text!app/template/menu/menu.html",
        "app/view/game/gameView",
        "app/view/menu/optionView",
        "app/view/menu/creditView"], 
function($, _, SceneManager, Utils, PopupUtils, Kongregate, Textes, Mediatheque, SaveManager, page, GameView, OptionView, CreditView) {
	'use strict';

	return function() {
		this.init = function() {
		    this.el = $("#app");
		    
		    $(".text#loading").html(Textes.get("chargement"));
		    
		    this.scene = new SceneManager(this);
		    
            this.mediatheque = new Mediatheque();
            this.mediatheque.load("music/menu.ogg");
            this.kongregateUtils = new Kongregate(Textes);
            this.saveManager = new SaveManager(this.kongregateUtils);
            this.Textes = Textes;
            this.Textes.loadLanguage();
            
            var that = this;
			if (window.location.href.indexOf("kongregate") > -1) {
	            console.log("kongregate Load");
				this.kongregateUtils.load(function() {
	            	that.render();
	            });
			}else {
				console.log("Pas sur kongregate !");
				this.render();
			}
		};

		this.render = function() {
			this.Textes.loadLanguage();
			_.templateSettings.variable = "data";
			var template = _.template(page);
			
			var saveExists = this.saveManager.checkSave();
			
			var templateData = {
					text : Textes,
					saveExists : saveExists
			};
			this.el.html(template(templateData));
			this.kongregateUtils.render();
			
			this.makeEvents();
			
			var that = this;
			$(".app-container").removeClass("bebel");
			this.scene.resize();
			setTimeout(function() {
				that.mediatheque.refreshMute();
				$(".text#loading").fadeOut("slow");
				$(".text#starting").fadeIn("slow");
				$(".preload").empty();
				that.scene.resize();
			}, 1000);
		};
		
		this.makeEvents = function() {
			var that = this;
			$("#new").click(function() {
			    if (that.saveManager.checkSave()) {
					PopupUtils.confirm(Textes, "eraseSave", function() {
				        that.saveManager.eraseSave();
						that.loadGame();
				    }, null, "continuerButton", "cancelButton");
			    }else {
			    	that.loadGame();
			    }
			});
			$("#load").click(function() {
				that.saveManager.loadSave();
			    that.loadGame();
			});
			$("#option").click(function() {
				new OptionView(that, Textes).show();
			});
			$("#credit").click(function() {
				new CreditView(Textes).show();
			});
			
			$("#login").click(function() {
				that.kongregateUtils.login();
			});
			
			$("bouton").hover(function() {
				$(this).find("etoile").addClass("hovered");
			}, function() {
				$(this).find("etoile").removeClass("hovered");
			});
			
			$(".page.bebel").click(function() {
				that.mediatheque.stopAllMusic();
				setTimeout(function() {
					that.mediatheque.play("music/menu.ogg");
					$(".page.bebel").fadeOut("slow", function() {
						$(".page.bebel").remove();
						$(".text#loading").remove();
					});
				}, 100);
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

//			$("body").contextmenu(function() {
//				return false;
//			});
		};
		
		this.loadGame = function() {
			new GameView(this);
		};
		
		this.init();
	};
});