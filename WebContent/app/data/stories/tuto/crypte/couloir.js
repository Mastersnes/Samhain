'use strict';
define([], function() {
    var data = {
        /**
        * Couloir avec les deux petites salles sur les cotés
        **/
        "necroCouloir" : {
        	"textes" : ["necroCouloir-texte-1", "necroCouloir-texte-2", "necroCouloir-texte-3", "necroCouloir-texte-4"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["S4Clean"]}],
        			"name" : "go-left", "action" : [
        				{"key" : "hasItem", "params" : [["torcheAllumeG"], "necroS4", "necroSalleFerme"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["S5Clean"]}],
        			"name" : "go-right", "action" : [
        				{"key" : "hasItem", "params" : [["torcheAllumeD"], "necroS5", "necroSalleFerme"]}
        			]
        		},
        		{
        			"name" : "go-face", "action" : [
        				{"key" : "go", "params" : ["necroSB"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroSalleFerme" : {
        	"textes" : ["necroSalleFerme-texte-1", "necroSalleFerme-texte-2", "necroSalleFerme-texte-3"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroCouloir"]}
        			]
        		}
        	]
        },
        "necroS4" : {
        	"textes" : ["necroS4-texte-1", "necroS4-texte-2", "necroS4-texte-3", "necroS4-texte-4"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "gain", "params" : ["S4Clean"]},
        				{"key" : "gain", "params" : ["potionSante"]},
        				{"key" : "score", "params" : ["SaveChild", 1]},
        				{"key" : "go", "params" : ["necroCouloir"]}
        			]
        		}
        	]
        },
        "necroS5" : {
        	"textes" : ["necroS5-texte-1", "necroS5-texte-2", "necroS5-texte-3"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "gain", "params" : ["S5Clean"]},
        				{"key" : "gain", "params" : ["soin"]},
        				{"key" : "upMG", "params" : [2]},
        				{"key" : "score", "params" : ["LearnHeal", 1]},
        				{"key" : "go", "params" : ["necroCouloir"]}
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