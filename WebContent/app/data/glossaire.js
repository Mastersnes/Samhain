'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"araignee" : {
			"name" : "araignee",
			"texte" : "araignee-texte",
            "attaque" : [1, 3],
            "defense" : [0, 1],
            "vie" : [5, 10],
            "mana" : [0, 3],
            "xp": [1, 1],
            "argent" : [0, 3],
            "sexe" : "f",
            "abilities" : ["morsure"],
            "blockAnim" : "block",
            "blockSound" : "block"
		},
		"bandit" : {
			"name" : "bandit",
			"texte" : "bandit-texte",
            "attaque" : [2, 5],
            "defense" : [1, 3],
            "vie" : [20, 30],
            "mana" : [0, 0],
            "xp" : [2, 3],
            "argent" : [1, 5],
            "sexe" : "m",
            "abilities" : []
		},
		"roiAraigneeBlesse" : {
			"name" : "roiAraigneeBlesse",
			"texte" : "roiAraigneeBlesse-texte",
            "attaque" : [5, 15],
            "defense" : [3, 5],
            "vie" : [50, 100],
            "mana" : [1, 5],
            "xp" : [20, 40],
            "argent" : [10, 30],
            "sexe" : "m",
            "abilities" : ["morsure"],
            "type": "boss"
		},
		"goule" : {
			"name" : "goule",
			"texte" : "goule-texte",
            "attaque" : [2, 8],
            "defense" : [0, 5],
            "vie" : [20, 40],
            "mana" : [0, 3],
            "xp" : [5, 15],
            "argent" : [3, 8],
            "sexe" : "f",
            "abilities" : ["morsure"]
		},
		"garde": {
			"name" : "garde",
			"texte" : "garde-texte",
            "attaque" : [3, 10],
            "defense" : [3, 10],
            "vie" : [30, 40],
            "mana" : [0, 0],
            "xp" : [10, 30],
            "argent" : [5, 10],
            "sexe" : "m",
            "abilities" : []
		},
		"villageois": {
			"name" : "villageois",
			"texte" : "villageois-texte",
            "attaque" : [1, 2],
            "defense" : [1, 2],
            "vie" : [20, 35],
            "mana" : [0, 0],
            "xp" : [5, 15],
            "argent" : [0, 10],
            "sexe" : "m",
            "abilities" : []
		}, 
		"grosseGoule": {
			"name" : "grosseGoule",
			"texte" : "grosseGoule-texte",
            "attaque" : [5, 10],
            "defense" : [2, 8],
            "vie" : [30, 60],
            "mana" : [1, 5],
            "xp" : [20, 40],
            "argent" : [5, 10],
            "sexe" : "f",
            "abilities" : ["morsure"]
		}, 
		"squelette": {
			"name" : "squelette",
			"texte" : "squelette-texte",
            "attaque" : [5, 10],
            "defense" : [0, 0],
            "vie" : [20, 40],
            "mana" : [0, 0],
            "xp" : [10, 30],
            "argent" : [2, 8],
            "sexe" : "m",
            "abilities" : []
		}, 
		"squeletteManchot": {
			"name" : "squeletteManchot",
			"texte" : "squeletteManchot-texte",
            "attaque" : [1, 5],
            "defense" : [0, 0],
            "vie" : [20, 30],
            "mana" : [0, 0],
            "xp" : [20, 50],
            "argent" : [10, 30],
            "sexe" : "m",
            "abilities" : ["morsure"]
		}, 
		"experience": {
			"name" : "experience",
			"texte" : "experience-texte",
            "attaque" : [7, 15],
            "defense" : [2, 10],
            "vie" : [60, 90],
            "mana" : [1, 5],
            "xp" : [30, 50],
            "argent" : [10, 30],
            "sexe" : "f",
            "abilities" : ["morsure"]
		}, 
		"necromancien": {
			"name" : "necromancien",
			"texte" : "necromancien-texte",
            "attaque" : [5, 20],
            "defense" : [3, 10],
            "vie" : [80, 120],
            "mana" : [1, 5],
            "xp" : [50, 100],
            "argent" : [15, 30],
            "sexe" : "m",
            "abilities" : ["soin"]
		}, 
		"liche": {
			"name" : "liche",
			"texte" : "liche-texte",
            "attaque" : [15, 30],
            "defense" : [3, 15],
            "vie" : [150, 250],
            "mana" : [5, 10],
            "xp" : [100, 150],
            "argent" : [20, 40],
            "sexe" : "f",
            "abilities" : ["soin"],
            "type" : "boss"
		}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return Utils.clone(data[key]);
		},

		list : function(letter, Textes) {
            var resultats = [];
            for (var monster in data) {
                var monsterName = Utils.normalize(Textes.get(monster));
                if(monsterName.startsWith(letter)) resultats.push(monster);
            }
            return resultats;
        }
	};
});