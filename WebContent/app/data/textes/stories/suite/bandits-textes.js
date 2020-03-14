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
        }
    };
});