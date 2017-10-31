'use strict';
define(
		[ "jquery" ],
		function($) {
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
						"name" : "suivant", "action" : [ {"key" : "go", "params" : [ "repos2" ]} ]
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
						"name" : "fouille-corps", "action" : [ { "key" : "go", "params" : [ "reposFouille" ]} ]
					}, {
						"name" : "rentrer-ville", "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
					} ]
				},
				"reposFouille" : {
					"textes" : [ 
"reposFouille-texte-1",
"reposFouille-texte-2",
					        ],
					"actions" : [ {
						"name" : "retour", "action" : [ { "key" : "go", "params" : [ "reposCombat" ]} ]
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
						"name" : "fuir-grotte", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
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
						"name" : "fuir-grotte", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
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
"Tranquillement,",
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
						      { "key" : "fight", "params" : [ ["goule", "goule", "goule"], "reposVille3"]}
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
						      { "key" : "fight", "params" : [ ["villageois", "villageois", "villageois"], "reposVilleTraitre2" ]}
						]
					},{
						"name" : "fuir", "action" : [ 
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
				/**
				 * HEREEEE
				 */
				"villeFouilleReussite1" : {
					"textes" : [ 
					        "Vous fouillez les maisons en flammes et trouvez une <span key='potionSante'>potion de sant&eacute;</span>",
					        "dans celle du docteur.",
					        "Cela pourra sans doute vous &ecirc;tre utile&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleReussite2" : {
					"textes" : [ 
					        "Vous fouillez les maisons en flammes et trouvez une belle <span key='epee'>&eacute;p&eacute;e</span>",
					        " et un grand <span key='bouclierFer'>bouclier en fer</span> dans celle du forgeron.",
					        "Cela pourra sans doute vous &ecirc;tre utile&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "epee" ]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					},{
						"name" : "Laisser", "action" : [ 
  						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
  						]
  					}]
				},
				"villeFouilleReussite3" : {
					"textes" : [ 
					        "C&rsquo;est votre jour de chance !",
					        "En fouillant les maisons en flammes, vous trouvez une belle <span key='epee'>&eacute;p&eacute;e</span>",
					        "et un beau <span key='bouclierFer'>bouclier en fer</span> dans celle du forgeron",
					        "ainsi qu'une <span key='potionSante'>potion de sant&eacute;</span> dans celle du docteur.",
					        "Cela pourra sans doute vous &ecirc;tre utile&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Tout Prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "epee" ]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					},{
						"name" : "Laisser les armes", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleEchec" : {
					"textes" : [ 
					        "Malheureusement, les maisons sont vides&hellip;",
					        "Ces cr&eacute;tins n&rsquo;ont rien laiss&eacute;&hellip;",
					        "Vous continuez votre route."
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleEchec2" : {
					"textes" : [ 
					        "En fouillant une des huttes,",
					        "vous tombez nez &agrave; nez avec une <span key='grosseGoule'>grosse goule</span> !",
					        "Sauvez votre peau avant qu&rsquo;elle ne vous la mange !"
					        ],
			        "actions" : [ {
						"name" : "combattre", "action" : [ 
						      { "key" : "fight", "params" : [ ["grosseGoule"], "villeFouilleSuite" ]}
						]
					}]
				},
				"villeFouilleSuite" : {
					"textes" : [ 
					        "En explorant le village, vous remarquez",
					        "que des traces de pas s&rsquo;enfoncent dans le marais&hellip;",
					        "Peut-&ecirc;tre un fuyard ?"
					        ],
			        "actions" : [ {
						"name" : "suivre-trace", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
				"reposVilleRefus2" : {
					"textes" : [ 
					        "Vous vous en allez vers le marais.",
					        "Ces cr&eacute;tins n&rsquo;auront cas se d&eacute;brouiller seul&hellip;",
					        "En chemin, vous distinguez des traces sur le sol."
					        ],
			        "actions" : [ {
						"name" : "suivre-trace", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
				"retourVille2" : {
					"textes" : [ 
					        "Vous accourez dans le village, au c&oelig;ur de la bataille.",
					        "Le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> d&eacute;vore de nombreuses <span key='goule'>goules</span> autour de vous.",
					        "Les paysans sont partis se cacher dans leurs chaumi&egrave;res en ruine",
					        "et quelques <span key='garde'>gardes</span> se pr&eacute;parent d&eacute;j&agrave; &agrave; attaquer votre nouvel alli&eacute;&hellip;"
					        ],
			        "actions" : [ {
						"name" : "&laquo; Arretez ! &raquo;", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi2" ]},
						      { "key" : "go", "params" : [ "retourVilleAideRoi" ]}
						]
					},{
						"name" : "Aider les gardes", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "retourVilleAideGarde" ]}
						]
					}]
				},
				"retourVilleAideRoi" : {
					"textes" : [ 
					        "L&rsquo;un des <span key='garde'>gardes</span> s&rsquo;adresse &agrave; vous :",
					        "&laquo; Que dites-vous ? Il faut tuer ce monstre ! &raquo;",
					        "Vous insistez :",
					        "&laquo; Non ! C&rsquo;est le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> ! Il est venu pour nous aider ! &raquo;"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "retourVilleAideRoi2" ]}
						]
					}]
				},
				"retourVilleAideRoi2" : {
					"textes" : [ 
					        "Pendant votre discution, la bataille continuait.",
					        "Le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span>, apr&egrave;s avoir d&eacute;truit les derni&egrave;res <span key='goule'>goules</span>,",
					        "s&rsquo;est enfonc&eacute; dans le marais &agrave; la recherche d&rsquo;autres proies."
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "retourVilleAideRoi3" ]}
						]
					}]
				},
				"retourVilleAideRoi3" : {
					"textes" : [ 
					        "&laquo; Trop tard&hellip; Il s&rsquo;est enfuit&hellip; Vous l&agrave; ! Qu&rsquo;est-ce qui vous a pris ?",
					        "Les morts nous ont attaqu&eacute;s et ils ont emport&eacute; nos enfants dans la for&ecirc;t ! &raquo;"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4" ]}
						]
					}]
				},
				"retourVilleAideGarde" : {
					"textes" : [ 
					        "Vous achevez le <span key='roiAraigneeBlesse'>roi araign&eacute;e</span> d&rsquo;un coup.",
					        "Les <span key='villageois'>villageois</span> commencent d&eacute;j&agrave; &agrave; sortir de leurs maisons, rassur&eacute;s.",
					        "Un des <span key='garde'>gardes</span> se tourne vers vous :",
					        "&laquo; S&rsquo;il vous plait ! Les morts ! Ils nous ont attaqu&eacute;s !",
					        "Ils ont emport&rsquo;s les enfants dans la for&ecirc;t ! &raquo;"
					        ],
			        "actions" : [ {
						"name" : "suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4" ]}
						]
					}]
				},
