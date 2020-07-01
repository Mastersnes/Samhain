'use strict';
define([], function(){
	var data = {
	        /**
	        * Monstres
	        **/
	        "araignee" : {
                fr : "Araignée",
                en : "Spider",
                eo : "Araneo"
            },
            "araignee-texte" : {
                fr : "Cette horrible créature vit souvent en groupe. De petite taille, elles grouillent par milliers dans l'obscurité.",
                en : "This horrible creature often lives in a group. Small in size, they swarm by the thousands in the darkness."
            },
            "bandit" : {
                fr : "Bandit",
                en : "Bandit"
            },
            "bandit-texte" : {
                fr : "Ils errent dans les vieilles tombes, à la recherche de trésors ou de babioles. N'essayez jamais de voler leurs biens, ils sont plutôt grincheux.",
                en : "They wander through old tombs in search of treasures or trinkets. Never try to steal their belongings, they're rather cranky."
            },
            "roiAraignee" : {
                fr : "Roi Araignée",
                en : "King of Spiders"
            },
            "roiAraignee-texte" : {
                fr : "Il règne sur le royaume des araignées. Il est blessé, mais protégera toujours ses enfants. Restez sur vos gardes, vous pourriez le regretter&nbsp;!",
                en : "He reigns over the kingdom of spiders. He's hurt, but he'll always protect his children. Stay on your toes, you might regret it&nbsp;!"
            },
            "goule" : {
                fr : "Goule",
                en : "Ghoul"
            },
            "goule-texte" : {
                fr : "Un cadavre en décomposition, réveillé par la magie d'un mage noir. Il a un besoin instinctif de se repaître de chair fraîche.",
                en : "A decaying corpse, awakened by the magic of a black magician. He has an instinctive need to feed on fresh flesh."
            },
            "garde" : {
                fr : "Garde",
                en : "Guard"
            },
            "garde-texte" : {
                fr : "Garde du village. Un peu lent à la détente, mais redoutable à l'épée&nbsp;!",
                en : "Village guard. A little slow to relax, but fearful by the sword!"
            },
            "villageois" : {
                fr : "Villageois",
                en : "Villagers"
            },
            "villageois-texte" : {
                fr : "Un courageux villageois prêt à tout pour défendre ses terres. Attention, sa fourche pourrait piquer un peu&hellip;",
                en : "A courageous villager who will do anything to defend his land. Be careful, his fork might sting a little&hellip;"
            },
            "grosseGoule" : {
                fr : "Grosse Goule",
                en : "Big Ghoul"
            },
            "grosseGoule-texte" : {
                fr : "Un cadavre putréfié, relevé par un mage noir puissant. Sa force a été décuplée par de sombres sortilèges.",
                en : "A rotten corpse, raised by a powerful black magician. His strength has been multiplied tenfold by dark spells."
            },
            "squelette" : {
                fr : "Squelette",
                en : "Skeleton"
            },
            "squelette-texte" : {
                fr : "Un tas d'os qui marche. Aucune défense, mais une sacrée épée entre les mains&nbsp;!",
                en : "A bunch of bones walking. No defense, but a hell of a sword in his hands!"
            },
            "experience" : {
                fr : "Expérience",
                en : "Experience"
            },
            "experience-texte" : {
                fr : "L'infâme expérience d'un sorcier fou. Elle ressemble à un enfant blanc comme un cadavre. Ses bras sont anormalement longs et couverts de coupures. De ses doigts sortent de grandes tiges de fer&hellip;",
                en : "The infamous experience of a mad wizard. She looks like a child as white as a corpse. His arms are abnormally long and covered with cuts. From his fingers come out large rods of iron&hellip;"
            },
            "necromancien" : {
                fr : "Nécrom'",
                en : "Necrom"
            },
            "necromancien-texte" : {
                fr : "Un horrible sorcier usant de magie noire&nbsp;! Il ressemble à un vieillard et tient à peine sur ses jambes&hellip;",
                en : "A horrible wizard using black magic! He looks like an old man and barely stands on his legs&hellip;"
            },
            "liche" : {
                fr : "Liche",
                en : "Lich"
            },
            "liche-texte" : {
                fr : "Un spectre tout droit sorti de l'au-delà&nbsp;! Une aura néfaste l'entoure, laissant présager de sa puissance&hellip;",
                en : "A spectrum straight out of the afterlife! A harmful aura surrounds it, letting us imagine its power&hellip;"
            },

            "roiBandit" : {
                fr : "Roi Bandit",
                en : "King of Bandit"
            },
            "roiBandit-texte" : {
                fr : "Un bandit plus noble et plus fourbe que les autres. Ne vous y méprenez pas, il est aussi bien plus fort&nbsp;!",
                en : "A bandit nobler and deceiver than the others. Make no mistake, he's also much stronger!"
            }
	};
	
	return {
        name : function() {
            return "Monstres.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});