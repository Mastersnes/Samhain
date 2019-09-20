'use strict';
define([], function() {
    var data = {
        /**
        * Salle 1 - Entree
        **/
        "necroPorte" : {
        	"textes" : ["necroPorte-texte-1", "necroPorte-texte-2"],
        	"actions" : [
        		{
        			"name" : "contourner", "action" : [
        			    {"key" : "go", "params" : ["necroTrou"]}
                    ]
        		}
        	]
        },
        "necroS1Roi" : {
        	"textes" : ["necroS1Roi-texte-1", "necroS1Roi-texte-2", "necroS1Roi-texte-3"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["hadClef"]}],
        			"name" : "fouiller-piece", "action" : [
        				{"key" : "gain", "params" : ["clefS2"]},
        				{"key" : "gain", "params" : ["hadClef"]},
        				{"key" : "go", "params" : ["necroS1Fouille"]}
        			]
        		},
        		{
        			"name" : "continue", "action" : [
        				{"key" : "perte", "params" : ["S1ViaS0"]},
        				{"key" : "go", "params" : ["necroGSRoiFight"]}
                    ]
        		}
        	]
        },
        "necroS1" : {
        	"textes" : ["necroS1-texte-1", "necroS1-texte-2"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["hadClef"]}],
        			"name" : "fouiller-piece", "action" : [
        				{"key" : "gain", "params" : ["clefS2"]},
        				{"key" : "gain", "params" : ["hadClef"]},
        				{"key" : "go", "params" : ["necroS1Fouille"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroS1Fight" : {
        	"textes" : ["necroS1-texte-1", "necroS1Fight-texte-1"],
        	"actions" : [
        		{
        			"name" : "combattre",
        			"action" : [
        				{"key" : "gain", "params" : ["necroS1Clean"]},
        				{"key" : "fight", "params" : [[
        				    "goule", "goule"
                        ], "necroS1Fight2"]},
        			]
        		}
        	]
        },
        "necroS1Fight2" : {
        	"textes" : ["necroS1Fight2-texte-1", "necroS1Fight2-texte-2", "necroS1Fight2-texte-3"],
        	"actions" : [
        		{
        			"name" : "fouiller-piece", "action" : [
        				{"key" : "gain", "params" : ["clefS2"]},
        				{"key" : "gain", "params" : ["hadClef"]},
        				{"key" : "go", "params" : ["necroS1Fouille"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroS1Fouille" : {
        	"textes" : ["necroS1Fouille-texte-1", "necroS1Fouille-texte-2", "necroS1Fouille-texte-3",
        	    "necroS1Fouille-texte-4"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["S1ViaS0"]}],
        			"name" : "continue", "action" : [
        				{"key" : "perte", "params" : ["S1ViaS0"]},
        				{"key" : "go", "params" : ["necroGSRoiFight"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["S1ViaS0"]}],
        			"name" : "retour", "action" : [
        			    {"key" : "go", "params" : ["necroGS"]}
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