'use strict';
define([], function(){
	var data = {
	    /**
        * Fouille - Reussite
        **/
        "bandits-village-fouiller-reussite-texte-1" : {
        	fr : "Les maisons sont vides et personne n'est là pour vous arrêter.",
        	en : "The houses are empty and no one is here to stop you.",
        	eo : ""
        },
        "bandits-village-fouiller-reussite-texte-2" : {
        	fr : "Par chance, vous tombez sur la réserve. Ces vivres vous seront bien utile&nbsp;!",
        	en : "Fortunately, you find the reserve. These supplies will be very useful!",
        	eo : ""
        },

        /**
        * Fouille - Echec
        **/
        "bandits-village-fouiller-echec-texte-1" : {
        	fr : "Vous fouillez toutes les maisons, mais en vain.",
        	en : "You search into all the houses, bu in vain.",
        	eo : ""
        },
        "bandits-village-fouiller-echec-texte-2" : {
        	fr : "Rien ni personne n'est là pour vous arrêter, même pas une petite pomme&hellip;",
        	en : "Nothing and nobody is here to stop you, Not even a small apple&hellip;",
        	eo : ""
        },

        /**
        * Fouille - Echec Critique
        **/
        "bandits-village-fouiller-critique-texte-1" : {
        	fr : "À chaque maison fouillée, le même constat : rien.",
        	en : "For each house searched, the same result : nothing.",
        	eo : ""
        },
        "bandits-village-fouiller-critique-texte-2" : {
        	fr : "Vous vous approchez de la dernière maison, quand vous entendez ricaner derrière vous.",
        	en : "You near the last house, when you hear a snigging behind you.",
        	eo : ""
        },
        "bandits-village-fouiller-critique-texte-3" : {
        	fr : "Au moins, vous pourrez passer votre déception sur quelqu'un&hellip;",
        	en : "At least, you’ll have someone to pass your disappointment&hellip;",
        	eo : ""
        },

        /**
        * Village suite
        **/
        "bandits-village-2-texte-1" : {
        	fr : "Une fois la dernière maison fouillée, vous vous relancez à la recherche de ces bandits.",
        	en : "Once the last house has been searched, you start to lokking for these bandits again.",
        	eo : ""
        },
        "bandits-village-2-texte-2" : {
        	fr : "Des bruits au centre du village vous indiquent le lieu où chercher&hellip;",
        	en : "Some noises in the center of the village tell you where to search&hellip;",
        	eo : ""
        },

        "bandits-village-3-texte-1" : {
        	fr : "Vous observez discrètement la foule rassemblée au loin.",
        	en : "You discreetly observe the crowd gathered in the distance.",
        	eo : ""
        },
        "bandits-village-3-texte-2" : {
        	fr : "Que se passe-t-il&nbsp;? Il semblerait qu'ils assistent à un combat.",
        	en : "What’s going on? It seems that they attend a fight.",
        	eo : ""
        },

        /**
        * Infiltration - Reussite
        **/
        "bandits-village-infiltrer-reussite-texte-1" : {
        	fr : "Vous vous glissez parmi les badauds avec l'art du plus grand des assassins.",
        	en : "You slip among the onlookers with the greatest assassins’ art.",
        	eo : ""
        },
        "bandits-village-infiltrer-reussite-texte-2" : {
        	fr : "Quelques têtes se tournent vers vous, mais la foule vous sert de masque.",
        	en : "Some heads turn to you, but the crowd is your mask.",
        	eo : ""
        },
        "bandits-village-infiltrer-reussite-texte-3" : {
        	fr : "Maintenant à quelques mètres du combat, vous pouvez enfin apprécier la scène à votre convenance&hellip;",
        	en : "Now at few meters from the fight, you finally can appreciate the scene&hellip;",
        	eo : ""
        },

        "bandits-village-observer-texte-1" : {
        	fr : "Vous ne pouvez retenir votre dégoût.",
        	en : "You can’t hold back you disgust.",
        	eo : ""
        },
        "bandits-village-observer-texte-2" : {
        	fr : "Deux hommes se battent désespérément contre une goule affamée.",
        	en : "Two men are desperately fighting against a hungry ghoul.",
        	eo : ""
        },
        "bandits-village-observer-texte-3" : {
        	fr : "Plusieurs corps déchiquetés gisent par terre servant de repas à 3 autres goules un peu plus distraites.",
        	en : "Several shredded corpses lie on the ground, serving as meal to 3 other ghouls a little more distracted.",
        	eo : ""
        },
        "bandits-village-observer-texte-4" : {
        	fr : "De l'autre côté de l’arène, un bandit semblant plus noble que les autres, assiste à la scène, amusé.",
        	en : "From the other side of the arena, a bandit nobler than the others, looks the scene, amused.",
        	eo : ""
        },

        /**
        * Seconde Inflitration - Reussite
        **/
        "bandits-village-infiltrer-2-reussite-texte-1" : {
        	fr : "Vous continuez à virevolter parmi la foule telle une plume dans le vent.",
        	en : "You continue to spin among the crowd like a feather in the wind.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-reussite-texte-2" : {
        	fr : "Personne ne vous remarque et vous arrivez maintenant aux portes de la loge royale.",
        	en : "Nobody notices you and you arrive at the doors of the royal box.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-reussite-texte-3" : {
        	fr : "Le bandit le plus riche des environs n'est plus qu'à quelques mètres de vous&hellip;",
        	en : "The richest bandit in the area is only a few meters away from you&hellip;",
        	eo : ""
        },

        /**
        * Seconde Infiltration - Annonce
        **/
        "bandits-village-roi-sannoncer-texte-1" : {
        	fr : "Votre interlocuteur se retourne, surpris.",
        	en : "Your interlocutor turn around, surprised.",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-texte-2" : {
        	fr : "&laquo;&nbsp;Eh bien&nbsp;! Tu m'impressionne, étranger. Très peu de gens ont eu l'audace de m'approcher tu sais&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well! You impress me, stranger. Very few people have audacity to approach me, you know&hellip;&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-texte-3" : {
        	fr : "La foule, au loin, vous acclame.",
        	en : "The crowds, at the distance, cheers you.",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-texte-4" : {
        	fr : "&laquo;&nbsp;Que dirais-tu d'un petit duel à mort&nbsp;? Tout ce qu'il y a de plus banal en soit.&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What do you think about a little duel to the death? A simple banality no?&nbsp;&raquo;",
        	eo : ""
        },

        "bandits-village-roi-sannoncer-question-texte-1" : {
        	fr : "&laquo;&nbsp;Ne sois pas si prétentieux héros&hellip; Tu ne gagneras pas&nbsp;!&nbsp;&raquo;",
        	en : "Don’t be so pretentious, hero&hellip; You won’t win!",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-question-texte-2" : {
        	fr : "Vous n'avez pas le temps de réagir que le roi se jette sur vous.",
        	en : "You don’t have the time to react when the king throws himself at you.",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-question-texte-3" : {
        	fr : "Le combat est inévitable&hellip;",
        	en : "The fight is inevitable&hellip;",
        	eo : ""
        },

        "bandits-village-roi-sannoncer-refus-texte-1" : {
        	fr : "Le roi rit à pleines dents puis s'avance vers vous.",
        	en : "The king is laughing heartily and moves towards you.",
        	eo : ""
        },
        "bandits-village-roi-sannoncer-refus-texte-2" : {
        	fr : "&laquo;&nbsp;Excuse-moi, tu pensais peut-être avoir le choix&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Excuse me, you thought that you might have the choice?&nbsp;&raquo;",
        	eo : ""
        },
        //bandits-village-roi-sannoncer-question-texte-3

        /**
        * Seconde Infiltration - Echec
        **/
        "bandits-village-infiltrer-2-echec-texte-1" : {
        	fr : "Vous continuez à vous approcher discrètement, silencieusement&hellip; Trop silencieusement d'ailleurs.",
        	en : "You continue to approach discreetly, silently&hellip; Well, too much silently maybe.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-texte-2" : {
        	fr : "Un des spectateurs, trop enjoué par le spectacle et ne vous ayant pas vu, vous piétine violemment le pied.",
        	en : "One of the spectators, too cheerful by the fight and not having seeing you, violently tramples on your foot.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-texte-3" : {
        	fr : "Votre hurlement de douleur rugit dans tout le village, alarmant toute l’assemblée&hellip;",
        	en : "Your scream of pain roars through the village, alarming whole the gathering&hellip;",
        	eo : ""
        },

        "bandits-village-infiltrer-2-echec-2-texte-1" : {
        	fr : "Le spectacle s'arrête net et tous les regards se tournent vers vous.",
        	en : "The show stops abruptly and all eyes turn to you.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-2-texte-2" : {
        	fr : "&laquo;&nbsp;Alors alors, qu'avons-nous là&nbsp;? Une fillette se serait-elle mêlée à notre assemblée&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well well well, What do we have here? Is there a little girl present at our meeting?&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-2-texte-3" : {
        	fr : "Votre interlocuteur, le roi des bandits, ricane doucement et continue :",
        	en : "Your interlocutor, the king of bandits, slowly sniggers and continues:",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-2-texte-4" : {
        	fr : "&laquo;&nbsp;Amenez-le dans l'arène mes amis, que nous rigolions un peu.&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Bring him into the arena my friends, so we can laugh a little.&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-2-texte-5" : {
        	fr : "Vous n'avez pas le temps de réagir que des bras musclés vous attrapent de toute part et vous jettent dans la fosse.",
        	en : "You don’t have the time to react when many muscled arms grab you from everywhere and throw you into the pit.",
        	eo : ""
        },
        "bandits-village-infiltrer-2-echec-2-texte-6" : {
        	fr : "Il semblerait qu'il ne vous reste plus qu'à vous défendre contre ces créatures&hellip;",
        	en : "It seems that all you have to do is defend yourself against these creatures&hellip;",
        	eo : ""
        },

        /**
        * Infiltration - Echec
        **/
        "bandits-village-infiltrer-echec-texte-1" : {
        	fr : "Vous commencez à avancer discrètement, telle une ombre. Personne ne vous remarque&hellip;",
        	en : "You’re starting to progress discreetly, as a shadow. No one notices you&hellip;",
        	eo : ""
        },
        "bandits-village-infiltrer-echec-texte-2" : {
        	fr : "Malheureusement, à quelques pas du bord de l’arène, vous trébuchez sur une grosse pierre.",
        	en : "Unfortunately, a few steps from the arena’s edge, you stumble on a big stone.",
        	eo : ""
        },
        "bandits-village-infiltrer-echec-texte-3" : {
        	fr : "Tout va alors très vite et c'est maintenant une baston générale qui se déclenche dans la foule&nbsp;!",
        	en : "Then, everything goes very fast and it’s now a general fight starting in the crowd!",
        	eo : ""
        },
        "bandits-village-infiltrer-echec-texte-4" : {
        	fr : "Pas très discrète cette infiltration&hellip;",
        	en : "Not really discreet this infiltration&hellip;",
        	eo : ""
        },

        "bandits-village-infiltrer-echec-2-texte-1" : {
        	fr : "Vous vous débarrassez des gêneurs, mais 5 autres se jettent à nouveau sur vous&nbsp;!",
        	en : "You get rid of these nuisances, but 5 others throw themselves on you again!",
        	eo : ""
        },
        "bandits-village-infiltrer-echec-2-texte-2" : {
        	fr : "Écrasé par le nombre d'assaillants, vous êtes forcé de fuir vers l’arène.",
        	en : "Crushed by the number of assailant, you have to flee to the arena.",
        	eo : ""
        },
        "bandits-village-infiltrer-echec-2-texte-3" : {
        	fr : "Au moins, ici, les spectateurs fous ne vous suivront pas&hellip;",
        	en : "At least, here, the crazy spectators won’t follow you&hellip;",
        	eo : ""
        },

        /**
        * S'annoncer
        **/
        "bandits-village-sannoncer-texte-1" : {
        	fr : "&laquo;&nbsp;Mais qu'avons-nous là mes amis&nbsp;! Un héros daigne nous honorer de sa présence&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What have we here, my friends! A hero deigns to honor us by his presence!&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-village-sannoncer-texte-2" : {
        	fr : "Votre interlocuteur, le roi des bandits, se lève de son siège et saute dans l’arène, éliminant les créatures au passage.",
        	en : "Your interlocutor, the king of bandits, gets up from his seat and jumps into the arena, eliminating the creatures on his way.",
        	eo : ""
        },
        "bandits-village-sannoncer-texte-3" : {
        	fr : "&laquo;&nbsp;Qu'attends-tu donc pour venir me rejoindre&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What are you waiting for to come and join me?&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-village-sannoncer-texte-4" : {
        	fr : "Sur ces mots, la foule vous attrape et vous pousse aux portes de la fosse.",
        	en : "Upon these words, the crowd grabs you and throws you at the pit’s doors.",
        	eo : ""
        },
        "bandits-village-sannoncer-texte-5" : {
        	fr : "Le combat semble inévitable&hellip;",
        	en : "The fight seems inevitable&hellip;",
        	eo : ""
        },

        /**
        * Contourner la foule
        **/
        "bandits-village-contourner-texte-1" : {
        	fr : "Vous cherchez un autre chemin, en vain&hellip;",
        	en : "You search another way, in vain&hellip;",
        	eo : ""
        },
        "bandits-village-contourner-texte-2" : {
        	fr : "Il semblerait que cette foule soit un passage obligatoire.",
        	en : "It seems that this crowd is an obligatory path.",
        	eo : ""
        },
	};

	return {
        name : function() {
            return "Suite Bandits Village.js";
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