'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"grognon" : {
			"namem" : "grognon",
			"namef" : "grognon",
			"attaque" : 1.3,
			"defense" : 1,
            "vie" : 1,
            "mana" : 0.7,
            "argent" : 2,
            "xp" : 2
		},
		"hargneux" : {
			"namem" : "hargneux-m",
			"namef" : "hargneux-f",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1.5,
			"mana" : 1,
			"argent" : 2,
            "xp" : 2
		},
		"debile" : {
			"namem" : "debile",
			"namef" : "debile",
			"attaque" : 0.25,
			"defense" : 1,
			"vie" : 0.25,
			"mana" : 0.25,
			"argent" : 0.8,
            "xp" : 0.8
		},
		"borgne" : {
			"namem" : "borgne",
			"namef" : "borgne",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 1,
			"mana" : 0.5,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"timide" : {
			"namem" : "timide",
			"namef" : "timide",
			"attaque" : 1,
			"defense" : 1.5,
			"vie" : 1,
			"mana" : 1.3,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"freluquet" : {
			"namem" : "freluquet",
			"namef" : "freluquet",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 0.5,
			"mana" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"bourrin" : {
			"namem" : "bourrin-m",
			"namef" : "bourrin-f",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 0.5,
			"mana" : 0.5,
			"argent" : 2,
            "xp" : 2
		},
		"costaud" : {
			"namem" : "costaud",
			"namef" : "costaud",
			"attaque" : 1.5,
			"defense" : 2,
			"vie" : 1.5,
			"mana" : 1,
			"argent" : 3,
            "xp" : 3
		},
		"fairplay" : {
			"namem" : "fairplay",
			"namef" : "fairplay",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"mana" : 1,
			"argent" : 1.3,
            "xp" : 1.3
		},
		"mignon" : {
			"namem" : "mignon-m",
			"namef" : "mignon-f",
			"attaque" : 1,
			"defense" : 0.75,
			"vie" : 0.75,
			"mana" : 1.5,
			"argent" : 0.75,
            "xp" : 0.75
		},
		"terrifiant" : {
			"namem" : "terrifiant-m",
			"namef" : "terrifiant-f",
			"attaque" : 2,
			"defense" : 1,
			"vie" : 1.5,
			"mana" : 1.2,
			"argent" : 2.5,
            "xp" : 2.5
		},
		"cruel" : {
			"namem" : "cruel-m",
			"namef" : "cruel-f",
			"attaque" : 3,
			"defense" : 1,
			"vie" : 1,
			"mana" : 1,
			"argent" : 2,
            "xp" : 4
		},
		"original" : {
			"namem" : "original-m",
			"namef" : "original-f",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 1,
			"mana" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"malade" : {
			"namem" : "malade",
			"namef" : "malade",
			"attaque" : 0.5,
			"defense" : 1,
			"vie" : 0.10,
			"mana" : 0.2,
			"argent" : 0.25,
            "xp" : 0.25
		},
		"feroce" : {
			"namem" : "feroce",
			"namef" : "feroce",
			"attaque" : 1.75,
			"defense" : 1,
			"vie" : 1,
			"mana" : 1,
			"argent" : 2,
            "xp" : 2.3
		},
		"glouton" : {
			"namem" : "glouton-m",
			"namef" : "glouton-f",
			"attaque" : 1.25,
			"defense" : 1,
			"vie" : 1,
			"mana" : 1.2,
			"argent" : 2,
            "xp" : 2
		},
		"illumine" : {
			"namem" : "illumine-m",
			"namef" : "illumine-f",
			"attaque" : 1,
			"defense" : 2,
			"vie" : 1.5,
			"mana" : 2,
			"argent" : 1,
            "xp" : 4
		},
		"savant" : {
			"namem" : "savant-m",
			"namef" : "savant-f",
			"attaque" : 1,
			"defense" : 3,
			"vie" : 1,
			"mana" : 3,
			"argent" : 2,
            "xp" : 4
		},
		"fouFurieux" : {
			"namem" : "fouFurieux-m",
			"namef" : "fouFurieux-f",
			"attaque" : 4,
			"defense" : 1,
			"vie" : 0.5,
			"mana" : 0.6,
			"argent" : 1,
            "xp" : 4
		},
		"fragile" : {
			"namem" : "fragile",
			"namef" : "fragile",
			"attaque" : 1,
			"defense" : 1,
			"vie" : 0.5,
			"mana" : 1.2,
			"argent" : 1,
            "xp" : 2
		},
		"peureux" : {
			"namem" : "peureux-m",
			"namef" : "peureux-f",
			"attaque" : 0.5,
			"defense" : 0.5,
			"vie" : 1,
			"mana" : 0.8,
			"argent" : 1,
            "xp" : 1
		},
		"pauvre" : {
			"namem" : "pauvre",
			"namef" : "pauvre",
			"attaque" : 1,
			"defense" : 0.5,
			"vie" : 1,
			"mana" : 1,
			"argent" : 0.2,
            "xp" : 1
		},
		"riche" : {
			"namem" : "riche",
			"namef" : "riche",
			"attaque" : 1.2,
			"defense" : 1.2,
			"vie" : 1.2,
			"mana" : 1.2,
			"argent" : 5,
            "xp" : 1
		},
		"resistant" : {
            "namem" : "resistant-m",
            "namef" : "resistant-f",
            "attaque" : 1,
            "defense" : 4,
            "vie" : 2,
            "mana" : 0.5,
            "argent" : 3,
            "xp" : 3
        },
        "incassable" : {
            "namem" : "incassable",
            "namef" : "incassable",
            "attaque" : 1.3,
            "defense" : 5,
            "vie" : 3,
            "mana" : 0.5,
            "argent" : 4,
            "xp" : 4
        },
        "manchot" : {
            "namem" : "manchot-m",
            "namef" : "manchot-f",
            "attaque" : 0.5,
            "defense" : 0.5,
            "vie" : 0.8,
            "mana" : 1,
            "argent" : 0.5,
            "xp" : 0.5
            "unique" : true
        },
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return Utils.clone(data[key]);
		},
		getRandom : function() {
		    var keyList = [];
		    for (var i in data) {
		        if (!data[i].unique) keyList.push(i);
		    }
			var randKey = keyList[Utils.rand(0, keyList.length)];
			return Utils.clone(data[randKey]);
		}
	};
});