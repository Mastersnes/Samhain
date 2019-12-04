'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
        "poison" : {
            "name" : "poison",
            "element" : "poison",
            "duree" : [1, 3],
            "degats" : [1, 3],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "poison-2" : {
            "name" : "poison-2",
            "element" : "poison",
            "duree" : [2, 6],
            "degats" : [2, 6],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },

        "satiete" : {
            "name" : "satiete",
            "element" : "sante",
            "duree" : [3, 5],
            "vie" : [3, 5],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },
        "satiete-2" : {
            "name" : "satiete-2",
            "element" : "sante",
            "duree" : [3, 5],
            "vie" : [6, 10],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },

        "brulure" : {
            "name" : "brulure",
            "element" : "feu",
            "duree" : [1, 2],
            "degats" : [2, 4],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "brulure-2" : {
            "name" : "brulure-2",
            "element" : "feu",
            "duree" : [2, 4],
            "degats" : [4, 8],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },

        "saignement" : {
            "name" : "saignement",
            "element" : "saignement",
            "duree" : [1, 2],
            "degats" : [1, 5],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "saignement-2" : {
            "name" : "saignement-2",
            "element" : "saignement",
            "duree" : [2, 6],
            "degats" : [1, 10],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        }
	};
	
	return {
		get : function(key) {
		    return Utils.clone(data[key]);
		},

		/**
         * Liste pour l'affichage
         **/
        list : function(letter, Textes) {
            var resultats = [];
            for (var etat in data) {
                var etatName = Utils.normalize(Textes.get(etat));
                if(etatName.startsWith(letter)) resultats.push(etat);
            }
            return resultats;
        }
	};
});