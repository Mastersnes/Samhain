'use strict';
define([], function(){
	var data = {
        "ville-porte-texte-1" : {
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