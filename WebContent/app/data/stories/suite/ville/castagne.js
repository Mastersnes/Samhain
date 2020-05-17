'use strict';
define([], function() {
    var data = {
        /**
        * Castagne
        **/
        "ville-ruelle-taverne-castagne-1" : {
            "textes" : ["ville-ruelle-taverne-castagne-1-texte-1", "ville-ruelle-taverne-castagne-1-texte-2",
                        "ville-ruelle-taverne-castagne-1-texte-3", "ville-ruelle-taverne-castagne-1-texte-4",
                        "ville-ruelle-taverne-castagne-1-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "villageois", "suffixe":"costaud"}
                            ], "ville-ruelle-taverne-castagne-2", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-2" : {
            "textes" : ["ville-ruelle-taverne-castagne-2-texte-1", "ville-ruelle-taverne-castagne-2-texte-2",
                        "ville-ruelle-taverne-castagne-2-texte-3", "ville-ruelle-taverne-castagne-2-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "villageois", "suffixe":"bourrin"},
                                {"name": "villageois", "suffixe":"fairplay"}
                            ], "ville-ruelle-taverne-castagne-3", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-3" : {
            "textes" : ["ville-ruelle-taverne-castagne-3-texte-1", "ville-ruelle-taverne-castagne-3-texte-2",
                        "ville-ruelle-taverne-castagne-3-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "bandit", "suffixe":"terrifiant"},
                                {"name": "bandit", "suffixe":"terrifiant"}
                            ], "ville-ruelle-taverne-castagne-4", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-4" : {
            "textes" : ["ville-ruelle-taverne-castagne-4-texte-1", "ville-ruelle-taverne-castagne-4-texte-2",
                        "ville-ruelle-taverne-castagne-4-texte-3", "ville-ruelle-taverne-castagne-4-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "villageois", "suffixe":"glouton"},
                                {"name": "bandit", "suffixe":"cruel"},
                                {"name": "bandit", "suffixe":"raoul"}
                            ], "ville-ruelle-taverne-castagne-5", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-5" : {
            "textes" : ["ville-ruelle-taverne-castagne-5-texte-1", "ville-ruelle-taverne-castagne-5-texte-2",
                        "ville-ruelle-taverne-castagne-5-texte-3", "ville-ruelle-taverne-castagne-5-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "villageois", "suffixe":"viscerole"}
                            ], "ville-ruelle-taverne-castagne-win1", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                },
            ]
        },

        /**
        * Castagne, premiere phase de victoire
        **/
        "ville-ruelle-taverne-castagne-win1" : {
            "textes" : ["ville-ruelle-taverne-castagne-win1-texte-1", "ville-ruelle-taverne-castagne-win1-texte-2",
                        "ville-ruelle-taverne-castagne-win1-texte-3", "ville-ruelle-taverne-castagne-win1-texte-4",
                        "ville-ruelle-taverne-castagne-win1-texte-5"],
            "actions" : [
                {
                    "name" : "se-reposer",
                    "action" : [
                        {"key" : "gain", "params" : ["CastagneSave1"]},
                        {"key" : "gainGold", "params" : [500]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-castagne-repos"]}
                    ]
                },
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "gainGold", "params" : [500]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-castagne-6"]}
                    ]
                },
            ]
        },

        /**
        * Castagne suite
        **/
        "ville-ruelle-taverne-castagne-6" : {
            "textes" : ["ville-ruelle-taverne-castagne-6-texte-1", "ville-ruelle-taverne-castagne-6-texte-2",
                        "ville-ruelle-taverne-castagne-6-texte-3", "ville-ruelle-taverne-castagne-6-texte-4",
                        "ville-ruelle-taverne-castagne-6-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "bandit", "suffixe":"precis"}
                            ], "ville-ruelle-taverne-castagne-7", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-7" : {
            "textes" : ["ville-ruelle-taverne-castagne-7-texte-1", "ville-ruelle-taverne-castagne-7-texte-2",
                        "ville-ruelle-taverne-castagne-7-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "bandit", "suffixe":"dechaine"}
                            ], "ville-ruelle-taverne-castagne-8", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-8" : {
            "textes" : ["ville-ruelle-taverne-castagne-8-texte-1", "ville-ruelle-taverne-castagne-8-texte-2",
                        "ville-ruelle-taverne-castagne-8-texte-3", "ville-ruelle-taverne-castagne-8-texte-4",
                        "ville-ruelle-taverne-castagne-8-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "garde", "suffixe":"kraken", "abilities" : ["doubleAttaque"]}
                            ], "ville-ruelle-taverne-castagne-9", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-9" : {
            "textes" : ["ville-ruelle-taverne-castagne-9-texte-1", "ville-ruelle-taverne-castagne-9-texte-2",
                        "ville-ruelle-taverne-castagne-9-texte-3", "ville-ruelle-taverne-castagne-9-texte-4",
                        "ville-ruelle-taverne-castagne-9-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "garde", "suffixe":"kraken-blesse", "abilities" : ["doubleAttaque"]},
                                {"name": "garde", "suffixe":"paresseux", "abilities" : ["doubleAttaque"]},
                                {"name": "garde", "suffixe":"grognon", "abilities" : ["doubleAttaque"]}
                            ], "ville-ruelle-taverne-castagne-10", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-10" : {
            "textes" : ["ville-ruelle-taverne-castagne-10-texte-1", "ville-ruelle-taverne-castagne-10-texte-2",
                        "ville-ruelle-taverne-castagne-10-texte-3", "ville-ruelle-taverne-castagne-10-texte-4",
                        "ville-ruelle-taverne-castagne-10-texte-5"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "villageois", "suffixe":"tavernier", "abilities" : ["doubleAttaque"]}
                            ], "ville-ruelle-taverne-castagne-win2", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon", "no-consos"]
                        ]}
                    ]
                },
            ]
        },

        /**
        * Victoire absolue
        **/
        "ville-ruelle-taverne-castagne-win2" : {
            "textes" : ["ville-ruelle-taverne-castagne-win2-texte-1", "ville-ruelle-taverne-castagne-win2-texte-2",
                        "ville-ruelle-taverne-castagne-win2-texte-3", "ville-ruelle-taverne-castagne-win2-texte-4",
                        "ville-ruelle-taverne-castagne-win2-texte-5", "ville-ruelle-taverne-castagne-win2-texte-6"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "score", "params" : ["CastagneVictoire"]},
                        {"key" : "gain", "params" : ["doubleAttaque", "CastagneVictoire"]},
                        {"key" : "perte", "params" : ["CastagneSave1"]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-castagne-win2-2"]}
                    ]
                },
            ]
        },
        "ville-ruelle-taverne-castagne-win2-2" : {
            "textes" : ["ville-ruelle-taverne-castagne-win2-2-texte-1", "ville-ruelle-taverne-castagne-win2-2-texte-2"],
            "actions" : [
                {
                    "name" : "retour-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                },
            ]
        },

        /**
        * Castagne repos
        **/
        "ville-ruelle-taverne-castagne-repos" : {
            "textes" : ["ville-ruelle-taverne-castagne-repos-texte-1", "ville-ruelle-taverne-castagne-repos-texte-2",
                        "ville-ruelle-taverne-castagne-repos-texte-3"],
            "actions" : [
                {
                    "name" : "alchimiste",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-alchimiste"]}
                    ]
                },
                {
                    "name" : "taverne",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-taverne"]}
                    ]
                },
                {
                    "name" : "retour-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },
        /**
        * Castagne Random
        **/
        "ville-ruelle-taverne-castagne-random" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-texte-1", "ville-ruelle-taverne-castagne-random-texte-2",
                        "ville-ruelle-taverne-castagne-random-texte-3", "ville-ruelle-taverne-castagne-random-texte-4",
                        "ville-ruelle-taverne-castagne-random-texte-5"],
            "actions" : [
                {
                    "name" : "castagner",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-taverne-castagne-random-1", "ville-ruelle-taverne-castagne-random-2",
                            "ville-ruelle-taverne-castagne-random-3", "ville-ruelle-taverne-castagne-random-4",
                            "ville-ruelle-taverne-castagne-random-5", "ville-ruelle-taverne-castagne-random-6",
                            "ville-ruelle-taverne-castagne-random-7", "ville-ruelle-taverne-castagne-random-8",
                            "ville-ruelle-taverne-castagne-random-9", "ville-ruelle-taverne-castagne-random-10"
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-relance" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-relance-texte-1"],
            "actions" : [
                {
                    "name" : "castagner",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-taverne-castagne-random-1", "ville-ruelle-taverne-castagne-random-2",
                            "ville-ruelle-taverne-castagne-random-3", "ville-ruelle-taverne-castagne-random-4",
                            "ville-ruelle-taverne-castagne-random-5", "ville-ruelle-taverne-castagne-random-6",
                            "ville-ruelle-taverne-castagne-random-7", "ville-ruelle-taverne-castagne-random-8",
                            "ville-ruelle-taverne-castagne-random-9", "ville-ruelle-taverne-castagne-random-10"
                        ]}
                    ]
                },
                {
                    "name" : "abandonner",
                    "action" : [
                        {"key" : "go", "params" : ["ville-ruelle-taverne-castagne-repos"]}
                    ]
                }
            ]
        },

        "ville-ruelle-taverne-castagne-random-1" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            ["villageois", "bandit",
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-2" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            ["bandit", "bandit", "bandit"],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-3" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            ["villageois", "villageois", "villageois", "villageois"],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-4" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "garde", "abilities" : ["doubleAttaque"]},
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-5" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                "villageois",
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-6" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                "villageois",
                                "villageois",
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-7" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-unique-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-8" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-unique-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            ["bandit"],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-9" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            ["bandit", "villagois", "bandit", "villageois"],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        "ville-ruelle-taverne-castagne-random-10" : {
            "textes" : ["ville-ruelle-taverne-castagne-random-multi-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [
                            [
                                "bandit", "bandit",
                                {"name": "garde", "abilities" : ["doubleAttaque"]},
                                {"name": "garde", "abilities" : ["doubleAttaque"]}
                            ],
                            "ville-ruelle-taverne-castagne-random-relance", "ville-ruelle-taverne-castagne-defaite",
                            null, ["no-weapon"]
                        ]}
                    ]
                }
            ]
        },
        /**
        * Castagne defaite
        **/
        "ville-ruelle-taverne-castagne-defaite" : {
            "textes" : ["ville-ruelle-taverne-castagne-defaite-texte-1", "ville-ruelle-taverne-castagne-defaite-texte-2",
                        "ville-ruelle-taverne-castagne-defaite-texte-3", "ville-ruelle-taverne-castagne-defaite-texte-4"],
            "actions" : [
                {
                    "name" : "alchimiste",
                    "action" : [
                        {"key" : "restore", "params" : []},
                        {"key" : "perte", "params" : ["CastagneSave1"]},
                        {"key" : "go", "params" : [ "ville-ruelle-alchimiste"]}
                    ]
                },
                {
                    "name" : "taverne",
                    "action" : [
                        {"key" : "restore", "params" : []},
                        {"key" : "perte", "params" : ["CastagneSave1"]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne"]}
                    ]
                },
                {
                    "name" : "retour-ville",
                    "action" : [
                        {"key" : "restore", "params" : []},
                        {"key" : "perte", "params" : ["CastagneSave1"]},
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
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