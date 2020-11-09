'use strict';
define([], function(){
	var data = {
	    /**
        * Entrée dans l'arene
        **/
        "bandits-arene-entrer-texte-1" : {
        	fr : "Vous entrez dans l’arène sous les huées de la foule.",
        	en : "You enter into the arena under the booing of the crowd.",
        	eo : ""
        },
        "bandits-arene-entrer-texte-2" : {
        	fr : "En face de vous, quatre goules comptent bien faire de vous leur prochain dîner&hellip;",
        	en : "In front of you, four ghouls are planning to make you their next dinner&hellip;",
        	eo : ""
        },

        "bandits-arene-entrer-2-texte-1" : {
        	fr : "Vos adversaires tombent sous vos assauts répétés, vous laissant seul parmi les cadavres.",
        	en : "Your opponents collapse under your repeated assault, letting you alone among the corpses.",
        	eo : ""
        },
        "bandits-arene-entrer-2-texte-2" : {
        	fr : "Vous trouvez enfin le temps de souffler, quand vous remarquez une main bouger au sol&nbsp;!",
        	en : "You finally find the time to breathe, when you see a hand moving on the ground!",
        	eo : ""
        },
        "bandits-arene-entrer-2-texte-3" : {
        	fr : "Deux challengers, dévorés par les goules vaincues, se relèvent doucement et se dirigent vers vous&hellip;",
        	en : "Two challengers, devoured by the defeated ghouls, slowly get up and head towards you&hellip;",
        	eo : ""
        },

        "bandits-arene-entrer-3-texte-1" : {
        	fr : "Vous vous apprêtez à vous lancer dans cet ultime affrontement, lorsqu'une voix résonne au loin :",
        	en : "You get ready to start this ultimate battle, when a voice sounds away:",
        	eo : ""
        },
        "bandits-arene-entrer-3-texte-2" : {
        	fr : "&laquo;&nbsp;Assez&nbsp;! Ce combat m'ennuie et n'est pas digne d'un héros comme toi&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Stop it! This fight is boring me and isn’t worthy of a hero like you&hellip;&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-arene-entrer-3-texte-3" : {
        	fr : "Votre interlocuteur, le roi des bandits, se lève de son siège de bois massif et saute dans l’arène, éliminant les deux créatures au passage.",
        	en : "Your interlocutor, the king of bandits, gets up from his massive wooden seat and jumps into the arena, eliminating the two creatures on his way.",
        	eo : ""
        },
        "bandits-arene-entrer-3-texte-4" : {
        	fr : "&laquo;&nbsp;Allez, montre-moi donc de quoi tu es capable&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Come on, show me what you can do!&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Assassinat du roi
        **/
        "bandits-arene-assassiner-texte-1" : {
        	fr : "Voici venir la dernière étape de votre infiltration.",
        	en : "Here comes the last step of your infiltration.",
        	eo : ""
        },
        "bandits-arene-assassiner-texte-2" : {
        	fr : "Vous vous approchez doucement et étranglez votre adversaire en l’empêchant de crier.",
        	en : "You prudently approach and strangle your opponent, preventing him to screaming.",
        	eo : ""
        },
        "bandits-arene-assassiner-texte-3" : {
        	fr : "Il se débat, essaie de vous arrêter, mais bientôt ses râles étouffés ne laissent place qu'à un silence morbide.",
        	en : "He’s struggling, trying to stop you, but soon his suffocation changes into a morbid silence.",
        	eo : ""
        },
        "bandits-arene-assassiner-texte-4" : {
        	fr : "Félicitations, votre assassinat est une réussite&nbsp;!",
        	en : "Congratulation, Your murder is a success!",
        	eo : ""
        },

        "bandits-arene-assassiner-2-texte-1" : {
        	fr : "Maintenant seul, vous vous approchez du corps du roi et lui découpez l'oreille avec sa propre dague pour y récupérer <span key='anneau-bandit'>l'anneau doré</span>.",
        	en : "Now alone, you approach the king corpse and cut off his ear with his own dagger in order to take his <span key='anneau-bandit'>golden ring</span>.",
        	eo : ""
        },
        "bandits-arene-assassiner-2-texte-2" : {
        	fr : "Eh bien, cela vous fera deux récompenses&nbsp;!",
        	en : "Well, that will make you two rewards!",
        	eo : ""
        },
        "bandits-arene-assassiner-2-texte-3" : {
        	fr : "Fier de votre butin, vous retournez en ville pour annoncer votre victoire.",
        	en : "Proud of your loot, you go back to the city to announce your victory.",
        	eo : ""
        },

        /**
        * Victoire contre le roi avec ses allies
        **/
        "bandits-arene-win-texte-1" : {
        	fr : "Vous venez à bout de vos adversaires sous les applaudissements de la foule.",
        	en : "You beat your opponents to the applause of the crowd.",
        	eo : ""
        },
        "bandits-arene-win-texte-2" : {
        	fr : "Eh bien, ils n'étaient pas si terribles que ça finalement&hellip;",
        	en : "Well, they weren’t so terrible after all&hellip;",
        	eo : ""
        },

        /**
        * Victoire contre le roi seul
        **/
        "bandits-arene-solo-win-texte-1" : {
        	fr : "Vous venez à bout de votre adversaire sous les applaudissements de la foule.",
        	en : "You beat your opponent to the applause of the crowd.",
        	eo : ""
        },
        "bandits-arene-solo-win-texte-2" : {
        	fr : "Eh bien, il n'était pas si terrible que ça finalement&hellip;",
        	en : "Well, he wasn’t so terrible after all&hellip;",
        	eo : ""
        },

        /**
        * Victoire contre les goules
        **/
        "bandits-arene-goule-win-texte-1" : {
        	fr : "&laquo;&nbsp;Eh bien, tu n'es donc pas aussi faible que tu en as l'air&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well, you’re not as weak as you look!&nbsp;&raquo;",
        	eo : ""
        },
        "bandits-arene-goule-win-texte-2" : {
        	fr : "Le noble voleur, remotivé par votre combat, se lève de son siège de bois massif et saute dans l'arène.",
        	en : "The noble thief, remotivated by your battle, get up from his massive wooden seat and jump into the arena.",
        	eo : ""
        },
        //"bandits-arene-entrer-3-texte-4"

        /**
        * Fin de la quete des bandits
        **/
        "bandits-arene-fin-texte-1" : {
        	fr : "Le combat maintenant terminé, la foule se disperse, rassasiée.",
        	en : "The fight now ended, the crowd disperses, satiated.",
        	eo : ""
        },
        "bandits-arene-fin-texte-2" : {
        	fr : "Une nouvelle élection aura certainement lieu&hellip;",
        	en : "A new election will certainly take place&hellip;",
        	eo : ""
        },
        //bandits-arene-assassiner-2-texte-1
        //bandits-arene-assassiner-2-texte-2
        //bandits-arene-assassiner-2-texte-3
	};

	return {
        name : function() {
            return "Suite Bandits Arene.js";
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