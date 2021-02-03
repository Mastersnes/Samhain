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
            	en : "This awful creature often lives in a group. Small-sized, they swarming by thousands in the darkness.",
                eo : "Tiu horora kreitaĵo vivas ofte en grupo. Malgrandaj, ili svarmas milope en la mallumo."
            },
            "bandit" : {
            	fr : "Bandit",
            	en : "Bandit",
                eo : "Bandito"
            },
            "bandit-texte" : {
            	fr : "Ils errent dans les vieilles tombes, à la recherche de trésors ou de babioles. N'essayez jamais de voler leurs biens, ils sont plutôt grincheux.",
            	en : "They wander through old tombs looking for treasures or trinkets. Never try to steal their property, they're rather grumpy.",
                eo : "Ili vagas en la malnovaj tomboj, serĉante trezorojn aŭ bagatelojn. Neniam provu ŝteli iliajn posedaĵojn, ili estas iom grumblemaj."
            },
            "roiAraignee" : {
            	fr : "Roi Araignée",
            	en : "Spider King",
                eo : "Aranea Reĝo"
            },
            "roiAraignee-texte" : {
            	fr : "Il règne sur le royaume des araignées. Il est blessé, mais protégera toujours ses enfants. Restez sur vos gardes ou vous pourriez le regretter&nbsp;!",
            	en : "He reigns over the kingdom of spiders. He's hurt but he’ll still protect his children. Stay on your guard or you might regret it&nbsp;!",
            	eo : "Li reĝas la reĝlandon de araneoj. Li estas vundita sed ankoraŭ protektos siajn infanojn. Estu singarda aŭ vi povus bedaŭri!"
            },
            "goule" : {
            	fr : "Goule",
            	en : "Ghoul",
            	eo : "Gulo"
            },
            "goule-texte" : {
            	fr : "Un cadavre en décomposition, réveillé par un mage noir. Il a un besoin instinctif de se repaître de chair fraîche.",
            	en : "A decomposing corpse, awakened by a dark wizard. It has an instinctive need to feed on fresh flesh.",
            	eo : "Putranta kadavro, revigligita de sorĉisto. Ĝi havas instinktan bezonon manĝegi freŝan karnon."
            },
            "garde" : {
            	fr : "Garde",
            	en : "Guard",
            	eo : "Gardisto"
            },
            "garde-texte" : {
            	fr : "Garde du village. Un peu long à la détente, mais redoutable à l'épée&nbsp;!",
            	en : "Village guard. A little slow on the uptake, but formidable with a sword!",
            	eo : "Gardisto de la vilaĝo. Lia cerbo ne rapidas, sed timinda per la glavo!"
            },
            "villageois" : {
            	fr : "Villageois",
            	en : "Villager",
            	eo : "Vilaĝano"
            },
            "villageois-texte" : {
            	fr : "Un courageux villageois prêt à tout pour défendre ses terres. Attention, sa fourche pourrait piquer un peu&hellip;",
            	en : "A brave villager ready for anything to defend his grounds. Be careful, his pitchfork might pick a little&hellip;",
            	eo : "Kuraĝa vilaĝano, kiu farus ĉion por defendi siajn bienojn. Atenton, lia forkego povus iom piki&hellip;"
            },
            "grosseGoule" : {
            	fr : "Grosse Goule",
            	en : "Big Ghoul",
            	eo : "Gulego"
            },
            "grosseGoule-texte" : {
            	fr : "Un cadavre putréfié, relevé par un mage noir puissant. Sa force a été décuplée par de sombres sortilèges.",
            	en : "A rotten corpse raised by a powerful dark wizard. It’s strength has been increased by obscure spells.",
            	eo : "Putra kadavro, relevita de potenca sorĉisto. Lia forteco estas multigita per malhelaj sorĉoj."
            },
            "squelette" : {
            	fr : "Squelette",
            	en : "Skeleton",
            	eo : "Skeleto"
            },
            "squelette-texte" : {
            	fr : "Un tas d'os qui marche. Aucune défense, mais une sacrée épée entre les mains&nbsp;!",
            	en : "A walking bones pile. No defense, but a damned sword in its hands!",
            	eo : "Amaso de ostoj, kiu marŝas. Neniu defendo, sed impona glavo en la manoj!"
            },
            "experience" : {
            	fr : "Expérience",
            	en : "Experiment",
            	eo : "Eksperimento"
            },
            "experience-texte" : {
            	fr : "L'infâme expérience d'un sorcier fou. Elle ressemble à un enfant blanc comme un cadavre. Ses bras sont anormalement longs et couverts de coupures. De ses doigts sortent de grandes tiges de fer&hellip;",
            	en : "The infamous experiment of a crazy sorcerer. It looks like a child as white as a corpse. Its arms are unusually long and covered by cuts. Large rods of iron come out of its fingers&hellip;",
            	eo : "Abomena eksperimento de freneza sorĉisto. Ĝi similas al infano, blanka kiel kadavro. Ĝiaj brakoj estas nenormale longaj kaj kovritaj de tranĉvundoj. El ĝiaj manfingroj eliras grandaj feraj stangetoj&hellip;"
            },
            "necromancien" : {
            	fr : "Nécrom'",
            	en : "Necrom",
            	eo : "Nekro"
            },
            "necromancien-texte" : {
            	fr : "Un horrible sorcier usant de magie noire&nbsp;! Il ressemble à un vieillard et tient à peine sur ses jambes&hellip;",
            	en : "A horrible sorcerer using dark magic! He looks like an old man and hardly stands on his legs&hellip;",
            	eo : "Abomena sorĉisto uzanta nigran magion! Li aspektas kiel kadukulo kaj sin tenas malfacile sur siaj kruroj&hellip;"
            },
            "liche" : {
            	fr : "Liche",
            	en : "Lich",
            	eo : "Liĉo"
            },
            "liche-texte" : {
            	fr : "Un spectre tout droit sorti de l'au-delà&nbsp;! Une aura néfaste l'entoure, laissant présager de sa puissance&hellip;",
            	en : "A ghost straight out of the afterlife! A negative aura surrounds it, letting us foretell its power&hellip;",
            	eo : "Fantomo veninta rekte de la submondo! Malbona aŭro ĉirkaŭas ĝin, lasante aŭguri ĝian potencon&hellip;"
            },
            "roiBandit" : {
            	fr : "Roi Bandit",
            	en : "Bandit King",
            	eo : "Bandita Reĝo"
            },
            "roiBandit-texte" : {
            	fr : "Un bandit plus noble et plus fourbe que les autres. Ne vous y méprenez pas, il est aussi bien plus fort&nbsp;!",
            	en : "A bandit nobler and sneaker than the others. Make no mistake, he's also much stronger!",
            	eo : "Bandito pli nobla kaj pli ruza ol aliaj. Ne miskomprenu, li estas ankaŭ multe pli forta!"
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