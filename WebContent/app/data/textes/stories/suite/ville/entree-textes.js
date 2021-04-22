'use strict';
define([], function(){
	var data = {
        "ville-entree-1-texte-1" : {
        	fr : "Après avoir suivi la rue principale, vous parvenez au centre de la ville.",
        	en : "After following the main street, you reach the center of the city.",
        	eo : "Sekvinte la ĉefstraton, vi alvenas al la centro de la urbo."
        },
        "ville-entree-1-texte-2" : {
        	fr : "La civilisation&nbsp;! Enfin&nbsp;!",
        	en : "Civilization! At last!",
        	eo : "Civilizacion! Fine!"
        },
        "ville-entree-1-texte-3" : {
        	fr : "Vous régalant de la modernité des lieux, vous vous dirigez vers vos objectifs&hellip;",
        	en : "Enjoying the modernity of this place, you head for your goals&hellip;",
        	eo : "Ĝuinte la modernecon de la loko, vi iras al viaj celoj&hellip;"
        },

        /**
        * Retour au centre ville
        **/
        "ville-entree-retour-centre-texte-1" : {
        	fr : "Vous voici de nouveau au centre de la ville.",
        	en : "Here you are in the center of the city again.",
        	eo : "Vi denove estas al la centro de la urbo."
        },
        "ville-entree-retour-centre-texte-2" : {
        	fr : "Divers choix s'offrent à vous&hellip;",
        	en : "Diverse choices are given to you&hellip;",
        	eo : "Vi havas diversajn elektojn&hellip;"
        },

        /**
        * Panneau des quetes
        **/
        "ville-entree-panneau-quete-texte-1" : {
        	fr : "Un héros est toujours en recherche d'emploi.",
        	en : "A hero is always looking for a job.",
        	eo : "Heroo ĉiam estas laborpetanta."
        },
        "ville-entree-panneau-quete-texte-2" : {
        	fr : "Vous vous dirigez vers le panneau d'affichage des quêtes,",
        	en : "You head for the quests displaying panel,",
        	eo : "Vi iras al la defioj afiŝtabulo."
        },
        "ville-entree-panneau-quete-texte-3" : {
        	fr : "Peut-être qu'une nouvelle aventure vous y attend&nbsp;?",
        	en : "Maybe a new adventure is waiting for you?",
        	eo : "Eble nova aventuro atendas vin?"
        },

        "ville-entree-panneau-quete-retour-texte-1" : {
        	fr : "Vous quittez le panneau des quêtes, certains d'avoir oublié quelque chose.",
        	en : "You leave the quests panel, sure you’ve forgotten something.",
        	eo : "Vi forlasas la defiojn panelon certa, ke vi forgesis ion."
        },
        "ville-entree-panneau-quete-retour-texte-2" : {
        	fr : "L'aventure sera pour plus tard&nbsp;!",
        	en : "The adventure will be for later!",
        	eo : "La aventuro estos por poste!"
        },

        "ville-entree-retour-quete-texte-1" : {
        	fr : "Votre quête terminée, vous retournez au centre de la ville.",
        	en : "Your quest finished, you return to the center of the city.",
        	eo : "Via defio finita, vi reiras al la centro de la urbo."
        },

        "ville-entree-echec-quete-texte-1" : {
        	fr : "Vous vous réveillez à moitié étourdis&hellip;",
        	en : "You wake up half stunned&hellip;",
        	eo : "Vi vekiĝas duone konfuzita&hellip;"
        },
        "ville-entree-echec-quete-texte-2" : {
        	fr : "On peut dire qu'ils n'y ont pas été de main morte.",
        	en : "We can say that they were not cool.",
        	eo : "Ili ne agis duone!"
        },
        "ville-entree-echec-quete-texte-3" : {
        	fr : "L'esprit encore embrumé, vous retournez au centre de la ville.",
        	en : "Still confused, you return to the center of the city.",
        	eo : "Ankoraŭ konfuzita, vi reiras al la centro de la urbo."
        },
        "ville-entree-echec-quete-texte-4" : {
        	fr : "L'aventure n'attend pas&nbsp;!",
        	en : "Adventure wait for no one!",
        	eo : "La aventuro ne atendas!"
        },

        /**
        * Boutiques
        **/
        "ville-entree-boutiques-texte-1" : {
        	fr : "Rien de mieux que de bonnes emplettes&nbsp;!",
        	en : "There is nothing better than good purchases!",
        	eo : "Nenio pli bona ol aĉetadoj!"
        },
        "ville-entree-boutiques-texte-2" : {
        	fr : "Vous vous dirigez vers vos magasins préférés, prêt à faire de bonnes affaires&nbsp;!",
        	en : "You head for your favorites shops, ready for good deals!",
        	eo : "Vi iras al viaj preferataj butikoj, preta por fari bonajn aferojn."
        },

        "ville-entree-boutiques-achat-texte-1" : {
        	fr : "Une fois vos transactions terminées, vous décidez de revenir à vos occupations&hellip;",
        	en : "Once your transactions finished, you decide to get back to your occupations&hellip;",
        	eo : "Post viaj transakcioj finiĝitaj, vi decidas reveni al viaj okupoj&hellip;"
        },

        "ville-entree-boutiques-retour-texte-1" : {
        	fr : "Après mûre réflexion, vous décidez de garder votre or.",
        	en : "On second thought, you decide to keep your gold.",
        	eo : "Post longa pripensado, vi decidas konservi vian oron."
        },
        "ville-entree-boutiques-retour-texte-2" : {
        	fr : "Rien de mieux que les économies&nbsp;!",
        	en : "There is nothing better than saving your money!",
        	eo : "Nenio pli bone ol la ŝparaĵoj!"
        },

        /**
        * Palais de justice
        **/
        "ville-entree-palais-justice-texte-1" : {
        	fr : "Vous arrivez devant les grandes portes du palais, mais malheureusement&hellip; elles sont fermées.",
        	en : "You arrive in front of the big doors of the palace, but unfortunately&hellip; they’re closed.",
        	eo : "Vi alvenas antaŭ la pordegoj de la palaco, sed bedaŭrinde&hellip; ili estas fermitaj."
        },
        "ville-entree-palais-justice-texte-2" : {
        	fr : "Rien, personne à l'horizon. Sur un écriteau, vous lisez&nbsp;:",
        	en : "Nothing, Nobody on the horizon. On a sign, you can read:",
        	eo : "Nenio, neniu ĉirkaŭen. Sur panelo, vi legis:"
        },
        "ville-entree-palais-justice-texte-3" : {
        	fr : "&laquo;&nbsp;Fermé momentanément au public, ouverture prochaine&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Temporarily closed to visitor, opening soon&hellip;&nbsp;&raquo;",
        	eo : "&laquo;&nbsp; Momente fermita al publiko, baldaŭ malfermo&hellip;&nbsp;&raquo;"
        },
        "ville-entree-palais-justice-texte-4" : {
        	fr : "Eh bien, il faudra attendre&hellip;",
        	en : "Well, you’ll have to wait&hellip;",
        	eo : "Nu, vi devos atendi&hellip;"
        }
	};

	return {
        name : function() {
            return "Suite Ville Entree.js";
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