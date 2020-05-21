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
                fr : "Proposer votre traduction",
                en : "Propose your translation",
                eo : ""
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});