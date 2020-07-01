'use strict';
define([
    "app/data/textes/stories/suite/ville-textes",
    "app/data/textes/stories/suite/bandits-textes"
], function(Ville, Bandits){
	var data = {
	};
	
	return {
	    name : function() {
            return "Suite.js";
        },
        children : function() {
            return [Ville, Bandits];
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