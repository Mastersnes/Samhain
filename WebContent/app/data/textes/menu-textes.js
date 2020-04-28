'use strict';
define([], function(){
	var data = {
	        /**
	        * Menu
	        **/
	        "bienvenue" : {
                fr : "Bienvenue",
                en : "Welcome"
            },
            "guest" : {
                fr : "Invité",
                en : "Guest"
            },
            "chargement" : {
                fr : "&hellip;Chargement&hellip;",
                en : "&hellip;Loading&hellip;"
            },
            "clickToContinue" : {
                fr : "- Cliquez pour continuer -",
                en : "- Click to continue -"
            },
            "newGame" : {
                fr : "Nouveau périple",
                en : "New periple"
            },
            "didacticiel" : {
                fr : "Didacticiel",
                en : "Tutorial"
            },
            "kongregate" : {
                fr : "Nos autres jeux sur:",
                en : "Our other games on:"
            },
            "eraseSave" : {
                fr : "<text>ATTENTION&nbsp;!</text><text>Ceci effacera votre partie enregistrée.</text>",
                en : "<text>WARNING!</text><text>this will erase your registered save.</text>"
            },
            "continue" : {
                fr : "Continuer",
                en : "Continue"
            },
            "continuerButton" : {
                fr : "Continuer",
                en : "Continue"
            },
            "cancelButton" : {
                fr : "Annuler",
                en : "Cancel"
            },
            "loadGame" : {
                fr : "Continuer",
                en : "Continue"
            },
            "options" : {
                fr : "Options",
                en : "Options"
            },
            "langage" : {
                fr : "Langage :",
                en : "Language :"
            },
            "fullscreen" : {
                fr : "Plein écran (appuyez sur echap pour quitter le plein écran)",
                en : "Fullscreen (press escape to exit full screen)"
            },
            "credits" : {
                fr : "Crédits",
                en : "Credits"
            },
            "illustration" : {
                fr : "Game artist",
                en : "Game artist"
            },
            "developpement" : {
                fr : "Développement",
                en : "Development"
            },
            "musique" : {
                fr : "Musiques",
                en : "Musics"
            },
            "textes" : {
                fr : "Textes",
                en : "Texts"
            },
            "mute" : {
                fr : "Mute",
                en : "Mute"
            },
            "copyright-licence" : {
                fr : "Copyright © Les Jeux de Bebel, 2020. Tous droits réservés.",
                en : "Copyright © Les Jeux de Bebel, 2020. All rights reserved."
            },

            "muteMusic" : {
                fr : "Couper la musique",
                en : "Mute musics"
            },
            "demuteMusic" : {
                fr : "Jouer la musique",
                en : "Play musics"
            },
            "muteSound" : {
                fr : "Couper les effets sonores",
                en : "Mute sonor effects"
            },
            "demuteSound" : {
                fr : "Jouer les effets sonores",
                en : "Play sonor effects"
            },
            "selectAuto" : {
                fr : "Sélection automatique des meilleurs équipements",
                en : "Best equipments are automaticaly selected"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});