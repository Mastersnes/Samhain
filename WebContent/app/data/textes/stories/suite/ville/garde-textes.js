'use strict';
define([], function(){
	var data = {

	    /**
	    * Poste de garde classique
	    **/
        "ville-garde-texte-1" : {
            fr : "Confiant, et toujours à la recherche d'or et de gloire,",
            en : "-"
        },
        "ville-garde-texte-2" : {
            fr : "vous vous dirigez vers le poste de garde.",
            en : "-"
        },

        "ville-garde-simple-texte-1" : {
            fr : "Les forces de l'ordre, surpris par votre arrivé, viennent à votre rencontre :",
            en : "-"
        },
        "ville-garde-simple-texte-2" : {
            fr : "&laquo; Hola jeune homme ! Que viens-tu faire ici ? C'est interdit au public ! &raquo;",
            en : "-"
        },

        "ville-garde-simple-2-texte-1" : {
            fr : "&laquo; Ah, excuse notre accueil !",
            en : "-"
        },
        "ville-garde-simple-2-texte-2" : {
            fr : "Bienvenue héro, que pouvons nous faire pour toi ? &raquo;",
            en : "-"
        },

        "ville-garde-simple-combat-texte-1" : {
            fr : "&laquo; Désolé bonhomme, ça se passera pas si facilement ! &raquo;",
            en : "-"
        },
        "ville-garde-simple-combat-texte-2" : {
            fr : "Les soldats s'approchent, bien décidé à vous roser...",
            en : "-"
        },

        "ville-garde-simple-retour-texte-1" : {
            fr : "Vous vous excusez et repartez tranquillement.",
            en : "-"
        },
        "ville-garde-simple-retour-texte-2" : {
            fr : "Les garde, eux, retournent à leurs occupations.",
            en : "-"
        },

        /**
        * Poste de garde - Reussite du jeu
        **/
        "ville-garde-jeu-victoire-texte-1" : {
            fr : "Les soldats vous regardes, ahuris.",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-2" : {
            fr : "&laquo; Eh bah ! Tu m'épate mon gars ! Tu nous a complètement plumé... On a plus rien a parier...",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-3" : {
            fr : "Tiens, on va faire un deal. Si tu gagne cette dernière partie, on t'apprend notre botte secrète, qu'est ce que t'en dis ?",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-4" : {
            fr : "La mise est de 3000 cette fois, tu suis ?",
            en : "-"
        },

        /**
        * Victoire ultime du deal
        **/
        "ville-garde-jeu-victoire-2-texte-1" : {
            fr : "Les gardes sont abasourdis. vous les avez vraiment bluffé là.",
            en : "-"
        },
        "ville-garde-jeu-victoire-2-texte-2" : {
            fr : "Impressionné par votre science précise du jeu, ils vous apprennent leur art :",
            en : "-"
        },
        "ville-garde-jeu-victoire-2-texte-3" : {
            fr : "&laquo; L’opération est simple tu vois, il suffit de tailler fort et ferme ! &raquo;",
            en : "-"
        },

        "ville-garde-jeu-victoire-3-texte-1" : {
            fr : "Effectivement, c'était plutôt simple.",
            en : "-"
        },
        "ville-garde-jeu-victoire-3-texte-2" : {
            fr : "En l'espace de quelques heures vous maitrisez déjà l'attaque !",
            en : "-"
        },
        "ville-garde-jeu-victoire-3-texte-3" : {
            fr : "&laquo; Bravo mon gars, t'es loin d'être aussi expert qu'un garde mais avec ça, tu peux être sur de casser des têtes !",
            en : "-"
        },
        "ville-garde-jeu-victoire-3-texte-4" : {
            fr : "N’hésites pas à revenir travailler avec nous un de ces quatres ! &raquo;",
            en : "-"
        },

        /**
        * Refus du deal
        **/
        "ville-garde-jeu-victoire-refus-texte-1" : {
            fr : "Le garde vous répond, déçu.",
            en : "-"
        },
        "ville-garde-jeu-victoire-refus-texte-2" : {
            fr : "&laquo; Arf, vraiment dommage... Faut qu'on retourne bosser du coup.",
            en : "-"
        },
        "ville-garde-jeu-victoire-refus-texte-3" : {
            fr : "À la revoyure camarade ! &raquo;",
            en : "-"
        },

        /**
        * Poste de garde amis
        **/
        "ville-garde-ami-texte-1" : {
            fr : "Les soldats vous accueils prêt à jou... hum travailler avec vous...",
            en : "-"
        },

        "ville-garde-jeu-retour-texte-1" : {
            fr : "&laquo; Oh aller ! Tu vas pas abandonner la partie maintenant !? On vient à peine de commencer ! &raquo;",
            en : "-"
        },

        "ville-garde-jeu-echec-texte-1" : {
            fr : "&laquo; Aha, perdu mon grand ! Dommage pour toi !",
            en : "-"
        },
        "ville-garde-jeu-echec-texte-2" : {
            fr : "Reviens-donc te faire plum... Hum hum, travailler quand tu veux ! &raquo;",
            en : "-"
        },

        /**
        * Poste de garde - Hors la loi
        **/
        "ville-garde-combat-texte-1" : {
            fr : "Les forces de l'ordre, surpris par votre arrivé, viennent à votre rencontre :",
            en : "-"
        },
        "ville-garde-combat-texte-2" : {
            fr : "&laquo; Eh bien dis moi ! Tu as du culot pour te pointer ici après ce que tu as fait ! &raquo;",
            en : "-"
        },
        "ville-garde-combat-texte-3" : {
            fr : "Pas de doute, ils vous en veulent d'avoir tuer leurs copains...",
            en : "-"
        },

        "ville-garde-combat-2-texte-1" : {
            fr : "Bien ! Ainsi, ils ne devraient plus vous déranger.",
            en : "-"
        },
        "ville-garde-combat-2-texte-2" : {
            fr : "En fouillant dans la réserve vous découvrez des ressources bien précieuse.",
            en : "-"
        },
        "ville-garde-combat-2-texte-3" : {
            fr : "Tout cela pourra toujours vous servir !",
            en : "-"
        },

	    /**
	    * Poste de garde tues
	    **/
        "ville-garde-tues-texte-1" : {
            fr : "Vous avez fait le ménage. Il n'y a plus rien à voir ici...",
            en : "-"
        }
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});