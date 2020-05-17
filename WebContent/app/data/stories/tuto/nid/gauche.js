'use strict';
define([], function() {
    var data = {
        /**
         * Gauche - Coffre
         */
        "nidGauche" : {
            "textes" : ["nidGauche-texte-1", "nidGauche-texte-2"],
            "actions" : [
                {
                    "name" : "try-open", "action" : [
                        {"key" : "hasItem", "params" : [ ["dague"], "coffre", "coffreEchecSimple" ]}
                    ]
                },
                {
                    "name" : "retour-arriere", "action" : [
                        {"key" : "go", "params" : ["coffreRetourSimple"]}
                    ]
                }
            ]
        },
        "coffre" : {
            "textes" : ["coffre-texte-1", "coffre-texte-2", "coffre-texte-3"],
            "actions" : [
                {
                    "name" : "forcer-coffre", "action" : [
                        {"key" : "random", "params" : [
                            "coffreReussite1", "coffreReussite2",
                            "coffreEchec1", "coffreEchec2"
                        ]}
                    ]
                },
                {
                    "name" : "abandonner", "action" : [
                        {"key" : "go", "params" : ["coffreEchec12"]}
                    ]
                }
            ]
        },
        "coffreReussite1" : {
            "textes" : ["coffreReussite1-texte-1", "coffreReussite1-texte-2", "coffreReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "tout-prendre", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "gain", "params" : ["bouclierBois"]},
                        {"key" : "score", "params" : ["NestTreasure"]},
                        {"key" : "go", "params" : ["coffreReussite12"]}
                    ]
                }
            ]
        },
        "coffreReussite12" : {
            "textes" : ["coffreReussite12-texte-1", "coffreReussite12-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["nidDroite"]}
                    ]
                }
            ]
        },
        "coffreReussite2" : {
            "textes" : ["coffreReussite1-texte-1", "coffreReussite2-texte-1", "coffreReussite2-texte-2"],
            "actions" : [
                {
                    "name" : "tout-prendre", "action" : [
                        {"key" : "perte", "params" : ["dague"]},
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "gain", "params" : ["bouclierBois"]},
                        {"key" : "score", "params" : ["NestTreasure"]},
                        {"key" : "go", "params" : ["coffreReussite21"]}
                    ]
                }
            ]
        },
        "coffreReussite21" : {
            "textes" : ["coffreReussite21-texte-1","coffreReussite12-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["nidDroite"]}
                    ]
                }
            ]
        },
        "coffreEchec1" : {
            "textes" : ["coffreReussite1-texte-1", "coffreEchec1-texte-1"],
            "actions" : [
                {
                    "name" : "insister", "action" : [
                        { "key" : "random", "params" : [
                            "coffreReussite1", "coffreReussite2",
                            "coffreEchec2"
                        ]}
                    ]
                },
                {
                    "name" : "laisser-tomber", "action" : [
                        {"key" : "go", "params" : ["coffreEchec12"]}
                    ]
                }
            ]
        },
        "coffreEchec12" : {
            "textes" : ["coffreEchec12-texte-1", "coffreReussite12-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["nidDroite"]}
                    ]
                }
            ]
        },
        "coffreEchec2" : {
            "textes" : ["coffreReussite1-texte-1", "coffreEchec2-texte-1", "coffreEchec2-texte-2", "coffreEchec2-texte-3"],
            "actions" : [
                {
                    "name" : "pas-la-peine", "action" : [
                        {"key" : "perte", "params" : ["dague"]},
                        {"key" : "hurt", "params" : [5]},
                        {"key" : "go", "params" : ["coffreEchec21" ]}
                    ]
                }
            ]
        },
        "coffreEchec21" : {
            "textes" : ["coffreEchec21-texte-1", "coffreReussite12-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["nidDroite"]}
                    ]
                }
            ]
        },
        "coffreEchecSimple" : {
            "textes" : ["coffre-texte-1", "coffreEchecSimple-texte-1"],
            "actions" : [
                {
                    "name" : "tant-pis", "action" : [
                        {"key" : "go", "params" : ["coffreEchec12"]}
                    ]
                }
            ]
        },
        "coffreRetourSimple" : {
            "textes" : ["coffreRetourSimple-texte-1", "coffreReussite12-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        { "key" : "go", "params" : [ "nidDroite"]}
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