'use strict';
define([], function(){
	var data = {
        "bandits-village-texte-1" : {
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