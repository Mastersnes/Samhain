'use strict';
define([], function(){
	var data = {
        "reposVillage-texte-1" : {
            fr : "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
            en : "You arrive at the outskirts of the village, in front of the old Tom's farm."
        },
        "reposVillage-texte-2" : {
            fr : "Au loin, des bruits de combats acharnés se font entendre.",
            en : "In the distance, fierce fighting sounds are heard."
        },
        "reposVillage-texte-3" : {
            fr : "Un vent de panique vous submerge&hellip;",
            en : "A wind of panic overwhelms you&hellip;"
        },

        "fermeExaminer-texte-1" : {
            fr : "Il s'agit d'une vieille grange mal entretenue&hellip;",
            en : "This is a poorly maintained old barn&hellip;"
        },
        "fermeExaminer-texte-2" : {
            fr : "Elle semble abandonnée et un <span key='baton'>gros bâton</span> permet de caler la porte.",
            en : "She seems to give up and a <span key='baton'>big stick</span> makes it possible to stall the door."
        },
        "fermeExaminer-texte-3" : {
            fr : "Peut-être en cas d'orage&nbsp;?",
            en : "Maybe in the event of a storm?"
        },

        "fermeExaminer2-texte-1" : {
            fr : "Elle semble abandonnée.",
            en : "It seems abandoned."
        },
        "fermeExaminer2-texte-2" : {
            fr : "Le corps d'une <span key='goule'>goule</span> g&icirc;t devant la porte grande ouverte.",
            en : "A <span key='goule'>ghoul's</span> body lies in front of the wide open door."
        },

        "batonSaisieReussite1-texte-1" : {
            fr : "En forçant un peu, vous parvenez à débloquer le <span key='baton'>bâton</span>.",
            en : "By forcing a little, you can unlock the <span key='baton'>stick</span>."
        },
        "batonSaisieReussite1-texte-2" : {
            fr : "Dans une roulade arrière, vous avez juste le temps d'esquiver",
            en : "In backward roll, you have just enough time to dodge"
        },
        "batonSaisieReussite2-texte-1" : {
            fr : "Malheureusement vous n'avez pas le temps d'éviter",
            en : "Unfortunately, you don't have time to avoid"
        },
        "batonSaisieReussite2-texte-2" : {
            fr : "et vous fait tomber à la renverse&hellip;",
            en : "and knocked you over&hellip;"
        },
        "batonSaisieReussite1-texte-3" : {
            fr : "la grosse porte de la grange qui s'ouvre avec fracas&hellip;",
            en : "the big door of the barn that opens with a crashing sound&hellip;"
        },

        "batonSaisieEchec-texte-1" : {
            fr : "Impossible de le faire bouger&hellip;",
            en : "Impossible to make it move&hellip;"
        },
        "batonSaisieEchec-texte-2" : {
            fr : "Le <span key='baton'>bâton</span> est trop bien enfoncé.",
            en : "The <span key='baton'>stick</span> is too deep."
        },
        "batonSaisieEchec-texte-3" : {
            fr : "Au loin, la bataille fait rage&hellip;",
            en : "In the distance, the battle rages&hellip;"
        },

        "batonPousse-texte-1" : {
            fr : "Vous donnez un puissant coup de pied dans le <span key='baton'>bâton</span> qui éclate en morceaux.",
            en : "You made a powerful kick in the <span key='baton'>stick</span> that burst into pieces."
        },
        "batonPousse-texte-2" : {
            fr : "La porte de la grange s'ouvre avec fracas&hellip;",
            en : "The door of the barn opens with a crashing sound&hellip;"
        },

        "fermeGoule-texte-1" : {
            fr : "Une horrible <span key='goule'>goule</span> bondit hors de la grange&nbsp;!",
            en : "A horrible <span key='goule'>ghoul</span> leaps out of the barn!"
        },
        "fermeGoule-texte-2" : {
            fr : "Elle vous observe un moment, comme si vous étiez un en-cas,",
            en : "She watches you for a while, like you're a snack,"
        },
        "fermeGoule-texte-3" : {
            fr : "puis se jette sur vous&nbsp;!",
            en : "and then throws himself on you!"
        },

        "fermeGoule2-texte-1" : {
            fr : "Qu'est-ce que ce monstre faisait là&nbsp;?",
            en : "What did this monster do here&nbsp;?"
        },
        "fermeGoule2-texte-2" : {
            fr : "Vous vous remettez de vos émotions et&hellip;",
            en : "You recover from your emotions and&hellip;"
        },

        "fouillerGoule-texte-1" : {
            fr : "Rien&hellip;",
            en : "Nothing&hellip;"
        },
        "fouillerGoule-texte-2" : {
            fr : "Juste un cadavre à moitié décomposé.",
            en : "Just a corpse half-decomposed."
        },

        "grange-texte-1" : {
            fr : "La grange est sombre et sent le renfermé.",
            en : "The barn is dark and smells of containment."
        },
        "grange-texte-2" : {
            fr : "Une grosse table est posée au fond.",
            en : "A large table is set in the back."
        },

        "grangeFouilleTable-texte-1" : {
            fr : "La table est recouverte de paperasses en pagaille.",
            en : "The table is covered in clutterful paperwork."
        },
        "grangeFouilleTable-texte-2" : {
            fr : "Une vieille <span key='bougie'>bougie</span> presque consumée est posée dans un coin.",
            en : "An old <span key='bougie'>candle</span> almost worn out is placed in a corner."
        },

        "grangeFouilleTable2-texte-1" : {
            fr : "Vous prenez la <span key='bougie'>bougie</span> et le nécessaire pour l'allumer si besoin.",
            en : "You take the candle and light it if necessary."
        },
        "grangeFouilleTable2-texte-2" : {
            fr : "Il est temps de continuer l'aventure&nbsp;!",
            en : "It is time to continue the adventure!"
        },

        "grangeExamine-texte-1" : {
            fr : "Une grande bâtisse recouverte de poussière&hellip;",
            en : "A large building covered with dust&hellip;"
        },
        "grangeExamine-texte-2" : {
            fr : "De la paille est présente partout où vous mettez les pieds.",
            en : "Straw is present wherever you set foot."
        },

        "grangeFouilleTable3-texte-1" : {
            fr : "Elle aurait besoin d'un bon nettoyage&hellip;",
            en : "It would need a good cleaning&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});