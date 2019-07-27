/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/manager/levelManager",
        "app/data/items"
        ],
function($, _, Utils, LevelManager, Items) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.data = this.saveManager.load("player");
			this.options = this.saveManager.load("gameOptions");

			this.mediatheque = parent.mediatheque;
			this.levelManager = new LevelManager(this);
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

		/**
		* Gestion de l'equipement
		**/
		this.bouclier = function() {
		    var boucliers = this.data.equipment.bouclier;
		    var currentBouclier = this.data.equipment.currentBouclier;

		    if (!Utils.contains(boucliers, currentBouclier)) {
		        console.log("Erreur bouclier - bouclier non possédé", currentBouclier, boucliers);
		        this.data.equipment.currentBouclier = "bras";
            }

		    return Items.get("bouclier", currentBouclier);
		};
		this.arme = function() {
		    var armes = this.data.equipment.arme;
            var currentArme = this.data.equipment.currentArme;

            if (!Utils.contains(armes, currentArme)) {
                console.log("Erreur arme - arme non possédée", currentArme, armes);
                this.data.equipment.currentArme = "poing";
            }

            return Items.get("arme", currentArme);
		};
		this.currentArme = function() {
		    this.arme();
		    return this.data.equipment.currentArme;
		};
		this.currentBouclier = function() {
		    this.bouclier();
		    return this.data.equipment.currentBouclier;
		};
		this.addEquipment = function(param1, param2) {
		    var type, name;
		    if (param2) {
		        type = param1;
		        name = param2;
		    } else {
		        name = param1;
		        var item = Items.get(name);
		        if (item.type) type = item.type;
		        else type = "ifObj";
		    }

            console.log("Ajout de l'item", type, name);
		    this.data.equipment[type].push(name);

		    // Si c'est une arme ou un bouclier et qu'il est meilleur, on le selectionne automatiquement
		    if (this.options.selectAuto) {
                if (type == "arme") this.selectBetterArme(name);
                else if (type == "bouclier") this.selectBetterBouclier(name);
            }
		};
		this.removeEquipment = function(param1, param2) {
		    var type, name;
		    if (param2) {
		        type = param1;
		        name = param2;
		    }else {
		        name = param1;
                var item = Items.get(name);
                if (item.type) type = item.type;
                else type = "ifObj";
		    }

            // On ne supprime pas le poing ou le bras
		    if (name == "poing" || name == "bras") return;

		    var itemIndex = this.data.equipment[type].indexOf(name);
		    if (itemIndex > -1) {
		        this.data.equipment[type].splice(itemIndex, 1);
		        this.arme();
		        this.bouclier();
		    } else console.log("Erreur suppression - item non possédé", type, name);
		};
		this.selectArme = function(name) {
		    var armes = this.data.equipment.arme;
		    if (Utils.contains(armes, name)) {
		        this.data.equipment.currentArme = name;
		    } else console.log("Erreur selection - arme non possédée", name);
		};
		this.selectBetterArme = function(name) {
            var arme = Items.get("arme", name);
            if (!arme) {
                console.log("Erreur - Impossible de trouver l'arme", name);
                return;
            }
            var currentArme = this.arme();

            var moyenneArme = (arme.degats[0] + arme.degats[1]) / 2;
            var moyenneCurrent = (currentArme.degats[0] + currentArme.degats[1]) / 2;

            if (moyenneArme > moyenneCurrent) this.selectArme(name);
        };
		this.selectBouclier = function(name) {
		    var boucliers = this.data.equipment.bouclier;
            if (Utils.contains(boucliers, name)) {
                this.data.equipment.currentBouclier = name;
            } else console.log("Erreur selection - bouclier non possédé", name);
		};
		this.selectBetterBouclier = function(name) {
            var bouclier = Items.get("bouclier", name);
            if (!bouclier) return;
            var currentBouclier = this.bouclier();

            var moyenneBouclier = (bouclier.defense[0] + bouclier.defense[1]) / 2;
            var moyenneCurrent = (currentBouclier.defense[0] + currentBouclier.defense[1]) / 2;

            if (moyenneBouclier > moyenneCurrent) this.selectBouclier(name);
        };
		this.has = function(itemId) {
		    if (Utils.contains(this.data.equipment.arme, itemId)) return "arme";
		    if (Utils.contains(this.data.equipment.bouclier, itemId)) return "bouclier";
		    if (Utils.contains(this.data.equipment.magie, itemId)) return "magie";
		    if (Utils.contains(this.data.equipment.conso, itemId)) return "conso";
		    if (Utils.contains(this.data.equipment.clef, itemId)) return "clef";
		    if (Utils.contains(this.data.equipment.ifObj, itemId)) return "ifObj";
		    return null;
		};
		this.usableMagie = function() {
		    if (!this.get("unlockMana")) return [];

		    var usable = [];
		    var currentMana = this.data.mana.current;
		    for (var i in this.data.equipment.magie) {
		        var magieId = this.data.equipment.magie[i];
		        var magie = Items.get("magie", magieId);
		        if (currentMana >= magie.manaCost) usable.push(magieId);
		    }
		    return usable;
		};
		/**
		* Renvoi un des objet de soin
		**/
		this.getRandSoin = function() {
		    var soinItem = [];
		    for (var i in this.data.equipment.conso) {
		        var consoId = this.data.equipment.conso[i];
		        var conso = Items.get("conso", consoId);
		        if (conso && conso.vie[1] > 0) soinItem.push(consoId);
		        else if (!conso) console.log("Erreur - le conso n'existe pas", consoId) ;
		    }

		    var randNumber = Utils.rand(0, soinItem.length);
		    return soinItem[randNumber];
		};

		// Vrai si le joueur possede tout les objets
		// Faux si le joueur ne possede pas au moins un des objets
		this.hasAll = function(items) {
		    var found = true;
            for (var i in items) {
                var item = items[i];
                found = found && this.has(item);
            }
            return found;
		};

		// Vrai si le joueur ne possede aucun des objets
		// Faux si le joueur possede au moins un des objets
        this.hasNoOne = function(items) {
            for (var i in items) {
                var item = items[i];
                console.log("On verifie si le joueur a l'item", item);
                if (this.has(item))  {
                    console.log("le joueur a l'item", item, "de type", this.has(item));
                    return false;
                }
            }
            return true;
        };

		this.use = function(itemId, cibles) {
		    if (!cibles) cibles = this;
		    if (!Array.isArray(cibles)) cibles = [cibles];

		    var actionDone = false;

		    var consos = this.data.equipment.conso;
		    if (Utils.contains(consos, itemId)) {
		        var item = Items.get("conso", itemId);

                for (var i in cibles) {
                    var cible = cibles[i];

                    var degats = Utils.rand(item.degats[0], item.degats[1], true);
                    var vie = Utils.rand(item.vie[0], item.vie[1], true);
                    var mana = Utils.rand(item.mana[0], item.mana[1], true);

                    cible.hurt(degats, true);
                    cible.addLife(vie);
                    cible.addMana(mana);
		        }

		        this.removeEquipment("conso", itemId);
		        actionDone = true;
		    }else console.log("Erreur use - objet non possédé", itemId, cibles);

		    return actionDone;
		};
		this.spell = function(itemId, cibles) {
            if (!this.get("unlockMana")) return false;
            if (!cibles) cibles = this;
            if (!Array.isArray(cibles)) cibles = [cibles];

            var actionDone = false;

            var magies = this.data.equipment.magie;
            if (Utils.contains(magies, itemId)) {
                var magie = Items.get("magie", itemId);
                console.log("Utilisation de", magie);
                if (magie.manaCost <= this.get("mana.current")) {
                    console.log("On retire", magie.manaCost, "mana");
                    this.addMana(-magie.manaCost);

                    for (var i in cibles) {
                        var cible = cibles[i];

                        var degats = Utils.rand(magie.degats[0], magie.degats[1], true);
                        var vie = Utils.rand(magie.vie[0], magie.vie[1], true);
                        cible.hurt(degats, true);
                        cible.addLife(vie);
                    }
                    actionDone = true;
                } else console.log("Erreur spell - pas assez de mana", magie, cibles);
            }else console.log("Erreur spell - sort non possédé", itemId, cibles);

            return actionDone;
        };

        /**
        * Modifications sur la vie
        **/
        this.attaque = function(cibles, withDef) {
            if (!Array.isArray(cibles)) cibles = [cibles];

            if (withDef == undefined) withDef = true;

            var baseAttaque = this.data.attaque;
            var arme = this.arme();

            var degatsMin = baseAttaque + arme.degats[0];
            var degatsMax = baseAttaque + arme.degats[1];

            for (var i in cibles) {
                var cible = cibles[i];

                var degats = Utils.rand(degatsMin, degatsMax, true);
                if (degats < 0) degats = 0;
                cible.hurt(degats, withDef);

                var lifeStealMin = arme.lifeSteal[0];
                var lifeStealMax = arme.lifeSteal[1];
                var lifeSteal = Utils.rand(lifeStealMin, lifeStealMax, true);
                this.addLife(lifeSteal);
            }

            return true;
        };
		this.hurt = function(amount, withDef) {
		    var degats = amount;

		    if (withDef) {
                var baseDefense = this.data.defense;
                var bouclier = this.bouclier();

                var defenseMin = baseDefense + bouclier.defense[0];
                var defenseMax = baseDefense + bouclier.defense[1];

                degats -= Utils.rand(defenseMin, defenseMax, true);
		    }

		    if (degats < 0) degats = 0;
            this.addLife(-degats);
		};
		this.addLife = function(amount) {
            this.data.life.current += amount;
            if (this.data.life.current < 0) this.data.life.current = 0;
            if (this.data.life.current > this.data.life.max)
                this.data.life.current = this.data.life.max;
		};


		/**
		* Modifications sur le mana
		**/
		this.addMana = function(amount) {
		    if (!this.data.unlockMana) return;
		    this.data.mana.current += amount;
		    if (this.data.mana.current < 0) this.data.mana.current = 0;
		    if (this.data.mana.current > this.data.mana.max)
		        this.data.mana.current = this.data.mana.max;
		};
		this.unlockMana = function(amount) {
		    this.data.unlockMana = true;
		    if (amount < 0) amount = 0;
		    this.data.mana.max += amount;
		};

        /**
        * Modifications sur l'xp
        **/
		this.addXp = function(amount) {
		    this.levelManager.add(amount);
		};
		this.levelUp = function() {
		    this.data.attaque++;
		    this.data.defense++;
		    this.data.life.max += 50;
		    if (this.data.unlockMana) this.data.mana.max+=5;

		    this.addLife(this.data.life.max);
		    this.addMana(this.data.mana.max);
		};

		/**
		* Modification sur l'or
		**/
		this.addGold = function(amount) {
            this.data.gold += amount;
            if (this.data.gold < 0) this.data.gold = 0;
            if (this.data.gold > 1000) this.data.gold = 1000;
        };
        this.achete = function(itemId) {
            var item = Items.get(itemId);
            if (item && item.price) {
                if(this.data.gold > item.price) {
                    this.addGold(-item.price);
                    this.addEquipment(item.type, item.name);
                }else console.log("Erreur achete - l'item est trop chere", itemId, item.price);
            }else console.log("Erreur achete - l'item n'existe pas", itemId);
        };


		this.init(parent);
	};
});