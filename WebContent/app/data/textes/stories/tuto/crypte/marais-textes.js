'use strict';
define([], function(){
	var data = {
        "marais-texte-1" : {
            fr : "Vous vous enfoncez profond&eacute;ment dans le marais,",
            en : "You're sinking deep into the swamp,"
        },
        "marais-texte-2" : {
            fr : "suivant les traces que vous apercevez au sol.",
            en : "following the tracks you see on the ground."
        },
        "marais-texte-3" : {
            fr : "Vous arrivez bient&ocirc;t devant une vieille b&acirc;tisse.",
            en : "You'll soon arrive in front of an old building."
        },
        "marais-texte-4" : {
            fr : "Elle para&icirc;t gigantesque, mais est en tr&eacute;s mauvais &eacute;tat.",
            en : "It looks gigantic, but is in very bad condition."
        },

        "maraisRoi-texte-1" : {
            fr : "La porte est grande ouverte et &agrave; moiti&eacute; explos&eacute;e.",
            en : "The door is wide open and half blown open."
        },

        "necroTrou-texte-1" : {
            fr : "Vous contournez le grand b&acirc;timent quand,",
            en : "You bypass the large building when,"
        },
        "necroTrou-texte-2" : {
            fr : "&agrave; un tournant, vous tombez sur un mur en ruine.",
            en : "at a turning point, you fall on a ruined wall."
        },
        "necroTrou-texte-3" : {
            fr : "Un gros trou permet de p&eacute;netrer dans une pi&egrave;ce sombre.",
            en : "A large hole makes it possible to penetrate into a dark room."
        },

        "necroPorte-texte-1" : {
            fr : "La porte est immense et semble ferm&eacute; &agrave; clef.",
            en : "The door is huge and seems to be locked."
        },
        "necroPorte-texte-2" : {
            fr : "Vous avez beau forcer, vous n&rsquo;arrivez pas &agrave; la d&eacute;placer&hellip;",
            en : "No matter how hard you force, you can't move it&hellip;"
        },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});