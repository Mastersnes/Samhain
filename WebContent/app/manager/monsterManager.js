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
			if (this.level < 0) this.level = 0;
			if (adversaire.level) this.level = eval(adversaire.level.replace("player", playerLevel));

			var vieMin = this.template.vie[0] * this.suffixe.vie;
			var vieMax = this.template.vie[1] * this.suffixe.vie;
			var vie = Utils.rand(vieMin, vieMax) + this.level;
			if (vie < 1) vie = 1;

			var manaMin = this.template.mana[0] * this.suffixe.mana;
			var manaMax = this.template.mana[1] * this.suffixe.mana;
			var mana = Utils.rand(manaMin, manaMax) + this.level;

			var attaqueMin = this.template.attaque[0] * this.suffixe.attaque + this.level;
			var attaqueMax = this.template.attaque[1] * this.suffixe.attaque + this.level;
			if (attaqueMax < 1) attaqueMax = 1;

			var defenseMin = this.template.defense[0] * this.suffixe.defense + this.level;
			var defenseMax = this.template.defense[1] * this.suffixe.defense + this.level;

			var goldMin = this.template.argent[0] * this.suffixe.argent;
			var goldMax = this.template.argent[1] * this.suffixe.argent;
			var gold = Utils.rand(goldMin, goldMax) + this.level;
			if (gold < 1) gold = 1;

			var xpMin = this.template.xp[0] * this.suffixe.xp;
			var xpMax = this.template.xp[1] * this.suffixe.xp;
			var xp = Utils.rand(xpMin, xpMax) + this.level;
			if (xp < 1) xp = 1;

			var abilities = [];
			if (this.template.abilities) abilities = this.template.abilities;

			this.type = this.template.type;

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
        this.hurt = function(amount, withDef) {
            var degats = amount;

            if (withDef) {
                var defense = this.data.defense;
                degats -= Utils.rand(defense[0], defense[1], true);
            }

            if (degats < 0) degats = 0;
            this.addLife(-degats);
            return degats;
        };
        this.addLife = function(amount) {
            this.data.life.current += amount;
            if (this.data.life.current < 0) this.data.life.current = 0;
            if (this.data.life.current > this.data.life.max)
                this.data.life.current = this.data.life.max;
        };

        this.spell = function(itemId, cibles) {
            if (!cibles) cibles = this;
            if (!Array.isArray(cibles)) cibles = [cibles];

            var actionDone = false;

            var abilities = this.data.abilities;
            if (Utils.contains(abilities, itemId)) {
                var abilitie = Items.get("magie", itemId);
                if (abilitie.manaCost <= this.get("mana.current")) {
                    this.addMana(-abilitie.manaCost);

                    for (var i in cibles) {
                        var cible = cibles[i];

                        var degats = Utils.rand(abilitie.degats[0], abilitie.degats[1], true);
                        if (degats > 0) cible.hurt(degats + this.level, true);

                        var vie = Utils.rand(abilitie.vie[0], abilitie.vie[1], true);
                        if (vie > 0) cible.addLife(vie + this.level);

                        var lifeSteal = Utils.rand(abilitie.lifeSteal[0], abilitie.lifeSteal[1], true);
                        if (lifeSteal > 0) this.addLife(lifeSteal + this.level);

                        for (var i in abilitie.effet) {
                            var effetId = abilitie.effet[i];
                            this.etatsManager.check(effetId, cible);
                        }
                    }
                    actionDone = true;
                } else console.log("Erreur monster spell - pas assez de mana", abilitie, cibles);
            }else console.log("Erreur monster spell - sort non possédé", itemId, cibles);

            return actionDone;
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

        /**
        * Lance une attaque de type magique ou physique
        **/
        this.launchAttaque = function(dom, player, aliveMonsters, blockSound) {
            if (Utils.rand(0, 5) == 0) { // Chances de lancer un sort
                var abilities = this.usableMagie();
                if (abilities.length > 0) {
                    var abilitieId = abilities[Utils.rand(0, abilities.length)];
                    var abilitie = Items.get("magie", abilitieId);

                    if (abilitie.offensif) {
                        this.spell(abilitie.name, player);
                    }else if (abilitie.multicible) {
                        this.spell(abilitie.name, aliveMonsters);
                    }else {
                        var cibleMonster = aliveMonsters[Utils.rand(0, aliveMonsters.length)];
                        this.spell(abilitie.name, cibleMonster);
                    }
                    return;
                }
            }

            // Attaque classique si aucun sort a lancer
            var degats = this.attaque(player, true);
            if (degats) this.mediatheque.playSound("hurt.wav");
            else this.mediatheque.playSound(blockSound + ".wav");
        };

        /**
        * Verifie si le monstre a pris des degats
        **/
        this.checkDegats = function(degats, anim) {
            if (degats > 0) this.showDegats(anim);
            else {
                var blockAnim = "block";
                if (this.template.blockAnim) blockAnim = this.template.blockAnim;

                this.showDegats(blockAnim);
            }
        };

        /**
        * Joue l'animation des degats ou du blocage du monstre
        **/
        this.showDegats = function(anim) {
            if (!anim) return;
            var ciblesDom = $(".fight monster#"+this.index+" anim");
            console.log("play", anim, "on", ciblesDom);
            ciblesDom.addClass(anim);
            ciblesDom.fadeIn(200, function() {
                ciblesDom.fadeOut(500, function() {
                    ciblesDom.removeClass(anim);
                });
            });
        };

		this.init(parent, name, index);
	};
});