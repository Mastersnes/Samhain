'use strict';
define([], function(){
	var data = {
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
            "jeanluc-credits" : {
            	fr : "Jean-Luc Thibias",
            	en : "Jean-Luc Thibias",
            	eo : "Jean-Luc Thibias"
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
            	eo : "Arta Direktoro"
            },
            "CA-credits" : {
            	fr : "Artiste Concepteur",
            	en : "Concept Artist",
            	eo : "Koncepto Artisto"
            },
            "graphist-credits" : {
            	fr : "Artiste en Chef",
            	en : "Lead Artist",
            	eo : "Ĉefartisto"
            },
            "animation-credits" : {
            	fr : "Effets et Animations 2D",
            	en : "2D Effects and Animations",
            	eo : "2D Efektoj kaj Animacioj"
            },

            "gameDesign-credits" : {
            	fr : "Conception Générale",
            	en : "Game Designer",
            	eo : "Ludodezajnisto"
            },
            "programming-credits" : {
            	fr : "Programmeur en Chef",
            	en : "Lead Programmer",
            	eo : "Ĉefprogramisto"
            },
            "levelDesign-credits" : {
            	fr : "Concepteur des Niveaux",
            	en : "Level Designer",
            	eo : "Niveldezajnisto"
            },

            "musiques-credits" : {
            	fr : "Musiques Originales",
            	en : "Original Musics",
            	eo : "Originalaj Muzikoj"
            },
            "sound-credits" : {
            	fr : "Effets Sonores",
            	en : "Sound Designer",
            	eo : "Sonodezajnisto"
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
            "correction-eo-credits" : {
            	fr : "Correction Esperanto",
            	en : "Esperanto Correction",
            	eo : "Esperanta Korektado"
            },

            "community-credits" : {
            	fr : "Chargé de Communication",
            	en : "Community Manager",
            	eo : "Administristo pri Komunikado"

            },
            "tester-credits" : {
            	fr : "Directeur des Tests",
            	en : "Director of Testing",
            	eo : "Direktoro de la Testoj"
            },
            "beta-credits" : {
            	fr : "Bêta-Testeurs",
            	en : "Beta Testers",
            	eo : "<i>Beta</i> Testistoj"
            },

            "merci-credits" : {
            	fr : "Un Grand Merci",
            	en : "Special Thanks",
            	eo : "Dankegon"
            },
            "suiveurs-thx-credits" : {
            	fr : "À nos suiveurs qui nous soutiennent chaque jour sur les différents réseaux.",
            	en : "To our followers who support us every day on the different networks.",
            	eo : "Al niaj abonantoj, kiuj ĉiutage subtenas nin sur la multaj retejoj."
            },
            "beta-thx-credits" : {
            	fr : "À nos bêta-testeurs qui améliorent sans cesse la qualité de nos jeux.",
            	en : "To our beta testers who constantly improve the quality of our games.",
            	eo : "Al niaj <i>beta</i> testistoj, kiuj plibonigas senĉese la kvaliton de niaj ludoj."
            },
            "animalux-thx-credits" : {
            	fr : "À nos adorables compagnons à poils et à plumes qui nous apportent joie et amour au quotidien&nbsp;!",
            	en : "To our adorable furry and feathered companions who bring us joy and love every day!",
            	eo : "Al niaj adorindaj vilaj kaj plumhavaj kunuloj, kiuj donacas al ni ĝojon kaj amon ĉiutage!"
            },
            "eo-thx-credits" : {
                fr : "Un remerciement spécial à l'association Esperanto France Est, à Jean-Luc Thibias et à Liliane Bersweiler pour leur aide et leur soutien pour la version en Esperanto &nbsp;!",
                en : "Special thanks to the Esperanto France Est Association, Jean-Luc Thibias and Liliane Bersweiler for their help and support for the Esperanto version!",
                eo : "Speciale koran dankon al la asocio Esperanto France Est, al Jean-Luc Thibias kaj al Liliane Bersweiler pro ilia helpo kaj ilia subteno pri la versio en Esperanto!"
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