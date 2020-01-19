'use strict';
define([], function() {
    var data = {
        /**
         * Quete Tutoriel - Seul dans la foret
         */
        "quete1-start" : {
            "music" : "story1.mp3",
            "textes" : ["quete1-start-texte-1", "quete1-start-texte-2", "quete1-start-texte-3", "quete1-start-texte-4"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "score", "params" : ["GameStart", 1]},
                        {"key" : "gainOneTime", "params" : ["pomme"]},
                        {"key" : "go", "params" : [ "repos2"]}
                    ]
                }
            ]
        },
        "repos2" : {
            "textes" : ["repos2-texte-1", "repos2-texte-2", "repos2-texte-3"],
            "actions" : [
                {
                    "name" : "combattre",
                    "action" : [
                        {"key" :"fight", "params" : [[
                            "araignee", "araignee", "araignee"
                        ], "reposCombat"]}
                     ]
                },
                {
                    "name" : "fuir",
                    "action" : [
                        {"key" : "hurt","params" : [ 10 ]},
                        {"key" : "score", "params" : ["Leak", 1]},
                        {"key" : "go", "params" : [ "reposVille" ]}
                    ]
                }
            ]
        },
        "reposCombat" : {
            "textes" : ["reposCombat-texte-1", "reposCombat-texte-2"],
            "actions" : [
                {
                    "name" : "examine-alentours",
                    "action" : [
                        {"key" : "go", "params" : [ "reposExamine" ]}
                    ]
                },
                {
                    "name" : "fouille-corps",
                    "action" : [
                        {"key" : "random", "params" : [
                            "reposFouilleFail", "reposFouilleSuccess"
                        ]}
                    ],
                    "appairIf" : [
                        {"key" : "hasNoItem", "params" : ["araigneeFouillees"]}
                    ],
                },
                {
                    "name" : "rentrer-ville",
                    "action" : [
                        { "key" : "go", "params" : [ "reposVille" ]}
                    ]
                }
            ]
        },
        "reposFouilleFail" : {
            "textes" : ["reposFouilleFail-texte-1", "reposFouilleFail-texte-2"],
            "actions" : [
                {
                    "name" : "retour",
                    "action" : [
                        { "key" : "gain", "params" : [ "araigneeFouillees" ]},
                        { "key" : "go", "params" : [ "reposCombat" ]}
                    ]
                }
            ]
        },
        "reposFouilleSuccess" : {
            "textes" : ["reposFouilleSuccess-texte-1", "reposFouilleSuccess-texte-2"],
            "actions" : [
                {
                    "name" : "retour",
                    "action" : [
                        { "key" : "gain", "params" : [ "pomme", "araigneeFouillees" ]},
                        { "key" : "go", "params" : [ "reposCombat" ]}
                    ]
                }
            ]
        },
        "reposExamine" : {
            "textes" : ["reposExamine-texte-1", "reposExamine-texte-2", "reposExamine-texte-3"],
            "actions" : [
                {
                    "name" : "en-avant",
                    "action" : [ { "key" : "go", "params" : [ "nid" ]} ]
                },
                {
                    "name" : "rentrer-ville",
                    "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
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