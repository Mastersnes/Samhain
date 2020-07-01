'use strict';
define([], function(){
	var data = {
        "necroS1Roi-texte-1" : {
            fr : "Vous pénétrez prudemment dans la pièce.",
            en : "You enter the room carefully."
        },
        "necroS1Roi-texte-2" : {
            fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol et une traînée de sang vert",
            en : "Two dead <span key='goule'>ghouls</span> lie on the ground and a green blood trail"
        },
        "necroS1Roi-texte-3" : {
            fr : "continue vers une seconde porte en face de vous&hellip;",
            en : "continues towards a second door in front of you&hellip;"
        },

        "necroS1-texte-1" : {
            fr : "Vous pénétrez dans une petite pièce vide.",
            en : "You enter a small empty room."
        },
        "necroS1-texte-2" : {
            fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol.",
            en : "Two dead <span key='goule'>ghouls</span> lie on the ground."
        },

        "necroS1Fight-texte-1" : {
            fr : "Deux <span key='goule'>goules</span> vous observent, le regard vitreux.",
            en : "Two <span key='goule'>ghouls</span> look at you, glassy eyes."
        },

        "necroS1Fight2-texte-1" : {
            fr : "Vous abattez ces larves&nbsp;!",
            en : "You're killing those larvae!"
        },
        "necroS1Fight2-texte-2" : {
            fr : "Elles ont failli vous décoiffer&hellip;",
            en : "They almost blew your hair&hellip;"
        },
        "necroS1Fight2-texte-3" : {
            fr : "Il est temps de continuer&nbsp;!",
            en : "It's time to continue!"
        },

        "necroS1Fouille-texte-1" : {
            fr : "La salle est complètement vide, hormis un petit paillasson",
            en : "The room is completely empty except for a doormat."
        },
        "necroS1Fouille-texte-2" : {
            fr : "devant l'entrée sur lequel il est inscrit &laquo;&nbsp;HellCome&nbsp;&raquo;.",
            en : "in front of the entrance marked &laquo;&nbsp;HellCome&nbsp;&raquo;."
        },
        "necroS1Fouille-texte-3" : {
            fr : "En le soulevant, vous découvrez une petite <span key='clefS2'>clef</span>&hellip;",
            en : "By lifting it, you discover a small <span key='clefS2'>key</span>&hellip;"
        },
        "necroS1Fouille-texte-4" : {
            fr : "Vous la prenez et vous dirigez vers la porte&hellip;",
            en : "You take it and head for the door&hellip;"
        }
	};
	
	return {
        name : function() {
            return "Tuto Crypte Salle1.js";
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