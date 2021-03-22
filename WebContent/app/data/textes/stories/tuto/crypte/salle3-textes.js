'use strict';
define([], function(){
	var data = {
        "necroS3-texte-1" : {
        	fr : "Vous pénétrez dans une vieille salle en ruine.",
        	en : "You enter an old ruined room.",
        	eo : "Vi eniras en malnovan ruinitan ĉambron."
        },
        "necroS3-texte-2" : {
        	fr : "Apparemment, elle servait de bibliothèque de fortune.",
        	en : "Apparently, it used as a makeshift library.",
        	eo : "Ŝajne, ĝi estis uzata kiel improvizita biblioteko."
        },
        "necroS3-texte-3" : {
        	fr : "Vous découvrez de nombreux ouvrages et parchemins dispersés un peu partout sur le sol.",
        	en : "You discover many books and scrolls scattered all over the ground.",
        	eo : "Vi malkovras multajn librojn kaj pergamenojn disigitaj ĉie sur la grundo."
        },
        "necroS3-texte-4" : {
        	fr : "Une porte permet d'accéder à une autre partie du bâtiment.",
        	en : "A door gives access to another part of the building.",
        	eo : "Pordo ebligas aliri al alia parto de la konstruaĵo."
        },

        "necroS3Fouille-texte-1" : {
        	fr : "Il semblerait qu'il s'agisse de traités sur la magie.",
        	en : "It looks like magic treatises.",
        	eo : "Ŝajnus, ke estas traktaĵoj pri magio."
        },
        "necroS3Fouille-texte-2" : {
        	fr : "Beaucoup sont dans une langue incompréhensible,",
        	en : "Many are in an incomprehensible language,",
        	eo : "Multaj estas en nekomprenebla lingvo,"
        },
        "necroS3Fouille-texte-3" : {
        	fr : "mais vous parvenez à comprendre certains mots.",
        	en : "but you succeed to understand some words.",
        	eo : "sed vi komprenas kelkajn vortojn."
        },
        "necroS3Fouille-texte-4" : {
        	fr : "Cela parle d'une fusion entre les éléments qui permet de libérer une <span key='soin'>aura réparatrice</span>&hellip;",
        	en : "It speaks about a fusion between elements that permits the release of a <span key='soin'>restorative aura</span>&hellip;",
        	eo : "Temas pri kunfandiĝo inter la elementoj, kiu ebligas liberigi <span key='soin'>rfortiligan aŭron</span>&hellip;"
        },
        "necroS3Fouille-texte-5" : {
        	fr : "Vous vous relevez et vous dirigez vers la porte.",
        	en : "You get up and head for the door.",
        	eo : "Vi ekstaras kaj vi marŝas al ka pordo."
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