'use strict';
define([], function() {
    var data = {
        /**
        * Fouille - Reussite
        **/
        "bandits-village-fouiller-reussite" : {
            "textes" : ["bandits-village-fouiller-reussite-texte-1", "bandits-village-fouiller-reussite-texte-2"],
            "actions" : [
                {
                    "name" : "tout-prendre",
                    "action" : [
                        {"key" : "gain", "params" : ["pomme", "pomme", "fromage"]},
                        {"key" : "go", "params" : ["bandits-village-2"]}
                    ]
                }
            ]
        },

        /**
        * Fouille - Echec
        **/
        "bandits-village-fouiller-echec" : {
            "textes" : ["bandits-village-fouiller-echec-texte-1", "bandits-village-fouiller-echec-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-village-2"]}
                    ]
                }
            ]
        },

        /**
        * Fouille - Echec Critique
        **/
        "bandits-village-fouiller-critique" : {
            "textes" : ["bandits-village-fouiller-critique-texte-1", "bandits-village-fouiller-critique-texte-2",
                        "bandits-village-fouiller-critique-texte-3"],
            "actions" : [
                {
                    "name" : "se-battre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            {"name":"bandit", "suffixe":"cruel"}
                        ], "bandits-village-2"]}
                    ]
                }
            ]
        },

        /**
        * Village suite
        **/
        "bandits-village-2" : {
            "textes" : ["bandits-village-2-texte-1", "bandits-village-2-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "bandits-village-3"]}
                    ]
                }
            ]
        },
        "bandits-village-3" : {
            "textes" : ["bandits-village-3-texte-1", "bandits-village-3-texte-2"],
            "actions" : [
                {
                    "name" : "infiltrer-foule",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-infiltrer-reussite", "bandits-village-infiltrer-echec"
                        ]}
                    ]
                },
                {
                    "name" : "sannoncer",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-sannoncer"]}
                    ]
                },
                {
                    "name" : "contourner-foule",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-contourner"]}
                    ]
                },
            ]
        },

        /**
        * Infiltration - Reussite
        **/
        "bandits-village-infiltrer-reussite" : {
            "textes" : ["bandits-village-infiltrer-reussite-texte-1", "bandits-village-infiltrer-reussite-texte-2",
                        "bandits-village-infiltrer-reussite-texte-3"],
            "actions" : [
                {
                    "name" : "observer",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-observer"]}
                    ]
                },
            ]
        },
        "bandits-village-observer" : {
            "textes" : ["bandits-village-observer-texte-1", "bandits-village-observer-texte-2",
                        "bandits-village-observer-texte-3", "bandits-village-observer-texte-4"],
            "actions" : [
                {
                    "name" : "entrer-arene",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-arene-entrer"]}
                    ]
                },
                {
                    "name" : "continuer-infiltration",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-infiltrer-2-reussite", "bandits-village-infiltrer-2-echec"
                        ]}
                    ]
                },
                {
                    "name" : "sannoncer",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-sannoncer"]}
                    ]
                },
            ]
        },

        /**
        * Seconde Infiltration - Reussite
        **/
        "bandits-village-infiltrer-2-reussite" : {
            "textes" : ["bandits-village-infiltrer-2-reussite-texte-1", "bandits-village-infiltrer-2-reussite-texte-2",
                        "bandits-village-infiltrer-2-reussite-texte-3"],
            "actions" : [
                {
                    "name" : "sannoncer",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-roi-sannoncer"]}
                    ]
                },
                {
                    "name" : "lassassiner",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-arene-assassiner"]}
                    ]
                }
            ]
        },

        /**
        * Seconde Infiltration - Annonce
        **/
        "bandits-village-roi-sannoncer" : {
            "textes" : ["bandits-village-roi-sannoncer-texte-1", "bandits-village-roi-sannoncer-texte-2",
                        "bandits-village-roi-sannoncer-texte-3", "bandits-village-roi-sannoncer-texte-4"],
            "actions" : [
                {
                    "name" : "accepter",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            {"name":"roiBandit", "suffixe":"cruel"}
                        ], "bandits-arene-solo-win"]}
                    ]
                },
                {
                    "name" : "quest-ce-que-gagne",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-roi-sannoncer-question"]}
                    ]
                },
                {
                    "name" : "refuser",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-roi-sannoncer-refus"]}
                    ]
                }
            ]
        },

        "bandits-village-roi-sannoncer-question" : {
            "textes" : ["bandits-village-roi-sannoncer-question-texte-1", "bandits-village-roi-sannoncer-question-texte-2",
                        "bandits-village-roi-sannoncer-question-texte-3"],
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

        "bandits-village-roi-sannoncer-refus" : {
            "textes" : ["bandits-village-roi-sannoncer-refus-texte-1", "bandits-village-roi-sannoncer-refus-texte-2",
                        "bandits-village-roi-sannoncer-question-texte-3"],
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
        * Seconde Infiltration - Echec
        **/
        "bandits-village-infiltrer-2-echec" : {
            "textes" : ["bandits-village-infiltrer-2-echec-texte-1", "bandits-village-infiltrer-2-echec-texte-2",
                        "bandits-village-infiltrer-2-echec-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-infiltrer-2-echec-2"]}
                    ]
                }
            ]
        },
        "bandits-village-infiltrer-2-echec-2" : {
            "textes" : ["bandits-village-infiltrer-2-echec-2-texte-1", "bandits-village-infiltrer-2-echec-2-texte-2",
                        "bandits-village-infiltrer-2-echec-2-texte-3", "bandits-village-infiltrer-2-echec-2-texte-4",
                        "bandits-village-infiltrer-2-echec-2-texte-5", "bandits-village-infiltrer-2-echec-2-texte-6"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "goule", "goule", "goule", "goule"
                        ], "bandits-arene-goule-win"]}
                    ]
                },
            ]
        },

        /**
        * Infiltration - Echec
        **/
        "bandits-village-infiltrer-echec" : {
            "textes" : ["bandits-village-infiltrer-echec-texte-1", "bandits-village-infiltrer-echec-texte-2",
                        "bandits-village-infiltrer-echec-texte-3", "bandits-village-infiltrer-echec-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "bandit",
                            "bandit"
                        ], "bandits-village-infiltrer-echec-2"]}
                    ]
                }
            ]
        },
        "bandits-village-infiltrer-echec-2" : {
            "textes" : ["bandits-village-infiltrer-echec-2-texte-1", "bandits-village-infiltrer-echec-2-texte-2",
                        "bandits-village-infiltrer-echec-2-texte-3"],
            "actions" : [
                {
                    "name" : "entrer-arene",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-arene-entrer"]}
                    ]
                }
            ]
        },

        /**
        * S'annoncer
        **/
        "bandits-village-sannoncer" : {
            "textes" : ["bandits-village-sannoncer-texte-1", "bandits-village-sannoncer-texte-2",
                        "bandits-village-sannoncer-texte-3", "bandits-village-sannoncer-texte-4",
                        "bandits-village-sannoncer-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "bandit",
                            {"name":"roiBandit", "suffixe":"cruel"},
                            "bandit"
                        ], "bandits-arene-win"]}
                    ]
                }
            ]
        },

        /**
        * Contourner la foule
        **/
        "bandits-village-contourner" : {
            "textes" : ["bandits-village-contourner-texte-1"],
            "actions" : [
                {
                    "name" : "infiltrer-foule",
                    "action" : [
                        {"key" : "random", "params" : [
                            "bandits-village-infiltrer-reussite", "bandits-village-infiltrer-echec"
                        ]}
                    ]
                },
                {
                    "name" : "sannoncer",
                    "action" : [
                        {"key" : "go", "params" : ["bandits-village-sannoncer"]}
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