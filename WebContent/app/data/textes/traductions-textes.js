'use strict';
define([], function(){
	var data = {
	        /**
            * Traductions
            **/
            "french" : {
            	fr : "Français",
            	en : "French",
            	eo : "Franca"
            },
            "english" : {
            	fr : "Anglais",
            	en : "English",
            	eo : "Angla"
            },
            "esperanto" : {
            	fr : "Espéranto",
            	en : "Esperanto",
            	eo : "Esperanto"
            },

            "traduction-source" : {
            	fr : "Traduire de&nbsp;:",
            	en : "Translate from:",
            	eo : "Traduki de:"
            },
            "traduction-cible" : {
            	fr : "Vers&nbsp;:",
            	en : "To:",
            	eo : "Al:"
            },
            "traduction-submit" : {
            	fr : "Proposer ma traduction",
            	en : "Propose my translation",
            	eo : "Proponi mian tradukon"
            },
            "traduction-error" : {
            	fr : "Arf, quelque chose s'est mal passé&hellip;</br>Veuillez réessayer plus tard.",
            	en : "Arf, something went wrong&hellip;</br>Please, try again later.",
            	eo : "Oj, io malbona okazis&hellip;</br>Bonvolu provi denove poste."
            },
            "traduction-success" : {
            	fr : "Proposition envoyée!</br>Merci pour votre aide!",
            	en : "Proposal sent!</br>Thanks for your help!",
            	eo : "Propono sendita!</br>Dankegon pri via helpo!"
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