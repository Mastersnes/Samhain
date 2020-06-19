'use strict';
define([
    "app/data/textes/stories/quetes/quete1-textes"
], function(Quete1){
	var data = {
	    /**
        * Quetes
        **/
        "quetes-nothing" : {
            fr : "Le panneau est complètement vide&hellip;",
            en : ""
        },
        "recompense-quete" : {
            fr : "Récompense :",
            en : "Reward:"
        },
        "difficulte-quete" : {
            fr : "Difficulté :",
            en : "Difficulty:"
        },

        /**
        * Difficultés
        **/
        "difficulte-debutant" : {
            fr : "Débutant",
            en : "Beginner"
        }
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Quete1.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Quete1.listAll());
            return keys;
        },
    };
});