'use strict';
define([
], function(){
	var data = {
	    /**
	    * GameOver
	    **/
	    "die-texte-1" : {
            fr : "Vous êtes étendu par terre, gisant dans une marre de sang...",
            en : "You lie on the ground, lying in a pool of blood..."
        },
        "die-texte-2" : {
            fr : "L'aventure n'était peut-être pas fait pour vous finalement.",
            en : "Maybe the adventure wasn't for you after all."
        },

	    "gameOver1-texte-1" : {
            fr : "&laquo; Qu'est ce que c’était&nbsp;?! &raquo;",
            en : "&laquo; What was that?! &raquo;"
        },
        "gameOver1-texte-2" : {
            fr : "Vous vous ressaisissez, encore frappé par cette vision cauchemardesque. L'aventure n'attends pas&nbsp;!",
            en : "You pull yourself together, still struck by this nightmare vision. The adventure doesn't wait!"
        },

        "gameOver2-texte-1" : {
            fr : "Vous ouvrez les yeux brusquement. Ce rêve semblait pourtant tellement réelle...",
            en : "You open your eyes suddenly. Yet this dream seemed so real..."
        },
        "gameOver2-texte-2" : {
            fr : "Mais pas le temps de bayer au corneille&nbsp;! L'aventure n'attends pas&nbsp;!",
            en : "But there's no time for stand gaping! The adventure doesn't wait!"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});