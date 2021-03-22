'use strict';
define([], function(){
	var data = {
        "necroS1Roi-texte-1" : {
        	fr : "Vous pénétrez prudemment dans la pièce.",
        	en : "You enter the room, carefully.",
        	eo : "Vi prudente eniras en la ĉambron."
        },
        "necroS1Roi-texte-2" : {
        	fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol et une traînée de sang vert",
        	en : "Two dead <span key='goule'>ghouls</span> lie on the ground and a green blood trail",
        	eo : "Du kadavroj de <span key='goule'>guloj</span> kuŝas sur la grundo kaj verda sango flueto"
        },
        "necroS1Roi-texte-3" : {
        	fr : "continue vers une seconde porte en face de vous&hellip;",
        	en : "continues towards a second door in front of you&hellip;",
        	eo : "daŭras al dua pordo antaŭ vi&hellip;"
        },

        "necroS1-texte-1" : {
        	fr : "Vous pénétrez dans une petite pièce vide.",
        	en : "You enter a small empty room.",
        	eo : "Vi eniras en malgrandan malplenan ĉambron."
        },
        "necroS1-texte-2" : {
        	fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol.",
        	en : "Two dead <span key='goule'>ghouls</span> lie on the ground.",
        	eo : "Du kadavroj de <span key='goule'>guloj</span> kuŝas sur la grundo."
        },

        "necroS1Fight-texte-1" : {
        	fr : "Deux <span key='goule'>goules</span> vous observent, le regard vitreux.",
        	en : "Two <span key='goule'>ghouls</span> observe you, look vacant.",
        	eo : "Du <span key='goule'>guloj</span> observas vin, la vaka rigardo."
        },

        "necroS1Fight2-texte-1" : {
        	fr : "Vous abattez ces larves&nbsp;!",
        	en : "You're killing those larvas!",
        	eo : "Vi buĉas ĉi tiujn larvojn!"
        },
        "necroS1Fight2-texte-2" : {
        	fr : "Elles ont failli vous décoiffer&hellip;",
        	en : "They almost messed up your hair&hellip;",
        	eo : "Ĝi preskaŭ malkombis vin&hellip;"
        },
        "necroS1Fight2-texte-3" : {
        	fr : "Il est temps de continuer&nbsp;!",
        	en : "It's time to continue!",
        	eo : "Estas tempo de daŭrigi!"
        },

        "necroS1Fouille-texte-1" : {
        	fr : "La salle est complètement vide, hormis un petit paillasson",
        	en : "The room is completely empty except for a little doormat",
        	eo : "La ĉambro estas tute malplena, krom malgranda mato"
        },
        "necroS1Fouille-texte-2" : {
        	fr : "devant l'entrée, sur lequel il est inscrit &laquo;&nbsp;HellCome&nbsp;&raquo;.",
        	en : "in front of the entrance, on which it’s writed &laquo;&nbsp;HellCome&nbsp;&raquo;.",
        	eo : "antaŭ la enirejo, sur kiu ĝi estas skribita &laquo;&nbsp;HellCome&nbsp;&raquo;."
        },
        "necroS1Fouille-texte-3" : {
        	fr : "En le soulevant, vous découvrez une petite <span key='clefS2'>clef</span>&hellip;",
        	en : "By lifting it, you discover a small <span key='clefS2'>key</span>&hellip;",
        	eo : "Levitante ĝin, vi rimarkas malgrandan <span key='clefS2'>ŝlosilon</span>&hellip;"
        },
        "necroS1Fouille-texte-4" : {
        	fr : "Vous la prenez et vous dirigez vers la porte&hellip;",
        	en : "You take it and head for the door&hellip;",
        	eo : "Vi prenas ĝin kaj vi ekiras al la pordo&hellip;"
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