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
                fr : "Esperanto",
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