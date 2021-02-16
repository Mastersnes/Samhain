'use strict';
define([], function(){
	var data = {
        "reposVillage-texte-1" : {
        	fr : "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
        	en : "You arrive at the outskirts of the village, in front of the farm of old Tom.",
        	eo : "Vi alvenas apud vilaĝo, antaŭ la farmo de la maljuna Tom."
        },
        "reposVillage-texte-2" : {
        	fr : "Au loin, des bruits de combats acharnés se font entendre.",
        	en : "In the distance, fierce fighting sounds can be heard.",
        	eo : "Fore, vi povas aŭdi bruojn de intensajn batalojn."
        },
        "reposVillage-texte-3" : {
        	fr : "Un vent de panique vous submerge&hellip;",
        	en : "A wave of panic overwhelms you&hellip;",
        	eo : "Vento de paniko premas vin&hellip;"
        },

        "fermeExaminer-texte-1" : {
        	fr : "Il s'agit d'une vieille grange mal entretenue&hellip;",
        	en : "This is a poorly maintained old barn&hellip;",
        	eo : "Temas pri malnova kaduka garbejo&hellip"
        },
        "fermeExaminer-texte-2" : {
        	fr : "Elle semble abandonnée et un <span key='baton'>gros bâton</span> permet de caler la porte.",
        	en : "It seems abandoned and a <span key='baton'>big stick</span> wedges the door in place.",
        	eo : "Ĝi ŝajnas forlasita kaj granda <span key='baton'>bastono</span> ebligas bloki la pordon."
        },
        "fermeExaminer-texte-3" : {
        	fr : "Peut-être en cas d'orage&nbsp;?",
        	en : "Maybe in case of a storm?",
        	eo : "Eble okaze de fulmotondro?"
        },

        "fermeExaminer2-texte-1" : {
        	fr : "Elle semble abandonnée.",
        	en : "It seems abandoned.",
        	eo : "Ĝi ŝajnas forlasita."
        },
        "fermeExaminer2-texte-2" : {
        	fr : "Le corps d'une <span key='goule'>goule</span> gît devant la porte grande ouverte.",
        	en : "A <span key='goule'>ghoul's</span> body lies in front of the open door.",
        	eo : "La korpo de <span key='goule'>gulo</span> kuŝas antaŭ la pordo larĝe malfermita."
        },

        "batonSaisieReussite1-texte-1" : {
        	fr : "En forçant un peu, vous parvenez à débloquer le <span key='baton'>bâton</span>.",
        	en : "By forcing a little, you reach to unlock the <span key='baton'>stick</span>.",
        	eo : "Fortirante, vi sukcesas malbloki la <span key='baton'>bastonon</span>."
        },
        "batonSaisieReussite1-texte-2" : {
        	fr : "Dans une roulade arrière, vous avez juste le temps d'esquiver",
        	en : "In a backward roll, you have just enough time to dodge",
        	eo : "Per malantaŭ transkapiĝo, vi nur havas tempon por eviti"
        },
        "batonSaisieReussite2-texte-1" : {
        	fr : "Malheureusement vous n'avez pas le temps d'éviter",
        	en : "Unfortunately, you don't have time to dodge",
        	eo : "Bedaŭrinde, vi ne havas tempon por eviti"
        },
        "batonSaisieReussite1-texte-3" : {
        	fr : "la grosse porte de la grange qui s'ouvre avec fracas&hellip;",
        	en : "the big door of the barn that opens with crash&hellip;",
        	eo : "la portegon de la garbejon, kiu bruege malfermiĝas&hellip;"
        },
        "batonSaisieReussite2-texte-2" : {
        	fr : "et vous fait tomber à la renverse&hellip;",
        	en : "and makes you fall down&hellip;",
        	eo : "kaj faligas vin&hellip;"
        },

        "batonSaisieEchec-texte-1" : {
        	fr : "Impossible de le faire bouger&hellip;",
        	en : "Impossible to make it move&hellip;",
        	eo : "Neeblas movigi ĝin&hellip;"
        },
        "batonSaisieEchec-texte-2" : {
        	fr : "Le <span key='baton'>bâton</span> est trop bien enfoncé.",
        	en : "The <span key='baton'>stick</span> is sunk too deep.",
        	eo : "La <span key='baton'>bastono</span> estas tro bone enigita."
        },
        "batonSaisieEchec-texte-3" : {
        	fr : "Au loin, la bataille fait rage&hellip;",
        	en : "In the distance, the battle rages&hellip;",
        	eo : "Fore, la batalo furiozas&hellip;"
        },

        "batonPousse-texte-1" : {
        	fr : "Vous donnez un puissant coup de pied dans le <span key='baton'>bâton</span> qui éclate en morceaux.",
        	en : "You give a powerful kick in the <span key='baton'>stick</span> that burst into pieces.",
        	eo : "Vi fortega piedbatas la bastonon, kiu disrompiĝas en pecojn."
        },
        "batonPousse-texte-2" : {
        	fr : "La porte de la grange s'ouvre avec fracas&hellip;",
        	en : "The door of the barn opens with crash&hellip;",
        	eo : "La pordo de la garbejo bruege malfermiĝas&hellip;"
        },

        "fermeGoule-texte-1" : {
        	fr : "Une horrible <span key='goule'>goule</span> bondit hors de la grange&nbsp;!",
        	en : "A horrible <span key='goule'>ghoul</span> leaps out of the barn!",
        	eo : "Terura <span key='goule'>gulo</span> saltas el la garbejo!"
        },
        "fermeGoule-texte-2" : {
        	fr : "Elle vous observe un moment, comme si vous étiez un en-cas,",
        	en : "She watches you for a while, as if you were a snack,",
        	eo : "Ĝi observas vin momenton, kvazaŭ vi estus manĝeto,"
        },
        "fermeGoule-texte-3" : {
        	fr : "puis se jette sur vous&nbsp;!",
        	en : "and then leaps on you!",
        	eo : "kaj ĵetiĝas sur vin!"
        },

        "fermeGoule2-texte-1" : {
        	fr : "Qu'est-ce que ce monstre faisait là&nbsp;?",
        	en : "What was this monster doing there?",
        	eo : "Kion faris ĉi tiu monstro tie?"
        },
        "fermeGoule2-texte-2" : {
        	fr : "Vous vous remettez de vos émotions et&hellip;",
        	en : "You get a grip on yourself and&hellip;",
        	eo : "Vi rekonsciiĝas kaj&hellip;"
        },

        "fouillerGoule-texte-1" : {
        	fr : "Rien&hellip;",
        	en : "Nothing&hellip;",
        	eo : "Nenion&hellip;"
        },
        "fouillerGoule-texte-2" : {
        	fr : "Juste un cadavre à moitié décomposé.",
        	en : "Just a corpse half-decomposed.",
        	eo : "Nur duone putra kadavro."
        },

        "grange-texte-1" : {
        	fr : "La grange est sombre et sent le renfermé.",
        	en : "The barn is dark and smells musty.",
        	eo : "La garbejo estas malhela kaj odoras mucidan."
        },
        "grange-texte-2" : {
        	fr : "Une grosse table est posée au fond.",
        	en : "A large table is set in the back.",
        	eo : "Granda tablo estas instalita funde."
        },

        "grangeFouilleTable-texte-1" : {
        	fr : "La table est recouverte de paperasses en pagaille.",
        	en : "The table is covered with lots of papers in a mess.",
        	eo : "La tablo estas kovrita de malordaj paperoj."
        },
        "grangeFouilleTable-texte-2" : {
        	fr : "Une vieille <span key='bougie'>bougie</span> presque consumée est posée dans un coin.",
        	en : "An old <span key='bougie'>candle</span> almost whole burned was placed in a corner.",
        	eo : "Malnova <span key='bougie'>kandelo</span> preskaŭ konsumiĝita estas metita en angulo."
        },

        "grangeFouilleTable2-texte-1" : {
        	fr : "Vous prenez la <span key='bougie'>bougie</span> et le nécessaire pour l'allumer si besoin.",
        	en : "You take the <span key='bougie'>candle</span> and some stuff to light it.",
        	eo : "Vi prenas la <span key='bougie'>kandelon</span> kaj la necesan por bruligi ĝin."
        },
        "grangeFouilleTable2-texte-2" : {
        	fr : "Il est temps de continuer l'aventure&nbsp;!",
        	en : "It’s time to continue the adventure!",
        	eo : "Estas tempo de daŭrigi la aventuron!"
        },

        "grangeExamine-texte-1" : {
        	fr : "Une grande bâtisse recouverte de poussière&hellip;",
        	en : "A large building covered with dust&hellip;",
        	eo : "Granda konstruaĵo kovrita de polvo&hellip;"
        },
        "grangeExamine-texte-2" : {
        	fr : "De la paille est présente partout où vous mettez les pieds.",
        	en : "Straw is present wherever you set your feet.",
        	eo : "Estas pajlo ĉie, kie vi metas la piedojn."
        },

        "grangeFouilleTable3-texte-1" : {
        	fr : "Elle aurait besoin d'un bon nettoyage&hellip;",
        	en : "It would need a good cleaning&hellip;",
        	eo : "Ĝi bezonus bonan purigadon&hellip;"
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