'use strict';
define([], function(){
	var data = {
        "necroGSFight-texte-1" : {
            fr : "Vous p&eacute;n&eacute;trez dans une tr&egrave;s grande crypte.",
            en : "You enter a very large crypt."
        },
        "necroGSFight-texte-2" : {
            fr : "&Agrave; votre arriv&eacute;e, le gardien des lieux, une <span key='grosseGoule'>grosse goule</span> se dirige vers vous.",
            en : "On your arrival, the caretaker of the place, a <span key='grosseGoule'>big ghoul</span> is heading towards you."
        },
        "necroGSFight-texte-3" : {
            fr : "Sur le c&ocirc;t&eacute;, deux <span key='squelette'>squelettes</span> sortent lentement de leurs cercueils&hellip;",
            en : "On the side, two <span key='squelette'>skeletons</span> slowly come out of their coffins&hellip;"
        },

        "necroGSFight2-texte-1" : {
            fr : "Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat.",
            en : "You stand up painfully after this difficult fight."
        },
        "necroGSFight2-texte-2" : {
            fr : "Encore sous le choc, vous observez la pi&egrave;ce autour de vous&hellip;",
            en : "Still in shock, you watch the room around you&hellip;"
        },

        "necroGSRoiFight-texte-1" : {
            fr : "Le <span key='roiAraignee'>roi araign&eacute;e</span> est couch&eacute; au centre, inconscient, une <span key='grosseGoule'>grosse goule</span> morte dans la gueule&hellip;",
            en : "The <span key='roiAraignee'>spider king</span> lies unconscious in the middle with a <span key='grosseGoule'>big dead ghoul</span> in his mouth&hellip;"
        },

        "necroGSRoiFight2-texte-1" : {
            fr : "Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat et vous dirigez vers votre ami.",
            en : "You stand up painfully after this difficult fight and you are heading towards your friend."
        },
        "necroGSRoiFight2-texte-2" : {
            fr : "Le roi, &agrave; l&rsquo;agonie, vous exprime son dernier souhait :",
            en : "The king, in agony, expresses his last wish to you:"
        },
        "necroGSRoiFight2-texte-3" : {
            fr : "&laquo; Merci, noble aventurier. Je me meurs&hellip; Mais vous, vous pouvez encore sauver votre esp&egrave;ce.",
            en : "&laquo; Thank you, noble adventurer. I'm dying&hellip; But you can still save your species."
        },
        "necroGSRoiFight2-texte-4" : {
            fr : "Vengez-nous, combattez pour l&rsquo;araign&eacute;e ! &raquo;",
            en : "Revenge us, fight for the spider ! &raquo;"
        },
        "necroGSRoiFight2-texte-5" : {
            fr : "Avant de mourir, le roi s&rsquo;arrache un <span key='crocRoi'>croc</span> et le jette &agrave; vos pieds.",
            en : "Before he dies, the king tears off a <span key='crocRoi'>fang</span> and throws it at your feet."
        },

        "prendre-croc" : {
            fr : "Prendre le croc",
            en : "Take the fang"
        },
        "laisser-croc" : {
            fr : "Laisser le croc",
            en : "Leave the fang"
        },

        "necroGSFight3Oui-texte-1" : {
            fr : "Vous prenez l&rsquo;arme en souvenir de votre ami.",
            en : "You take the fang as a souvenir of your friend."
        },
        "necroGSFight3Oui-texte-2" : {
            fr : "Elle fera certainement une alli&eacute;e pr&eacute;cieuse !",
            en : "It will certainly make a valuable ally!"
        },

        "necroGSFight3Non-texte-1" : {
            fr : "Vous laissez l&rsquo;arme devant votre ami.",
            en : "You leave the fang in front of your friend."
        },
        "necroGSFight3Non-texte-2" : {
            fr : "Esp&eacute;rant qu&rsquo;elle l&rsquo;accompagne dans l&rsquo;au-del&agrave;.",
            en : "Hoping that she will accompany him to the afterlife."
        },

        "necroGS-texte-1" : {
            fr : "Vous vous trouvez dans une gigantesque salle aux allures de crypte.",
            en : "You are in a gigantic room looking like a crypt."
        },
        "necroGS-texte-2" : {
            fr : "Quelques cercueils sont &eacute;parpill&eacute;s un peu partout.",
            en : "Some coffins are scattered all over the place."
        },
        "necroGS-texte-3" : {
            fr : "Vous remarquez trois portes : &agrave; gauche, en face et &agrave; droite&hellip;",
            en : "You notice three doors: on the left, in front of you and on the right&hellip;"
        },

        "fouiller-cercueil" : {
            fr : "Fouiller les cercueils",
            en : "Searching coffins"
        },

        "necroGSFouilleCercueil-texte-1" : {
            fr : "Avec d&eacute;go&ucirc;t, vous fouillez les cercueils.",
            en : "Disgustingly, you search the coffins."
        },
        "necroGSFouilleCercueil-texte-2" : {
            fr : "Les deux premiers sont vides, mais dans le troisi&eacute;me,",
            en : "The first two are empty, but in the third,"
        },
        "necroGSFouilleCercueil-texte-3" : {
            fr : "vous apercevez une lueur jaune sous un tas d&rsquo;os&hellip;",
            en : "you see a yellow glow under a pile of bones&hellip;"
        },

        "necroGSFouilleCercueil2-texte-1" : {
            fr : "Vous saisissez un authentique <span key='elixir'>&eacute;lixir</span> !",
            en : "You grasp an authentic <span key='elixir'>elixir</span>!"
        },
        "necroGSFouilleCercueil2-texte-2" : {
            fr : "Malheureusement, vous n&rsquo;&ecirc;tes pas le seul sur le coup&hellip;",
            en : "Unfortunately, you're not the only one the case&hellip;"
        },
        "necroGSFouilleCercueil2-texte-3" : {
            fr : "Une main osseuse vous tient fermement le poignet.",
            en : "A bony hand holds your wrist firmly."
        },
        "necroGSFouilleCercueil2-texte-4" : {
            fr : "Vous vous &eacute;cartez brusquement, emportant la main avec vous,",
            en : "You suddenly step aside, taking the hand with you,"
        },
        "necroGSFouilleCercueil2-texte-5" : {
            fr : "pendant qu&rsquo;un <span key='squelette'>squelette manchot</span> sort difficilement de son cercueil&hellip;",
            en : "while a <span key='squelette'>one-armed skeleton</span> hardly comes out of its coffin&hellip;"
        },

        "necroGSFouilleCercueil3-texte-1" : {
            fr : "Vous vous d&eacute;barassez facilement de votre adversaire.",
            en : "You easily kill off your opponent."
        },
        "necroGSFouilleCercueil3-texte-2" : {
            fr : "Il est temps de continuer votre aventure !",
            en : "It's time to continue your adventure!"
        },

        "necroGSFouilleSalle-texte-1" : {
            fr : "Il s&rsquo;agit d&rsquo;une grande salle ressemblant &agrave; s&rsquo;y m&eacute;prendre &agrave; une crypte.",
            en : "It is a large room that look like a crypt."
        },
        "necroGSFouilleSalle-texte-2" : {
            fr : "Les murs sont suintants d&rsquo;humidit&eacute; et un froid intense la parcourt.",
            en : "The walls are oozing with humidity and an intense cold runs through it."
        },
        "necroGSFouilleSalle-texte-3" : {
            fr : "Deux torches se trouvent accroch&eacute;es sur le mur du fond&hellip;",
            en : "Two torches are hung on the back wall&hellip;"
        },

        "voir-torche-gauche" : {
            fr : "Voir la torche &agrave; gauche",
            en : "See the torch on the left"
        },
        "voir-torche-droite" : {
            fr : "Voir la torche &agrave; droite",
            en : "See the torch on the right"
        },

        "necroGSTorcheG-texte-1" : {
            fr : "Vous vous approchez de la torche sur le mur de gauche.",
            en : "You approach the torch on the left wall."
        },
        "necroGSTorcheG-texte-2" : {
            fr : "Celle-ci est &eacute;teinte.",
            en : "This one is off."
        },
        "necroGSTorcheG-texte-3" : {
            fr : "Vous ne trouvez pas qu&rsquo;il fait sombre ? Pourquoi ne pas l&rsquo;allumer ?",
            en : "Don't you think it's dark? Why don't you light it?"
        },

        "utiliser-bougie" : {
            fr : "Utiliser la bougie",
            en : "Use the candle"
        },

        "necroGSTorcheD-texte-1" : {
            fr : "Vous vous approchez de la torche sur le mur de droite.",
            en : "You are approaching the torch on the right wall."
        },
        "necroGSTorcheD-texte-2" : {
            fr : "Vous ne trouvez pas qu&rsquo;il fait froid ? Pourquoi ne pas se rechauffer un peu ?",
            en : "Don't you think it's cold? Why don't we just warm up a little?"
        },

        "necroGSTorcheOK-texte-1" : {
            fr : "Vous allumez consciencieusement la torche en prenant soin de ne pas vous br&ucirc;ler.",
            en : "You light the torch conscientiously, taking care not to burn yourself."
        },
        "necroGSTorcheOK-texte-2" : {
            fr : "Soudain, vous entendez un syst&egrave;me d&rsquo;engrenages s&rsquo;enclencher&hellip;",
            en : "Suddenly, you hear a gear system engage&hellip;"
        },
        "necroGSTorcheOK-texte-3" : {
            fr : "Il semblerait qu&rsquo;une porte se soit ouverte quelque part.",
            en : "Looks like a door opened somewhere."
        },

        "necroGSTorcheKO-texte-1" : {
            fr : "Vous lancez votre plus belle <span key='bouleFeu'>boule de feu</span> !",
            en : "You throw your most beautiful <span key='bouleFeu'>fireball</span>!"
        },
        "necroGSTorcheKO-texte-2" : {
            fr : "Celle-ci &eacute;clate violemment sur le mur et explose la torche.",
            en : "This one bursts violently on the wall and explodes the torch."
        },
        "necroGSTorcheKO-texte-3" : {
            fr : "Il ne reste plus qu&rsquo;une vieille tige en souvenir.",
            en : "There's only one old stem left to remember."
        },
        "necroGSTorcheKO-texte-4" : {
            fr : "R.I.P la torche&hellip;",
            en : "R.I.P torch&hellip;"
        },

        "necroGSTorcheAllume-texte-1" : {
            fr : "La torche brille de mille feux !",
            en : "The torch shines brightly!"
        },
        "necroGSTorcheAllume-texte-2" : {
            fr : "Ne la regardez pas trop longtemps, &ccedil;a pourrait br&ucirc;ler !",
            en : "Don't look at her too long, it could burn!"
        },

        "necroGSTorcheExplose-texte-1" : {
            fr : "Une vieille tige carbonis&eacute;e se dresse fi&egrave;rement sur le mur.",
            en : "An old charred stem stands proudly on the wall."
        },
        "necroGSTorcheExplose-texte-2" : {
            fr : "Elle n&rsquo;avait pourtant rien fait de mal&hellip;",
            en : "She had done nothing wrong&hellip;"
        },

        "necroGSS2-texte-1" : {
            fr : "Vous faites face &agrave; une petite porte ferm&eacute;e &agrave; clef.",
            en : "You're facing a small locked door."
        },
        "necroGSS2-texte-2" : {
            fr : "Elle semble tr&egrave;s r&eacute;sistante&hellip;",
            en : "It seems very resistant&hellip;"
        },
        "necroGSS2-texte-3" : {
            fr : "En tendant l&rsquo;oreille, vous entendez des cris &agrave; l&rsquo;int&eacute;rieur,",
            en : "When you hold your ear out, you hear screams inside,"
        },
        "necroGSS2-texte-4" : {
            fr : "comme si une personne essayait de se d&eacute;battre.",
            en : "as if someone is trying to fight."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});