"marais" : {
	"textes" : [
		"Vous vous enfoncez profond&eacute;ment dans le marais,",
		"suivant les traces que vous apercevez au sol.",
		"Vous arrivez bient&ocirc;t devant une vieille b&acirc;tisse.",
		"Elle para&icirc;t gigantesque, mais est en tr&eacute;s mauvais &eacute;tat."
	],
	"actions" : [
		{
			"name" : "Entrer",
			"action" : [{"key" : "go", "params" : ["necroPorte"]}]
		},
		{
			"name" : "Contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"maraisRoi" : {
	"textes" : [
		"Vous vous enfoncez profond&eacute;ment dans le marais,",
		"suivant les traces que vous apercevez au sol.",
		"Vous arrivez bient&ocirc;t devant une vieille b&acirc;tisse.",
		"Elle para&icirc;t gigantesque, mais est en tr&eacute;s mauvais &eacute;tat.",
		"La porte est grande ouverte et &agrave; moiti&eacute; explos&eacute;e."
	],
	"actions" : [
		{
			"name" : "Entrer",
			"action" : [
				{"key" : "gain", "params" : ["necroS1Clean"]},
				{"key" : "gain", "params" : ["S1ViaS0"]},
				{"key" : "gain", "params" : ["viaS1"]},
				{"key" : "go", "params" : ["necroS1Roi"]}
			]
		},
		{
			"name" : "Contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"necroTrou" : {
	"textes" : [
		"Vous contournez le grand b&acirc;timent quand,",
		"&agrave; un tournant, vous tombez sur un mur en ruine.",
		"Un gros trou permet de p&eacute;netrer dans une pi&egrave;ce sombre."
	],
	"actions" : [
		{
			"name" : "Entrer",
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
		"Vous p&eacute;netrez dans une vieille salle en ruine.",
		"Apparement, elle servait de biblioth&egrave;que de fortune.",
		"Vous d&eacute;couvrez de nombreux ouvrages et parchemins dispers&eacute;s un peu partout sur le sol.",
		"Une porte permet d&rsquo;acc&eacute;der &agrave; une autre partie du b&acirc;timent."
	],
	"actions" : [
		{
			"name" : "Ouvrir la porte",
			"appairIf" : [{"key" : "hasItem", "params" : ["S3ViaS0"]}],
			"action" : [
				{"key" : "perte", "params" : ["S3ViaS0"]},
				{"key" : "hasItem", "params" : [["helpRoi2"], "necroGSRoiFight", "necroGSFight"]}
			]
		},
		{
			"name" : "Lire les parchemins",
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
		"Vous p&eacute;netrez dans une vieille salle en ruine.",
		"Apparement, elle servait de biblioth&egrave;que de fortune.",
		"Vous d&eacute;couvrez de nombreux ouvrages et parchemins dispers&eacute;s un peu partout sur le sol."
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [{"key" : "go", "params" : ["necroGS"]}]
		},
		{
			"name" : "Lire les parchemins",
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
		"Il semblerait qu&rsquo;il s&rsquo;agisse de trait&eacute;s sur la magie.",
		"Beaucoup sont dans une langue incomprehensible,",
		"mais vous parvenez &agrave; comprendre certains mots.",
		"Cela parle d&rsquo;une fusion entre les &eacute;l&eacute;ments&hellip;",
		"Vous vous relevez et vous dirigez vers la porte."
	],
	"actions" : [
		{
			"name" : "Ouvrir la porte",
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
		"La porte est immense et semble ferm&eacute; &agrave; clef.",
		"Vous avez beau forcer, vous n&rsquo;arrivez pas &agrave; la d&eacute;placer&hellip;"
	],
	"actions" : [
		{
			"name" : "Contourner",
			"action" : [{"key" : "go", "params" : ["necroTrou"]}]
		}
	]
},
"necroS1Roi" : {
	"textes" : [
		"Vous p&eacute;n&eacute;trez prudemment dans la pi&egrave;ce.",
		"Deux cadavres de <span key='goule'>goules</span> gisent sur le sol et une tra&icirc;n&eacute;e de sang vert",
		"continue vers une seconde porte en face de vous&hellip;"
	],
	"actions" : [
		{
			"name" : "Fouiller la pi&egrave;ce",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["hadClef"]}],
			"action" : [
				{"key" : "gain", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["hadClef"]},
				{"key" : "go", "params" : ["necroS1Fouille"]}
			]
		},
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "perte", "params" : ["S1ViaS0"]},
				{"key" : "go", "params" : ["necroGSRoiFight"]}
				]
		}
	]
},
"necroS1" : {
	"textes" : [
		"Vous p&eacute;n&eacute;trez dans une petite pi&egrave;ce vide.",
		"Deux cadavres de <span key='goule'>goules</span> gisent sur le sol."
	],
	"actions" : [
		{
			"name" : "Fouiller la pi&egrave;ce",
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
		"Vous p&eacute;n&eacute;trez dans une petite pi&egrave;ce vide.",
		"Deux <span key='goule'>goules</span> vous observent, le regard vitreux."
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
		"Vous abattez ces larves !",
		"Elles ont failli vous d&eacute;coiffer&hellip;",
		"Il est temps de continuer !"
	],
	"actions" : [
		{
			"name" : "Fouiller la pi&egrave;ce",
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
		"La salle est compl&egrave;tement vide hormis un petit paillasson",
		"devant l&rsquo;entr&eacute;e inscrit &laquo; HellCome &raquo;.",
		"En le soulevant, vous d&eacute;couvrez une petite <span key='clefS2'>clef</span>&hellip;",
		"Vous la prenez et vous dirigez vers la porte&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
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
		"Vous p&eacute;n&eacute;trez dans une tr&egrave;s grande crypte.",
		"&Agrave; votre arriv&eacute;e, le gardien des lieux, une <span key='grosseGoule'>grosse goule</span> se dirige vers vous.",
		"Sur le c&ocirc;t&eacute;, deux <span key='squelette'>squelettes</span> sortent lentement de leurs cercueils&hellip;"
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
		"Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat.",
		"Encore sous le choc, vous observez la pi&egrave;ce autour de vous&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSRoiFight" : {
	"textes" : [
		"Vous p&eacute;n&eacute;trez dans une tr&egrave;s grande crypte.",
		"Le <span key='roiAraigneeBlesse'>roi araign&eacute;e</span> est couch&eacute; au centre, inconscient, une <span key='grosseGoule'>grosse goule</span> morte dans la gueule&hellip;",
		"Sur le c&ocirc;t&eacute;, deux <span key='squelette'>squelettes</span> sortent lentement de leurs cercueils&hellip;"
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
		"Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat et vous dirigez vers votre ami.",
		"Le roi, &agrave; l&rsquo;agonie, vous exprime son dernier souhait :",
		"&laquo; Merci, noble aventurier. Je me meurs&hellip; Mais vous, vous pouvez encore sauver votre esp&egrave;ce.",
		"Vengez-nous, combattez pour l&rsquo;araign&eacute;e ! &raquo;",
		"Avant de mourir, le roi s&rsquo;arrache un <span key='crocRoi'>croc</span> et le jette &agrave; vos pieds."
	],
	"actions" : [
		{
			"name" : "Prendre le croc",
			"action" : [
				{"key" : "gain", "params" : ["crocRoi"]},
				{"key" : "go", "params" : ["necroGSFight3Oui"]}
			]
		},
		{
			"name" : "Laisser le croc",
			"action" : [
				{"key" : "go", "params" : ["necroGSFight3Non"]}
			]
		}
	]
},
"necroGSFight3Oui" : {
	"textes" : [
		"Vous prenez l&rsquo;arme en souvenir de votre ami.",
		"Elle fera certainement une alli&eacute;e pr&eacute;cieuse !",
		"Encore sous le choc, vous observez la pi&egrave;ce autour de vous&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSFight3Non" : {
	"textes" : [
		"Vous laissez l&rsquo;arme devant votre ami.",
		"Esp&eacute;rant qu&rsquo;elle l&rsquo;accompagne dans l&rsquo;au-del&agrave;.",
		"Encore sous le choc, vous observez la pi&egrave;ce autour de vous&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGS" : {
	"textes" : [
		"Vous vous trouvez dans une gigantesque salle aux allures de crypte.",
		"Quelques cercueils sont &eacute;parpill&eacute;s un peu partout.",
		"Vous remarquez trois portes : &agrave; gauche, en face et &agrave; droite&hellip;"
	],
	"actions" : [
		{
			"name" : "Fouiller les cercueils",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["fouilleCercueil"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSFouilleCercueil"]}
			]
		},
		{
			"name" : "Fouiller la salle",
			"action" : [
				{"key" : "go", "params" : ["necroGSFouilleSalle"]}
			]
		},
		/**
		 * Gauche
		 */
		{
			"name" : "Aller &agrave; gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
			]
		},
		{
			"name" : "Aller &agrave; gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["necroS1Clean"], "necroS1", "necroS1Fight"]}
			]
		},
		/**
		 * Droite
		 */
		{
			"name" : "Aller &agrave; droite",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "go", "params" : ["necroS3GS"]}
			]
		},
		{
			"name" : "Aller &agrave; droite",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		},
		/**
		 * Face
		 */
		{
			"name" : "Aller en face",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS1"]}],
			"action" : [
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		},
		{
			"name" : "Aller en face",
			"appairIf" : [{"key" : "hasItem", "params" : ["viaS3"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["S2Clean"], "necroS2Clean", "necroGSS2"]}
			]
		},
		/**
		 * Retour
		 */
		{
			"name" : "Revenir sur vos pas",
			"action" : [
				{"key" : "hasItem", "params" : [["viaS1"], "necroS1", "necroS3GS"]}
			]
		}
	]
},
"necroGSFouilleCercueil" : {
	"textes" : [
		"Avec d&eacute;go&ucirc;t, vous fouillez les cercueils.",
		"Les deux premiers sont vides, mais dans le troisi&eacute;me,",
		"vous apercevez une lueur jaune sous un tas d&rsquo;os&hellip;"
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
		"Vous saisissez un authentique <span key='elixir'>&eacute;lixir</span> !",
		"Malheureusement, vous n&rsquo;&ecirc;tes pas le seul sur le coup&hellip;",
		"Une main osseuse vous tient fermement le poigner.",
		"Vous vous &eacute;cartez brusquement, emportant la main avec vous,",
		"pendant qu&rsquo;un <span key='squeletteManchot'>squelette manchot</span> sort difficilement de son cercueil&hellip;"
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
		"Vous vous d&eacute;barassez facilement de votre adversaire.",
		"Il est temps de continuer votre aventure !"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSFouilleSalle" : {
	"textes" : [
		"Il s&rsquo;agit d&rsquo;une grande salle ressemblant &agrave; s&rsquo;y m&eacute;prendre &agrave; une crypte.",
		"Les murs sont suintants d&rsquo;humidit&eacute; et un froid intense la parcourt.",
		"Deux torches se trouvent accroch&eacute;es sur le mur du fond&hellip;"
	],
	"actions" : [
		{
			"name" : "Voir la torche &agrave; gauche",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeG", "torcheExploseG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheG"]}
			]
		},
		{
			"name" : "Voir la torche &agrave; gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
			]
		},
		{
			"name" : "Voir la torche &agrave; gauche",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheExploseG"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheExplose"]}
			]
		},
		{
			"name" : "Voir la torche &agrave; droite",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["torcheAllumeD", "torcheExploseD"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheD"]}
			]
		},
		{
			"name" : "Voir la torche &agrave; droite",
			"appairIf" : [{"key" : "hasItem", "params" : ["torcheAllumeD"]}],
			"action" : [
				{"key" : "go", "params" : ["necroGSTorcheAllume"]}
			]
		},
		{
			"name" : "Voir la torche &agrave; droite",
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
		"Vous vous approchez de la torche sur le mur de gauche.",
		"Celle-ci est &eacute;teinte.",
		"Vous ne trouvez pas qu&rsquo;il fait sombre ? Pourquoi ne pas l&rsquo;allumer ?"
	],
	"actions" : [
		{
			"name" : "Utiliser la bougie",
			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
			"action" : [
				{"key" : "gain", "params" : ["torcheAllumeG"]},
				{"key" : "go", "params" : ["necroGSTorcheOK"]}
			]
		},
		{
			"name" : "Lancer une boule de feu",
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
			"name" : "Impossible",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheD" : {
	"textes" : [
		"Vous vous approchez de la torche sur le mur de droite.",
		"Celle-ci est &eacute;teinte.",
		"Vous ne trouvez pas qu&rsquo;il fait froid ? Pourquoi ne pas se rechauffer un peu ?"
	],
	"actions" : [
		{
			"name" : "Utiliser la bougie",
			"appairIf" : [{"key" : "hasItem", "params" : ["bougie"]}],
			"action" : [
				{"key" : "gain", "params" : ["torcheAllumeD"]},
				{"key" : "go", "params" : ["necroGSTorcheOK"]}
			]
		},
		{
			"name" : "Lancer une boule de feu",
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
			"name" : "Impossible",
			"action" : [
				{"key" : "go", "params" : ["necroGS"]}
			]
		}
	]
},
"necroGSTorcheOK" : {
	"textes" : [
		"Vous allumez consciencieusement la torche en prenant soin de ne pas vous br&ucirc;ler.",
		"Soudain, vous entendez un syst&egrave;me d&rsquo;engrenages s&rsquo;enclencher&hellip;",
		"Il semblerait qu&rsquo;une porte se soit ouverte quelque part."
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
		"Vous lancez votre plus belle <span key='bouleFeu'>boule de feu</span> !",
		"Celle-ci &eacute;clate violemment sur le mur et explose la torche.",
		"Il ne reste plus qu&rsquo;une vieille tige en souvenir.",
		"R.I.P la torche&hellip;"
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
		"La torche brille de mille feux !",
		"Ne la regardez pas trop longtemps, &ccedil;a pourrait br&ucirc;ler !"
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
		"Une vieille tige carbonis&eacute;e se dresse fi&egrave;rement sur le mur.",
		"Elle n&rsquo;avait pourtant rien fait de mal&hellip;"
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
		"Vous faites face &agrave; une petite porte ferm&eacute;e &agrave; clef.",
		"Elle semble tr&egrave;s r&eacute;sistante&hellip;",
		"En tendant l&rsquo;oreille, vous entendez des cris &agrave; l&rsquo;int&eacute;rieur,",
		"comme si une personne essayait de se d&eacute;battre."
	],
	"actions" : [
		{
			"name" : "Utiliser la clef",
			"appairIf" : [{"key" : "hasItem", "params" : ["clefS2"]}],
			"action" : [
				{"key" : "perte", "params" : ["clefS2"]},
				{"key" : "gain", "params" : ["S2Ouvert"]},
				{"key" : "sound", "params" : ["door"]},
				{"key" : "go", "params" : ["necroS2"]}
			]
		},
		{
			"name" : "Ouvrir",
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
		"Vous ouvrez la porte et entrez doucement dans la pi&egrave;ce.",
		"Les cris se font de plus en plus pressants et s&rsquo;arr&ecirc;tent d&rsquo;un coup.",
		"Vous apercevez une ombre dans le fond de la pi&egrave;ce.",
		"Elle vous parle d&rsquo;une voix enfantine :",
		"&laquo; Qui est l&agrave; ? J&rsquo;ai peur&hellip; J&rsquo;ai faim&hellip; &raquo;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroS22"]}
			]
		}
	]
},
"necroS2Retour" : {
	"textes" : [
		"Vous ouvrez la porte et entrez doucement dans la pi&egrave;ce.",
		"Les cris se font de plus en plus pressants et s&rsquo;arr&ecirc;tent d&rsquo;un coup.",
		"L&rsquo;ombre dans le fond de la pi&egrave;ce vous regarde toujours sans bouger.",
		"Elle vous parle d&rsquo;une voix enfantine, calmement :",
		"&laquo; Te revoil&agrave; ? Tu viens jouer ? &raquo;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroS22"]}
			]
		}
	]
},
"necroS22" : {
	"textes" : [
		"Vous vous approchez tout doucement pour ne pas l&rsquo;effrayer&hellip;",
		"La silhouette s&rsquo;enfonce un peu plus dans l&rsquo;obscurit&eacute;.",
		"Vous entendez soudain une voix criarde :",
		"&laquo; C&rsquo;est un m&eacute;chant ! Tue-le ! Tue-le, d&eacute;chet ! &raquo;",
		"Puis, la voix enfantine :",
		"&laquo; Non&hellip; Il ne faut pas&hellip; &raquo;"
	],
	"actions" : [
		{
			"name" : "Parler",
			"action" : [
				{"key" : "go", "params" : ["necroS2Parle"]}
			]
		},
		{
			"name" : "Approcher",
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
		"Vous essayez de rassurer l&rsquo;enfant d&rsquo;une voix douce.",
		"Mais, c&rsquo;est &agrave; nouveau la voix criarde qui vous r&eacute;pond :",
		"&laquo; Silence ! Insecte inutile ! Il ne t&rsquo;&eacute;coutera pas !",
		"Maintenant, tue-le o&ugrave; tu souffriras de nouveau ! &raquo;",
		"Vous voyez dans le noir deux points brillants&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroS2Approche"]}
			]
		}
	]
},
"necroS2Approche" : {
	"textes" : [
		"L&rsquo;ombre vous regarde fixement et s&rsquo;avance doucement vers vous.",
		"La porte derri&egrave;re vous claque violemment et vous entendez l&rsquo;enfant rire&hellip;",
		"&laquo; Tu aurais d&ucirc; t&rsquo;enfuir tant que tu le pouvais&hellip; &raquo;",
		"&Agrave; mesure que la forme s&rsquo;approche, vous la discernez mieux&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["necroS2Enfant"]}
			]
		}
	]
},
"necroS2Enfant" : {
	"textes" : [
		"Un enfant s&rsquo;avance lentement, blanc comme un linge.",
		"Ses bras sont anormalement longs et couverts de coupures.",
		"De ses doigts sortent de grandes tiges de fer&hellip;",
		"En avan&ccedil;ant, il se met &agrave; ricaner.",
		"Ses dents, pointues comme les crocs d&rsquo;un loup, brillent d&rsquo;une couleur rouge&acirc;tre."
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
		"Mais quelle &eacute;tait cette horreur ?!",
		"Les enfants captur&eacute;s servaient &agrave; fabriquer ce monstre ?!",
		"Vous r&eacute;alisez soudain que d&rsquo;autres enfants doivent subir le m&ecirc;me sort &agrave; l&rsquo;heure qu&rsquo;il est !",
		"Il n&rsquo;est peut-&ecirc;tre pas trop tard !",
		"Vous reprenez vos esprits et repartez &agrave; l&rsquo;aventure."
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
		"La salle se compose simplement d&rsquo;une &eacute;tag&egrave;re remplie de vieux parchemins.",
		"En en lisant quelques-uns, vous d&eacute;couvrez qu&rsquo;il est possible, avec la formule ad&eacute;quate",
		"et un peu de concentration, de lancer une terrible <span key='bouleFeu'>boule de feu</span> !",
		"Il est temps de retourner dans la grande salle ! L&rsquo;aventure n&rsquo;attend pas !"
	],
	"actions" : [
		{
			"name" : "Continuer",
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
		"La salle est vide&hellip; Seul reste au sol cette <span key='experience'>exp&eacute;rience</span> rat&eacute;e.",
		"Vous vous demandez quel &ecirc;tre immonde a pu op&eacute;rer telle transformation&hellip;"
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
		"Vous entrez dans un long couloir &eacute;clair&eacute; par de nombreuses torches.",
		"Une ambiance calme et presque conviviale vous invite &agrave; avancer&hellip;",
		"Une grande porte de ch&ecirc;ne vous fait face et deux portes plus petites",
		"se trouvent de chaque c&ocirc;t&eacute; du couloir&hellip;"
	],
	"actions" : [
		{
			"name" : "Aller &agrave; gauche",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S4Clean"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["torcheAllumeG"], "necroS4", "necroSalleFerme"]}
			]
		},
		{
			"name" : "Aller &agrave; droite",
			"appairIf" : [{"key" : "hasNoItem", "params" : ["S5Clean"]}],
			"action" : [
				{"key" : "hasItem", "params" : [["torcheAllumeD"], "necroS5", "necroSalleFerme"]}
			]
		},
		{
			"name" : "Aller en face",
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
		"Vous approchez de la porte, mais remarquez qu&rsquo;elle ne possede ni poign&eacute;e ni serrure&hellip;",
		"Pas tr&egrave;s pratique tout de m&ecirc;me.",
		"Vous essayez de forcer un peu pour l&rsquo;ouvrir, mais impossible de la faire bouger."
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
"necroS4" : {
	"textes" : [
		"Vous entrez dans une pi&egrave;ce aux allures de prison.",
		"De nombreux enfants sont agglutin&eacute;s dans un coin.",
		"Lorsqu&rsquo;ils s&rsquo;enfuient &agrave; votre demande, l&rsquo;un d&rsquo;eux vous tend une <span key='potionSante'>fiole rouge</span>.",
		"&Ccedil;a peut toujours aider&hellip;"
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "gain", "params" : ["S4Clean"]},
				{"key" : "gain", "params" : ["potionSante"]},
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		}
	]
},
"necroS5" : {
	"textes" : [
		"Vous entrez dans une belle biblioth&egrave;que pleine de livres anciens.",
		"Vous en lisez quelques-uns qui vous apprennent qu&rsquo;il est possible,",
		"en se concentrant, de faire sortir de l&rsquo;&eacute;nergie de son corps afin de se <span key='soin'>soigner</span>."
	],
	"actions" : [
		{
			"name" : "retour",
			"action" : [
				{"key" : "gain", "params" : ["S5Clean"]},
				{"key" : "gain", "params" : ["soin"]},
				{"key" : "go", "params" : ["necroCouloir"]}
			]
		}
	]
},
"necroSB" : {
	"textes" : [
		"Plein de confiance, vous p&eacute;n&eacute;trez fi&egrave;rement dans la derni&egrave;re salle.",
		"Celle-ci est ronde et centr&eacute;e sur un grand puits d&rsquo;eau verte.",
		"Un vieil homme y est pench&eacute;, pronon&ccedil;ant d&rsquo;&eacute;tranges incantations."
	],
	"actions" : [
		{
			"name" : "Toussoter",
			"action" : [
				{"key" : "go", "params" : ["bossTousse"]}
			]
		},
		{
			"name" : "Avancer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance"]}
			]
		},
		{
			"name" : "Parler",
			"action" : [
				{"key" : "go", "params" : ["bossParle"]}
			]
		}
	]
},
"bossTousse" : {
	"textes" : [
		"Vous toussez l&eacute;g&egrave;rement pour attirer l&rsquo;attention du vieil homme,",
		"mais &ecirc;tes soudain pris d&rsquo;une quinte plus forte.",
		"Le vieux, toujours pench&eacute;, n&rsquo;a pas boug&eacute; d&rsquo;un poil&hellip;"
	],
	"actions" : [
		{
			"name" : "Avancer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance"]}
			]
		},
		{
			"name" : "Parler",
			"action" : [
				{"key" : "go", "params" : ["bossParle"]}
			]
		}
	]
},
"bossParle" : {
	"textes" : [
		"&laquo; Je suis venu pour les enfants ! O&ugrave; sont-ils ? &raquo;",
		"Le vieux se retourne alors lentement en souriant&hellip;",
		"Lorsque vous voyez son visage, vous ne pouvez que r&eacute;prouver un fort d&eacute;go&ucirc;t :",
		"celui-ci est couvert de pustules et laisse entrevoir son cr&acirc;ne &agrave; nu &agrave; plusieurs endroits.",
		"De nombreux vers circulent dans la peau de son cou et descendent sous son ample manteau."
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance2"]}
			]
		}
	]
},
"bossAvance" : {
	"textes" : [
		"Vous avancez vers le vieil homme et posez une main sur son &eacute;paule.",
		"Il se retourne alors lentement en souriant&hellip;",
		"Lorsque vous voyez son visage, vous ne pouvez que r&eacute;prouver un fort d&eacute;go&ucirc;t :",
		"celui-ci est couvert de pustule et laisse entrevoir son cr&acirc;ne &agrave; nu &agrave; plusieurs endroits.",
		"De nombreux vers circulent dans la peau de son cou et descendent sous son ample manteau."
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["bossAvance2"]}
			]
		}
	]
},
"bossAvance2" : {
	"textes" : [
		"&laquo; Bienvenue, jeune homme&hellip; Je suis le ma&icirc;tre de ces lieux. &raquo;",
		"Il vous regarde, mais ses yeux renvoient le vide.",
		"&laquo; Vous avez certainement vu mes cr&eacute;ations ?",
		"Si ce n&rsquo;est pas le cas, laissez moi vous les pr&eacute;senter&hellip; &raquo;",
		"Il ricane doucement, alors que deux <span key='experience'>monstres</span> sortent du puits.",
		"Ils ressemblent &agrave; des enfants, mais n&rsquo;en ont plus que l&rsquo;apparence&hellip;"
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
		"Vous tuez &agrave; contrec&oelig;ur ces abominations&hellip;",
		"&laquo; Nonnnn !! Qu&rsquo;avez-vous fait &agrave; mes perles ! Vous allez le regretter ! &raquo;",
		"Le <span key='necromancien'>vieux</span> s&rsquo;approche en titubant et tend les bras en avant.",
		"Le combat risque d&rsquo;&ecirc;tre facile&hellip;"
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
		"Le vieux avait de la ressource !",
		"Vous finissez le combat en lui transper&ccedil;ant le c&oelig;ur, puis repartez.",
		"Les enfants seront au moins lib&eacute;r&eacute;s de ce monstre&hellip;",
		"Alors que vous vous appr&ecirc;tez &agrave; ouvrir la porte pour sortir,", 
		"vous entendez rire derri&egrave;re vous&hellip;"
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["boss4"]}
			]
		}
	]
},
"boss4" : {
	"textes" : [
		"Une voix caverneuse r&eacute;sonne dans la pi&egrave;ce :",
		"&laquo; Hahaha ! Tu pensais vraiment me battre ainsi ?! &raquo;",
		"Une dalle de la pi&egrave;ce vole vers vous et s&rsquo;&eacute;crase sur le mur.",
		"&laquo; Tu n&rsquo;as fait que me lib&eacute;rer, pauvre mortel ! &raquo;", 
		"Les dalles dansent dans la salle et un tourbillon se forme dans le puits."
	],
	"actions" : [
		{
			"name" : "Continuer",
			"action" : [
				{"key" : "go", "params" : ["boss5"]}
			]
		}
	]
},
"boss5" : {
	"textes" : [
		"&laquo; Les enfants sont &agrave; moi ! Ils sont si faciles &agrave; manipuler, &agrave; torturer&hellip; &raquo;",
		"Le tourbillon grandit et sort violemment du puits pour s&rsquo;&eacute;craser sur le cadavre du vieux.",
		"&laquo; Ils sont mon arm&eacute;e ! Tu n&rsquo;es pas en mesure de nous arr&ecirc;ter ! &raquo;",
		"Le corps du vieillard se rel&egrave;ve et vole dans l&rsquo;air comme une marionnette.", 
		"&laquo; Maintenant, observe ta fin ! &raquo;",
		"Le <span key='liche'>vieux</span> se redresse d&rsquo;un coup et se jette sur vous avec agilit&eacute; !"
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
		"Vous exterminez ce d&eacute;mon sans remords !",
		"Son &acirc;me s&rsquo;envole dans la pi&egrave;ce, emportant avec elle le liquide vert inf&acirc;me.",
		"Mais&hellip; Personne ne le saura jamais&hellip;",
		"Vous, pauvre aventurier, avez sauv&eacute; le village et certainement le monde.", 
		"Avec noblesse, vous vous retournez et partez vers de nouvelles aventures.",
		"Peut-&ecirc;tre d&rsquo;autres qu&ecirc;tes valent-elles la peine d&rsquo;&ecirc;tre v&eacute;cues&hellip;"
	],
	"actions" : [
		{
			"name" : "Terminer",
			"action" : [
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
					return $.extend(true, {}, data[key]);
				}
			};
		});