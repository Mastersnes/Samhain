'use strict';
define([], function() {
    var data = {
        /**
        * La quete des poulets
        * Début
        **/
        "quete1-debut" : {
            "textes" : ["quete1-debut-texte-1", "quete1-debut-texte-2", "quete1-debut-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-2"]}
                    ]
                }
            ]
        },
        "quete1-debut-2" : {
            "textes" : ["quete1-debut-2-texte-1", "quete1-debut-2-texte-2", "quete1-debut-2-texte-3"],
            "actions" : [
                {
                    "name" : "chercher-indice",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice"]}
                    ]
                },
                {
                    "name" : "questionner-fermier",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-fermier"]}
                    ]
                }
            ]
        },

        /**
        * Question au fermier
        **/
        "quete1-debut-fermier" : {
            "textes" : ["quete1-debut-fermier-texte-1", "quete1-debut-fermier-texte-2",
                        "quete1-debut-fermier-texte-3"],
            "actions" : [
                {
                    "name" : "la-quete",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-fermier-2"]}
                    ]
                }
            ]
        },
        "quete1-debut-fermier-2" : {
            "textes" : ["quete1-debut-fermier-2-texte-1", "quete1-debut-fermier-2-texte-2",
                        "quete1-debut-fermier-2-texte-3", "quete1-debut-fermier-2-texte-4"],
            "actions" : [
                {
                    "name" : "linterroger",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-fermier-3"]}
                    ]
                }
            ]
        },
        "quete1-debut-fermier-3" : {
            "textes" : ["quete1-debut-fermier-3-texte-1", "quete1-debut-fermier-3-texte-2",
                        "quete1-debut-fermier-3-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-fermier-4"]}
                    ]
                }
            ]
        },
        "quete1-debut-fermier-4" : {
            "textes" : ["quete1-debut-fermier-4-texte-1", "quete1-debut-fermier-4-texte-2",
                        "quete1-debut-fermier-4-texte-3", "quete1-debut-fermier-4-texte-4"],
            "actions" : [
                {
                    "name" : "chercher-indice",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice"]}
                    ]
                },
                {
                    "name" : "aller-champs",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ"]}
                    ]
                }
            ]
        },

        /**
        * Debut - Chercher des indices
        **/
        "quete1-debut-indice" : {
            "textes" : ["quete1-debut-indice-texte-1", "quete1-debut-indice-texte-2"],
            "actions" : [
                {
                    "name" : "fouiller",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-2"]}
                    ]
                }
            ]
        },
        "quete1-debut-indice-2" : {
            "textes" : ["quete1-debut-indice-2-texte-1", "quete1-debut-indice-2-texte-2",
                        "quete1-debut-indice-2-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-3"]}
                    ]
                }
            ]
        },
        "quete1-debut-indice-3" : {
            "textes" : ["quete1-debut-indice-3-texte-1", "quete1-debut-indice-3-texte-2",
                        "quete1-debut-indice-3-texte-3"],
            "actions" : [
                {
                    "name" : "left",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-gauche"]}
                    ]
                },
                {
                    "name" : "right",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-droite"]}
                    ]
                }
            ]
        },

        /**
        * Chercher des indices - Gauche
        **/
        "quete1-debut-indice-gauche" : {
            "textes" : ["quete1-debut-indice-gauche-texte-1", "quete1-debut-indice-gauche-texte-2"],
            "actions" : [
                {
                    "name" : "sapprocher",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-gauche-2"]}
                    ]
                },
                {
                    "name" : "revenir-pas",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-droite"]}
                    ]
                }
            ]
        },
        "quete1-debut-indice-gauche-2" : {
            "textes" : ["quete1-debut-indice-gauche-2-texte-1", "quete1-debut-indice-gauche-2-texte-2",
                        "quete1-debut-indice-gauche-2-texte-3"],
            "actions" : [
                {
                    "name" : "lattraper",
                    "action" : [
                        {"key" : "gain", "params" : ["poulet"]},
                        {"key" : "step-quete", "params" : [1]},
                        {"key" : "go", "params" : ["quete1-debut-indice-gauche-3"]}
                    ]
                }
            ]
        },
        "quete1-debut-indice-gauche-3" : {
            "textes" : ["quete1-debut-indice-gauche-3-texte-1", "quete1-debut-indice-gauche-3-texte-2",
                        "quete1-debut-indice-gauche-3-texte-3"],
            "actions" : [
                {
                    "name" : "go-right",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-debut-indice-droite"]}
                    ]
                }
            ]
        },

        /**
        * Chercher des indices - Droite
        **/
        "quete1-debut-indice-droite" : {
            "textes" : ["quete1-debut-indice-droite-texte-1", "quete1-champ-texte-2"],
            "actions" : [
                {
                    "name" : "interroger-paysans",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ-2"]}
                    ]
                }
            ]
        },

        /**
        * En direction des champs
        **/
        "quete1-champ" : {
            "textes" : ["quete1-champ-texte-1", "quete1-champ-texte-2"],
            "actions" : [
                {
                    "name" : "interroger-paysans",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ-2"]}
                    ]
                }
            ]
        },
        "quete1-champ-2" : {
            "textes" : ["quete1-champ-2-texte-1", "quete1-champ-2-texte-2", "quete1-champ-2-texte-3"],
            "actions" : [
                {
                    "name" : "tousser",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ-3"]}
                    ]
                }
            ]
        },
        "quete1-champ-3" : {
            "textes" : ["quete1-champ-3-texte-1", "quete1-champ-3-texte-2", "quete1-champ-3-texte-3"],
            "actions" : [
                {
                    "name" : "les-poulets",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ-4"]}
                    ]
                }
            ]
        },
        "quete1-champ-4" : {
            "textes" : ["quete1-champ-4-texte-1", "quete1-champ-4-texte-2",
                        "quete1-champ-4-texte-3", "quete1-champ-4-texte-4"],
            "actions" : [
                {
                    "name" : "menacer",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-champ-menacer"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [10]}],
                    "name" : "soudoyer-10",
                    "action" : [
                        {"key" : "depense", "params" : [10]},
                        {"key" : "go", "params" : ["quete1-champ-soudoyer"]}
                    ]
                },
                {
                    "name" : "partir",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-abandon"]}
                    ]
                }
            ]
        },

        /**
        * Abandon dans les champs
        **/
        "quete1-abandon" : {
            "textes" : ["quete1-abandon-texte-1"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["poulet"]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-0"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 1]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-1"]}
                    ]
                }
            ]
        },

        /**
        * Champs - Menace des paysans
        **/
        "quete1-champ-menacer" : {
            "textes" : ["quete1-champ-menacer-texte-1", "quete1-champ-menacer-texte-2",
                        "quete1-champ-menacer-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" :"fight", "params" : [[
                            "villageois", "villageois", "villageois"
                        ], "quete1-champ-menacer-2", "ville-entree-echec-quete"]}
                    ]
                }
            ]
        },
        "quete1-champ-menacer-2" : {
            "textes" : ["quete1-champ-menacer-2-texte-1", "quete1-champ-menacer-2-texte-2",
                        "quete1-champ-menacer-2-texte-3", "quete1-champ-menacer-2-texte-4"],
            "actions" : [
                {
                    "name" : "suivre-direction",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-berge"]}
                    ]
                }
            ]
        },

        /**
        *  Champs - Soudoiement des paysans
        **/
        "quete1-champ-soudoyer" : {
            "textes" : ["quete1-champ-soudoyer-texte-1", "quete1-champ-soudoyer-texte-2",
                        "quete1-champ-soudoyer-texte-3", "quete1-champ-soudoyer-texte-4",
                        "quete1-champ-soudoyer-texte-5"],
            "actions" : [
                {
                    "name" : "suivre-direction",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-berge"]}
                    ]
                }
            ]
        },

        /**
        *  Berge
        **/
        "quete1-berge" : {
            "textes" : ["quete1-berge-texte-1", "quete1-berge-texte-2"],
            "actions" : [
                {
                    "name" : "regarde-leau",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-berge-2"]}
                    ]
                },
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville"]}
                    ]
                }
            ]
        },
        "quete1-berge-2" : {
            "textes" : ["quete1-berge-2-texte-1", "quete1-berge-2-texte-2"],
            "actions" : [
                {
                    "name" : "lattraper",
                    "action" : [
                        {"key" :"gain", "params" : ["poulet"]},
                        {"key" : "step-quete", "params" : [1]},
                        {"key" :"go", "params" : ["quete1-berge-3"]}
                    ]
                }
            ]
        },
        "quete1-berge-3" : {
            "textes" : ["quete1-berge-3-texte-1", "quete1-berge-3-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville"]}
                    ]
                }
            ]
        },

        /**
        * Arrivé en ville
        **/
        "quete1-ville" : {
            "textes" : ["quete1-ville-texte-1", "quete1-ville-texte-2",
                        "quete1-ville-texte-3"],
            "actions" : [
                {
                    "name" : "sapprocher",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-2"]}
                    ]
                }
            ]
        },
        "quete1-ville-2" : {
            "textes" : ["quete1-ville-2-texte-1", "quete1-ville-2-texte-2",
                        "quete1-ville-2-texte-3"],
            "actions" : [
                {
                    "name" : "chercher",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-3"]}
                    ]
                },
                {
                    "name" : "abandonner",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-abandon"]}
                    ]
                }
            ]
        },
        "quete1-ville-3" : {
            "textes" : ["quete1-ville-3-texte-1", "quete1-ville-3-texte-2",
                        "quete1-ville-3-texte-3"],
            "actions" : [
                {
                    "name" : "monter",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-4"]}
                    ]
                },
                {
                    "name" : "abandonner",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-abandon"]}
                    ]
                }
            ]
        },
        "quete1-ville-4" : {
            "textes" : ["quete1-ville-4-texte-1", "quete1-ville-4-texte-2",
                        "quete1-ville-4-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-5"]}
                    ]
                }
            ]
        },
        "quete1-ville-5" : {
            "textes" : ["quete1-ville-5-texte-1", "quete1-ville-5-texte-2",
                        "quete1-ville-5-texte-3", "quete1-ville-5-texte-4"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-ville-6"]}
                    ]
                }
            ]
        },
        "quete1-ville-6" : {
            "textes" : ["quete1-ville-6-texte-1", "quete1-ville-6-texte-2",
                        "quete1-ville-6-texte-3", "quete1-ville-6-texte-4"],
            "actions" : [
                {
                    "name" : "tomber",
                    "action" : [
                        {"key" :"hurt", "params" : [20]},
                        {"key" : "sound", "params" : [ "hurt/hurt2" ]},
                        {"key" :"go", "params" : ["quete1-ville-7"]}
                    ]
                }
            ]
        },
        "quete1-ville-7" : {
            "textes" : ["quete1-ville-7-texte-1", "quete1-ville-7-texte-2",
                        "quete1-ville-7-texte-3", "quete1-ville-7-texte-4"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" :"gain", "params" : ["poulet"]},
                        {"key" : "step-quete", "params" : [1]},
                        {"key" :"go", "params" : ["quete1-ville-8"]}
                    ]
                }
            ]
        },
        "quete1-ville-8" : {
            "textes" : ["quete1-ville-8-texte-1", "quete1-ville-8-texte-2",
                        "quete1-ville-8-texte-3", "quete1-ville-8-texte-4"],
            "actions" : [
                {
                    "name" : "aller-taverne",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne"]}
                    ]
                }
            ]
        },

        /**
        * Abandon du clochet
        **/
        "quete1-ville-abandon" : {
            "textes" : ["quete1-ville-abandon-texte-1", "quete1-ville-abandon-texte-2"],
            "actions" : [
                {
                    "name" : "aller-taverne",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne"]}
                    ]
                }
            ]
        },

        /**
        * Taverne
        **/
        "quete1-taverne" : {
            "textes" : ["quete1-taverne-texte-1", "quete1-taverne-texte-2"],
            "actions" : [
                {
                    "name" : "entrer",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne-2"]}
                    ]
                }
            ]
        },
        "quete1-taverne-2" : {
            "textes" : ["quete1-taverne-2-texte-1", "quete1-taverne-2-texte-2",
                        "quete1-taverne-2-texte-3"],
            "actions" : [
                {
                    "name" : "questionner-tavernier",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne-3"]}
                    ]
                },
                {
                    "name" : "prendre-verre",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne-verre"]}
                    ]
                }
            ]
        },
        "quete1-taverne-3" : {
            "textes" : ["quete1-taverne-3-texte-1", "quete1-taverne-3-texte-2",
                        "quete1-taverne-3-texte-3", "quete1-taverne-3-texte-4"],
            "actions" : [
                {
                    "name" : "visiter-cuisine",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-taverne-4"]}
                    ]
                }
            ]
        },
        "quete1-taverne-4" : {
            "textes" : ["quete1-taverne-4-texte-1", "quete1-taverne-4-texte-2",
                        "quete1-taverne-4-texte-3", "quete1-taverne-4-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" :"fight", "params" : [[
                            {"name" : "villageois", "suffixe":"glouton"}
                        ], "quete1-taverne-5", "ville-entree-echec-quete"]}
                    ]
                }
            ]
        },
        "quete1-taverne-5" : {
            "textes" : ["quete1-taverne-5-texte-1", "quete1-taverne-5-texte-2"],
            "actions" : [
                {
                    "name" : "rentrer",
                    "action" : [
                        {"key" :"gain", "params" : ["poulet"]},
                        {"key" : "step-quete", "params" : [1]},
                        {"key" :"go", "params" : ["quete1-retour"]}
                    ]
                }
            ]
        },

        /**
        * Taverne - Prendre un verre
        **/
        "quete1-taverne-verre" : {
            "textes" : ["quete1-taverne-verre-texte-1", "quete1-taverne-verre-texte-2",
                        "quete1-taverne-verre-texte-3"],
            "actions" : [
                {
                    "name" : "rentrer",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-retour"]}
                    ]
                }
            ]
        },

        /**
        * Retour à la ferme
        **/
        "quete1-retour" : {
            "textes" : ["quete1-retour-texte-1", "quete1-retour-texte-2",
                        "quete1-retour-texte-3"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-retour-2"]}
                    ]
                }
            ]
        },
        "quete1-retour-2" : {
            "textes" : ["quete1-retour-2-texte-1", "quete1-retour-2-texte-2",
                        "quete1-retour-2-texte-3", "quete1-retour-2-texte-4"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-retour-3"]}
                    ]
                }
            ]
        },
        "quete1-retour-3" : {
            "textes" : ["quete1-retour-3-texte-1", "quete1-retour-3-texte-2",
                        "quete1-retour-3-texte-3"],
            "actions" : [
                {
                    "name" : "sauver-poule",
                    "action" : [
                        {"key" :"hurt", "params" : [20]},
                        {"key" : "sound", "params" : [ "hurt/hurt3" ]},
                        {"key" :"gain", "params" : ["poulet"]},
                        {"key" : "step-quete", "params" : [1]},
                        {"key" :"go", "params" : ["quete1-retour-4"]}
                    ]
                },
                {
                    "name" : "mettre-abris",
                    "action" : [
                        {"key" :"go", "params" : ["quete1-retour-abandon"]}
                    ]
                }
            ]
        },
        "quete1-retour-4" : {
            "textes" : ["quete1-retour-4-texte-1", "quete1-retour-4-texte-2",
                        "quete1-retour-4-texte-3", "quete1-retour-4-texte-4"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["poulet"]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-0"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 1]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 2]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-2"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 3]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-34"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 4]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-34"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 5]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-5"]}
                    ]
                }
            ]
        },

        /**
        * Abandon lors de l'assaut des vaches
        **/
        "quete1-retour-abandon" : {
            "textes" : ["quete1-retour-abandon-texte-1", "quete1-retour-4-texte-2",
                        "quete1-retour-abandon-texte-3", "quete1-retour-abandon-texte-4"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["poulet"]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-0"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 1]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 2]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-2"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 3]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-34"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 4]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-34"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItemNb", "params" : ["poulet", 5]}],
                    "name" : "faire-rapport",
                    "action" : [
                        {"key" : "go", "params" : ["quete1-fin-5"]}
                    ]
                }
            ]
        },

        /**
        * Fins
        **/
        "quete1-fin-0" : {
            "textes" : ["quete1-fin-0-texte-1", "quete1-fin-0-texte-2",
                        "quete1-fin-0-texte-3", "quete1-fin-0-texte-4",
                        "quete1-fin-0-texte-5"],
            "actions" : [
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "end-quete", "params" : [0]}
                    ]
                }
            ]
        },
        "quete1-fin-1" : {
            "textes" : ["quete1-fin-0-texte-1", "quete1-fin-0-texte-2",
                        "quete1-fin-1-texte-3", "quete1-fin-1-texte-4",
                        "quete1-fin-1-texte-5"],
            "actions" : [
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "end-quete", "params" : []}
                    ]
                }
            ]
        },
        "quete1-fin-2" : {
            "textes" : ["quete1-fin-0-texte-1", "quete1-fin-0-texte-2",
                        "quete1-fin-2-texte-3", "quete1-fin-1-texte-4",
                        "quete1-fin-1-texte-5"],
            "actions" : [
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "end-quete", "params" : []}
                    ]
                }
            ]
        },
        "quete1-fin-34" : {
            "textes" : ["quete1-fin-34-texte-1", "quete1-fin-34-texte-2",
                        "quete1-fin-34-texte-3", "quete1-fin-34-texte-4",
                        "quete1-fin-34-texte-5"],
            "actions" : [
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "end-quete", "params" : [100]}
                    ]
                }
            ]
        },
        "quete1-fin-5" : {
            "textes" : ["quete1-fin-5-texte-1", "quete1-fin-34-texte-2",
                        "quete1-fin-5-texte-3", "quete1-fin-5-texte-4",
                        "quete1-fin-5-texte-5", "quete1-fin-34-texte-5"],
            "actions" : [
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        {"key" : "score", "params" : ["ChickenQuestComplete"]},
                        {"key" : "end-quete", "params" : [200]}
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