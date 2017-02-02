/*global define */
define(["app/utils/utils"], 
function(Utils) {
	'use strict';

	return function(data) {
		this.data = {
				"key" : "key",
				"name" : "Action",
				"attaque" : 0,
				"defense" : 0,
				"vie" : 0,
				"magie" : 0,
				"type" : "arme"
		};
		
		this.sound = null;
		
		this.bind = function(data) {
			if (data) {
				this.data = data;
				this.data.name = data.action;
				this.sound = data.sound;
			}else {
				this.data.name = "Piocher";
			}
		};
		
		this.getAttaque = function(parent) {
			var player = parent.save.data;
			var attaque = this.data.attaque;
			if (!isNaN(attaque)) return attaque * player.attaque;
			return Utils.rand(attaque[0], attaque[1]) * player.attaque;
		};
		this.getDefense = function(parent) {
			var player = parent.save.data;
			var defense = this.data.defense;
			if (!isNaN(defense)) return defense * player.defense;
			return Utils.rand(defense[0], defense[1]) * player.defense;
		};
		this.getVie = function(parent) {
			var player = parent.save.data;
			var vie = this.data.vie;
			if (!isNaN(vie)) return vie * player.niveau;
			return Utils.rand(vie[0], vie[1]) * player.niveau;
		};
		this.getMagie = function(parent) {
			var player = parent.save.data;
			var magie = this.data.magie;
			if (!isNaN(magie)) return magie * player.niveau;
			return Utils.rand(magie[0], magie[1]) * player.niveau;
		};
		
		this.bind(data);
	};
});