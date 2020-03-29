'use strict';
define([], function() {
    var data = {
        /**
        * Poste de garde classique
        **/
        "ville-garde-1" : {
            "textes" : ["ville-garde-texte-1", "ville-garde-texte-2"],
            "actions" : [
                {
                    "appairIf" : [
                        {"key" : "hasNoItem", "params" : ["AmiDesGardes"]},
                        {"key" : "hasItem", "params" : ["HorsLaLoi"]}
                    ],
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-combat-1"]}
                    ]
                },
                {
                    "appairIf" : [
                        {"key" : "hasNoItem", "params" : ["AmiDesGardes"]},
                        {"key" : "hasNoItem", "params" : ["HorsLaLoi"]}
                    ],
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-simple-1"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["AmiDesGardes"]}],
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-ami-1"]}
                    ]
                }
            ]
        },

        "ville-garde-simple-1" : {
            "textes" : ["ville-garde-simple-texte-1", "ville-garde-simple-texte-2"],
            "actions" : [
                {
                    "name" : "les-attaquer",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-simple-combat"]}
                    ]
                },
                {
                    "name" : "partir",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-simple-retour"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["LettreSobac"]}],
                    "name" : "montrer-lettre",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-simple-2"]}
                    ]
                },
            ]
        },

        "ville-garde-simple-2" : {
            "textes" : ["ville-garde-simple-2-texte-1", "ville-garde-simple-2-texte-2"],
            "actions" : [
                {
                    "name" : "demander-travail",
                    "action" : [
                        {"key" : "jeu-garde", "params" : [1, "ville-garde-jeu-echec", "ville-garde-jeu-retour"]}
                    ]
                }
            ]
        },

        "ville-garde-simple-combat" : {
            "textes" : ["ville-garde-simple-combat-texte-1", "ville-garde-simple-combat-texte-1"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "garde", "garde", "garde", "garde", "garde"
                        ], "ville-garde-combat-2"]},
                    ]
                }
            ]
        },

        "ville-garde-simple-retour" : {
            "textes" : ["ville-garde-simple-retour-texte-1", "ville-garde-simple-retour-texte-2"],
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
        * Poste de garde - Reussite du jeu
        **/
        "ville-garde-jeu-victoire" : {
            "textes" : ["ville-garde-jeu-victoire-texte-1", "ville-garde-jeu-victoire-texte-2",
                        "ville-garde-jeu-victoire-texte-3", "ville-garde-jeu-victoire-texte-4"],
            "actions" : [
                {
                    "name" : "trop-cher",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-garde-jeu-victoire-refus"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [3000]}],
                    "name" : "accepter",
                    "action" : [
                        {"key" : "jeu-garde", "params" : [2, "ville-garde-jeu-echec", "ville-garde-jeu-retour"]}
                    ]
                }
            ]
        },

        /**
        * Pose de garde - Reussite total du deal
        **/
        "ville-garde-jeu-victoire-2" : {
            "textes" : ["ville-garde-jeu-victoire-2-texte-1", "ville-garde-jeu-victoire-2-texte-2",
                        "ville-garde-jeu-victoire-2-texte-3"],
            "actions" : [
                {
                    "name" : "apprendre",
                    "action" : [
                        {"key" : "gain", "params" : ["taillade"]},
                        {"key" : "go", "params" : [ "ville-garde-jeu-victoire-3"]}
                    ]
                }
            ]
        },
        "ville-garde-jeu-victoire-3" : {
            "textes" : ["ville-garde-jeu-victoire-3-texte-1", "ville-garde-jeu-victoire-3-texte-2",
                        "ville-garde-jeu-victoire-3-texte-3", "ville-garde-jeu-victoire-3-texte-4"],
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
        * Refus du deal des gardes
        **/
        "ville-garde-jeu-victoire-refus" : {
            "textes" : ["ville-garde-jeu-victoire-refus-texte-1", "ville-garde-jeu-victoire-refus-texte-2",
                        "ville-garde-jeu-victoire-refus-texte-3"],
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
        * Poste de garde amis
        **/
        "ville-garde-ami-1" : {
            "textes" : ["ville-garde-ami-texte-1"],
            "actions" : [
                {
                    "name" : "travailler",
                    "action" : [
                        {"key" : "jeu-garde", "params" : [1, "ville-garde-jeu-echec", "ville-garde-jeu-retour"]}
                    ]
                }
            ]
        },

        "ville-garde-jeu-retour" : {
            "textes" : ["ville-garde-jeu-retour-texte-1"],
            "actions" : [
                {
                    "name" : "reessayer",
                    "action" : [
                        {"key" : "jeu-garde", "params" : [1, "ville-garde-jeu-echec", "ville-garde-jeu-retour"]}
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

        "ville-garde-jeu-echec" : {
            "textes" : ["ville-garde-jeu-echec-texte-1", "ville-garde-jeu-echec-texte-2"],
            "actions" : [
                {
                    "name" : "reessayer",
                    "action" : [
                        {"key" : "jeu-garde", "params" : [1, "ville-garde-jeu-echec", "ville-garde-jeu-retour"]}
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
        * Poste de garde - Hors la loi
        **/
        "ville-garde-combat-1" : {
            "textes" : ["ville-garde-combat-texte-1", "ville-garde-combat-texte-2", "ville-garde-combat-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" : "fight", "params" : [[
                            "garde", "garde", "garde", "garde", "garde"
                        ], "ville-garde-combat-2"]},
                    ]
                }
            ]
        },
        "ville-garde-combat-2" : {
            "textes" : ["ville-garde-combat-2-texte-1", "ville-garde-combat-2-texte-2", "ville-garde-combat-2-texte-3"],
            "actions" : [
                {
                    "name" : "se-servir",
                    "action" : [
                        {"key" : "gain", "params" : ["GardesVilleTues"]},
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },

        /**
        * Poste de garde tues
        **/
        "ville-garde-tues-1" : {
            "textes" : ["ville-garde-tues-texte-1"],
            "actions" : [
                {
                    "name" : "retour-ville",
                    "action" : [
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