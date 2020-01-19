'use strict';
define([], function() {
    var data = {
        /**
         * Droite - Roi araignee
         */
        "nidDroite" : {
            "textes" : ["nidDroite-texte-1", "nidDroite-texte-2", "nidDroite-texte-3"],
            "actions" : [
                {
                    "name" : "avancer", "action" : [
                        {"key" : "hasItem", "params" : [["potionSante"], "roiAraigneePotion", "roiAraignee"]}
                    ]
                }
            ]
        },
        "roiAraigneePotion" : {
            "textes" : ["roiAraigneePotion-texte-1", "roiAraigneePotion-texte-2", "roiAraigneePotion-texte-3"],
            "actions" : [
                {
                    "name" : "attaquer", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "stop", "action" : [
                        {"key" : "go", "params" : ["roiAraigneePotion2"]}
                    ]
                }
            ]
        },
        "roiAraigneePotion2" : {
            "textes" : ["roiAraigneePotion2-texte-1", "roiAraigneePotion2-texte-2", "roiAraigneePotion2-texte-3"],
            "actions" : [
                {
                    "name" : "lamort", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "unami", "action" : [
                        {"key" : "go", "params" : ["roiAraigneePotionAmi"]}
                    ]
                },
                {
                    "name" : "quietesvous", "action" : [
                        {"key" : "go", "params" : ["roiAraigneePotionQui"]}
                    ]
                }
            ]
        },
        "roiAraigneePotionQui" : {
            "textes" : ["roiAraigneePotionQui-texte-1", "roiAraigneePotionQui-texte-2", "roiAraigneePotionQui-texte-3",
                "roiAraigneePotionQui-texte-4"],
            "actions" : [
                {
                    "name" : "donner-potion", "action" : [
                        { "key" : "perte", "params" : [ "potionSante"]},
                        {"key" : "score", "params" : ["HelpSpider", 1]},
                        { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        { "key" : "go", "params" : [ "roiAraigneeRefus"]}
                    ]
                }
            ]
        },
        "roiAraigneePotionAmi" : {
            "textes" : ["roiAraigneePotionAmi-texte-1", "roiAraigneePotionAmi-texte-2"],
            "actions" : [
                {
                    "name" : "donner-potion", "action" : [
                        {"key" : "perte", "params" : ["potionSante"]},
                        {"key" : "score", "params" : ["HelpSpider", 1]},
                        {"key" : "go", "params" : ["roiAraigneeGuerit"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeRefus"]}
                    ]
                }
            ]
        },
        "roiAraignee" : {
            "textes" : ["roiAraigneePotion-texte-1", "roiAraigneePotion-texte-2", "roiAraigneePotion-texte-3"],
            "actions" : [
                {
                    "name" : "attaquer", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [ [
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "stop", "action" : [
                        { "key" : "hasItem", "params" : [["fromage"], "roiAraigneeFromage", "roiAraigneeRien"]}
                    ]
                }
            ]
        },
        "roiAraigneeFromage" : {
            "textes" : ["roiAraigneePotion2-texte-1", "roiAraigneePotion2-texte-2", "roiAraigneePotion2-texte-3"],
            "actions" : [
                {
                    "name" : "lamort", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "unami", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeFromageAmi"]}
                    ]
                },
                {
                    "name" : "quietesvous", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeFromageQui"]}
                    ]
                }
            ]
        },
        "roiAraigneeFromageQui" : {
            "textes" : ["roiAraigneePotionQui-texte-1", "roiAraigneePotionQui-texte-2", "roiAraigneePotionQui-texte-3",
                "roiAraigneePotionQui-texte-4"],
            "actions" : [
                {
                    "name" : "donner-fromage", "action" : [
                        {"key" : "perte", "params" : ["fromage"]},
                        {"key" : "score", "params" : ["HelpSpider", 1]},
                        {"key" : "go", "params" : ["roiAraigneeGuerit"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeRefus"]}
                    ]
                }
            ]
        },
        "roiAraigneeFromageAmi" : {
            "textes" : ["roiAraigneePotionAmi-texte-1", "roiAraigneePotionAmi-texte-2"],
            "actions" : [
                {
                    "name" : "donner-fromage", "action" : [
                        {"key" : "perte", "params" : ["fromage"]},
                        {"key" : "score", "params" : ["HelpSpider", 1]},
                        {"key" : "go", "params" : ["roiAraigneeGuerit"]}
                    ]
                },
                {
                    "name" : "refuser", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeRefus"]}
                    ]
                }
            ]
        },
        "roiAraigneeRien" : {
            "textes" : ["roiAraigneePotion2-texte-1", "roiAraigneePotion2-texte-2", "roiAraigneePotion2-texte-3"],
            "actions" : [
                {
                    "name" : "lamort", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [ [
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "quietesvous", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeQui"]}
                    ]
                }
            ]
        },
        "roiAraigneeQui" : {
            "textes" : ["roiAraigneePotionQui-texte-1", "roiAraigneePotionQui-texte-2", "roiAraigneePotionQui-texte-3",
                "roiAraigneePotionQui-texte-4"],
            "actions" : [
                {
                    "name" : "jairien", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeRefus"]}
                    ]
                }
            ]
        },
        "roiAraigneeGuerit" : {
            "textes" : ["roiAraigneeGuerit-texte-1", "roiAraigneeGuerit-texte-2", "roiAraigneeGuerit-texte-3",
                "roiAraigneeGuerit-texte-4"],
            "actions" : [
                {
                    "name" : "qui-fait-ca", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeGuerit2"]}
                    ]
                }
            ]
        },
        "roiAraigneeGuerit2" : {
            "textes" : ["roiAraigneeGuerit2-texte-1", "roiAraigneeGuerit2-texte-2", "roiAraigneeGuerit2-texte-3"],
            "actions" : [
                {
                    "name" : "comment", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeGuerit3"]}
                    ]
                }
            ]
        },
        "roiAraigneeGuerit3" : {
            "textes" : ["roiAraigneeGuerit3-texte-1", "roiAraigneeGuerit3-texte-2", "roiAraigneeGuerit3-texte-3"],
            "actions" : [
                {
                    "name" : "ou-aller-vous", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeGuerit4"]}
                    ]
                },
                {
                    "name" : "laisser-partir", "action" : [
                        {"key" : "go", "params" : [ "roiAraigneeParti"]}
                    ]
                }
            ]
        },
        "roiAraigneeGuerit4" : {
            "textes" : ["roiAraigneeGuerit4-texte-1", "roiAraigneeGuerit4-texte-2", "roiAraigneeGuerit4-texte-3",
                "roiAraigneeGuerit4-texte-4"],
            "actions" : [
                {
                    "name" : "fouiller-lieux", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeFouilleGrotte"]}
                    ]
                },
                {
                    "name" : "aller-ville", "action" : [
                        {"key" : "gain", "params" : ["helpRoi"]},
                        {"key" : "go", "params" : ["reposVille"]}
                    ]
                }
            ]
        },
        "roiAraigneeParti" : {
            "textes" : ["roiAraigneeGuerit4-texte-4", "roiAraigneeParti-texte-1"],
            "actions" : [
                {
                    "name" : "fouiller-lieux", "action" : [
                        {"key" : "go", "params" : ["roiAraigneeFouilleGrotte"]}
                    ]
                },
                {
                    "name" : "aller-ville", "action" : [
                        {"key" : "gain", "params" : ["helpRoi"]},
                        {"key" : "go", "params" : ["reposVille"]}
                    ]
                }
            ]
        },
        "roiAraigneeFouilleGrotte" : {
            "textes" : ["roiAraigneeFouilleGrotte-texte-1", "roiAraigneeFouilleGrotte-texte-2"],
            "actions" : [
                {
                    "name" : "aller-ville", "action" : [
                        {"key" : "gain", "params" : ["helpRoi"]},
                        {"key" : "go", "params" : ["reposVille"]}
                    ]
                }
            ]
        },
        "roiAraigneeRefus" : {
            "textes" : ["roiAraigneeRefus-texte-1", "roiAraigneeRefus-texte-2", "roiAraigneeRefus-texte-3"],
            "actions" : [
                {
                    "name" : "attaquer", "action" : [
                        {"key" : "score", "params" : ["KillSpider", 1]},
                        {"key" : "fight", "params" : [[
                            {"name":"roiAraignee", "suffixe":"blesse"}
                        ], "roiAraigneeAgonie"]}
                    ]
                },
                {
                    "name" : "let-him", "action" : [
                        {"key" : "go", "params" : ["reposVille"]}
                    ]
                }
            ]
        },
        "roiAraigneeAgonie" : {
            "textes" : ["roiAraigneeAgonie-texte-1", "roiAraigneeAgonie-texte-2", "roiAraigneeAgonie-texte-3",
                "roiAraigneeAgonie-texte-4", "roiAraigneeAgonie-texte-5"],
            "actions" : [
                {
                    "name" : "fouiller", "action" : [
                        {"key" : "gain", "params" : ["venin"]},
                        {"key" : "go", "params" : ["roiAraigneeAgonieFouille"]}
                    ]
                },
                {
                    "name" : "rentrer-ville", "action" : [
                        {"key" : "go", "params" : ["reposVille"]}
                    ]
                }
            ]
        },
        "roiAraigneeAgonieFouille" : {
            "textes" : ["roiAraigneeAgonieFouille-texte-1", "roiAraigneeAgonieFouille-texte-2",
                "roiAraigneeAgonieFouille-texte-3"],
            "actions" : [
                {
                    "name" : "aller-ville", "action" : [
                        {"key" : "go", "params" : ["reposVille"]}
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