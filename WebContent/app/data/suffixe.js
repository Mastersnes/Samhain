'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"grognon" : {
			"namem" : "grognon",
			"namef" : "grognon",
			"attaque" : 1.2,
			"defense" : 0,
            "vie" : 1.1,
            "mana" : 0.7,
            "argent" : 1.2,
            "xp" : 1.2
		},
		"hargneux" : {
			"namem" : "hargneux-m",
			"namef" : "hargneux-f",
			"attaque" : 1.2,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"debile" : {
			"namem" : "debile",
			"namef" : "debile",
			"attaque" : 0.5,
			"defense" : 0,
			"vie" : 0.6,
			"mana" : 0.5,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"borgne" : {
			"namem" : "borgne",
			"namef" : "borgne",
			"attaque" : 0.5,
			"defense" : 0,
			"vie" : 1.2,
			"mana" : 0.5,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"timide" : {
			"namem" : "timide",
			"namef" : "timide",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1.2,
			"mana" : 1.5,
			"argent" : 1,
            "xp" : 1
		},
		"freluquet" : {
			"namem" : "freluquet",
			"namef" : "freluquet",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 0.8,
			"mana" : 1,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"bourrin" : {
			"namem" : "bourrin-m",
			"namef" : "bourrin-f",
			"attaque" : 1.5,
			"defense" : 0,
			"vie" : 0.8,
			"mana" : 0.25,
			"argent" : 1.3,
            "xp" : 1.3
		},
		"costaud" : {
			"namem" : "costaud",
			"namef" : "costaud",
			"attaque" : 1.3,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 1,
			"argent" : 1.3,
            "xp" : 1.3
		},
		"fairplay" : {
			"namem" : "fairplay",
			"namef" : "fairplay",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1.2,
			"mana" : 1,
			"argent" : 1.2,
            "xp" : 1.2
		},
		"mignon" : {
			"namem" : "mignon-m",
			"namef" : "mignon-f",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1,
			"mana" : 1.5,
			"argent" : 0.8,
            "xp" : 1
		},
		"terrifiant" : {
			"namem" : "terrifiant-m",
			"namef" : "terrifiant-f",
			"attaque" : 1.5,
			"defense" : 0,
			"vie" : 1.8,
			"mana" : 1.3,
			"argent" : 1.5,
            "xp" : 1.5
		},
		"cruel" : {
			"namem" : "cruel-m",
			"namef" : "cruel-f",
			"attaque" : 1.8,
			"defense" : 0,
			"vie" : 1.2,
			"mana" : 1,
			"argent" : 1.3,
            "xp" : 1.5
		},
		"original" : {
			"namem" : "original-m",
			"namef" : "original-f",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1,
			"mana" : 1,
			"argent" : 1,
            "xp" : 1
		},
		"malade" : {
			"namem" : "malade",
			"namef" : "malade",
			"attaque" : 0.5,
			"defense" : 0,
			"vie" : 0.5,
			"mana" : 0.25,
			"argent" : 0.5,
            "xp" : 0.5
		},
		"feroce" : {
			"namem" : "feroce",
			"namef" : "feroce",
			"attaque" : 1.8,
			"defense" : 0,
			"vie" : 1.6,
			"mana" : 1,
			"argent" : 1.3,
            "xp" : 1.5
		},
		"glouton" : {
			"namem" : "glouton-m",
			"namef" : "glouton-f",
			"attaque" : 1.25,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 1.2,
			"argent" : 1.2,
            "xp" : 1.3
		},
		"illumine" : {
			"namem" : "illumine-m",
			"namef" : "illumine-f",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 2,
			"argent" : 1.2,
            "xp" : 1.5
		},
		"savant" : {
			"namem" : "savant-m",
			"namef" : "savant-f",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 1.2,
			"mana" : 2.5,
			"argent" : 1.5,
            "xp" : 1.5
		},
		"fouFurieux" : {
			"namem" : "fouFurieux-m",
			"namef" : "fouFurieux-f",
			"attaque" : 2.5,
			"defense" : 0,
			"vie" : 0.8,
			"mana" : 0.5,
			"argent" : 1.5,
            "xp" : 1.5
		},
		"fragile" : {
			"namem" : "fragile",
			"namef" : "fragile",
			"attaque" : 1,
			"defense" : 0,
			"vie" : 0.8,
			"mana" : 1.3,
			"argent" : 1.3,
            "xp" : 1.2
		},
		"peureux" : {
			"namem" : "peureux-m",
			"namef" : "peureux-f",
			"attaque" : 0.5,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 0.5,
			"argent" : 0.8,
            "xp" : 1
		},
		"pauvre" : {
			"namem" : "pauvre",
			"namef" : "pauvre",
			"attaque" : 0.8,
			"defense" : 0,
			"vie" : 1,
			"mana" : 0.8,
			"argent" : 0.25,
            "xp" : 1
		},
		"riche" : {
			"namem" : "riche",
			"namef" : "riche",
			"attaque" : 1.1,
			"defense" : 0,
			"vie" : 1.5,
			"mana" : 1.2,
			"argent" : 3,
            "xp" : 1
		},
		"resistant" : {
            "namem" : "resistant-m",
            "namef" : "resistant-f",
            "attaque" : 0.75,
            "defense" : 0,
            "vie" : 2.2,
            "mana" : 1,
            "argent" : 1.3,
            "xp" : 1.3
        },
        "incassable" : {
            "namem" : "incassable",
            "namef" : "incassable",
            "attaque" : 0.75,
            "defense" : 0,
            "vie" : 3,
            "mana" : 0.5,
            "argent" : 1.5,
            "xp" : 1.5
        },
        "paresseux" : {
            "namem" : "paresseux-m",
            "namef" : "paresseux-f",
            "attaque" : 0.8,
            "defense" : 0,
            "vie" : 1.5,
            "mana" : 1.5,
            "argent" : 1,
            "xp" : 1
        },
        "rieur" : {
            "namem" : "rieur-m",
            "namef" : "rieur-f",
            "attaque" : 1.3,
            "defense" : 0,
            "vie" : 1.8,
            "mana" : 0.5,
            "argent" : 1.3,
            "xp" : 1.3
        },
        "silencieux" : {
            "namem" : "silencieux-m",
            "namef" : "silencieux-f",
            "attaque" : 1.3,
            "defense" : 0,
            "vie" : 2,
            "mana" : 1.5,
            "argent" : 0.8,
            "xp" : 1.3
        },
        "precis" : {
            "namem" : "precis-m",
            "namef" : "precis-f",
            "attaque" : 1.8,
            "defense" : 0,
            "vie" : 1.2,
            "mana" : 1.3,
            "argent" : 1.5,
            "xp" : 1.5
        },
        "blesse" : {
            "namem" : "blesse-m",
            "namef" : "blesse-f",
            "attaque" : 0.8,
            "defense" : 0,
            "vie" : 0.8,
            "mana" : 1,
            "argent" : 0.8,
            "xp" : 1
        },

        /**
        * Uniques
        **/
        "manchot" : {
            "namem" : "manchot-m",
            "namef" : "manchot-f",
            "attaque" : 0.5,
            "defense" : 0,
            "vie" : 0.8,
            "mana" : 1,
            "argent" : 0.5,
            "xp" : 0.5,
            "unique" : true
        },
        "lancien" : {
            "namem" : "lancien-m",
            "namef" : "lancien-f",
            "attaque" : 1.3,
            "defense" : 0,
            "vie" : 1.2,
            "mana" : 1.5,
            "argent" : 1,
            "xp" : 1,
            "unique" : true
        },
        "spectral" : {
            "namem" : "spectral-m",
            "namef" : "spectral-f",
            "attaque" : 1.3,
            "defense" : 0,
            "vie" : 1.3,
            "mana" : 1.2,
            "argent" : 1,
            "xp" : 1,
            "unique" : true
        },

        /**
        * Castagne
        **/
        "dechaine" : {
            "namem" : "dechaine-m",
            "namef" : "dechaine-f",
            "attaque" : 2.8,
            "defense" : 0,
            "vie" : 1.8,
            "mana" : 0,
            "argent" : 0,
            "xp" : 1.5,
            "unique" : true
        },
        "raoul" : {
            "namem" : "raoul",
            "namef" : "raoul",
            "attaque" : 2,
            "defense" : 0,
            "vie" : 3,
            "mana" : 1,
            "argent" : 1.5,
            "xp" : 1,
            "unique" : true,
            "noname" : true
        },
        "viscerole" : {
            "namem" : "viscerole",
            "namef" : "viscerole",
            "attaque" : 3,
            "defense" : 0,
            "vie" : 5,
            "mana" : 2,
            "argent" : 2,
            "xp" : 2,
            "unique" : true,
            "noname" : true
        },
        "kraken" : {
            "namem" : "kraken",
            "namef" : "kraken",
            "attaque" : 2.5,
            "defense" : 0,
            "vie" : 2.5,
            "mana" : 1,
            "argent" : 2,
            "xp" : 1.5,
            "unique" : true,
            "noname" : true
        },
        "kraken-blesse" : {
            "namem" : "kraken-blesse",
            "namef" : "kraken-blesse",
            "attaque" : 2,
            "defense" : 0,
            "vie" : 1.5,
            "mana" : 0,
            "argent" : 0,
            "xp" : 0.5,
            "unique" : true,
            "noname" : true
        },
        "tavernier" : {
            "namem" : "tavernier",
            "namef" : "tavernier",
            "attaque" : 6,
            "defense" : 0,
            "vie" : 20,
            "mana" : 3,
            "argent" : 2,
            "xp" : 3,
            "unique" : true,
            "noname" : true
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
		},

        /**
        * Renvoi la liste des suffixe pour le glossaire
        **/
        list : function() {
            return data;
        }
	};
});