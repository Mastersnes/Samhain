'use strict';
define([
    "app/data/textes/stories/tuto/crypte/marais-textes",
    "app/data/textes/stories/tuto/crypte/salle1-textes",
    "app/data/textes/stories/tuto/crypte/salle2-textes",
    "app/data/textes/stories/tuto/crypte/salle3-textes",
    "app/data/textes/stories/tuto/crypte/grandeSalle-textes",
    "app/data/textes/stories/tuto/crypte/couloir-textes",
    "app/data/textes/stories/tuto/crypte/boss-textes",
], function(Marais, Salle1, Salle2, Salle3, GrandeSalle, Couloir, Boss){
	var data = {
	};

	return {
        name : function() {
            return "Tuto Crypte.js";
        },
        children : function() {
            return [Marais, Salle1, Salle2, Salle3, GrandeSalle, Couloir, Boss];
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