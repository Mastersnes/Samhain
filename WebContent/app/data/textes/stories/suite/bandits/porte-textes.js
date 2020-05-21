'use strict';
define([], function(){
	var data = {
        "bandits-porte-debut-texte-1" : {
            fr : "Vous voici reparti à l'aventure. Sans compagnons, mais en route vers l'horizon&nbsp;!",
            en : "-"
        },
        "bandits-porte-debut-texte-2" : {
            fr : "Suivant la direction indiquée par le gardien de la porte, vous arrivez à quelques mètres d'une sorte de hameau, entouré d'une barricade de bois.",
            en : "-"
        },
        "bandits-porte-debut-texte-3" : {
            fr : "Il doit s'agir du repaire de ces vauriens de bandits.",
            en : "-"
        },
        "bandits-porte-debut-texte-4" : {
            fr : "Plusieurs options s'offrent alors à vous&hellip;",
            en : "-"
        },

        /**
        * On se dirige vers la porte
        **/
        "bandits-porte-texte-1" : {
            fr : "Vous vous dirigez d'un pas assuré vers la porte.",
            en : "-"
        },
        "bandits-porte-texte-2" : {
            fr : "Les deux voyous gardant l'entrée ne semblent pas vouloir discuter.",
            en : "-"
        },
        "bandits-porte-texte-3" : {
            fr : "C'est certain, tout cela finira dans les larmes&hellip;",
            en : "-"
        },

        "bandits-porte-2-texte-1" : {
            fr : "Les deux confrères tombent à terre en lâchant un râle. Ils ne vous dérangeront plus.",
            en : "-"
        },
        "bandits-porte-2-texte-2" : {
            fr : "Vous continuez votre route et passez la porte de bois pour arriver au cœur d'un petit amoncellement de maisons.",
            en : "-"
        },
        "bandits-porte-2-texte-3" : {
            fr : "Il semblerait que les bandits vivent ici la grande vie&nbsp;!",
            en : "-"
        },

        /**
        * On trouve une faille
        **/
        "bandits-porte-faille-texte-1" : {
            fr : "Vous contournez la grande muraille jusqu'à découvrir un trou entre deux piquets.",
            en : "-"
        },
        "bandits-porte-faille-texte-2" : {
            fr : "La sécurité n'est pas très au point ici&hellip;",
            en : "-"
        },
        "bandits-porte-faille-texte-3" : {
            fr : "Vous pénétrez dans l'enceinte de la muraille et arrivez au cœur d'un petit amoncellement de maisons.",
            en : "-"
        },
		//bandits-porte-2-texte-3

        /**
        * Reussite de l'escalade
        **/
        "bandits-porte-escalade-reussite-texte-1" : {
            fr : "Grâce à vos talents d'alpiniste chevronné, vous parvenez à franchir la muraille et atterrissez de l'autre côté, indemne.",
            en : "-"
        },
        "bandits-porte-escalade-reussite-texte-2" : {
            fr : "Encore une preuve que l'exercice physique a toujours du bon&nbsp;!",
            en : "-"
        },
        "bandits-porte-escalade-reussite-texte-3" : {
            fr : "Après quelques secondes de marche, vous arrivez au cœur d'un petit amoncellement de maisons.",
            en : "-"
        },
		//bandits-porte-2-texte-3

        /**
        * Echec de l'escalade
        **/
        "bandits-porte-escalade-echec-texte-1" : {
            fr : "Vous essayez d'escalader l’épais mur, mais en vain&hellip;",
            en : "-"
        },
        "bandits-porte-escalade-echec-texte-2" : {
            fr : "Rien n'y fait, c'est beaucoup trop haut.",
            en : "-"
        },
        "bandits-porte-escalade-echec-texte-3" : {
            fr : "Déçu, vous vous retrouvez forcé d’étudier les autres possibilités.",
            en : "-"
        },

        /**
        * Echec critique de l'escalade
        **/
        "bandits-porte-escalade-critique-texte-1" : {
            fr : "Vous parvenez presque en haut du muret de bois, mais une fois au sommet, c'est le drame&hellip;",
            en : "-"
        },
        "bandits-porte-escalade-critique-texte-2" : {
            fr : "Votre pied dérape d'un coup. Vos mains moites ne parviennent pas à saisir la prise à temps et bam&nbsp;!",
            en : "-"
        },
        "bandits-porte-escalade-critique-texte-3" : {
            fr : "Vous finissez sur le cul au bas de la palissade&hellip;",
            en : "-"
        },
        "bandits-porte-escalade-critique-texte-4" : {
            fr : "Une chose est sûre : le sport, c'est pas votre fort&hellip;",
            en : "-"
        },
		//bandits-porte-escalade-echec-texte-3
	};

	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});