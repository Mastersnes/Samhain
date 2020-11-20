'use strict';
define([], function(){
	var data = {
        "reposVillage-texte-1" : {
        	fr : "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
        	en : "You arrive at the outskirts of the village, in front of the farm of old Tom.",
        	eo : ""
        },
        "reposVillage-texte-2" : {
        	fr : "Au loin, des bruits de combats acharnés se font entendre.",
        	en : "In the distance, fierce fighting sounds can be heard.",
        	eo : ""
        },
        "reposVillage-texte-3" : {
        	fr : "Un vent de panique vous submerge&hellip;",
        	en : "A wave of panic overwhelms you&hellip;",
        	eo : ""
        },

        "fermeExaminer-texte-1" : {
        	fr : "Il s'agit d'une vieille grange mal entretenue&hellip;",
        	en : "This is a poorly maintained old barn&hellip;",
        	eo : ""
        },
        "fermeExaminer-texte-2" : {
        	fr : "Elle semble abandonnée et un <span key='baton'>gros bâton</span> permet de caler la porte.",
        	en : "It seems abandoned and a <span key='baton'>big stick</span> wedges the door in place.",
        	eo : ""
        },
        "fermeExaminer-texte-3" : {
        	fr : "Peut-être en cas d'orage&nbsp;?",
        	en : "Maybe in case of a storm?",
        	eo : ""
        },

        "fermeExaminer2-texte-1" : {
        	fr : "Elle semble abandonnée.",
        	en : "It seems abandoned.",
        	eo : ""
        },
        "fermeExaminer2-texte-2" : {
        	fr : "Le corps d'une <span key='goule'>goule</span> gît devant la porte grande ouverte.",
        	en : "A <span key='goule'>ghoul's</span> body lies in front of the open door.",
        	eo : ""
        },

        "batonSaisieReussite1-texte-1" : {
        	fr : "En forçant un peu, vous parvenez à débloquer le <span key='baton'>bâton</span>.",
        	en : "By forcing a little, you reach to unlock the <span key='baton'>stick</span>.",
        	eo : ""
        },
        "batonSaisieReussite1-texte-2" : {
        	fr : "Dans une roulade arrière, vous avez juste le temps d'esquiver",
        	en : "In a backward roll, you have just enough time to dodge",
        	eo : ""
        },
        "batonSaisieReussite2-texte-1" : {
        	fr : "Malheureusement vous n'avez pas le temps d'éviter",
        	en : "Unfortunately, you don't have time to dodge",
        	eo : ""
        },
        "batonSaisieReussite1-texte-3" : {
        	fr : "la grosse porte de la grange qui s'ouvre avec fracas&hellip;",
        	en : "the big door of the barn that opens with crash&hellip;",
        	eo : ""
        },
        "batonSaisieReussite2-texte-2" : {
        	fr : "et vous fait tomber à la renverse&hellip;",
        	en : "and makes you fall down&hellip;",
        	eo : ""
        },

        "batonSaisieEchec-texte-1" : {
        	fr : "Impossible de le faire bouger&hellip;",
        	en : "Impossible to make it move&hellip;",
        	eo : ""
        },
        "batonSaisieEchec-texte-2" : {
        	fr : "Le <span key='baton'>bâton</span> est trop bien enfoncé.",
        	en : "The <span key='baton'>stick</span> is sunk too deep.",
        	eo : ""
        },
        "batonSaisieEchec-texte-3" : {
        	fr : "Au loin, la bataille fait rage&hellip;",
        	en : "In the distance, the battle rages&hellip;",
        	eo : ""
        },

        "batonPousse-texte-1" : {
        	fr : "Vous donnez un puissant coup de pied dans le <span key='baton'>bâton</span> qui éclate en morceaux.",
        	en : "You give a powerful kick in the <span key='baton'>stick</span> that burst into pieces.",
        	eo : ""
        },
        "batonPousse-texte-2" : {
        	fr : "La porte de la grange s'ouvre avec fracas&hellip;",
        	en : "The door of the barn opens with crash&hellip;",
        	eo : ""
        },

        "fermeGoule-texte-1" : {
        	fr : "Une horrible <span key='goule'>goule</span> bondit hors de la grange&nbsp;!",
        	en : "A horrible <span key='goule'>ghoul</span> leaps out of the barn!",
        	eo : ""
        },
        "fermeGoule-texte-2" : {
        	fr : "Elle vous observe un moment, comme si vous étiez un en-cas,",
        	en : "She watches you for a while, as if you were a snack,",
        	eo : ""
        },
        "fermeGoule-texte-3" : {
        	fr : "puis se jette sur vous&nbsp;!",
        	en : "and then leaps on you!",
        	eo : ""
        },

        "fermeGoule2-texte-1" : {
        	fr : "Qu'est-ce que ce monstre faisait là&nbsp;?",
        	en : "What was this monster doing there&nbsp;?",
        	eo : ""
        },
        "fermeGoule2-texte-2" : {
        	fr : "Vous vous remettez de vos émotions et&hellip;",
        	en : "You get a grip on yourself and&hellip;",
        	eo : ""
        },

        "fouillerGoule-texte-1" : {
        	fr : "Rien&hellip;",
        	en : "Nothing&hellip;",
        	eo : ""
        },
        "fouillerGoule-texte-2" : {
        	fr : "Juste un cadavre à moitié décomposé.",
        	en : "Just a corpse half-decomposed.",
        	eo : ""
        },

        "grange-texte-1" : {
        	fr : "La grange est sombre et sent le renfermé.",
        	en : "The barn is dark and smells musty.",
        	eo : ""
        },
        "grange-texte-2" : {
        	fr : "Une grosse table est posée au fond.",
        	en : "A large table is set in the back.",
        	eo : ""
        },

        "grangeFouilleTable-texte-1" : {
        	fr : "La table est recouverte de paperasses en pagaille.",
        	en : "The table is covered with lots of papers in a mess.",
        	eo : ""
        },
        "grangeFouilleTable-texte-2" : {
        	fr : "Une vieille <span key='bougie'>bougie</span> presque consumée est posée dans un coin.",
        	en : "An old <span key='bougie'>candle</span> almost whole burned was placed in a corner.",
        	eo : ""
        },

        "grangeFouilleTable2-texte-1" : {
        	fr : "Vous prenez la <span key='bougie'>bougie</span> et le nécessaire pour l'allumer si besoin.",
        	en : "You take <span key='bougie'>the candle</span> and some stuff to light it.",
        	eo : ""
        },
        "grangeFouilleTable2-texte-2" : {
        	fr : "Il est temps de continuer l'aventure&nbsp;!",
        	en : "It’s time to continue the adventure!",
        	eo : ""
        },

        "grangeExamine-texte-1" : {
        	fr : "Une grande bâtisse recouverte de poussière&hellip;",
        	en : "A large building covered with dust&hellip;",
        	eo : ""
        },
        "grangeExamine-texte-2" : {
        	fr : "De la paille est présente partout où vous mettez les pieds.",
        	en : "Straw is present wherever you set your feet.",
        	eo : ""
        },

        "grangeFouilleTable3-texte-1" : {
        	fr : "Elle aurait besoin d'un bon nettoyage&hellip;",
        	en : "It would need a good cleaning&hellip;",
        	eo : ""
        }
	};
	
	return {
        name : function() {
            return "Tuto Ferme.js";
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