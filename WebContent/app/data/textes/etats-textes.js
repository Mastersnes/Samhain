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
	        "poison-action" : {
                fr : "Empoisonné",
                en : "Poisoned"
            },
	        "satiete" : {
                fr : "Satiété",
                en : "Satiety"
            },
	        "satiete-action" : {
                fr : "Nourri",
                en : "Fed"
            },
	        "brulure" : {
                fr : "Brûlure",
                en : "Burn"
            },
	        "brulure-action" : {
                fr : "Brûle",
                en : "Burning"
            },
	        "saignement" : {
                fr : "Saignement",
                en : "Bleeding"
            },
	        "saignement-action" : {
                fr : "Saigne",
                en : "Bleeding"
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});