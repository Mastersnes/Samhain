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
        name : function() {
            return "Quetes.js";
        },
        children : function() {
            return [Quete1];
        },
        get : function(key) {
            var text = data[key];
            var children = this.children();
            for (var i in children) {
                if (!text) text = children[i].get(key);
                else continue;
            }
            return text;
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});