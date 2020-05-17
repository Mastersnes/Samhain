'use strict';
define([], function() {
    var data = {
        "ville-entree-1" : {
            "textes" : ["ville-entree-1-texte-1", "ville-entree-1-texte-2", "ville-entree-1-texte-3"],
            "actions" : [
                {
                    "name" : "panneau-quete",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-panneau-quete"]}
                    ]
                },
                {
                    "name" : "boutiques",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-boutiques"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-tues-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-voleur-1"
                        ]}
                    ]
                },
                {
                    "name" : "palais-justice",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-palais-justice"]}
                    ]
                }
            ]
        },

        /**
        * Retour au centre de la ville
        **/
        "ville-entree-retour-centre" : {
            "textes" : ["ville-entree-retour-centre-texte-1", "ville-entree-retour-centre-texte-2"],
            "actions" : [
                {
                    "name" : "panneau-quete",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-panneau-quete"]}
                    ]
                },
                {
                    "name" : "boutiques",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-boutiques"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-tues-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-voleur-1"
                        ]}
                    ]
                },
                {
                    "name" : "palais-justice",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-palais-justice"]}
                    ]
                }
            ]
        },

        /**
        * Panneau des quêtes
        **/
        "ville-entree-panneau-quete" : {
            "textes" : ["ville-entree-panneau-quete-texte-1", "ville-entree-panneau-quete-texte-2",
                        "ville-entree-panneau-quete-texte-3"],
            "actions" : [
                {
                    "name" : "affichage-quetes",
                    "action" : [
                        {"key" : "quetes", "params" : []}
                    ]
                }
            ]
        },
        "ville-entree-panneau-quete-retour" : {
            "textes" : ["ville-entree-panneau-quete-retour-texte-1", "ville-entree-panneau-quete-retour-texte-2"],
            "actions" : [
                {
                    "name" : "panneau-quete",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-panneau-quete"]}
                    ]
                },
                {
                    "name" : "boutiques",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-boutiques"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-tues-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-voleur-1"
                        ]}
                    ]
                },
                {
                    "name" : "palais-justice",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-palais-justice"]}
                    ]
                }
            ]
        },
        "ville-entree-retour-quete" : {
            "textes" : ["ville-entree-retour-quete-texte-1"],
            "actions" : [
                {
                    "name" : "panneau-quete",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-panneau-quete"]}
                    ]
                },
                {
                    "name" : "boutiques",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-boutiques"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-tues-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-voleur-1"
                        ]}
                    ]
                },
                {
                    "name" : "palais-justice",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-palais-justice"]}
                    ]
                }
            ]
        },
        "ville-entree-echec-quete" : {
            "textes" : ["ville-entree-echec-quete-texte-1", "ville-entree-echec-quete-texte-2",
                        "ville-entree-echec-quete-texte-3", "ville-entree-echec-quete-texte-4"],
            "actions" : [
                {
                    "name" : "panneau-quete",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-panneau-quete"]}
                    ]
                },
                {
                    "name" : "boutiques",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-boutiques"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["GardesVilleTues"]}],
                    "name" : "poste-garde",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-tues-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["voler"]}],
                    "name" : "ruelle-sombre",
                    "action" : [
                        {"key" : "random", "params" : [
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-simple-1",
                            "ville-ruelle-simple-1", "ville-ruelle-voleur-1"
                        ]}
                    ]
                },
                {
                    "name" : "palais-justice",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-palais-justice"]}
                    ]
                }
            ]
        },

        /**
        * Boutiques
        **/
        "ville-entree-boutiques" : {
            "textes" : ["ville-entree-boutiques-texte-1", "ville-entree-boutiques-texte-2"],
            "actions" : [
                {
                    "name" : "acheter",
                    "action" : [
                        {"key" : "boutique", "params" : [[
                             "pomme", "fromage", "baton", "bouclierBois", "guerison", "soin", "bouleFeu"
                        ], "ville-entree-boutiques-achat", "ville-entree-boutiques-retour"]}
                    ]
                }
            ]
        },
        "ville-entree-boutiques-achat" : {
            "textes" : ["ville-entree-boutiques-achat-texte-1"],
            "actions" : [
                {
                    "name" : "retour-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },
        "ville-entree-boutiques-retour" : {
            "textes" : ["ville-entree-boutiques-retour-texte-1", "ville-entree-boutiques-retour-texte-2"],
            "actions" : [
                {
                    "name" : "retour-ville",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },

        /**
        * Palais de justice
        **/
        "ville-entree-palais-justice" : {
            "textes" : ["ville-entree-palais-justice-texte-1", "ville-entree-palais-justice-texte-2",
                        "ville-entree-palais-justice-texte-3", "ville-entree-palais-justice-texte-4"],
            "actions" : [
                {
                    "name" : "retour",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
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