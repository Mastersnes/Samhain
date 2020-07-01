'use strict';
define([], function(){
	var data = {
        "necroS3-texte-1" : {
            fr : "Vous pénétrez dans une vieille salle en ruine.",
            en : "You enter into an old, ruined room."
        },
        "necroS3-texte-2" : {
            fr : "Apparemment, elle servait de bibliothèque de fortune.",
            en : "Apparently, it was used as a makeshift library."
        },
        "necroS3-texte-3" : {
            fr : "Vous découvrez de nombreux ouvrages et parchemins dispersés un peu partout sur le sol.",
            en : "You will discover many books and scrolls scattered all over the ground."
        },
        "necroS3-texte-4" : {
            fr : "Une porte permet d'accéder à une autre partie du bâtiment.",
            en : "A door gives access to another part of the building."
        },

        "necroS3Fouille-texte-1" : {
            fr : "Il semblerait qu'il s'agisse de traités sur la magie.",
            en : "Looks like it's about drafts on magic."
        },
        "necroS3Fouille-texte-2" : {
            fr : "Beaucoup sont dans une langue incompréhensible,",
            en : "Many are in an incomprehensible language,"
        },
        "necroS3Fouille-texte-3" : {
            fr : "mais vous parvenez à comprendre certains mots.",
            en : "but you can understand some words."
        },
        "necroS3Fouille-texte-4" : {
            fr : "Cela parle d'une fusion entre les éléments qui permet de libérer une <span key='soin'>aura réparatrice</span>&hellip;",
            en : "It speaks of a fusion between elements that allows the release of a <span key='soin'>restorative aura</span>&hellip;"
        },
        "necroS3Fouille-texte-5" : {
            fr : "Vous vous relevez et vous dirigez vers la porte.",
            en : "You get up and head for the door."
        }
	};
	
	return {
        name : function() {
            return "Tuto Crypte Salle3.js";
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