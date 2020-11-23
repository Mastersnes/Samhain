'use strict';
define([], function(){
	var data = {
	        /**
	        * Menu
	        **/
            "bienvenue" : {
            	fr : "Bienvenue",
            	en : "Welcome",
            	eo : "Bonvenon"
            },
            "guest" : {
            	fr : "Invité",
            	en : "Guest",
            	eo : "Gasto"
            },
            "chargement" : {
            	fr : "&hellip;Chargement&hellip;",
            	en : "&hellip;Loading&hellip;",
            	eo : "&hellip;Ŝarĝado&hellip;"
            },
            "clickToContinue" : {
            	fr : "- Cliquez pour continuer -",
            	en : "- Click to continue -",
            	eo : "- Kliku por daŭri -",
            },
            "newGame" : {
            	fr : "Nouveau périple",
            	en : "New journey",
            	eo : "Nova periplo"
            },
            "didacticiel" : {
            	fr : "Tutoriel",
            	en : "Tutorial",
            	eo : "Lernilo"
            },
            "kongregate" : {
            	fr : "Nos autres jeux&nbsp;:",
            	en : "Our other games:",
            	eo : "Niaj aliaj ludoj:"
            },
            "eraseSave" : {
            	fr : "<text>ATTENTION&nbsp;!</text><text>Ceci effacera votre partie enregistrée.</text>",
            	en : "<text>WARNING!</text><text>This will erase your current save.</text>",
            	eo : "<text>Atenton!</text><text>Ĉi tio forviŝos vian registran ludon.</text>"
            },
            "continue" : {
            	fr : "Continuer",
            	en : "Continue",
            	eo : "Daŭri"
            },
            "continuerButton" : {
            	fr : "Continuer",
            	en : "Continue",
            	eo : "Daŭri"
            },
            "cancelButton" : {
            	fr : "Annuler",
            	en : "Cancel",
            	eo : "Nuligi"
            },
            "loadGame" : {
            	fr : "Continuer",
            	en : "Continue",
            	eo : "Daŭri"
            },
            "options" : {
            	fr : "Options",
            	en : "Options",
            	eo : "Opcioj"
            },
            "traductions" : {
            	fr : "Traductions",
            	en : "Translations",
            	eo : "Tradukoj"
            },
            "langage" : {
            	fr : "Langage&nbsp;:",
            	en : "Language:",
            	eo : "Lingvo:"
            },
            "fullscreen" : {
            	fr : "Plein écran (appuyez sur Echap pour quitter le plein écran)",
            	en : "Fullscreen (press Escape to exit fullscreen mode)",
            	eo : "Tutekrano (premu sur Esk por forlasi la tutekrano)"
            },
            "credits" : {
            	fr : "Crédits",
            	en : "Cred²its",
            	eo : "Kreditoj"
            },
            "copyright-licence" : {
            	fr : "Copyright © Les Jeux de Bebel, 2020. Tous droits réservés.",
            	en : "Copyright © Les Jeux de Bebel, 2020. All rights reserved.",
            	eo : "Aŭtorrajto © Les Jeux de Bebel, 2020. Ĉiuj rajtoj rezervitaj."
            },
            "selectAuto" : {
            	fr : "Sélection automatique des meilleurs équipements",
            	en : "Best equipments will be automatically selected",
            	eo : "La pli bonaj ekipaĵoj estas aŭtomate elektontaj"
            },
            "cibleUnique" : {
            	fr : "Ciblage automatique des ennemis isolés",
            	en : "Automatic targeting of isolated enemies",
            	eo : "Celi aŭtomate la izolaj malamikoj"
            }
	};
	
	return {
        name : function() {
            return "Menu.js";
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