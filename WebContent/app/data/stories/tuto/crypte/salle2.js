'use strict';
define([], function() {
    var data = {
        /**
        * Salle 2 - Prison de l'experience
        **/
        "necroS2" : {
        	"textes" : ["necroS2-texte-1", "necroS2-texte-2", "necroS2-texte-3", "necroS2-texte-4", "necroS2-texte-5"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroS22"]}
        			]
        		}
        	]
        },
        "necroS2Retour" : {
        	"textes" : ["necroS2-texte-1", "necroS2-texte-2", "necroS2Retour-texte-1", "necroS2Retour-texte-2",
        		"necroS2Retour-texte-3"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroS22"]}
        			]
        		}
        	]
        },
        "necroS22" : {
        	"textes" : ["necroS22-texte-1", "necroS22-texte-2", "necroS22-texte-3", "necroS22-texte-4",
        		"necroS22-texte-5", "necroS22-texte-6"],
        	"actions" : [
        		{
        			"name" : "parler", "action" : [
        				{"key" : "go", "params" : ["necroS2Parle"]}
        			]
        		},
        		{
        			"name" : "approcher", "action" : [
        				{"key" : "go", "params" : ["necroS2Approche"]}
        			]
        		},
        		{
        			"name" : "sen-aller", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroS2Parle" : {
        	"textes" : ["necroS2Parle-texte-1", "necroS2Parle-texte-2", "necroS2Parle-texte-3",
        		"necroS2Parle-texte-4", "necroS2Parle-texte-5"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroS2Approche"]}
        			]
        		}
        	]
        },
        "necroS2Approche" : {
        	"textes" : ["necroS2Approche-texte-1", "necroS2Approche-texte-2", "necroS2Approche-texte-3",
        		"necroS2Approche-texte-4"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroS2Enfant"]}
        			]
        		}
        	]
        },
        "necroS2Enfant" : {
        	"textes" : ["necroS2Enfant-texte-1", "necroS2Enfant-texte-2", "necroS2Enfant-texte-3",
        		"necroS2Enfant-texte-4", "necroS2Enfant-texte-5"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "gain", "params" : ["S2Clean"]},
        				{"key" : "fight", "params" : [[
        				    "experience"
                        ], "necroS2Enfant2"]}
        			]
        		}
        	]
        },
        "necroS2Enfant2" : {
        	"textes" : ["necroS2Enfant2-texte-1", "necroS2Enfant2-texte-2", "necroS2Enfant2-texte-3",
        		"necroS2Enfant2-texte-4", "necroS2Enfant2-texte-5"],
        	"actions" : [
        		{
        			"name" : "fouiller", "action" : [
        				{"key" : "go", "params" : ["necroS2Fouille"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroS2Fouille" : {
        	"textes" : ["necroS2Fouille-texte-1", "necroS2Fouille-texte-2", "necroS2Fouille-texte-3",
        		"necroS2Fouille-texte-4"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "score", "params" : ["FoundFireball"]},
        				{"key" : "gain", "params" : ["bouleFeu"]},
        				{"key" : "upMG", "params" : [2]},
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroS2Clean" : {
        	"textes" : ["necroS2Clean-texte-1", "necroS2Clean-texte-2"],
        	"actions" : [
        		{
        			"name" : "retour",
        			"action" : [
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