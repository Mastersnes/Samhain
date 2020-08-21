'use strict';
define([], function(){
	var data = {
	        /**
            * Options
            **/
            "sound" : {
            	fr : "SON",
            	en : "SOUND",
            	eo : "SONO"
            },
            "music" : {
            	fr : "MUSIQUE",
            	en : "MUSIC",
            	eo : "MUZIKO"
            },
            "language" : {
            	fr : "LANGUE",
            	en : "LANGUAGE",
            	eo : "LINGVO"
            }
	};
	
	return {
        name : function() {
            return "Options.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});