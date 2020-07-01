'use strict';
define([
    "app/data/textes/stories/didacticiel/debut-textes",
    "app/data/textes/stories/didacticiel/main-textes",
    "app/data/textes/stories/didacticiel/combat-textes",
], function(Debut, Main, Combat){
	var data = {
	};
	
	return {
        name : function() {
            return "Didacticiel.js";
        },
        children : function() {
            return [Debut, Main, Combat];
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