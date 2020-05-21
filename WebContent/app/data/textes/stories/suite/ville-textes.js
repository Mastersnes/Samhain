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
        get : function(key) {
            var text = data[key];
            if (!text) text = Porte.get(key);
            if (!text) text = Entree.get(key);
            if (!text) text = Garde.get(key);
            if (!text) text = Ruelle.get(key);
            if (!text) text = Castagne.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Porte.listAll());
            keys = keys.concat(Entree.listAll());
            keys = keys.concat(Garde.listAll());
            keys = keys.concat(Ruelle.listAll());
            keys = keys.concat(Castagne.listAll());
            return keys;
        },
    };
});