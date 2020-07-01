'use strict';
define([
    "app/data/textes/stories/tuto/nid/entree-textes",
    "app/data/textes/stories/tuto/nid/gauche-textes",
    "app/data/textes/stories/tuto/nid/droite-textes",
], function(Entree, Gauche, Droite){
	var data = {
	};

	return {
        name : function() {
            return "Tuto Nid.js";
        },
        children : function() {
            return [Entree, Gauche, Droite];
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