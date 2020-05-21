'use strict';
define([
    "app/data/textes/stories/suite/ville-textes",
    "app/data/textes/stories/suite/bandits-textes"
], function(Ville, Bandits){
	var data = {
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Ville.get(key);
            if (!text) text = Bandits.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Ville.listAll());
            keys = keys.concat(Bandits.listAll());
            return keys;
        },
    };
});