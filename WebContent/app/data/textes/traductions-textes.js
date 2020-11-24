'use strict';
define([], function(){
	var data = {
	        /**
            * Traductions
            **/
            "french" : {
            	fr : "Français",
            	en : "French",
            	eo : ""
            },
            "english" : {
            	fr : "Anglais",
            	en : "English",
            	eo : ""
            },
            "esperanto" : {
            	fr : "Espéranto",
            	en : "Esperanto",
            	eo : "Esperanto"
            },

            "traduction-source" : {
            	fr : "Traduire de :",
            	en : "Translate from :",
            	eo : ""
            },
            "traduction-cible" : {
            	fr : "Vers :",
            	en : "To :",
            	eo : ""
            },
            "traduction-submit" : {
            	fr : "Proposer ma traduction",
            	en : "Propose my translation",
            	eo : ""
            },
            "traduction-error" : {
            	fr : "Arf, quelque chose s'est mal passé&hellip;</br>Veuillez réessayer plus tard.",
            	en : "Arf, something went wrong&hellip;</br>Please, try again later.",
            	eo : ""
            },
            "traduction-success" : {
            	fr : "Proposition envoyée!</br>Merci pour votre aide!",
            	en : "Proposal sent!</br>Thanks for your help!",
            	eo : ""
            }
	};
	
	return {
        name : function() {
            return "Traductions.js";
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