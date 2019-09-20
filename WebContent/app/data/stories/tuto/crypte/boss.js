'use strict';
define([], function() {
    var data = {
        /**
        * Boss du tuto - Necromancien
        **/
        "necroSB" : {
        	"textes" : ["necroSB-texte-1", "necroSB-texte-2", "necroSB-texte-3"],
        	"actions" : [
        		{
        			"name" : "tousser", "action" : [
        				{"key" : "go", "params" : ["bossTousse"]}
        			]
        		},
        		{
        			"name" : "avancer", "action" : [
        				{"key" : "go", "params" : ["bossAvance"]}
        			]
        		},
        		{
        			"name" : "parler", "action" : [
        				{"key" : "go", "params" : ["bossParle"]}
        			]
        		}
        	]
        },
        "bossTousse" : {
        	"textes" : ["bossTousse-texte-1", "bossTousse-texte-2", "bossTousse-texte-3"],
        	"actions" : [
        		{
        			"name" : "avancer", "action" : [
        				{"key" : "go", "params" : ["bossAvance"]}
        			]
        		},
        		{
        			"name" : "parler", "action" : [
        				{"key" : "go", "params" : ["bossParle"]}
        			]
        		}
        	]
        },
        "bossParle" : {
        	"textes" : ["bossParle-texte-1", "bossParle-texte-2", "bossParle-texte-3", "bossParle-texte-4"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["bossAvance2"]}
        			]
        		}
        	]
        },
        "bossAvance" : {
        	"textes" : ["bossAvance-texte-1", "bossAvance-texte-2", "bossParle-texte-3", "bossParle-texte-4"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["bossAvance2"]}
        			]
        		}
        	]
        },
        "bossAvance2" : {
        	"textes" : ["bossAvance2-texte-1", "bossAvance2-texte-2", "bossAvance2-texte-3", "bossAvance2-texte-4",
        		"bossAvance2-texte-5", "bossAvance2-texte-6"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    "experience", "experience"
                        ], "boss2"]}
        			]
        		}
        	]
        },
        "boss2" : {
        	"textes" : ["boss2-texte-1", "boss2-texte-2", "boss2-texte-3", "boss2-texte-4"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    {"name":"necromancien", "suffixe":"lancien"}
                        ], "boss3"]}
        			]
        		}
        	]
        },
        "boss3" : {
        	"textes" : ["boss3-texte-1", "boss3-texte-2", "boss3-texte-3", "boss3-texte-4", "boss3-texte-5"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["boss4"]}
        			]
        		}
        	]
        },
        "boss4" : {
        	"textes" : ["boss4-texte-1", "boss4-texte-2", "boss4-texte-3", "boss4-texte-4", "boss4-texte-5"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["boss5"]}
        			]
        		}
        	]
        },
        "boss5" : {
        	"textes" : ["boss5-texte-1", "boss5-texte-2", "boss5-texte-3", "boss5-texte-4", "boss5-texte-5",
        		"boss5-texte-6"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    "liche"
                        ], "boss6"]}
        			]
        		}
        	]
        },
        "boss6" : {
        	"textes" : ["boss6-texte-1", "boss6-texte-2", "boss6-texte-3", "boss6-texte-4", "boss6-texte-5",
        		"boss6-texte-6"],
        	"actions" : [
        		{
        			"name" : "terminer", "action" : [
        			    {"key" : "score", "params" : ["GameComplete", 1]},
        				{"key" : "go", "params" : ["gagne"]}
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