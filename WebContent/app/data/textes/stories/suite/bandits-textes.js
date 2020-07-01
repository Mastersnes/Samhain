'use strict';
define([
    "app/data/textes/stories/suite/bandits/porte-textes",
    "app/data/textes/stories/suite/bandits/village-textes",
    "app/data/textes/stories/suite/bandits/arene-textes"
], function(Porte, Village, Arene){
	var data = {
	};

	return {
	    name : function() {
            return "Suite Bandits.js";
        },
        children : function() {
            return [Porte, Village, Arene];
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