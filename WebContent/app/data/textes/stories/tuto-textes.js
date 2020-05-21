'use strict';
define([
    "app/data/textes/stories/tuto/debut-textes",
    "app/data/textes/stories/tuto/nid-textes",
    "app/data/textes/stories/tuto/ferme-textes",
    "app/data/textes/stories/tuto/village-textes",
    "app/data/textes/stories/tuto/echoppe-textes",
    "app/data/textes/stories/tuto/crypte-textes",
], function(Debut, Nid, Ferme, Village, Echoppe, Crypte){
	var data = {
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Debut.get(key);
            if (!text) text = Nid.get(key);
            if (!text) text = Ferme.get(key);
            if (!text) text = Village.get(key);
            if (!text) text = Echoppe.get(key);
            if (!text) text = Crypte.get(key);
            return text;
        },

        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Debut.listAll());
            keys = keys.concat(Nid.listAll());
            keys = keys.concat(Ferme.listAll());
            keys = keys.concat(Village.listAll());
            keys = keys.concat(Echoppe.listAll());
            keys = keys.concat(Crypte.listAll());
            return keys;
        },
    };
});