'use strict';
define([], function() {
    var data = {
        /**
         * La ville assiegee
         */
        "reposVille2" : {
            "textes" : ["reposVille2-texte-1", "reposVille2-texte-2", "reposVille2-texte-3"],
            "actions" : [
                {
                    "name" : "defendre-ville", "action" : [
                        {"key" : "fight", "params" : [[
                            "goule", "goule"
                        ], "reposVille3"]}
                    ]
                }
            ]
        },
        "reposVille3" : {
            "textes" : ["reposVille3-texte-1", "reposVille3-texte-2", "reposVille3-texte-3", "reposVille3-texte-4",
                "reposVille3-texte-5"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVille4"]}
                    ]
                }
            ]
        },
        "reposVille4" : {
            "textes" : ["reposVille4-texte-1", "reposVille4-texte-2", "reposVille4-texte-3"],
            "actions" : [
                {
                    "name" : "aider", "action" : [
                        {"key" : "score", "params" : ["HelpTown", 1]},
                        {"key" : "go", "params" : ["reposVilleAide"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        {"key" : "go", "params" : ["reposVilleRefus"]}
                    ]
                }
            ]
        },
        "reposVilleAide" : {
            "textes" : ["reposVilleAide-texte-1", "reposVilleAide-texte-2", "reposVilleAide-texte-3",
                "reposVilleAide-texte-4", "reposVilleAide-texte-5"],
            "actions" : [
                {
                    "name" : "prendre-arme", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer" ]},
                        {"key" : "score", "params" : ["Treasure", 1]},
                        {"key" : "go", "params" : ["reposVilleAide1"]}
                    ]
                },
                {
                    "name" : "non-merci", "action" : [
                        {"key" : "go", "params" : ["reposVilleAide2"]}
                    ]
                }
            ]
        },
        "reposVilleAide1" : {
            "textes" : ["reposVilleAide1-texte-1", "reposVilleAide1-texte-2", "reposVilleAide1-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "heal", "params" : [100]},
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "reposVilleAide2" : {
            "textes" : ["reposVilleAide2-texte-1", "reposVilleAide2-texte-2", "reposVilleAide2-texte-3",
                "reposVilleAide2-texte-4", "reposVilleAide2-texte-5"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "heal", "params" : [100]},
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "reposVilleRefus" : {
            "textes" : ["reposVilleRefus-texte-1", "reposVilleRefus-texte-2", "reposVilleRefus-texte-3"],
            "actions" : [
                {
                    "name" : "venger-affront", "action" : [
                        {"key" : "score", "params" : ["Traitor", 1]},
                        {"key" : "fight", "params" : [[
                            "garde", "garde"
                        ], "reposVilleTraitre" ]}
                    ]
                },
                {
                    "name" : "sen-aller", "action" : [
                        { "key" : "go", "params" : ["reposVilleRefus2"]}
                    ]
                }
            ]
        },
        "reposVilleTraitre" : {
            "textes" : ["reposVilleTraitre-texte-1", "reposVilleTraitre-texte-2", "reposVilleTraitre-texte-3",
                "reposVilleTraitre-texte-4"],
            "actions" : [
                {
                    "name" : "combattre", "action" : [
                        {"key" : "fight", "params" : [[
                            "villageois", "villageois", "villageois", "villageois"
                        ], "reposVilleTraitre2" ]}
                    ]
                },
                {
                    "name" : "fuir", "action" : [
                        {"key" : "score", "params" : ["Leak", 1]},
                        {"key" : "go", "params" : ["reposVilleRefus2"]}
                    ]
                }
            ]
        },
        "reposVilleTraitre2" : {
            "textes" : ["reposVilleTraitre2-texte-1", "reposVilleTraitre2-texte-2", "reposVilleTraitre2-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller-maison", "action" : [
                        {"key" : "random", "params" : [
                            "villeFouilleReussite1", "villeFouilleReussite2", "villeFouilleReussite3",
                            "villeFouilleEchec", "villeFouilleEchec2"
                        ]}
                    ]
                },
                {
                    "name" : "sen-aller", "action" : [
                        {"key" : "go", "params" : ["reposVilleTraitre3"]}
                    ]
                }
            ]
        },
        "reposVilleTraitre3" : {
            "textes" : ["reposVilleTraitre3-texte-1", "reposVilleTraitre3-texte-2", "reposVilleTraitre3-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe" ]}
                    ]
                }
            ]
        },
        "villeFouilleReussite1" : {
            "textes" : ["villeFouilleReussite1-texte-1", "villeFouilleReussite1-texte-2", "villeFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "prendre", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                }
            ]
        },
        "villeFouilleReussite2" : {
            "textes" : ["villeFouilleReussite2-texte-1", "villeFouilleReussite2-texte-2", "villeFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "prendre", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer"]},
                        {"key" : "score", "params" : ["Treasure", 1]},
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                },
                {
                    "name" : "laisser", "action" : [
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                }
            ]
        },
        "villeFouilleReussite3" : {
            "textes" : ["villeFouilleReussite3-texte-1", "villeFouilleReussite3-texte-2", "villeFouilleReussite2-texte-2",
                "villeFouilleReussite3-texte-3", "villeFouilleReussite1-texte-2", "villeFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "tout-prendre", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer"]},
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "score", "params" : ["Treasure", 1]},
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                },
                {
                    "name" : "laisser-arme", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                }
            ]
        },
        "villeFouilleEchec" : {
            "textes" : ["villeFouilleEchec-texte-1", "villeFouilleEchec-texte-2", "villeFouilleEchec-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["villeFouilleSuite"]}
                    ]
                }
            ]
        },
        "villeFouilleEchec2" : {
            "textes" : ["villeFouilleEchec2-texte-1", "villeFouilleEchec2-texte-2", "villeFouilleEchec2-texte-3"],
            "actions" : [
                {
                    "name" : "combattre", "action" : [
                        {"key" : "fight", "params" : [[
                            "grosseGoule"
                        ], "villeFouilleSuite"]}
                    ]
                }
            ]
        },
        "villeFouilleSuite" : {
            "textes" : ["villeFouilleSuite-texte-1", "villeFouilleSuite-texte-2", "villeFouilleSuite-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "reposVilleRefus2" : {
            "textes" : ["reposVilleRefus2-texte-1", "reposVilleRefus2-texte-2", "reposVilleRefus2-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "retourVille2" : {
            "textes" : ["reposVille2-texte-1", "retourVille2-texte-1", "retourVille2-texte-2", "retourVille2-texte-3"],
            "actions" : [
                {
                    "name" : "arreter", "action" : [
                        {"key" : "gain", "params" : ["helpRoi2"]},
                        {"key" : "go", "params" : ["retourVilleAideRoi"]}
                    ]
                },
                {
                    "name" : "help-guard", "action" : [
                        {"key" : "score", "params" : ["TraitorSpider", 1]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "retourVilleAideGarde" ]}
                    ]
                }
            ]
        },
        "retourVilleAideRoi" : {
            "textes" : ["retourVilleAideRoi-texte-1", "retourVilleAideRoi-texte-2", "retourVilleAideRoi-texte-3",
                "retourVilleAideRoi-texte-4"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["retourVilleAideRoi2"]}
                    ]
                }
            ]
        },
        "retourVilleAideRoi2" : {
            "textes" : ["retourVilleAideRoi2-texte-1", "retourVilleAideRoi2-texte-2", "retourVilleAideRoi2-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["retourVilleAideRoi3"]}
                    ]
                }
            ]
        },
        "retourVilleAideRoi3" : {
            "textes" : ["retourVilleAideRoi3-texte-1", "retourVilleAideRoi3-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVille4"]}
                    ]
                }
            ]
        },
        "retourVilleAideGarde" : {
            "textes" : ["retourVilleAideGarde-texte-1", "retourVilleAideGarde-texte-2", "reposVille3-texte-3",
                "reposVille3-texte-4", "reposVille3-texte-5"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVille4"]}
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