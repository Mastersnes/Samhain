/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/histoire.html",
        "app/data/story",
        "app/data/item"], 
function($, _, Utils, page, story, Item) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = $("#corps");
			this.parent = parent;
			this.Textes = parent.Textes;
			this.kongregateUtils = parent.kongregateUtils;
			this.mediatheque = parent.mediatheque;
		};
		
		/**
		 * Charge l'ecran d'histoire en fonction de la clef indiquée
		 */
		this.load = function(key) {
			this.render(key);
			this.appair();
		};
		
		this.render = function(key) {
			this.data = story.get(key);
			this.purgeAction();
			
			this.data.text = this.Textes;
			
			_.templateSettings.variable = "data";
			var template = _.template(page);
			this.el.html(template(this.data));
			
			/**
			 * On positionne les boutons d'action
			 */
			Utils.resizeActionButton();
			
			this.checkEvents();
		};
		
		this.appair = function() {
			$(".texte > div").show();
			$(".choix").animate({"margin-top" : "0%"}, "slow");
		};
		this.disappair = function() {
			$(".texte > div").hide("slow");
			$(".choix").animate({"margin-top" : "5%"}, "slow");
		};
		
		this.checkEvents = function() {
			var parent = this.parent;
			var that = this;
			$(".texte > div > p > span").click(function(event) {
				var target = $(this);
				var key = target.attr("key");
				parent.openGlossaire(key);
			});
			$(".choix > div").click(function(event) {
				var target = $(this);
				var key = target.attr("key");
				var action = that.data.actions[key];
				for(var index in action.action) {
					var currentAction = action.action[index];
					that.gereAction(currentAction);
				}
			});
		};
		
		/**
		 * Permet de gerer les differentes actions de l'histoire
		 */
		this.gereAction = function(action) {
			var parent = this.parent;
			switch (action.key) {
				case "fight":
					var monstres = action.params[0];
					var but = action.params[1];
					this.disappair();
					parent.fight(monstres, but);
					break;
				case "die":
					this.disappair();
					parent.go("perdu");
					break;
				case "hurt":
					parent.save.hurt(action.params[0], 0, true);
					parent.refresh();
					break;
				case "heal":
					parent.save.heal(action.params[0], true);
					parent.refresh();
					break;
				case "healMG":
					parent.save.healMG(action.params[0], true);
					parent.refresh();
					break;
				case "upMG":
					parent.save.upMG(action.params[0]);
					parent.refresh();
					break;
				case "go":
					this.disappair();
					parent.go(action.params[0]);
					break;
				case "score":
					this.kongregateUtils.score(action.params[0], action.params[1]);
					break;
				case "restart":
					location.reload();
					break;
				case "gain":
					var item = Item.get(action.params[0]);
					parent.save.addItem(action.params[0], item.type);
					break;
				case "perte":
					var item = Item.get(action.params[0]);
					parent.save.removeItem(action.params[0], item.type);
					break;
				case "hasItem":
					var items = action.params[0];
					var has = false;
					if (items && items.length > 0) {
						has = true;
						for (var index in items) {
							has = has && parent.save.hasItem(items[index]);
						}
					}
					this.disappair();
					if (has) {
						parent.go(action.params[1]);
					}else {
						parent.go(action.params[2]);
					}
					break;
				case "random":
					var dests = action.params;
					var dest = dests[Utils.rand(0, dests.length)];
					parent.go(dest);
					break;
				case "sound":
					var sound = action.params[0];
					if (parent.save.isSound()) {
						this.mediatheque.play(sound);
					}
					break;
				case "aMoinsDe":
					var lifeMin = action.params[0];
					var has = parent.save.getLife() >= lifeMin;
					this.disappair();
					if (has) {
						parent.go(action.params[1]);
					}else {
						parent.go(action.params[2]);
					}
					break;
				case "aPlusDe":
					var lifeMax = action.params[0];
					var has = parent.save.getLife() < lifeMax;
					this.disappair();
					if (has) {
						parent.go(action.params[1]);
					}else {
						parent.go(action.params[2]);
					}
					break;
				default:
					break;
			}
		};
		
		this.purgeAction = function(key) {
			var parent = this.parent;
			var actions = this.data.actions;
			var actionsGarde = new Array();
			for(var index in actions) {
				var currentAction = actions[index];
				if (this.checkConditions(currentAction)) {
					actionsGarde.push(currentAction);
				}
			}
			this.data.actions = actionsGarde;
		};
		
		this.checkConditions = function(action) {
			var conditions = action.appairIf;
			if (conditions) {
				for (var index in conditions) {
					if (!this.checkCondition(conditions[index])) {
						return false;
					}
				}
			}
			return true;
		};
		
		this.checkCondition = function(condition) {
			var parent = this.parent;
			switch (condition.key) {
				case "hasMG":
					var MGMin = condition.params[0];
					return parent.save.data.currentMagie >= MGMin;
					break;
				case "aPlusDe":
					var lifeMin = condition.params[0];
					return parent.save.getLife() >= lifeMin;
					break;
				case "aMoinsDe":
					var lifeMax = condition.params[0];
					return parent.save.getLife() < lifeMax;
					break;
				case "hasItem":
					var items = condition.params;
					if (items && items.length > 0) {
						for (var index in items) {
							if (!parent.save.hasItem(items[index])) {
								return false;
							}
						}
					}
					return true;
					break;
				case "hasNoItem":
					var items = condition.params;
					if (items && items.length > 0) {
						for (var index in items) {
							if (parent.save.hasItem(items[index])) {
								return false;
							}
						}
					}
					return true;
					break;
				default:
					break;
			}
		};
		
		this.init(parent);
	};
});