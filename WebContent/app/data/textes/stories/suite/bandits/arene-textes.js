'use strict';
define([], function(){
	var data = {
        "bandits-arene-texte-1" : {
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