'use strict';
define([
], function(){
	var data = {
	    /**
	    * GameOver
	    **/
	    "die-texte-1" : {
            fr : "Vous êtes étendu par terre, gisant dans une marre de sang&hellip;",
            en : "You lie on the ground, lying in a pool of blood&hellip;"
        },
        "die-texte-2" : {
            fr : "L'aventure n'était peut-être pas faite pour vous finalement.",
            en : "Maybe the adventure wasn't for you after all."
        },

	    "gameOver1-texte-1" : {
            fr : "&laquo;&nbsp;Qu'est-ce que c’était&nbsp;?!&nbsp;&raquo;",
            en : "&laquo;&nbsp;What was that?!&nbsp;&raquo;"
        },
        "gameOver1-texte-2" : {
            fr : "Vous vous ressaisissez, encore frappé par cette vision cauchemardesque. L'aventure n'attend pas&nbsp;!",
            en : "You pull yourself together, still struck by this nightmare vision. The adventure doesn't wait!"
        },

        "gameOver2-texte-1" : {
            fr : "Vous ouvrez les yeux brusquement. Ce rêve semblait pourtant tellement réel&hellip;",
            en : "You open your eyes suddenly. Yet this dream seemed so real&hellip;"
        },
        "gameOver2-texte-2" : {
            fr : "Mais pas le temps de bâiller aux corneilles&nbsp;! L'aventure n'attend pas&nbsp;!",
            en : "But there's no time for stand gaping! The adventure doesn't wait!"
        }
	};
	
	return {
        name : function() {
            return "GameOver.js";
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