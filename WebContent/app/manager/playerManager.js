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

		    return Items.getByType("bouclier", currentBouclier);
		};
		this.arme = function() {
		    var armes = this.data.equipment.arme;
            var currentArme = this.data.equipment.currentArme;

            if (!Utils.contains(armes, currentArme)) {
                console.log("Erreur arme - arme non possédée", currentArme, armes);
                this.data.equipment.currentArme = "poing";
            }

            return Items.getByType("arme", currentArme);
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
		        console.log("Suppression de l'item", type, name);
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
		this.selectBouclier = function(name) {
		    var boucliers = this.data.equipment.bouclier;
            if (Utils.contains(boucliers, name)) {
                this.data.equipment.currentBouclier = name;
            } else console.log("Erreur selection - bouclier non possédé", name);
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
		this.use = function(itemId, cible) {
		    if (!cible) cible = this;
		    var consos = this.data.equipment.conso;
		    if (Utils.contains(consos, itemId)) {
		        var item = Items.getByType("conso", itemId);

		        var degats = Utils.rand(item.degats[0], item.degats[1]);
		        var vie = Utils.rand(item.vie[0], item.vie[1]);
		        var mana = Utils.rand(item.mana[0], item.mana[1]);

		        cible.hurt(degats, true);
		        cible.addLife(vie);
		        cible.addMana(mana);

                console.log("Utilisation de l'objet", itemId, cible);
		        this.removeEquipment("conso", itemId);
		    }else console.log("Erreur use - objet non possédé", itemId, cible);
		};
		this.spell = function(itemId, cible) {
            if (!cible) cible = this;
            var magies = this.data.equipment.magie;

            if (Utils.contains(magies, itemId)) {
                var magie = Items.getByType("magie", itemId);
                if (magie.manaCost <= this.get("mana.current")) {
                    var degats = Utils.rand(magie.degats[0], magie.degats[1]);
                    var vie = Utils.rand(magie.vie[0], magie.vie[1]);

                    cible.hurt(degats, true);
                    cible.addLife(vie);
                    cible.addMana(-magie.manaCost);

                    console.log("Utilisation du sort", itemId, cible);
                } else console.log("Erreur spell - pas assez de mana", magie, cible);
            }else console.log("Erreur spell - sort non possédé", itemId, cible);
        };

        /**
        * Modifications sur la vie
        **/
        this.attaque = function(cible) {
            var baseAttaque = this.data.attaque;
            var arme = this.arme();

            var degatsMin = baseAttaque + arme.degats[0];
            var degatsMax = baseAttaque + arme.degats[1];

            var degats = Utils.rand(degatsMin, degatsMax);
            if (degats < 0) degats = 0;
            cible.hurt(degats, true);
        };
		this.hurt = function(amount, withDef) {
		    var degats = amount;

		    if (withDef) {
                var baseDefense = this.data.defense;
                var bouclier = this.bouclier();

                var defenseMin = baseDefense + bouclier.defense[0];
                var defenseMax = baseDefense + bouclier.defense[1];

                degats -= Utils.rand(defenseMin, defenseMax);
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