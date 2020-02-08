'use strict';
define([], function(){
	var data = {
        "necroCouloir-texte-1" : {
            fr : "Vous entrez dans un long couloir éclairé par de nombreuses torches.",
            en : "You enter a long corridor lit by many torches."
        },
        "necroCouloir-texte-2" : {
            fr : "Une ambiance calme et presque conviviale vous invite à avancer&hellip;",
            en : "A calm and almost convivial atmosphere invites you to move forward&hellip;"
        },
        "necroCouloir-texte-3" : {
            fr : "Une grande porte de ch&ecirc;ne vous fait face et deux portes plus petites",
            en : "A large oak door facing you and two smaller doors"
        },
        "necroCouloir-texte-4" : {
            fr : "se trouvent de chaque c&ocirc;t&eacute; du couloir&hellip;",
            en : "are on either side of the hallway&hellip;"
        },

        "necroSalleFerme-texte-1" : {
            fr : "Vous approchez de la porte, mais remarquez qu&rsquo;elle ne possede ni poignée ni serrure&hellip;",
            en : "You approach the door, but notice that it has no handle or lock&hellip;"
        },
        "necroSalleFerme-texte-2" : {
            fr : "Pas tr&egrave;s pratique tout de m&ecirc;me.",
            en : "Not very practical all the same."
        },
        "necroSalleFerme-texte-3" : {
            fr : "Vous essayez de forcer un peu pour l&rsquo;ouvrir, mais impossible de la faire bouger.",
            en : "You try to force a little bit to open it, but you can't make it move."
        },

        "necroS4-texte-1" : {
            fr : "Vous entrez dans une pi&egrave;ce aux allures de prison.",
            en : "You walk into a room looking like a prison."
        },
        "necroS4-texte-2" : {
            fr : "De nombreux enfants sont agglutin&eacute;s dans un coin.",
            en : "Many children are clustered in a corner."
        },
        "necroS4-texte-3" : {
            fr : "Lorsqu&rsquo;ils s&rsquo;enfuient à votre demande, l&rsquo;un d&rsquo;eux vous tend une <span key='potionSante'>fiole rouge</span>.",
            en : "When they run away at your request, one of them hands you a <span key='potionSante'>red vial</span>."
        },
        "necroS4-texte-4" : {
            fr : "&Ccedil;a peut toujours aider&hellip;",
            en : "It can always help&hellip;"
        },

        "necroS5-texte-1" : {
            fr : "Vous entrez dans une belle biblioth&egrave;que pleine de livres anciens.",
            en : "You enter a beautiful library full of old books."
        },
        "necroS5-texte-2" : {
            fr : "Vous en lisez quelques-uns qui vous apprennent qu&rsquo;il est possible,",
            en : "You read a few of them that tell you that it is possible,"
        },
        "necroS5-texte-3" : {
            fr : "de faire sortir de l'énergie de son corps afin de <span key='guerison'>guerir</span> toute maladie.",
            en : "to take energy out of your body in order to <span key='guerison'>cure</span> any disease."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});