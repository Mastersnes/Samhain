'use strict';
define([], function(){
	var data = {
        "ville-ruelle-texte-1" : {
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