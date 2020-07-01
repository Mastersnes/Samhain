'use strict';
define([], function(){
	var data = {
	    /**
	    * Fin choix
	    **/
        "didacticiel-finchoix-texte-1" : {
            fr : "&laquo;&nbsp;Bien, tu maîtrises à présent les subtilités du choix&nbsp;!",
            en : "-"
        },
        "didacticiel-finchoix-texte-2" : {
            fr : "Cet apprentissage te sera bien utile pour faire face aux périples qui t'attendent&nbsp;!",
            en : "-"
        },
        "didacticiel-finchoix-texte-3" : {
            fr : "Mais&hellip; seras-tu capable de garder tout ton sang froid lorsque l'action apparaîtra devant toi&nbsp;?&nbsp;&raquo;",
            en : "-"
        },
        /**
        * Arrivé bandit
        **/
        "didacticiel-bandit-texte-1" : {
            fr : "&laquo;&nbsp;Hum&hellip; Permets-moi d'en douter&hellip;&nbsp;&raquo;",
            en : "-"
        },
        "didacticiel-bandit-texte-2" : {
            fr : "Un homme à l'allure minable s'approche au loin, il semble vous en vouloir&hellip; Pourtant, vous ne lui avez rien fait&hellip;",
            en : "-"
        },
        "didacticiel-bandit-texte-3" : {
            fr : "&laquo;&nbsp;Tu vois ce bandit là-bas&nbsp;? Une vraie tête à claques, hein&nbsp;? Abats-le sauvagement et tu auras toute ma reconnaissance&nbsp;!&nbsp;&raquo;",
            en : "-"
        },

        /**
        * Combat contre le bandit
        **/
        "didacticiel-combat-texte-1" : {
            fr : "&laquo;&nbsp;Bien, voici un bandit. Il sent mauvais, mais il n'est pas bien méchant.",
            en : "-"
        },
        "didacticiel-combat-texte-2" : {
            fr : "Utilise les papiers en bas de l'écran pour l'attaquer.&nbsp;&raquo;",
            en : "-"
        },
        "didacticiel-combat-texte-3" : {
            fr : "&laquo;&nbsp;Attention&nbsp;! Si tu te défends, ce sera la fin de ton tour et le bandit t'attaquera&nbsp;!",
            en : "-"
        },
        "didacticiel-combat-texte-4" : {
            fr : "À toi de jouer maintenant&nbsp;! Bonne chance, jeune padawan&nbsp;!&nbsp;&raquo;",
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
            fr : "&laquo;&nbsp;Félicitations&nbsp;! Je suis fier de toi&nbsp;!",
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
            fr : "Bon courage et à bientôt dans Samhain&nbsp;!&nbsp;&raquo;",
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
            fr : "&laquo;&nbsp;Eh bien&nbsp;! Tu as réussi à mourir à l'entraînement&nbsp;! Félicitations, ce n'était pas facile&hellip;",
            en : "-"
        },
        "didacticiel-lose-texte-4" : {
            fr : "Soit tu possèdes une grande patience, soit tu n'as vraiment rien compris au jeu. Espérons qu'il s'agisse de la première affirmation.",
            en : "-"
        },
        "didacticiel-lose-texte-5" : {
            fr : "Dans le cas contraire, reviens donc me voir. Tu n'es pas prêt à affronter le monde de Samhain&nbsp;!&nbsp;&raquo;",
            en : "-"
        },
	};
	
	return {
        name : function() {
            return "Didacticiel Combat.js";
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