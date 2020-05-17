'use strict';
define([], function() {
    var data = {
        /**
        * Entrée dans l'arene
        **/
        "bandits-arene-entrer" : {
            "textes" : ["bandits-arene-entrer-texte-1", "bandits-arene-entrer-texte-2"],
            "actions" : [
                {
                    "name" : "se-battre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "goule", "goule", "goule", "goule"
                        ], "bandits-arene-entrer-2"]}
                    ]
                }
            ]
        },
        "bandits-arene-entrer-2" : {
            "textes" : ["bandits-arene-entrer-2-texte-1", "bandits-arene-entrer-2-texte-2",
                        "bandits-arene-entrer-2-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-arene-entrer-3"]}
                    ]
                }
            ]
        },
        "bandits-arene-entrer-3" : {
            "textes" : ["bandits-arene-entrer-3-texte-1", "bandits-arene-entrer-3-texte-2",
                        "bandits-arene-entrer-3-texte-3", "bandits-arene-entrer-3-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            {"name":"roiBandit", "suffixe":"cruel"}
                        ], "bandits-arene-solo-win"]}
                    ]
                }
            ]
        },

        /**
        * Assassinat du roi
        **/
        "bandits-arene-assassiner" : {
            "textes" : ["bandits-arene-assassiner-texte-1", "bandits-arene-assassiner-texte-2",
                        "bandits-arene-assassiner-texte-3", "bandits-arene-assassiner-texte-4"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-arene-assassiner-2"]}
                    ]
                }
            ]
        },
        "bandits-arene-assassiner-2" : {
            "textes" : ["bandits-arene-assassiner-2-texte-1", "bandits-arene-assassiner-2-texte-2",
                        "bandits-arene-assassiner-2-texte-3"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "score", "params" : ["KillBanditKing"]},
                        {"key" : "gain", "params" : ["anneau-bandit", "dague"]},
                        {"key" : "go", "params" : ["ville-porte-retour-1"]}
                    ]
                }
            ]
        },

        /**
        * Victoire contre le roi avec ses allies
        **/
        "bandits-arene-win" : {
            "textes" : ["bandits-arene-win-texte-1", "bandits-arene-win-texte-2"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-arene-fin"]}
                    ]
                }
            ]
        },

        /**
        * Victoire contre le roi seul
        **/
        "bandits-arene-solo-win" : {
            "textes" : ["bandits-arene-solo-win-texte-1", "bandits-arene-solo-win-texte-2"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-arene-fin"]}
                    ]
                }
            ]
        },

        /**
        * Victoire contre les goules
        **/
        "bandits-arene-goule-win" : {
            "textes" : ["bandits-arene-goule-win-texte-1", "bandits-arene-goule-win-texte-2",
                        "bandits-arene-entrer-3-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            {"name":"roiBandit", "suffixe":"cruel"}
                        ], "bandits-arene-solo-win"]}
                    ]
                }
            ]
        },

        /**
        * Fin de la quete des bandits
        **/
        "bandits-arene-fin" : {
            "textes" : ["bandits-arene-fin-texte-1", "bandits-arene-fin-texte-2", "bandits-arene-assassiner-2-texte-1",
                        "bandits-arene-assassiner-2-texte-2", "bandits-arene-assassiner-2-texte-3"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "score", "params" : ["KillBanditKing"]},
                        {"key" : "gain", "params" : ["anneau-bandit", "dague"]},
                        {"key" : "go", "params" : ["ville-porte-retour-1"]}
                    ]
                }
            ]
        },
    };

    return {
        get : function(key) {
            return data[key];
        }
    };
});