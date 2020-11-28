'use strict';
define([], function(){
	var data = {
        "ville-porte-start-texte-1" : {
        	fr : "Encouragé par votre succès encore récent, vous vous rendez à la ville la plus proche.",
        	en : "Encouraged by your recent success, you go to the nearest town.",
        	eo : ""
        },
        "ville-porte-start-texte-2" : {
        	fr : "Les gens ont toujours besoin d'un héros, et les héros ont toujours besoin d'argent&nbsp;!",
        	en : "Peoples always need heroes, and heroes always need gold!",
        	eo : ""
        },
        "ville-porte-start-texte-3" : {
        	fr : "Après quelques heures de marche, vous vous retrouvez enfin devant les lourdes portes de pierres.",
        	en : "After a few hours of walking, you finally arrive in front of the heavy stone doors.",
        	eo : ""
        },
        "ville-porte-start-texte-4" : {
        	fr : "Un garde vous fait face, l'air menaçant&hellip;",
        	en : "A guard is facing you, with a menacing air&hellip;",
        	eo : ""
        },

        /**
        * Demander à entrer
        **/
        "ville-porte-demander-texte-1" : {
        	fr : "Vous vous annoncez comme étant un héros de passage,",
        	en : "You announce yourself as a passing through hero,",
        	eo : ""
        },
        "ville-porte-demander-texte-2" : {
        	fr : "offrant volontiers vos services pour peu que la récompense soit suffisante.",
        	en : "gladly offering your services as long as the reward is sufficient.",
        	eo : ""
        },
        "ville-porte-demander-texte-3" : {
        	fr : "Le garde, plus calme, vous jauge puis vous répond&nbsp;:",
        	en : "The guard, calmer, looks at you and answers:",
        	eo : ""
        },
        "ville-porte-demander-texte-4" : {
        	fr : "&laquo;&nbsp;Impossible d'entrer, la ville est confinée sous la haute protection de Sa Seigneurie Niers&nbsp;!",
        	en : "&laquo;&nbsp;Impossible to enter, the city is confined under the high protection of His Lord Niers!",
        	eo : ""
        },
        "ville-porte-demander-texte-5" : {
        	fr : "Toute personne voulant y entrer ou en sortir doit posséder une autorisation officielle.&nbsp;&raquo;",
        	en : "Anyone who wants to enter or leave the city needs an official authorization.&nbsp;&raquo;",
        	eo : ""
        },

        "ville-porte-demander-2-texte-1" : {
        	fr : "&laquo;&nbsp;Les bandits&hellip; Ils sèment le chaos dans le coin.",
        	en : "&laquo;&nbsp;The bandits&hellip; They spread the terror in the area.",
        	eo : ""
        },
        "ville-porte-demander-2-texte-2" : {
        	fr : "Crois-moi que, s'ils n'avaient pas été si nombreux, je leur aurais moi-même réglé leur compte&nbsp;!&nbsp;&raquo;",
        	en : "Believe me, if they hadn’t been so many of them, I would have killed them myself!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-porte-demander-2-texte-3" : {
        	fr : "L'homme vous toise de nouveau, il semble réfléchir un peu puis ajoute&nbsp;:",
        	en : "The man looks at you again, he seems to think a little then adds:",
        	eo : ""
        },
        "ville-porte-demander-2-texte-4" : {
        	fr : "&laquo;&nbsp;Eh mais, si t'es bien un héros, tu pourrais nous en débarrasser, non&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Hey but, if you’re really a hero, you could rid ourselves of them, no?&nbsp;&raquo;",
        	eo : ""
        },

        "ville-porte-demander-3-texte-1" : {
        	fr : "Il réfléchit longuement et annonce&nbsp;:",
        	en : "He thinks for a long and announces:",
        	eo : ""
        },
        "ville-porte-demander-3-texte-2" : {
        	fr : "&laquo;&nbsp;Eh bien, ma rente n'est pas très élevée mais&hellip;",
        	en : "&laquo;&nbsp;Well, my income is not really high but&hellip;",
        	eo : ""
        },
        "ville-porte-demander-3-texte-3" : {
        	fr : "Si tu nous débarrasses de ces avortons, mes collègues et moi nous fermerons les yeux.",
        	en : "If you rid ourselves of this little runt, my colleagues and I will close our eyes.",
        	eo : ""
        },
        "ville-porte-demander-3-texte-4" : {
        	fr : "Tu auras accès à toute la ville, parole de garde&nbsp;!&nbsp;&raquo;",
        	en : "You’ll have access to the whole city, word of guard!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-porte-demander-4-texte-1" : {
        	fr : "&laquo;&nbsp;Bien, ça me paraît être un bon deal&nbsp;!",
        	en : "&laquo;&nbsp;Well, that sounds like a good deal for me!",
        	eo : ""
        },
        "ville-porte-demander-4-texte-2" : {
        	fr : "Pour prouver ta réussite, apporte-moi <span key='anneau-bandit'>l'anneau</span> que leur chef porte à son oreille.",
        	en : "To prove your success, bring me <span key='anneau-bandit'>the ring</span> that their chief wears at his ear.",
        	eo : ""
        },
        "ville-porte-demander-4-texte-3" : {
        	fr : "Je pense que cela devrait être plutôt évocateur&hellip;&nbsp;&raquo;",
        	en : "I think it should be quite suggestive&hellip;&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Refus de la mission du garde
        **/
        "ville-porte-demander-refus-texte-1" : {
        	fr : "Il a l'air déçu.",
        	en : "He seems disappointed.",
        	eo : ""
        },
        "ville-porte-demander-refus-texte-2" : {
        	fr : "&laquo;&nbsp;C'est bien dommage&hellip;",
        	en : "&laquo;&nbsp;It’s pretty too bad&hellip;",
        	eo : ""
        },
        "ville-porte-demander-refus-texte-3" : {
        	fr : "Trouve-toi une autre ville pour passer la nuit, j'ai assez bavassé avec toi.&nbsp;&raquo;",
        	en : "Find another city to rest this night, I've lost enough time with you.&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Attaquer le garde
        **/
        "ville-porte-attaquer-texte-1" : {
        	fr : "Voyant votre air menaçant, le garde réagit au quart de tour et sonne l'alarme.",
        	en : "Seeing your menacing air, the guard reacts very quickly and sounds the alarm.",
        	eo : ""
        },
        "ville-porte-attaquer-texte-2" : {
        	fr : "Un, puis deux, c'est maintenant quatre gardes bien armés qui se trouvent face à vous&nbsp;!",
        	en : "One, then two, there are now four well-armed guards in front of you!",
        	eo : ""
        },
        "ville-porte-attaquer-texte-3" : {
        	fr : "Bien&hellip; Une fois vaincu, plus personne ne devrait vous bloquer le passage après tout.",
        	en : "Well&hellip; Once they’ll have been defeated, no one shouldn’t block the way anymore after all.",
        	eo : ""
        },

        "ville-porte-attaquer-2-texte-1" : {
        	fr : "Vos adversaires s’écroulent devant vous.",
        	en : "Your opponents collapse in front of you.",
        	eo : ""
        },
        "ville-porte-attaquer-2-texte-2" : {
        	fr : "Qui sont-ils pour vous donner des ordres&nbsp;?",
        	en : "Who are they to give you orders?",
        	eo : ""
        },
        "ville-porte-attaquer-2-texte-3" : {
        	fr : "Le chemin est maintenant libéré de tout gêneur. Vous pouvez passer.",
        	en : "The path is now free of any nuisance. You can pass.",
        	eo : ""
        },

        /**
        * Insulter le garde
        **/
        "ville-porte-insulter-texte-1" : {
        	fr : "Le garde, d'abord menaçant, est maintenant hors de contrôle.",
        	en : "The guard, at first menacing, is now out of control.",
        	eo : ""
        },
        "ville-porte-insulter-texte-2" : {
        	fr : "&laquo;&nbsp;Tu crois que c'est évident de travailler dans la fonction publique&nbsp;?!",
        	en : "&laquo;&nbsp;Do you think that it’s easy to work in the public fonction?!",
        	eo : ""
        },
        "ville-porte-insulter-texte-3" : {
        	fr : "Je vais t'apprendre à respecter mon travail, avorton&nbsp;!&nbsp;&raquo;",
        	en : "I’m going to teach you how to respect my work, little runt!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-porte-insulter-2-texte-1" : {
        	fr : "Votre adversaire s’écroule devant vous, libérant le passage de tout gêneur.",
        	en : "Your opponent collapses in front of you, freeing the path of any nuisance.",
        	eo : ""
        },
        "ville-porte-insulter-2-texte-2" : {
        	fr : "Vous pouvez passer.",
        	en : "You can pass.",
        	eo : ""
        },

        "ville-porte-insulter-3-texte-1" : {
        	fr : "Vous franchissez à peine la porte que deux autres gardes vous barrent le chemin.",
        	en : "Once you pass the door, two guards block your way.",
        	eo : ""
        },
        "ville-porte-insulter-3-texte-2" : {
        	fr : "&laquo;&nbsp;Hep hep hep, on ne passe pas&nbsp;!",
        	en : "Hey hey hey, we don’t pass!",
        	eo : ""
        },
        "ville-porte-insulter-3-texte-3" : {
        	fr : "Tu crois que tu peux te débarrasser de la garde de la ville aussi facilement&nbsp;?&nbsp;&raquo;",
        	en : "You think that you can get rid of the city guards so easily?",
        	eo : ""
        },

        "ville-porte-insulter-4-texte-1" : {
        	fr : "Vos adversaires s'écroulent devant vous.",
        	en : "Your opponents collapse in front of you.",
        	eo : ""
        },
        "ville-porte-insulter-4-texte-2" : {
        	fr : "Ils l'avaient bien cherché&hellip;",
        	en : "They’ve deserved it&hellip;",
        	eo : ""
        },

        /**
        * Contournement
        **/
        "ville-porte-contourner-reussite-texte-1" : {
        	fr : "Vous cherchez longuement autour du gros mur, sans grand espoir, quand&hellip;",
        	en : "You search for a long time around the large wall, without much hope, when&hellip;",
        	eo : ""
        },
        "ville-porte-contourner-reussite-texte-2" : {
        	fr : "Enfin, la chance vous sourit&nbsp;! Vous découvrez une légère faille, juste l'espace de s'y glisser&nbsp;!",
        	en : "Finally, the luck is with you! You discover a little crack, just the space to slip in!",
        	eo : ""
        },
        "ville-porte-contourner-reussite-texte-3" : {
        	fr : "Parfait&nbsp;! Personne ne vous remarquera ici&nbsp;!",
        	en : "Perfect! No one will notice you here!",
        	eo : ""
        },
        "ville-porte-contourner-echec-texte-1" : {
        	fr : "Vous marchez de longues heures pour, au final, vous retrouver au même point.",
        	en : "You walk long hours to, finally, get back to the same point.",
        	eo : ""
        },
        "ville-porte-contourner-echec-texte-2" : {
        	fr : "À part de légères failles, beaucoup trop petite pour s'y glisser, vous ne trouvez rien.",
        	en : "Except some slight crack, pretty too small to slip in, you find nothing.",
        	eo : ""
        },
        "ville-porte-contourner-echec-texte-3" : {
        	fr : "Ce mur est infranchissable. La porte semble être le seul moyen de passer&hellip;",
        	en : "This wall is impassable. The door seems to be the only way to pass&hellip;",
        	eo : ""
        },
        "ville-porte-contourner-echec-texte-4" : {
        	fr : "Résolu, vous vous dirigez de nouveau vers le garde.",
        	en : "Determined, you head back to the guard.",
        	eo : ""
        },

        /**
        * Retour apres la quête des bandits
        **/
        "ville-porte-retour-texte-1" : {
        	fr : "Après vous être perdu une ou deux fois, vous voici de retour devant les portes de la ville.",
        	en : "After getting lost once or twice, here you are back in front of the city doors.",
        	eo : ""
        },
        "ville-porte-retour-texte-2" : {
        	fr : "Le garde, toujours menaçant, ne vous lâche pas des yeux&hellip;",
        	en : "The guard, still menacing, doesn’t let you out of his sight&hellip;",
        	eo : ""
        },

        "ville-porte-retour-2-texte-1" : {
        	fr : "La méfiance de l'homme disparaît d'un coup.",
        	en : "The man’s suspicion disappears suddenly.",
        	eo : ""
        },
        "ville-porte-retour-2-texte-2" : {
        	fr : "&laquo;&nbsp;Tu as réussi&nbsp;! Nous sommes enfin débarrassés des bandits&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;You did it! We are finally rid of the bandits!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-porte-retour-2-texte-3" : {
        	fr : "Il contemple le trophée, le visage émerveillé, mais se reprend soudain, l'air embêté.",
        	en : "He gazes at the trophy, amazed, but then suddenly regains his composure, looking annoyed.",
        	eo : ""
        },
        "ville-porte-retour-2-texte-4" : {
        	fr : "&laquo;&nbsp;Oh non&hellip; Il faut que je fasse un rapport à Son Seigneur Niers, moi, maintenant&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Oh no&hellip; I have to make a report to His Lord Niers, me, now&hellip;&nbsp;&raquo;",
        	eo : ""
        },


        "ville-porte-retour-3-texte-1" : {
        	fr : "L'homme semble légèrement perdu dans ses pensées.",
        	en : "The man seems to be lost in his thoughts.",
        	eo : ""
        },
        "ville-porte-retour-3-texte-2" : {
        	fr : "&laquo;&nbsp;Oh oui, bien sûr&nbsp;! Tiens, prends cette lettre, elle porte ma signature.",
        	en : "&laquo;&nbsp;Oh yes, of course! Here, take this letter, it has my signature.",
        	eo : ""
        },
        "ville-porte-retour-3-texte-3" : {
        	fr : "Si l'un des gardes de la ville te manque de respect, montre-lui simplement ceci et dis-lui que tu es envoyé par Sobac. Il devrait alors te laisser tranquille.&nbsp;&raquo;",
        	en : "If one of the city guards doesn’t respect you, just show him this and tell him that you’re sent by Sobac. Then, he should leave you alone.&nbsp;&raquo;",
        	eo : ""
        },
        "ville-porte-retour-3-texte-4" : {
        	fr : "Le garde ouvre alors la porte et vous laisse passer.",
        	en : "Then, the guard open the door and let you in.",
        	eo : ""
        },
        "ville-porte-retour-3-texte-5" : {
        	fr : "&laquo;&nbsp;Bonne visite à toi, aventurier&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Good visit to you, adventurer!&nbsp;&raquo;",
        	eo : ""
        }
	};

	return {
        name : function() {
            return "Suite Ville Porte.js";
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