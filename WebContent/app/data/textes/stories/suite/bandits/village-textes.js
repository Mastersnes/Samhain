'use strict';
define([], function(){
	var data = {
	    /**
	    * Fouille - Reussite
	    **/
	    "bandits-village-fouiller-reussite-texte-1" : {
            fr : "Les maisons sont vides et personne n'est là pour vous arrêter.",
            en : "-"
        },
	    "bandits-village-fouiller-reussite-texte-2" : {
            fr : "Par chance, vous tombez sur la réserve. Ces vivres vous seront bien utile !",
            en : "-"
        },

        /**
        * Fouille - Echec
        **/
	    "bandits-village-fouiller-echec-texte-1" : {
            fr : "Vous fouillez toutes les maisons, mais en vain.",
            en : "-"
        },
	    "bandits-village-fouiller-echec-texte-2" : {
            fr : "Rien ni personne n'est là pour vous arrêter, même pas une petite pomme...",
            en : "-"
        },

        /**
        * Fouille - Echec Critique
        **/
	    "bandits-village-fouiller-critique-texte-1" : {
            fr : "À chaque maison fouillée, le même constat : rien.",
            en : "-"
        },
	    "bandits-village-fouiller-critique-texte-2" : {
            fr : "Vous vous approchez de la dernière maison, quand vous entendez ricaner derrière vous.",
            en : "-"
        },
	    "bandits-village-fouiller-critique-texte-3" : {
            fr : "Au moins, vous pourrez passer votre déception sur quelqu'un...",
            en : "-"
        },

        /**
        * Village suite
        **/
	    "bandits-village-2-texte-1" : {
            fr : "Une fois la dernière maison fouillée, vous vous relancez à la recherche de ces bandits.",
            en : "-"
        },
	    "bandits-village-2-texte-2" : {
            fr : "Des bruits au centre du village vous indiquent le lieu où chercher...",
            en : "-"
        },

	    "bandits-village-3-texte-1" : {
            fr : "Vous observez discrètement la foule rassemblée au loin.",
            en : "-"
        },
	    "bandits-village-3-texte-2" : {
            fr : "Que se passe-t-il ? Il semblerait qu'ils assistent à un combat.",
            en : "-"
        },

        /**
        * Infiltration - Reussite
        **/
	    "bandits-village-infiltrer-reussite-texte-1" : {
            fr : "Vous vous glissez parmi les badauds avec l'art du plus grand des assassins.",
            en : "-"
        },
	    "bandits-village-infiltrer-reussite-texte-2" : {
            fr : "Quelques têtes se tournent vers vous, mais la foule vous sert de masque.",
            en : "-"
        },
	    "bandits-village-infiltrer-reussite-texte-3" : {
            fr : "Maintenant à quelques mètres du combat, vous pouvez enfin apprécier la scène à votre convenance...",
            en : "-"
        },

	    "bandits-village-observer-texte-1" : {
            fr : "Vous ne pouvez retenir votre dégoût.",
            en : "-"
        },
	    "bandits-village-observer-texte-2" : {
            fr : "Deux hommes se battent désespérément contre une goule affamée.",
            en : "-"
        },
	    "bandits-village-observer-texte-3" : {
            fr : "Plusieurs corps déchiquetés gisent par terre servant de repas à 3 autres goules un peu plus distraites.",
            en : "-"
        },
	    "bandits-village-observer-texte-4" : {
            fr : "De l'autre côté de l’arène, un bandit semblant plus noble que les autres, assiste à la scène, amusé.",
            en : "-"
        },

        /**
        * Seconde Inflitration - Reussite
        **/
	    "bandits-village-infiltrer-2-reussite-texte-1" : {
            fr : "Vous continuez à virevolter parmi la foule telle une plume dans le vent.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-reussite-texte-2" : {
            fr : "Personne ne vous remarque et vous arrivez maintenant aux portes de la loge royale.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-reussite-texte-3" : {
            fr : "Le bandit le plus riche des environs n'est plus qu'à quelques mètres de vous...",
            en : "-"
        },

        /**
        * Seconde Infiltration - Annonce
        **/
	    "bandits-village-roi-sannoncer-texte-1" : {
            fr : "Votre interlocuteur se retourne, surpris.",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-texte-2" : {
            fr : "&laquo; Eh bien ! Tu m'impressionne étranger. Très peu de gens ont eu l'audace de m'approcher tu sais... &raquo;",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-texte-3" : {
            fr : "La foule, au loin, vous acclame.",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-texte-4" : {
            fr : "&laquo; Que dirais-tu d'un petit duel à mort ? Tout ce qu'il y a de plus banal en soit. &raquo;",
            en : "-"
        },

	    "bandits-village-roi-sannoncer-question-texte-1" : {
            fr : "&laquo; Ne sois pas si prétentieux héros... Tu ne gagneras pas ! &raquo;",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-question-texte-2" : {
            fr : "Vous n'avez pas le temps de réagir que le roi se jette sur vous.",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-question-texte-3" : {
            fr : "Le combat est inévitable...",
            en : "-"
        },

	    "bandits-village-roi-sannoncer-refus-texte-1" : {
            fr : "Le roi rit à pleines dents puis s'avance vers vous.",
            en : "-"
        },
	    "bandits-village-roi-sannoncer-refus-texte-2" : {
            fr : "&laquo; Excuse-moi, tu pensais peut-être avoir le choix ? &raquo;",
            en : "-"
        },
		//bandits-village-roi-sannoncer-question-texte-3

        /**
        * Seconde Infiltration - Echec
        **/
	    "bandits-village-infiltrer-2-echec-texte-1" : {
            fr : "Vous continuez à vous approcher discrètement, silencieusement... Trop silencieusement d'ailleurs.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-texte-2" : {
            fr : "Un des spectateurs, trop enjoué par le spectacle et ne vous ayant pas vu, vous piétine violemment le pied.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-texte-3" : {
            fr : "Votre hurlement de douleur rugit dans tout le village, alarmant toute la mêlée...",
            en : "-"
        },

	    "bandits-village-infiltrer-2-echec-2-texte-1" : {
            fr : "Le spectacle s'arrête net et tous les regards se tournent vers vous.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-2-texte-2" : {
            fr : "&laquo; Alors alors, qu'avons-nous là ? Une fillette se serait-elle mêlée à notre assemblée ? &raquo;",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-2-texte-3" : {
            fr : "Votre interlocuteur, le roi des bandits, ricane doucement et continue :",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-2-texte-4" : {
            fr : "&laquo; Amenez-le dans l'arène mes amis, que nous rigolions un peu. &raquo;",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-2-texte-5" : {
            fr : "Vous n'avez pas le temps de réagir que des bras musclés vous attrapent de toute part et vous jettent dans la fosse.",
            en : "-"
        },
	    "bandits-village-infiltrer-2-echec-2-texte-6" : {
            fr : "Il semblerait qu'il ne vous reste plus qu'à vous défendre contre ces créatures...",
            en : "-"
        },

        /**
        * Infiltration - Echec
        **/
	    "bandits-village-infiltrer-echec-texte-1" : {
            fr : "Vous commencez à avancer discrètement, telle une ombre. Personne ne vous remarque...",
            en : "-"
        },
	    "bandits-village-infiltrer-echec-texte-2" : {
            fr : "Malheureusement, à quelques pas du bord de l’arène, vous trébuchez sur une grosse pierre.",
            en : "-"
        },
	    "bandits-village-infiltrer-echec-texte-3" : {
            fr : "Tout va alors très vite et c'est maintenant une baston générale qui se déclenche dans la foule !",
            en : "-"
        },
	    "bandits-village-infiltrer-echec-texte-4" : {
            fr : "Pas très discrète cette infiltration...",
            en : "-"
        },

	    "bandits-village-infiltrer-echec-2-texte-1" : {
            fr : "Vous vous débarrassez des gêneurs, mais 5 autres se jettent à nouveau sur vous !",
            en : "-"
        },
	    "bandits-village-infiltrer-echec-2-texte-2" : {
            fr : "Écrasé par le nombre d'assaillants, vous êtes forcé de fuir vers l’arène.",
            en : "-"
        },
	    "bandits-village-infiltrer-echec-2-texte-3" : {
            fr : "Au moins, ici, les spectateurs fous ne vous suivront pas...",
            en : "-"
        },

        /**
        * S'annoncer
        **/
	    "bandits-village-sannoncer-texte-1" : {
            fr : "&laquo; Mais qu'avons-nous là mes amis ! Un héros daigne nous honorer de sa présence ! &raquo;",
            en : "-"
        },
	    "bandits-village-sannoncer-texte-2" : {
            fr : "Votre interlocuteur, le roi des bandits, se lève de son siège et saute dans l’arène, éliminant les créatures au passage.",
            en : "-"
        },
	    "bandits-village-sannoncer-texte-3" : {
            fr : "&laquo; Qu'attends-tu donc pour venir me rejoindre ? &raquo;",
            en : "-"
        },
	    "bandits-village-sannoncer-texte-4" : {
            fr : "Sur ces mots, la foule vous attrape et vous pousse aux portes de la fosse.",
            en : "-"
        },
	    "bandits-village-sannoncer-texte-5" : {
            fr : "Le combat semble inévitable...",
            en : "-"
        },

        /**
        * Contourner la foule
        **/
	    "bandits-village-contourner-texte-1" : {
            fr : "Vous cherchez un autre chemin, en vain...",
            en : "-"
        },
	    "bandits-village-contourner-texte-2" : {
            fr : "Il semblerait que cette foule soit un passage obligatoire.",
            en : "-"
        },
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});