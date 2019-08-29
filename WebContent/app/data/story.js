'use strict';
define(["jquery", "app/utils/utils"],
		function($, Utils) {
			var data = {
					/**
					 * Gagne
					 */
				"gagne" : {
					"textes" : [ 
					    "gagne-texte-1",
					    "followUs",
					    "followUs2",
					    "followUs3",
					    "retry"
					 ],
					"actions" : [ {
						"name" : "restart-action",
						"action" : [ {
							"key" : "restart",
							"params" : null
						} ]
					} ]
				},
				/**
				 * Perdu
				 */
				"perdu" : {
					"textes" : [ 
					            "perdu-texte-1", 
					            "followUs",
					            "followUs2",
					            "followUs3",
					            "retry"
					            ],
					            "actions" : [ {
					            	"name" : "retry-action",
					            	"action" : [ {
					            		"key" : "restart",
					            		"params" : null
					            	} ]
					            } ]
				},
				/**
				 * Quete Tutoriel - Seul dans la foret
				 */
				"start" : {
					"textes" : [
							"start-texte-1",
							"start-texte-2",
							"start-texte-3",
							"start-texte-4"
							],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						                                {"key" : "score", "params" : ["GameStart", 1]},
						                                {"key" : "gain", "params" : ["pomme"]},
						                                 {"key" : "go", "params" : [ "repos2" ]}
						                                 ]
					} ]
				},
				"repos2" : {
					"textes" : [ 
							"repos2-texte-1",
							"repos2-texte-2",
							"repos2-texte-3",
					        ],
					"actions" : [ {
						"name" : "combattre", "action" : [ 
						    { "key" : "fight", "params" : [ ["araignee", "araignee", "araignee"], "reposCombat" ]}
						 ]
					}, {
						"name" : "fuir", 
						"action" : [ 
						         { "key" : "hurt","params" : [ 10 ]},
						         {"key" : "score", "params" : ["Leak", 1]},
						         { "key" : "go", "params" : [ "reposVille" ]}
						]
					} ]
				},
				"reposCombat" : {
					"textes" : [ 
							"reposCombat-texte-1",
							"reposCombat-texte-2"
					        ],
					"actions" : [ {
						"name" : "examine-alentours", "action" : [ { "key" : "go", "params" : [ "reposExamine" ]} ]
					}, {
						"name" : "fouille-corps", "action" : [ { "key" : "random", "params" : [ "reposFouilleFail", "reposFouilleSuccess" ]} ],
						"appairIf" : [{"key" : "hasNoItem", "params" : ["araigneeFouillees"]}],
					}, {
						"name" : "rentrer-ville", "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
					} ]
				},
				"reposFouilleFail" : {
					"textes" : [
"reposFouilleFail-texte-1",
"reposFouilleFail-texte-2",
					        ],
					"actions" : [ {
						"name" : "retour",
						"action" : [
						    { "key" : "gain", "params" : [ "araigneeFouillees" ]},
						    { "key" : "go", "params" : [ "reposCombat" ]}
						]
					} ]
				},
				"reposFouilleSuccess" : {
                    "textes" : [
"reposFouilleSuccess-texte-1",
"reposFouilleSuccess-texte-2",
                            ],
                    "actions" : [ {
                        "name" : "retour",
                        "action" : [
                            { "key" : "gain", "params" : [ "pomme", "araigneeFouillees" ]},
                            { "key" : "go", "params" : [ "reposCombat" ]}
                        ]
                    } ]
                },
				"reposExamine" : {
					"textes" : [ 
"reposExamine-texte-1",
"reposExamine-texte-2",
"reposExamine-texte-3"
					        ],
					"actions" : [ {
						"name" : "en-avant", "action" : [ { "key" : "go", "params" : [ "nid" ]} ]
					}, {
						"name" : "rentrer-ville", "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
					} ]
				},
				/**
				 * Nid d'araignee
				 */
				"nid" : {
					"textes" : [ 
				            "nid-texte-1",
					        "nid-texte-2",
					        "nid-texte-3"
					        ],
					"actions" : [ {
						"name" : "examine-sol", "action" : [ { "key" : "go", "params" : [ "nidExamine" ]} ]
					}, {
						"name" : "examine-alentours", "action" : [ { "key" : "go", "params" : [ "nid2" ]} ]
					} ]
				},
				"nidExamine" : {
					"textes" : [ 
"nidExamine-texte-1",
"nidExamine-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "gain", "params" : [ "dague" ]}, 
						      { "key" : "sound", "params" : [ "punch" ]},
						      { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "go", "params" : [ "nidDague" ]}
						]
					} ]
				},
				"nidDague" : {
					"textes" : [ 
"nidDague-texte-1",
"nidDague-texte-2",
"nidDague-texte-3",
"nidDague-texte-4"
					        ],
					"actions" : [ {
						"name" : "se-battre", "action" : [ 
						      { "key" : "fight", "params" : [ ["bandit"], "nid3" ]}
						]
					}, {
						"name" : "fuir-grotte", "action" : [ 
						                                    {"key" : "score", "params" : ["Leak", 1]},
						                                     { "key" : "go", "params" : [ "nid4" ]}
						                                     ]
					} ]
				},
				"nid2" : {
					"textes" : [ 
"nid2-texte-1",
"nid2-texte-2",
"nid2-texte-3"
					        ],
					"actions" : [ {
						"name" : "se-battre", "action" : [ 
						      { "key" : "fight", "params" : [ ["bandit"], "nid3" ]}
						]
					}, {
						"name" : "fuir-grotte", "action" : [ 
						                                    {"key" : "score", "params" : ["Leak", 1]},
						                                     { "key" : "go", "params" : [ "nid4" ]}
						                                     ]
					} ]
				},
				"nid3" : {
					"textes" : [ 
"nid3-texte-1",
"nid3-texte-2"
					        ],
					"actions" : [ {
						"name" : "fouille-corp", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["dague"], "nid3Fouille", "nid3FouilleDague" ]}
						]
					}, {
						"name" : "continue", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
					} ]
				},
				"nid3Fouille" : {
					"textes" : [ 
"nid3Fouille-texte-1",
"nid3Fouille-texte-2"
					        ],
					"actions" : [ {
						"name" : "mange-continue", "action" : [ 
                              { "key" : "sound", "params" : [ "eat" ]},
						      { "key" : "heal", "params" : [ 20 ]},
						      { "key" : "go", "params" : [ "nid4" ]}
						]
					}, {
						"name" : "continue", "action" : [ 
  						      { "key" : "gain", "params" : [ "fromage" ]},
  						      { "key" : "go", "params" : [ "nid4" ]}
  						]
  					} ]
				},
				"nid3FouilleDague" : {
					"textes" : [ 
"nid3Fouille-texte-1",
"nid3Fouille-texte-2"
					        ],
					"actions" : [ {
						"name" : "mange-continue", "action" : [ 
						      { "key" : "sound", "params" : [ "eat" ]},
						      { "key" : "heal", "params" : [ 20 ]},
						      { "key" : "random", "params" : [ "nid3TrouveDague", "nid4" ]}
						]
					}, {
						"name" : "continue", "action" : [ 
  						      { "key" : "gain", "params" : [ "fromage" ]},
  						      { "key" : "go", "params" : [ "nid3TrouveDague", "nid4" ]}
  						]
  					} ]
				},
				"nid3TrouveDague" : {
					"textes" : [ 
"nid3TrouveDague-texte-1",
"nid3TrouveDague-texte-2",
"nid3TrouveDague-texte-3"
					        ],
					"actions" : [ {
						"name" : "continue", "action" : [ 
						      { "key" : "gain", "params" : [ "dague" ]},
						      { "key" : "go", "params" : [ "nid4" ]}
						]
					}]
				},
				"nid4" : {
					"textes" : [ 
"nid4-texte-1",
"nid4-texte-2",
"nid4-texte-3"
					        ],
					"actions" : [ {
						"name" : "go-left", "action" : [ 
						      { "key" : "go", "params" : [ "nidGauche" ]}
						]
					},{
						"name" : "go-right", "action" : [ 
 						      { "key" : "go", "params" : [ "nidDroite" ]}
 						]
 					}]
				},
				/**
				 * Gauche - Coffre
				 */
				"nidGauche" : {
					"textes" : [ 
"nidGauche-texte-1",
"nidGauche-texte-2"
					        ],
					"actions" : [ {
						"name" : "try-open", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["dague"], "coffre", "coffreEchecSimple" ]}
						]
					},{
						"name" : "retour-arriere", "action" : [ 
 						      { "key" : "go", "params" : [ "coffreRetourSimple" ]}
 						]
 					}]
				},
				"coffre" : {
					"textes" : [ 
"coffre-texte-1",
"coffre-texte-2",
"coffre-texte-3"
					        ],
					"actions" : [ {
						"name" : "forcer-coffre", "action" : [ 
						      { "key" : "random", "params" : [ "coffreReussite1", "coffreReussite2", "coffreEchec1", "coffreEchec2" ]}
						]
					},{
						"name" : "abandonner", "action" : [ 
 						      { "key" : "go", "params" : [ "coffreEchec12" ]}
 						]
 					}]
				},
				"coffreReussite1" : {
					"textes" : [ 
"coffreReussite1-texte-1",
"coffreReussite1-texte-2",
"coffreReussite1-texte-3"
					        ],
					"actions" : [ {
						"name" : "tout-prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante"]},
						      { "key" : "gain", "params" : [ "bouclierBois"]},
						      {"key" : "score", "params" : ["Treasure", 1]},
						      { "key" : "go", "params" : [ "coffreReussite12"]}
						]
					}]
				},
				"coffreReussite12" : {
					"textes" : [ 
"coffreReussite12-texte-1",
"coffreReussite12-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreReussite2" : {
					"textes" : [ 
"coffreReussite1-texte-1",
"coffreReussite2-texte-1",
"coffreReussite2-texte-2"
					        ],
					"actions" : [ {
						"name" : "tout-prendre", "action" : [ 
						      { "key" : "perte", "params" : [ "dague"]},
   						      { "key" : "gain", "params" : [ "potionSante"]},
   						      { "key" : "gain", "params" : [ "bouclierBois"]},
   						      {"key" : "score", "params" : ["Treasure", 1]},
   						      { "key" : "go", "params" : [ "coffreReussite21"]}
   						]
					}]
				},
				"coffreReussite21" : {
					"textes" : [ 
"coffreReussite21-texte-1",
"coffreReussite12-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchec1" : {
					"textes" : [ 
"coffreReussite1-texte-1",
"coffreEchec1-texte-1"
					        ],
					"actions" : [ {
						"name" : "insister", "action" : [ 
						      { "key" : "random", "params" : [ "coffreReussite1", "coffreReussite2", "coffreEchec2"]}
						]
					},{
						"name" : "laisser-tomber", "action" : [ 
   						      { "key" : "go", "params" : [ "coffreEchec12"]}
   						]
   					}]
				},
				"coffreEchec12" : {
					"textes" : [ 
"Un peu d&eacute;&ccedil;u,",
"coffreReussite12-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchec2" : {
					"textes" : [ 
"coffreReussite1-texte-1",
"coffreEchec2-texte-1",
"coffreEchec2-texte-2",
"coffreEchec2-texte-3"
					        ],
					"actions" : [ {
						"name" : "pas-la-peine", "action" : [ 
						      { "key" : "perte", "params" : [ "dague"]},
						      { "key" : "hurt", "params" : [ 5 ]},
						      {"key" : "score", "params" : ["NoChance", 1]},
						      { "key" : "go", "params" : [ "coffreEchec21" ]}
						]
					}]
				},
				"coffreEchec21" : {
					"textes" : [ 
"coffreEchec21-texte-1",
"coffreReussite12-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchecSimple" : {
					"textes" : [ 
"coffre-texte-1",
"coffreEchecSimple-texte-1"
					        ],
					"actions" : [ {
						"name" : "tant-pis", "action" : [ 
						      { "key" : "go", "params" : [ "coffreEchec12"]}
						]
					}]
				},
				"coffreRetourSimple" : {
					"textes" : [ 
"coffreRetourSimple-texte-1",
"coffreReussite12-texte-2"
					        ],
					"actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				/**
				 * Droite - Roi araignee
				 */
				"nidDroite" : {
					"textes" : [ 
"nidDroite-texte-1",
"nidDroite-texte-2",
"nidDroite-texte-3"
					        ],
					"actions" : [ {
						"name" : "avancer", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["potionSante"], "roiAraigneePotion", "roiAraignee"]}
						]
					}]
				},
				"roiAraigneePotion" : {
					"textes" : [ 
"roiAraigneePotion-texte-1",
"roiAraigneePotion-texte-2",
"roiAraigneePotion-texte-3"
					        ],
					"actions" : [ {
						"name" : "attaquer", "action" : [ 
						                                 {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "stop", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneePotion2"]}
 						]
 					}]
				},
				"roiAraigneePotion2" : {
					"textes" : [ 
"roiAraigneePotion2-texte-1",
"roiAraigneePotion2-texte-2",
"roiAraigneePotion2-texte-3"
					        ],
					"actions" : [ {
						"name" : "death", "action" : [ 
						                              {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "ami", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneePotionAmi"]}
 						]
 					},{
						"name" : "who-are-you", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneePotionQui"]}
						]
					}]
				},
				"roiAraigneePotionQui" : {
					"textes" : [ 
"roiAraigneePotionQui-texte-1",
"roiAraigneePotionQui-texte-2",
"roiAraigneePotionQui-texte-3",
"roiAraigneePotionQui-texte-4"
					        ],
					"actions" : [ {
						"name" : "donner-potion", "action" : [ 
						      { "key" : "perte", "params" : [ "potionSante"]},
						      {"key" : "score", "params" : ["HelpSpider", 1]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneePotionAmi" : {
					"textes" : [ 
"roiAraigneePotionAmi-texte-1",
"roiAraigneePotionAmi-texte-2"
					        ],
					"actions" : [ {
						"name" : "donner-potion", "action" : [ 
						      { "key" : "perte", "params" : [ "potionSante"]},
						      {"key" : "score", "params" : ["HelpSpider", 1]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraignee" : {
					"textes" : [ 
"roiAraigneePotion-texte-1",
"roiAraigneePotion-texte-2",
"roiAraigneePotion-texte-3"
					        ],
					"actions" : [ {
						"name" : "attaquer", "action" : [ 
						                                 {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "stop", "action" : [ 
 						      { "key" : "hasItem", "params" : [ ["fromage"], "roiAraigneeFromage", "roiAraigneeRien"]}
 						]
 					}]
				},
				"roiAraigneeFromage" : {
					"textes" : [ 
"roiAraigneePotion2-texte-1",
"roiAraigneePotion2-texte-2",
"roiAraigneePotion2-texte-3"
					        ],
					"actions" : [ {
						"name" : "death", "action" : [ 
						                              {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "ami", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFromageAmi"]}
 						]
 					},{
						"name" : "who-are-you", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeFromageQui"]}
						]
					}]
				},
				"roiAraigneeFromageQui" : {
					"textes" : [ 
"roiAraigneePotionQui-texte-1",
"roiAraigneePotionQui-texte-2",
"roiAraigneePotionQui-texte-3",
"roiAraigneePotionQui-texte-4"
					        ],
					"actions" : [ {
						"name" : "donner-fromage", "action" : [ 
						      { "key" : "perte", "params" : [ "fromage"]},
						      {"key" : "score", "params" : ["HelpSpider", 1]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeFromageAmi" : {
					"textes" : [ 
"roiAraigneePotionAmi-texte-1",
"roiAraigneePotionAmi-texte-2"
					        ],
					"actions" : [ {
						"name" : "donner-fromage", "action" : [ 
						      { "key" : "perte", "params" : [ "fromage"]},
						      {"key" : "score", "params" : ["HelpSpider", 1]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeRien" : {
					"textes" : [ 
"roiAraigneePotion2-texte-1",
"roiAraigneePotion2-texte-2",
"roiAraigneePotion2-texte-3"
					        ],
					"actions" : [ {
						"name" : "death", "action" : [ 
						                              {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "who-are-you", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeQui"]}
						]
					}]
				},
				"roiAraigneeQui" : {
					"textes" : [ 
"roiAraigneePotionQui-texte-1",
"roiAraigneePotionQui-texte-2",
"roiAraigneePotionQui-texte-3",
"roiAraigneePotionQui-texte-4"
					        ],
					"actions" : [ {
						"name" : "jai-rien", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeGuerit" : {
					"textes" : [ 
"roiAraigneeGuerit-texte-1",
"roiAraigneeGuerit-texte-2",
"roiAraigneeGuerit-texte-3",
"roiAraigneeGuerit-texte-4"
					        ],
					"actions" : [ {
						"name" : "qui-fait-ca", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit2"]}
 						]
 					}]
				},
				"roiAraigneeGuerit2" : {
					"textes" : [ 
"roiAraigneeGuerit2-texte-1",
"roiAraigneeGuerit2-texte-2",
"roiAraigneeGuerit2-texte-3"
					        ],
					"actions" : [ {
						"name" : "comment", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit3"]}
 						]
 					}]
				},
				"roiAraigneeGuerit3" : {
					"textes" : [ 
"roiAraigneeGuerit3-texte-1",
"roiAraigneeGuerit3-texte-2",
"roiAraigneeGuerit3-texte-3"
					        ],
					"actions" : [ {
						"name" : "ou-aller-vous", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit4"]}
 						]
 					},{
						"name" : "laisser-partir", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeParti"]}
						]
					}]
				},
				"roiAraigneeGuerit4" : {
					"textes" : [ 
"roiAraigneeGuerit4-texte-1",
"roiAraigneeGuerit4-texte-2",
"roiAraigneeGuerit4-texte-3",
"roiAraigneeGuerit4-texte-4"
					        ],
					"actions" : [ {
						"name" : "fouiller-lieux", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFouilleGrotte"]}
 						]
 					},{
						"name" : "aller-ville", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeParti" : {
					"textes" : [ 
"roiAraigneeGuerit4-texte-4",
"roiAraigneeParti-texte-1"
					        ],
					"actions" : [ {
						"name" : "fouiller-lieux", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFouilleGrotte"]}
 						]
 					},{
						"name" : "aller-ville", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeFouilleGrotte" : {
					"textes" : [ 
"roiAraigneeFouilleGrotte-texte-1",
"roiAraigneeFouilleGrotte-texte-2"
					        ],
					"actions" : [ {
						"name" : "aller-ville", "action" : [
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeRefus" : {
					"textes" : [ 
"roiAraigneeRefus-texte-1",
"roiAraigneeRefus-texte-2",
"roiAraigneeRefus-texte-3"
					        ],
					"actions" : [ {
						"name" : "attaquer", "action" : [ 
						                                 {"key" : "score", "params" : ["KillSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					}, {
						"name" : "let-him", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				"roiAraigneeAgonie" : {
					"textes" : [ 
"roiAraigneeAgonie-texte-1",
"roiAraigneeAgonie-texte-2",
"roiAraigneeAgonie-texte-3",
"roiAraigneeAgonie-texte-4",
"roiAraigneeAgonie-texte-5"
					        ],
					"actions" : [ {
						"name" : "fouiller", "action" : [ 
						      { "key" : "gain", "params" : [ "venin"]},
						      { "key" : "go", "params" : [ "roiAraigneeAgonieFouille"]}
						]
					}, {
						"name" : "rentrer-ville", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				"roiAraigneeAgonieFouille" : {
					"textes" : [ 
"roiAraigneeAgonieFouille-texte-1",
"roiAraigneeAgonieFouille-texte-2",
"roiAraigneeAgonieFouille-texte-3"
					        ],
					"actions" : [ {
						"name" : "aller-ville", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				
				/**
				 * La ville assiegee
				 */
				"reposVille" : {
					"textes" : [ 
					        "reposVille-texte-1",
					        "reposVille-texte-2",
					        "reposVille-texte-3"
					        ],
			        "actions" : [ {
						"name" : "courir-ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					},{
						"name" : "examiner-lieux", 
						"action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "fermeExaminer2", "fermeExaminer"]}
						]
					}]
				},
				"fermeExaminer" : {
					"textes" : [ 
					        "fermeExaminer-texte-1",
					        "fermeExaminer-texte-2",
					        "fermeExaminer-texte-3"
					        ],
			        "actions" : [ {
						"name" : "retirer-baton", "action" : [ 
						      { "key" : "random", "params" : [ "batonSaisieReussite1", "batonSaisieReussite2", "batonSaisieEchec" ]}
						]
					},{
						"name" : "casser-baton", "action" : [ 
						      { "key" : "go", "params" : [ "batonPousse"]}
						]
					},{
						"name" : "courir-ville", "action" : [ 
  						      { "key" : "go", "params" : [ "reposVille2"]}
  						]
  					}]
				},
				"fermeExaminer2" : {
					"textes" : [ 
					        "fermeExaminer-texte-1",
					        "fermeExaminer2-texte-1",
					        "fermeExaminer2-texte-2"
					        ],
			        "actions" : [ {
						"name" : "entrer-grange", "action" : [ 
						      { "key" : "go", "params" : [ "grange"]}
						]
					},{
						"name" : "courir-ville", "action" : [ 
  						      { "key" : "go", "params" : [ "retourVille2"]}
  						]
  					}]
				},
				"batonSaisieReussite1" : {
					"textes" : [ 
					        "batonSaisieReussite1-texte-1",
					        "batonSaisieReussite1-texte-2",
					        "batonSaisieReussite1-texte-3"
					        ],
			        "actions" : [ {
						"name" : "garder-baton", "action" : [ 
						      { "key" : "gain", "params" : [ "baton" ]},
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					},{
						"name" : "let-him", "action" : [ 
						      { "key" : "go", "params" : [ "fermeGoule"]}
						]
					}]
				},
				"batonSaisieReussite2" : {
					"textes" : [ 
					        "batonSaisieReussite1-texte-1",
					        "batonSaisieReussite2-texte-1",
					        "batonSaisieReussite1-texte-3",
					        "batonSaisieReussite2-texte-2"
					        ],
			        "actions" : [ {
						"name" : "garder-baton", "action" : [
						      { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "gain", "params" : [ "baton" ]},
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					},{
						"name" : "let-him", "action" : [
                              { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "go", "params" : [ "fermeGoule"]}
						]
					}]
				},
				"batonSaisieEchec" : {
					"textes" : [ 
					        "batonSaisieEchec-texte-1",
					        "batonSaisieEchec-texte-2",
					        "batonSaisieEchec-texte-3"
					        ],
			        "actions" : [ {
						"name" : "casser-baton", "action" : [
						      { "key" : "go", "params" : [ "batonPousse" ]}
						]
					},{
						"name" : "courir-ville", "action" : [
						      { "key" : "go", "params" : [ "reposVille2"]}
						]
					}]
				},
				"batonPousse" : {
					"textes" : [ 
					        "batonPousse-texte-1",
					        "batonPousse-texte-2"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					}]
				},
				"fermeGoule" : {
					"textes" : [ 
					        "fermeGoule-texte-1",
					        "fermeGoule-texte-2",
					        "fermeGoule-texte-3"
					        ],
			        "actions" : [ {
						"name" : "attaquer", "action" : [
						      { "key" : "fight", "params" : [ ["goule"], "fermeGoule2" ]}
						]
					}]
				},
				"fermeGoule2" : {
					"textes" : [ 
					        "fermeGoule2-texte-1",
					        "fermeGoule2-texte-2"
					        ],
			        "actions" : [ {
						"name" : "fouiller", "action" : [
						      { "key" : "go", "params" : [ "fouillerGoule" ]}
						]
					},{
						"name" : "entrer-grange", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					},{
						"name" : "courir-ville", "action" : [
   						      { "key" : "go", "params" : [ "reposVille2" ]}
   						]
   					}]
				},
				"fouillerGoule" : {
					"textes" : [ 
					        "fouillerGoule-texte-1",
					        "fouillerGoule-texte-2"
					        ],
			        "actions" : [ {
						"name" : "entrer-grange", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					},{
						"name" : "courir-ville", "action" : [
   						      { "key" : "go", "params" : [ "reposVille2" ]}
   						]
   					}]
				},
				"grange" : {
					"textes" : [ 
					        "grange-texte-1",
					        "grange-texte-2"
					        ],
			        "actions" : [ {
						"name" : "fouiller-table", "action" : [
   						      { "key" : "go", "params" : [ "grangeFouilleTable" ]}
   						]
   					},{
						"name" : "examine-grange", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					},{
						"name" : "courir-ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeFouilleTable" : {
					"textes" : [ 
					        "grangeFouilleTable-texte-1",
					        "grangeFouilleTable-texte-2"
					        ],
			        "actions" : [ {
						"name" : "prendre-bougie", "action" : [
   						      { "key" : "gain", "params" : [ "bougie" ]},
   						      { "key" : "go", "params" : [ "grangeFouilleTable2" ]}
   						]
   					},{
						"name" : "retour", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					}]
				},
				"grangeFouilleTable2" : {
					"textes" : [ 
					        "grangeFouilleTable2-texte-1",
					        "grangeFouilleTable2-texte-2"
					        ],
			        "actions" : [ {
						"name" : "examine-grange", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					},{
						"name" : "courir-ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeExamine" : {
					"textes" : [ 
					        "grangeExamine-texte-1",
					        "grangeExamine-texte-2",
					        "grange-texte-2"
					        ],
			        "actions" : [ {
						"name" : "fouiller-table", "action" : [
   						      { "key" : "hasItem", "params" : [ ["bougie"], "grangeFouilleTable3", "grangeFouilleTable" ]}
   						]
   					},{
						"name" : "courir-ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeFouilleTable3" : {
					"textes" : [ 
					        "grangeFouilleTable-texte-1",
					        "grangeFouilleTable3-texte-1"
					        ],
			        "actions" : [ {
						"name" : "retour", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					}]
				},
				"reposVille2" : {
					"textes" : [ 
					        "reposVille2-texte-1",
					        "reposVille2-texte-2",
					        "reposVille2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "defendre-ville", "action" : [ 
						      { "key" : "fight", "params" : [ ["goule", "goule", "goule", "goule"], "reposVille3"]}
						]
					}]
				},
				"reposVille3" : {
					"textes" : [ 
					        "reposVille3-texte-1",
					        "reposVille3-texte-2",
					        "reposVille3-texte-3",
					        "reposVille3-texte-4",
					        "reposVille3-texte-5"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4"]}
						]
					}]
				},
				"reposVille4" : {
					"textes" : [ 
					        "reposVille4-texte-1",
					        "reposVille4-texte-2",
					        "reposVille4-texte-3"
					        ],
			        "actions" : [ {
						"name" : "aider", "action" : [ 
						                              {"key" : "score", "params" : ["HelpTown", 1]},
						      { "key" : "go", "params" : [ "reposVilleAide"]}
						]
					},{
						"name" : "refuser", "action" : [ 
						      { "key" : "go", "params" : [ "reposVilleRefus"]}
						]
					}]
				},
				"reposVilleAide" : {
					"textes" : [ 
					        "reposVilleAide-texte-1",
					        "reposVilleAide-texte-2",
					        "reposVilleAide-texte-3",
					        "reposVilleAide-texte-4",
					        "reposVilleAide-texte-5"
					        ],
			        "actions" : [ {
						"name" : "prendre-arme", "action" : [ 
						      { "key" : "gain", "params" : [ "epee"]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      {"key" : "score", "params" : ["Treasure", 1]},
						      { "key" : "go", "params" : [ "reposVilleAide1"]}
						]
					},{
						"name" : "non-merci", "action" : [ 
						      { "key" : "go", "params" : [ "reposVilleAide2"]}
						]
					}]
				},
				"reposVilleAide1" : {
					"textes" : [ 
					        "reposVilleAide1-texte-1",
					        "reposVilleAide1-texte-2",
					        "reposVilleAide1-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "heal", "params" : [ 1000 ]},
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais"]}
						]
					}]
				},
				"reposVilleAide2" : {
					"textes" : [ 
					        "reposVilleAide2-texte-1",
					        "reposVilleAide2-texte-2",
					        "reposVilleAide2-texte-3",
					        "reposVilleAide2-texte-4",
					        "reposVilleAide2-texte-5"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "heal", "params" : [ 1000 ]},
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais"]}
						]
					}]
				},
				"reposVilleRefus" : {
					"textes" : [ 
					        "reposVilleRefus-texte-1",
					        "reposVilleRefus-texte-2",
					        "reposVilleRefus-texte-3"
					        ],
			        "actions" : [ {
						"name" : "venger-affront", "action" : [ 
						                                       {"key" : "score", "params" : ["Traitor", 1]},
						      { "key" : "fight", "params" : [ ["garde", "garde"], "reposVilleTraitre" ]}
						]
					},{
						"name" : "sen-aller", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVilleRefus2" ]}
 						]
 					}]
				},
				"reposVilleTraitre" : {
					"textes" : [ 
					        "reposVilleTraitre-texte-1",
					        "reposVilleTraitre-texte-2",
					        "reposVilleTraitre-texte-3",
					        "reposVilleTraitre-texte-4"
					        ],
			        "actions" : [ {
						"name" : "combattre", "action" : [ 
						      { "key" : "fight", "params" : [ ["villageois", "villageois", "villageois", "villageois"], "reposVilleTraitre2" ]}
						]
					},{
						"name" : "fuir", "action" : [ 
						                             {"key" : "score", "params" : ["Leak", 1]},
 						      { "key" : "go", "params" : [ "reposVilleRefus2" ]}
 						]
 					}]
				},
				"reposVilleTraitre2" : {
					"textes" : [ 
					        "reposVilleTraitre2-texte-1",
					        "reposVilleTraitre2-texte-2",
					        "reposVilleTraitre2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "fouiller-maison", "action" : [ 
						      { "key" : "random", "params" : [ "villeFouilleReussite1", "villeFouilleReussite2", 
						                                       "villeFouilleReussite3", "villeFouilleEchec", "villeFouilleEchec2" ]}
						]
					},{
						"name" : "sen-aller", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVilleTraitre3" ]}
 						]
 					}]
				},
				"reposVilleTraitre3" : {
					"textes" : [ 
					        "reposVilleTraitre3-texte-1",
					        "reposVilleTraitre3-texte-2",
					        "reposVilleTraitre3-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivre-trace", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
				"villeFouilleReussite1" : {
					"textes" : [ 
					        "villeFouilleReussite1-texte-1",
					        "villeFouilleReussite1-texte-2",
					        "villeFouilleReussite1-texte-3"
					        ],
			        "actions" : [ {
						"name" : "prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleReussite2" : {
					"textes" : [ 
					        "villeFouilleReussite2-texte-1",
					        "villeFouilleReussite2-texte-2",
					        "villeFouilleReussite1-texte-3"
					        ],
			        "actions" : [ {
						"name" : "prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "epee" ]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      {"key" : "score", "params" : ["Treasure", 1]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					},{
						"name" : "laisser", "action" : [ 
  						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
  						]
  					}]
				},
				"villeFouilleReussite3" : {
					"textes" : [ 
					        "villeFouilleReussite3-texte-1",
					        "villeFouilleReussite3-texte-2",
					        "villeFouilleReussite2-texte-2",
					        "villeFouilleReussite3-texte-3",
					        "villeFouilleReussite1-texte-2",
					        "villeFouilleReussite1-texte-3"
					        ],
			        "actions" : [ {
						"name" : "tout-prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "epee" ]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      {"key" : "score", "params" : ["Treasure", 1]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					},{
						"name" : "laisser-arme", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleEchec" : {
					"textes" : [ 
					        "villeFouilleEchec-texte-1",
					        "villeFouilleEchec-texte-2",
					        "villeFouilleEchec-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleEchec2" : {
					"textes" : [ 
					        "villeFouilleEchec2-texte-1",
					        "villeFouilleEchec2-texte-2",
					        "villeFouilleEchec2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "combattre", "action" : [ 
						      { "key" : "fight", "params" : [ ["grosseGoule"], "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleSuite" : {
					"textes" : [ 
					        "villeFouilleSuite-texte-1",
					        "villeFouilleSuite-texte-2",
					        "villeFouilleSuite-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivre-trace", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
				"reposVilleRefus2" : {
					"textes" : [ 
					        "reposVilleRefus2-texte-1",
					        "reposVilleRefus2-texte-2",
					        "reposVilleRefus2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivre-trace", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
				"retourVille2" : {
					"textes" : [ 
					        "reposVille2-texte-1",
					        "retourVille2-texte-1",
					        "retourVille2-texte-2",
					        "retourVille2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "arreter", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi2" ]},
						      { "key" : "go", "params" : [ "retourVilleAideRoi" ]}
						]
					},{
						"name" : "help-guard", "action" : [ 
						                                   {"key" : "score", "params" : ["TraitorSpider", 1]},
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "retourVilleAideGarde" ]}
						]
					}]
				},
				"retourVilleAideRoi" : {
					"textes" : [ 
					        "retourVilleAideRoi-texte-1",
					        "retourVilleAideRoi-texte-2",
					        "retourVilleAideRoi-texte-3",
					        "retourVilleAideRoi-texte-4"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "retourVilleAideRoi2" ]}
						]
					}]
				},
				"retourVilleAideRoi2" : {
					"textes" : [ 
					        "retourVilleAideRoi2-texte-1",
					        "retourVilleAideRoi2-texte-2",
					        "retourVilleAideRoi2-texte-3"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "retourVilleAideRoi3" ]}
						]
					}]
				},
				"retourVilleAideRoi3" : {
					"textes" : [ 
					        "retourVilleAideRoi3-texte-1",
					        "retourVilleAideRoi3-texte-2"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4" ]}
						]
					}]
				},
				"retourVilleAideGarde" : {
					"textes" : [ 
					        "retourVilleAideGarde-texte-1",
					        "retourVilleAideGarde-texte-2",
					        "reposVille3-texte-3",
					        "reposVille3-texte-4",
					        "reposVille3-texte-5"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4" ]}
						]
					}]
				},
"marais" : {
	"textes" : [
		"marais-texte-1",
		"marais-texte-2",
		"marais-texte-3",
		"marais-texte-4"
	],
	"actions" : [
		{
			"name" : "entrer",
			"action" : [{"key" : "go", "params" : ["necroPorte"]}]
		},
		{
			"name" : "contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"maraisRoi" : {
	"textes" : [
		"marais-texte-1",
		"marais-texte-2",
		"marais-texte-3",
		"marais-texte-4",
		"maraisRoi-texte-1"
	],
	"actions" : [
		{
			"name" : "entrer",
			"action" : [
				{"key" : "gain", "params" : ["necroS1Clean"]},
				{"key" : "gain", "params" : ["S1ViaS0"]},
				{"key" : "gain", "params" : ["viaS1"]},
				{"key" : "go", "params" : ["necroS1Roi"]}
			]
		},
		{
			"name" : "contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"necroTrou" : {
	"textes" : [
		"necroTrou-texte-1",
		"necroTrou-texte-2",
		"necroTrou-texte-3"
	],
	"actions" : [
		{
			"name" : "entrer",
			"action" : [
				{"key" : "gain", "params" : ["S3ViaS0"]},
				{"key" : "gain", "params" : ["viaS3"]},
				{"key" : "go", "params" : ["necroS3"]}
			]
		}
	]
},
"necroS3" : {
	"textes" : [
		"necroS3-texte-1",
		"necroS3-texte-2",
		"necroS3-texte-3",
		"necroS3-texte-4"
	],
	"actions" : [
		{
			"name" : "ouvrir-porte",
			"appairIf" : [{"key" : "hasItem", "params" : ["S3ViaS0"]}],
			"action" : [
				{"key" : "perte", "params" : ["S3ViaS0"]},
				{"key" : "hasItem", "params" : [["helpRoi2"], "necroGSRoiFight", "necroGSFight"]}
			]
		},
		{
			"name" : "lire-parchemin",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["parchoLu"]}],
			"action" : [
				{"key" : "upMG", "params" : [15]},
				{"key" : "gain", "params" : ["parchoLu"]},
				{"key" : "go", "params" : ["necroS3Fouille"]}
			]
		}
	]
},
"necroS3GS" : {
	"textes" : [
		"necroS3-texte-1",
		"necroS3-texte-2",
		"necroS3-texte-3"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [{"key" : "go", "params" : ["necroGS"]}]
		},
		{
			"name" : "lire-parchemin",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["parchoLu"]}],
			"action" : [
				{"key" : "upMG", "params" : [15]},
				{"key" : "gain", "params" : ["parchoLu"]},
				{"key" : "go", "params" : ["necroS3Fouille"]}
			]
		}
	]
},
"necroS3Fouille" : {
	"textes" : [
		"necroS3Fouille-texte-1",
		"necroS3Fouille-texte-2",
		"necroS3Fouille-texte-3",
		"necroS3Fouille-texte-4",
		"necroS3Fouille-texte-5"
	],
	"actions" : [
		{
			"name" : "ouvrir-porte",
			"appairIf" : [{"key" : "hasItem", "params" : ["S3ViaS0"]}],
			"action" : [
				{"key" : "perte", "params" : ["S3ViaS0"]},
				{"key" : "hasItem", "params" : [["helpRoi2"], "necroGSRoiFight", "necroGSFight"]}
			]
		},
		{
			"name" : "retour",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S3ViaS0"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroPorte" : {
	"textes" : [
		"necroPorte-texte-1",
		"necroPorte-texte-2"
	],
	"actions" : [
		{
			"name" : "contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"necroS1Roi" : {
	"textes" : [
		"necroS1Roi-texte-1",
		"necroS1Roi-texte-2",
		"necroS1Roi-texte-3"
	],
	"actions" : [
		{
			"name" : "fouiller-piece",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["hadClef"]}],
			"action" : [
				{"key" : "gain", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["hadClef"]},
				{"key" : "go", "params" : ["necroS1Fouille"]}
			]
		},
		{
			"name" : "continue",
			"action" : [
				{"key" : "perte", "params" : ["S1ViaS0"]},
				{"key" : "go", "params" : ["necroGSRoiFight"]}
				]
		}
	]
},
"necroS1" : {
	"textes" : [
		"necroS1-texte-1",
		"necroS1-texte-2"
	],
	"actions" : [
		{
			"name" : "fouiller-piece",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["hadClef"]}],
			"action" : [
				{"key" : "gain", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["hadClef"]},
				{"key" : "go", "params" : ["necroS1Fouille"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS1Fight" : {
	"textes" : [
		"necroS1-texte-1",
		"necroS1Fight-texte-1"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "gain", "params" : ["necroS1Clean"]},
				{"key" : "fight", "params" : [["goule", "goule"], "necroS1Fight2"]},
			]
		}
	]
},
"necroS1Fight2" : {
	"textes" : [
		"necroS1Fight2-texte-1",
		"necroS1Fight2-texte-2",
		"necroS1Fight2-texte-3"
	],
	"actions" : [
		{
			"name" : "fouiller-piece",
			"action" : [
				{"key" : "gain", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["hadClef"]},
				{"key" : "go", "params" : ["necroS1Fouille"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS1Fouille" : {
	"textes" : [
		"necroS1Fouille-texte-1",
		"necroS1Fouille-texte-2",
		"necroS1Fouille-texte-3",
		"necroS1Fouille-texte-4"
	],
	"actions" : [
		{
			"name" : "continue",
			"appairIf" : [{"key" : "hasItem", "params" : ["S1ViaS0"]}],
			"action" : [
				{"key" : "perte", "params" : ["S1ViaS0"]},
				{"key" : "go", "params" : ["necroGSRoiFight"]}
			]
		},
		{
			"name" : "retour",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S1ViaS0"]}],
			"action" : [{"key" : "go", "params" : ["necroGS"]}]
		}
	]
},
"necroGSFight" : {
	"textes" : [
		"necroGSFight-texte-1",
		"necroGSFight-texte-2",
		"necroGSFight-texte-3"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["grosseGoule", "squelette", "squelette"], "necroGSFight2"]}
			]
		}
	]
},
"necroGSFight2" : {
	"textes" : [
		"necroGSFight2-texte-1",
		"necroGSFight2-texte-2"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSRoiFight" : {
	"textes" : [
		"necroGSFight-texte-1",
		"necroGSRoiFight-texte-1",
		"necroGSFight-texte-3"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["squelette", "squelette"], "necroGSRoiFight2"]}
			]
		}
	]
},
"necroGSRoiFight2" : {
	"textes" : [
		"necroGSRoiFight2-texte-1",
		"necroGSRoiFight2-texte-2",
		"necroGSRoiFight2-texte-3",
		"necroGSRoiFight2-texte-4",
		"necroGSRoiFight2-texte-5"
	],
	"actions" : [
		{
			"name" : "prendre-croc",
			"action" : [
				{"key" : "gain", "params" : ["crocRoi"]},
				{"key" : "go", "params" : ["necroGSFight3Oui"]}
			]
		},
		{
			"name" : "laisser-croc",
			"action" : [
				{"key" : "go", "params" : ["necroGSFight3Non"]}
			]
		}
	]
},
"necroGSFight3Oui" : {
	"textes" : [
		"necroGSFight3Oui-texte-1",
		"necroGSFight3Oui-texte-2",
		"necroGSFight2-texte-2"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSFight3Non" : {
	"textes" : [
		"necroGSFight3Non-texte-1",
		"necroGSFight3Non-texte-2",
		"necroGSFight2-texte-2"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGS" : {
	"textes" : [
		"necroGS-texte-1",
		"necroGS-texte-2",
		"necroGS-texte-3"
	],
	"actions" : [
		{
			"name" : "fouiller-cercueil",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["fouilleCercueil"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSFouilleCercueil"]}
			]
		},
		{
			"name" : "fouiller-salle",
			"action" : [
				{"key" : "go", "params" : ["necroGSFouilleSalle"]}
			]
		},
		/**
		 * Gauche
		 */
		{
			"name" : "go-left",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
			]
		},
		{
			"name" : "go-left",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["necroS1Clean"], "necroS1", "necroS1Fight"]}
			]
		},
		/**
		 * Droite
		 */
		{
			"name" : "go-right",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "go", "params" : ["necroS3GS"]}
			]
		},
		{
			"name" : "go-right",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		},
		/**
		 * Face
		 */
		{
			"name" : "go-face",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		},
		{
			"name" : "go-face",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
			]
		},
		/**
		 * Retour
		 */
		{
			"name" : "revenir-pas",
			"action" : [
				{"key" : "hasItem", "params" : [["viaS1"], "necroS1", "necroS3GS"]}
			]
		}
	]
},
"necroGSFouilleCercueil" : {
	"textes" : [
		"necroGSFouilleCercueil-texte-1",
		"necroGSFouilleCercueil-texte-2",
		"necroGSFouilleCercueil-texte-3"
	],
	"actions" : [
		{
			"name" : "fouiller",
			"action" : [
				{"key" : "gain", "params" : ["elixir"]},
				{"key" : "gain", "params" : ["fouilleCercueil"]},
				{"key" : "go", "params" : ["necroGSFouilleCercueil2"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSFouilleCercueil2" : {
	"textes" : [
		"necroGSFouilleCercueil2-texte-1",
		"necroGSFouilleCercueil2-texte-2",
		"necroGSFouilleCercueil2-texte-3",
		"necroGSFouilleCercueil2-texte-4",
		"necroGSFouilleCercueil2-texte-5"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["squeletteManchot"], "necroGSFouilleCercueil3"]}
			]
		}
	]
},
"necroGSFouilleCercueil3" : {
	"textes" : [
		"necroGSFouilleCercueil3-texte-1",
		"necroGSFouilleCercueil3-texte-2"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSFouilleSalle" : {
	"textes" : [
		"necroGSFouilleSalle-texte-1",
		"necroGSFouilleSalle-texte-2",
		"necroGSFouilleSalle-texte-3"
	],
	"actions" : [
		{
			"name" : "voir-torche-gauche",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeG", "torcheExploseG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheG"]}
			]
		},
		{
			"name" : "voir-torche-gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
			]
		},
		{
			"name" : "voir-torche-gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheExploseG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheExplose"]}
			]
		},
		{
			"name" : "voir-torche-droite",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeD", "torcheExploseD"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheD"]}
			]
		},
		{
			"name" : "voir-torche-droite",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeD"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
			]
		},
		{
			"name" : "voir-torche-droite",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheExploseD"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheExplose"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheG" : {
	"textes" : [
		"necroGSTorcheG-texte-1",
		"necroGSTorcheG-texte-2",
		"necroGSTorcheG-texte-3"
	],
	"actions" : [
		{
			"name" : "utiliser-bougie",
			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
			"action" : [
				{"key" : "gain", "params" : ["torcheAllumeG"]},
				{"key" : "go", "params" : ["necroGSTorcheOK"]}
			]
		},
		{
			"name" : "lancer-boule-feu",
			"appairIf" : [
				{"key" : "hasItem", "params" : ["bouleFeu"]},
				{"key" : "hasMG", "params" : [5]}
			],
			"action" : [
				{"key" : "gain", "params" : ["torcheExploseG"]},
				{"key" : "healMG", "params" : [-5]},
				{"key" : "go", "params" : ["necroGSTorcheKO"]}
			]
		},
		{
			"name" : "impossible",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheD" : {
	"textes" : [
		"necroGSTorcheD-texte-1",
		"necroGSTorcheG-texte-2",
		"necroGSTorcheD-texte-2"
	],
	"actions" : [
		{
			"name" : "utiliser-bougie",
			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
			"action" : [
				{"key" : "gain", "params" : ["torcheAllumeD"]},
				{"key" : "go", "params" : ["necroGSTorcheOK"]}
			]
		},
		{
			"name" : "lancer-boule-feu",
			"appairIf" : [
				{"key" : "hasItem", "params" : ["bouleFeu"]},
				{"key" : "hasMG", "params" : [5]}
			],
			"action" : [
				{"key" : "gain", "params" : ["torcheExploseD"]},
				{"key" : "healMG", "params" : [-5]},
				{"key" : "go", "params" : ["necroGSTorcheKO"]}
			]
		},
		{
			"name" : "impossible",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheOK" : {
	"textes" : [
		"necroGSTorcheOK-texte-1",
		"necroGSTorcheOK-texte-2",
		"necroGSTorcheOK-texte-3"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheKO" : {
	"textes" : [
		"necroGSTorcheKO-texte-1",
		"necroGSTorcheKO-texte-2",
		"necroGSTorcheKO-texte-3",
		"necroGSTorcheKO-texte-4"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheAllume" : {
	"textes" : [
		"necroGSTorcheAllume-texte-1",
		"necroGSTorcheAllume-texte-2"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheExplose" : {
	"textes" : [
		"necroGSTorcheExplose-texte-1",
		"necroGSTorcheExplose-texte-2"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSS2" : {
	"textes" : [
		"necroGSS2-texte-1",
		"necroGSS2-texte-2",
		"necroGSS2-texte-3",
		"necroGSS2-texte-4"
	],
	"actions" : [
		{
			"name" : "utiliser-clef",
			"appairIf" : [{"key" : "hasItem", "params" : ["clefS2"]}],
			"action" : [
				{"key" : "perte", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["S2Ouvert"]},
				{"key" : "sound", "params" : ["door"]},
				{"key" : "go", "params" : ["necroS2"]}
			]
		},
		{
			"name" : "ouvrir",
			"appairIf" : [{"key" : "hasItem", "params" : ["S2Ouvert"]}],
			"action" : [
				{"key" : "go", "params" : ["necroS2Retour"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS2" : {
	"textes" : [
		"necroS2-texte-1",
		"necroS2-texte-2",
		"necroS2-texte-3",
		"necroS2-texte-4",
		"necroS2-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroS22"]}
			]
		}
	]
},
"necroS2Retour" : {
	"textes" : [
		"necroS2-texte-1",
		"necroS2-texte-2",
		"necroS2Retour-texte-1",
		"necroS2Retour-texte-2",
		"necroS2Retour-texte-3"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroS22"]}
			]
		}
	]
},
"necroS22" : {
	"textes" : [
		"necroS22-texte-1",
		"necroS22-texte-2",
		"necroS22-texte-3",
		"necroS22-texte-4",
		"necroS22-texte-5",
		"necroS22-texte-6"
	],
	"actions" : [
		{
			"name" : "parler",
			"action" : [
				{"key" : "go", "params" : ["necroS2Parle"]}
			]
		},
		{
			"name" : "approcher",
			"action" : [
				{"key" : "go", "params" : ["necroS2Approche"]}
			]
		},
		{
			"name" : "sen-aller",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS2Parle" : {
	"textes" : [
		"necroS2Parle-texte-1",
		"necroS2Parle-texte-2",
		"necroS2Parle-texte-3",
		"necroS2Parle-texte-4",
		"necroS2Parle-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroS2Approche"]}
			]
		}
	]
},
"necroS2Approche" : {
	"textes" : [
		"necroS2Approche-texte-1",
		"necroS2Approche-texte-2",
		"necroS2Approche-texte-3",
		"necroS2Approche-texte-4"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["necroS2Enfant"]}
			]
		}
	]
},
"necroS2Enfant" : {
	"textes" : [
		"necroS2Enfant-texte-1",
		"necroS2Enfant-texte-2",
		"necroS2Enfant-texte-3",
		"necroS2Enfant-texte-4",
		"necroS2Enfant-texte-5"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "gain", "params" : ["S2Clean"]},
				{"key" : "fight", "params" : [["experience"], "necroS2Enfant2"]}
			]
		}
	]
},
"necroS2Enfant2" : {
	"textes" : [
		"necroS2Enfant2-texte-1",
		"necroS2Enfant2-texte-2",
		"necroS2Enfant2-texte-3",
		"necroS2Enfant2-texte-4",
		"necroS2Enfant2-texte-5"
	],
	"actions" : [
		{
			"name" : "fouiller",
			"action" : [
				{"key" : "go", "params" : ["necroS2Fouille"]}
			]
		},
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS2Fouille" : {
	"textes" : [
		"necroS2Fouille-texte-1",
		"necroS2Fouille-texte-2",
		"necroS2Fouille-texte-3",
		"necroS2Fouille-texte-4"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "gain", "params" : ["bouleFeu"]},
				{"key" : "upMG", "params" : [15]},
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroS2Clean" : {
	"textes" : [
		"necroS2Clean-texte-1",
		"necroS2Clean-texte-2"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroCouloir" : {
	"textes" : [
		"necroCouloir-texte-1",
		"necroCouloir-texte-2",
		"necroCouloir-texte-3",
		"necroCouloir-texte-4"
	],
	"actions" : [
		{
			"name" : "go-left",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S4Clean"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["torcheAllumeG"], "necroS4", "necroSalleFerme"]}
			]
		},
		{
			"name" : "go-right",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S5Clean"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["torcheAllumeD"], "necroS5", "necroSalleFerme"]}
			]
		},
		{
			"name" : "go-face",
			"action" : [
				{"key" : "go", "params" : ["necroSB"]}
			]
		}
		,
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroSalleFerme" : {
	"textes" : [
		"necroSalleFerme-texte-1",
		"necroSalleFerme-texte-2",
		"necroSalleFerme-texte-3"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		}
	]
},
/**
 * HEREEE
 */
"necroS4" : {
	"textes" : [
		"necroS4-texte-1",
		"necroS4-texte-2",
		"necroS4-texte-3",
		"necroS4-texte-4"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "gain", "params" : ["S4Clean"]},
				{"key" : "gain", "params" : ["potionSante"]},
				{"key" : "score", "params" : ["SaveChild", 1]},
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		}
	]
},
"necroS5" : {
	"textes" : [
		"necroS5-texte-1",
		"necroS5-texte-2",
		"necroS5-texte-3"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "gain", "params" : ["S5Clean"]},
				{"key" : "gain", "params" : ["soin"]},
				{"key" : "score", "params" : ["LearnHeal", 1]},
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		}
	]
},
"necroSB" : {
	"textes" : [
		"necroSB-texte-1",
		"necroSB-texte-2",
		"necroSB-texte-3"
	],
	"actions" : [
		{
			"name" : "tousser",
			"action" : [
				{"key" : "go", "params" : ["bossTousse"]}
			]
		},
		{
			"name" : "avancer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance"]}
			]
		},
		{
			"name" : "parler",
			"action" : [
				{"key" : "go", "params" : ["bossParle"]}
			]
		}
	]
},
"bossTousse" : {
	"textes" : [
		"bossTousse-texte-1",
		"bossTousse-texte-2",
		"bossTousse-texte-3"
	],
	"actions" : [
		{
			"name" : "avancer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance"]}
			]
		},
		{
			"name" : "parler",
			"action" : [
				{"key" : "go", "params" : ["bossParle"]}
			]
		}
	]
},
"bossParle" : {
	"textes" : [
		"bossParle-texte-1",
		"bossParle-texte-2",
		"bossParle-texte-3",
		"bossParle-texte-4",
		"bossParle-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["bossAvance2"]}
			]
		}
	]
},
"bossAvance" : {
	"textes" : [
		"bossAvance-texte-1",
		"bossAvance-texte-2",
		"bossParle-texte-3",
		"bossParle-texte-4",
		"bossParle-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["bossAvance2"]}
			]
		}
	]
},
"bossAvance2" : {
	"textes" : [
		"bossAvance2-texte-1",
		"bossAvance2-texte-2",
		"bossAvance2-texte-3",
		"bossAvance2-texte-4",
		"bossAvance2-texte-5",
		"bossAvance2-texte-6"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["experience", "experience"], "boss2"]}
			]
		}
	]
},
"boss2" : {
	"textes" : [
		"boss2-texte-1",
		"boss2-texte-2",
		"boss2-texte-3",
		"boss2-texte-4"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["necromancien"], "boss3"]}
			]
		}
	]
},
"boss3" : {
	"textes" : [
		"boss3-texte-1",
		"boss3-texte-2",
		"boss3-texte-3",
		"boss3-texte-4", 
		"boss3-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["boss4"]}
			]
		}
	]
},
"boss4" : {
	"textes" : [
		"boss4-texte-1",
		"boss4-texte-2",
		"boss4-texte-3",
		"boss4-texte-4", 
		"boss4-texte-5"
	],
	"actions" : [
		{
			"name" : "continue",
			"action" : [
				{"key" : "go", "params" : ["boss5"]}
			]
		}
	]
},
"boss5" : {
	"textes" : [
		"boss5-texte-1",
		"boss5-texte-2",
		"boss5-texte-3",
		"boss5-texte-4", 
		"boss5-texte-5",
		"boss5-texte-6"
	],
	"actions" : [
		{
			"name" : "combattre",
			"action" : [
				{"key" : "fight", "params" : [["liche"], "boss6"]}
			]
		}
	]
},
"boss6" : {
	"textes" : [
		"boss6-texte-1",
		"boss6-texte-2",
		"boss6-texte-3",
		"boss6-texte-4", 
		"boss6-texte-5",
		"boss6-texte-6"
	],
	"actions" : [
		{
			"name" : "terminer",
			"action" : [
			    {"key" : "score", "params" : ["GameComplete", 1]},
				{"key" : "go", "params" : ["gagne"]}
			]
		}
	]
}
			};

			return {
				/**
				 * Permet dappeler un WS
				 */
				get : function(key) {
					return Utils.clone(data[key]);
				}
			};
		});