'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/histoire.html",
        "app/data/stories",
        "app/data/stories/gameOver"
        ], function($, _, Utils, ViewUtils, page, Stories, GameOver){
    return function(parent, didacticiel){
        this.init = function(parent, didacticiel) {
        	this.el = $(".histoire");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.recompenseManager = parent.recompenseManager;
            this.player = parent.playerManager;

            this.didacticiel = didacticiel;
            this.alreadyPlayed = [];

            if (didacticiel) this.go("didacticiel-start", true);
            else this.go(this.player.get("lieu"), true);
        };

        this.go = function(newLieuId, firstTime) {
            var newLieu = Stories.get(newLieuId);
            if (!newLieu)  {
                console.log("Erreur - le lieu n'existe pas", newLieuId)
                return;
            }

            var that = this;
            $(".fight").fadeOut();
            $(".boutique").fadeOut();
            $(".quetes").fadeOut();
            $(".jeuGarde").fadeOut();

            $("carnet").removeClass("hide");
            $("loupe").removeClass("hide");
            this.el.fadeIn();

            if (newLieu.before) newLieu.before(this);

            if (newLieu.music) this.playMusic("music/" + newLieu.music);
            else if (firstTime) this.playMusic();

            if (!this.didacticiel) this.player.data.lieu = newLieuId;

            this.currentLieu = newLieu;

        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					lieu : newLieu,
					view : this
			};
			this.el.html(template(templateData));

			setTimeout(function() {
			    that.showActions(function() {that.positionneActions()});
			    Utils.then(ViewUtils.verticalCenter(), 100);
			}, 50);

			this.makeEvents();
        };

        this.playMusic = function(music) {
            var that = this;
            var randMusic = music;

            if (!music) {
                var listMusic = [];
                if (this.alreadyPlayed.length >= this.mediatheque.listStories.length) {
                    this.alreadyPlayed = [];
                }
                for (var i in this.mediatheque.listStories) {
                    var music = this.mediatheque.listStories[i];
                    if (this.alreadyPlayed.indexOf(music) == -1 && this.mediatheque.currentMusic != music) {
                        listMusic.push(music);
                    }
                }
                randMusic = listMusic[Utils.rand(0, listMusic.length)];
            }
            this.alreadyPlayed.push(randMusic);
            this.mediatheque.play(randMusic, null, function() {
                that.playMusic();
            });
        };

        this.positionneActions = function() {
            var nbActions = this.el.find("action").length;
            this.el.find("action").each(function(index, element) {
                if (index < nbActions / 2) $(this).addClass("gauche");
                else $(this).addClass("droite");
            });
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("action").click(function() {
                var id = $(this).attr("id");

                that.player.etatsManager.infligeEtats();
                that.hideActions(function() {
                     var actions = that.currentLieu.actions[id];
                     if (!actions) console.log("Erreur - l'action n'existe pas pour ce lieu", that.currentLieu, id);

                     for (var actionId in actions.action) {
                         var action = actions.action[actionId];
                         if (action.key) that.execute(action.key, action.params);
                         else action(that);
                     }
                });
            });

            this.el.find("texte span").click(function() {
                var key = $(this).attr("key");
                var suffixe = $(this).attr("suffixe");
                that.parent.glossaire(key, suffixe);
            });
        };

        this.hideActions = function(then) {
            this.el.find("action").css({
                "top" : "150%"
            });
            setTimeout(then, 300);
        };

        this.showActions = function(then) {
            this.el.find("action").css({
                "top" : "0%"
            });
            setTimeout(then, 300);
        };

        /**
        * Execute l'action en parametre
        **/
        this.execute = function(action, params) {
            var that = this;
            switch(action) {
                case "restart":
                    this.parent.resetGame();
                    break;
                case "score":
                    var success = params[0];
                    this.recompenseManager.addSuccess(success);
                    break;
                case "go":
                    var newLieu = params[0];
                    this.go(newLieu);
                    break;
                case "gameOver":
                    this.player.restore();
                    var rand = Utils.rand(1, GameOver.length(), true);
                    this.go("gameOver"+rand);
                    break;
                case "restore":
                    this.player.restore();
                    break;
                case "reload":
                    this.go(this.player.data.checkpoint);
                    break;
                case "fight":
                    var adversaires = params[0];
                    var nextLieu = params[1];
                    var failLieu = params[2];
                    var textes = params[3];
                    var regles = params[4];

                    var failFunction = null;
                    if (failLieu) {
                        failFunction = function() {
                            that.go(failLieu);
                        };
                    }
                    this.parent.fight(adversaires, function() {
                        that.go(nextLieu);
                    }, failFunction, textes, regles);
                    break;
                case "hurt":
                    this.hurt(params[0]);
                    break;
                case "gain":
                    this.gain(params);
                    break;
                case "gainOneTime":
                    this.gain(params, true);
                    break;
                case "gainGold":
                    this.gainGold(params[0])
                    break;
                case "perte":
                    for (var i in params) {
                        var item = params[i];
                        this.player.removeEquipment(item);
                    }
                    break;
                case "depense":
                case "perteGold":
                    var amount = params[0];
                    this.player.addGold(-amount);
                    this.player.addAmountChange(-amount, "gold");
                    break;
                case "sound":
                    var sound = params[0];
                    this.mediatheque.playSound(sound + ".ogg");
                    break;
                case "hasItem":
                    var items = params[0];
                    var ifFound = params[1];
                    var ifNotFound = params[2];

                    if (this.player.hasAll(items)) this.go(ifFound);
                    else if(ifNotFound) this.go(ifNotFound);
                    break;
                case "hasNoItem":
                    var items = params[0];
                    var ifNotFound = params[1];
                    var ifFound = params[2];

                    if (this.player.hasNoOne(items)) this.go(ifNotFound);
                    else if(ifFound) this.go(ifFound);
                    break;
                case "heal":
                    var vie = params[0];
                    this.player.addPercentLife(vie);
                    break;
                case "healMG":
                    var mana = params[0];
                    this.player.addMana(mana);
                    break;
                case "upMG":
                    var mana = params[0];
                    this.player.unlockMana(mana);
                    break;
                case "random":
                    var chance = Utils.rand(0, params.length);
                    this.go(params[chance]);
                    break;
                case "boutique":
                    var items = params[0];
                    var nextLieu = params[1];
                    var failLieu = params[2];

                    var failFunction = null;
                    if (failLieu) {
                        failFunction = function() {
                            that.go(failLieu);
                        };
                    }
                    this.parent.boutique(items, function() {
                        that.go(nextLieu);
                    }, failFunction);
                    break;
                case "jeu-garde":
                    var but = params[0];
                    var winLieu = params[1];
                    var startMise = params[2]?params[2]:100;

                    if (this.player.get("gold") < startMise)
                        return this.go("ville-garde-jeu-pauvre");
                    else {
                        this.parent.jeuGarde(
                            but,
                            function() {that.go(winLieu);},
                            function() {that.go("ville-garde-jeu-echec");},
                            function() {that.go("ville-garde-jeu-retour");},
                            startMise
                        );
                    }
                    break;
                case "quetes":
                    this.parent.quetes(function() {
                        that.go("ville-entree-panneau-quete-retour");
                    });
                    break;
                case "step-quete":
                    var amount = params[0];
                    if (amount == undefined) amount = 1;
                    this.player.add("currentQuest.step", amount);
                    break;
                case "end-quete":
                    this.finalizeQuest(params[0])
                    break;
                default:
                    console.log("Erreur, l'action " + action + " n'existe pas.")
                    break;
            }
        };

        this.startQuest = function(quest) {
            this.player.set("currentQuest.name", quest.name);
            this.player.set("currentQuest.step", 0);
            this.go(quest.start);
        };
        this.finalizeQuest = function(percent) {
            this.player.finalizeQuest(percent);
            this.go("ville-entree-retour-quete");
        };

        this.hurt = function(degats) {
            this.player.hurtPercent(degats, true);
            if (this.player.get("life.current") <= 0) {
                this.player.addLife(1);
            }
        };

        this.gain = function(items, oneTime) {
            if (!Array.isArray(items)) items = [items];

            if (!oneTime || this.player.hasNoOne(items)) {
                for (var i in items) {
                    var item = items[i];
                    this.player.addEquipment(item);
                }
            }
        };

        this.gainGold = function(amount) {
            this.player.addGold(amount);
        };

        this.checkActions = function(conditions) {
            var checkOk = true;
            for (var idCondition in conditions) {
                var condition = conditions[idCondition];
                checkOk = checkOk && this.checkAction(condition.key, condition.params);
            }
            return checkOk;
        };

        this.checkAction = function(action, params) {
            switch(action) {
                case "hasNoItem":
                    var items = params;
                    return this.player.hasNoOne(items);
                case "hasItem":
                    var items = params;
                    return this.player.hasAll(items);
                case "hasItemNb":
                    return this.player.countItem(params[0]) == params[1];
                case "hasMG":
                    var amount = params[0];
                    return this.player.get("mana.current") >= amount;
                case "hasGold":
                    var amount = params[0];
                    return this.player.get("gold") >= amount;
                default:
                    return true;
            };
            return true;
        };

        this.init(parent, didacticiel);
    };
});