'use strict';
define([], function(){
	var data = {
        "ville-entree-1-texte-1" : {
            fr : "Après avoir suivi la rue principale, vous parvenez au centre de la ville.",
            en : "-"
        },
        "ville-entree-1-texte-2" : {
            fr : "La civilisation&nbsp;! Enfin&nbsp;!",
            en : "-"
        },
        "ville-entree-1-texte-3" : {
            fr : "Vous régalant de la modernité des lieux, vous vous dirigez vers vos objectifs&hellip;",
            en : "-"
        },

        /**
        * Retour au centre ville
        **/
        "ville-entree-retour-centre-texte-1" : {
            fr : "Vous voici de nouveau au centre de la ville.",
            en : "-"
        },
        "ville-entree-retour-centre-texte-2" : {
            fr : "Divers choix s'offrent à vous&hellip;",
            en : "-"
        },

        /**
        * Panneau des quetes
        **/
        "ville-entree-panneau-quete-texte-1" : {
            fr : "Un héros est toujours en recherche d'emploi.",
            en : "-"
        },
        "ville-entree-panneau-quete-texte-2" : {
            fr : "Vous vous dirigez vers le panneau d'affichage des quêtes,",
            en : "-"
        },
        "ville-entree-panneau-quete-texte-3" : {
            fr : "Peut-être qu'une nouvelle aventure vous y attend&nbsp;?",
            en : "-"
        },

        "ville-entree-panneau-quete-retour-texte-1" : {
            fr : "Vous quittez le panneau des quêtes, certains d'avoir oublié quelque chose.",
            en : "-"
        },
        "ville-entree-panneau-quete-retour-texte-2" : {
            fr : "L'aventure sera pour plus tard&nbsp;!",
            en : "-"
        },

        "ville-entree-retour-quete-texte-1" : {
            fr : "Votre quête terminée, vous retournez au centre de la ville.",
            en : "-"
        },

        "ville-entree-echec-quete-texte-1" : {
            fr : "Vous vous réveillez à moitié étourdis&hellip;",
            en : "-"
        },
        "ville-entree-echec-quete-texte-2" : {
            fr : "On peut dire qu'ils n'y ont pas été de main morte.",
            en : "-"
        },
        "ville-entree-echec-quete-texte-3" : {
            fr : "L'esprit encore embrumé, vous retournez au centre de la ville.",
            en : "-"
        },
        "ville-entree-echec-quete-texte-4" : {
            fr : "L'aventure n'attend pas&nbsp;!",
            en : "-"
        },

        /**
        * Boutiques
        **/
        "ville-entree-boutiques-texte-1" : {
            fr : "Rien de mieux que de bonnes emplettes&nbsp;!",
            en : "-"
        },
        "ville-entree-boutiques-texte-2" : {
            fr : "Vous vous dirigez vers vos magasins préférés, prêt à faire de bonnes affaires&nbsp;!",
            en : "-"
        },

        "ville-entree-boutiques-achat-texte-1" : {
            fr : "Une fois vos transactions terminées, vous décidez de revenir à vos occupations&hellip;",
            en : "-"
        },

        "ville-entree-boutiques-retour-texte-1" : {
            fr : "Après mûre réflexion, vous décidez de garder votre or.",
            en : "-"
        },
        "ville-entree-boutiques-retour-texte-2" : {
            fr : "Rien de mieux que les économies&nbsp;!",
            en : "-"
        },

        /**
        * Palais de justice
        **/
        "ville-entree-palais-justice-texte-1" : {
            fr : "Vous arrivez devant les grandes portes du palais, mais malheureusement&hellip; elles sont fermées.",
            en : "-"
        },
        "ville-entree-palais-justice-texte-2" : {
            fr : "Rien, personne à l'horizon. Sur un écriteau, vous lisez :",
            en : "-"
        },
        "ville-entree-palais-justice-texte-3" : {
            fr : "&laquo;&nbsp;Fermé momentanément au public, ouverture prochaine&hellip;&nbsp;&raquo;",
            en : "-"
        },
        "ville-entree-palais-justice-texte-4" : {
            fr : "Eh bien, il faudra attendre&hellip;",
            en : "-"
        },
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