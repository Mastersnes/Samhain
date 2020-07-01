'use strict';
define([], function(){
	var data = {
	        /**
	        * Credits
	        **/
	        "nous-credits" : {
            	fr : "Alicia et Steven Nesztler",
            	en : "Alicia et Steven Nesztler",
            	eo : "Alicia et Steven Nesztler"
            },
            "lili-credits" : {
            	fr : "Alicia V. Nesztler (AvnesZ)",
            	en : "Alicia V. Nesztler (AvnesZ)",
            	eo : "Alicia V. Nesztler (AvnesZ)"
            },
            "titi-credits" : {
            	fr : "Steven Nesztler",
            	en : "Steven Nesztler",
            	eo : "Steven Nesztler"
            },

            "studio-credits" : {
            	fr : "Un Jeu Signé",
            	en : "A Game By",
            	eo : "Ludo De"
            },
            "creation-credits" : {
            	fr : "Créé et Réalisé par",
            	en : "Created and Directed by",
            	eo : "Kreita kaj Realigita de"
            },

            "DA-credits" : {
            	fr : "Directeur Artistique",
            	en : "Art Director",
            	eo : "Arta Directoro"
            },
            "CA-credits" : {
            	fr : "Concept Artist",
            	en : "Concept Artist",
            	eo : "Koncepto Artisto"
            },
            "graphist-credits" : {
            	fr : "Lead Artist",
            	en : "Lead Artist",
            	eo : "Ĉefa Artisto"
            },
            "animation-credits" : {
            	fr : "Effets et Animations 2D",
            	en : "2D Effects and Animations",
            	eo : "2D Efektoj kaj Animacioj"
            },

            "gameDesign-credits" : {
            	fr : "Game Designer",
            	en : "Game Designer",
            	eo : "Ludo Dezajnisto"
            },
            "programming-credits" : {
            	fr : "Lead Programmer",
            	en : "Lead Programmer",
            	eo : "Ĉefa Programisto"
            },
            "levelDesign-credits" : {
            	fr : "Level Designer",
            	en : "Level Designer",
            	eo : "Nivela Dezajnisto"
            },

            "musiques-credits" : {
            	fr : "Musiques Originales",
            	en : "Original Musics",
            	eo : "Originalaj Muzikoj"
            },
            "sound-credits" : {
            	fr : "Sound Designer",
            	en : "Sound Designer",
            	eo : "Sono Dezajnisto"
            },

            "texte-credits" : {
            	fr : "Scénario Original",
            	en : "Original Scenario",
            	eo : "Originala Scenaro"
            },
            "correction-credits" : {
            	fr : "Correction du Texte",
            	en : "Text Correction",
            	eo : "Korektado de la Teksto"
            },
            "traduction-credits" : {
            	fr : "Traduction Anglaise",
            	en : "English Translation",
            	eo : "Angla Traduko"
            },
            "traduction-eo-credits" : {
            	fr : "Traduction Esperanto",
            	en : "Esperanto Translation",
            	eo : "Esperanta Traduko"
            },

            "community-credits" : {
            	fr : "Community Manager",
            	en : "Community Manager",
            	eo : "Komunumo Administristo"
            },
            "tester-credits" : {
            	fr : "Directeur des Tests",
            	en : "Director of Testing",
            	eo : "Direktoro de la Testoj"
            },
            "beta-credits" : {
            	fr : "Bêta-Testeurs",
            	en : "Beta Testers",
            	eo : "Beta Testistoj"
            },

            "merci-credits" : {
            	fr : "Un Grand Merci",
            	en : "Special Thanks",
            	eo : "Dankegon"
            },
            "suiveurs-thx-credits" : {
            	fr : "À nos suiveurs qui nous soutiennent chaque jour sur les différents réseaux.",
            	en : "To our followers who support us every day on the different networks.",
            	eo : "Al niaj abonantoj kiuj ĉiutage subtenas nin sur la multaj retejoj. "
            },
            "beta-thx-credits" : {
            	fr : "À nos bêta-testeurs qui améliorent sans cesse la qualité de nos jeux.",
            	en : "To our beta testers who constantly improve the quality of our games.",
            	eo : "Al niaj beta testistoj kiuj plibonigas senĉese la kvalito de niaj ludoj."
            },
            "animalux-thx-credits" : {
            	fr : "À nos adorables compagnons à poils et à plumes qui nous apportent joie, amour et croquettes au quotidien&nbsp;!",
            	en : "To our adorable furry and feathered companions who bring us joy, love and kibbles every day!",
            	eo : "Al niaj adorindaj vilaj kaj plumhavaj kunuloj kiuj donacas nin ĝojo, amo kaj krokedoj ĉiutage!"
            }
	};
	
	return {
        name : function() {
            return "Credits.js";
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