'use strict';
define([
    "app/data/textes/stories/suite/ville/porte-textes",
    "app/data/textes/stories/suite/ville/entree-textes",
    "app/data/textes/stories/suite/ville/garde-textes",
    "app/data/textes/stories/suite/ville/ruelle-textes"
], function(Porte, Entree, Garde, Ruelle){
	var data = {
	};

	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Porte.get(key);
            if (!text) text = Entree.get(key);
            if (!text) text = Garde.get(key);
            if (!text) text = Ruelle.get(key);
            return text;
        }
    };
});