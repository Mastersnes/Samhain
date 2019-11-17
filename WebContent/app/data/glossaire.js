'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"araignee" : {
			"name" : "araignee",
			"texte" : "araignee-texte",
            "attaque" : [1, 1],
            "defense" : [0, 0],
            "vie" : [10, 10],
            "mana" : [0, 3],
            "xp": [1, 1],
            "argent" : [1, 10],
            "sexe" : "f",
            "abilities" : ["morsure"]
		},
		"bandit" : {
			"name" : "bandit",
			"texte" : "bandit-texte",
            "attaque" : [2, 3],
            "defense" : [0, 0],
            "vie" : [18, 18],
            "mana" : [1, 3],
            "xp" : [1, 2],
            "argent" : [10, 30],
            "sexe" : "m",
            "abilities" : ["voler", "doubleAttaque"]
		},
		"roiAraignee" : {
			"name" : "roiAraignee",
			"texte" : "roiAraignee-texte",
            "attaque" : [5, 12],
            "defense" : [0, 0],
            "vie" : [100, 100],
            "mana" : [5, 10],
            "xp" : [1, 3],
            "argent" : [30, 50],
            "sexe" : "m",
            "abilities" : ["araneisme", "pondreAraignee"],
            "type": "boss",
            "baseSuffixe" : "blesse"
		},
		"goule" : {
			"name" : "goule",
			"texte" : "goule-texte",
            "attaque" : [3, 5],
            "defense" : [0, 0],
            "vie" : [20, 20],
            "mana" : [2, 5],
            "xp" : [1, 2],
            "argent" : [10, 25],
            "sexe" : "f",
            "abilities" : ["morsure", "cannibalisme"]
		},
		"garde": {
			"name" : "garde",
			"texte" : "garde-texte",
            "attaque" : [3, 6],
            "defense" : [0, 0],
            "vie" : [30, 30],
            "mana" : [2, 5],
            "xp" : [1, 3],
            "argent" : [10, 30],
            "sexe" : "m",
            "abilities" : ["doubleAttaque", "taillade"]
		},
		"villageois": {
			"name" : "villageois",
			"texte" : "villageois-texte",
            "attaque" : [1, 2],
            "defense" : [0, 0],
            "vie" : [15, 15],
            "mana" : [1, 3],
            "xp" : [1, 1],
            "argent" : [5, 10],
            "sexe" : "m",
            "abilities" : ["doubleAttaque"]
		},
		"grosseGoule": {
			"name" : "grosseGoule",
			"texte" : "grosseGoule-texte",
            "attaque" : [4, 8],
            "defense" : [0, 0],
            "vie" : [40, 40],
            "mana" : [3, 6],
            "xp" : [1, 3],
            "argent" : [20, 40],
            "sexe" : "f",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"squelette": {
			"name" : "squelette",
			"texte" : "squelette-texte",
            "attaque" : [5, 15],
            "defense" : [0, 0],
            "vie" : [30, 30],
            "mana" : [2, 3],
            "xp" : [1, 3],
            "argent" : [10, 25],
            "sexe" : "m",
            "abilities" : ["doubleAttaque", "taillade"]
		}, 
		"experience": {
			"name" : "experience",
			"texte" : "experience-texte",
            "attaque" : [6, 12],
            "defense" : [0, 0],
            "vie" : [50, 50],
            "mana" : [3, 7],
            "xp" : [1, 3],
            "argent" : [20, 50],
            "sexe" : "f",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"necromancien": {
			"name" : "necromancien",
			"texte" : "necromancien-texte",
            "attaque" : [5, 10],
            "defense" : [0, 0],
            "vie" : [150, 150],
            "mana" : [10, 15],
            "xp" : [1, 1],
            "argent" : [0, 0],
            "sexe" : "m",
            "abilities" : ["volDeVie", "bouleFeu", "invoqueGoule"],
            "type" : "boss",
            "baseSuffixe" : "lancien"
		}, 
		"liche": {
			"name" : "liche",
			"texte" : "liche-texte",
            "attaque" : [6, 16],
            "defense" : [0, 0],
            "vie" : [300, 300],
            "mana" : [10, 20],
            "xp" : [3, 5],
            "argent" : [50, 200],
            "sexe" : "f",
            "abilities" : ["volDeVie", "volDeMana", "bouleFeu", "invoqueGrosseGoule"],
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