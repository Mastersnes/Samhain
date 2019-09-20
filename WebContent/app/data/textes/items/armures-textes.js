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
                fr : "Votre bras... Tout simplement... Vous pouvez en être fier !",
                en : "Your arm... Quite simply... You can be proud of it!"
            },
            "bouclierBois" : {
                fr : "Bouclier de bois",
                en : "Wooden Shield"
            },
            "bouclierBois-action" : {
                fr : "Parer avec le Bouclier",
                en : "Parry with the Shield"
            },
            "bouclierBois-texte" : {
                fr : "Un bouclier en bois assez banale. Il semble plutôt résistant.",
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
                fr : "Un grand bouclier en fer ! Il est très résistant.",
                en : "A big iron shield! It is very resistant."
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});