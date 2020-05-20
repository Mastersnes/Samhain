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
                fr : "Une vieille bougie accompagnée du matériel nécessaire pour l'allumer.",
                en : "An old candle with the necessary equipment to light it."
            },
            "clefS2" : {
                fr : "Clef de la salle 2",
                en : "Key of the room 2"
            },
            "clefS2-texte" : {
                fr : "Une simple clef.",
                en : "A simple key."
            },
            "anneau-bandit" : {
                fr : "Anneau du roi des bandits",
                en : "Bandit King's Ring"
            },
            "anneau-bandit-texte" : {
                fr : "Un anneau un peu plus doré que les autres. De la camelote si vous voulez mon avis&hellip;",
                en : "A ring a little more golden than the others. Junk if you want my opinion&hellip;"
            },
            "poulet" : {
                fr : "Poulet",
                en : "Chicken"
            },
            "poulet-texte" : {
                fr : "Un petit poulet tout mignon. Attention, il sait aussi se défendre quand il faut&nbsp;!",
                en : "A cute little chicken. Watch out, he can also defend himself when he has to!"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});