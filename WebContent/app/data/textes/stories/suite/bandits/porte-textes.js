'use strict';
define([], function(){
	var data = {
        "bandits-porte-texte-1" : {
            fr : "???",
            en : "???"
        }
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});