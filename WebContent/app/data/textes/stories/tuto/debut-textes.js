'use strict';
define([], function(){
	var data = {
        "start-texte-1" : {
            fr : "Une nouvelle journée se termine.",
            en : "A new day ends."
        },
        "start-texte-2" : {
            fr : "La douceur de l'automne caresse les feuilles qui virevoltent aux alentours.",
            en : "The sweetness of autumn caresses the leaves that twirl around."
        },
        "start-texte-3" : {
            fr : "Ayant terminé votre dur labeur un peu plus tôt,",
            en : "Having finished your hard work a little sooner,"
        },
        "start-texte-4" : {
            fr : "Vous ramassez une <span key='pomme'>pomme</span> de votre panier et décidez de vous reposer au pied du géants feuillus.",
            en : "You pick an <span key='pomme'>apple</span> from your basket and decide to rest at the foot of the leafy giants."
        },

        "repos2-texte-1" : {
            fr : "Vous fermez les yeux pour mieux apprécier la brise.",
            en : "You close your eyes to better appreciate the breeze."
        },
        "repos2-texte-2" : {
            fr : "Au loin, il vous semble entendre des bruits de pattes...",
            en : "In the distance, you seem to hear the sounds of legs..."
        },
        "repos2-texte-3" : {
            fr : "Vous vous levez en sursaut quand deux <span key='araignee'>araignées</span> vous sautent dessus !",
            en : "You get up in a jolt when two <span key='araignee'>spiders</span> jump on you!"
        },

        "reposCombat-texte-1" : {
            fr : "Après avoir défait vos adversaires à la force de vos <span key='poing'>poings</span>,",
            en : "After defeating your opponents with the strength of your <span key='poing'>fist</span>,"
        },
        "reposCombat-texte-2" : {
            fr : "Vous faites une pause pour reprendre vos esprits :",
            en : "You're taking a break to come to your senses:"
        },

        "examine-alentours" : {
            fr : "Examiner les alentours",
            en : "Look around"
        },
        "fouille-corps" : {
            fr : "Fouiller les corps",
            en : "Searching bodies"
        },

        "reposFouilleFail-texte-1" : {
            fr : "Vous en fouillez une mais ne trouvez que des entrailles, Berk !",
            en : "You search one but only find guts, Yuck!"
        },
        "reposFouilleFail-texte-2" : {
            fr : "J’espère que ce n'est pas ce que vous cherchiez... si ?",
            en : "I hope that's not what you searched... is it?"
        },

        "reposFouilleSuccess-texte-1" : {
            fr : "En remuant les entrailles vous découvrez une belle <span key='pomme'>pomme</span> !",
            en : "By stirring the guts you discover a beautiful <span key='pomme'>apple</span>!"
        },
        "reposFouilleSuccess-texte-2" : {
            fr : "Espérons que le rouge provienne bien de sa maturité...",
            en : "Let's hope that the red comes from its maturity..."
        },

        "reposExamine-texte-1" : {
            fr : "En vous penchant, vous remarquez que les traces de vos adversaires remontent vers une caverne non loin.",
            en : "When you lean down, you notice that your opponents' tracks go back to a nearby cave."
        },
        "reposExamine-texte-2" : {
            fr : "On peut clairement y entendre grouiller divers insectes.",
            en : "You can clearly hear various insects swarming around."
        },
        "reposExamine-texte-3" : {
            fr : "On se lance ?",
            en : "Shall we get started?"
        },

        "en-avant" : {
            fr : "En avant !",
            en : "Forward!"
        },
        "rentrer-ville" : {
            fr : "Rentrer en ville",
            en : "Getting back into town"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});