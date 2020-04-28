'use strict';
define([], function(){
	var data = {
	        /**
	        * Glossaire
	        **/
	        "lifeSteal-glossaire" : {
                fr : "% des dégâts infligés.",
                en : "% of inflict damages."
            },
	        "lifeSteal2-glossaire" : {
                fr : "% des PV actuels de la cible.",
                en : "% of target currents PV."
            },
	        "manaSteal-glossaire" : {
                fr : "% des PM actuels de la cible.",
                en : "% of target currents PM."
            },
	        "lifeGain-glossaire" : {
                fr : "% de la vie max.",
                en : "% of max life."
            },
	        "manaGain-glossaire" : {
                fr : "% du mana max.",
                en : "% of max mana."
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});