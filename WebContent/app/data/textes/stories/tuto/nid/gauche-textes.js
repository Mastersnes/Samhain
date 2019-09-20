'use strict';
define([], function(){
	var data = {
        "nidGauche-texte-1" : {
            fr : "La lumiére semble faiblir davantage, mais vous distinguez au loin une faible lueur.",
            en : "The light seems to fade more, but you can see a faint glow in the distance."
        },
        "nidGauche-texte-2" : {
            fr : "En vous approchant, vous apercevez un &eacute;norme coffre.",
            en : "As you approach, you see a huge trunk."
        },

        "coffre-texte-1" : {
            fr : "Le coffre est solidement ferm&eacute;.",
            en : "The trunk is securely closed."
        },
        "coffre-texte-2" : {
            fr : "Peut-&ecirc;tre qu&rsquo;en for&ccedil;ant un peu avec la <span key='dague'>dague</span>,",
            en : "Maybe by forcing a little with the <span key='dague'>dagger</span>,"
        },
        "coffre-texte-3" : {
            fr : "vous pourriez r&eacute;ussir &agrave; l&rsquo;ouvrir ?",
            en : "you might be able to open it ?"
        },

        "forcer-coffre" : {
            fr : "Forcer le coffre",
            en : "Forcing the trunk"
        },

        "coffreReussite1-texte-1" : {
            fr : "Le coffre coince, mais en for&ccedil;ant un peu&hellip;",
            en : "The trunk gets stuck, but by forcing a little&hellip;"
        },
        "coffreReussite1-texte-2" : {
            fr : "Super ! Vous r&eacute;ussissez &agrave; l&rsquo;ouvrir en grand !",
            en : "Awesome! You managed to open it wide!"
        },
        "coffreReussite1-texte-3" : {
            fr : "Une belle <span key='potionSante'>potion de couleur rouge</span> et un <span key='bouclierBois'>bouclier en bois</span> vous font face.",
            en : "A beautiful <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span> face you."
        },

        "coffreReussite12-texte-1" : {
            fr : "Fier de votre butin,",
            en : "Proud of your spoils,"
        },
        "coffreReussite12-texte-2" : {
            fr : "vous retournez à l'intersection et prenez la direction de droite.",
            en : "you go back to the intersection and turn right."
        },

        "coffreReussite2-texte-1" : {
            fr : "La <span key='dague'>dague</span> &eacute;clate en morceaux et le coffre se renverse sur le sol.",
            en : "The dagger breaks apart and the trunk falls on the floor."
        },
        "coffreReussite2-texte-2" : {
            fr : "Dans le chantier, vous discernez une <span key='potionSante'>potion rouge</span> et un <span key='bouclierBois'>bouclier en bois</span>.",
            en : "In the mess, you can see a <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span>."
        },

        "coffreReussite21-texte-1" : {
            fr : "Fier de votre butin, mais un peu nostalgique de votre belle <span key='dague'>dague</span>,",
            en : "Proud of your spoils, but a little nostalgic for your beautiful <span key='dague'>dagger</span>,"
        },

        "coffreEchec1-texte-1" : {
            fr : "Non, impossible ! Il ne bouge pas d&rsquo;un poil.",
            en : "No, impossible! He's not moving a bit."
        },

        "coffreEchec12-texte-1" : {
            fr : "Un peu déçu,",
            en : "A little disappointed,"
        },

        "coffreEchec2-texte-1" : {
            fr : "Bam ! La <span key='dague'>dague</span> &eacute;clate dans vos mains !",
            en : "Bam! The dagger bursts in your hands!"
        },
        "coffreEchec2-texte-2" : {
            fr : "Un filet de sang coule doucement sur le sol.",
            en : "A dash of blood flows slowly on the ground."
        },
        "coffreEchec2-texte-3" : {
            fr : "Le coffre, lui, vous regarde impassible&hellip;",
            en : "The trunk, on the other hand, looks impassive&hellip;"
        },

        "pas-la-peine" : {
            fr : "Il n'en vaut pas la peine&hellip;",
            en : "It's not worth it&hellip;"
        },

        "coffreEchec21-texte-1" : {
            fr : "Avec un mal de chien,",
            en : "With a dog sickness,"
        },
        "coffreEchecSimple-texte-1" : {
            fr : "Impossible de l&rsquo;ouvrir&hellip;",
            en : "Impossible to open it&hellip;"
        },

        "tant-pis" : {
            fr : "Tant pis&hellip;",
            en : "Too bad&hellip;"
        },

        "coffreRetourSimple-texte-1" : {
            fr : "Tranquillement,",
            en : "Quietly,"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});