'use strict';
define([], function() {
    var data = {
        /**
        * Ruelle classique
        **/
        "ville-ruelle-simple-1" : {
            "textes" : ["ville-ruelle-simple-1-texte-1", "ville-ruelle-simple-1-texte-2"],
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
        * Ruelle taverne
        **/
        "ville-ruelle-taverne" : {
            "textes" : ["ville-ruelle-taverne-texte-1", "ville-ruelle-taverne-texte-2", "ville-ruelle-taverne-texte-3"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasItem", "params" : ["VisiteTaverne"]}],
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-2"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasNoItem", "params" : ["VisiteTaverne"]}],
                    "name" : "agitation",
                    "action" : [
                        {"key" : "gain", "params" : [ "VisiteTaverne"]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-agitation"]}
                    ]
                },
                {
                    "name" : "partir",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                },
            ]
        },

        "ville-ruelle-taverne-agitation" : {
            "textes" : ["ville-ruelle-taverne-agitation-texte-1", "ville-ruelle-taverne-agitation-texte-2",
            "ville-ruelle-taverne-agitation-texte-3", "ville-ruelle-taverne-agitation-texte-4"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [100]}],
                    "name" : "castagner",
                    "action" : [
                        {"key" : "depense", "params" : [100]},
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-castagne-1"]}
                    ]
                },
                {
                    "name" : "non-merci",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-refus"]}
                    ]
                },
            ]
        },

        "ville-ruelle-taverne-refus" : {
            "textes" : ["ville-ruelle-taverne-refus-texte-1", "ville-ruelle-taverne-refus-texte-2"],
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
        * Retour à la taverne apres une premiere visite
        **/
        "ville-ruelle-taverne-2" : {
            "textes" : ["ville-ruelle-taverne-2-texte-1", "ville-ruelle-taverne-2-texte-2"],
            "actions" : [
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [100]}],
                    "name" : "castagner",
                    "action" : [
                        {"key" : "depense", "params" : [100]},
                        {"key" : "hasNoItem", "params" : [["CastagneSave1", "CastagneVictoire"], "ville-ruelle-taverne-castagne-1"]},
                        {"key" : "hasItem", "params" : [["CastagneSave1"], "ville-ruelle-taverne-castagne-6"]},
                        {"key" : "hasItem", "params" : [["CastagneVictoire"], "ville-ruelle-taverne-castagne-random"]}
                    ]
                },
                {
                    "name" : "non-merci",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-taverne-refus"]}
                    ]
                },
            ]
        },

        /**
        * Ruelle alchimiste
        **/
        "ville-ruelle-alchimiste" : {
            "textes" : ["ville-ruelle-alchimiste-texte-1", "ville-ruelle-alchimiste-texte-2",
                        "ville-ruelle-alchimiste-texte-3"],
            "actions" : [
                {
                    "name" : "acheter",
                    "action" : [
                        {"key" : "boutique", "params" : [[
                             "potionSante", "potionMana", "elixir", "venin", "antidote"
                        ], "ville-ruelle-alchimiste-achat", "ville-ruelle-alchimiste-retour"]}
                    ]
                },
                {
                    "name" : "partir",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },
        "ville-ruelle-alchimiste-achat" : {
            "textes" : ["ville-ruelle-alchimiste-achat-texte-1"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },
        "ville-ruelle-alchimiste-retour" : {
            "textes" : ["ville-ruelle-alchimiste-retour-texte-1"],
            "actions" : [
                {
                    "name" : "continue",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-entree-retour-centre"]}
                    ]
                }
            ]
        },

        /**
        * Ruelle voleur
        **/
        "ville-ruelle-voleur-1" : {
            "textes" : ["ville-ruelle-voleur-1-texte-1", "ville-ruelle-voleur-1-texte-2",
                        "ville-ruelle-voleur-1-texte-3", "ville-ruelle-voleur-1-texte-4"],
            "actions" : [
                {
                    "name" : "refuser",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-voleur-refus"]}
                    ]
                },
                {
                    "appairIf" : [{"key" : "hasGold", "params" : [3000]}],
                    "name" : "accepter",
                    "action" : [
                        {"key" : "go", "params" : [ "ville-ruelle-voleur-accept"]}
                    ]
                }
            ]
        },

        /**
        * Acceptation de la proposition
        **/
        "ville-ruelle-voleur-accept" : {
            "textes" : ["ville-ruelle-voleur-accept-texte-1", "ville-ruelle-voleur-accept-texte-2",
                        "ville-ruelle-voleur-accept-texte-3", "ville-ruelle-voleur-accept-texte-4"],
            "actions" : [
                {
                    "name" : "apprendre",
                    "action" : [
                        {"key" : "depense", "params" : [3000]},
                        {"key" : "score", "params" : [ "AcceptDealVoleur"]},
                        {"key" : "gain", "params" : [ "voler"]},
                        {"key" : "go", "params" : [ "ville-ruelle-voleur-accept-2"]}
                    ]
                }
            ]
        },
        "ville-ruelle-voleur-accept-2" : {
            "textes" : ["ville-ruelle-voleur-accept-2-texte-1", "ville-ruelle-voleur-accept-2-texte-2",
                        "ville-ruelle-voleur-accept-2-texte-3"],
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
        * Refus de la proposition
        **/
        "ville-ruelle-voleur-refus" : {
            "textes" : ["ville-ruelle-voleur-refus-texte-1", "ville-ruelle-voleur-refus-texte-2",
                        "ville-ruelle-voleur-refus-texte-3"],
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
        }
    };

    return {
        get : function(key) {
            return data[key];
        }
    };
});