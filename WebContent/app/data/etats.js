'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
        "poison" : {
            "name" : "poison",
            "element" : "poison",
            "duree" : [1, 3],
            "degats" : [1, 3],
            "vie" : [0, 0],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "poison-2" : {
            "name" : "poison",
            "element" : "poison",
            "duree" : [3, 5],
            "degats" : [2, 5],
            "vie" : [0, 0],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "satiete" : {
            "name" : "satiete",
            "element" : "sante",
            "duree" : [3, 5],
            "degats" : [0, 0],
            "vie" : [1, 5],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },
        "brulure" : {
            "name" : "brulure",
            "element" : "feu",
            "duree" : [1, 2],
            "degats" : [3, 5],
            "vie" : [0, 0],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "saignement" : {
            "name" : "saignement",
            "element" : "saignement",
            "duree" : [2, 3],
            "degats" : [1, 10],
            "vie" : [0, 0],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        }
	};
	
	return {
		get : function(key) {
		    return Utils.clone(data[key]);
		}
	};
});