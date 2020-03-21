'use strict';
define(["jquery",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/game/histoire.html",
        "app/data/stories",
        "app/data/stories/gameOver"
        ], function($, Utils, ViewUtils, page, Stories, GameOver){
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

            if (didacticiel) this.go("didacticiel-start");
            else this.go(this.player.get("lieu"));
        };

        this.go = function(newLieuId, noSave) {
            var newLieu = Stories.get(newLieuId);
            if (!newLieu)  {
                console.log("Erreur - le lieu n'existe pas", newLieuId)
                return;
            }

            var that = this;
            $(".fight").fadeOut();
            $(".boutique").fadeOut();

            $("carnet").removeClass("hide");
            $("loupe").removeClass("hide");
            this.el.fadeIn();

            if (newLieu.before) newLieu.before(this);
            if (newLieu.music) {
                this.playMusic("music/" + newLieu.music);
            }

            if (this.didacticiel) noSave = true;
            if (!noSave) this.player.data.lieu = newLieuId;
            this.currentLieu = newLieu;

        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					lieu : newLieu,
					view : this
			};
			this.el.html(template(templateData));
			ViewUtils.verticalCenter();

			setTimeout(function() {
			    that.showActions(function() {that.positionneActions()});
			}, 50);

			this.makeEvents();
        };

        this.playMusic = function(music) {
            var that = this;
            var randMusic = music;

            if (!music) {
                var listMusic = [];
                for (var i in this.mediatheque.listStories) {
                    var music = this.mediatheque.listStories[i];
                    if (this.mediatheque.currentMusic != music) {
                        listMusic.push(music);
                    }
                }
                randMusic = listMusic[Utils.rand(0, listMusic.length)];
            }
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
                that.parent.glossaire(key);
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
                    this.recompenseManager.addSuccess(success, true);
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
                case "reload":
                    this.go(this.player.data.checkpoint);
                    break;
                case "fight":
                    var adversaires = params[0];
                    var nextLieu = params[1];
                    var failLieu = params[2];

                    var textes;
                    if (failLieu != undefined && Array.isArray(failLieu)) {
                        textes = failLieu;
                        failLieu = null;
                    }else textes = params[3];

                    var failFunction = null;
                    if (failLieu) {
                        failFunction = function() {
                            that.go(failLieu);
                        };
                    }
                    this.parent.fight(adversaires, function() {
                        that.go(nextLieu);
                    }, failFunction, textes);
                    break;
                case "hurt":
                    var degats = params[0];
                    this.player.hurt(degats, true);
                    if (this.player.get("life.current") <= 0) {
                        this.player.addLife(1);
                    }
                    break;
                case "gain":
                    this.gain(params);
                    break;
                case "gainOneTime":
                    this.gain(params, true);
                    break;
                case "perte":
                    for (var i in params) {
                        var item = params[i];
                        this.player.removeEquipment(item);
                    }
                    break;
                case "sound":
                    var sound = params[0];
                    this.mediatheque.playSound(sound + ".wav");
                    break;
                case "hasItem":
                    var items = params[0];
                    var ifFound = params[1];
                    var ifNotFound = params[2];

                    if (this.player.hasAll(items)) this.go(ifFound);
                    else this.go(ifNotFound);
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
                default:
                    console.log("Erreur, l'action " + action + " n'existe pas.")
                    break;
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
                case "hasMG":
                    var amount = params[0];
                    return this.player.get("mana.current") >= amount;
                default:
                    return true;
            };
            return true;
        };

        this.init(parent, didacticiel);
    };
});