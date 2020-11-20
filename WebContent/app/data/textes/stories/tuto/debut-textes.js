'use strict';
define([], function(){
	var data = {
        "tuto-start-texte-1" : {
        	fr : "Une nouvelle journée se termine.",
        	en : "A new day ends.",
        	eo : ""
        },
        "tuto-start-texte-2" : {
        	fr : "La douceur de l'automne caresse les feuilles qui virevoltent aux alentours.",
        	en : "The autumn sweetness caresses the leaves that spin around.",
        	eo : ""
        },
        "tuto-start-texte-3" : {
        	fr : "Ayant terminé votre dur labeur un peu plus tôt,",
        	en : "Having finished your hard work a little sooner,",
        	eo : ""
        },
        "tuto-start-texte-4" : {
        	fr : "Vous ramassez une <span key='pomme'>pomme</span> de votre panier et décidez de vous reposer au pied du géant feuillu.",
        	en : "You pick an <span key='pomme'>apple</span> from your basket and decide to rest at the foot of a leafy giant.",
        	eo : ""
        },

        "repos2-texte-1" : {
        	fr : "Vous fermez les yeux pour mieux apprécier la brise.",
        	en : "You close your eyes to better appreciate the breeze.",
        	eo : ""
        },
        "repos2-texte-2" : {
        	fr : "Au loin, il vous semble entendre des bruits de pattes&hellip;",
        	en : "In the distance, you seem to hear legs noises&hellip;",
        	eo : ""
        },
        "repos2-texte-3" : {
        	fr : "Vous vous levez en sursaut, quand deux <span key='araignee'>araignées</span> vous sautent dessus&nbsp;!",
        	en : "You get up in a jolt when two <span key='araignee'>spiders</span> jump on you!",
        	eo : ""
        },

        "reposCombat-texte-1" : {
        	fr : "Après avoir défait vos adversaires à la force de vos <span key='poing'>poings</span>,",
        	en : "After defeating your opponents with the strength of your <span key='poing'>fist</span>,",
        	eo : ""
        },
        "reposCombat-texte-2" : {
        	fr : "Vous faites une pause pour reprendre vos esprits.",
        	en : "You take a break to get your breath.",
        	eo : ""
        },

        "reposFouilleFail-texte-1" : {
        	fr : "Vous en fouillez une, mais ne trouvez que des entrailles&hellip; Berk&nbsp;!",
        	en : "You search one but only find guts&hellip; Yuck!",
        	eo : ""
        },
        "reposFouilleFail-texte-2" : {
        	fr : "J’espère que ce n'est pas ce que vous cherchiez&hellip; si&nbsp;?",
        	en : "I hope that's not what you’re looking for&hellip; is it?",
        	eo : ""
        },

        "reposFouilleSuccess-texte-1" : {
        	fr : "En remuant les entrailles, vous découvrez une belle <span key='pomme'>pomme</span>&nbsp;!",
        	en : "Stirring the guts you discover a beautiful <span key='pomme'>apple</span>!",
        	eo : ""
        },
        "reposFouilleSuccess-texte-2" : {
        	fr : "Espérons que le rouge provienne bien de sa maturité&hellip;",
        	en : "Well, hope that the red comes from its maturity&hellip;",
        	eo : ""
        },

        "reposExamine-texte-1" : {
        	fr : "En vous penchant, vous remarquez que les traces de vos adversaires remontent vers une caverne non loin.",
        	en : "By stooping, you notice that your opponents' tracks go back to a nearby cave.",
        	eo : ""
        },
        "reposExamine-texte-2" : {
        	fr : "On peut clairement y entendre grouiller divers insectes.",
        	en : "You can clearly hear various insects swarming around.",
        	eo : ""
        },
        "reposExamine-texte-3" : {
        	fr : "On se lance&nbsp;?",
        	en : "Let’s go?",
        	eo : ""
        }
	};
	
	return {
        name : function() {
            return "Tuto Debut.js";
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