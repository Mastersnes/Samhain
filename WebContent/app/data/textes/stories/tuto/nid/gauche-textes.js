'use strict';
define([], function(){
	var data = {
	    "nidGauche-texte-1" : {
        	fr : "La lumière semble faiblir davantage, mais vous distinguez au loin une faible lueur.",
        	en : "The light seems to fade more, but you can see a glow in the distance.",
        	eo : ""
        },
        "nidGauche-texte-2" : {
        	fr : "En vous approchant, vous apercevez un énorme coffre.",
        	en : "As you approach, you see a huge trunk.",
        	eo : ""
        },

        "coffre-texte-1" : {
        	fr : "Le coffre est solidement fermé.",
        	en : "The trunk is solidly closed.",
        	eo : ""
        },
        "coffre-texte-2" : {
        	fr : "Peut-être qu'en essayant de faire levier avec la <span key='dague'>dague</span>,",
        	en : "Perhaps by forcing a little with the <span key='dague'>dagger</span>,",
        	eo : ""
        },
        "coffre-texte-3" : {
        	fr : "vous pourriez réussir à l'ouvrir&nbsp;?",
        	en : "you might be able to open it?",
        	eo : ""
        },

        "coffreReussite1-texte-1" : {
        	fr : "Le coffre coince, mais en forçant un peu&hellip;",
        	en : "The trunk is stucking, but by forcing a little&hellip;",
        	eo : ""
        },
        "coffreReussite1-texte-2" : {
        	fr : "Super&nbsp;! Vous réussissez à l'ouvrir en grand&nbsp;!",
        	en : "Awesome! You managed to open it!",
        	eo : ""
        },
        "coffreReussite1-texte-3" : {
        	fr : "Une belle <span key='potionSante'>potion de couleur rouge</span> et un <span key='bouclierBois'>bouclier en bois</span> vous font face.",
        	en : "A beautiful <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span> face you.",
        	eo : ""
        },

        "coffreReussite12-texte-1" : {
        	fr : "Fier de votre butin,",
        	en : "Proud of your loot,",
        	eo : ""
        },
        "coffreReussite12-texte-2" : {
        	fr : "vous retournez à l'intersection et prenez la direction de droite.",
        	en : "you go back to the intersection and turn right.",
        	eo : ""
        },

        "coffreReussite2-texte-1" : {
        	fr : "La <span key='dague'>dague</span> éclate en morceaux et le coffre se renverse sur le sol.",
        	en : "The <span key='dague'>dagger</span> breaks in pieces and the trunk falls on the floor.",
        	eo : ""
        },
        "coffreReussite2-texte-2" : {
        	fr : "Dans le chantier, vous discernez une <span key='potionSante'>potion rouge</span> et un <span key='bouclierBois'>bouclier en bois</span>.",
        	en : "In the mess, you make out a <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span>.",
        	eo : ""
        },

        "coffreReussite21-texte-1" : {
        	fr : "Fier de votre butin, mais un peu nostalgique de votre belle <span key='dague'>dague</span>,",
        	en : "Proud of your loot, but a little nostalgic for your beautiful <span key='dague'>dagger</span>,",
        	eo : ""
        },

        "coffreEchec1-texte-1" : {
        	fr : "Non, impossible&nbsp;! Il ne bouge pas d'un poil.",
        	en : "No, impossible! It's doesn’t move at all.",
        	eo : ""
        },

        "coffreEchec12-texte-1" : {
        	fr : "Un peu déçu,",
        	en : "A bit disappointed,",
        	eo : ""
        },

        "coffreEchec2-texte-1" : {
        	fr : "Bam&nbsp;! La <span key='dague'>dague</span> éclate dans vos mains&nbsp;!",
        	en : "Bam! The <span key='dague'>dagger</span> breaks in your hands!",
        	eo : ""
        },
        "coffreEchec2-texte-2" : {
        	fr : "Un filet de sang coule doucement sur le sol.",
        	en : "A dash of blood flows slowly on the ground.",
        	eo : ""
        },
        "coffreEchec2-texte-3" : {
        	fr : "Le coffre, lui, vous regarde,e impassible&hellip;",
        	en : "The trunk, it, looks impassive&hellip;",
        	eo : ""
        },

        "pas-la-peine" : {
        	fr : "Il n'en vaut pas la peine&hellip;",
        	en : "It's not worth it&hellip;",
        	eo : ""
        },

        "coffreEchec21-texte-1" : {
        	fr : "Avec un mal de chien,",
        	en : "With a dog sickness,",
        	eo : ""
        },
        "coffreEchecSimple-texte-1" : {
        	fr : "Impossible de l'ouvrir&hellip;",
        	en : "Impossible to open it&hellip;",
        	eo : ""
        },

        "coffreRetourSimple-texte-1" : {
        	fr : "Tranquillement,",
        	en : "Quietly,",
        	eo : ""
        }
	};
	
	return {
        name : function() {
            return "Tuto Nid Gauche.js";
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