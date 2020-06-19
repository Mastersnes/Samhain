'use strict';
define([], function(){
	var data = {
	        /**
	        * Boutique
	        **/
            "boutique-nothing-1" : {
            	fr : "Vous n'avez rien à vendre.",
            	en : "You have nothing to sell.",
            	eo : "Vi havas nenio vendota."
            },
            "boutique-nothing-2" : {
            	fr : "Vos poches sont aussi vides que le crâne d'une goule&hellip;",
            	en : "You’re pockets are as empty as a ghoul’s head&hellip;",
            	eo : "Viaj poŝoj estas tiel malplenaj kiel la kapo de gulo&hellip;"
            },
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