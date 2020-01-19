'use strict';
define([], function(){
	var data = {
	    /**
	    * Main gauche
	    **/
        "didacticiel-gauche-texte-1" : {
            fr : "Vous choisissez la main de gauche bien qu'elle soit invisible.",
            en : "-"
        },
        "didacticiel-gauche-texte-2" : {
            fr : "&laquo; Grâce à ton choix fabuleux, tu as obtenu la loupe&nbsp;!",
            en : "-"
        },
        "didacticiel-gauche-texte-3" : {
            fr : "Elle te permettra d’accéder au glossaire afin de découvrir tout les trésors de ce monde. N’hésites pas à cliquer dessus pour en savoir plus.",
            en : "-"
        },
        "didacticiel-gauche-texte-4" : {
            fr : "Puisque tu es sage et attentif, je t'autorise exceptionnellement à ouvrir mon autre main. Vas y, c'est gratuit&nbsp;! &raquo;",
            en : "-"
        },

        /**
        * Puis main droite
        **/
        "didacticiel-gauchedroite-texte-1" : {
            fr : "La main invisible s'ouvre devant vos yeux ébahis.",
            en : "-"
        },
        "didacticiel-gauchedroite-texte-2" : {
            fr : "&laquo; Voici maintenant le carnet&nbsp;!",
            en : "-"
        },
        //didacticiel-droite-texte-3
        //didacticiel-droite-texte-4
        //didacticiel-droitegauche-texte-4

        /**
        * Main droite
        **/
        "didacticiel-droite-texte-1" : {
            fr : "Bien quelle soit invisible, vous choisissez la main de droite.",
            en : "-"
        },
        "didacticiel-droite-texte-2" : {
            fr : "&laquo; Grâce à ton flaire infaillible, tu as obtenu le carnet&nbsp;!",
            en : "-"
        },
        "didacticiel-droite-texte-3" : {
            fr : "Il te permettra d’accéder à l'inventaire afin de modifier ton équipement et utiliser tes objets.",
            en : "-"
        },
        "didacticiel-droite-texte-4" : {
            fr : "N’hésites pas à cliquer dessus de temps à autres pour mettre au points ta stratégie.",
            en : "-"
        },
        //didacticiel-gauche-texte-4

        /**
        * Puis main gauche
        **/
        "didacticiel-droitegauche-texte-1" : {
            fr : "La main invisible s'ouvre devant vos yeux ébahis.",
            en : "-"
        },
        "didacticiel-droitegauche-texte-2" : {
            fr : "&laquo; Voici maintenant la loupe&nbsp;!",
            en : "-"
        },
        //didacticiel-gauche-texte-3
        "didacticiel-droitegauche-texte-4" : {
            fr : "Une fois que tu auras terminé, nous pourrons continuer. &raquo;",
            en : "-"
        },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});