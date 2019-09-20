'use strict';
define([
    "app/data/textes/stories/tuto/debut-textes",
    "app/data/textes/stories/tuto/nid-textes",
    "app/data/textes/stories/tuto/ferme-textes",
    "app/data/textes/stories/tuto/ville-textes",
    "app/data/textes/stories/tuto/crypte-textes",
], function(Debut, Nid, Ferme, Ville, Crypte){
	var data = {
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Debut.get(key);
            if (!text) text = Nid.get(key);
            if (!text) text = Ferme.get(key);
            if (!text) text = Ville.get(key);
            if (!text) text = Crypte.get(key);
            return text;
        }
    };
});