'use strict';
define([], function(){
	var data = {
        "bandits-porte-debut-texte-1" : {
        	fr : "Vous voici reparti à l'aventure. Sans compagnons, mais en route vers l'horizon&nbsp;!",
        	en : "Here you go again to the adventure. Without companions but on the way to the horizon!",
        	eo : "Jen vi reiras al aventuro. Sen kamaradoj, sed survoje al la horizonto!"
        },
        "bandits-porte-debut-texte-2" : {
        	fr : "Suivant la direction indiquée par le gardien de la porte, vous arrivez à quelques mètres d'une sorte de hameau, entouré d'une barricade de bois.",
        	en : "Following the direction indicated by the gatekeeper, you arrive a few meters away from a kind of hamlet surrounded by a wooden barricade.",
        	eo : "Sekvante la direkton indikitan de la pordogardisto, vi alvenas je kelkaj metroj de speco de vilaĝeto, ĉirkaŭita per barikado el ligno."
        },
        "bandits-porte-debut-texte-3" : {
        	fr : "Il doit s'agir du repaire de ces vauriens de bandits.",
        	en : "It must be these bandits lair.",
        	eo : "Ŝajnas, ke estas la rabejo de ĉi tiuj banditoj."
        },
        "bandits-porte-debut-texte-4" : {
        	fr : "Plusieurs options s'offrent alors à vous&hellip;",
        	en : "Several options are then available to you&hellip;",
        	eo : "Vi havas multajn eblojn&hellip;"
        },

        /**
        * On se dirige vers la porte
        **/
        "bandits-porte-texte-1" : {
        	fr : "Vous vous dirigez d'un pas assuré vers la porte.",
        	en : "You head for the door with confidence.",
        	eo : "Vi marŝas memfide al la pordo."
        },
        "bandits-porte-texte-2" : {
        	fr : "Les deux voyous gardant l'entrée ne semblent pas vouloir discuter.",
        	en : "The two bandits guarding the entrance don’t seem to want to talk.",
        	eo : "La du banditoj, kiuj gardas la enirejo, ŝajne ne volis diskuti."
        },
        "bandits-porte-texte-3" : {
        	fr : "C'est certain, tout cela finira dans les larmes&hellip;",
        	en : "For sure, all of this will end with&hellip;",
        	eo : "Tio estas certa, ĉio finiĝos en larmoj&hellip;"
        },

        "bandits-porte-2-texte-1" : {
        	fr : "Les deux confrères tombent à terre en lâchant un râle. Ils ne vous dérangeront plus.",
        	en : "The two colleagues fall, letting out a groan. They’ll don’t disturb you anymore now.",
        	eo : "La du kolegoj falas sur la groundo, ellasante ĝemon. Nun, ili ne plu ĝenos vin."
        },
        "bandits-porte-2-texte-2" : {
        	fr : "Vous continuez votre route et passez la porte de bois pour arriver au cœur d'un petit amoncellement de maisons.",
        	en : "You continue your way and pass the wooden door to arrive at the heart of a little pile of houses.",
        	eo : "Vi daŭrigas vian vojon kaj pasigas la lignan pordon por alveni al la centro de malgranda amaso da domoj."
        },
        "bandits-porte-2-texte-3" : {
        	fr : "Il semblerait que les bandits vivent ici la grande vie&nbsp;!",
        	en : "It seems like the bandits live the high life here!",
        	eo : "Ŝajnas, ke la banditoj vivas la belan vivon ĉi tie!"
        },

        /**
        * On trouve une faille
        **/
        "bandits-porte-faille-texte-1" : {
        	fr : "Vous contournez la grande muraille jusqu'à découvrir un trou entre deux piquets.",
        	en : "You go around the great wall until you discover a hole between two stakes.",
        	eo : "Vi ĉirkaŭiras la grandan muregon ĝis malkovri truon inter du palisoj."
        },
        "bandits-porte-faille-texte-2" : {
        	fr : "La sécurité n'est pas très au point ici&hellip;",
        	en : "The security is not really good here&hellip;",
        	eo : "La sekureco ne estas tre bona ĉi tie&hellip;"
        },
        "bandits-porte-faille-texte-3" : {
        	fr : "Vous pénétrez dans l'enceinte de la muraille et arrivez au cœur d'un petit amoncellement de maisons.",
        	en : "You infiltrate the surrounding wall and arrive at the heart of a little pile of houses.",
        	eo : "Vi eniras en la ĉirkaŭfermon de la murego kaj alvenas al la centro de malgranda amaso da domoj."
        },
        //bandits-porte-2-texte-3

        /**
        * Reussite de l'escalade
        **/
        "bandits-porte-escalade-reussite-texte-1" : {
        	fr : "Grâce à vos talents d'alpiniste chevronné, vous parvenez à franchir la muraille et atterrissez de l'autre côté, indemne.",
        	en : "Thanks to your highly qualified mountaineering skills, you reach to jump over the wall and end up to the other side, unscathed.",
        	eo : "Dank’al viaj talentoj de sperta alpisto, vi sukcesas transiri la muregon kaj atingas aliflanke, senvunda."
        },
        "bandits-porte-escalade-reussite-texte-2" : {
        	fr : "Encore une preuve que l'exercice physique a toujours du bon&nbsp;!",
        	en : "Further proof that physical exercise is always good for you!",
        	eo : "Ankoraŭ pruvo, ke la korpa ekxercado ĉiam bonas por via sano!"
        },
        "bandits-porte-escalade-reussite-texte-3" : {
        	fr : "Après quelques secondes de marche, vous arrivez au cœur d'un petit amoncellement de maisons.",
        	en : "After a few seconds of walking, you arrive at the heart of a little pile of houses.",
        	eo : "Post kelkaj sekundoj da marŝado, vi alvenas al la centro de malgranda amaso da domoj."
        },
        //bandits-porte-2-texte-3

        /**
        * Echec de l'escalade
        **/
        "bandits-porte-escalade-echec-texte-1" : {
        	fr : "Vous essayez d'escalader l’épais mur, mais en vain&hellip;",
        	en : "You try to climb the large wall but in vain&hellip;",
        	eo : "Vi provas grimpi la dikan muron, sed vane&hellip;"
        },
        "bandits-porte-escalade-echec-texte-2" : {
        	fr : "Rien n'y fait, c'est beaucoup trop haut.",
        	en : "There is nothing to do, it’s too high.",
        	eo : "Estas nenio farebla, tio estas tro alta."
        },
        "bandits-porte-escalade-echec-texte-3" : {
        	fr : "Déçu, vous vous retrouvez forcé d’étudier les autres possibilités.",
        	en : "Disappointed, you’re forced to consider the others options.",
        	eo : "Sen iluzigita, vi estas devigita esplori la aliajn eblecojn."
        },

        /**
        * Echec critique de l'escalade
        **/
        "bandits-porte-escalade-critique-texte-1" : {
        	fr : "Vous parvenez presque en haut du muret de bois, mais une fois au sommet, c'est le drame&hellip;",
        	en : "You reach almost the top of the wooden wall, but once at the highest point, it’s the drama&hellip;",
        	eo : "Vi preskaŭ atingas la supron de la muro el ligno sed, unufoje supre, tio estas la dramo&hellip;"
        },
        "bandits-porte-escalade-critique-texte-2" : {
        	fr : "Votre pied dérape d'un coup. Vos mains moites ne parviennent pas à saisir la prise à temps et bam&nbsp;!",
        	en : "Your foot slide suddenly. Your clammy hands don’t succeed to grasp the grip in time and bang!",
        	eo : "Via piedo subite misglitas. Viaj ŝvitaj manoj ne sukcesas ekteni la muron ĝustatempe kaj bum!"
        },
        "bandits-porte-escalade-critique-texte-3" : {
        	fr : "Vous finissez sur le cul au bas de la palissade&hellip;",
        	en : "You fall down on your ass at the bottom of the wall&hellip;",
        	eo : "Vi finas sur la pugo, ĉe la malsupro de la palisaro&hellip;"
        },
        "bandits-porte-escalade-critique-texte-4" : {
        	fr : "Une chose est sûre : le sport, c'est pas votre fort&hellip;",
        	en : "One thing is certain : sport is not your thing&hellip;",
        	eo : "Nun, tio estas certa : la sporto ne estas por vi&hellip;"
        },
        //bandits-porte-escalade-echec-texte-3
	};

	return {
        name : function() {
            return "Suite Bandits Porte.js";
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