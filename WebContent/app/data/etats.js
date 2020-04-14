'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
        "poison" : {
            "name" : "poison",
            "element" : "poison",
            "duree" : [1, 2],
            "degats" : [1, 2],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "poison-2" : {
            "name" : "poison-2",
            "element" : "poison",
            "duree" : [2, 3],
            "degats" : [1, 4],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },

        "satiete" : {
            "name" : "satiete",
            "element" : "sante",
            "duree" : [3, 6],
            "vie" : [3, 6],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },
        "satiete-2" : {
            "name" : "satiete-2",
            "element" : "sante",
            "duree" : [3, 6],
            "vie" : [6, 12],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },

        "brulure" : {
            "name" : "brulure",
            "element" : "feu",
            "duree" : [1, 2],
            "degats" : [1, 4],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "brulure-2" : {
            "name" : "brulure-2",
            "element" : "feu",
            "duree" : [2, 3],
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
            "duree" : [1, 3],
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
        list : function(letters, Textes, stopAtFirst) {
            var resultats = [];
            if (Array.isArray(letters)) {
                for (var i in letters) {
                    var subResult = this.list(letters[i], Textes, stopAtFirst);
                    resultats = resultats.concat(subResult);

                    // Amelioration des perf
                    if (stopAtFirst && resultats.length > 0) return resultats;
                }
            }else {
                var letter = letters;
                for (var etat in data) {
                    var etatName = Utils.normalize(Textes.get(etat));
                    if(etatName.indexOf(letter, 0) === 0) resultats.push(etat);

                    // Amelioration des perf
                    if (stopAtFirst && resultats.length > 0) return resultats;
                }
            }
            return resultats;
        }
	};
});