'use strict';
define([
    "app/data/textes/stories/suite/bandits/porte-textes",
    "app/data/textes/stories/suite/bandits/village-textes",
    "app/data/textes/stories/suite/bandits/arene-textes"
], function(Porte, Village, Arene){
	var data = {
	};

	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Porte.get(key);
            if (!text) text = Village.get(key);
            if (!text) text = Arene.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Porte.listAll());
            keys = keys.concat(Village.listAll());
            keys = keys.concat(Arene.listAll());
            return keys;
        },
    };
});