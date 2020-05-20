'use strict';
define([], function(){
	var data = {
        "necroGSFight-texte-1" : {
            fr : "Vous pénétrez dans une très grande crypte.",
            en : "You enter a very large crypt."
        },
        "necroGSFight-texte-2" : {
            fr : "À votre arrivée, le gardien des lieux, une <span key='grosseGoule'>grosse goule</span>, se dirige vers vous.",
            en : "On your arrival, the caretaker of the place, a <span key='grosseGoule'>big ghoul</span> is heading towards you."
        },
        "necroGSFight-texte-3" : {
            fr : "Sur le côté, deux <span key='squelette'>squelettes</span> sortent lentement de leurs cercueils&hellip;",
            en : "On the side, two <span key='squelette'>skeletons</span> slowly come out of their coffins&hellip;"
        },

        "necroGSFight2-texte-1" : {
            fr : "Vous vous relevez péniblement après ce difficile combat.",
            en : "You stand up painfully after this difficult fight."
        },
        "necroGSFight2-texte-2" : {
            fr : "Encore sous le choc, vous observez la pièce autour de vous&hellip;",
            en : "Still in shock, you watch the room around you&hellip;"
        },

        "necroGSRoiFight-texte-1" : {
            fr : "Le <span key='roiAraignee'>roi araignée</span> est couché au centre, inconscient, une <span key='grosseGoule'>grosse goule</span> morte dans la gueule&hellip;",
            en : "The <span key='roiAraignee'>spider king</span> lies unconscious in the middle with a <span key='grosseGoule'>big dead ghoul</span> in his mouth&hellip;"
        },

        "necroGSRoiFight2-texte-1" : {
            fr : "Vous vous relevez péniblement après ce difficile combat et vous dirigez vers votre ami.",
            en : "You stand up painfully after this difficult fight and you are heading towards your friend."
        },
        "necroGSRoiFight2-texte-2" : {
            fr : "Le roi, à l'agonie, vous exprime son dernier souhait :",
            en : "The king, in agony, expresses his last wish to you:"
        },
        "necroGSRoiFight2-texte-3" : {
            fr : "&laquo;&nbsp;Merci, noble aventurier. Je me meurs&hellip; Mais vous, vous pouvez encore sauver votre espèce.",
            en : "&laquo;&nbsp;Thank you, noble adventurer. I'm dying&hellip; But you can still save your species."
        },
        "necroGSRoiFight2-texte-4" : {
            fr : "Vengez-nous, combattez pour l'araignée&nbsp;!&nbsp;&raquo;",
            en : "Revenge us, fight for the spider&nbsp;!&nbsp;&raquo;"
        },
        "necroGSRoiFight2-texte-5" : {
            fr : "Avant de mourir, le roi s'arrache un <span key='crocRoi'>croc</span> et le jette à vos pieds.",
            en : "Before he dies, the king tears off a <span key='crocRoi'>fang</span> and throws it at your feet."
        },

        "necroGSFight3Oui-texte-1" : {
            fr : "Vous prenez l'arme en souvenir de votre ami.",
            en : "You take the fang as a souvenir of your friend."
        },
        "necroGSFight3Oui-texte-2" : {
            fr : "Elle fera certainement une alliée précieuse&nbsp;!",
            en : "It will certainly make a valuable ally!"
        },

        "necroGSFight3Non-texte-1" : {
            fr : "Vous laissez l'arme devant votre ami.",
            en : "You leave the fang in front of your friend."
        },
        "necroGSFight3Non-texte-2" : {
            fr : "Espérant qu'elle l'accompagne dans l'au-delà.",
            en : "Hoping that she will accompany him to the afterlife."
        },

        "necroGS-texte-1" : {
            fr : "Vous vous trouvez dans une gigantesque salle aux allures de crypte.",
            en : "You are in a gigantic room looking like a crypt."
        },
        "necroGS-texte-2" : {
            fr : "Quelques cercueils sont éparpillés un peu partout.",
            en : "Some coffins are scattered all over the place."
        },
        "necroGS-texte-3" : {
            fr : "Vous remarquez trois portes : à gauche, en face et à droite&hellip;",
            en : "You notice three doors: on the left, in front of you and on the right&hellip;"
        },

        "necroGSFouilleCercueil-texte-1" : {
            fr : "Avec dégoût, vous fouillez les cercueils.",
            en : "Disgustingly, you search the coffins."
        },
        "necroGSFouilleCercueil-texte-2" : {
            fr : "Les deux premiers sont vides, mais dans le troisiéme,",
            en : "The first two are empty, but in the third,"
        },
        "necroGSFouilleCercueil-texte-3" : {
            fr : "vous apercevez une lueur jaune sous un tas d'os&hellip;",
            en : "you see a yellow glow under a pile of bones&hellip;"
        },

        "necroGSFouilleCercueil2-texte-1" : {
            fr : "Vous saisissez un authentique <span key='elixir'>élixir</span>&nbsp;!",
            en : "You grasp an authentic <span key='elixir'>elixir</span>!"
        },
        "necroGSFouilleCercueil2-texte-2" : {
            fr : "Malheureusement, vous n'êtes pas le seul sur le coup&hellip;",
            en : "Unfortunately, you're not the only one the case&hellip;"
        },
        "necroGSFouilleCercueil2-texte-3" : {
            fr : "Une main osseuse vous tient fermement le poignet.",
            en : "A bony hand holds your wrist firmly."
        },
        "necroGSFouilleCercueil2-texte-4" : {
            fr : "Vous vous écartez brusquement, emportant la main avec vous,",
            en : "You suddenly step aside, taking the hand with you,"
        },
        "necroGSFouilleCercueil2-texte-5" : {
            fr : "pendant qu'un <span key='squelette'>squelette manchot</span> sort difficilement de son cercueil&hellip;",
            en : "while a <span key='squelette'>one-armed skeleton</span> hardly comes out of its coffin&hellip;"
        },

        "necroGSFouilleCercueil3-texte-1" : {
            fr : "Vous vous débarassez facilement de votre adversaire.",
            en : "You easily kill off your opponent."
        },
        "necroGSFouilleCercueil3-texte-2" : {
            fr : "Il est temps de continuer votre aventure&nbsp;!",
            en : "It's time to continue your adventure!"
        },

        "necroGSFouilleSalle-texte-1" : {
            fr : "Il s'agit d'une grande salle ressemblant à s'y méprendre à une crypte.",
            en : "It is a large room that look like a crypt."
        },
        "necroGSFouilleSalle-texte-2" : {
            fr : "Les murs sont suintants d'humidité et un froid intense la parcourt.",
            en : "The walls are oozing with humidity and an intense cold runs through it."
        },
        "necroGSFouilleSalle-texte-3" : {
            fr : "Deux torches se trouvent accrochées sur le mur du fond&hellip;",
            en : "Two torches are hung on the back wall&hellip;"
        },

        "necroGSTorcheG-texte-1" : {
            fr : "Vous vous approchez de la torche sur le mur de gauche.",
            en : "You approach the torch on the left wall."
        },
        "necroGSTorcheG-texte-2" : {
            fr : "Celle-ci est éteinte.",
            en : "This one is off."
        },
        "necroGSTorcheG-texte-3" : {
            fr : "Vous ne trouvez pas qu'il fait sombre&nbsp;? Pourquoi ne pas l'allumer&nbsp;?",
            en : "Don't you think it's dark? Why don't you light it?"
        },

        "necroGSTorcheD-texte-1" : {
            fr : "Vous vous approchez de la torche sur le mur de droite.",
            en : "You are approaching the torch on the right wall."
        },
        "necroGSTorcheD-texte-2" : {
            fr : "Vous ne trouvez pas qu'il fait froid&nbsp;? Pourquoi ne pas se réchauffer un peu&nbsp;?",
            en : "Don't you think it's cold? Why don't we just warm up a little?"
        },

        "necroGSTorcheOK-texte-1" : {
            fr : "Vous allumez consciencieusement la torche, en prenant soin de ne pas vous brûler.",
            en : "You light the torch conscientiously, taking care not to burn yourself."
        },
        "necroGSTorcheOK-texte-2" : {
            fr : "Soudain, vous entendez un système d'engrenages s'enclencher&hellip;",
            en : "Suddenly, you hear a gear system engage&hellip;"
        },
        "necroGSTorcheOK-texte-3" : {
            fr : "Il semblerait qu'une porte se soit ouverte quelque part.",
            en : "Looks like a door opened somewhere."
        },

        "necroGSTorcheKO-texte-1" : {
            fr : "Vous lancez votre plus belle <span key='bouleFeu'>boule de feu</span>&nbsp;!",
            en : "You throw your most beautiful <span key='bouleFeu'>fireball</span>!"
        },
        "necroGSTorcheKO-texte-2" : {
            fr : "Celle-ci éclate violemment sur le mur et explose la torche.",
            en : "This one bursts violently on the wall and explodes the torch."
        },
        "necroGSTorcheKO-texte-3" : {
            fr : "Il ne reste plus qu'une vieille tige en souvenir.",
            en : "There's only one old stem left to remember."
        },
        "necroGSTorcheKO-texte-4" : {
            fr : "R.I.P la torche&hellip;",
            en : "R.I.P torch&hellip;"
        },

        "necroGSTorcheAllume-texte-1" : {
            fr : "La torche brille de mille feux&nbsp;!",
            en : "The torch shines brightly!"
        },
        "necroGSTorcheAllume-texte-2" : {
            fr : "Ne la regardez pas trop longtemps, ça pourrait brûler&nbsp;!",
            en : "Don't look at her too long, it could burn!"
        },

        "necroGSTorcheExplose-texte-1" : {
            fr : "Une vieille tige carbonisée se dresse fièrement sur le mur.",
            en : "An old charred stem stands proudly on the wall."
        },
        "necroGSTorcheExplose-texte-2" : {
            fr : "Elle n'avait pourtant rien fait de mal&hellip;",
            en : "She had done nothing wrong&hellip;"
        },

        "necroGSS2-texte-1" : {
            fr : "Vous faites face à une petite porte fermée à clef.",
            en : "You're facing a small locked door."
        },
        "necroGSS2-texte-2" : {
            fr : "Elle semble très résistante&hellip;",
            en : "It seems very resistant&hellip;"
        },
        "necroGSS2-texte-3" : {
            fr : "En tendant l'oreille, vous entendez des cris,",
            en : "When you hold your ear out, you hear screams,"
        },
        "necroGSS2-texte-4" : {
            fr : "comme si une personne essayait de se débattre.",
            en : "as if someone is trying to fight."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});