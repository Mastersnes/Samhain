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
            fr : "Les forces de l'ordre, surprises par votre arrivée, viennent à votre rencontre :",
            en : "-"
        },
        "ville-garde-simple-texte-2" : {
            fr : "&laquo; Halte, jeune homme ! Que viens-tu faire ici ? C'est interdit au public ! &raquo;",
            en : "-"
        },

        "ville-garde-simple-2-texte-1" : {
            fr : "&laquo; Ah, excuse notre accueil !",
            en : "-"
        },
        "ville-garde-simple-2-texte-2" : {
            fr : "Bienvenue héros, que pouvons-nous faire pour toi ? &raquo;",
            en : "-"
        },

        "ville-garde-simple-3-texte-1" : {
            fr : "Le garde vous regarde perplexe, n'ayant pas l'air de comprendre.",
            en : "-"
        },
        "ville-garde-simple-3-texte-2" : {
            fr : "&laquo; Eh bien vois-tu, en ce moment, c'est plutôt calme...",
            en : "-"
        },
        "ville-garde-simple-3-texte-3" : {
            fr : "Rapport à ce que t'aies fait leur fête aux bandits tu vois... &raquo;",
            en : "-"
        },
        "ville-garde-simple-3-texte-4" : {
            fr : "Il a l'air d'hésiter puis ajoute :",
            en : "-"
        },
        "ville-garde-simple-3-texte-5" : {
            fr : "&laquo; Mais bon, si tu sais tenir ta langue, on a bien du 'travail' à te proposer... Tu connais le PokGard ?",
            en : "-"
        },
        "ville-garde-simple-3-texte-6" : {
            fr : "Tu verras, c'est facile... Te faut juste 100po pour commencer. T'es partant ? &raquo;",
            en : "-"
        },

        "ville-garde-simple-combat-texte-1" : {
            fr : "&laquo; Désolé bonhomme, ça se passera pas si facilement ! &raquo;",
            en : "-"
        },
        "ville-garde-simple-combat-texte-2" : {
            fr : "Les soldats s'approchent, bien décidés à vous roser...",
            en : "-"
        },

        "ville-garde-simple-retour-texte-1" : {
            fr : "Vous vous excusez et repartez tranquillement.",
            en : "-"
        },
        "ville-garde-simple-retour-texte-2" : {
            fr : "Les gardes, eux, retournent à leurs occupations.",
            en : "-"
        },

        /**
        * Poste de garde - Reussite du jeu
        **/
        "ville-garde-jeu-victoire-texte-1" : {
            fr : "Les soldats vous regardent, ahuris.",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-2" : {
            fr : "&laquo; Eh bah ! Tu m'épates mon gars ! Tu nous as complètement plumés... On n’a plus rien à parier...",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-3" : {
            fr : "Tiens, on va faire un deal. Si tu gagnes cette dernière partie, on t'apprend notre botte secrète ! Qu'est ce que t'en dis ?",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-4" : {
            fr : "Par contre, si tu perd ou que tu abandonne, on reprend tout au début.",
            en : "-"
        },
        "ville-garde-jeu-victoire-texte-5" : {
            fr : "La mise est de 1500 cette fois. Tu suis ?",
            en : "-"
        },

        /**
        * Victoire ultime du deal
        **/
        "ville-garde-jeu-victoire-2-texte-1" : {
            fr : "Les gardes sont abasourdis. Vous les avez vraiment bluffés là.",
            en : "-"
        },
        "ville-garde-jeu-victoire-2-texte-2" : {
            fr : "Impressionnés par votre science précise du jeu, ils vous apprennent leur art :",
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
            fr : "En l'espace de quelques heures, vous maîtrisez déjà l'attaque !",
            en : "-"
        },
        "ville-garde-jeu-victoire-3-texte-3" : {
            fr : "&laquo; Bravo, mon gars ! T'es loin d'être aussi expert qu'un garde, mais avec ça, tu peux être sûr de casser des têtes !",
            en : "-"
        },
        "ville-garde-jeu-victoire-3-texte-4" : {
            fr : "N’hésite pas à revenir travailler avec nous un de ces quatre ! &raquo;",
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
            fr : "À la revoyure, camarade ! &raquo;",
            en : "-"
        },

        /**
        * Poste de garde amis
        **/
        "ville-garde-ami-texte-1" : {
            fr : "Les soldats vous accueillent, prêts à jou... hum, travailler avec vous...",
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
            fr : "Reviens donc te faire plum... Hum hum, travailler quand tu veux ! &raquo;",
            en : "-"
        },

        "ville-garde-jeu-pauvre-texte-1" : {
            fr : "&laquo; Ah désolé mon gars, mais t'as pas assez de pièces.",
            en : "-"
        },
        "ville-garde-jeu-pauvre-texte-2" : {
            fr : "On peut pas te faire crédit, tu comprends, ce serait pas réglo...",
            en : "-"
        },
        "ville-garde-jeu-pauvre-texte-3" : {
            fr : "Reviens donc nous voir quand t'auras suffisamment d'or sur toi. &raquo;",
            en : "-"
        },
        "ville-garde-jeu-pauvre-texte-4" : {
            fr : "Vous repartez vers le centre de la ville, résolument pauvre...",
            en : "-"
        },

        /**
        * Poste de garde - Hors la loi
        **/
        "ville-garde-combat-texte-2" : {
            fr : "&laquo; Eh bien dis-moi, tu as du culot pour te pointer ici après ce que tu as fait ! &raquo;",
            en : "-"
        },
        "ville-garde-combat-texte-3" : {
            fr : "Pas de doute, ils vous en veulent d'avoir tué leurs copains...",
            en : "-"
        },

        "ville-garde-combat-2-texte-1" : {
            fr : "Bien ! Ainsi, ils ne devraient plus vous déranger.",
            en : "-"
        },
        "ville-garde-combat-2-texte-2" : {
            fr : "En fouillant dans la réserve, vous découvrez des ressources bien précieuses.",
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