'use strict';
define([], function(){
	var data = {
	        /**
	        * Armures
	        **/
	        "bras" : {
            	fr : "Bras",
            	en : "Arm",
            	eo : "Brako"
            },
            "bras-action" : {
            	fr : "Bloquer avec son Bras",
            	en : "Block with your Arm",
            	eo : "Haltigi per via Brako"
            },
            "bras-texte" : {
            	fr : "Votre bras&hellip; Tout simplement&hellip; Vous pouvez en être fier&nbsp;!",
            	en : "It’s just your arm&hellip; You can be proud of it!",
            	eo : "Tutsimple via brako&hellip; Vi povas esti fiera pri ĝi!"
            },
            "bouclierBois" : {
            	fr : "Bouclier en bois",
            	en : "Wooden Shield",
            	eo : "Ŝildo el ligno"
            },
            "bouclierBois-action" : {
            	fr : "Parer avec le Bouclier",
            	en : "Block with the Shield",
            	eo : "Haltigi per la Ŝildo"
            },
            "bouclierBois-texte" : {
            	fr : "Un bouclier en bois assez banal. Il semble plutôt résistant.",
            	en : "A pretty common wooden shield. It seems quite resistant.",
            	eo : "Banala ŝildo el ligno. Ĝi ŝajnas relative fortika."
            },
            "bouclierFer" : {
            	fr : "Bouclier en fer",
            	en : "Iron Shield",
            	eo : "Ŝildo el fero"
            },
            "bouclierFer-action" : {
            	fr : "Contre attaquer avec le Bouclier",
            	en : "Counterattack with the Shield",
            	eo : "Kontraŭataki per la Ŝildo"
            },
            "bouclierFer-texte" : {
            	fr : "Un grand bouclier en fer&nbsp;! Il est très résistant.",
            	en : "A large iron shield! It’s very resistant.",
            	eo : "Granda ŝildo el fero! Ĝi estas tre fortika."
            }
	};
	
	return {
        name : function() {
            return "Armures.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});