'use strict';
define([], function(){
	var data = {
	        /**
	        * UI
	        **/
	        "inventaire" : {
                fr : "Inventaire",
                en : "Inventory"
            },
            "lvl" : {
                fr : "Niv.",
                en : "Lvl."
            },
            "rate" : {
                fr : "Raté",
                en : "Missed"
            },
            "vie" : {
                fr : "Vie",
                en : "Life"
            },
            "mana" : {
                fr : "Mana",
                en : "Mana"
            },
            "attack" : {
                fr : "Attaque",
                en : "Attack"
            },
            "degats" : {
                fr : "Dégâts",
                en : "Damage"
            },
            "lifeSteal" : {
                fr : "Vol de vie",
                en : "Lifesteal"
            },
            "manaSteal" : {
                fr : "Vol de mana",
                en : "Manasteal"
            },
            "manaCost" : {
                fr : "Coût en mana",
                en : "Mana Cost"
            },
            "defense" : {
                fr : "Défense",
                en : "Defense"
            },
            "experienceGain" : {
                fr : "XP",
                en : "XP"
            },
            "argentGain" : {
                fr : "Argent",
                en : "Income"
            },
            "lifeGain" : {
                fr : "Gain de vie",
                en : "Gain of life"
            },
            "duree" : {
                fr : "Durée",
                en : "Duration"
            },
            "manaGain" : {
                fr : "Gain de mana",
                en : "Gain of mana"
            },
            "multicible" : {
                fr : "Multicible",
                en : "Multi-target"
            },
            "attackGain" : {
                fr : "Gain d'attaque",
                en : "Attack gain"
            },
            "defenseGain" : {
                fr : "Gain de défense",
                en : "Defense gain"
            },
            "competences" : {
                fr : "Compétences",
                en : "Skills"
            },
            "items" : {
                fr : "Objets",
                en : "Items"
            },
            "inflige" : {
                fr : "Inflige",
                en : "Inflicts"
            },
            "octroie" : {
                fr : "Octroi",
                en : "Grants"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});