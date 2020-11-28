'use strict';
define([], function(){
	var data = {
	    /**
        * Ruelle classique
        **/
        "ville-ruelle-simple-1-texte-1" : {
        	fr : "Curieux de savoir quels mystères elle peut bien cacher, vous entrez dans une petite ruelle sombre au coin de la rue.",
        	en : "Curious to know the mysteries it hides, you enter a small dark alley at the corner of the street.",
        	eo : ""
        },
        "ville-ruelle-simple-1-texte-2" : {
        	fr : "À première vue, rien ne semble attirer votre attention mais, assez vite, votre regard se pose sur des enseignes intéressantes&hellip;",
        	en : "At first sight, nothing seems to draw your attention but, pretty fast, your look fix on some interesting signs.",
        	eo : ""
        },

        /**
        * Ruelle taverne
        **/
        "ville-ruelle-taverne-texte-1" : {
        	fr : "À peine entrez-vous dans la taverne qu'une chaise vole au-dessus de votre tête.",
        	en : "As soon as you enter the inn, a chair flies over your head.",
        	eo : ""
        },
        "ville-ruelle-taverne-texte-2" : {
        	fr : "Par chance, vous réussissez à l'esquiver mais, déjà, deux brocs pleins atterrissent sur le mur à côté de vous.",
        	en : "Fortunately, you dodge it but, already, two full jugs land on the wall next to you.",
        	eo : ""
        },
        "ville-ruelle-taverne-texte-3" : {
        	fr : "Le tavernier, tout à fait naturellement, vous propose un siège et une boisson&hellip;",
        	en : "The innkeeper, naturally, offers you a chair and a drink&hellip;",
        	eo : ""
        },

        "ville-ruelle-taverne-agitation-texte-1" : {
        	fr : "L'homme vous regarde, surpris.",
        	en : "The man looks at you, surprise.",
        	eo : ""
        },
        "ville-ruelle-taverne-agitation-texte-2" : {
        	fr : "&laquo;&nbsp;Quoi&nbsp;? Ça&nbsp;? Meuh non&nbsp;! Rah&hellip; Ces péquenauds d’étranger&hellip; Ça, môsieur, c'est La Castagne&nbsp;! Le sport favori du coin&nbsp;!",
        	en : "&laquo;&nbsp;What? This? Of course no! Rah&hellip; These hicks strangers&hellip; This, môsieur, it’s The Fight Club! The favorite sport around!",
        	eo : ""
        },
        "ville-ruelle-taverne-agitation-texte-3" : {
        	fr : "La seule règle c'est qu'il faut pas en parler mais, pour quelques pièces, vous pouvez tenter vôte chance vous savez&nbsp;!",
        	en : "The only rule is not to talk about it but, for a few coins, you can try your luck you know!",
        	eo : ""
        },
        "ville-ruelle-taverne-agitation-texte-4" : {
        	fr : "Faut bien rembourser les tables cassées hein&nbsp;! Alors, qu'en dites-vous&nbsp;?&nbsp;&raquo;",
        	en : "Well, I have to repay the broken tables no?! Well, What do you say?&nbsp;&raquo;",
        	eo : ""
        },

        "ville-ruelle-taverne-refus-texte-1" : {
        	fr : "&laquo;&nbsp;Pas de soucis, rev'nez donc nous voir si z'avez envie d'cogner&nbsp;!",
        	en : "&laquo;&nbsp;No problem, so get back to see us if you want to beat up!",
        	eo : ""
        },
        "ville-ruelle-taverne-refus-texte-2" : {
        	fr : "Et surtout, n'oubliez pas la première règle de La Castagne&hellip;&nbsp;&raquo;",
        	en : "And above all, don’t forget the first rule of The Fight Club&hellip;&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Retour à la taverne apres une premiere visite
        **/
        "ville-ruelle-taverne-2-texte-1" : {
        	fr : "L'homme vous toise, sourit, puis ajoute&nbsp;:",
        	en : "The man looks at you up and down, smiles, then adds:",
        	eo : ""
        },
        "ville-ruelle-taverne-2-texte-2" : {
        	fr : "&laquo;&nbsp;Alors l'étranger, on vient tenter sa chance&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well, stranger, you come back to try your luck?&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Ruelle alchimiste
        **/
        "ville-ruelle-alchimiste-texte-1" : {
        	fr : "Vous entrez dans une vieille boutique poussiéreuse.",
        	en : "You enter an old dusty shop.",
        	eo : ""
        },
        "ville-ruelle-alchimiste-texte-2" : {
        	fr : "Un vieil homme derrière le comptoir s'affaire à préparer de curieuses potions&hellip;",
        	en : "An old man behind the counter is busy to prepare some curious potions&hellip;",
        	eo : ""
        },
        "ville-ruelle-alchimiste-texte-3" : {
        	fr : "&laquo;&nbsp;Que puis-je pour vous, jeune homme&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What can i do for you, young man?&nbsp;&raquo;",
        	eo : ""
        },

        "ville-ruelle-alchimiste-achat-texte-1" : {
        	fr : "Vos achats terminés, vous revenez dans le centre-ville.",
        	en : "Your purchases finished, you get back to the center of the city.",
        	eo : ""
        },
        "ville-ruelle-alchimiste-retour-texte-1" : {
        	fr : "Non intéressé par la marchandise, vous préférez revenir dans le centre-ville.",
        	en : "No interested by goods, you prefers to get back to the center of the city.",
        	eo : ""
        },

        /**
        * Ruelle voleur
        **/
        "ville-ruelle-voleur-1-texte-1" : {
        	fr : "Vous entrez dans une petite ruelle sombre au coin de la rue.",
        	en : "You enter a small dark alley at the corner of the street.",
        	eo : ""
        },
        "ville-ruelle-voleur-1-texte-2" : {
        	fr : "À première vue, rien ne semble attirer votre attention, quand&hellip;",
        	en : "At first sight, nothing seems to draw your attention, when&hellip;",
        	eo : ""
        },
        "ville-ruelle-voleur-1-texte-3" : {
        	fr : "&laquo;&nbsp;Psst&nbsp;! Eh toi, l'étranger&hellip; Tu veux un bon plan&nbsp;?",
        	en : "&laquo;&nbsp;Psst! Hey you, stranger&hellip; You want a good plan?",
        	eo : ""
        },
        "ville-ruelle-voleur-1-texte-4" : {
        	fr : "3000 po et l'info est à toi&nbsp;! Alors&nbsp;?&nbsp;&raquo;",
        	en : "3000gold and the information is for you! Then?&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Acceptation de la proposition
        **/
        "ville-ruelle-voleur-accept-texte-1" : {
        	fr : "&laquo;&nbsp;Eh bien, on peut dire que tu fais facilement confiance toi&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well, we can say that you easily trust, you!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-ruelle-voleur-accept-texte-2" : {
        	fr : "L'homme sourit, vous pouvez apercevoir quelques dents tout en or.",
        	en : "The man smiles, you can see some gold teeth.",
        	eo : ""
        },
        "ville-ruelle-voleur-accept-texte-3" : {
        	fr : "&laquo;&nbsp;Sir Erzalt, maître-bandit, pour te servir. Tu m'as l'air prometteur mon ami&hellip;",
        	en : "&laquo;&nbsp;Sir Erzalt, bandit master, at your service. You look promising my friend&hellip;",
        	eo : ""
        },
        "ville-ruelle-voleur-accept-texte-4" : {
        	fr : "Je vais t'apprendre mon talent&nbsp;! Libre à toi de l'utiliser à ta guise&nbsp;!&nbsp;&raquo;",
        	en : "I’m going to teach you my talent! Feel free to use it as you wish!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-ruelle-voleur-accept-2-texte-1" : {
        	fr : "L'homme, fier de son affaire, vous salue&nbsp;:",
        	en : "The man, proud of this business, greets you:",
        	eo : ""
        },
        "ville-ruelle-voleur-accept-2-texte-2" : {
        	fr : "&laquo;&nbsp;À bientôt camarade&nbsp;! Répands la fortune des voleurs autour de toi&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;See you soon comrade! Spread the thieves’ fortune around you!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-ruelle-voleur-accept-2-texte-3" : {
        	fr : "Il vous lève son chapeau, puis disparaît dans l'ombre. Drôle de personnage&hellip;",
        	en : "He raises his hat, then disappears into the shadows. Strange character&hellip;",
        	eo : ""
        },

        /**
        * Refus de la proposition
        **/
        "ville-ruelle-voleur-refus-texte-1" : {
        	fr : "&laquo;&nbsp;Pouarf, vous me faites vomir vous les bobo&hellip;",
        	en : "&laquo;&nbsp;Pouarf, you make me vomit, you, bobos&hellip;",
        	eo : ""
        },
        "ville-ruelle-voleur-refus-texte-2" : {
        	fr : "Ça se la pète mais ça a pas un rond dans les sacoches&nbsp;!",
        	en : "It shows off but it doesn’t have a penny in its purse!",
        	eo : ""
        },
        "ville-ruelle-voleur-refus-texte-3" : {
        	fr : "Reviens me voir si tu changes d'avis&hellip;&nbsp;&raquo;",
        	en : "Come back to see me if you change your mind&hellip;&nbsp;&raquo;",
        	eo : ""
        }
	};

	return {
        name : function() {
            return "Suite Ville Ruelle.js";
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