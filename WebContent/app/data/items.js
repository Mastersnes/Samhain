'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
	    "arme" : {
	        "poing" : {
                "name" : "poing",
                "textes" : ["poing-texte"],
                "degats" : [1, 3],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "punch",
                "anim" : "poing",
                "price" : 0
            },
            "baton" : {
                "name" : "baton",
                "textes" : ["baton-texte"],
                "degats" : [2, 5],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "baton",
                "anim" : "baton",
                "price" : 10
            },
            "dague" : {
                "name" : "dague",
                "textes" : ["dague-texte"],
                "degats" : [5, 10],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "dagguer",
                "anim" : "dague",
                "price" : 30
            },
            "epee" : {
                "name" : "epee",
                "textes" : ["epee-texte"],
                "degats" : [5, 15],
                "lifeSteal" : [0, 0],
                "manaCost" : [0, 0],
                "sound" : "sword",
                "anim" : "epee",
                "price" : 50
            },
            "crocRoi" : {
                "name" : "crocRoi",
                "textes" : ["crocRoi-texte"],
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
                "textes" : ["bras-texte"],
                "defense" : [0, 2],
                "manaCost" : [0, 0],
                "sound" : "block",
                "anim" : null,
                "price" : 0
            },
            "bouclierBois" : {
                "name" : "bouclierBois",
                "textes" : ["bouclierBois-texte"],
                "defense" : [3, 5],
                "manaCost" : [0, 0],
                "sound" : "woodblock",
                "anim" : null,
                "price" : 20
            },
            "bouclierFer" : {
                "name" : "bouclierFer",
                "textes" : ["bouclierFer-texte"],
                "defense" : [5, 10],
                "manaCost" : [0, 0],
                "sound" : "ironblock",
                "anim" : null,
                "price" : 40
            }
	    },
	    "conso" : {
	        "potionSante" : {
                "name" : "potionSante",
                "textes" : ["potionSante-texte"],
                "degats" : [0, 0],
                "vie" : [30, 60],
                "mana" : [0, 0],
                "sound" : "drink",
                "anim" : null,
                "price" : 30
            },
            "fromage" : {
                "name" : "fromage",
                "textes" : ["fromage-texte"],
                "degats" : [0, 0],
                "vie" : [20, 50],
                "mana" : [0, 0],
                "sound" : "eat",
                "anim" : null,
                "price" : 20
            },
            "pomme" : {
                "name" : "pomme",
                "textes" : ["pomme-texte"],
                "degats" : [0, 0],
                "vie" : [15, 30],
                "mana" : [0, 0],
                "sound" : "eat",
                "anim" : null,
                "price" : 10
            },
            "venin" : {
                "name" : "venin",
                "textes" : ["venin-texte"],
                "degats" : [10, 30],
                "vie" : [0, 0],
                "mana" : [0, 0],
                "sound" : "acide",
                "anim" : "venin",
                "multicible" : true,
                "price" : 30
            },
            "elixir" : {
                "name" : "elixir",
                "textes" : ["elixir-texte"],
                "degats" : [0, 0],
                "vie" : [40, 150],
                "mana" : [40, 150],
                "sound" : "drink",
                "anim" : null,
                "price" : 50
            }
	    },
	    "magie" : {
	        "bouleFeu" : {
                "name" : "bouleFeu",
                "textes" : ["bouleFeu-texte"],
                "degats" : [10, 20],
                "vie" : [0, 0],
                "manaCost" : 5,
                "sound" : "bouleFeu",
                "anim" : "bouleFeu"
            },
            "soin" : {
                "name" : "soin",
                "textes" : ["soin-texte"],
                "degats" : [0, 0],
                "vie" : [20, 60],
                "manaCost" : 5,
                "sound" : "soin",
                "anim" : null
            }
	    },
	    "clef" : {
	        "bougie" : {
                "name" : "bougie",
                "textes" : ["bougie-texte"]
            },
            "clefS2" : {
                "name" : "clefS2",
                "textes" : ["clefS2-texte"]
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
		}
	};
});