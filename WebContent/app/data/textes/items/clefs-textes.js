'use strict';
define([], function(){
	var data = {
	        /**
             * Clef
             */
            "bougie" : {
            	fr : "Bougie",
            	en : "Candle",
            	eo : "Kandelo"
            },
            "bougie-texte" : {
            	fr : "Une vieille bougie accompagnée du matériel nécessaire pour l'allumer.",
            	en : "An old candle with the necessary equipment to light it.",
            	eo : "Malnova kandelo kun necesaj iloj por ekbruligi ĝin."
            },
            "clefS2" : {
            	fr : "Clef de la salle 2",
            	en : "Key of the room 2",
            	eo : "Ŝlosilo de la ĉambro 2"
            },
            "clefS2-texte" : {
            	fr : "Une simple clef.",
            	en : "A simple key.",
            	eo : "Simpla ŝlosilo"
            },
            "anneau-bandit" : {
            	fr : "Anneau du roi des bandits",
            	en : "Bandit king's ring",
            	eo : "Ringo de bandita reĝo"
            },
            "anneau-bandit-texte" : {
            	fr : "Un anneau un peu plus doré que les autres. De la camelote si vous voulez mon avis&hellip;",
            	en : "A ring little more golden than others. Junk if you want my opinion&hellip;",
            	eo : "Ringo iom pli orkolora ol la aliaj. Aĉaĵo, se vi volas mian opinion&hellip;"
            },
            "poulet" : {
            	fr : "Poulette",
            	en : "Pullet",
            	eo : "Kokidino"
            },
            "poulet-texte" : {
            	fr : "Une petite poulette toute mignonne. Attention, elle sait aussi se défendre quand il faut&nbsp;!",
            	en : "A cute little pullet. Be careful, it also knows how to defend itself!",
            	eo : "Beleta kokidino. Atenton, ĝi ankaŭ scias, kiel defendi sin!"
            }
	};
	
	return {
        name : function() {
            return "Clefs.js";
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