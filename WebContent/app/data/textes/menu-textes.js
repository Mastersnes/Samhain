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
                fr : "...Chargement...",
                en : "...Loading..."
            },
            "clickToContinue" : {
                fr : "- Cliquez pour continuer -",
                en : "- Click to continue -"
            },
            "newGame" : {
                fr : "Nouveau périple",
                en : "New periple"
            },
            "kongregate" : {
                fr : "Nos autres jeux sur:",
                en : "Our other games on:"
            },
            "eraseSave" : {
                fr : "Attention, ceci effacera votre partie enregistrée!",
                en : "Warning, this will erase your registered save!"
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
                fr : "Plein écran (appuyez sur echap pour revenir)",
                en : "Fullscreen (press escape for return)"
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
                fr : "Copyright © Les Jeux de Bebel, 2018. Tous droits réservés.",
                en : "Copyright © Les Jeux de Bebel, 2018. All rights reserved."
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
                fr : "Selectionner automatiquement les meilleurs equipements",
                en : "Select automaticaly the best equipments"
            },
            "deselectAuto" : {
                fr : "Ne pas selectionner automatiquement les meilleurs equipements",
                en : "Do not select automaticaly the best equipments"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});