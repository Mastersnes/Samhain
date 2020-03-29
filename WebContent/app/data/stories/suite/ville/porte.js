'use strict';
define([], function() {
    var data = {
        /**
        * Le garde protege la porte
        **/
        "ville-porte-start" : {
            "textes" : ["ville-porte-start-texte-1", "ville-porte-start-texte-2", "ville-porte-start-texte-3",
                        "ville-porte-start-texte-4"],
            "actions" : [
                {
                    "name" : "demander-entrer",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-1"]}
                    ]
                },
                {
                    "name" : "lattaquer-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-attaquer-1"]}
                    ]
                },
                {
                    "name" : "linsulter-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-insulter-1"]}
                    ]
                },
                {
                    "name" : "contourner",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-porte-contourner-reussite-1"
                            //TODO : Bouchon, a retirer !!!
//                            , "ville-porte-contourner-echec-1", "ville-porte-contourner-echec-1",
//                            "ville-porte-contourner-echec-1", "ville-porte-contourner-echec-1",
//                            "ville-porte-contourner-echec-1", "ville-porte-contourner-echec-1"
                        ]}
                    ]
                }
            ]
        },

        /**
        * Demander à entrer
        **/
        "ville-porte-demander-1" : {
            "textes" : ["ville-porte-demander-texte-1", "ville-porte-demander-texte-2", "ville-porte-demander-texte-3",
                        "ville-porte-demander-texte-4", "ville-porte-demander-texte-5"],
            "actions" : [
                {
                    "name" : "forcer-passage",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-attaquer-1"]}
                    ]
                },
                {
                    "name" : "pourquoi",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-2"]}
                    ]
                },
            ]
        },
        "ville-porte-demander-2" : {
            "textes" : ["ville-porte-demander-2-texte-1", "ville-porte-demander-2-texte-2", "",
                        "ville-porte-demander-2-texte-3", "ville-porte-demander-2-texte-4"],
            "actions" : [
                {
                    "name" : "refuser",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-refus"]}
                    ]
                },
                {
                    "name" : "quel-recompense",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-3"]}
                    ]
                },
            ]
        },
        "ville-porte-demander-3" : {
            "textes" : ["ville-porte-demander-3-texte-1", "ville-porte-demander-3-texte-2",
                        "ville-porte-demander-3-texte-3", "ville-porte-demander-3-texte-4"],
            "actions" : [
                {
                    "name" : "refuser",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-refus"]}
                    ]
                },
                {
                    "name" : "accepter",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-4"]}
                    ]
                }
            ]
        },
        "ville-porte-demander-4" : {
            "textes" : ["ville-porte-demander-4-texte-1", "ville-porte-demander-4-texte-2",
                        "ville-porte-demander-4-texte-3"],
            "actions" : [
                {
                    "name" : "en-route",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-refus"]}
                    ]
                }
            ]
        },

        /**
        * Refus de la mission du garde
        **/
        "ville-porte-demander-refus" : {
            "before" : function(histoire) {
                histoire.gain("RefusQueteGardeVille", true);
            },
            "textes" : ["ville-porte-demander-2-texte-1", "ville-porte-demander-2-texte-2", "",
                        "ville-porte-demander-2-texte-3", "ville-porte-demander-2-texte-4"],
            "actions" : [
                {
                    "name" : "lattaquer-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-attaquer-1"]}
                    ]
                },
                {
                    "name" : "linsulter-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-insulter-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["EchecContournementVille"]}],
                    "name" : "contourner",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-porte-contourner-reussite-1", "ville-porte-contourner-echec-1",
                            "ville-porte-contourner-echec-1", "ville-porte-contourner-echec-1"
                        ]}
                    ]
                }
            ]
        },

        /**
        * Attaquer le garde
        **/
        "ville-porte-attaquer-1" : {
            "textes" : ["ville-porte-attaquer-texte-1", "ville-porte-attaquer-texte-2", "ville-porte-attaquer-texte-3"],
            "actions" : [
                {
                    "name" : "se-battre",
                    "action" : [
                        {"key" : "gain", "params" : ["HorsLaLoi"]},
                        {"key" : "fight", "params" : [[
                            "garde", "garde", "garde", "garde"
                        ], "ville-porte-attaquer-2"]},
                    ]
                }
            ]
        },
        "ville-porte-attaquer-2" : {
            "textes" : ["ville-porte-attaquer-2-texte-1", "ville-porte-attaquer-2-texte-2",
                        "ville-porte-attaquer-2-texte-3"],
            "actions" : [
                {
                    "name" : "entrer-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-insulter-3"]}
                    ]
                },
            ]
        },

        /**
        * Insulter le garde
        **/
        "ville-porte-insulter-1" : {
            "textes" : ["ville-porte-insulter-texte-1", "ville-porte-insulter-texte-2", "ville-porte-insulter-texte-3"],
            "actions" : [
                {
                    "name" : "se-battre",
                    "action" : [
                        {"key" : "gain", "params" : ["HorsLaLoi"]},
                        {"key" : "fight", "params" : [[
                            {"name": "garde", "suffixe":"feroce"}
                        ], "ville-porte-insulter-2"]},
                    ]
                }
            ]
        },
        "ville-porte-insulter-2" : {
            "textes" : ["ville-porte-insulter-2-texte-1", "ville-porte-insulter-2-texte-2"],
            "actions" : [
                {
                    "name" : "entrer-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-insulter-3"]}
                    ]
                },
            ]
        },
        "ville-porte-insulter-3" : {
            "textes" : ["ville-porte-insulter-3-texte-1", "ville-porte-insulter-3-texte-2",
                        "ville-porte-insulter-3-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "garde", "garde"
                        ], "ville-porte-insulter-4"]},
                    ]
                },
            ]
        },
        "ville-porte-insulter-4" : {
            "textes" : ["ville-porte-insulter-4-texte-1", "ville-porte-insulter-4-texte-2"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-1"]}
                    ]
                },
            ]
        },

        /**
        * Contournement de la porte
        **/
        "ville-porte-contourner-reussite-1" : {
            "textes" : ["ville-porte-contourner-reussite-texte-1", "ville-porte-contourner-reussite-texte-2",
                        "ville-porte-contourner-reussite-texte-3"],
            "actions" : [
                {
                    "name" : "entrer-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-1"]}
                    ]
                }
            ]
        },
        "ville-porte-contourner-echec-1" : {
            "before" : function(histoire) {
                histoire.gain("EchecContournementVille", true);
            },
            "textes" : ["ville-porte-contourner-echec-texte-1", "ville-porte-contourner-echec-texte-2",
                        "ville-porte-contourner-echec-texte-3", "ville-porte-contourner-echec-texte-4"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["RefusQueteGardeVille"]}],
                    "name" : "demander-entrer",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-demander-1"]}
                    ]
                },
                {
                    "name" : "lattaquer-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-attaquer-1"]}
                    ]
                },
                {
                    "name" : "linsulter-m",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-insulter-1"]}
                    ]
                }
            ]
        },

        /**
        * Retour apres la quête des bandits
        **/
        "ville-porte-retour-1" : {
            "textes" : ["ville-porte-retour-texte-1", "ville-porte-retour-texte-2"],
            "actions" : [
                {
                    "name" : "montrer-anneau",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-retour-2"]}
                    ]
                }
            ]
        },
        "ville-porte-retour-2" : {
            "textes" : ["ville-porte-retour-2-texte-1", "ville-porte-retour-2-texte-2", "ville-porte-retour-2-texte-3",
                        "ville-porte-retour-2-texte-4"],
            "actions" : [
                {
                    "name" : "demander-recompense",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-porte-retour-3"]}
                    ]
                }
            ]
        },
        "ville-porte-retour-3" : {
            "textes" : ["ville-porte-retour-3-texte-1", "ville-porte-retour-3-texte-2", "ville-porte-retour-3-texte-3",
                        "ville-porte-retour-3-texte-4", "ville-porte-retour-3-texte-5"],
            "actions" : [
                {
                    "name" : "entrer-ville",
                    "action" : [
                        {"key" : "gain", "params" : [ "LettreSobac"]},
                        {"key" : "go", "params" : [ "ville-entree-1"]}
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