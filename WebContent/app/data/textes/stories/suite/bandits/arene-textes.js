'use strict';
define([], function(){
	var data = {
	    /**
	    * Entrée dans l'arene
	    **/
        "bandits-arene-entrer-texte-1" : {
            fr : "Vous entrez dans l’arène sous les huées de la foule.",
            en : "-"
        },
        "bandits-arene-entrer-texte-2" : {
            fr : "En face de vous, quatre goules comptent bien faire de vous leur prochain dîner...",
            en : "-"
        },

        "bandits-arene-entrer-2-texte-1" : {
            fr : "Vos adversaires tombent sous vos assauts répétés, vous laissant seul parmi les cadavres.",
            en : "-"
        },
        "bandits-arene-entrer-2-texte-2" : {
            fr : "Vous trouvez enfin le temps de souffler, quand vous remarquez une main bouger au sol !",
            en : "-"
        },
        "bandits-arene-entrer-2-texte-3" : {
            fr : "Deux challengers, dévorés par les goules vaincues, se relèvent doucement et se dirigent vers vous...",
            en : "-"
        },

        "bandits-arene-entrer-3-texte-1" : {
            fr : "Vous vous apprêtez à vous lancer dans cet ultime affrontement, lorsqu'une voix résonne au loin :",
            en : "-"
        },
        "bandits-arene-entrer-3-texte-2" : {
            fr : "&laquo; Assez ! Ce combat m'ennuie et n'est pas digne d'un héros comme toi... &raquo;",
            en : "-"
        },
        "bandits-arene-entrer-3-texte-3" : {
            fr : "Votre interlocuteur, le roi des bandits, se lève de son siège de bois massif et saute dans l’arène, éliminant les deux créatures au passage.",
            en : "-"
        },
        "bandits-arene-entrer-3-texte-4" : {
            fr : "&laquo; Allez, montre-moi donc de quoi tu es capable ! &raquo;",
            en : "-"
        },

	    /**
	    * Assassinat du roi
	    **/
        "bandits-arene-assassiner-texte-1" : {
            fr : "Voici venir la dernière étape de votre infiltration.",
            en : "-"
        },
        "bandits-arene-assassiner-texte-2" : {
            fr : "Vous vous approchez doucement et étranglez votre adversaire en l’empêchant de crier.",
            en : "-"
        },
        "bandits-arene-assassiner-texte-3" : {
            fr : "Il se débat, essaie de vous arrêter, mais bientôt ses râles étouffés ne laissent place qu'à un silence morbide.",
            en : "-"
        },
        "bandits-arene-assassiner-texte-4" : {
            fr : "Félicitations, votre assassinat est une réussite !",
            en : "-"
        },

        "bandits-arene-assassiner-2-texte-1" : {
            fr : "Maintenant seul, vous vous approchez du corps du roi et lui découpez l'oreille avec sa propre dague pour y récupérer l'anneau doré.",
            en : "-"
        },
        "bandits-arene-assassiner-2-texte-2" : {
            fr : "Eh bien, cela vous fera deux récompenses !",
            en : "-"
        },
        "bandits-arene-assassiner-2-texte-3" : {
            fr : "Fier de votre butin, vous retournez en ville pour annoncer votre victoire.",
            en : "-"
        },

	    /**
	    * Victoire contre le roi avec ses allies
	    **/
        "bandits-arene-win-texte-1" : {
            fr : "Vous venez à bout de vos adversaires sous les applaudissements de la foule.",
            en : "-"
        },
        "bandits-arene-win-texte-2" : {
            fr : "Eh bien, ils n'étaient pas si terribles que ça finalement...",
            en : "-"
        },

        /**
        * Victoire contre le roi seul
        **/
        "bandits-arene-solo-win-texte-1" : {
            fr : "Vous venez à bout de votre adversaire sous les applaudissements de la foule.",
            en : ""
        },
        "bandits-arene-solo-win-texte-2" : {
            fr : "Eh bien, il n'était pas si terrible que ça finalement...",
            en : ""
        },

        /**
        * Victoire contre les goules
        **/
        "bandits-arene-goule-win-texte-1" : {
            fr : "&laquo; Eh bien, tu n'es donc pas aussi faible que tu en as l'air ! &raquo;",
            en : ""
        },
        "bandits-arene-goule-win-texte-2" : {
            fr : "Le noble voleur, remotivé par votre combat, se lève de son siège de bois massif et saute dans l'arène.",
            en : ""
        },
		//"bandits-arene-entrer-3-texte-4"

        /**
        * Fin de la quete des bandits
        **/
        "bandits-arene-fin-texte-1" : {
            fr : "Le combat maintenant terminé, la foule se disperse, rassasiée.",
            en : "-"
        },
        "bandits-arene-fin-texte-2" : {
            fr : "Une nouvelle élection aura certainement lieu...",
            en : "-"
        },
		//bandits-arene-assassiner-2-texte-1
		//bandits-arene-assassiner-2-texte-2
		//bandits-arene-assassiner-2-texte-3
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});