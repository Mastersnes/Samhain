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
        get : function(key) {
            var text = data[key];
            if (!text) text = Marais.get(key);
            if (!text) text = Salle1.get(key);
            if (!text) text = Salle2.get(key);
            if (!text) text = Salle3.get(key);
            if (!text) text = GrandeSalle.get(key);
            if (!text) text = Couloir.get(key);
            if (!text) text = Boss.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Marais.listAll());
            keys = keys.concat(Salle1.listAll());
            keys = keys.concat(Salle2.listAll());
            keys = keys.concat(Salle3.listAll());
            keys = keys.concat(GrandeSalle.listAll());
            keys = keys.concat(Couloir.listAll());
            keys = keys.concat(Boss.listAll());
            return keys;
        },
    };
});