'use strict';
define([], function(){
	var data = {
        "marais-texte-1" : {
        	fr : "Vous vous enfoncez profondément dans le marais,",
        	en : "You're sinking deep into the swamp,",
        	eo : "Vi profonde foririĝas en la marĉo,"
        },
        "marais-texte-2" : {
        	fr : "suivant les traces que vous apercevez au sol.",
        	en : "following the tracks you see on the ground.",
        	eo : "sekvante la spurojn, kiiuj vi rimarkas sur la grundo."
        },
        "marais-texte-3" : {
        	fr : "Vous arrivez bientôt devant une vieille bâtisse.",
        	en : "You'll soon arrive in front of an old building.",
        	eo : "Vi baldaŭ alvenas antaŭ malnova konstruaĵo."
        },
        "marais-texte-4" : {
        	fr : "Elle paraît gigantesque, mais est en très mauvais état.",
        	en : "It looks huge, but is in very bad condition.",
        	eo : "Ĝi ŝajnas giganta, sed estas en tre malbona stato."
        },

        "maraisRoi-texte-1" : {
        	fr : "La porte est grande ouverte et à moitié explosée.",
        	en : "The door is wide open and half exploded.",
        	eo : "La pordo estas larĝe malfermita kaj duone rompita."
        },

        "necroTrou-texte-1" : {
        	fr : "Vous contournez le grand bâtiment quand,",
        	en : "You skirt the large building when,",
        	eo : "Vi ĉirkaŭiras la grandan konstruaĵon, kiam"
        },
        "necroTrou-texte-2" : {
        	fr : "à un tournant, vous tombez sur un mur en ruine.",
        	en : "at a corner, you come across a ruined wall.",
        	eo : "en la stratangulo, vi rimarkas ruinan muron."
        },
        "necroTrou-texte-3" : {
        	fr : "Un gros trou permet de pénétrer dans une pièce sombre.",
        	en : "A large hole allow for penetrating into a dark room.",
        	eo : "Granda truo ebligas eniri malhenan ĉambron."
        },

        "necroPorte-texte-1" : {
        	fr : "La porte est immense et semble fermée à clef.",
        	en : "The door is immense and seems to be locked.",
        	eo : "La pordo estas giganta kaj ŝajnas ŝlosita."
        },
        "necroPorte-texte-2" : {
        	fr : "Vous avez beau forcer, vous n'arrivez pas à la déplacer&hellip;",
        	en : "However hard you try, you can't move it&hellip;",
        	eo : "Vi provas fortiri, sed vi ne povas movi ĝin&hellip;"
        }
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