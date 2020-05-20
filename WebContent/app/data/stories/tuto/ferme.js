'use strict';
define([], function() {
    var data = {
        /**
         * Ferme en direction du village
         */
        "reposVillage" : {
            "textes" : ["reposVillage-texte-1", "reposVillage-texte-2", "reposVillage-texte-3"],
            "actions" : [
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi"], "retourVillage2", "reposVillage2"]}
                    ]
                },
                {
                    "name" : "examiner-lieux", "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi"], "fermeExaminer2", "fermeExaminer"]}
                    ]
                }
            ]
        },
        "fermeExaminer" : {
            "textes" : ["fermeExaminer-texte-1", "fermeExaminer-texte-2", "fermeExaminer-texte-3"],
            "actions" : [
                {
                    "name" : "retirer-baton", "action" : [
                        {"key" : "random", "params" : [
                            "batonSaisieReussite1", "batonSaisieReussite2",
                            "batonSaisieEchec"
                        ]}
                    ]
                },
                {
                    "name" : "casser-baton", "action" : [
                        {"key" : "go", "params" : [ "batonPousse"]}
                    ]
                },
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "go", "params" : [ "reposVillage2"]}
                    ]
                }
            ]
        },
        "fermeExaminer2" : {
            "textes" : ["fermeExaminer-texte-1", "fermeExaminer2-texte-1", "fermeExaminer2-texte-2"],
            "actions" : [
                {
                    "name" : "entrer-grange", "action" : [
                        {"key" : "go", "params" : ["grange"]}
                    ]
                },
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "go", "params" : ["retourVillage2"]}
                    ]
                }
            ]
        },
        "batonSaisieReussite1" : {
            "textes" : ["batonSaisieReussite1-texte-1", "batonSaisieReussite1-texte-2", "batonSaisieReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "garder-baton", "action" : [
                        {"key" : "gain", "params" : ["baton" ]},
                        {"key" : "go", "params" : ["fermeGoule" ]}
                    ]
                },
                {
                    "name" : "let-him", "action" : [
                        {"key" : "go", "params" : ["fermeGoule"]}
                    ]
                }
            ]
        },
        "batonSaisieReussite2" : {
            "before" : function(histoire) {
                histoire.hurt(5);
            },
            "textes" : ["batonSaisieReussite1-texte-1", "batonSaisieReussite2-texte-1", "batonSaisieReussite1-texte-3",
                "batonSaisieReussite2-texte-2"],
            "actions" : [
                {
                    "name" : "garder-baton", "action" : [
                        {"key" : "gain", "params" : ["baton" ]},
                        {"key" : "go", "params" : ["fermeGoule" ]}
                    ]
                },
                {
                    "name" : "let-him", "action" : [
                        {"key" : "go", "params" : ["fermeGoule"]}
                    ]
                }
            ]
        },
        "batonSaisieEchec" : {
            "textes" : ["batonSaisieEchec-texte-1", "batonSaisieEchec-texte-2", "batonSaisieEchec-texte-3"],
            "actions" : [
                {
                    "name" : "casser-baton", "action" : [
                        {"key" : "go", "params" : ["batonPousse"]}
                    ]
                },
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "go", "params" : ["reposVillage2"]}
                    ]
                }
            ]
        },
        "batonPousse" : {
            "textes" : ["batonPousse-texte-1", "batonPousse-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        { "key" : "go", "params" : [ "fermeGoule" ]}
                    ]
                }
            ]
        },
        "fermeGoule" : {
            "textes" : ["fermeGoule-texte-1", "fermeGoule-texte-2", "fermeGoule-texte-3"],
            "actions" : [
                {
                    "name" : "lattaquer-f", "action" : [
                        {"key" : "fight", "params" : [[
                            "goule"
                        ], "fermeGoule2"]}
                    ]
                }
            ]
        },
        "fermeGoule2" : {
            "textes" : ["fermeGoule2-texte-1", "fermeGoule2-texte-2"],
            "actions" : [
                {
                    "name" : "fouiller", "action" : [
                        {"key" : "go", "params" : ["fouillerGoule"]}
                    ]
                },
                {
                    "name" : "entrer-grange", "action" : [
                        {"key" : "go", "params" : ["grange"]}
                    ]
                },
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "go", "params" : ["reposVillage2"]}
                    ]
                }
            ]
        },
        "fouillerGoule" : {
            "textes" : ["fouillerGoule-texte-1", "fouillerGoule-texte-2"],
            "actions" : [
                {
                    "name" : "entrer-grange", "action" : [
                        {"key" : "go", "params" : ["grange"]}
                    ]
                },
                {
                    "name" : "courir-village", "action" : [
                        {"key" : "go", "params" : ["reposVillage2"]}
                    ]
                }
            ]
        },
        "grange" : {
            "textes" : ["grange-texte-1", "grange-texte-2"],
            "actions" : [
                {
                    "name" : "fouiller-table", "action" : [
                        {"key" : "go", "params" : ["grangeFouilleTable"]}
                    ]
                },
                {
                    "name" : "examine-grange", "action" : [
                        {"key" : "go", "params" : ["grangeExamine"]}
                    ]
                },
                {
                    "name" : "courir-village",
                    "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi"], "retourVillage2", "reposVillage2"]}
                    ]
                }
            ]
        },
        "grangeFouilleTable" : {
            "textes" : ["grangeFouilleTable-texte-1", "grangeFouilleTable-texte-2"],
            "actions" : [
                {
                    "name" : "prendre-bougie", "action" : [
                        {"key" : "gain", "params" : ["bougie"]},
                        {"key" : "go", "params" : ["grangeFouilleTable2"]}
                    ]
                },
                {
                    "name" : "retour", "action" : [
                        {"key" : "go", "params" : ["grange"]}
                    ]
                }
            ]
        },
        "grangeFouilleTable2" : {
            "textes" : ["grangeFouilleTable2-texte-1", "grangeFouilleTable2-texte-2"],
            "actions" : [
                {
                    "name" : "examine-grange", "action" : [
                        {"key" : "go", "params" : ["grangeExamine"]}
                    ]
                },
                {
                    "name" : "courir-village",
                    "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi"], "retourVillage2", "reposVillage2"]}
                    ]
                }
            ]
        },
        "grangeExamine" : {
            "textes" : ["grangeExamine-texte-1", "grangeExamine-texte-2", "grange-texte-2"],
            "actions" : [
                {
                    "name" : "fouiller-table", "action" : [
                        {"key" : "hasItem", "params" : [["bougie"], "grangeFouilleTable3", "grangeFouilleTable"]}
                    ]
                },
                {
                    "name" : "courir-village",
                    "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi"], "retourVillage2", "reposVillage2"]}
                    ]
                }
            ]
        },
        "grangeFouilleTable3" : {
            "textes" : ["grangeFouilleTable-texte-1", "grangeFouilleTable3-texte-1"],
            "actions" : [
                {
                    "name" : "retour", "action" : [
                        {"key" : "go", "params" : ["grangeExamine"]}
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