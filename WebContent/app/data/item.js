'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Armes
		 */
		"poing" : {
			"action" : "poing-action",
			"name" : "poing",
			"textes" : ["poing-texte"],
			"attaque" : [1, 1],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "punch",
			"anim" : "poing"
		},
		"baton" : {
			"action" : "baton-action",
			"name" : "baton",
			"textes" : ["baton-texte"],
			"attaque" : [1, 5],
			"defense" : [0, 1],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "baton",
			"anim" : "baton"
		},
		"dague" : {
			"action" : "dague-action",
			"name" : "dague",
			"textes" : ["dague-texte"],
			"attaque" : [5, 10],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "dagguer",
			"anim" : "dague"
		},
		"epee" : {
			"action" : "epee-action",
			"name" : "epee",
			"textes" : ["epee-texte"],
			"attaque" : [5, 15],
			"defense" : [0, 5],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "sword",
			"anim" : "epee"
		},
		"crocRoi" : {
			"action" : "crocRoi-action",
			"name" : "crocRoi",
			"textes" : ["crocRoi-texte"],
			"attaque" : [5, 15],
			"defense" : 0,
			"vie" : [0, 10],
			"magie" : 0,
			"type" : "arme",
			"sound" : "croc",
			"anim" : "croc"
		},
		/**
		 * Armures
		 */
		"bras" : {
			"action" : "bras-action",
			"name" : "bras",
			"textes" : ["bras-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 5],
			"vie" : [0, 1],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "block",
			"anim" : null
		},
		"bouclierBois" : {
			"action" : "bouclierBois-action",
			"name" : "bouclierBois",
			"textes" : ["bouclierBois-texte"],
			"attaque" : [0, 0],
			"defense" : [3, 15],
			"vie" : [0, 2],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "woodblock",
			"anim" : null
		},
		"bouclierFer" : {
			"action" : "bouclierFer-action",
			"name" : "bouclierFer",
			"textes" : ["bouclierFer-texte"],
			"attaque" : [0, 0],
			"defense" : [5, 20],
			"vie" : [0, 3],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "ironblock",
			"anim" : null
		},
		/**
		 * Consommable
		 */
		"potionSante" : {
			"action" : "potionSante-action",
			"name" : "potionSante",
			"textes" : ["potionSante-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [30, 60],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "drink",
			"anim" : null
		},
		"fromage" : {
			"action" : "fromage-action",
			"name" : "fromage",
			"textes" : ["fromage-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [20, 50],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "eat",
			"anim" : null
		},
		"pomme" : {
			"action" : "pomme-action",
			"name" : "pomme",
			"textes" : ["pomme-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [15, 30],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "eat",
			"anim" : null
		},
		"venin" : {
			"action" : "venin-action",
			"name" : "venin",
			"textes" : ["venin-texte"],
			"attaque" : [10, 30],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "acide",
			"anim" : "venin"
		},
		"elixir" : {
			"action" : "elixir-action",
			"name" : "elixir",
			"textes" : ["elixir-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [40, 150],
			"magie" : [40, 150],
			"type" : "conso",
			"sound" : "drink",
			"anim" : null
		},
		
		/**
		 * Magie
		 */
		"bouleFeu" : {
			"action" : "bouleFeu-action",
			"name" : "bouleFeu",
			"textes" : ["bouleFeu-texte"],
			"attaque" : [10, 20],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : -5,
			"type" : "magie",
			"sound" : "bouleFeu",
			"anim" : "bouleFeu"
		},
		"soin" : {
			"action" : "soin-action",
			"name" : "soin",
			"textes" : ["soin-texte"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [20, 60],
			"magie" : -5,
			"type" : "magie",
			"sound" : "soin",
			"anim" : null
		},
		/**
		 * Clef
		 */
		"bougie" : {
			"action" : "bougie",
			"name" : "bougie",
			"textes" : ["bougie-texte"],
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "clef",
			"sound" : null,
			"anim" : null
		},
		"clefS2" : {
			"action" : "clefS2",
			"name" : "clefS2",
			"textes" : ["clefS2-texte"],
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "clef",
			"sound" : null,
			"anim" : null
		},
		
		/**
		 * If
		 */
		"helpRoi" : {
			"name" : "Aide du roi",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"helpRoi2" : {
			"name" : "Aide du roi2",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"necroS1Clean" : {
			"name" : "Salle1 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"hadClef" : {
			"name" : "Salle1 clef",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S1ViaS0" : {
			"name" : "Salle1 via exterieur",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S3ViaS0" : {
			"name" : "Salle3 via exterieur",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"viaS1" : {
			"name" : "GS via s1",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"viaS3" : {
			"name" : "GS via s3",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"parchoLu" : {
			"name" : "Parchemins lu",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"fouilleCercueil" : {
			"name" : "Cercueil fouiller",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheAllumeG" : {
			"name" : "Torche gauche allumee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheExploseG" : {
			"name" : "Torche gauche explosee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheAllumeD" : {
			"name" : "Torche droite allumee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheExploseD" : {
			"name" : "Torche droite explosee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S2Ouvert" : {
			"name" : "Salle 2 ouverte",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S2Clean" : {
			"name" : "Salle 2 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S4Clean" : {
			"name" : "Salle 4 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S5Clean" : {
			"name" : "Salle 5 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
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