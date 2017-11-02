/*global define */
define(["app/utils/utils",
        "app/data/item"], 
function(Utils, Items) {
	'use strict';

	return function(parent) {
		this.data = {
				"maxLife" : 100,
				"currentLife" : 100,
				"maxMagie" : 0,
				"currentMagie" : 0,
				"hasMagie" : false,
				"xp" : 0,
				"argent" : 0,
				"palier" : 10,
				"niveau" : 1,
				
				"attaque" : 1,
				"defense" : 1,
				
				"lieu" : "start",
				
				"equipement" : {
					"arme" : ["poing"],
					"armeChoose" : 0,
					"bouclier" : ["bras"],
					"bouclierChoose" : 0,
					"magie" : [],
					"conso" : ["pomme"],
					"clef" : [],
					"ifObj" : []
				},
				
				"playSound" : true
		};
		
		this.init = function(parent) {
			this.parent = parent;
		};
		
		this.saveGame = function() {
			var data = JSON.stringify(this.data);
			sessionStorage.setItem(Utils.name, Utils.encode(data));
		};
		
		this.loadGame = function() {
			var data = sessionStorage.getItem(Utils.name);
			if (data) {
				this.data = JSON.parse(Utils.decode(data));
			}
		};
		
		this.isSound = function() {
			return this.data.playSound;
		};
		
		this.getLife = function() {
			var data = this.data;
			if (data.currentLife <= 0) return 0;
			return (data.currentLife * 100)/data.maxLife;
		};
		this.getMagie = function() {
			var data = this.data;
			if (data.currentMagie <= 0) return 0;
			return (data.currentMagie * 100)/data.maxMagie;
		};
		this.getXp = function() {
			var data = this.data;
			if (data.xp <= 0) return 0;
			return (data.xp * 100)/data.palier;
		};
		this.getNiveau = function() {
			return this.data.niveau;
		};
		this.getArgent = function() {
			return this.data.argent;
		};
		this.getLieu = function() {
			return this.data.lieu;
		};
		
		this.hurt = function(dmg, defense, withSave) {
			var damage = dmg-defense;
			if (damage > 0) {
				this.data.currentLife -= damage;
				if (this.data.currentLife < 0) this.data.currentLife = 0;
				if (withSave) {
					this.saveGame();
				}
			}
		};
		this.heal = function(damage, withSave) {
			this.data.currentLife += damage;
			if (this.data.currentLife > this.data.maxLife) {
				this.data.currentLife = this.data.maxLife;
			}
			if (withSave) {
				this.saveGame();
			}
		};
		this.healMG = function(damage, withSave) {
			this.data.currentMagie += damage;
			if (this.data.currentMagie > this.data.maxMagie) {
				this.data.currentMagie = this.data.maxMagie;
			}
			if (this.data.currentMagie < 0) this.data.currentMagie = 0;
			if (withSave) {
				this.saveGame();
			}
		};
		this.upXp = function(montant) {
			this.data.xp += montant;
			while (this.data.xp >= this.data.palier) {
				this.upLevel();
			}
			this.saveGame();
		};
		this.upArgent = function(montant) {
			this.data.argent += Math.round(montant);
			this.parent.kongregateUtils.score("Gold", this.data.argent);
			this.saveGame();
		};
		this.upMG = function(montant) {
			this.data.hasMagie = true;
			this.data.maxMagie += montant;
			this.data.currentMagie = this.data.maxMagie;
			this.saveGame();
		};
		this.upLevel = function() {
			this.data.niveau ++;
			this.parent.kongregateUtils.score("Level", this.data.niveau);
			this.data.xp -=  this.data.palier;
			this.data.palier += 50;
			
			this.data.attaque += 0.25;
			this.data.defense += 0.25;
			
			this.data.maxLife = 50 + this.data.niveau * 50;
			this.data.currentLife = this.data.maxLife;
			
			this.data.maxMagie += 5 * this.data.niveau;
			if (this.data.hasMagie) {
				this.data.currentMagie = this.data.maxMagie;
			}
		};
		this.setSound = function(sound) {
			this.data.playSound = sound;
			this.saveGame();
		};
		this.setLieu = function(lieu) {
			this.data.lieu = lieu;
			this.saveGame();
		};
		this.getActions = function() {
			var equipement = this.data.equipement;
			var actionsPossibles = new Array();
			this.addAction(actionsPossibles, equipement.arme[equipement.armeChoose]);
			this.addAction(actionsPossibles, equipement.bouclier[equipement.bouclierChoose]);
			if (equipement.magie) {
				for (var index in equipement.magie) {
					var sort = equipement.magie[index];
					this.addAction(actionsPossibles, sort);
				}
			}
			if (equipement.conso) {
				for (var index in equipement.conso) {
					var objet = equipement.conso[index];
					this.addAction(actionsPossibles, objet);
				}
			}
			
			return actionsPossibles;
		};
		this.addAction = function(actionsPossibles, key) {
			if (key) {
				var item = Items.get(key);
				item.key = key;
				actionsPossibles.push(item);
			}
		};
		this.addItem = function(item, type) {
			if (item && type) {
				var equipement = this.data.equipement;
				equipement[type].push(item);
				switch(type) {
					case "arme":
						equipement.armeChoose = equipement.arme.indexOf(item);
						break;
					case "bouclier":
						equipement.bouclierChoose = equipement.bouclier.indexOf(item);
						break;
					default:
						break;
				}
			}
		};
		this.removeItem = function(item, type) {
			if (item && type) {
				var equipement = this.data.equipement;
				var index = equipement[type].indexOf(item);
				if (index > -1) {
					equipement[type].splice(index, 1);
				}
				switch(type) {
					case "arme":
						equipement.armeChoose = 0;
						break;
					case "bouclier":
						equipement.bouclier = 0;
						break;
					default:
					break;
				}
			}
		};
		this.hasItem = function(item) {
			var has = false;
			if (item) {
				var equipement = this.data.equipement;
				has = equipement.arme.indexOf(item)>-1;
				has = has || equipement.bouclier.indexOf(item)>-1;
				has = has || equipement.magie.indexOf(item)>-1;
				has = has || equipement.conso.indexOf(item)>-1;
				has = has || equipement.clef.indexOf(item)>-1;
				has = has || equipement.ifObj.indexOf(item)>-1;
			}
			return has;
		};
		
		this.init(parent);
	};
});