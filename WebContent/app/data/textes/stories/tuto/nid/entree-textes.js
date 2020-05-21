'use strict';
define([], function(){
	var data = {
        "nid-texte-1" : {
            fr : "Vous arrivez dans une cavité plutôt sombre et silencieuse.",
            en : "You arrive in a dark and silent cavity."
        },
        "nid-texte-2" : {
            fr : "Une odeur nauséabonde monte à votre nez.",
            en : "An unpleasant smell rises to your nose."
        },
        "nid-texte-3" : {
            fr : "En y regardant de plus près, de nombreux cadavres <span key='araignee'>d'araignées</span> recouvrent le sol.",
            en : "Looking at it more closely, many <span key='araignee'>spider</span> carcasses cover the ground."
        },

        "nidExamine-texte-1" : {
            fr : "En fouillant les cadavres, vous trouvez une belle <span key='dague'>dague</span> qui semble abandonnée.",
            en : "As you search the corpses, you find a beautiful <span key='dague'>dagger</span> which seems abandoned."
        },
        "nidExamine-texte-2" : {
            fr : "Vous vous penchez pour la saisir, quand&hellip;",
            en : "You bend over to grab it, when&hellip;"
        },

        "nidDague-texte-1" : {
            fr : "Vous n'avez pas le temps d'esquiver&nbsp;!",
            en : "You don't have time to dodge!"
        },
        "nidDague-texte-2" : {
            fr : "Un gros <span key='poing'>poing</span> vous écrase le visage et vous fait tomber au sol.",
            en : "A big <span key='poing'>fist</span> crushes your face and makes you fall to the ground."
        },
        "nidDague-texte-3" : {
            fr : "En vous relevant, vous distinguez un <span key='bandit'>bandit</span> prêt à vous détrousser&nbsp;!",
            en : "When you stand up, you see a <span key='bandit'>bandit</span> ready to rob you!"
        },
        "nidDague-texte-4" : {
            fr : "Allez-vous le laisser s'en sortir vivant&nbsp;?!",
            en : "Are you gonna let him get away alive?!"
        },

        "nid2-texte-1" : {
            fr : "En regardant bien, vous distinguez un <span key='bandit'>bandit</span> qui se cache dans la pénombre.",
            en : "If you look closely, you can see a <span key='bandit'>bandit</span> hiding in the darkness."
        },
        "nid2-texte-2" : {
            fr : "Il s'approche en souriant pour entamer le combat.",
            en : "He approaches with a smile to start the fight."
        },
        "nid2-texte-3" : {
            fr : "Allez-vous le laisser s'en sortir vivant&nbsp;?!",
            en : "Are you gonna let him get away alive?!"
        },

        "nid3-texte-1" : {
            fr : "Le combat se termine et votre adversaire s'écroule sur le sol.",
            en : "The fight ends and your opponent collapses on the ground."
        },
        "nid3-texte-2" : {
            fr : "Dans le feu de l'action, vous en profitez pour :",
            en : "In the heat of the moment, you take advantage of it:"
        },

        "nid3Fouille-texte-1" : {
            fr : "En détroussant le détrousseur, vous trouvez un gros morceau de <span key='fromage'>fromage</span>&nbsp;!",
            en : "While Robbing the robber, you find a big piece of <span key='fromage'>cheese</span>!"
        },
        "nid3Fouille-texte-2" : {
            fr : "Allez-vous vous régaler ou le garder sagement&nbsp;?",
            en : "Are you going to enjoy yourself or keep it wisely?"
        },

        "nid3TrouveDague-texte-1" : {
            fr : "Vous avez la bonne idée de continuer les recherches.",
            en : "You have a good idea to continue the research."
        },
        "nid3TrouveDague-texte-2" : {
            fr : "En dessous du bonhomme se trouvait une superbe <span key='dague'>dague</span>&nbsp;!",
            en : "Below the man was a superb <span key='dague'>dagger</span>!"
        },
        "nid3TrouveDague-texte-3" : {
            fr : "Un bon outil qui vous sera bien utile.",
            en : "A good tool that will be useful to you."
        },

        "nid4-texte-1" : {
            fr : "Vous vous enfoncez de plus en plus dans l'obscurité et n'y voyez pas grand-chose.",
            en : "You are getting deeper and deeper into the darkness and don't see much of it."
        },
        "nid4-texte-2" : {
            fr : "Soudain, le tunnel se sépare en deux.",
            en : "Suddenly, the tunnel splits in half."
        },
        "nid4-texte-3" : {
            fr : "Deux choix s'offrent donc à vous :",
            en : "Two choices are available:"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});