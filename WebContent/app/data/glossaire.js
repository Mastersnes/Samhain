'use strict';
define(["jquery"], function($){
	var data = {
		"araignee" : {
			"name" : "Araign&eacute;e",
			"textes" : [
	            "Cette horrible cr&eacute;ature vit souvent en groupe. De petite taille, elles grouillent par milliers dans l&apos;obscurit&eacute;."
            ],
            "attaque" : [0, 2],
            "defense" : [0, 1],
            "vie" : [2, 5],
            "xp": [1, 2],
            "argent" : [0, 3],
            "sexe" : "f"
		},
		"bandit" : {
			"name" : "Bandit",
			"textes" : [
	            "Ils errent dans les vieilles tombes &agrave; la recherche de tr&eacute;sors ou de babioles. N&apos;&eacute;ssayez jamais de voler leurs biens, ils sont plut&ocirc;t grincheux.",
            ],
            "attaque" : [0, 2],
            "defense" : [0, 3],
            "vie" : [5, 10],
            "xp" : [2, 4],
            "argent" : [1, 5],
            "sexe" : "m"
		},
		"roiAraigneeBlesse" : {
			"name" : "Roi des araign&eacute;es",
			"textes" : [
			            "Il reigne sur le royaume des araign&eacute;es. Il est bless&eacute; mais prot&eacute;gera toujours ses enfants. Restez sur vos gardes, Vous pourriez le regretter !",
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 5],
			            "vie" : [10, 30],
			            "xp" : [20, 40],
			            "argent" : [10, 30],
			            "sexe" : "m"
		},
		"goule" : {
			"name" : "Goule",
			"textes" : [
			            "Un cadavre en d&eacute;composition, reveill&eacute; par la magie d'un mage noir. Il a un besoin instinctif de se repa&icirc;tre de chair fra&icirc;che."
			            ],
			            "attaque" : [2, 8],
			            "defense" : [0, 5],
			            "vie" : [7, 10],
			            "xp" : [5, 15],
			            "argent" : [3, 8],
			            "sexe" : "f"
		},
		"garde": {
			"name" : "Garde",
			"textes" : [
			            "Garde de la ville. Un peu lent &agrave; la d&eacute;tente, mais redoutable &agrave; l'&eacute;p&eacute;e !"
			            ],
			            "attaque" : [3, 10],
			            "defense" : [0, 10],
			            "vie" : [10, 20],
			            "xp" : [10, 30],
			            "argent" : [5, 10],
			            "sexe" : "m"
		}, 
		"villageois": {
			"name" : "Villageois",
			"textes" : [
			            "Un courageux villageois pr&ecirc;t &agrave; tout pour d&eacute;fendre ses terres. Attention, sa fourche pourrait piquer un peu..."
			            ],
			            "attaque" : [0, 2],
			            "defense" : [0, 2],
			            "vie" : [10, 20],
			            "xp" : [5, 15],
			            "argent" : [0, 10],
			            "sexe" : "m"
		}, 
		"grosseGoule": {
			"name" : "Grosse goule",
			"textes" : [
			            "Un cadavre putr&eacute;fi&eacute;, relev&eacute; par un mage noir puissant. Sa force a &eacute;t&eacute; d&eacute;cupl&eacute; par de sombres sortil&eacute;ges."
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 8],
			            "vie" : [10, 30],
			            "xp" : [20, 40],
			            "argent" : [5, 10],
			            "sexe" : "f"
		}, 
		"squelette": {
			"name" : "Squelette",
			"textes" : [
			            "Un tas d'os qui marche. Aucune d&eacute;fense, mais une sacr&eacute; &eacute;p&eacute;e entre les mains !"
			            ],
			            "attaque" : [5, 10],
			            "defense" : [0, 0],
			            "vie" : [10, 20],
			            "xp" : [10, 30],
			            "argent" : [2, 8],
			            "sexe" : "m"
		}, 
		"squeletteManchot": {
			"name" : "Squelette manchot",
			"textes" : [
			            "Un squelette avec une main en moins. C'est presque trop facile..."
			            ],
			            "attaque" : [0, 5],
			            "defense" : [0, 0],
			            "vie" : [10, 20],
			            "xp" : [20, 50],
			            "argent" : [10, 30],
			            "sexe" : "m"
		}, 
		"experience": {
			"name" : "Exp&eacute;rience",
			"textes" : [
			            "L'inf&acirc;me exp&eacute;rience d'un sorcier fou. Elle ressemble de loin &agrave; un enfant blanc comme un cadavre. Ses bras sont anormalement longs et couverts de coupures. De ses doigts sortent de grandes tiges de fer&hellip;"
			            ],
			            "attaque" : [7, 15],
			            "defense" : [0, 10],
			            "vie" : [40, 60],
			            "xp" : [30, 50],
			            "argent" : [10, 30],
			            "sexe" : "f"
		}, 
		"necromancien": {
			"name" : "N&eacute;crom l'ancien",
			"textes" : [
			            "Un horrible sorcier usant de magie noir ! Il ressemble &agrave; un vieillard et tiens &agrave; peine sur ses jambes..."
			            ],
			            "attaque" : [5, 20],
			            "defense" : [0, 10],
			            "vie" : [50, 80],
			            "xp" : [50, 100],
			            "argent" : [15, 30],
			            "sexe" : "m"
		}, 
		"liche": {
			"name" : "Liche",
			"textes" : [
			            "Un spectre tout droit sortie de l'au-del&agrave; ! Une aura n&eacute;faste l'entoure, laissant pr&eacute;sager de sa puissance..."
			            ],
			            "attaque" : [10, 30],
			            "defense" : [0, 15],
			            "vie" : [80, 150],
			            "xp" : [100, 150],
			            "argent" : [20, 40],
			            "sexe" : "f"
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