'use strict';
define([], function(){
	var data = {
	        /**
	        * Inventaire
	        **/
	        "aventurier" : {
                fr : "Aventurier",
                en : "Adventurer"
            },
	        "level" : {
                fr : "niveau",
                en : "level"
            },
            "pointDexperienceAvantNext" : {
                 fr : "xp avant le prochain niveau",
                 en : "xp before the next level"
            },
            "pieceDor" : {
                 fr : "pièces d'or",
                 en : "gold coins"
            },

	        "pointDeVie" : {
                fr : "points de vie",
                en : "life points"
            },
	        "pointDeMana" : {
                fr : "points de magie",
                en : "magic points"
            },

            "pointDattaque" : {
                 fr : "points d'attaque",
                 en : "attack points"
            },
            "pointDeDegats" : {
                 fr : "points de dégâts",
                 en : "damage points"
            },
            "bonusArme" : {
                 fr : "de bonus d'arme",
                 en : "of weapon bonus"
            },
            "pointVolDeVie" : {
                 fr : "de vol de vie",
                 en : "of life stealing"
            },
            "pointVolDeMana" : {
                 fr : "de vol de mana",
                 en : "of mana stealing"
            },

            "pointDeDefense" : {
                 fr : "points de defense",
                 en : "defense point"
            },
            "bonusBouclier" : {
                 fr : "bonus de bouclier",
                 en : "shield bonus"
            },

            "pendant" : {
                 fr : "pendant",
                 en : "until"
            },
            "tours" : {
                 fr : "tours",
                 en : "turn"
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});