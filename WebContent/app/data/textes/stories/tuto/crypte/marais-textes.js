'use strict';
define([], function(){
	var data = {
        "marais-texte-1" : {
            fr : "Vous vous enfoncez profondément dans le marais,",
            en : "You're sinking deep into the swamp,"
        },
        "marais-texte-2" : {
            fr : "suivant les traces que vous apercevez au sol.",
            en : "following the tracks you see on the ground."
        },
        "marais-texte-3" : {
            fr : "Vous arrivez bientôt devant une vieille bâtisse.",
            en : "You'll soon arrive in front of an old building."
        },
        "marais-texte-4" : {
            fr : "Elle paraît gigantesque, mais est en très mauvais état.",
            en : "It looks gigantic, but is in very bad condition."
        },

        "maraisRoi-texte-1" : {
            fr : "La porte est grande ouverte et à moitié explosée.",
            en : "The door is wide open and half blown open."
        },

        "necroTrou-texte-1" : {
            fr : "Vous contournez le grand bâtiment quand,",
            en : "You bypass the large building when,"
        },
        "necroTrou-texte-2" : {
            fr : "à un tournant, vous tombez sur un mur en ruine.",
            en : "at a turning point, you fall on a ruined wall."
        },
        "necroTrou-texte-3" : {
            fr : "Un gros trou permet de pénétrer dans une pièce sombre.",
            en : "A large hole makes it possible to penetrate into a dark room."
        },

        "necroPorte-texte-1" : {
            fr : "La porte est immense et semble fermée à clef.",
            en : "The door is huge and seems to be locked."
        },
        "necroPorte-texte-2" : {
            fr : "Vous avez beau forcer, vous n'arrivez pas à la déplacer&hellip;",
            en : "No matter how hard you force, you can't move it&hellip;"
        },
	};
	
	return {
        name : function() {
            return "Tuto Marais.js";
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