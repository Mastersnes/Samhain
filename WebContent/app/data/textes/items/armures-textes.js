'use strict';
define([], function(){
	var data = {
	        /**
	        * Armures
	        **/
	        "bras" : {
                fr : "Bras",
                en : "Arm"
            },
            "bras-action" : {
                fr : "Bloquer avec son Bras",
                en : "Block with Arm",
                eo : "Bloki per la Brako"
            },
            "bras-texte" : {
                fr : "Votre bras&hellip; Tout simplement&hellip; Vous pouvez en être fier&nbsp;!",
                en : "Your arm&hellip; Quite simply&hellip; You can be proud of it!"
            },
            "bouclierBois" : {
                fr : "Bouclier en bois",
                en : "Wooden Shield"
            },
            "bouclierBois-action" : {
                fr : "Parer avec le Bouclier",
                en : "Parry with the Shield"
            },
            "bouclierBois-texte" : {
                fr : "Un bouclier en bois assez banal. Il semble plutôt résistant.",
                en : "A fairly commonplace wooden shield. He seems pretty resilient."
            },
            "bouclierFer" : {
                fr : "Bouclier en fer",
                en : "Iron Shield"
            },
            "bouclierFer-action" : {
                fr : "Contrer avec le Bouclier",
                en : "Countering with the Shield"
            },
            "bouclierFer-texte" : {
                fr : "Un grand bouclier en fer&nbsp;! Il est très résistant.",
                en : "A big iron shield! It is very resistant."
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});