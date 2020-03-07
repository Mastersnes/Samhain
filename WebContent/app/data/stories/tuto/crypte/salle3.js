'use strict';
define([], function() {
    var data = {
        /**
        * Salle 3 - Bibliotheque
        **/
        "necroTrou" : {
        	"textes" : ["necroTrou-texte-1", "necroTrou-texte-2", "necroTrou-texte-3"],
        	"actions" : [
        		{
        			"name" : "entrer", "action" : [
        				{"key" : "gain", "params" : ["S3ViaS0"]},
        				{"key" : "gain", "params" : ["viaS3"]},
        				{"key" : "go", "params" : ["necroS3"]}
        			]
        		}
        	]
        },
        "necroS3" : {
        	"textes" : ["necroS3-texte-1", "necroS3-texte-2", "necroS3-texte-3", "necroS3-texte-4"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["S3ViaS0"]}],
        			"name" : "ouvrir-porte", "action" : [
        				{"key" : "perte", "params" : ["S3ViaS0"]},
        				{"key" : "hasItem", "params" : [["helpRoi2"], "necroGSRoiFight", "necroGSFight"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["parchoLu"]}],
        			"name" : "prendre-parchemin", "action" : [
        				{"key" : "upMG", "params" : [2]},
        				{"key" : "gain", "params" : ["soin"]},
        				{"key" : "gain", "params" : ["parchoLu"]},
        				{"key" : "score", "params" : ["LearnHeal", 1]},
        				{"key" : "go", "params" : ["necroS3Fouille"]}
        			]
        		}
        	]
        },
        "necroS3GS" : {
        	"textes" : ["necroS3-texte-1", "necroS3-texte-2", "necroS3-texte-3", "necroS3-texte-4"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        			    {"key" : "go", "params" : ["necroGS"]}
                    ]
        		},
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["parchoLu"]}],
                    "name" : "prendre-parchemin", "action" : [
                        {"key" : "upMG", "params" : [2]},
                        {"key" : "gain", "params" : ["soin"]},
                        {"key" : "gain", "params" : ["parchoLu"]},
                        {"key" : "score", "params" : ["LearnHeal", 1]},
                        {"key" : "go", "params" : ["necroS3Fouille"]}
                    ]
                }
        	]
        },
        "necroS3Fouille" : {
        	"textes" : ["necroS3Fouille-texte-1", "necroS3Fouille-texte-2", "necroS3Fouille-texte-3",
        		"necroS3Fouille-texte-4", "necroS3Fouille-texte-5"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["S3ViaS0"]}],
        			"name" : "ouvrir-porte", "action" : [
        				{"key" : "perte", "params" : ["S3ViaS0"]},
        				{"key" : "hasItem", "params" : [["helpRoi2"], "necroGSRoiFight", "necroGSFight"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["S3ViaS0"]}],
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