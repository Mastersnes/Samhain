'use strict';
define([], function(){
	var data = {
        "necroS1Roi-texte-1" : {
            fr : "Vous p&eacute;n&eacute;trez prudemment dans la pi&egrave;ce.",
            en : "You enter the room carefully."
        },
        "necroS1Roi-texte-2" : {
            fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol et une tra&icirc;n&eacute;e de sang vert",
            en : "Two dead <span key='goule'>ghouls</span> lie on the ground and a green blood trail"
        },
        "necroS1Roi-texte-3" : {
            fr : "continue vers une seconde porte en face de vous&hellip;",
            en : "continues towards a second door in front of you&hellip;"
        },

        "necroS1-texte-1" : {
            fr : "Vous p&eacute;n&eacute;trez dans une petite pi&egrave;ce vide.",
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
            fr : "Vous abattez ces larves !",
            en : "You're killing those larvae!"
        },
        "necroS1Fight2-texte-2" : {
            fr : "Elles ont failli vous d&eacute;coiffer&hellip;",
            en : "They almost blew your hair&hellip;"
        },
        "necroS1Fight2-texte-3" : {
            fr : "Il est temps de continuer !",
            en : "It's time to continue!"
        },

        "necroS1Fouille-texte-1" : {
            fr : "La salle est compl&egrave;tement vide hormis un petit paillasson",
            en : "The room is completely empty except for a doormat."
        },
        "necroS1Fouille-texte-2" : {
            fr : "devant l&rsquo;entr&eacute;e inscrit &laquo; HellCome &raquo;.",
            en : "in front of the entrance marked &laquo; HellCome &raquo;."
        },
        "necroS1Fouille-texte-3" : {
            fr : "En le soulevant, vous d&eacute;couvrez une petite <span key='clefS2'>clef</span>&hellip;",
            en : "By lifting it, you discover a small <span key='clefS2'>key</span>&hellip;"
        },
        "necroS1Fouille-texte-4" : {
            fr : "Vous la prenez et vous dirigez vers la porte&hellip;",
            en : "You take it and head for the door&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});