'use strict';
define([], function(){
	var data = {
	    /**
	    * Ruelle classique
	    **/
        "ville-ruelle-simple-1-texte-1" : {
            fr : "Curieux de savoir quels mystères elle peut bien cacher, vous entrez dans une petite ruelle sombre au coin de la rue.",
            en : "-"
        },
        "ville-ruelle-simple-1-texte-2" : {
            fr : "À première vue, rien ne semble attirer votre attention, mais vite votre regard se pose sur des enseignes intéressante...",
            en : "-"
        },

        /**
        * Ruelle taverne
        **/
        "ville-ruelle-taverne-texte-1" : {
            fr : "À peine entrez-vous dans la taverne qu'une chaise vole au dessus de votre tête.",
            en : "-"
        },
        "ville-ruelle-taverne-texte-2" : {
            fr : "Par chance vous réussissez à l'esquiver mais déjà deux broc plein atterrissent sur le mur à côté de vous.",
            en : "-"
        },
        "ville-ruelle-taverne-texte-3" : {
            fr : "Le tavernier, tout à fait naturellement, vous propose un siège et une boisson...",
            en : "-"
        },

        "ville-ruelle-taverne-agitation-texte-1" : {
            fr : "L'homme vous regarde, surpris.",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-2" : {
            fr : "&laquo; Quoi ? Ça ? Meuh non ! Rah... Ces péquenauds d’étranger... Ça, môsieur, c'est la castagne ! Le sport favoris du coin !",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-3" : {
            fr : "La seul règle c'est qu'il faut pas en parler mais, pour quelques pièces, vous pouvez tenter vôte chance vous savez !",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-4" : {
            fr : "Faut bien rembourser les tables cassées hein ! Alors, qu'en dites-vous ? &raquo;",
            en : "-"
        },

        "ville-ruelle-taverne-refus-texte-1" : {
            fr : "&laquo; Pas de soucis, rev'nez-donc nous voir si z'avez envie d'cogner !",
            en : "-"
        },
        "ville-ruelle-taverne-refus-texte-2" : {
            fr : "Et surtout n'oubliez pas la première règle de la Castagne... &raquo;",
            en : "-"
        },

        /**
        * Retour à la taverne apres une premiere visite
        **/
        "ville-ruelle-taverne-2-texte-1" : {
            fr : "L'homme vous toise, sourit, puis ajoute :",
            en : "-"
        },
        "ville-ruelle-taverne-2-texte-2" : {
            fr : "&laquo; Alors l'étranger, on vient retenter sa chance ? &raquo;",
            en : "-"
        },

        /**
        * Ruelle alchimiste
        **/
        "ville-ruelle-alchimiste-texte-1" : {
            fr : "Vous entrez dans une vieille boutique poussiéreuse.",
            en : "-"
        },
        "ville-ruelle-alchimiste-texte-2" : {
            fr : "Un vieil homme derriere le comptoir s'affaire à préparer de curieuses potions...",
            en : "-"
        },
        "ville-ruelle-alchimiste-texte-3" : {
            fr : "&laquo; Que puis-je pour vous jeune homme ? &raquo;",
            en : "-"
        },

        "ville-ruelle-alchimiste-achat-texte-1" : {
            fr : "Vos achats terminés vous revenez dans le centre ville.",
            en : "-"
        },
        "ville-ruelle-alchimiste-retour-texte-1" : {
            fr : "Non intéressé par la marchandise, vous préférez revenir dans le centre ville.",
            en : "-"
        },

	    /**
	    * Ruelle voleur
	    **/
        "ville-ruelle-voleur-1-texte-1" : {
            fr : "Vous entrez dans une petite ruelle sombre au coin de la rue.",
            en : "-"
        },
        "ville-ruelle-voleur-1-texte-2" : {
            fr : "À première vue, rien ne semble attirer votre attention, quand...",
            en : "-"
        },
        "ville-ruelle-voleur-1-texte-3" : {
            fr : "&laquo; Psst, eh toi l'étranger, tu veux un bon plan ?",
            en : "-"
        },
        "ville-ruelle-voleur-1-texte-4" : {
            fr : "3000 po et l'info est à toi ! Alors ? &raquo;",
            en : "-"
        },

        /**
        * Acceptation de la proposition
        **/
        "ville-ruelle-voleur-accept-texte-1" : {
            fr : "&laquo; Eh bien, on peut dire que tu fais facilement confiance toi ! &raquo;",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-2" : {
            fr : "L'homme sourit, vous pouvez apercevoir quelques dents toute en or.",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-3" : {
            fr : "&laquo; Sir Erzalt, maître bandit pour te servir. Tu m'a l'air prometteur mon ami.",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-4" : {
            fr : "Je vais t'apprendre mon talent ! Libre à toi de l'utiliser à ta guise ! &raquo;",
            en : "-"
        },

        "ville-ruelle-voleur-accept-2-texte-1" : {
            fr : "L'homme, fier de son affaire, vous salut :",
            en : "-"
        },
        "ville-ruelle-voleur-accept-2-texte-2" : {
            fr : "&laquo; À bientôt camarade, repend la fortune des voleurs autour de toi &raquo;",
            en : "-"
        },
        "ville-ruelle-voleur-accept-2-texte-3" : {
            fr : "Il vous lève son chapeau puis disparaît dans l'ombre. Drôle de personnage...",
            en : "-"
        },

        /**
        * Refus de la proposition
        **/
        "ville-ruelle-voleur-refus-texte-1" : {
            fr : "&laquo; Pouarf, vous me faites vomir vous les bobo...",
            en : "-"
        },
        "ville-ruelle-voleur-refus-texte-2" : {
            fr : "Ça se la pète mais ça a pas un rond dans les sacoches !",
            en : "-"
        },
        "ville-ruelle-voleur-refus-texte-3" : {
            fr : "Reviens me voir si tu change d'avis &raquo;",
            en : "-"
        }
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});