'use strict';
define([], function() {
    var data = {
        /**
         * Nid d'araignee
         */
        "nid" : {
            "textes" : ["nid-texte-1", "nid-texte-2", "nid-texte-3"],
            "actions" : [
                {
                    "name" : "examine-sol", "action" : [
                        {"key" : "go", "params" : ["nidExamine"]}
                    ]
                },
                {
                    "name" : "examine-alentours", "action" : [
                        {"key" : "go", "params" : ["nid2"]}
                    ]
                }
            ]
        },
        "nidExamine" : {
            "textes" : ["nidExamine-texte-1", "nidExamine-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "gain", "params" : [ "dague" ]},
                        {"key" : "sound", "params" : [ "items/punch" ]},
                        {"key" : "hurt", "params" : [ 5 ]},
                        {"key" : "go", "params" : [ "nidDague" ]}
                    ]
                }
            ]
        },
        "nidDague" : {
            "textes" : ["nidDague-texte-1", "nidDague-texte-2", "nidDague-texte-3", "nidDague-texte-4"],
            "actions" : [
                {
                    "name" : "se-battre", "action" : [
                        {"key" : "fight", "params" : [[
                            "bandit"
                        ], "nid3" ]}
                    ]
                },
                {
                    "name" : "fuir-grotte", "action" : [
                        {"key" : "score", "params" : ["Leak"]},
                        {"key" : "go", "params" : [ "nid4" ]}
                    ]
                }
            ]
        },
        "nid2" : {
            "textes" : ["nid2-texte-1", "nid2-texte-2", "nid2-texte-3"],
            "actions" : [
                {
                    "name" : "se-battre", "action" : [
                        {"key" : "fight", "params" : [[
                            "bandit"
                        ], "nid3"]}
                    ]
                },
                {
                    "name" : "fuir-grotte", "action" : [
                        {"key" : "score", "params" : ["Leak"]},
                        { "key" : "go", "params" : [ "nid4" ]}
                    ]
                }
            ]
        },
        "nid3" : {
            "textes" : ["nid3-texte-1", "nid3-texte-2"],
            "actions" : [
                {
                    "name" : "fouille-corp", "action" : [
                        {"key" : "hasItem", "params" : [["dague"], "nid3Fouille", "nid3FouilleDague"]}
                    ]
                },
                {
                    "name" : "continue", "action" : [
                        {"key" : "go", "params" : ["nid4"]}
                    ]
                }
            ]
        },
        "nid3Fouille" : {
            "textes" : ["nid3Fouille-texte-1", "nid3Fouille-texte-2"],
            "actions" : [
                {
                    "name" : "mange-continue", "action" : [
                        {"key" : "sound", "params" : ["items/eat"]},
                        {"key" : "heal", "params" : [ 40 ]},
                        {"key" : "go", "params" : ["nid4"]}
                    ]
                },
                {
                    "name" : "continue", "action" : [
                        {"key" : "gain", "params" : ["fromage"]},
                        {"key" : "go", "params" : ["nid4"]}
                    ]
                }
            ]
        },
        "nid3FouilleDague" : {
            "textes" : ["nid3Fouille-texte-1", "nid3Fouille-texte-2"],
            "actions" : [
                {
                    "name" : "mange-continue", "action" : [
                        {"key" : "sound", "params" : ["items/eat"]},
                        {"key" : "heal", "params" : [ 40 ]},
                        {"key" : "random", "params" : [
                            "nid3TrouveDague", "nid4"
                        ]}
                    ]
                },
                {
                    "name" : "continue", "action" : [
                        {"key" : "gain", "params" : ["fromage"]},
                        {"key" : "go", "params" : ["nid3TrouveDague", "nid4"]}
                    ]
                }
            ]
        },
        "nid3TrouveDague" : {
            "textes" : ["nid3TrouveDague-texte-1", "nid3TrouveDague-texte-2", "nid3TrouveDague-texte-3"],
            "actions" : [
                {
                    "name" : "continue", "action" : [
                        {"key" : "gain", "params" : ["dague"]},
                        {"key" : "go", "params" : ["nid4"]}
                    ]
                }
            ]
        },
        "nid4" : {
            "textes" : ["nid4-texte-1", "nid4-texte-2", "nid4-texte-3"],
            "actions" : [
                {
                    "name" : "go-left", "action" : [
                        {"key" : "go", "params" : ["nidGauche"]}
                    ]
                },
                {
                    "name" : "go-right", "action" : [
                        {"key" : "go", "params" : ["nidDroite"]}
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