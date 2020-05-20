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
            fr : "À première vue, rien ne semble attirer votre attention mais, assez vite, votre regard se pose sur des enseignes intéressantes&hellip;",
            en : "-"
        },

        /**
        * Ruelle taverne
        **/
        "ville-ruelle-taverne-texte-1" : {
            fr : "À peine entrez-vous dans la taverne qu'une chaise vole au-dessus de votre tête.",
            en : "-"
        },
        "ville-ruelle-taverne-texte-2" : {
            fr : "Par chance, vous réussissez à l'esquiver mais, déjà, deux brocs pleins atterrissent sur le mur à côté de vous.",
            en : "-"
        },
        "ville-ruelle-taverne-texte-3" : {
            fr : "Le tavernier, tout à fait naturellement, vous propose un siège et une boisson&hellip;",
            en : "-"
        },

        "ville-ruelle-taverne-agitation-texte-1" : {
            fr : "L'homme vous regarde, surpris.",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-2" : {
            fr : "&laquo;&nbsp;Quoi&nbsp;? Ça&nbsp;? Meuh non&nbsp;! Rah&hellip; Ces péquenauds d’étranger&hellip; Ça, môsieur, c'est La Castagne&nbsp;! Le sport favori du coin&nbsp;!",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-3" : {
            fr : "La seule règle c'est qu'il faut pas en parler mais, pour quelques pièces, vous pouvez tenter vôte chance vous savez&nbsp;!",
            en : "-"
        },
        "ville-ruelle-taverne-agitation-texte-4" : {
            fr : "Faut bien rembourser les tables cassées hein&nbsp;! Alors, qu'en dites-vous&nbsp;?&nbsp;&raquo;",
            en : "-"
        },

        "ville-ruelle-taverne-refus-texte-1" : {
            fr : "&laquo;&nbsp;Pas de soucis, rev'nez donc nous voir si z'avez envie d'cogner&nbsp;!",
            en : "-"
        },
        "ville-ruelle-taverne-refus-texte-2" : {
            fr : "Et surtout, n'oubliez pas la première règle de La Castagne&hellip;&nbsp;&raquo;",
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
            fr : "&laquo;&nbsp;Alors l'étranger, on vient retenter sa chance&nbsp;?&nbsp;&raquo;",
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
            fr : "Un vieil homme derrière le comptoir s'affaire à préparer de curieuses potions&hellip;",
            en : "-"
        },
        "ville-ruelle-alchimiste-texte-3" : {
            fr : "&laquo;&nbsp;Que puis-je pour vous, jeune homme&nbsp;?&nbsp;&raquo;",
            en : "-"
        },

        "ville-ruelle-alchimiste-achat-texte-1" : {
            fr : "Vos achats terminés, vous revenez dans le centre-ville.",
            en : "-"
        },
        "ville-ruelle-alchimiste-retour-texte-1" : {
            fr : "Non intéressé par la marchandise, vous préférez revenir dans le centre-ville.",
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
            fr : "À première vue, rien ne semble attirer votre attention, quand&hellip;",
            en : "-"
        },
        "ville-ruelle-voleur-1-texte-3" : {
            fr : "&laquo;&nbsp;Psst&nbsp;! Eh toi, l'étranger&hellip; Tu veux un bon plan&nbsp;?",
            en : "-"
        },
        "ville-ruelle-voleur-1-texte-4" : {
            fr : "3000 po et l'info est à toi&nbsp;! Alors&nbsp;?&nbsp;&raquo;",
            en : "-"
        },

        /**
        * Acceptation de la proposition
        **/
        "ville-ruelle-voleur-accept-texte-1" : {
            fr : "&laquo;&nbsp;Eh bien, on peut dire que tu fais facilement confiance toi&nbsp;!&nbsp;&raquo;",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-2" : {
            fr : "L'homme sourit, vous pouvez apercevoir quelques dents tout en or.",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-3" : {
            fr : "&laquo;&nbsp;Sir Erzalt, maître-bandit, pour te servir. Tu m'as l'air prometteur mon ami&hellip;",
            en : "-"
        },
        "ville-ruelle-voleur-accept-texte-4" : {
            fr : "Je vais t'apprendre mon talent&nbsp;! Libre à toi de l'utiliser à ta guise&nbsp;!&nbsp;&raquo;",
            en : "-"
        },

        "ville-ruelle-voleur-accept-2-texte-1" : {
            fr : "L'homme, fier de son affaire, vous salue :",
            en : "-"
        },
        "ville-ruelle-voleur-accept-2-texte-2" : {
            fr : "&laquo;&nbsp;À bientôt camarade&nbsp;! Répands la fortune des voleurs autour de toi&nbsp;!&nbsp;&raquo;",
            en : "-"
        },
        "ville-ruelle-voleur-accept-2-texte-3" : {
            fr : "Il vous lève son chapeau, puis disparaît dans l'ombre. Drôle de personnage&hellip;",
            en : "-"
        },

        /**
        * Refus de la proposition
        **/
        "ville-ruelle-voleur-refus-texte-1" : {
            fr : "&laquo;&nbsp;Pouarf, vous me faites vomir vous les bobo&hellip;",
            en : "-"
        },
        "ville-ruelle-voleur-refus-texte-2" : {
            fr : "Ça se la pète mais ça a pas un rond dans les sacoches&nbsp;!",
            en : "-"
        },
        "ville-ruelle-voleur-refus-texte-3" : {
            fr : "Reviens me voir si tu changes d'avis&nbsp;&raquo;",
            en : "-"
        }
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});