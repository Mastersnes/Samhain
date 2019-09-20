'use strict';
define([
    "app/data/textes/items/armes-textes",
    "app/data/textes/items/armures-textes",
    "app/data/textes/items/consos-textes",
    "app/data/textes/items/magies-textes",
    "app/data/textes/items/clefs-textes",
], function(Armes, Armures, Consos, Magies, Clefs){
	var data = {
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Armes.get(key);
            if (!text) text = Armures.get(key);
            if (!text) text = Consos.get(key);
            if (!text) text = Magies.get(key);
            if (!text) text = Clefs.get(key);
            return text;
        }
    };
});