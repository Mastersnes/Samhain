'use strict';
define([], function(){
	var data = {
	    /**
	    * Fin choix
	    **/
        "didacticiel-finchoix-texte-1" : {
            fr : "&laquo; Bien, tu maîtrises à présent les subtilités du choix&nbsp;!",
            en : "-"
        },
        "didacticiel-finchoix-texte-2" : {
            fr : "Cet apprentissage te sera bien utile pour faire face aux périples qui t'attendent&nbsp;!",
            en : "-"
        },
        "didacticiel-finchoix-texte-3" : {
            fr : "Mais... seras-tu capable de garder tout ton sang froid lorsque l'action apparaîtra devant toi&nbsp;? &raquo;",
            en : "-"
        },
        /**
        * Arrivé bandit
        **/
        "didacticiel-bandit-texte-1" : {
            fr : "&laquo; Hum... Permets-moi d'en douter... &raquo;",
            en : "-"
        },
        "didacticiel-bandit-texte-2" : {
            fr : "Un homme à l'allure minable s'approche au loin, il semble vous en vouloir... Pourtant, vous ne lui avez rien fait...",
            en : "-"
        },
        "didacticiel-bandit-texte-3" : {
            fr : "&laquo; Tu vois ce bandit là-bas&nbsp;? Une vraie tête à claques, hein&nbsp;? Abats-le sauvagement et tu auras toute ma reconnaissance&nbsp;! &raquo;",
            en : "-"
        },

        /**
        * Combat contre le bandit
        **/
        "didacticiel-combat-texte-1" : {
            fr : "&laquo; Bien, voici un bandit. Il sent mauvais, mais il n'est pas bien méchant.",
            en : "-"
        },
        "didacticiel-combat-texte-2" : {
            fr : "Utilise les papiers en bas de l'écran pour l'attaquer. &raquo;",
            en : "-"
        },
        "didacticiel-combat-texte-3" : {
            fr : "&laquo; Attention&nbsp;! Si tu te défends, ce sera la fin de ton tour et le bandit t'attaquera&nbsp;!",
            en : "-"
        },
        "didacticiel-combat-texte-4" : {
            fr : "À toi de jouer maintenant&nbsp;! Bonne chance, jeune padawan&nbsp;! &raquo;",
            en : "-"
        },

        /**
        * Combat gagné
        **/
        "didacticiel-win-texte-1" : {
            fr : "Le bandit s'écroule et disparaît dans un souffle de poussière.",
            en : "-"
        },
        "didacticiel-win-texte-2" : {
            fr : "&laquo; Félicitations&nbsp;! Je suis fier de toi&nbsp;!",
            en : "-"
        },
        "didacticiel-win-texte-3" : {
            fr : "Tu as bien retenu toutes mes leçons et tu es maintenant prêt pour la grande aventure&nbsp;!",
            en : "-"
        },
        "didacticiel-win-texte-4" : {
            fr : "Ce ne sera pas tous les jours facile, mais n'aie crainte, tu peux t'en sortir&nbsp;!",
            en : "-"
        },
        "didacticiel-win-texte-5" : {
            fr : "Bon courage et à bientôt dans Samhain&nbsp;! &raquo;",
            en : "-"
        },

        /**
        * Combat perdu
        **/
        "didacticiel-lose-texte-1" : {
            fr : "Le bandit vous porte le coup de grâce et vous vous écroulez au sol.",
            en : "-"
        },
        "didacticiel-lose-texte-2" : {
            fr : "Votre vue faiblit peu à peu, mais vous semblez encore entendre murmurer dans votre oreille :",
            en : "-"
        },
        "didacticiel-lose-texte-3" : {
            fr : "&laquo; Eh bien&nbsp;! Tu as réussi à mourir à l'entraînement&nbsp;! Félicitations, ce n'était pas facile...",
            en : "-"
        },
        "didacticiel-lose-texte-4" : {
            fr : "Soit tu possèdes une grande patience, soit tu n'as vraiment rien compris au jeu. Espérons qu'il s'agisse de la première affirmation.",
            en : "-"
        },
        "didacticiel-lose-texte-5" : {
            fr : "Dans le cas contraire, reviens donc me voir. Tu n'es pas prêt à affronter le monde de Samhain&nbsp;! &raquo;",
            en : "-"
        },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});