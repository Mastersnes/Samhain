/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/manager/etatsManager",
        "app/data/glossaire",
        "app/data/suffixe",
        "app/data/items",
        "app/data/etats"
        ],
function($, _, Utils, EtatsManager, Glossaire, Suffixe, Items, Etats) {
	'use strict';

	return function(parent, name, index) {
		this.init = function(parent, adversaire, index) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

			this.index = index;

			this.name = adversaire.name==null ? adversaire : adversaire.name;
			this.template = Glossaire.get(this.name);

			if (adversaire.suffixe) {
			    this.suffixe = Suffixe.get(adversaire.suffixe);
			}else this.suffixe = Suffixe.getRandom();

            // Le level de base est le level du joueur +ou- 1
            var playerLevel = this.parent.player.get("level");
            var levelMin = playerLevel-1; var levelMax = playerLevel+1;
            if (this.template.level) {
                var levelMin = eval(this.template.level[0].replace("player", playerLevel));
                var levelMax = eval(this.template.level[1].replace("player", playerLevel));
            }
            if (adversaire.levelMin) levelMin = eval(adversaire.levelMin.replace("player", playerLevel));
            if (adversaire.levelMax) levelMax = eval(adversaire.levelMax.replace("player", playerLevel));

			this.level = Utils.rand(levelMin, levelMax, true);
			if (adversaire.level) this.level = eval(adversaire.level.replace("player", playerLevel));
			if (this.level < 0) this.level = 0;

			var vieMin = this.template.vie[0] * this.suffixe.vie * ((this.level+2)/2);
			var vieMax = this.template.vie[1] * this.suffixe.vie * ((this.level+2)/2);
			// DEBUG
//			console.log("level", this.level, "vieBase", this.template.vie, "suffixe", this.suffixe.vie, "vieCalc", {
//			    "vieMin" : vieMin,
//			    "vieMax" : vieMax
//			});
			var vie = Utils.rand(vieMin, vieMax);
			if (vie < 1) vie = 1;

			var manaMin = (this.template.mana[0] + this.level) * this.suffixe.mana;
			var manaMax = (this.template.mana[1] + this.level) * this.suffixe.mana;
			var mana = Utils.rand(manaMin, manaMax);

			var attaqueMin = (this.template.attaque[0] + this.level) * this.suffixe.attaque;
			var attaqueMax = (this.template.attaque[1] + this.level) * this.suffixe.attaque;
			if (attaqueMax < 1) attaqueMax = 1;

			var defenseMin = (this.template.defense[0] + this.level) * this.suffixe.defense;
			var defenseMax = (this.template.defense[1] + this.level) * this.suffixe.defense;

			var goldMin = (this.template.argent[0] + this.level) * this.suffixe.argent;
			var goldMax = (this.template.argent[1] + this.level) * this.suffixe.argent;
			var gold = Utils.rand(goldMin, goldMax);
			if (gold < 1) gold = 1;

			var xpMin = (this.template.xp[0] + this.level) * this.suffixe.xp;
			var xpMax = (this.template.xp[1] + this.level) * this.suffixe.xp;
			var xp = Utils.rand(xpMin, xpMax);
			if (xp < 1) xp = 1;

			var abilities = [];
			if (this.template.abilities) abilities = this.template.abilities;

			this.type = this.template.type;

			this.isMonster = true;

			this.data = {
			    "life" : {
			        "current": vie,
			        "max" : vie
			    },
			    "mana" : {
			        "current": mana,
			        "max" : mana
			    },
			    "attaque" : [attaqueMin, attaqueMax],
			    "defense" : [defenseMin, defenseMax],
			    "gold" : gold,
			    "xp" : xp,
			    "abilities" : abilities,
			    "buff" : null,
			    "debuff" : null,
			    "level" : this.level
			};

			this.etatsManager = new EtatsManager(this);
		};

		this.get = function(key) {
            var keys = key.split(".");

            var data = this.data;
            for (var i in keys) {
                data = data[keys[i]];
                if (data == undefined) return null;
            }

            return data;
        };

		this.completeName = function() {
		    var suffixeName = this.suffixe.namef;
		    if (this.template.sexe == "m")
		        suffixeName = this.suffixe.namem;

            if (this.Textes.local == "fr")
		        return this.Textes.get(this.name) + "<br/>" + this.Textes.get(suffixeName);
		    else
		        return this.Textes.get(suffixeName) + "<br/>" + this.Textes.get(this.name);
		};

		this.attaque = function(cible, withDef) {
		    var attaque = this.data.attaque;
            var degats = Utils.rand(attaque[0], attaque[1], true);
            if (degats < 0) degats = 0;
            return cible.hurt(degats, withDef);
        };
        this.hurt = function(amount, withDef, element) {
            var degats = amount;

            if (withDef) {
                var defense = this.data.defense;
                var defResult = Utils.rand(defense[0], defense[1], true);
                degats -= defResult;
            }

            if (degats < 0) degats = 0;
            this.addLife(-degats, element);
            return degats;
        };

        this.addPercentLife = function(amount, element) {
            var lifeMax = this.data.life.max;
            var amount = Math.round(Utils.percent(lifeMax, amount));
            this.addLife(amount, element);
        };
        this.addLife = function(amount, element) {
            this.data.life.current += amount;
            if (this.data.life.current < 0) this.data.life.current = 0;
            if (this.data.life.current > this.data.life.max)
                this.data.life.current = this.data.life.max;
        };

        this.spell = function(itemId, cibles) {
            var that = this;
            if (!cibles) cibles = this;
            if (!Array.isArray(cibles)) cibles = [cibles];

            var actionDone = false;

            var abilities = this.data.abilities;
            if (Utils.contains(abilities, itemId)) {
                var abilitie = Items.get("magie", itemId);
                // Si il existe une contrainte et qu'elle n'est pas respectée, on ne lance pas le sort
                if (abilitie.contrainte && !abilitie.contrainte(this, cible, this.parent)) return actionDone;

                if (abilitie.manaCost <= this.get("mana.current")) {
                    this.addMana(-abilitie.manaCost);

                    for (var i in cibles) {
                        var cible = cibles[i];

                        if (abilitie.offensif) {
                            cible.addAmountChange(this.Textes.get(abilitie.name), "abilitie", abilitie.element);
                        }

                        var degats = 0;
                        if (abilitie.degats) {
                            var baseAttaque = this.data.attaque;
                            degats = Utils.rand(abilitie.degats[0] + baseAttaque[0], abilitie.degats[1] + baseAttaque[1], true);
                            if (degats > 0) cible.hurt(degats, true, abilitie.element);
                        }

                        if (abilitie.lifeSteal) {
                            var lifeSteal = Utils.rand(abilitie.lifeSteal[0], abilitie.lifeSteal[1], true);
                            this.stealLife(lifeSteal, degats, cible);
                        }

                        if (abilitie.vie) {
                            var vie = Utils.rand(abilitie.vie[0], abilitie.vie[1], true);
                            if (vie > 0) cible.addPercentLife(vie);
                        }

                        if (abilitie.manaSteal) {
                            var manaSteal = Utils.rand(abilitie.manaSteal[0], abilitie.manaSteal[1], true);
                            this.stealMana(manaSteal, cible);
                        }

                        // Action particuliere
                        if (abilitie.action) abilitie.action(this, cible, this.parent);

                        if (abilitie.effet) {
                            for (var i in abilitie.effet) {
                                var effetId = abilitie.effet[i];
                                this.etatsManager.check(effetId, cible);
                            }
                        }
                    }
                    actionDone = true;
                } else console.log("Erreur monster spell - pas assez de mana", abilitie, cibles);
            }else console.log("Erreur monster spell - sort non possédé", itemId, cibles);

            return actionDone;
        };
        this.addPercentMana = function(amount) {
            var manaMax = this.data.mana.max;
            var amount = Math.round(Utils.percent(manaMax, amount));
            this.addMana(amount);
        };
        this.addMana = function(amount) {
            this.data.mana.current += amount;
            if (this.data.mana.current < 0) this.data.mana.current = 0;
            if (this.data.mana.current > this.data.mana.max)
                this.data.mana.current = this.data.mana.max;
        };
        this.usableMagie = function() {
            if (!this.data.mana.current) return [];

            var usable = [];
            var currentMana = this.data.mana.current;
            for (var i in this.data.abilities) {
                var magieId = this.data.abilities[i];
                var magie = Items.get("magie", magieId);
                if (currentMana >= magie.manaCost) usable.push(magieId);
            }
            return usable;
        };

        this.stealMana = function(baseManaSteal, cible) {
            var cibleCurrentMana = cible.get("mana.current");
            var manaSteal = Math.round(Utils.percent(cibleCurrentMana, baseManaSteal));
            console.log("steal mana : ", cibleCurrentMana, baseManaSteal, manaSteal)
            if (manaSteal > 0) this.steal("mana", cible, manaSteal);
        };
        this.stealLife = function(baseLifeSteal, degats, cible) {
            var cibleCurrentLife = cible.get("life.current");

            var lifeSteal = 0;
            if (degats) {
                lifeSteal = Math.round(Utils.percent(degats, baseLifeSteal));
                if (lifeSteal > 0) this.addLife(lifeSteal);
            } else {
                lifeSteal = Math.round(Utils.percent(cibleCurrentLife, baseLifeSteal));
                if (lifeSteal > 0) this.steal("life", cible, lifeSteal);
            }
        };

        this.steal = function(attr, cible, value, valueMin) {
            switch(attr) {
                case "life":
                    var steal = cible.get("life.current");
                    cible.addLife(-value);
                    steal -= cible.get("life.current");
                    if (valueMin != undefined) this.addLife(Utils.rand(valueMin, steal, true));
                    else this.addLife(steal);
                    break;
                case "mana":
                    var steal = cible.get("mana.current");
                    cible.addMana(-value);
                    steal -= cible.get("mana.current");
                    if (valueMin != undefined) this.addMana(Utils.rand(valueMin, steal, true));
                    else this.addMana(steal);
                    break;
                case "gold":
                    var steal = cible.get("gold");
                    cible.addGold(-value);
                    steal -= cible.get("gold");
                    if (cible.addAmountChange) cible.addAmountChange(steal, "gold");
                    if (valueMin != undefined) this.addGold(Utils.rand(valueMin, steal, true));
                    else this.addGold(steal);
                    break;
            }
        };

        /**
        * Modification sur l'or
        **/
        this.addGold = function(amount) {
            this.data.gold += amount;
            if (this.data.gold < 0) this.data.gold = 0;
            if (this.data.gold > Utils.MAX_GOLD) this.data.gold = Utils.MAX_GOLD;
        };

        /**
        * Lance une attaque de type magique ou physique
        **/
        this.launchAttaque = function(dom, player, aliveMonsters, blockSound) {
            if (Utils.rand(0, 4) == 0) { // Chances de lancer un sort
                var abilities = this.usableMagie();
                if (abilities.length > 0) {
                    var abilitieId = abilities[Utils.rand(0, abilities.length)];
                    var abilitie = Items.get("magie", abilitieId);
                    var actionDone = false;

                    if (abilitie.offensif) {
                        actionDone = this.spell(abilitie.name, player);
                    }else if (abilitie.multicible) {
                        actionDone = this.spell(abilitie.name, aliveMonsters);
                    }else {
                        var cibleMonster = aliveMonsters[Utils.rand(0, aliveMonsters.length)];
                        actionDone = this.spell(abilitie.name, cibleMonster);
                    }
                    if (actionDone) return;
                }
            }

            // Attaque classique si aucun sort a lancer
            var degats = this.attaque(player, true);
            if (degats) this.mediatheque.playSound("hurt.wav");
            else {
                if (!blockSound) blockSound = "block";
                this.mediatheque.playSound(blockSound + ".wav");
            }

            this.etatsManager.infligeEtats();
        };

        /**
        * Joue l'animation des degats ou du blocage du monstre
        **/
        this.showDegats = function(anim) {
            if (!anim) return;
            var ciblesDom = $(".fight monster#"+this.index+" anim");
            ciblesDom.addClass(anim);
            ciblesDom.fadeIn(200, function() {
                ciblesDom.fadeOut(500, function() {
                    ciblesDom.removeClass(anim);
                });
            });
        };

        /**
        * Rescussite le monstre
        **/
        this.restore = function() {
            this.data.debuff = null;
            this.data.buff = null;
            this.addLife(this.get("life.max"));
            this.addMana(this.get("mana.max"));
        };

		this.init(parent, name, index);
	};
});