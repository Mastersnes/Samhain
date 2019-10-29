'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"araignee" : {
			"name" : "araignee",
			"texte" : "araignee-texte",
            "attaque" : [1, 3],
            "defense" : [0, 0],
            "vie" : [5, 5],
            "mana" : [0, 2],
            "xp": [1, 2],
            "argent" : [0, 5],
            "sexe" : "f",
            "abilities" : ["morsure"]
		},
		"bandit" : {
			"name" : "bandit",
			"texte" : "bandit-texte",
            "attaque" : [2, 5],
            "defense" : [0, 0],
            "vie" : [15, 15],
            "mana" : [0, 3],
            "xp" : [1, 3],
            "argent" : [1, 10],
            "sexe" : "m",
            "abilities" : ["voler", "doubleAttaque"]
		},
		"roiAraignee" : {
			"name" : "roiAraignee",
			"texte" : "roiAraignee-texte",
            "attaque" : [5, 20],
            "defense" : [0, 0],
            "vie" : [80, 80],
            "mana" : [5, 10],
            "xp" : [15, 30],
            "argent" : [20, 50],
            "sexe" : "m",
            "abilities" : ["araneisme", "pondreAraignee"],
            "type": "boss",
            "baseSuffixe" : "blesse"
		},
		"goule" : {
			"name" : "goule",
			"texte" : "goule-texte",
            "attaque" : [3, 8],
            "defense" : [0, 0],
            "vie" : [20, 20],
            "mana" : [0, 5],
            "xp" : [4, 10],
            "argent" : [5, 10],
            "sexe" : "f",
            "abilities" : ["morsure", "cannibalisme"]
		},
		"garde": {
			"name" : "garde",
			"texte" : "garde-texte",
            "attaque" : [3, 10],
            "defense" : [0, 0],
            "vie" : [30, 30],
            "mana" : [0, 0],
            "xp" : [5, 15],
            "argent" : [5, 10],
            "sexe" : "m",
            "abilities" : ["doubleAttaque", "taillade"]
		},
		"villageois": {
			"name" : "villageois",
			"texte" : "villageois-texte",
            "attaque" : [2, 5],
            "defense" : [0, 0],
            "vie" : [15, 15],
            "mana" : [0, 0],
            "xp" : [3, 8],
            "argent" : [3, 10],
            "sexe" : "m",
            "abilities" : []
		},
		"grosseGoule": {
			"name" : "grosseGoule",
			"texte" : "grosseGoule-texte",
            "attaque" : [4, 10],
            "defense" : [0, 0],
            "vie" : [40, 40],
            "mana" : [1, 5],
            "xp" : [10, 20],
            "argent" : [20, 30],
            "sexe" : "f",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"squelette": {
			"name" : "squelette",
			"texte" : "squelette-texte",
            "attaque" : [10, 20],
            "defense" : [0, 0],
            "vie" : [15, 15],
            "mana" : [0, 0],
            "xp" : [20, 40],
            "argent" : [0, 5],
            "sexe" : "m",
            "abilities" : ["doubleAttaque", "taillade"]
		}, 
		"experience": {
			"name" : "experience",
			"texte" : "experience-texte",
            "attaque" : [15, 25],
            "defense" : [0, 0],
            "vie" : [70, 70],
            "mana" : [1, 5],
            "xp" : [25, 50],
            "argent" : [30, 50],
            "sexe" : "f",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"necromancien": {
			"name" : "necromancien",
			"texte" : "necromancien-texte",
            "attaque" : [5, 20],
            "defense" : [0, 0],
            "vie" : [100, 100],
            "mana" : [5, 10],
            "xp" : [50, 100],
            "argent" : [0, 0],
            "sexe" : "m",
            "abilities" : ["volDeVie", "bouleFeu", "invoqueGoule"],
            "type" : "boss",
            "baseSuffixe" : "lancien"
		}, 
		"liche": {
			"name" : "liche",
			"texte" : "liche-texte",
            "attaque" : [10, 20],
            "defense" : [0, 0],
            "vie" : [130, 130],
            "mana" : [5, 10],
            "xp" : [100, 150],
            "argent" : [300, 500],
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