'use strict';
define([], function(){
	var data = {
	        /**
             * Clef
             */
            "bougie" : {
                fr : "Bougie",
                en : "Candle"
            },
            "bougie-texte" : {
                fr : "Une vieille bougie accompagné du matériel nécessaire pour l'allumer.",
                en : "An old candle with the necessary equipment to light it."
            },
            "clefS2" : {
                fr : "Clef de la salle 2",
                en : "Key of the room 2"
            },
            "clefS2-texte" : {
                fr : "Une simple clef.",
                en : "A simple key."
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});