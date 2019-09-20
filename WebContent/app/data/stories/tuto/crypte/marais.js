'use strict';
define([], function() {
    var data = {
        /**
        * Marais
        **/
        "marais" : {
        	"textes" : ["marais-texte-1", "marais-texte-2", "marais-texte-3", "marais-texte-4"],
        	"actions" : [
        		{
        			"name" : "entrer", "action" : [
        			    {"key" : "go", "params" : ["necroPorte"]}
                    ]
        		},
        		{
        			"name" : "contourner", "action" : [
        			    {"key" : "go", "params" : ["necroTrou"]}
                    ]
        		}
        	]
        },
        "maraisRoi" : {
        	"textes" : ["marais-texte-1", "marais-texte-2", "marais-texte-3", "marais-texte-4", "maraisRoi-texte-1"],
        	"actions" : [
        		{
        			"name" : "entrer", "action" : [
        				{"key" : "gain", "params" : ["necroS1Clean"]},
        				{"key" : "gain", "params" : ["S1ViaS0"]},
        				{"key" : "gain", "params" : ["viaS1"]},
        				{"key" : "go", "params" : ["necroS1Roi"]}
        			]
        		},
        		{
        			"name" : "contourner", "action" : [
        			    {"key" : "go", "params" : ["necroTrou"]}
                    ]
        		}
        	]
        }
    };

    return {
        get : function(key) {
            return data[key];
        }
    };
});