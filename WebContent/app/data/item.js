'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Armes
		 */
		"poing" : {
			"action" : "Coup de poing",
			"name" : "Poing",
			"textes" : ["C'est simplement votre poing... Depuis votre naissance il ne vous a pas quitt&eacute;."],
			"attaque" : [1, 1],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "punch",
			"anim" : "poing"
		},
		"baton" : {
			"action" : "Coup de b&acirc;ton",
			"name" : "B&Acirc;ton",
			"textes" : ["Un gros b&acirc;ton qui peut faire tr&eacute;s mal..."],
			"attaque" : [1, 5],
			"defense" : [0, 1],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "baton",
			"anim" : "baton"
		},
		"dague" : {
			"action" : "Coup de dague",
			"name" : "Dague",
			"textes" : ["Une belle dague toute brillante. Sa lame semble tranchante comme un rasoir."],
			"attaque" : [5, 10],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "dagguer",
			"anim" : "dague"
		},
		"epee" : {
			"action" : "Coup d'&eacute;p&eacute;e",
			"name" : "&Eacute;p&eacute;e",
			"textes" : ["Une grosse &eacute;p&eacute;e &agrave; une main. Elle est aussi lourde que tranchante !"],
			"attaque" : [5, 15],
			"defense" : [0, 5],
			"vie" : [0, 0],
			"magie" : 0,
			"type" : "arme",
			"sound" : "sword",
			"anim" : "epee"
		},
		"crocRoi" : {
			"action" : "Coup de croc",
			"name" : "Croc du roi",
			"textes" : ["Le croc de votre ancien ami... Il d&eacute;gage une odeur putride... Parfait pour une petite balade !"],
			"attaque" : [5, 15],
			"defense" : 0,
			"vie" : [0, 10],
			"magie" : 0,
			"type" : "arme",
			"sound" : "croc",
			"anim" : "croc"
		},
		/**
		 * Armures
		 */
		"bras" : {
			"action" : "Bloquer avec son bras",
			"name" : "Bras",
			"textes" : ["Votre bras... Tout simplement... Vous pouvez en &ecirc;tre fier !"],
			"attaque" : [0, 0],
			"defense" : [0, 5],
			"vie" : [0, 1],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "block",
			"anim" : null
		},
		"bouclierBois" : {
			"action" : "Parer avec le bouclier",
			"name" : "Bouclier de bois",
			"textes" : ["Un bouclier en bois assez banale. Il semble plut&ocirc;t r&eacute;sistant."],
			"attaque" : [0, 0],
			"defense" : [3, 15],
			"vie" : [0, 2],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "woodblock",
			"anim" : null
		},
		"bouclierFer" : {
			"action" : "Contrer avec le bouclier",
			"name" : "Bouclier en fer",
			"textes" : ["Un grand bouclier en fer ! Il est tr&eacute;s r&eacute;sistant."],
			"attaque" : [0, 0],
			"defense" : [5, 20],
			"vie" : [0, 3],
			"magie" : 0,
			"type" : "bouclier",
			"sound" : "ironblock",
			"anim" : null
		},
		/**
		 * Consommable
		 */
		"potionSante" : {
			"action" : "Boire la potion de vie",
			"name" : "Potion de vie",
			"textes" : ["Une dr&ocirc;le de fiole toute rouge. Sur l'&eacute;tiquette, il est not&eacute; : &laquo; Ne pas en abuser, donne la diarrh&eacute;e &raquo;."],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [30, 60],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "drink",
			"anim" : null
		},
		"fromage" : {
			"action" : "Manger le fromage",
			"name" : "Fromage",
			"textes" : ["Un vieux fromage l&eacute;g&egrave;rement moisi..."],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [20, 50],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "eat",
			"anim" : null
		},
		"pomme" : {
			"action" : "Croquer la pomme",
			"name" : "Pomme",
			"textes" : ["Une belle pomme bien rouge ! Vous allez vous r&eacute;galer !"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [15, 30],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "eat",
			"anim" : null
		},
		"venin" : {
			"action" : "Lancer le venin",
			"name" : "Venin",
			"textes" : ["Une poche de venin pr&eacute;lev&eacute;e sur une grosse araign&eacute;e !"],
			"attaque" : [10, 30],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : [0, 0],
			"type" : "conso",
			"sound" : "acide",
			"anim" : "venin"
		},
		"elixir" : {
			"action" : "Boire l'&eacute;lixir",
			"name" : "&Eacute;lixir",
			"textes" : ["Une grosse fiole &eacute;clatante de lumi&eacute;re ! Une &eacute;tiquette indique : &laquo; Ne pas boire apr&eacute;s minuit, risque d'allergie &raquo;."],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [40, 150],
			"magie" : [40, 150],
			"type" : "conso",
			"sound" : "drink",
			"anim" : null
		},
		
		/**
		 * Magie
		 */
		"bouleFeu" : {
			"action" : "*Boule de feu*",
			"name" : "Boule de feu",
			"textes" : ["Un sort imparable permettant de lancer une &eacute;norme boule de feu !"],
			"attaque" : [10, 20],
			"defense" : [0, 0],
			"vie" : [0, 0],
			"magie" : -5,
			"type" : "magie",
			"sound" : "bouleFeu",
			"anim" : "bouleFeu"
		},
		"soin" : {
			"action" : "*Soin*",
			"name" : "Soin",
			"textes" : ["Un sort permettant de se soigner. Le reiki peut aller se r'habiller !"],
			"attaque" : [0, 0],
			"defense" : [0, 0],
			"vie" : [20, 60],
			"magie" : -5,
			"type" : "magie",
			"sound" : "soin",
			"anim" : null
		},
		/**
		 * Clef
		 */
		"bougie" : {
			"action" : "Bougie",
			"name" : "Bougie",
			"textes" : ["Une vieille bougie accompagn&eacute; du mat&eacute;riel n&eacute;cessaire pour l'allumer."],
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "clef",
			"sound" : null,
			"anim" : null
		},
		"clefS2" : {
			"action" : "Clef de la salle 2",
			"name" : "Clef de la salle 2",
			"textes" : ["Une simple clef."],
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "clef",
			"sound" : null,
			"anim" : null
		},
		
		/**
		 * If
		 */
		"helpRoi" : {
			"name" : "Aide du roi",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"helpRoi2" : {
			"name" : "Aide du roi2",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"necroS1Clean" : {
			"name" : "Salle1 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"hadClef" : {
			"name" : "Salle1 clef",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S1ViaS0" : {
			"name" : "Salle1 via exterieur",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S3ViaS0" : {
			"name" : "Salle3 via exterieur",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"viaS1" : {
			"name" : "GS via s1",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"viaS3" : {
			"name" : "GS via s3",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"parchoLu" : {
			"name" : "Parchemins lu",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"fouilleCercueil" : {
			"name" : "Cercueil fouiller",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheAllumeG" : {
			"name" : "Torche gauche allumee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheExploseG" : {
			"name" : "Torche gauche explosee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheAllumeD" : {
			"name" : "Torche droite allumee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"torcheExploseD" : {
			"name" : "Torche droite explosee",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S2Ouvert" : {
			"name" : "Salle 2 ouverte",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S2Clean" : {
			"name" : "Salle 2 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S4Clean" : {
			"name" : "Salle 4 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		},
		"S5Clean" : {
			"name" : "Salle 5 clean",
			"attaque" : 0,
			"defense" : 0,
			"vie" : 0,
			"magie" : 0,
			"type" : "ifObj",
			"sound" : null,
			"anim" : null
		}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});