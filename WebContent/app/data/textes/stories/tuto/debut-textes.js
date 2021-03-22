'use strict';
define([], function(){
	var data = {
        "tuto-start-texte-1" : {
        	fr : "Une nouvelle journée se termine.",
        	en : "A new day ends.",
        	eo : "Nova tago finiĝas."
        },
        "tuto-start-texte-2" : {
        	fr : "La douceur de l'automne caresse les feuilles qui virevoltent aux alentours.",
        	en : "The autumn sweetness caresses the leaves that spin around.",
        	eo : "La mildeco de la aŭtuno karesas la foliojn, kiuj flirtas ĉirkaŭe."
        },
        "tuto-start-texte-3" : {
        	fr : "Ayant terminé votre dur labeur un peu plus tôt,",
        	en : "Having finished your hard work a little sooner,",
        	eo : "Fininte vian malfacilan laboron iom pli frue,"
        },
        "tuto-start-texte-4" : {
        	fr : "Vous ramassez une <span key='pomme'>pomme</span> de votre panier et décidez de vous reposer au pied du géant feuillu.",
        	en : "You pick an <span key='pomme'>apple</span> from your basket and decide to rest at the foot of a leafy giant.",
        	eo : "Vi prenas <span key='pomme'>pomon</span> en via korbo kaj decidas ripozi piede de giganta arbo."
        },

        "repos2-texte-1" : {
        	fr : "Vous fermez les yeux pour mieux apprécier la brise.",
        	en : "You close your eyes to better appreciate the breeze.",
        	eo : "Vi malfermas viajn okulojn por pli bone ĝui la brizon."
        },
        "repos2-texte-2" : {
        	fr : "Au loin, il vous semble entendre des bruits de pattes&hellip;",
        	en : "In the distance, you seem to hear legs noises&hellip;",
        	eo : "Fore, ŝajnas al vi aŭdi piedbruojn&hellip;"
        },
        "repos2-texte-3" : {
        	fr : "Vous vous levez en sursaut, quand deux <span key='araignee'>araignées</span> vous sautent dessus&nbsp;!",
        	en : "You get up in a jolt when two <span key='araignee'>spiders</span> jump on you!",
        	eo : "Vi ekstaras kaj subite du <span key='araignee'>araneoj</span> saltas sur vin!"
        },

        "reposCombat-texte-1" : {
        	fr : "Après avoir défait vos adversaires à la force de vos <span key='poing'>poings</span>,",
        	en : "After defeating your opponents with the strength of your <span key='poing'>fist</span>,",
        	eo : "Venkinta viajn kontraŭulojn per la forto de viaj <span key='poing'>pugnoj</span>,"
        },
        "reposCombat-texte-2" : {
        	fr : "Vous faites une pause pour reprendre vos esprits.",
        	en : "You take a break to get your breath.",
        	eo : "Vi faras paŭzon por iom spiri."
        },

        "reposFouilleFail-texte-1" : {
        	fr : "Vous en fouillez une, mais ne trouvez que des entrailles&hellip; Berk&nbsp;!",
        	en : "You search one but only find guts&hellip; Yuck!",
        	eo : "Vi priserĉas unu, sed nur trovas viscerojn&hellip; Fi!"
        },
        "reposFouilleFail-texte-2" : {
        	fr : "J’espère que ce n'est pas ce que vous cherchiez&hellip; si&nbsp;?",
        	en : "I hope that's not what you’re looking for&hellip; is it?",
        	eo : "Mi esperas, ke ne tion vi serĉis&hellip; Ĉu?"
        },

        "reposFouilleSuccess-texte-1" : {
        	fr : "En remuant les entrailles, vous découvrez une belle <span key='pomme'>pomme</span>&nbsp;!",
        	en : "Stirring the guts you discover a beautiful <span key='pomme'>apple</span>!",
        	eo : "Movante la viscerojn, vi trovas belan <span key='pomme'>pomon</span>!"
        },
        "reposFouilleSuccess-texte-2" : {
        	fr : "Espérons que le rouge provienne bien de sa maturité&hellip;",
        	en : "Well, hope that the red comes from its maturity&hellip;",
        	eo : "Espereble la ruĝo ja devenas de ĝia matureco&hellip;"
        },

        "reposExamine-texte-1" : {
        	fr : "En vous penchant, vous remarquez que les traces de vos adversaires remontent vers une caverne non loin.",
        	en : "By stooping, you notice that your opponents' tracks go back to a nearby cave.",
        	eo : "Kliniĝante, vi rimarkas, ke la spuroj de viaj kontraŭuloj gvidas al proksima kaverno."
        },
        "reposExamine-texte-2" : {
        	fr : "On peut clairement y entendre grouiller divers insectes.",
        	en : "You can clearly hear various insects swarming around.",
        	eo : "Ni povas klare aŭdi svarmadon de diversaj insektoj."
        },
        "reposExamine-texte-3" : {
        	fr : "On se lance&nbsp;?",
        	en : "Let’s go?",
        	eo : "Ek?"
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