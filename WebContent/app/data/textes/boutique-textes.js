'use strict';
define([], function(){
	var data = {
	        /**
	        * Boutique
	        **/
            "boutique-nothing-1" : {
                fr : "Vous n'avez rien à vendre.",
                en : ""
            },
            "boutique-nothing-2" : {
                fr : "Vos poches sont aussi vides que le crâne d'une goule&hellip;",
                en : ""
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