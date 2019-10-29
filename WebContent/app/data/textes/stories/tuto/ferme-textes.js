'use strict';
define([], function(){
	var data = {
        "reposVille-texte-1" : {
            fr : "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
            en : "You arrive at the outskirts of the village, in front of the old Tom's farm."
        },
        "reposVille-texte-2" : {
            fr : "Au loin, des bruits de combats acharn&eacute;s se font entendre.",
            en : "In the distance, fierce fighting sounds are heard."
        },
        "reposVille-texte-3" : {
            fr : "Un vent de panique vous submerge&hellip;",
            en : "A wind of panic overwhelms you&hellip;"
        },

        "courir-ville" : {
            fr : "Courir au village",
            en : "Running to the village"
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
            fr : "Peut-&ecirc;tre en cas d&rsquo;orage ?",
            en : "Maybe in the event of a storm?"
        },

        "retirer-baton" : {
            fr : "Retirer le b&acirc;ton",
            en : "Remove the stick"
        },
        "casser-baton" : {
            fr : "Casser le b&acirc;ton",
            en : "Break the stick"
        },

        "fermeExaminer2-texte-1" : {
            fr : "Elle semble abandonn&eacute;e.",
            en : "It seems abandoned."
        },
        "fermeExaminer2-texte-2" : {
            fr : "Le corps d&rsquo;une <span key='goule'>goule</span> g&icirc;t devant la porte grande ouverte.",
            en : "A <span key='goule'>ghoul's</span> body lies in front of the wide open door."
        },

        "entrer-grange" : {
            fr : "Entrer dans la grange",
            en : "Enter the barn"
        },

        "batonSaisieReussite1-texte-1" : {
            fr : "En for&ccedil;ant un peu, vous parvenez &agrave; d&eacute;bloquer le <span key='baton'>b&acirc;ton</span>.",
            en : "By forcing a little, you can unlock the <span key='baton'>stick</span>."
        },
        "batonSaisieReussite1-texte-2" : {
            fr : "Dans une roulade arri&egrave;re, vous avez juste le temps d&rsquo;esquiver",
            en : "In backward roll, you have just enough time to dodge"
        },
        "batonSaisieReussite2-texte-1" : {
            fr : "Malheureusement vous n&rsquo;avez pas le temps d&rsquo;&eacute;viter",
            en : "Unfortunately, you don't have time to avoid"
        },
        "batonSaisieReussite2-texte-2" : {
            fr : "et vous fait tomber &agrave; la renverse&hellip;",
            en : "and knocked you over..."
        },
        "batonSaisieReussite1-texte-3" : {
            fr : "la grosse porte de la grange qui s&rsquo;ouvre avec fracas&hellip;",
            en : "the big door of the barn that opens with a crashing sound..."
        },

        "garder-baton" : {
            fr : "Garder le b&acirc;ton",
            en : "Keeping the stick"
        },

        "batonSaisieEchec-texte-1" : {
            fr : "Impossible de le faire bouger&hellip;",
            en : "Impossible to make it move&hellip;"
        },
        "batonSaisieEchec-texte-2" : {
            fr : "Le <span key='baton'>b&acirc;ton</span> est trop bien enfonc&eacute;.",
            en : "The <span key='baton'>stick</span> is too deep."
        },
        "batonSaisieEchec-texte-3" : {
            fr : "Au loin, la bataille fait rage&hellip;",
            en : "In the distance, the battle rages&hellip;"
        },

        "batonPousse-texte-1" : {
            fr : "Vous donnez un puissant coup de pied dans le <span key='baton'>b&acirc;ton</span> qui &eacute;clate en morceaux.",
            en : "You made a powerful kick in the <span key='baton'>stick</span> that burst into pieces."
        },
        "batonPousse-texte-2" : {
            fr : "La porte de la grange s&rsquo;ouvre avec fracas&hellip;",
            en : "The door of the barn opens with a crashing sound..."
        },

        "fermeGoule-texte-1" : {
            fr : "Une horrible <span key='goule'>goule</span> bondit hors de la grange !",
            en : "A horrible <span key='goule'>ghoul</span> leaps out of the barn!"
        },
        "fermeGoule-texte-2" : {
            fr : "Elle vous observe un moment, comme si vous &eacute;tiez un en-cas,",
            en : "She watches you for a while, like you're a snack,"
        },
        "fermeGoule-texte-3" : {
            fr : "puis se jette sur vous !",
            en : "and then throws himself on you!"
        },

        "fermeGoule2-texte-1" : {
            fr : "Qu&rsquo;est-ce que ce monstre faisait l&agrave; ?",
            en : "What did this monster do here ?"
        },
        "fermeGoule2-texte-2" : {
            fr : "Vous vous remettez de vos &eacute;motions et&hellip;",
            en : "You recover from your emotions and&hellip;"
        },

        "fouillerGoule-texte-1" : {
            fr : "Rien&hellip;",
            en : "Nothing&hellip;"
        },
        "fouillerGoule-texte-2" : {
            fr : "Juste un cadavre &agrave; moiti&eacute; d&eacute;compos&eacute;.",
            en : "Just a corpse half-decomposed."
        },

        "grange-texte-1" : {
            fr : "La grange est sombre et sent le renferm&eacute;.",
            en : "The barn is dark and smells of containment."
        },
        "grange-texte-2" : {
            fr : "Une grosse table est pos&eacute;e au fond.",
            en : "A large table is set in the back."
        },

        "fouiller-table" : {
            fr : "Fouiller la table",
            en : "Search the table"
        },
        "examine-grange" : {
            fr : "Examiner la grange",
            en : "Examine the barn"
        },

        "grangeFouilleTable-texte-1" : {
            fr : "La table est recouverte de paperasses en pagaille.",
            en : "The table is covered in clutterful paperwork."
        },
        "grangeFouilleTable-texte-2" : {
            fr : "Une vieille <span key='bougie'>bougie</span> presque us&eacute;e est pos&eacute;e dans un coin.",
            en : "An old <span key='bougie'>candle</span> almost worn out is placed in a corner."
        },

        "prendre-bougie" : {
            fr : "Prendre la bougie",
            en : "Take the candle"
        },

        "grangeFouilleTable2-texte-1" : {
            fr : "Vous prenez la <span key='bougie'>bougie</span> et le n&eacute;cessaire pour l&rsquo;allumer si besoin.",
            en : "You take the candle and light it if necessary."
        },
        "grangeFouilleTable2-texte-2" : {
            fr : "Il est temps de continuer l&rsquo;aventure :",
            en : "It is time to continue the adventure:"
        },

        "grangeExamine-texte-1" : {
            fr : "Une grande b&acirc;tisse recouverte de poussi&egrave;re&hellip;",
            en : "A large building covered with dust&hellip;"
        },
        "grangeExamine-texte-2" : {
            fr : "De la paille est pr&eacute;sente partout o&ugrave; vous mettez les pieds.",
            en : "Straw is present wherever you set foot."
        },

        "grangeFouilleTable3-texte-1" : {
            fr : "Elle aurait besoin d&rsquo;un bon nettoyage&hellip;",
            en : "It would need a good cleaning&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});