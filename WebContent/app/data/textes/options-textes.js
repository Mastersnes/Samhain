'use strict';
define([], function(){
	var data = {
	        /**
	        * Options
	        **/
	        "sound" : {
                fr : "SON",
                en : "SOUND"
            },
            "music" : {
                fr : "MUSIQUE",
                en : "MUSIC"
            },
            "language" : {
                fr : "LANGUE",
                en : "LANGUAGE"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});