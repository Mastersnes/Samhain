'use strict';
define([], function() {
    var data = {
        /**
        * Grande Salle
        **/
        "necroGSFight" : {
        	"textes" : ["necroGSFight-texte-1", "necroGSFight-texte-2", "necroGSFight-texte-3"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    "grosseGoule", "squelette", "squelette"
                        ], "necroGSFight2"]}
        			]
        		}
        	]
        },
        "necroGSFight2" : {
        	"textes" : ["necroGSFight2-texte-1", "necroGSFight2-texte-2"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSRoiFight" : {
        	"textes" : ["necroGSFight-texte-1", "necroGSRoiFight-texte-1", "necroGSFight-texte-3"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    "squelette", "squelette"
                        ], "necroGSRoiFight2"]}
        			]
        		}
        	]
        },
        "necroGSRoiFight2" : {
        	"textes" : ["necroGSRoiFight2-texte-1", "necroGSRoiFight2-texte-2", "necroGSRoiFight2-texte-3",
        		"necroGSRoiFight2-texte-4", "necroGSRoiFight2-texte-5"],
        	"actions" : [
        		{
        			"name" : "prendre-croc", "action" : [
        				{"key" : "gain", "params" : ["crocRoi"]},
        				{"key" : "go", "params" : ["necroGSFight3Oui"]}
        			]
        		},
        		{
        			"name" : "laisser-croc", "action" : [
        				{"key" : "go", "params" : ["necroGSFight3Non"]}
        			]
        		}
        	]
        },
        "necroGSFight3Oui" : {
        	"textes" : ["necroGSFight3Oui-texte-1", "necroGSFight3Oui-texte-2", "necroGSFight2-texte-2"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSFight3Non" : {
        	"textes" : ["necroGSFight3Non-texte-1", "necroGSFight3Non-texte-2", "necroGSFight2-texte-2"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGS" : {
        	"textes" : ["necroGS-texte-1", "necroGS-texte-2", "necroGS-texte-3"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["fouilleCercueil"]}],
        			"name" : "fouiller-cercueil", "action" : [
        				{"key" : "go", "params" : ["necroGSFouilleCercueil"]}
        			]
        		},
        		{
        			"name" : "fouiller-salle", "action" : [
        				{"key" : "go", "params" : ["necroGSFouilleSalle"]}
        			]
        		},
        		/**
        		 * Gauche
        		 */
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
        			"name" : "go-left", "action" : [
        				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
        			"name" : "go-left", "action" : [
        				{"key" : "hasItem", "params" : [["necroS1Clean"], "necroS1", "necroS1Fight"]}
        			]
        		},
        		/**
        		 * Droite
        		 */
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
        			"name" : "go-right", "action" : [
        				{"key" : "go", "params" : ["necroS3GS"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
        			"name" : "go-right", "action" : [
        				{"key" : "go", "params" : ["necroCouloir"]}
        			]
        		},
        		/**
        		 * Face
        		 */
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
        			"name" : "go-face", "action" : [
        				{"key" : "go", "params" : ["necroCouloir"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
        			"name" : "go-face", "action" : [
        				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
        			]
        		},
        		/**
        		 * Retour
        		 */
        		{
        			"name" : "revenir-pas", "action" : [
        				{"key" : "hasItem", "params" : [["viaS1"], "necroS1", "necroS3GS"]}
        			]
        		}
        	]
        },
        "necroGSFouilleCercueil" : {
        	"textes" : ["necroGSFouilleCercueil-texte-1", "necroGSFouilleCercueil-texte-2",
        	    "necroGSFouilleCercueil-texte-3"],
        	"actions" : [
        		{
        			"name" : "fouiller", "action" : [
        				{"key" : "gain", "params" : ["elixir"]},
        				{"key" : "gain", "params" : ["fouilleCercueil"]},
        				{"key" : "go", "params" : ["necroGSFouilleCercueil2"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSFouilleCercueil2" : {
        	"textes" : ["necroGSFouilleCercueil2-texte-1", "necroGSFouilleCercueil2-texte-2",
        		"necroGSFouilleCercueil2-texte-3", "necroGSFouilleCercueil2-texte-4", "necroGSFouilleCercueil2-texte-5"],
        	"actions" : [
        		{
        			"name" : "combattre", "action" : [
        				{"key" : "fight", "params" : [[
        				    {"name": "squelette", "suffixe":"manchot"}
                        ], "necroGSFouilleCercueil3"]}
        			]
        		}
        	]
        },
        "necroGSFouilleCercueil3" : {
        	"textes" : ["necroGSFouilleCercueil3-texte-1", "necroGSFouilleCercueil3-texte-2"],
        	"actions" : [
        		{
        			"name" : "continue", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSFouilleSalle" : {
        	"textes" : ["necroGSFouilleSalle-texte-1", "necroGSFouilleSalle-texte-2", "necroGSFouilleSalle-texte-3"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeG", "torcheExploseG"]}],
        			"name" : "voir-torche-gauche", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheG"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeG"]}],
        			"name" : "voir-torche-gauche", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["torcheExploseG"]}],
        			"name" : "voir-torche-gauche", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheExplose"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeD", "torcheExploseD"]}],
        			"name" : "voir-torche-droite", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheD"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeD"]}],
        			"name" : "voir-torche-droite", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["torcheExploseD"]}],
        			"name" : "voir-torche-droite", "action" : [
        				{"key" : "go", "params" : ["necroGSTorcheExplose"]}
        			]
        		},
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheG" : {
        	"textes" : ["necroGSTorcheG-texte-1", "necroGSTorcheG-texte-2", "necroGSTorcheG-texte-3"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
        			"name" : "utiliser-bougie", "action" : [
        				{"key" : "gain", "params" : ["torcheAllumeG"]},
        				{"key" : "go", "params" : ["necroGSTorcheOK"]}
        			]
        		},
        		{
        			"appairIf" : [
        				{"key" : "hasItem", "params" : ["bouleFeu"]},
        				{"key" : "hasMG", "params" : [1]}
        			],
        			"name" : "lancer-boule-feu", "action" : [
        				{"key" : "sound", "params" : ["bouleFeu"]},
        				{"key" : "gain", "params" : ["torcheExploseG"]},
        				{"key" : "healMG", "params" : [-1]},
        				{"key" : "go", "params" : ["necroGSTorcheKO"]}
        			]
        		},
        		{
        			"name" : "impossible", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheD" : {
        	"textes" : ["necroGSTorcheD-texte-1", "necroGSTorcheG-texte-2", "necroGSTorcheD-texte-2"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
        			"name" : "utiliser-bougie", "action" : [
        				{"key" : "gain", "params" : ["torcheAllumeD"]},
        				{"key" : "go", "params" : ["necroGSTorcheOK"]}
        			]
        		},
        		{
        			"appairIf" : [
        				{"key" : "hasItem", "params" : ["bouleFeu"]},
        				{"key" : "hasMG", "params" : [1]}
        			],
        			"name" : "lancer-boule-feu", "action" : [
        				{"key" : "sound", "params" : ["bouleFeu"]},
        				{"key" : "gain", "params" : ["torcheExploseD"]},
        				{"key" : "healMG", "params" : [-1]},
        				{"key" : "go", "params" : ["necroGSTorcheKO"]}
        			]
        		},
        		{
        			"name" : "impossible", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheOK" : {
        	"textes" : ["necroGSTorcheOK-texte-1", "necroGSTorcheOK-texte-2", "necroGSTorcheOK-texte-3"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheKO" : {
        	"textes" : ["necroGSTorcheKO-texte-1", "necroGSTorcheKO-texte-2", "necroGSTorcheKO-texte-3",
                "necroGSTorcheKO-texte-4"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheAllume" : {
        	"textes" : ["necroGSTorcheAllume-texte-1", "necroGSTorcheAllume-texte-2"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSTorcheExplose" : {
        	"textes" : ["necroGSTorcheExplose-texte-1", "necroGSTorcheExplose-texte-2"],
        	"actions" : [
        		{
        			"name" : "retour", "action" : [
        				{"key" : "go", "params" : ["necroGS"]}
        			]
        		}
        	]
        },
        "necroGSS2" : {
        	"textes" : ["necroGSS2-texte-1", "necroGSS2-texte-2", "necroGSS2-texte-3", "necroGSS2-texte-4"],
        	"actions" : [
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["clefS2"]}],
        			"name" : "utiliser-clef", "action" : [
        				{"key" : "perte", "params" : ["clefS2"]},
        				{"key" : "gain", "params" : ["S2Ouvert"]},
        				{"key" : "sound", "params" : ["door"]},
        				{"key" : "go", "params" : ["necroS2"]}
        			]
        		},
        		{
        			"appairIf" : [{"key" : "hasItem", "params" : ["S2Ouvert"]}],
        			"name" : "ouvrir", "action" : [
        				{"key" : "go", "params" : ["necroS2Retour"]}
        			]
        		},
        		{
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