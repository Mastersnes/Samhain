'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"grognon" : {
			"namem" : "Grognon",
			"namef" : "Grognon",
			"attaque" : 1.3,
			"defense" : 1,
            "vie" : 1,
            "magie" : 1,
            "argent" : 2,
            "xp" : 2
		},
		"hargneux" : {
			"namem" : "Hargneux",
			"namef" : "Hargneuse",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"debile" : {
			"namem" : "D&eacute;bile",
			"namef" : "D&eacute;bile",
			"attaque" : 0.25,
			"defense" : 1,
			"vie" : 0.25,
			"magie" : 1,
			"argent" : 0.8,
            "xp" : 0.8
		},
		"borgne" : {
			"namem" : "Borgne",
			"namef" : "Borgne",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"timide" : {
			"namem" : "Timide",
			"namef" : "Timide",
			"attaque" : 1,
			"defense" : 1.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"freluquet" : {
			"namem" : "Freluquet",
			"namef" : "Freluquet",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 0.5,
			"magie" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"bourrin" : {
			"namem" : "Bourrin",
			"namef" : "Bourrine",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 0.5,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"costaud" : {
			"namem" : "Costaud",
			"namef" : "Costaud",
			"attaque" : 1.5,
			"defense" : 2,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 3,
            "xp" : 3
		},
		"fairplay" : {
			"namem" : "Fair-play",
			"namef" : "Fair-play",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"mignon" : {
			"namem" : "Mignon",
			"namef" : "Mignonne",
			"attaque" : 1,
			"defense" : 0.75,
			"vie" : 0.75,
			"magie" : 1,
			"argent" : 0.75,
            "xp" : 0.75
		},
		"terrifiant" : {
			"namem" : "Terrifiant",
			"namef" : "Terrifiante",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 2.5,
            "xp" : 2.5
		},
		"cruel" : {
			"namem" : "Cruel",
			"namef" : "Cruelle",
			"attaque" : 3,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 4
		},
		"original" : {
			"namem" : "Original",
			"namef" : "Originale",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"malade" : {
			"namem" : "Malade",
			"namef" : "Malade",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 0.10,
			"magie" : 1,
			"argent" : 0.25,
            "xp" : 0.25
		},
		"feroce" : {
			"namem" : "F&eacute;roce",
			"namef" : "F&eacute;roce",
			"attaque" : 1.75,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2.3
		},
		"glouton" : {
			"namem" : "Glouton",
			"namef" : "Gloutonne",
			"attaque" : 1.25,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"illumine" : {
			"namem" : "Illumin&eacute;",
			"namef" : "Illumin&eacute;e",
			"attaque" : 1,
			"defense" : 2,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 1,
            "xp" : 4
		},
		"savant" : {
			"namem" : "Savant",
			"namef" : "Savante",
			"attaque" : 1,
			"defense" : 3,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 4
		},
		"fouFurieux" : {
			"namem" : "Fou Furieux",
			"namef" : "Folle Furieuse",
			"attaque" : 4,
			"defense" : 1,
			"vie" : 0,
			"magie" : 1,
			"argent" : 1,
            "xp" : 4
		},
		"fragile" : {
			"namem" : "Fragile",
			"namef" : "Fragile",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 0,
			"magie" : 1,
			"argent" : 1,
            "xp" : 2
		},
		"pleunirchard" : {
			"namem" : "Pleurnichard",
			"namef" : "Pleurnicharde",
			"attaque" : 0.5,
			"defense" : 0.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"pauvre" : {
			"namem" : "Pauvre",
			"namef" : "Pauvre",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 0.2,
            "xp" : 1
		},
		"riche" : {
			"namem" : "Riche",
			"namef" : "Riche",
			"attaque" : 1.2,
			"defense" : 1.2,
			"vie" : 1.2,
			"magie" : 1.2,
			"argent" : 4,
            "xp" : 1
		}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		},
		getRandom : function() {
			var keyList = Object.keys(data);
			var randKey = keyList[Utils.rand(0, keyList.length)];
			return $.extend(true, {}, data[randKey]);
		}
	};
});