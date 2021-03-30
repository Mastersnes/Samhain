'use strict';
define([], function(){
	var data = {
	    "necroCouloir-texte-1" : {
        	fr : "Vous entrez dans un long couloir éclairé par de nombreuses torches.",
        	en : "You enter a long corridor lit by many torches.",
        	eo : "Vi eniras en longan koridoron lumigitan per multaj torĉoj."
        },
        "necroCouloir-texte-2" : {
        	fr : "Une ambiance calme et presque conviviale vous invite à avancer&hellip;",
        	en : "A calm and almost convivial atmosphere invites you to move forward&hellip;",
        	eo : "Trankvila kaj preskaŭ afabla etoso invitas vin antaŭeniri&hellip;"
        },
        "necroCouloir-texte-3" : {
        	fr : "Une grande porte de chêne vous fait face et deux portes plus petites",
        	en : "A large oak door faces you and two smaller doors",
        	eo : "Granda pordo el kverko frontas al vi kaj du pordoj pli malgrandaj"
        },
        "necroCouloir-texte-4" : {
        	fr : "se trouvent de chaque côté du couloir&hellip;",
        	en : "are on either side of the hallway&hellip;",
        	eo : "estas ambaŭflanke de la koridoro&hellip;"
        },

        "necroSalleFerme-texte-1" : {
        	fr : "Vous approchez de la porte, mais remarquez qu'elle ne possède ni poignée ni serrure&hellip;",
        	en : "You approach the door, but notice that it has no handle nor lock&hellip;",
        	eo : "Vi alproksimiĝas al la pordo, sed rimarkas, ke ĝi ne havas nek klinkon nek seruron&hellip;"
        },
        "necroSalleFerme-texte-2" : {
        	fr : "Pas très pratique tout de même.",
        	en : "Well, It’s not very useful.",
        	eo : "Ne tre praktika."
        },
        "necroSalleFerme-texte-3" : {
        	fr : "Vous essayez de forcer un peu pour l'ouvrir, mais impossible de la faire bouger.",
        	en : "You try to force a little to open it, but you can't make it move.",
        	eo : "Vi provas iom fortiri por malfermi ĝin, sed neeblas movi ĝin."
        },

        "necroS4-texte-1" : {
        	fr : "Vous entrez dans une pièce aux allures de prison.",
        	en : "You enter a room looking as a prison.",
        	eo : "Vi eniras en ĉambron, kiu aspektas kiel malliberejo."
        },
        "necroS4-texte-2" : {
        	fr : "De nombreux enfants sont agglutinés dans un coin.",
        	en : "Many children are clustered in a corner.",
        	eo : "Multaj infanoj estas aglutinitaj en angulo."
        },
        "necroS4-texte-3" : {
        	fr : "Lorsqu'ils s'enfuient à votre demande, l'un d'eux vous tend une <span key='potionSante'>fiole rouge</span>.",
        	en : "As they run away at your request, one of them gives you a <span key='potionSante'>red flask</span>.",
        	eo : "Dum ili forkuras laŭ via peto, unu el ili donas al vi <span key='potionSante'>ruĝan pocion</span>."
        },
        "necroS4-texte-4" : {
        	fr : "Ça peut toujours aider&hellip;",
        	en : "It can always be helpful&hellip;",
        	eo : "Tio povos helpi vin&hellip;"
        },

        "necroS5-texte-1" : {
        	fr : "Vous entrez dans une belle bibliothèque pleine de livres anciens.",
        	en : "You enter a beautiful library full of old books.",
        	eo : "Vi eniras en belan bibliotekon plenan de malnovaj libroj."
        },
        "necroS5-texte-2" : {
        	fr : "Vous en lisez quelques-uns qui vous apprennent qu'il est possible,",
        	en : "You read a few of them, learning you that it is possible,",
        	eo : "Vi legas kelkajn, kiuj sciigas al vi, ke eblas,"
        },
        "necroS5-texte-3" : {
        	fr : "de faire sortir de l'énergie de son corps afin de <span key='guerison'>guérir</span> toute maladie.",
        	en : "to take energy out of your body in order to <span key='guerison'>cure</span> any disease.",
        	eo : "eligi energion el sia korpo por <span key='guerison'>kuraci</span> tutan malsanon."
        }
	};
	
	return {
        name : function() {
            return "Tuto Crypte Couloir.js";
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