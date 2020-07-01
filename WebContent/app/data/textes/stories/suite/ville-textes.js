'use strict';
define([
    "app/data/textes/stories/suite/ville/porte-textes",
    "app/data/textes/stories/suite/ville/entree-textes",
    "app/data/textes/stories/suite/ville/garde-textes",
    "app/data/textes/stories/suite/ville/ruelle-textes",
    "app/data/textes/stories/suite/ville/castagne-textes"
], function(Porte, Entree, Garde, Ruelle, Castagne){
	var data = {
	};

	return {
	    name : function() {
            return "Suite ville.js";
        },
        children : function() {
            return [Porte, Entree, Garde, Ruelle, Castagne];
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