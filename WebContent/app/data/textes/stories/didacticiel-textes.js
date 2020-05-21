'use strict';
define([
    "app/data/textes/stories/didacticiel/debut-textes",
    "app/data/textes/stories/didacticiel/main-textes",
    "app/data/textes/stories/didacticiel/combat-textes",
], function(Debut, Main, Combat){
	var data = {
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Debut.get(key);
            if (!text) text = Main.get(key);
            if (!text) text = Combat.get(key);
            return text;
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Debut.listAll());
            keys = keys.concat(Main.listAll());
            keys = keys.concat(Combat.listAll());
            return keys;
        },
    };
});