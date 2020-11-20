'use strict';
define([], function(){
	var data = {
        "nid-texte-1" : {
        	fr : "Vous arrivez dans une cavité plutôt sombre et silencieuse.",
        	en : "You arrive in a rather dark and silent cavity.",
        	eo : ""
        },
        "nid-texte-2" : {
        	fr : "Une odeur nauséabonde monte à votre nez.",
        	en : "A putrid smell rises to your nose.",
        	eo : ""
        },
        "nid-texte-3" : {
        	fr : "En y regardant de plus près, de nombreux cadavres <span key='araignee'>d'araignées</span> recouvrent le sol.",
        	en : "Looking at it more closely, many <span key='araignee'>spiders</span> corpses cover the ground.",
        	eo : ""
        },

        "nidExamine-texte-1" : {
        	fr : "En fouillant les cadavres, vous trouvez une belle <span key='dague'>dague</span> qui semble abandonnée.",
        	en : "By searching the corpses, you find a beautiful <span key='dague'>dagger</span> that seems abandoned.",
        	eo : ""
        },
        "nidExamine-texte-2" : {
        	fr : "Vous vous penchez pour la saisir, quand&hellip;",
        	en : "You stoop to grab it, when&hellip;",
        	eo : ""
        },

        "nidDague-texte-1" : {
        	fr : "Vous n'avez pas le temps d'esquiver&nbsp;!",
        	en : "You don't have time to dodge!",
        	eo : ""
        },
        "nidDague-texte-2" : {
        	fr : "Un gros <span key='poing'>poing</span> vous écrase le visage et vous fait tomber au sol.",
        	en : "A big <span key='poing'>fist</span> crushes your face and makes you fall to the ground.",
        	eo : ""
        },
        "nidDague-texte-3" : {
        	fr : "En vous relevant, vous distinguez un <span key='bandit'>bandit</span> prêt à vous détrousser&nbsp;!",
        	en : "By standing up, you see a <span key='bandit'>bandit</span> ready to rob you!",
        	eo : ""
        },
        "nidDague-texte-4" : {
        	fr : "Allez-vous le laisser s'en sortir vivant&nbsp;?!",
        	en : "Are you going to let him live?!",
        	eo : ""
        },

        "nid2-texte-1" : {
        	fr : "En regardant bien, vous distinguez un <span key='bandit'>bandit</span> qui se cache dans la pénombre.",
        	en : "Looking closely, you make out a <span key='bandit'>bandit</span> hiding in the darkness.",
        	eo : ""
        },
        "nid2-texte-2" : {
        	fr : "Il s'approche en souriant pour entamer le combat.",
        	en : "He approaches with a smile to start the fight.",
        	eo : ""
        },
        "nid2-texte-3" : {
        	fr : "Allez-vous le laisser s'en sortir vivant&nbsp;?!",
        	en : "Are you going to let him live?!",
        	eo : ""
        },

        "nid3-texte-1" : {
        	fr : "Le combat se termine et votre adversaire s'écroule sur le sol.",
        	en : "The fight ends and your opponent collapses on the ground.",
        	eo : ""
        },
        "nid3-texte-2" : {
        	fr : "Dans le feu de l'action, vous en profitez pour&nbsp;:",
        	en : "In the heat of the action, you take advantage to:",
        	eo : ""
        },

        "nid3Fouille-texte-1" : {
        	fr : "En détroussant le détrousseur, vous trouvez un gros morceau de <span key='fromage'>fromage</span>&nbsp;!",
        	en : "While robbing the robber, you find a big piece of <span key='fromage'>cheese</span>!",
        	eo : ""
        },
        "nid3Fouille-texte-2" : {
        	fr : "Allez-vous vous régaler ou le garder sagement&nbsp;?",
        	en : "Are you going to enjoy it now or keep it wisely for later?",
        	eo : ""
        },

        "nid3TrouveDague-texte-1" : {
        	fr : "Vous avez la bonne idée de continuer les recherches.",
        	en : "You have the good idea to continue the research.",
        	eo : ""
        },
        "nid3TrouveDague-texte-2" : {
        	fr : "En dessous du bonhomme se trouvait une superbe <span key='dague'>dague</span>&nbsp;!",
        	en : "Below the man, you find a superb <span key='dague'>dagger</span>!",
        	eo : ""
        },
        "nid3TrouveDague-texte-3" : {
        	fr : "Un bon outil qui vous sera bien utile.",
        	en : "A good tool that will be pretty useful to you.",
        	eo : ""
        },

        "nid4-texte-1" : {
        	fr : "Vous vous enfoncez de plus en plus dans l'obscurité et n'y voyez pas grand-chose.",
        	en : "You sink deeper and deeper into the darkness and don't see  a lot.",
        	eo : ""
        },
        "nid4-texte-2" : {
        	fr : "Soudain, le tunnel se sépare en deux.",
        	en : "Suddenly, the tunnel splits in half.",
        	eo : ""
        },
        "nid4-texte-3" : {
        	fr : "Deux choix s'offrent donc à vous&nbsp;:",
        	en : "Two choices are available:",
        	eo : ""
        }
	};
	
	return {
        name : function() {
            return "Tuto Nid Entree.js";
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