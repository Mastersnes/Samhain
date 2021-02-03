'use strict';
define([], function(){
	var data = {
	        "inventaire" : {
            	fr : "Inventaire",
            	en : "Inventory",
            	eo : "Inventaro"
            },
            "lvl" : {
            	fr : "Niv.",
            	en : "Lvl.",
            	eo : "Niv."
            },
            "rate" : {
            	fr : "Raté",
            	en : "Missed",
            	eo : "Maltrafita"
            },
            "vie" : {
            	fr : "Vie",
            	en : "Life",
            	eo : "Vivo"
            },
            "mana" : {
            	fr : "Mana",
            	en : "Mana",
            	eo : "Magio"
            },
            "attack" : {
            	fr : "Attaque",
            	en : "Attack",
            	eo : "Atako"
            },
            "degats" : {
            	fr : "Dégâts",
            	en : "Damage",
            	eo : "Damaĝo"
            },
            "lifeSteal" : {
            	fr : "Vol de vie",
            	en : "Life steal",
            	eo : "Vivoŝtelo"
            },
            "manaSteal" : {
            	fr : "Vol de mana",
            	en : "Mana steal",
            	eo : "Magiŝtelo"
            },
            "manaCost" : {
            	fr : "Coût en mana",
            	en : "Mana Cost",
            	eo : "Magikosto"
            },
            "defense" : {
            	fr : "Défense",
            	en : "Defense",
            	eo : "Defendo"
            },
            "experienceGain" : {
            	fr : "XP",
            	en : "XP",
            	eo : "SP"
            },
            "argentGain" : {
            	fr : "Revenu",
            	en : "Earnings",
            	eo : "Enspezo"
            },
            "lifeGain" : {
            	fr : "Gain de vie",
            	en : "Life gain",
            	eo : "Vivogajno"
            },
            "duree" : {
            	fr : "Durée",
            	en : "Duration",
            	eo : "Daŭro"
            },
            "manaGain" : {
            	fr : "Gain de mana",
            	en : "Mana gain",
            	eo : "Magigajno"
            },
            "multicible" : {
            	fr : "Multicible",
            	en : "Multi-target",
            	eo : "Multcela"
            },
            "attackGain" : {
            	fr : "Gain d'attaque",
            	en : "Attack gain",
            	eo : "Atakogajno"
            },
            "defenseGain" : {
            	fr : "Gain de défense",
            	en : "Defense gain",
            	eo : "Defendogajno"
            },
            "competences" : {
            	fr : "Compétences",
            	en : "Skills",
            	eo : "Kapabloj"
            },
            "items" : {
            	fr : "Objets",
            	en : "Items",
            	eo : "Objektoj"
            },
            "inflige" : {
            	fr : "Inflige",
            	en : "Inflicts",
            	eo : "Kaŭzas"
            },
            "octroie" : {
            	fr : "Octroie",
            	en : "Grants",
            	eo : "Donas"
            }
	};
	
	return {
        name : function() {
            return "UI.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});