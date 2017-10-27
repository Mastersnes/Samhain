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
					    "F&eacute;licitation, vous avez termin&eacute; le jeu !",
					    "Suivez-nous sur <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> ou <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>.",
					    "Soutenez-nous sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
					    "Nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
					    "Vous pouvez aussi retenter votre chance en lancant une nouvelle partie."
					 ],
					"actions" : [ {
						"name" : "Recommencer",
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
					            "Oh non ! vous avez perdu !", 
					            "Suivez-nous sur <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> ou <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>.",
					            "Soutenez-nous sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
					            "Nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
					            "Vous pouvez aussi retenter votre chance en lancant une nouvelle partie."
					            ],
					            "actions" : [ {
					            	"name" : "R&eacute;essayer",
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
							"Une nouvelle journ&eacute;e se termine.",
							"La douceur de l&rsquo;automne caresse les feuilles qui virevoltent aux alentours.",
							"Ayant termin&eacute; votre dur labeur un peu plus t&ocirc;t,",
							"Vous d&eacute;cidez de vous reposer au pied d&rsquo;un des g&eacute;ants feuillus."
							],
					"actions" : [ {
						"name" : "Suivant", "action" : [ {"key" : "go", "params" : [ "repos2" ]} ]
					} ]
				},
				"repos2" : {
					"textes" : [ 
							"Vous fermez les yeux pour mieux appr&eacute;cier la brise.",
							"Au loin, il vous semble entendre des bruits de pattes&hellip;",
							"Vous vous levez en sursaut quand deux <span key='araignee'>araign&eacute;es</span> vous sautent dessus !",
					        ],
					"actions" : [ {
						"name" : "Combattre", "action" : [ 
						    { "key" : "fight", "params" : [ ["araignee", "araignee", "araignee"], "reposCombat" ]}
						 ]
					}, {
						"name" : "Fuir en courant", 
						"action" : [ 
						         { "key" : "hurt","params" : [ 10 ]},
						         { "key" : "go", "params" : [ "reposVille" ]}
						]
					} ]
				},
				"reposCombat" : {
					"textes" : [ 
							"Apr&egrave;s avoir d&eacute;fait vos adversaires &agrave; la force de vos <span key='poing'>poings</span>,",
							"Vous faites une pause pour reprendre vos esprits :",
					        ],
					"actions" : [ {
						"name" : "Examiner les alentours", "action" : [ { "key" : "go", "params" : [ "reposExamine" ]} ]
					}, {
						"name" : "Fouiller les corps", "action" : [ { "key" : "go", "params" : [ "reposFouille" ]} ]
					}, {
						"name" : "Rentrer en ville", "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
					} ]
				},
				"reposFouille" : {
					"textes" : [ 
"Berk ! Pourquoi fouiller une <span key='araignee'>araign&eacute;e</span> ?",
"Vous esp&eacute;riez vraiment y trouver quelque chose ?",
					        ],
					"actions" : [ {
						"name" : "Retour", "action" : [ { "key" : "go", "params" : [ "reposCombat" ]} ]
					} ]
				},
				"reposExamine" : {
					"textes" : [ 
"En vous penchant, vous remarquez que les traces de vos adversaires remontent vers une caverne non loin.",
"On peut clairement y entendre grouiller divers insectes.",
"On se lance ?"
					        ],
					"actions" : [ {
						"name" : "En avant !", "action" : [ { "key" : "go", "params" : [ "nid" ]} ]
					}, {
						"name" : "Rentrer en ville", "action" : [ { "key" : "go", "params" : [ "reposVille" ]} ]
					} ]
				},
				/**
				 * Nid d'araignee
				 */
				"nid" : {
					"textes" : [ 
				            "Vous arrivez dans une cavit&eacute; plut&ocirc;t sombre et silencieuse.",
					        "Une odeur naus&eacute;abonde monte &agrave; votre nez.",
					        "En y regardant de plus pr&eacute;s, de nombreux cadavres <span key='araignee'>d&rsquo;araign&eacute;es</span> recouvrent le sol."
					        ],
					"actions" : [ {
						"name" : "Examiner le sol", "action" : [ { "key" : "go", "params" : [ "nidExamine" ]} ]
					}, {
						"name" : "Regarder aux alentours", "action" : [ { "key" : "go", "params" : [ "nid2" ]} ]
					} ]
				},
				"nidExamine" : {
					"textes" : [ 
"En fouillant les cadavres, vous trouvez une belle <span key='dague'>dague</span> qui semble abandonn&eacute;e.",
"Vous vous penchez pour la saisir, quand&hellip;"
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "gain", "params" : [ "dague" ]}, 
						      { "key" : "sound", "params" : [ "punch" ]},
						      { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "go", "params" : [ "nidDague" ]}
						]
					} ]
				},
				"nidDague" : {
					"textes" : [ 
"Vous n&rsquo;avez pas le temps d&rsquo;esquiver !",
"Un gros <span key='poing'>poing</span> vous &eacute;crase le visage et vous fait tomber au sol.",
"En vous relevant, vous distinguez un <span key='bandit'>bandit</span> pr&ecirc;t &agrave; vous d&eacute;trousser !",
"Allez-vous le laisser s&rsquo;en sortir vivant ?!"
					        ],
					"actions" : [ {
						"name" : "Se battre", "action" : [ 
						      { "key" : "fight", "params" : [ ["bandit"], "nid3" ]}
						]
					}, {
						"name" : "Fuir dans la grotte", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
					} ]
				},
				"nid2" : {
					"textes" : [ 
"En regardant bien, vous distinguez un <span key='bandit'>bandit</span> qui se cache dans la p&eacute;nombre.",
"Il s&rsquo;approche en souriant pour entamer le combat.",
"Allez-vous le laisser s&rsquo;en sortir vivant ?!"
					        ],
					"actions" : [ {
						"name" : "Se battre", "action" : [ 
						      { "key" : "fight", "params" : [ ["bandit"], "nid3" ]}
						]
					}, {
						"name" : "Fuir dans la grotte", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
					} ]
				},
				"nid3" : {
					"textes" : [ 
"Le combat se termine et votre adversaire s&rsquo;&eacute;croule sur le sol.",
"Dans le feu de l&rsquo;action, vous en profitez pour :"
					        ],
					"actions" : [ {
						"name" : "Fouiller le corps", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["dague"], "nid3Fouille", "nid3FouilleDague" ]}
						]
					}, {
						"name" : "Continuer", "action" : [ { "key" : "go", "params" : [ "nid4" ]} ]
					} ]
				},
				"nid3Fouille" : {
					"textes" : [ 
"En d&eacute;troussant le d&eacute;trousseur, vous trouvez un gros morceau de <span key='fromage'>fromage</span> !",
"Allez-vous vous r&eacute;galer ou le garder sagement ?"
					        ],
					"actions" : [ {
						"name" : "Manger et continuer", "action" : [ 
                              { "key" : "sound", "params" : [ "eat" ]},
						      { "key" : "heal", "params" : [ 20 ]},
						      { "key" : "go", "params" : [ "nid4" ]}
						]
					}, {
						"name" : "Continuer", "action" : [ 
  						      { "key" : "gain", "params" : [ "fromage" ]},
  						      { "key" : "go", "params" : [ "nid4" ]}
  						]
  					} ]
				},
				"nid3FouilleDague" : {
					"textes" : [ 
"En d&eacute;troussant le d&eacute;trousseur, vous trouvez un gros morceau de <span key='fromage'>fromage</span> !",
"Allez-vous vous r&eacute;galer ou le garder sagement ?"
					        ],
					"actions" : [ {
						"name" : "Manger et continuer", "action" : [ 
						      { "key" : "sound", "params" : [ "eat" ]},
						      { "key" : "heal", "params" : [ 20 ]},
						      { "key" : "random", "params" : [ "nid3TrouveDague", "nid4" ]}
						]
					}, {
						"name" : "Continuer", "action" : [ 
  						      { "key" : "gain", "params" : [ "fromage" ]},
  						      { "key" : "go", "params" : [ "nid3TrouveDague", "nid4" ]}
  						]
  					} ]
				},
				"nid3TrouveDague" : {
					"textes" : [ 
"Vous avez la bonne id&eacute;e de continuer les recherches.",
"En dessous du bonhomme se trouvait une superbe <span key='dague'>dague</span> !",
"Un bon outil qui vous sera bien utile."
					        ],
					"actions" : [ {
						"name" : "Continuer", "action" : [ 
						      { "key" : "gain", "params" : [ "dague" ]},
						      { "key" : "go", "params" : [ "nid4" ]}
						]
					}]
				},
				"nid4" : {
					"textes" : [ 
"Vous vous enfoncez de plus en plus dans l&rsquo;obscurit&eacute; et n&rsquo;y voyez pas grand chose.",
"Soudain, le tunnel se s&eacute;pare en deux.",
"Deux choix s&rsquo;offrent donc &agrave; vous :"
					        ],
					"actions" : [ {
						"name" : "Aller &agrave; gauche", "action" : [ 
						      { "key" : "go", "params" : [ "nidGauche" ]}
						]
					},{
						"name" : "Aller &agrave; droite", "action" : [ 
 						      { "key" : "go", "params" : [ "nidDroite" ]}
 						]
 					}]
				},
				/**
				 * Gauche - Coffre
				 */
				"nidGauche" : {
					"textes" : [ 
"La lumi&egrave;re semble faiblir davantage, mais vous distinguez au loin une faible lueur.",
"En vous approchant, vous apercevez un &eacute;norme coffre."
					        ],
					"actions" : [ {
						"name" : "Essayer de l&apos;ouvrir", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["dague"], "coffre", "coffreEchecSimple" ]}
						]
					},{
						"name" : "Retourner en arriere", "action" : [ 
 						      { "key" : "go", "params" : [ "coffreRetourSimple" ]}
 						]
 					}]
				},
				"coffre" : {
					"textes" : [ 
"Le coffre est solidement ferm&eacute;.",
"Peut-&ecirc;tre qu&rsquo;en for&ccedil;ant un peu avec la <span key='dague'>dague</span>,",
"vous pourriez r&eacute;ussir &agrave; l&rsquo;ouvrir ?"
					        ],
					"actions" : [ {
						"name" : "Forcer le coffre", "action" : [ 
						      { "key" : "random", "params" : [ "coffreReussite1", "coffreReussite2", "coffreEchec1", "coffreEchec2" ]}
						]
					},{
						"name" : "Abandonner", "action" : [ 
 						      { "key" : "go", "params" : [ "coffreEchec12" ]}
 						]
 					}]
				},
				"coffreReussite1" : {
					"textes" : [ 
"Le coffre coince, mais en for&ccedil;ant un peu&hellip;",
"Super ! Vous r&eacute;ussissez &agrave; l&rsquo;ouvrir en grand !",
"Une belle <span key='potionSante'>potion de couleur rouge</span> et un <span key='bouclierBois'>bouclier en bois</span> vous font face."
					        ],
					"actions" : [ {
						"name" : "Tout prendre", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante"]},
						      { "key" : "gain", "params" : [ "bouclierBois"]},
						      { "key" : "go", "params" : [ "coffreReussite12"]}
						]
					}]
				},
				"coffreReussite12" : {
					"textes" : [ 
"Fier de votre butin,",
"vous retournez &agrave; l&rsquo;intersection et prenez la direction de droite."
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreReussite2" : {
					"textes" : [ 
"Le coffre coince, mais en for&ccedil;ant un peu&hellip;",
"La <span key='dague'>dague</span> &eacute;clate en morceaux et le coffre se renverse sur le sol.",
"Dans le chantier, vous discernez une <span key='potionSante'>potion rouge</span> et un <span key='bouclierBois'>bouclier en bois</span>."
					        ],
					"actions" : [ {
						"name" : "Tout prendre", "action" : [ 
						      { "key" : "perte", "params" : [ "dague"]},
   						      { "key" : "gain", "params" : [ "potionSante"]},
   						      { "key" : "gain", "params" : [ "bouclierBois"]},
   						      { "key" : "go", "params" : [ "coffreReussite21"]}
   						]
					}]
				},
				"coffreReussite21" : {
					"textes" : [ 
"Fier de votre butin, mais un peu nostalgique de votre belle <span key='dague'>dague</span>,",
"vous retournez &agrave; l&rsquo;intersection et prenez la direction de droite."
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchec1" : {
					"textes" : [ 
"Le coffre coince, mais en for&ccedil;ant un peu&hellip;",
"Non, impossible ! Il ne bouge pas d&rsquo;un poil."
					        ],
					"actions" : [ {
						"name" : "Insister", "action" : [ 
						      { "key" : "random", "params" : [ "coffreReussite1", "coffreReussite2", "coffreEchec2"]}
						]
					},{
						"name" : "Laisser tomber", "action" : [ 
   						      { "key" : "go", "params" : [ "coffreEchec12"]}
   						]
   					}]
				},
				"coffreEchec12" : {
					"textes" : [ 
"Un peu d&eacute;&ccedil;u,",
"vous retournez &agrave; l&rsquo;intersection et prenez la direction de droite."
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchec2" : {
					"textes" : [ 
"Le coffre coince mais en for&ccedil;ant un peu&hellip;",
"Bam ! La <span key='dague'>dague</span> &eacute;clate dans vos mains !",
"Un filet de sang coule doucement sur le sol.",
"Le coffre, lui, vous regarde impassible&hellip;"
					        ],
					"actions" : [ {
						"name" : "Il n&rsquo;en vaut pas la peine&hellip;", "action" : [ 
						      { "key" : "perte", "params" : [ "dague"]},
						      { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "go", "params" : [ "coffreEchec21" ]}
						]
					}]
				},
				"coffreEchec21" : {
					"textes" : [ 
"Avec un mal de chien,",
"vous retournez &agrave; l&rsquo;intersection et prenez la direction de droite."
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				"coffreEchecSimple" : {
					"textes" : [ 
"Le coffre est solidement ferm&eacute;.",
"Impossible de l&rsquo;ouvrir&hellip;"
					        ],
					"actions" : [ {
						"name" : "Tant pis&hellip;", "action" : [ 
						      { "key" : "go", "params" : [ "coffreEchec12"]}
						]
					}]
				},
				"coffreRetourSimple" : {
					"textes" : [ 
"Tranquillement,",
"vous retournez &agrave; l&rsquo;intersection et prenez la direction de droite."
					        ],
					"actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "nidDroite"]}
						]
					}]
				},
				/**
				 * Droite - Roi araignee
				 */
				"nidDroite" : {
					"textes" : [ 
"Vous arrivez dans une immense salle.",
"De nombreuses toiles recouvrent les murs et donnent &agrave; l&rsquo;ensemble une ambiance sinistre.",
"Une forme semble bouger lentement au fond de la pi&egrave;ce, dans l&rsquo;obscurit&eacute;."
					        ],
					"actions" : [ {
						"name" : "S&apos;avancer", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["potionSante"], "roiAraigneePotion", "roiAraignee"]}
						]
					}]
				},
				"roiAraigneePotion" : {
					"textes" : [ 
"En vous approchant, vous apercevez une <span key='roiAraigneeBlesse'>gigantesque araign&eacute;e</span> dans le noir.",
"Mal en point, elle s&rsquo;avance doucement vers vous.",
"Elle semble vouloir quelque chose&hellip;"
					        ],
					"actions" : [ {
						"name" : "L&apos;attaquer", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "&laquo; Stop ! &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneePotion2"]}
 						]
 					}]
				},
				"roiAraigneePotion2" : {
					"textes" : [ 
"La cr&eacute;ature s&rsquo;arr&ecirc;te net et s&rsquo;exclame d&rsquo;une voix caverneuse :",
"&laquo; Qui es-tu, jeune aventurier, pour oser p&eacute;n&eacute;trer",
"dans l&rsquo;antre du <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> ?! &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; La mort ! &raquo;", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "&laquo; Un ami &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneePotionAmi"]}
 						]
 					},{
						"name" : "&laquo; Qui &ecirc;tes-vous ? &raquo;", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneePotionQui"]}
						]
					}]
				},
				"roiAraigneePotionQui" : {
					"textes" : [ 
"&laquo; Je suis Aros ! Le roi arachnide !",
"Je r&eacute;gnais sur ce royaume jusqu&rsquo;&agrave; aujourd&rsquo;hui, mais&hellip;",
"D&rsquo;horribles cr&eacute;atures ont assassin&eacute; mes enfants !",
"M&rsquo;aiderez-vous &agrave; me soigner ? &raquo;"
					        ],
					"actions" : [ {
						"name" : "Donner la potion", "action" : [ 
						      { "key" : "perte", "params" : [ "potionSante"]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "Refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneePotionAmi" : {
					"textes" : [ 
"&laquo; Vraiment ? Si ce que vous dites est vrai,",
"pourriez-vous aider un bon ami en le soignant ? &raquo;"
					        ],
					"actions" : [ {
						"name" : "Donner la potion", "action" : [ 
						      { "key" : "perte", "params" : [ "potionSante"]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "Refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraignee" : {
					"textes" : [ 
"En vous approchant, vous apercevez une <span key='roiAraigneeBlesse'>gigantesque araign&eacute;e</span> dans le noir.",
"Mal en point, elle s&rsquo;avance doucement vers vous.",
"Elle semble vouloir quelque chose&hellip;"
					        ],
					"actions" : [ {
						"name" : "L&apos;attaquer", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "&laquo; Stop ! &raquo;", "action" : [ 
 						      { "key" : "hasItem", "params" : [ ["fromage"], "roiAraigneeFromage", "roiAraigneeRien"]}
 						]
 					}]
				},
				"roiAraigneeFromage" : {
					"textes" : [ 
"La cr&eacute;ature s&rsquo;arr&ecirc;te net et s&rsquo;exclame d&rsquo;une voix caverneuse.",
"&laquo; Qui es-tu, jeune aventurier, pour oser p&eacute;n&eacute;trer",
"dans l&rsquo;antre du <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> ?! &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; La mort ! &raquo;", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "&laquo; Un ami &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFromageAmi"]}
 						]
 					},{
						"name" : "&laquo; Qui &ecirc;tes-vous ? &raquo;", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeFromageQui"]}
						]
					}]
				},
				"roiAraigneeFromageQui" : {
					"textes" : [ 
"&laquo; Je suis Aros ! Le roi arachnide !",
"Je r&eacute;gnais sur ce royaume jusqu&rsquo;&agrave; aujourd&rsquo;hui, mais&hellip;",
"D&rsquo;horribles cr&eacute;atures ont assassin&eacute; mes enfants !",
"M&rsquo;aiderez-vous &agrave; me soigner ? &raquo;"
					        ],
					"actions" : [ {
						"name" : "Donner le fromage", "action" : [ 
						      { "key" : "perte", "params" : [ "fromage"]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "Refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeFromageAmi" : {
					"textes" : [ 
"&laquo; Vraiment ? Si ce que vous dites est vrai,",
"pourriez-vous aider un bon ami en le soignant ? &raquo;"
					        ],
					"actions" : [ {
						"name" : "Donner le fromage", "action" : [ 
						      { "key" : "perte", "params" : [ "fromage"]},
						      { "key" : "go", "params" : [ "roiAraigneeGuerit"]}
						]
					},{
						"name" : "Refuser", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeRien" : {
					"textes" : [ 
"La cr&eacute;ature s&rsquo;arr&ecirc;te net et s&rsquo;exclame d&rsquo;une voix caverneuse.",
"&laquo; Qui es-tu, jeune aventurier, pour oser p&eacute;n&eacute;trer",
"dans l&rsquo;antre du <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> ?! &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; La mort ! &raquo;", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					},{
						"name" : "&laquo; Qui &ecirc;tes-vous ? &raquo;", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeQui"]}
						]
					}]
				},
				"roiAraigneeQui" : {
					"textes" : [ 
"&laquo; Je suis Aros ! Le roi arachnide !",
"Je r&eacute;gnais sur ce royaume jusqu&rsquo;&agrave; aujourd&rsquo;hui, mais&hellip;",
"D&rsquo;horribles cr&eacute;atures ont assassin&eacute; mes enfants !",
"M&rsquo;aiderez-vous &agrave; me soigner ? &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; Je n&rsquo;ai rien &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeRefus"]}
 						]
 					}]
				},
				"roiAraigneeGuerit" : {
					"textes" : [ 
"&laquo; Je vous remercie mon ami !",
"Je me sens beaucoup mieux !",
"Malheureusement, vous &ecirc;tes arriv&eacute; un peu tard&hellip;",
"Mon peuple a &eacute;t&eacute; d&eacute;cim&eacute;. &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; Qui a fait &ccedil;a ? &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit2"]}
 						]
 					}]
				},
				"roiAraigneeGuerit2" : {
					"textes" : [ 
"&laquo; Ils sont apparu sans pr&eacute;venir du c&oelig;ur des t&eacute;n&egrave;bres,",
"leur r&acirc;le sombre les pr&eacute;c&eacute;dant.",
"Des spectres, des <span key='goule'>goules</span>, des cr&eacute;atures de l&rsquo;autre monde&hellip; &raquo;"
					        ],
					"actions" : [ {
						"name" : "&laquo; Comment ?! &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit3"]}
 						]
 					}]
				},
				"roiAraigneeGuerit3" : {
					"textes" : [ 
"&laquo; Ils ont tu&eacute; mes enfants ! Ces monstres !",
"Je dois les venger ! &raquo;",
"Le roi se jette au-dessus de vous et se dirige vers la sortie."
					        ],
					"actions" : [ {
						"name" : "&laquo; O&ugrave; allez-vous ? &raquo;", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeGuerit4"]}
 						]
 					},{
						"name" : "Le laisser partir", "action" : [ 
						      { "key" : "go", "params" : [ "roiAraigneeParti"]}
						]
					}]
				},
				"roiAraigneeGuerit4" : {
					"textes" : [ 
"&laquo; Ils sont partis attaquer votre village !",
"Les laisserez-vous donc faire ?!",
"Je dois venger les miens ! En route ! &raquo;",
"Le roi s&rsquo;enfonce dans les t&eacute;n&egrave;bres de la grotte."
					        ],
					"actions" : [ {
						"name" : "Fouiller les lieux", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFouilleGrotte"]}
 						]
 					},{
						"name" : "Aller en ville", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeParti" : {
					"textes" : [ 
"Le roi s&rsquo;enfonce dans les t&eacute;n&egrave;bres de la grotte",
"et vous laisse seul dans sa demeure&hellip;"
					        ],
					"actions" : [ {
						"name" : "Fouiller les lieux", "action" : [ 
 						      { "key" : "go", "params" : [ "roiAraigneeFouilleGrotte"]}
 						]
 					},{
						"name" : "Retourner en ville", "action" : [ 
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeFouilleGrotte" : {
					"textes" : [ 
"Malheureusement, vous ne trouvez rien d&rsquo;int&eacute;ressant.",
"De nombreux cadavres d&rsquo;arachnides jonchent le sol."
					        ],
					"actions" : [ {
						"name" : "Retourner en ville", "action" : [
						      { "key" : "gain", "params" : [ "helpRoi"]},
						      { "key" : "go", "params" : [ "reposVille"]}
						]
					}]
				},
				"roiAraigneeRefus" : {
					"textes" : [ 
"&laquo; Tu n&rsquo;es donc pas notre ami&hellip;",
"Tu ne vaux pas mieux que ceux qui ont tu&eacute; mes enfants&hellip;",
"Pars ! Sors de ma demeure&hellip; Laisse-moi mourir en paix. &raquo;"
					        ],
					"actions" : [ {
						"name" : "L&apos;attaquer", "action" : [ 
						      { "key" : "fight", "params" : [ ["roiAraigneeBlesse"], "roiAraigneeAgonie"]}
						]
					}, {
						"name" : "Le laisser", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				"roiAraigneeAgonie" : {
					"textes" : [ 
"&laquo; Pourquoi ?&hellip;",
"Je vous maudis, vous et votre race !",
"Ils vous an&eacute;antiront tous, la mort aux dents&hellip; &raquo;",
"Le roi s&rsquo;&eacute;croule devant vous, dans une marre de sang vert.",
"Vous vous demandez ce qu&rsquo;il a voulu dire&hellip;"
					        ],
					"actions" : [ {
						"name" : "Fouiller", "action" : [ 
						      { "key" : "gain", "params" : [ "venin"]},
						      { "key" : "go", "params" : [ "roiAraigneeAgonieFouille"]}
						]
					}, {
						"name" : "Rentrer en ville", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				"roiAraigneeAgonieFouille" : {
					"textes" : [ 
"Rien d&rsquo;int&eacute;ressant dans la pi&egrave;ce.",
"Mais, vous trouvez sur le roi une <span key='venin'>poche de venin</span> !",
"Elle pourra vous &ecirc;tre utile en combat."
					        ],
					"actions" : [ {
						"name" : "Retourner en ville", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVille"]}
 						]
 					}]
				},
				
				/**
				 * La ville assiegee
				 */
				"reposVille" : {
					"textes" : [ 
					        "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
					        "Au loin, des bruits de combats acharn&eacute;s se font entendre.",
					        "Un vent de panique vous submerge&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Courir &agrave; la ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					},{
						"name" : "Examiner les lieux", 
						"action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "fermeExaminer2", "fermeExaminer"]}
						]
					}]
				},
				"fermeExaminer" : {
					"textes" : [ 
					        "Il s&rsquo;agit d&rsquo;une vieille grange mal entretenue&hellip;",
					        "Elle semble abandonn&eacute;e et un <span key='baton'>gros b&acirc;ton</span> permet de caler la porte.",
					        "Peut-&ecirc;tre en cas d&rsquo;orage ?"
					        ],
			        "actions" : [ {
						"name" : "Retirer le b&acirc;ton", "action" : [ 
						      { "key" : "random", "params" : [ "batonSaisieReussite1", "batonSaisieReussite2", "batonSaisieEchec" ]}
						]
					},{
						"name" : "Casser le b&acirc;ton", "action" : [ 
						      { "key" : "go", "params" : [ "batonPousse"]}
						]
					},{
						"name" : "Courir &agrave; la ville", "action" : [ 
  						      { "key" : "go", "params" : [ "reposVille2"]}
  						]
  					}]
				},
				"fermeExaminer2" : {
					"textes" : [ 
					        "Il s&rsquo;agit d&rsquo;une vieille grange mal entretenue&hellip;",
					        "Elle semble abandonn&eacute;e.",
					        "Le corps d&rsquo;une <span key='goule'>goule</span> g&icirc;t devant la porte grande ouverte."
					        ],
			        "actions" : [ {
						"name" : "Entrer dans la grange", "action" : [ 
						      { "key" : "go", "params" : [ "grange"]}
						]
					},{
						"name" : "Courir &agrave; la ville", "action" : [ 
  						      { "key" : "go", "params" : [ "retourVille2"]}
  						]
  					}]
				},
				"batonSaisieReussite1" : {
					"textes" : [ 
					        "En for&ccedil;ant un peu, vous parvenez &agrave; d&eacute;bloquer le <span key='baton'>b&acirc;ton</span>.",
					        "Dans une roulade arri&egrave;re, vous avez juste le temps d&rsquo;esquiver",
					        "la grosse porte de la grange qui s&rsquo;ouvre avec fracas&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Garder le b&acirc;ton", "action" : [ 
						      { "key" : "gain", "params" : [ "baton" ]},
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					},{
						"name" : "Le laisser", "action" : [ 
						      { "key" : "go", "params" : [ "fermeGoule"]}
						]
					}]
				},
				"batonSaisieReussite2" : {
					"textes" : [ 
					        "En for&ccedil;ant un peu, vous parvenez &agrave; d&eacute;bloquer le <span key='baton'>b&acirc;ton</span>.",
					        "Malheureusement vous n&rsquo;avez pas le temps d&rsquo;&eacute;viter",
					        "la grosse porte de la grange qui s&rsquo;ouvre avec fracas&hellip;",
					        "et vous fait tomber &agrave; la renverse&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Garder le b&acirc;ton", "action" : [
						      { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "gain", "params" : [ "baton" ]},
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					},{
						"name" : "Le laisser", "action" : [
                              { "key" : "hurt", "params" : [ 5 ]},
						      { "key" : "go", "params" : [ "fermeGoule"]}
						]
					}]
				},
				"batonSaisieEchec" : {
					"textes" : [ 
					        "Impossible de le faire bouger&hellip;",
					        "Le <span key='baton'>b&acirc;ton</span> est trop bien enfonc&eacute;.",
					        "Au loin, la bataille fait rage&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Casser le b&acirc;ton", "action" : [
						      { "key" : "go", "params" : [ "batonPousse" ]}
						]
					},{
						"name" : "Courir &agrave; la ville", "action" : [
						      { "key" : "go", "params" : [ "reposVille2"]}
						]
					}]
				},
				"batonPousse" : {
					"textes" : [ 
					        "vous donnez un puissant coup de pied dans le <span key='baton'>b&acirc;ton</span> qui &eacute;clate en morceaux.",
					        "La porte de la grange s&rsquo;ouvre avec fracas&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Suivant", "action" : [
						      { "key" : "go", "params" : [ "fermeGoule" ]}
						]
					}]
				},
				"fermeGoule" : {
					"textes" : [ 
					        "Une horrible <span key='goule'>goule</span> bondit hors de la grange !",
					        "Elle vous observe un moment, comme si vous &eacute;tiez un en-cas,",
					        "puis se jette sur vous !"
					        ],
			        "actions" : [ {
						"name" : "Attaquer", "action" : [
						      { "key" : "fight", "params" : [ ["goule"], "fermeGoule2" ]}
						]
					}]
				},
				"fermeGoule2" : {
					"textes" : [ 
					        "Qu&rsquo;est-ce que ce monstre faisait l&agrave; ?",
					        "Vous vous remettez de vos &eacute;motions et&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Fouiller", "action" : [
						      { "key" : "go", "params" : [ "fouillerGoule" ]}
						]
					},{
						"name" : "Entrer dans la grange", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					},{
						"name" : "Courir &agrave; la ville", "action" : [
   						      { "key" : "go", "params" : [ "reposVille2" ]}
   						]
   					}]
				},
				"fouillerGoule" : {
					"textes" : [ 
					        "Rien&hellip;",
					        "Juste un cadavre &agrave; moiti&eacute; d&eacute;compos&eacute;."
					        ],
			        "actions" : [ {
						"name" : "Entrer dans la grange", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					},{
						"name" : "Courir &agrave; la ville", "action" : [
   						      { "key" : "go", "params" : [ "reposVille2" ]}
   						]
   					}]
				},
				"grange" : {
					"textes" : [ 
					        "La grange est sombre et sent le renferm&eacute;.",
					        "Une grosse table est pos&eacute;e au fond."
					        ],
			        "actions" : [ {
						"name" : "Fouiller la table", "action" : [
   						      { "key" : "go", "params" : [ "grangeFouilleTable" ]}
   						]
   					},{
						"name" : "Examiner la grange", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					},{
						"name" : "Courir &agrave; la ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeFouilleTable" : {
					"textes" : [ 
					        "La table est recouverte de paperasses en pagaille.",
					        "Une vieille <span key='bougie'>bougie</span> presque us&eacute;e est pos&eacute;e dans un coin."
					        ],
			        "actions" : [ {
						"name" : "Prendre la bougie", "action" : [
   						      { "key" : "gain", "params" : [ "bougie" ]},
   						      { "key" : "go", "params" : [ "grangeFouilleTable2" ]}
   						]
   					},{
						"name" : "Retour", "action" : [
   						      { "key" : "go", "params" : [ "grange" ]}
   						]
   					}]
				},
				"grangeFouilleTable2" : {
					"textes" : [ 
					        "Vous prenez la <span key='bougie'>bougie</span> et le n&eacute;cessaire pour l&rsquo;allumer si besoin.",
					        "Il est temps de continuer l&rsquo;aventure :"
					        ],
			        "actions" : [ {
						"name" : "Examiner la grange", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					},{
						"name" : "Courir &agrave; la ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeExamine" : {
					"textes" : [ 
					        "Une grande b&acirc;tisse recouverte de poussi&egrave;re&hellip;",
					        "De la paille est pr&eacute;sente partout o&ugrave; vous mettez les pieds.",
					        "Une grosse table est pos&eacute;e dans le fond."
					        ],
			        "actions" : [ {
						"name" : "Fouiller la table", "action" : [
   						      { "key" : "hasItem", "params" : [ ["bougie"], "grangeFouilleTable3", "grangeFouilleTable" ]}
   						]
   					},{
						"name" : "Courir &agrave; la ville", 
						"action" : [
						      { "key" : "hasItem", "params" : [ ["helpRoi"], "retourVille2", "reposVille2" ]}
						]
					}]
				},
				"grangeFouilleTable3" : {
					"textes" : [ 
					        "La table est recouverte de paperasses en pagaille.",
					        "Elle aurait besoin d&rsquo;un bon nettoyage&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Retour", "action" : [
   						      { "key" : "go", "params" : [ "grangeExamine" ]}
   						]
   					}]
				},
				"reposVille2" : {
					"textes" : [ 
					        "Vous accourez dans le village, au c&oelig;ur de la bataille.",
					        "De nombreuses <span key='goule'>goules</span> tentent de d&eacute;vorer les paysans qui se battent de leur mieux.",
					        "&laquo; Du nerf ! D&eacute;fendez la ville ! &raquo; hurle un <span key='garde'>garde</span> non loin de vous."
					        ],
			        "actions" : [ {
						"name" : "D&eacute;fendre la ville", "action" : [ 
						      { "key" : "fight", "params" : [ ["goule", "goule", "goule"], "reposVille3"]}
						]
					}]
				},
				"reposVille3" : {
					"textes" : [ 
					        "Vous tuez la derni&egrave;re <span key='goule'>goule</span> face &agrave; vous et retournez voir les <span key='garde'>gardes</span> :",
					        "&laquo; Que s&rsquo;est-il pass&eacute; ? &raquo;",
					        "Un des gardes se tourne vers vous :",
					        "&laquo; Les morts ! Ils nous ont attaqu&eacute;s !",
					        "Ils ont emport&eacute;s les enfants dans la foret &raquo;"
					        ],
			        "actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "go", "params" : [ "reposVille4"]}
						]
					}]
				},
				"reposVille4" : {
					"textes" : [ 
					        "&laquo; Malheureusement, nous devons nous occuper des bless&eacute;s.",
					        "Vous avez l&rsquo;air de savoir vous battre !",
					        "Vous devez les secourir, demandez de l&rsquo;aide aux autres <span key='villageois'>villageois</span> ! &raquo;"
					        ],
			        "actions" : [ {
						"name" : "Aider", "action" : [ 
						      { "key" : "go", "params" : [ "reposVilleAide"]}
						]
					},{
						"name" : "Refuser", "action" : [ 
						      { "key" : "go", "params" : [ "reposVilleRefus"]}
						]
					}]
				},
				"reposVilleAide" : {
					"textes" : [ 
					        "Vous hochez bravement la t&ecirc;te et",
					        "vous dirigez vers les <span key='villageois'>villageois</span> paniqu&eacute;s.",
					        "John, le forgeron, s&rsquo;approche de vous l&rsquo;air mena&ccedil;ant :",
					        "&laquo; Tiens ! Prends cette <span key='epee'>&eacute;p&eacute;e</span> et ce <span key='bouclierFer'>bouclier en fer</span> !",
					        "Ils pourront t&rsquo;&ecirc;tre utiles. &raquo;"
					        ],
			        "actions" : [ {
						"name" : "Prendre les armes", "action" : [ 
						      { "key" : "gain", "params" : [ "epee"]},
						      { "key" : "gain", "params" : [ "bouclierFer" ]},
						      { "key" : "go", "params" : [ "reposVilleAide1"]}
						]
					},{
						"name" : "Non Merci", "action" : [ 
						      { "key" : "go", "params" : [ "reposVilleAide2"]}
						]
					}]
				},
				"reposVilleAide1" : {
					"textes" : [ 
					        "Vous saisissez <span key='epee'>l&rsquo;&eacute;p&eacute;e</span> et mangez un morceau pour vous pr&eacute;parer.",
					        "Ces sales monstres n&rsquo;ont qu&rsquo;&agrave; bien se tenir !",
					        "Fier de votre nouvelle arme, vous partez en direction du marais&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "heal", "params" : [ 1000 ]},
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais"]}
						]
					}]
				},
				"reposVilleAide2" : {
					"textes" : [ 
					        "Un vieux monsieur s&rsquo;approche en toussotant :",
					        "&laquo; Prend au moins cette <span key='potionSante'>potion</span> mon petit&hellip; ",
					        "Tu ne peux pas y aller sans rien ! &raquo;",
					        "Vous prenez la fiole et mangez un morceau.",
					        "Une fois pr&ecirc;t vous vous mettez en route pour le marais&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Suivant", "action" : [ 
						      { "key" : "gain", "params" : [ "potionSante" ]},
						      { "key" : "heal", "params" : [ 1000 ]},
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais"]}
						]
					}]
				},
				"reposVilleRefus" : {
					"textes" : [ 
					        "&laquo; Dans ce cas, allez-vous-en !",
					        "Nous n&rsquo;avons pas besoin de l&acirc;ches dans nos rang ! &raquo;",
					        "Les <span key='garde'>gardes</span> sortent leurs &eacute;p&eacute;es et vous pousse vers le marais&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Venger cet affront", "action" : [ 
						      { "key" : "fight", "params" : [ ["garde", "garde"], "reposVilleTraitre" ]}
						]
					},{
						"name" : "S&rsquo;en aller", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVilleRefus2" ]}
 						]
 					}]
				},
				"reposVilleTraitre" : {
					"textes" : [ 
					        "Certains <span key='villageois'>villageois</span> s&rsquo;avancent vers vous :",
					        "&laquo; Tra&icirc;tre ! C&rsquo;est toi qui as amen&eacute; la mort sur nous !",
					        "Tu vas nous le payer ! Rend-nous nos enfants ! &raquo;",
					        "Ils se jettent sur vous&hellip;"
					        ],
			        "actions" : [ {
						"name" : "Combattre", "action" : [ 
						      { "key" : "fight", "params" : [ ["villageois", "villageois", "villageois"], "reposVilleTraitre2" ]}
						]
					},{
						"name" : "Fuir", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVilleRefus2" ]}
 						]
 					}]
				},
				"reposVilleTraitre2" : {
					"textes" : [ 
					        "Vous vous d&eacute;p&ecirc;trez du dernier <span key='villageois'>villageois</span> qui a os&eacute; vous d&eacute;fier.",
					        "Ces insectes ne valent rien&hellip; Mais, peut-&ecirc;tre poss&egrave;dent-ils quelques",
					        "objets de valeur dans leurs chaumi&egrave;res ?"
					        ],
			        "actions" : [ {
						"name" : "Fouiller les maisons", "action" : [ 
						      { "key" : "random", "params" : [ "villeFouilleReussite1", "villeFouilleReussite2", 
						                                       "villeFouilleReussite3", "villeFouilleEchec", "villeFouilleEchec2" ]}
						]
					},{
						"name" : "S&rsquo;en aller", "action" : [ 
 						      { "key" : "go", "params" : [ "reposVilleTraitre3" ]}
 						]
 					}]
				},
				"reposVilleTraitre3" : {
					"textes" : [ 
					        "Vous vous en allez vers le marais.",
					        "Ces cr&eacute;tins n&rsquo;ont eu que ce qu&rsquo;ils meritaient&hellip;",
					        "En chemin, vous distinguez des traces sur le sol."
					        ],
			        "actions" : [ {
						"name" : "Suivre les traces", "action" : [ 
						      { "key" : "hasItem", "params" : [ ["helpRoi2"], "maraisRoi", "marais" ]}
						]
					}]
				},
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
						"name" : "Suivant", "action" : [ 
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
						"name" : "Combattre", "action" : [ 
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
						"name" : "Suivre les traces", "action" : [ 
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
						"name" : "Suivre les traces", "action" : [ 
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
						"name" : "Suivant", "action" : [ 
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
						"name" : "Suivant", "action" : [ 
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
						"name" : "Suivant", "action" : [ 
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
						"name" : "Suivant", "action" : [ 
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Combattre",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Combattre",
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
			"name" : "Combattre",
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
			"name" : "Fouiller",
			"action" : [
				{"key" : "gain", "params" : ["elixir"]},
				{"key" : "gain", "params" : ["fouilleCercueil"]},
				{"key" : "go", "params" : ["necroGSFouilleCercueil2"]}
			]
		},
		{
			"name" : "Retour",
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
			"name" : "Combattre",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "S&rsquo;en aller",
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
			"name" : "Combattre",
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
			"name" : "Fouiller",
			"action" : [
				{"key" : "go", "params" : ["necroS2Fouille"]}
			]
		},
		{
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Retour",
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
			"name" : "Combattre",
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
			"name" : "Combattre",
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
			"name" : "Combattre",
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