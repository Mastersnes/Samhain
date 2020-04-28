'use strict';
define([], function(){
	var data = {
	        /**
	        * Credits
	        **/
	        "nous-credits" : {
                fr : "Alicia et Steven Nesztler",
                en : "Alicia et Steven Nesztler"
            },
	        "lili-credits" : {
                fr : "Alicia V. Nesztler (AVNes)",
                en : "Alicia V. Nesztler (AVNes)"
            },
	        "titi-credits" : {
                fr : "Steven Nesztler",
                en : "Steven Nesztler"
            },

	        "studio-credits" : {
                fr : "Un Jeu Signé",
                en : "A Game From"
            },
	        "creation-credits" : {
                fr : "Créé et Réalisé par",
                en : "Created and directed by"
            },

	        "DA-credits" : {
                fr : "Directeur Artistique",
                en : "Art Director"
            },
	        "CA-credits" : {
                fr : "Concept Artist",
                en : "Concept Artist"
            },
	        "graphist-credits" : {
                fr : "Lead Artist",
                en : "Lead Artist"
            },
	        "animation-credits" : {
                fr : "Effets et Animations 2D",
                en : "Effects and Animations 2D"
            },

	        "gameDesign-credits" : {
                fr : "Game Designer",
                en : "Game Designer"
            },
	        "programming-credits" : {
                fr : "Lead Programmer",
                en : "Lead Programmer"
            },
	        "levelDesign-credits" : {
                fr : "Level Designer",
                en : "Level Designer"
            },

	        "musiques-credits" : {
                fr : "Musiques Originales",
                en : "Original Music"
            },
	        "sound-credits" : {
                fr : "Sound Designer",
                en : "Sound Designer"
            },

	        "texte-credits" : {
                fr : "Scénario Original",
                en : "Original Scenario"
            },
	        "correction-credits" : {
                fr : "Correction du Texte",
                en : "Text Correction"
            },
	        "traduction-credits" : {
                fr : "Traduction Anglaise",
                en : "English translation"
            },

	        "community-credits" : {
                fr : "Community Manager",
                en : "Community Manager"
            },
	        "tester-credits" : {
                fr : "Directeur des Tests",
                en : "Test Director"
            },
	        "beta-credits" : {
                fr : "Bêta-Testeurs",
                en : "Beta-Testers"
            },

	        "merci-credits" : {
                fr : "Un Grand Merci",
                en : "Special Thanks"
            },
	        "suiveurs-thx-credits" : {
                fr : "À nos suiveurs qui nous soutiennent chaque jour sur les différents réseaux.",
                en : "To our followers who support us every day on the different networks."
            },
	        "beta-thx-credits" : {
                fr : "Aux bêta-testeurs qui améliorent sans cesse la qualité de nos jeux.",
                en : "To the beta testers who are constantly improving the quality of our games."
            },
	        "animalux-thx-credits" : {
                fr : "À nos adorables compagnons à poils et à plumes qui nous apportent joie, amour et croquettes au quotidien&nbsp;!",
                en : "To our adorable furry and feathered companions who bring us joy, love and croquettes every day!"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});