'use strict';
define([
    "app/data/textes/stories/suite/ville/porte-textes",
    "app/data/textes/stories/suite/ville/entree-textes",
    "app/data/textes/stories/suite/ville/coeur-textes",
    "app/data/textes/stories/suite/ville/ruelle-textes"
], function(Porte, Entree, Coeur, Ruelle){
	var data = {
	};

	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Porte.get(key);
            if (!text) text = Entree.get(key);
            if (!text) text = Coeur.get(key);
            if (!text) text = Ruelle.get(key);
            return text;
        }
    };
});