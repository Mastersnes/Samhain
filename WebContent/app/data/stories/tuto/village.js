'use strict';
define([], function() {
    var data = {
        /**
         * Le village assiegee
         */
        "reposVillage2" : {
            "textes" : ["reposVillage2-texte-1", "reposVillage2-texte-2", "reposVillage2-texte-3"],
            "actions" : [
                {
                    "name" : "defendre-village", "action" : [
                        {"key" : "fight", "params" : [[
                            "goule", "goule"
                        ], "reposVillage3"]}
                    ]
                }
            ]
        },
        "reposVillage3" : {
            "textes" : ["reposVillage3-texte-1", "reposVillage3-texte-2", "reposVillage3-texte-3", "reposVillage3-texte-4",
                "reposVillage3-texte-5"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVillage4"]}
                    ]
                }
            ]
        },
        "reposVillage4" : {
            "textes" : ["reposVillage4-texte-1", "reposVillage4-texte-2", "reposVillage4-texte-3"],
            "actions" : [
                {
                    "name" : "aider", "action" : [
                        {"key" : "score", "params" : ["HelpVillage"]},
                        {"key" : "go", "params" : ["reposVillageAide"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        {"key" : "go", "params" : ["reposVillageRefus"]}
                    ]
                }
            ]
        },
        "reposVillageAide" : {
            "textes" : ["reposVillageAide-texte-1", "reposVillageAide-texte-2", "reposVillageAide-texte-3",
                "reposVillageAide-texte-4", "reposVillageAide-texte-5"],
            "actions" : [
                {
                    "name" : "prendre-arme", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer" ]},
                        {"key" : "score", "params" : ["VillageTreasure"]},
                        {"key" : "go", "params" : ["reposVillageAide1"]}
                    ]
                },
                {
                    "name" : "non-merci", "action" : [
                        {"key" : "go", "params" : ["reposVillageAide2"]}
                    ]
                }
            ]
        },
        "reposVillageAide1" : {
            "textes" : ["reposVillageAide1-texte-1", "reposVillageAide1-texte-2", "reposVillageAide1-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "heal", "params" : [100]},
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "reposVillageAide2" : {
            "textes" : ["reposVillageAide2-texte-1", "reposVillageAide2-texte-2", "reposVillageAide2-texte-3",
                "reposVillageAide2-texte-4", "reposVillageAide2-texte-5"],
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
        "reposVillageRefus" : {
            "textes" : ["reposVillageRefus-texte-1", "reposVillageRefus-texte-2", "reposVillageRefus-texte-3"],
            "actions" : [
                {
                    "name" : "venger-affront", "action" : [
                        {"key" : "score", "params" : ["VillageTraitor"]},
                        {"key" : "fight", "params" : [[
                            "garde", "garde"
                        ], "reposVillageTraitre" ]}
                    ]
                },
                {
                    "name" : "sen-aller", "action" : [
                        { "key" : "go", "params" : ["reposVillageRefus2"]}
                    ]
                }
            ]
        },
        "reposVillageTraitre" : {
            "textes" : ["reposVillageTraitre-texte-1", "reposVillageTraitre-texte-2", "reposVillageTraitre-texte-3",
                "reposVillageTraitre-texte-4"],
            "actions" : [
                {
                    "name" : "combattre", "action" : [
                        {"key" : "fight", "params" : [[
                            "villageois", "villageois", "villageois", "villageois"
                        ], "reposVillageTraitre2" ]}
                    ]
                },
                {
                    "name" : "fuir", "action" : [
                        {"key" : "go", "params" : ["reposVillageRefus2"]}
                    ]
                }
            ]
        },
        "reposVillageTraitre2" : {
            "textes" : ["reposVillageTraitre2-texte-1", "reposVillageTraitre2-texte-2", "reposVillageTraitre2-texte-3"],
            "actions" : [
                {
                    "name" : "fouiller-maison", "action" : [
                        {"key" : "random", "params" : [
                            "villageFouilleReussite1", "villageFouilleReussite2", "villageFouilleReussite3",
                            "villageFouilleEchec", "villageFouilleEchec2"
                        ]}
                    ]
                },
                {
                    "name" : "sen-aller", "action" : [
                        {"key" : "go", "params" : ["reposVillageTraitre3"]}
                    ]
                }
            ]
        },
        "reposVillageTraitre3" : {
            "textes" : ["reposVillageTraitre3-texte-1", "reposVillageTraitre3-texte-2", "reposVillageTraitre3-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe" ]}
                    ]
                }
            ]
        },
        "villageFouilleReussite1" : {
            "textes" : ["villageFouilleReussite1-texte-1", "villageFouilleReussite1-texte-2", "villageFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "prendre", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                }
            ]
        },
        "villageFouilleReussite2" : {
            "textes" : ["villageFouilleReussite2-texte-1", "villageFouilleReussite2-texte-2", "villageFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "prendre", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer"]},
                        {"key" : "score", "params" : ["VillageTreasure"]},
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                },
                {
                    "name" : "laisser", "action" : [
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                }
            ]
        },
        "villageFouilleReussite3" : {
            "textes" : ["villageFouilleReussite3-texte-1", "villageFouilleReussite3-texte-2", "villageFouilleReussite2-texte-2",
                "villageFouilleReussite3-texte-3", "villageFouilleReussite1-texte-2", "villageFouilleReussite1-texte-3"],
            "actions" : [
                {
                    "name" : "tout-prendre", "action" : [
                        {"key" : "gain", "params" : ["epee"]},
                        {"key" : "gain", "params" : ["bouclierFer"]},
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "score", "params" : ["VillageTreasure"]},
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                },
                {
                    "name" : "laisser-arme", "action" : [
                        {"key" : "gain", "params" : ["potionSante"]},
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                }
            ]
        },
        "villageFouilleEchec" : {
            "textes" : ["villageFouilleEchec-texte-1", "villageFouilleEchec-texte-2", "villageFouilleEchec-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["villageFouilleSuite"]}
                    ]
                }
            ]
        },
        "villageFouilleEchec2" : {
            "textes" : ["villageFouilleEchec2-texte-1", "villageFouilleEchec2-texte-2", "villageFouilleEchec2-texte-3"],
            "actions" : [
                {
                    "name" : "combattre", "action" : [
                        {"key" : "fight", "params" : [[
                            "grosseGoule"
                        ], "villageFouilleSuite"]}
                    ]
                }
            ]
        },
        "villageFouilleSuite" : {
            "textes" : ["villageFouilleSuite-texte-1", "villageFouilleSuite-texte-2", "villageFouilleSuite-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "reposVillageRefus2" : {
            "textes" : ["reposVillageRefus2-texte-1", "reposVillageRefus2-texte-2", "reposVillageRefus2-texte-3"],
            "actions" : [
                {
                    "name" : "suivre-trace", "action" : [
                        {"key" : "go", "params" : ["echoppe"]}
                    ]
                }
            ]
        },
        "retourVillage2" : {
            "textes" : ["reposVillage2-texte-1", "retourVillage2-texte-1", "retourVillage2-texte-2", "retourVillage2-texte-3"],
            "actions" : [
                {
                    "name" : "arretez", "action" : [
                        {"key" : "gain", "params" : ["helpRoi2"]},
                        {"key" : "go", "params" : ["retourVillageAideRoi"]}
                    ]
                },
                {
                    "name" : "aider-guarde", "action" : [
                        {"key" : "score", "params" : ["SpiderTraitor"]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "retourVillageAideGarde" ]}
                    ]
                }
            ]
        },
        "retourVillageAideRoi" : {
            "textes" : ["retourVillageAideRoi-texte-1", "retourVillageAideRoi-texte-2", "retourVillageAideRoi-texte-3",
                "retourVillageAideRoi-texte-4"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["retourVillageAideRoi2"]}
                    ]
                }
            ]
        },
        "retourVillageAideRoi2" : {
            "textes" : ["retourVillageAideRoi2-texte-1", "retourVillageAideRoi2-texte-2", "retourVillageAideRoi2-texte-3"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["retourVillageAideRoi3"]}
                    ]
                }
            ]
        },
        "retourVillageAideRoi3" : {
            "textes" : ["retourVillageAideRoi3-texte-1", "retourVillageAideRoi3-texte-2"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVillage4"]}
                    ]
                }
            ]
        },
        "retourVillageAideGarde" : {
            "textes" : ["retourVillageAideGarde-texte-1", "retourVillageAideGarde-texte-2", "reposVillage3-texte-3",
                "reposVillage3-texte-4", "reposVillage3-texte-5"],
            "actions" : [
                {
                    "name" : "suivant", "action" : [
                        {"key" : "go", "params" : ["reposVillage4"]}
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