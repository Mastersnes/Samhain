'use strict';
define([], function(){
	var data = {
	        /**
	        * Etats
	        **/
	        "poison" : {
                fr : "Poison",
                en : "Poison"
            },
	        "satiete" : {
                fr : "Satiété",
                en : "Satiety"
            },
	        "brulure" : {
                fr : "Brûlure",
                en : "Burn"
            },
	        "saignement" : {
                fr : "Saignement",
                en : "Bleeding"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});