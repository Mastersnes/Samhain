'use strict';
define([], function() {
    var data = {
        "bandits-porte-debut" : {
            "textes" : ["bandits-porte-debut-texte-1", "bandits-porte-debut-texte-2",
                        "bandits-porte-debut-texte-3", "bandits-porte-debut-texte-4"],
            "actions" : [
                {
                    "name" : "diriger-porte",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte"]}
                    ]
                },
                {
                    "name" : "chercher-faille",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte-faille"]}
                    ]
                },
                {
                    "name" : "escalader",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-porte-escalade-reussite",
                            "bandits-porte-escalade-echec", "bandits-porte-escalade-critique"
                        ]}
                    ]
                },
            ]
        },
        /**
        * On se dirige vers la porte
        **/
        "bandits-porte" : {
            "textes" : ["bandits-porte-texte-1", "bandits-porte-texte-2", "bandits-porte-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "bandit", "bandit"
                        ], "bandits-porte-2"]}
                    ]
                }
            ]
        },
        "bandits-porte-2" : {
            "textes" : ["bandits-porte-2-texte-1", "bandits-porte-2-texte-2", "bandits-porte-2-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-fouiller-reussite",
                            "bandits-village-fouiller-echec", "bandits-village-fouiller-critique"
                        ]}
                    ]
                }
            ]
        },

        /**
        * On trouve une faille
        **/
        "bandits-porte-faille" : {
            "textes" : ["bandits-porte-faille-texte-1", "bandits-porte-faille-texte-2",
                        "bandits-porte-faille-texte-3", "bandits-porte-2-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-fouiller-reussite",
                            "bandits-village-fouiller-echec", "bandits-village-fouiller-critique"
                        ]}
                    ]
                }
            ]
        },

        /**
        * Reussite de l'escalade
        **/
        "bandits-porte-escalade-reussite" : {
            "textes" : ["bandits-porte-escalade-reussite-texte-1", "bandits-porte-escalade-reussite-texte-2",
                        "bandits-porte-escalade-reussite-texte-3", "bandits-porte-2-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-fouiller-reussite",
                            "bandits-village-fouiller-echec", "bandits-village-fouiller-critique"
                        ]}
                    ]
                }
            ]
        },
        /**
        * Echec de l'escalade
        **/
        "bandits-porte-escalade-echec" : {
            "textes" : ["bandits-porte-escalade-echec-texte-1", "bandits-porte-escalade-echec-texte-2",
                        "bandits-porte-escalade-echec-texte-3"],
            "actions" : [
                {
                    "name" : "diriger-porte",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte"]}
                    ]
                },
                {
                    "name" : "chercher-faille",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte-faille"]}
                    ]
                }
            ]
        },
        /**
        * Echec critique de l'escalade
        **/
        "bandits-porte-escalade-critique" : {
            "before" : function(histoire) {
                histoire.hurt(10);
            },
            "textes" : ["bandits-porte-escalade-critique-texte-1", "bandits-porte-escalade-critique-texte-2",
                        "bandits-porte-escalade-critique-texte-3", "bandits-porte-escalade-critique-texte-4",
                        "bandits-porte-escalade-echec-texte-3"],
            "actions" : [
                {
                    "name" : "diriger-porte",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte"]}
                    ]
                },
                {
                    "name" : "chercher-faille",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-porte-faille"]}
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