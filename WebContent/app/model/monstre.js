/*global define */
define(["app/utils/utils",
        "app/data/item"], 
function(Utils, Items) {
	'use strict';

	return function(data, Textes) {
		this.data = {
				"name" : "Monstre",
				"textes" : null,
	            "attaque" : 0,
	            "defense" : 0,
	            "vie" : 0,
	            "suffixe" : "",
	            "maxLife" : 0,
	            "currentLife" : 0,
	            "xp" : 0,
	            "sexe" : "m"
		};
		
		this.bind = function(data, Textes) {
		    this.Textes = Textes;
			if (data) {
				this.data = data;
				this.data.vie = data.vie;
				this.data.alive = true;
			}
		};
		this.getLife = function() {
			var data = this.data;
			if (data.currentLife <= 0) return 0;
			return (data.currentLife * 100)/data.maxLife;
		};
		this.getAttaque = function() {
			var data = this.data;
			return Utils.rand(data.attaque[0], data.attaque[1]) * data.suffixe.attaque;
		};
		this.getDefense = function() {
			var data = this.data;
			return Utils.rand(data.defense[0], data.defense[1]) * data.suffixe.defense;
		};
		this.getXp = function() {
			var data = this.data;
			return Utils.rand(data.xp[0], data.xp[1]) * data.suffixe.xp;
		};
		this.getArgent = function() {
			var data = this.data;
			return Utils.rand(data.argent[0], data.argent[1]) * data.suffixe.argent;
		};
		this.hurt = function(dmg) {
			var data = this.data;
			var damage = dmg-this.getDefense();
			if (damage <= 0) damage = 1;
			this.data.currentLife -= damage;
		};
		this.buff = function(suffixe) {
			this.data.suffixe = suffixe;
			var vie = Utils.rand(this.data.vie[0], this.data.vie[1]);
			this.data.maxLife = parseInt(vie * suffixe.vie);
			if (this.data.maxLife <= 0) this.data.maxLife = 1;
			this.data.currentLife = this.data.maxLife;
		};
		
		this.getName = function() {
			var suffixe = this.data.suffixe;
			if (this.data.sexe == "m") {
				return this.Textes.get(this.data.name) + " " + this.Textes.get(suffixe.namem);
			}else {
				return this.Textes.get(this.data.name) + " " + this.Textes.get(suffixe.namef);
			}
		};
		
		this.isAlive = function() {
			return this.data.alive;
		};
		this.die = function() {
			this.data.alive = false;
		};
		
		this.bind(data, Textes);
	};
});