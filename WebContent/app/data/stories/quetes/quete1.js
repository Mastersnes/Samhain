'use strict';
define([], function() {
    var data = {
        /**
        * La quete des poulets
        **/
        "quete1-start" : {
            "textes" : ["quete1-start-texte-1", "quete1-start-texte-2", "quete1-start-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-start-2"]}
                    ]
                }
            ]
        },
        "quete1-start-2" : {
            "textes" : ["quete1-start-2-texte-1", "quete1-start-2-texte-2"],
            "actions" : [
                {
                    "name" : "chercher-indice",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-indice-reussite"]}
                    ]
                },
                {
                    "name" : "questionner-fermier",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-question-fermier"]}
                    ]
                }
            ]
        },

        /**
        * Chercher des indices
        **/
        "quete1-indice-reussite" : {
            "textes" : ["quete1-indice-texte-1", "quete1-indice-reussite-texte-2"],
            "actions" : [
                {
                    "name" : "suivre-trace",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-indice-reussite-2"]}
                    ]
                }
            ]
        },
        "quete1-indice-reussite-2" : {
            "textes" : ["quete1-indice-reussite-2-texte-1", "quete1-indice-reussite-2-texte-2"],
            "actions" : [
                {
                    "name" : "lattraper",
                    "action" : [
                        {"key" : "avance-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-indice-reussite-3"]}
                    ]
                }
            ]
        },
        "quete1-indice-reussite-3" : {
            "textes" : ["quete1-indice-reussite-3-texte-1", "quete1-indice-reussite-3-texte-2",
                        "quete1-indice-reussite-3-texte-3"],
            "actions" : [
                {
                    "name" : "questionner-fermier",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-question-fermier"]}
                    ]
                }
            ]
        },

        /**
        * Questions au fermier
        **/
        "quete1-question-fermier" : {
            "textes" : ["quete1-question-fermier-texte-1", "quete1-question-fermier-texte-2",
                        "quete1-question-fermier-texte-3", "quete1-question-fermier-texte-4",
                        "quete1-question-fermier-texte-5", "quete1-question-fermier-texte-6"],
            "actions" : [
                {
                    "name" : "aller-champs",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champs"]}
                    ]
                }
            ]
        },

        /**
        * Champs
        **/
        "quete1-champs" : {
            "textes" : ["quete1-champs-texte-1", "quete1-champs-texte-2", "quete1-champs-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller",
                    "action" : [
                        {"key" : "avance-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-champs-fouiller"]}
                    ]
                },
                {
                    "name" : "questionner-paysans",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champs-question-paysans"]}
                    ]
                }
            ]
        },

        /**
        * Fouille des camps
        **/
        "quete1-champs-fouiller" : {
            "textes" : ["quete1-champs-fouiller-texte-1", "quete1-champs-fouiller-texte-2",
                        "quete1-champs-fouiller-texte-3", "quete1-champs-fouiller-texte-4"],
            "actions" : [
                {
                    "name" : "questionner-paysans",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champs-question-paysans"]}
                    ]
                }
            ]
        },

        /**
        * Questions aux paysans
        **/
        "quete1-champs-question-paysans" : {
            "textes" : ["quete1-champs-question-paysans-texte-1", "quete1-champs-question-paysans-texte-2",
                        "quete1-champs-question-paysans-texte-3", "quete1-champs-question-paysans-texte-4"],
            "actions" : [
                {
                    "name" : "menacer",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champs-menacer"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [50]}],
                    "name" : "soudoyer-50",
                    "action" : [
                        {"key" : "perteGold", "params" : [50]},
                        {"key" : "go", "params" : ["quete1-champs-soudoyer"]}
                    ]
                },
                {
                    "name" : "laisser-tomber",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champs-abandonner"]}
                    ]
                },
            ]
        },

        /**
        * Abandon
        **/
        "quete1-champs-abandonner" : {
            "textes" : ["quete1-champs-abandonner-texte-1", "quete1-champs-abandonner-texte-2"],
            "actions" : [
                {
                    "name" : "aller-taverne",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne"]}
                    ]
                }
            ]
        },

        /**
        * Soudoiement des paysans
        **/
        "quete1-champs-soudoyer" : {
            "textes" : ["quete1-champs-soudoyer-texte-1", "quete1-champs-soudoyer-texte-2",
                        "quete1-champs-soudoyer-texte-3"],
            "actions" : [
                {
                    "name" : "se-rendre-ville",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-clochet"]}
                    ]
                }
            ]
        },

        /**
        * Menace des paysans
        **/
        "quete1-champs-menacer" : {
            "textes" : ["quete1-champs-menacer-texte-1", "quete1-champs-menacer-texte-2",
                        "quete1-champs-menacer-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "villageois", "villageois", "villageois"
                        ], "quete1-champs-menacer-2", "ville-entree-echec-quete"]}
                    ]
                },
            ]
        },
        "quete1-champs-menacer-2" : {
            "textes" : ["quete1-champs-menacer-2-texte-1", "quete1-champs-menacer-2-texte-2",
                        "quete1-champs-menacer-2-texte-3", "quete1-champs-menacer-2-texte-4"],
            "actions" : [
                {
                    "name" : "se-rendre-ville",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-clochet"]}
                    ]
                }
            ]
        },

        /**
        * Clochet
        **/
        "quete1-clochet" : {
            "textes" : ["quete1-clochet-texte-1", "quete1-clochet-texte-2"],
            "actions" : [
                {
                    "name" : "entrer",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-clochet-entrer"]}
                    ]
                },
                {
                    "name" : "abandonner",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-clochet-abandonner"]}
                    ]
                }
            ]
        },

        /**
        * Clochet - Entrer
        **/
        "quete1-clochet-entrer" : {
            "textes" : ["quete1-clochet-entrer-texte-1", "quete1-clochet-entrer-texte-2",
                        "quete1-clochet-entrer-texte-3"],
            "actions" : [
                {
                    "name" : "le-rattraper",
                    "action" : [
                        {"key" : "avance-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-clochet-entrer-2"]}
                    ]
                }
            ]
        },
        "quete1-clochet-entrer-2" : {
            "textes" : ["quete1-clochet-entrer-2-texte-1", "quete1-clochet-entrer-2-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-clochet-entrer-3"]}
                    ]
                }
            ]
        },
        "quete1-clochet-entrer-3" : {
            "textes" : ["quete1-clochet-suite-texte-1"],
            "actions" : [
                {
                    "name" : "aller-taverne",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne"]}
                    ]
                }
            ]
        },

        /**
        * Clochet - Abandon
        **/
        "quete1-clochet-abandonner" : {
            "textes" : ["quete1-clochet-abandon-texte-1", "quete1-clochet-suite-texte-1"],
            "actions" : [
                {
                    "name" : "aller-taverne",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne"]}
                    ]
                }
            ]
        },

        /**
        * Taverne
        **/
        "quete1-taverne" : {
            "textes" : ["quete1-taverne-texte-1", "quete1-taverne-texte-2",
                        "quete1-taverne-texte-3", "quete1-taverne-texte-4"],
            "actions" : [
                {
                    "name" : "questionner-tavernier",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne-2"]}
                    ]
                },
                {
                    "name" : "prendre-verre",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne-verre"]}
                    ]
                },
            ]
        },

        "quete1-taverne-2" : {
            "textes" : ["quete1-taverne-2-texte-1", "quete1-taverne-2-texte-2", "quete1-taverne-2-texte-3",
                        "quete1-taverne-2-texte-4", "quete1-taverne-2-texte-5"],
            "actions" : [
                {
                    "name" : "visiter-cuisine",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-taverne-3"]}
                    ]
                }
            ]
        },

        "quete1-taverne-3" : {
            "textes" : ["quete1-taverne-3-texte-1", "quete1-taverne-3-texte-2"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "villageois"
                        ], "quete1-taverne-4", "ville-entree-echec-quete"]}
                    ]
                }
            ]
        },

        "quete1-taverne-4" : {
            "textes" : ["quete1-taverne-4-texte-1", "quete1-taverne-4-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "avance-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-retour"]}
                    ]
                }
            ]
        },

        /**
        * Boire un verre
        **/
        "quete1-taverne-verre" : {
            "textes" : ["quete1-taverne-verre-texte-1", "quete1-taverne-verre-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-retour"]}
                    ]
                }
            ]
        },

        /**
        * Retour vers la ferme
        **/
        "quete1-retour" : {
            "textes" : ["quete1-retour-texte-1", "quete1-retour-texte-2",
                        "quete1-retour-texte-3", "quete1-retour-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-retour-2"]}
                    ]
                }
            ]
        },
        "quete1-retour-2" : {
            "textes" : ["quete1-retour-2-texte-1", "quete1-retour-2-texte-2"],
            "actions" : [
                {
                    "name" : "sauver-poule",
                    "action" : [
                        {"key" : "hurt", "params" : [10]},
                        {"key" : "avance-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-retour-sauver"]}
                    ]
                },
                {
                    "name" : "mettre-abris",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-retour-cacher"]}
                    ]
                }
            ]
        },

        /**
        * Au secours de la poule
        **/
        "quete1-retour-sauver" : {
            "textes" : ["quete1-retour-sauver-texte-1", "quete1-retour-sauver-texte-2",
                        "quete1-retour-sauver-texte-3", "quete1-retour-sauver-texte-4",
                        "quete1-retour-sauver-texte-5"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [0]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-0"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [1]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [2]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-2"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [3]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-3"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [4]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-4"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [5]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-5"]}
                    ]
                }
            ]
        },

        /**
        * Se mettre à l'abris
        **/
        "quete1-retour-cacher" : {
            "textes" : ["quete1-retour-cacher-texte-1", "quete1-retour-sauver-texte-2",
                        "quete1-retour-cacher-texte-3", "quete1-retour-cacher-texte-4"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [0]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-0"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [1]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [2]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-2"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [3]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-3"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [4]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-4"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasReussite", "params" : [5]}],
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["quete1-fin-5"]}
                    ]
                }
            ]
        },

        /**
        * Fin
        **/
        "quete1-fin-0" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-0-texte-2", "quete1-fin-0-texte-3", "quete1-fin-0-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [0]}
                    ]
                }
            ]
        },
        "quete1-fin-1" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-1-texte-2", "quete1-fin-0-texte-3", "quete1-fin-0-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [0]}
                    ]
                }
            ]
        },
        "quete1-fin-2" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-2-texte-2", "quete1-fin-23-texte-3", "quete1-fin-23-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [50]}
                    ]
                }
            ]
        },
        "quete1-fin-3" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-3-texte-2", "quete1-fin-23-texte-3", "quete1-fin-23-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [50]}
                    ]
                }
            ]
        },
        "quete1-fin-4" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-4-texte-2", "quete1-fin-4-texte-3", "quete1-fin-4-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [100]}
                    ]
                }
            ]
        },
        "quete1-fin-5" : {
            "textes" : ["quete1-fin-texte-1", "quete1-fin-5-texte-2", "quete1-fin-5-texte-3",
                        "quete1-fin-5-texte-4", "quete1-fin-4-texte-4"],
            "actions" : [
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "terminer-quete", "params" : [200]}
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