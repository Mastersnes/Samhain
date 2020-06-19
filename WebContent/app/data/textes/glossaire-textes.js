'use strict';
define([], function(){
	var data = {
	        /**
	        * Glossaire
	        **/
	        "lifeSteal-glossaire" : {
            	fr : "% des dégâts infligés.",
            	en : "% of inflicted damages.",
            	eo : "% da damaĝoj kaŭzitaj."
            },
            "lifeSteal2-glossaire" : {
            	fr : "% des PV actuels de la cible.",
            	en : "% of the target’s currents HP.",
            	eo : "% da nunaj VP de la celo."
            },
            "manaSteal-glossaire" : {
            	fr : "% des PM actuels de la cible.",
            	en : "% of the target’s currents MP.",
            	eo : "% da nunaj MP de la celo."
            },
            "lifeGain-glossaire" : {
            	fr : "% de la vie max.",
            	en : "% of max life.",
            	eo : "% da maks. vivo."
            },
            "manaGain-glossaire" : {
            	fr : "% du mana max.",
            	en : "% of max mana.",
            	eo : "% da maks. magio."
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