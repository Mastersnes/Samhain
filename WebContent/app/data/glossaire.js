'use strict';
define(["jquery"], function($){
	var data = {
		"araignee" : {
			"name" : "araignee",
			"textes" : [
	            "araignee-texte"
            ],
            "attaque" : [0, 2],
            "defense" : [0, 1],
            "vie" : [2, 5],
            "xp": [1, 2],
            "argent" : [0, 3],
            "sexe" : "f"
		},
		"bandit" : {
			"name" : "bandit",
			"textes" : [
	            "bandit-texte",
            ],
            "attaque" : [0, 2],
            "defense" : [0, 3],
            "vie" : [5, 10],
            "xp" : [2, 4],
            "argent" : [1, 5],
            "sexe" : "m"
		},
		"roiAraigneeBlesse" : {
			"name" : "roiAraigneeBlesse",
			"textes" : [
			            "roiAraigneeBlesse-texte",
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 5],
			            "vie" : [10, 30],
			            "xp" : [20, 40],
			            "argent" : [10, 30],
			            "sexe" : "m"
		},
		"goule" : {
			"name" : "goule",
			"textes" : [
			            "goule-texte"
			            ],
			            "attaque" : [2, 8],
			            "defense" : [0, 5],
			            "vie" : [7, 10],
			            "xp" : [5, 15],
			            "argent" : [3, 8],
			            "sexe" : "f"
		},
		"garde": {
			"name" : "garde",
			"textes" : [
			            "garde-texte"
			            ],
			            "attaque" : [3, 10],
			            "defense" : [0, 10],
			            "vie" : [10, 20],
			            "xp" : [10, 30],
			            "argent" : [5, 10],
			            "sexe" : "m"
		}, 
		"villageois": {
			"name" : "villageois",
			"textes" : [
			            "villageois-texte"
			            ],
			            "attaque" : [0, 2],
			            "defense" : [0, 2],
			            "vie" : [10, 20],
			            "xp" : [5, 15],
			            "argent" : [0, 10],
			            "sexe" : "m"
		}, 
		"grosseGoule": {
			"name" : "grosseGoule",
			"textes" : [
			            "grosseGoule-texte"
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 8],
			            "vie" : [10, 30],
			            "xp" : [20, 40],
			            "argent" : [5, 10],
			            "sexe" : "f"
		}, 
		"squelette": {
			"name" : "squelette",
			"textes" : [
			            "squelette-texte"
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 0],
			            "vie" : [10, 20],
			            "xp" : [10, 30],
			            "argent" : [2, 8],
			            "sexe" : "m"
		}, 
		"squeletteManchot": {
			"name" : "squeletteManchot",
			"textes" : [
			            "squeletteManchot-texte"
			            ],
			            "attaque" : [0, 5],
			            "defense" : [0, 0],
			            "vie" : [10, 20],
			            "xp" : [20, 50],
			            "argent" : [10, 30],
			            "sexe" : "m"
		}, 
		"experience": {
			"name" : "experience",
			"textes" : [
			            "experience-texte"
			            ],
			            "attaque" : [7, 15],
			            "defense" : [0, 10],
			            "vie" : [40, 60],
			            "xp" : [30, 50],
			            "argent" : [10, 30],
			            "sexe" : "f"
		}, 
		"necromancien": {
			"name" : "necromancien",
			"textes" : [
			            "necromancien-texte"
			            ],
			            "attaque" : [5, 20],
			            "defense" : [0, 10],
			            "vie" : [50, 80],
			            "xp" : [50, 100],
			            "argent" : [15, 30],
			            "sexe" : "m"
		}, 
		"liche": {
			"name" : "liche",
			"textes" : [
			            "liche-texte"
			            ],
			            "attaque" : [10, 30],
			            "defense" : [0, 15],
			            "vie" : [80, 150],
			            "xp" : [100, 150],
			            "argent" : [20, 40],
			            "sexe" : "f"
		}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});