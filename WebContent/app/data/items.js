'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
	    "arme" : {
	        "poing" : {
                "name" : "poing",
                "texte" : "poing-texte",
                "degats" : [1, 3],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "punch",
                "anim" : "poing",
                "price" : 0
            },
            "baton" : {
                "name" : "baton",
                "texte" : "baton-texte",
                "degats" : [2, 5],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "baton",
                "anim" : "baton",
                "price" : 30
            },
            "dague" : {
                "name" : "dague",
                "texte" : "dague-texte",
                "degats" : [5, 10],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "dagguer",
                "anim" : "dague",
                "price" : 50
            },
            "epee" : {
                "name" : "epee",
                "texte" : "epee-texte",
                "degats" : [5, 15],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "sword",
                "anim" : "epee",
                "price" : 100
            },
            "crocRoi" : {
                "name" : "crocRoi",
                "texte" : "crocRoi-texte",
                "degats" : [5, 15],
                "lifeSteal" : [0, 10],
                "manaCost" : [0, 0],
                "sound" : "croc",
                "anim" : "croc",
                "price" : 0
            }
	    },
	    "bouclier" : {
	        "bras" : {
                "name" : "bras",
                "texte" : "bras-texte",
                "defense" : [0, 2],
                "manaCost" : [0, 0],
                "sound" : "block",
                "anim" : null,
                "price" : 0
            },
            "bouclierBois" : {
                "name" : "bouclierBois",
                "texte" : "bouclierBois-texte",
                "defense" : [3, 5],
                "manaCost" : [0, 0],
                "sound" : "woodblock",
                "anim" : null,
                "price" : 50
            },
            "bouclierFer" : {
                "name" : "bouclierFer",
                "texte" : "bouclierFer-texte",
                "defense" : [5, 10],
                "manaCost" : [0, 0],
                "sound" : "ironblock",
                "anim" : null,
                "price" : 100
            }
	    },
	    "conso" : {
	        "potionSante" : {
                "name" : "potionSante",
                "texte" : "potionSante-texte",
                "degats" : [0, 0],
                "vie" : [30, 60],
                "effet" : [],
                "mana" : [0, 0],
                "sound" : "drink",
                "anim" : null,
                "price" : 50,
                "offensif" : false
            },
            "potionMana" : {
                "name" : "potionMana",
                "texte" : "potionMana-texte",
                "degats" : [0, 0],
                "vie" : [0, 0],
                "effet" : [],
                "mana" : [30, 60],
                "sound" : "drink",
                "anim" : null,
                "price" : 70,
                "offensif" : false
            },
            "fromage" : {
                "name" : "fromage",
                "texte" : "fromage-texte",
                "degats" : [0, 0],
                "vie" : [20, 50],
                "mana" : [0, 0],
                "effet" : ["satiete"],
                "sound" : "eat",
                "anim" : null,
                "price" : 30,
                "offensif" : false
            },
            "pomme" : {
                "name" : "pomme",
                "texte" : "pomme-texte",
                "degats" : [0, 0],
                "vie" : [15, 30],
                "mana" : [0, 0],
                "effet" : ["satiete"],
                "sound" : "eat",
                "anim" : null,
                "price" : 15,
                "offensif" : false
            },
            "venin" : {
                "name" : "venin",
                "texte" : "venin-texte",
                "degats" : [10, 30],
                "vie" : [0, 0],
                "mana" : [0, 0],
                "effet" : ["poison"],
                "sound" : "acide",
                "anim" : "venin",
                "multicible" : true,
                "price" : 80,
                "offensif" : true
            },
            "elixir" : {
                "name" : "elixir",
                "texte" : "elixir-texte",
                "degats" : [0, 0],
                "vie" : [40, 150],
                "mana" : [40, 150],
                "effet" : [],
                "sound" : "drink",
                "anim" : null,
                "price" : 100,
                "offensif" : false
            }
	    },
	    "magie" : {
	        "bouleFeu" : {
                "name" : "bouleFeu",
                "texte" : "bouleFeu-texte",
                "degats" : [5, 10],
                "vie" : [0, 0],
                "lifeSteal" : [0, 0],
                "effet" : ["brulure"],
                "manaCost" : 5,
                "sound" : "bouleFeu",
                "anim" : "bouleFeu",
                "price" : 100,
                "offensif" : true
            },
            "soin" : {
                "name" : "soin",
                "texte" : "soin-texte",
                "degats" : [0, 0],
                "vie" : [20, 60],
                "lifeSteal" : [0, 0],
                "effet" : [],
                "manaCost" : 5,
                "sound" : "soin",
                "anim" : null,
                "price" : 150,
                "offensif" : false
            },
            "morsure" : {
                "name" : "morsure",
                "texte" : "morsure-texte",
                "degats" : [2, 5],
                "vie" : [0, 0],
                "lifeSteal" : [0, 1],
                "effet" : ["poison"],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true
            }
	    },
	    "clef" : {
	        "bougie" : {
                "name" : "bougie",
                "texte" : "bougie-texte"
            },
            "clefS2" : {
                "name" : "clefS2",
                "texte" : "clefS2-texte"
            }
	    },
	    "ifObj" : [
	        "helpRoi", "helpRoi2", "necroS1Clean", "hadClef", "S1ViaS0", "S3ViaS0", "viaS1", "viaS3",
	        "parchoLu", "fouilleCercueil", "torcheAllumeG", "torcheExploseG", "torcheAllumeD", "torcheExploseD",
	        "S2Ouvert", "S2Clean", "S4Clean", "S5Clean"
        ]
	};
	
	return {
		get : function(param1, param2) {
		    if (!param2) return this.getAll(param1);
		    else return this.getByType(param1, param2);
		},

		getAll : function(key) {
		    var item = this.getByType("arme", key);

		    if (!item) item = this.getByType("bouclier", key);
		    if (!item) item = this.getByType("conso", key);
		    if (!item) item = this.getByType("magie", key);
		    if (!item) item = this.getByType("clef", key);
		    // Sinon, IfObj
		    if (!item) item = key;

		    return item;
		},

		getByType : function(type, key) {
		    var items = data[type];
		    var item = null;
		    if (items && items[key]) {
		        item = Utils.clone(items[key]);
		        if (type != "ifObj") item.type = type;
		    }
		    return item;
		},

		list : function(letter, Textes) {
		    var resultats = this.listByType("arme", letter, Textes);
		    resultats = resultats.concat(this.listByType("bouclier", letter, Textes))
		    resultats = resultats.concat(this.listByType("conso", letter, Textes))
		    resultats = resultats.concat(this.listByType("magie", letter, Textes))
		    return resultats;
		},
		listByType : function(type, letter, Textes) {
		    var resultats = [];
		    for (var item in data[type]) {
		        var itemName = Utils.normalize(Textes.get(item));
		        if(itemName.startsWith(letter)) resultats.push(item);
		    }
		    return resultats;
		}
	};
});