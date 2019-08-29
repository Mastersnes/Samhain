'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
        "poison" : {
            "name" : "poison",
            "texte" : "poison-texte",
            "type" : "poison",
            "duree" : [1, 3],
            "degats" : [0, 3],
            "vie" : [0, 0],
            "sound" : null,
            "anim" : null,
            "offensif" : true
        },
        "satiete" : {
            "name" : "satiete",
            "texte" : "satiete-texte",
            "type" : "sante",
            "duree" : [1, 3],
            "degats" : [0, 0],
            "vie" : [1, 3],
            "sound" : null,
            "anim" : null,
            "offensif" : false
        },
        "brulure" : {
            "name" : "brulure",
            "texte" : "brulure-texte",
            "type" : "brulure",
            "duree" : [1, 3],
            "degats" : [0, 5],
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