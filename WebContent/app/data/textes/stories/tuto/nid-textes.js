'use strict';
define([
    "app/data/textes/stories/tuto/nid/entree-textes",
    "app/data/textes/stories/tuto/nid/gauche-textes",
    "app/data/textes/stories/tuto/nid/droite-textes",
], function(Entree, Gauche, Droite){
	var data = {
	};

	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Entree.get(key);
            if (!text) text = Gauche.get(key);
            if (!text) text = Droite.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Entree.listAll());
            keys = keys.concat(Gauche.listAll());
            keys = keys.concat(Droite.listAll());
            return keys;
        },
    };
});