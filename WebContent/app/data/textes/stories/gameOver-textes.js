'use strict';
define([
], function(){
	var data = {
	    /**
        * GameOver
        **/
        "die-texte-1" : {
        	fr : "Vous êtes étendu par terre, gisant dans une mare de sang&hellip;",
        	en : "You lie on the ground, lifeless in a pool of blood&hellip;",
        	eo : "Vi kuŝas sur la grundo, sen vivo en marĉeto el sango."
        },
        "die-texte-2" : {
        	fr : "L'aventure n'était peut-être pas faite pour vous finalement.",
        	en : "Maybe the adventure wasn't for you after all.",
        	eo : "Finfine, la aventuro eble ne taŭgis al vi."
        },

        "gameOver1-texte-1" : {
        	fr : "&laquo;&nbsp;Qu'est-ce que c’était&nbsp;?!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What was that?!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Kio estis tio?!&nbsp;&raquo;"
        },
        "gameOver1-texte-2" : {
        	fr : "Vous vous ressaisissez, encore frappé par cette vision cauchemardesque. L'aventure n'attend pas&nbsp;!",
        	en : "You pull yourself together, still disturbed by this nightmare. The adventure doesn't wait!",
        	eo : "Vi retrankviliĝas, ankoraŭ perturbita pro ĉi tiu premsonĝo. La aventuro ne atendas!"
        },

        "gameOver2-texte-1" : {
        	fr : "Vous ouvrez les yeux brusquement. Ce rêve semblait pourtant tellement réel&hellip;",
        	en : "You open your eyes suddenly. Yet, this dream seemed so real&hellip;",
        	eo : "Vi subite malfermas vian okulojn. Tamen, ĉi tiu sonĝo aspektis tiel reala&hellip;"
        },
        "gameOver2-texte-2" : {
        	fr : "Mais pas le temps de bayer aux corneilles&nbsp;! L'aventure n'attend pas&nbsp;!",
        	en : "But there's no time for gawking! The adventure doesn't wait!",
        	eo : "Sed, nun ne estas tempo por gapi! La aventuro ne atendas!"
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