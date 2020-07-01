'use strict';
define([], function(){
	var data = {
	    "didacticiel-start-texte-1" : {
            fr : "Vous ouvrez les yeux, perdu au beau milieu d'une grande plaine.",
            en : "-"
        },
	    "didacticiel-start-texte-2" : {
            fr : "Rien à l'horizon. Seul le vent souffle dans vos cheveux et siffle dans vos oreilles.",
            en : "-"
        },
	    "didacticiel-start-texte-3" : {
            fr : "Tout semble calme lorsque, soudain, une voix vous interpelle :",
            en : "-"
        },
	    "didacticiel-start-texte-4" : {
            fr : "&laquo;&nbsp;Eh toi, l'aventurier&nbsp;! Appuie sur suivant pour continuer.&nbsp;&raquo;",
            en : "-"
        },

        "didacticiel-start2-texte-1" : {
            fr : "Vous vous exécutez, n'ayant rien de mieux à faire de toute façon.",
            en : "-"
        },
        "didacticiel-start2-texte-2" : {
            fr : "La voix, elle, continue de plus belle :",
            en : "-"
        },
        "didacticiel-start2-texte-3" : {
            fr : "&laquo;&nbsp;Bien joué étranger&nbsp;! Tu as saisi le principe des actions&nbsp;!",
            en : "-"
        },
        "didacticiel-start2-texte-4" : {
            fr : "D'un autre côté&hellip; Il faut dire que c'était plutôt simple&hellip;&nbsp;&raquo;",
            en : "-"
        },

        "didacticiel-presentation-texte-1" : {
            fr : "&laquo;&nbsp;Je suis ton humble serviteur et te voici dans le monde merveilleux de Samhain&nbsp;!!!",
            en : "-"
        },
        "didacticiel-presentation-texte-2" : {
            fr : "Tu te demandes certainement de quoi je parle, non&nbsp;?",
            en : "-"
        },
        "didacticiel-presentation-texte-3" : {
            fr : "Samhain est un monde fantastique, fait de danger et de mystères, dans lequel chaque action a des répercussions&nbsp;!",
            en : "-"
        },
        "didacticiel-presentation-texte-4" : {
            fr : "Comment t'expliquer, hum&hellip; Tiens, choisis une main par exemple&nbsp;!",
            en : "-"
        },
        "didacticiel-presentation-texte-5" : {
            fr : "Ne t'en fais pas, je ne te ferais pas le coup du choix entre la pilule rouge et bleue.&nbsp;&raquo;",
            en : "-"
        }
	};
	
	return {
        name : function() {
            return "Didacticiel Debut.js";
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