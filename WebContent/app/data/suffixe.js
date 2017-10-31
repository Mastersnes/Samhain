'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"grognon" : {
			"namem" : "grognon",
			"namef" : "grognon",
			"attaque" : 1.3,
			"defense" : 1,
            "vie" : 1,
            "magie" : 1,
            "argent" : 2,
            "xp" : 2
		},
		"hargneux" : {
			"namem" : "hargneux-m",
			"namef" : "hargneux-f",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"debile" : {
			"namem" : "debile",
			"namef" : "debile",
			"attaque" : 0.25,
			"defense" : 1,
			"vie" : 0.25,
			"magie" : 1,
			"argent" : 0.8,
            "xp" : 0.8
		},
		"borgne" : {
			"namem" : "borgne",
			"namef" : "borgne",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"timide" : {
			"namem" : "timide",
			"namef" : "timide",
			"attaque" : 1,
			"defense" : 1.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"freluquet" : {
			"namem" : "freluquet",
			"namef" : "freluquet",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 0.5,
			"magie" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"bourrin" : {
			"namem" : "bourrin-m",
			"namef" : "bourrin-f",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 0.5,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"costaud" : {
			"namem" : "costaud",
			"namef" : "costaud",
			"attaque" : 1.5,
			"defense" : 2,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 3,
            "xp" : 3
		},
		"fairplay" : {
			"namem" : "fairplay",
			"namef" : "fairplay",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"mignon" : {
			"namem" : "mignon-m",
			"namef" : "mignon-f",
			"attaque" : 1,
			"defense" : 0.75,
			"vie" : 0.75,
			"magie" : 1,
			"argent" : 0.75,
            "xp" : 0.75
		},
		"terrifiant" : {
			"namem" : "terrifiant-m",
			"namef" : "terrifiant-f",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 2.5,
            "xp" : 2.5
		},
		"cruel" : {
			"namem" : "cruel-m",
			"namef" : "cruel-f",
			"attaque" : 3,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 4
		},
		"original" : {
			"namem" : "original-m",
			"namef" : "original-f",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"malade" : {
			"namem" : "malade",
			"namef" : "malade",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 0.10,
			"magie" : 1,
			"argent" : 0.25,
            "xp" : 0.25
		},
		"feroce" : {
			"namem" : "feroce",
			"namef" : "feroce",
			"attaque" : 1.75,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2.3
		},
		"glouton" : {
			"namem" : "glouton-m",
			"namef" : "glouton-f",
			"attaque" : 1.25,
			"defense" : 1,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"illumine" : {
			"namem" : "illumine-m",
			"namef" : "illumine-f",
			"attaque" : 1,
			"defense" : 2,
			"vie" : 1.5,
			"magie" : 1,
			"argent" : 1,
            "xp" : 4
		},
		"savant" : {
			"namem" : "savant-m",
			"namef" : "savant-f",
			"attaque" : 1,
			"defense" : 3,
			"vie" : 1,
			"magie" : 1,
			"argent" : 2,
            "xp" : 4
		},
		"fouFurieux" : {
			"namem" : "fouFurieux-m",
			"namef" : "fouFurieux-f",
			"attaque" : 4,
			"defense" : 1,
			"vie" : 0,
			"magie" : 1,
			"argent" : 1,
            "xp" : 4
		},
		"fragile" : {
			"namem" : "fragile",
			"namef" : "fragile",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 0,
			"magie" : 1,
			"argent" : 1,
            "xp" : 2
		},
		"pleunirchard" : {
			"namem" : "pleunirchard-m",
			"namef" : "pleunirchard-f",
			"attaque" : 0.5,
			"defense" : 0.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"pauvre" : {
			"namem" : "pauvre",
			"namef" : "pauvre",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 1,
			"magie" : 1,
			"argent" : 0.2,
            "xp" : 1
		},
		"riche" : {
			"namem" : "riche",
			"namef" : "riche",
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