'use strict';
define([], function(){
	var data = {
        "ville-porte-start-texte-1" : {
            fr : "Encouragé par votre succès encore récent, vous vous rendez à la ville la plus proche.",
            en : "-"
        },
        "ville-porte-start-texte-2" : {
            fr : "Les gens ont toujours besoin d'un héros, et les héros ont toujours besoin d'argent&nbsp;!",
            en : "-"
        },
        "ville-porte-start-texte-3" : {
            fr : "Après quelques heures de marche, vous vous retrouvez enfin devant les lourdes portes de pierres.",
            en : "-"
        },
        "ville-porte-start-texte-4" : {
            fr : "Un garde vous fait face, l'air menaçant&hellip;",
            en : "-"
        },

        /**
        * Demander à entrer
        **/
        "ville-porte-demander-texte-1" : {
            fr : "Vous vous annoncez comme étant un héros de passage,",
            en : "-"
        },
        "ville-porte-demander-texte-2" : {
            fr : "offrant volontiers vos services pour peu que la récompense soit suffisante.",
            en : "-"
        },
        "ville-porte-demander-texte-3" : {
            fr : "Le garde, plus calme, vous jauge puis vous répond :",
            en : "-"
        },
        "ville-porte-demander-texte-4" : {
            fr : "&laquo; Impossible d'entrer, la ville est confinée sous la haute protection de Sa Seigneurie Niers !",
            en : "-"
        },
        "ville-porte-demander-texte-5" : {
            fr : "Toute personne voulant y entrer ou en sortir doit posséder une autorisation officielle &raquo;",
            en : "-"
        },

        "ville-porte-demander-2-texte-1" : {
            fr : "&laquo; Les bandits... Ils sèment le chaos dans le coin.",
            en : "-"
        },
        "ville-porte-demander-2-texte-2" : {
            fr : "Crois-moi que, s'ils n'avaient pas été si nombreux, je leur aurais moi-même réglé leur compte ! &raquo;",
            en : "-"
        },
        "ville-porte-demander-2-texte-3" : {
            fr : "L'homme vous toise de nouveau, il semble réfléchir un peu puis ajoute :",
            en : "-"
        },
        "ville-porte-demander-2-texte-4" : {
            fr : "&laquo; Eh mais, si t'es bien un héros, tu pourrais nous en débarrasser, non ? &raquo;",
            en : "-"
        },

        "ville-porte-demander-3-texte-1" : {
            fr : "Il réfléchit longuement et annonce :",
            en : "-"
        },
        "ville-porte-demander-3-texte-2" : {
            fr : "&laquo; Eh bien, ma rente n'est pas très élevée mais...",
            en : "-"
        },
        "ville-porte-demander-3-texte-3" : {
            fr : "Si tu nous débarrasses de ces avortons, mes collègues et moi nous fermerons les yeux.",
            en : "-"
        },
        "ville-porte-demander-3-texte-4" : {
            fr : "Tu auras accès à toute la ville, parole de garde ! &raquo;",
            en : "-"
        },

        "ville-porte-demander-4-texte-1" : {
            fr : "&laquo; Bien, ça me paraît être un bon deal !",
            en : "-"
        },
        "ville-porte-demander-4-texte-2" : {
            fr : "Pour prouver ta réussite, apporte-moi <span key='anneau-bandit'>l'anneau</span> que leur chef porte à son oreille.",
            en : "-"
        },
        "ville-porte-demander-4-texte-3" : {
            fr : "Je pense que cela devrait être plutôt évocateur... &raquo;",
            en : "-"
        },

        /**
        * Refus de la mission du garde
        **/
        "ville-porte-demander-refus-texte-1" : {
            fr : "Il a l'air déçu.",
            en : "-"
        },
        "ville-porte-demander-refus-texte-2" : {
            fr : "&laquo; C'est bien dommage...",
            en : "-"
        },
        "ville-porte-demander-refus-texte-3" : {
            fr : "Trouve-toi une autre ville pour passer la nuit, j'ai assez bavassé avec toi. &raquo;",
            en : "-"
        },

        /**
        * Attaquer le garde
        **/
        "ville-porte-attaquer-texte-1" : {
            fr : "Voyant votre air menaçant, le garde réagit au quart de tour et sonne l'alarme.",
            en : "-"
        },
        "ville-porte-attaquer-texte-2" : {
            fr : "Un, puis deux, c'est maintenant quatre gardes bien armés qui se trouvent face à vous !",
            en : "-"
        },
        "ville-porte-attaquer-texte-3" : {
            fr : "Bien... Une fois vaincu, plus personne ne devrait vous bloquer le passage après tout.",
            en : "-"
        },

        "ville-porte-attaquer-2-texte-1" : {
            fr : "Vos adversaires s’écroulent devant vous.",
            en : "-"
        },
        "ville-porte-attaquer-2-texte-2" : {
            fr : "Qui sont-ils pour vous donner des ordres ?",
            en : "-"
        },
        "ville-porte-attaquer-2-texte-3" : {
            fr : "Le chemin est maintenant libéré de tout gêneur. Vous pouvez passer.",
            en : "-"
        },

        /**
        * Insulter le garde
        **/
        "ville-porte-insulter-texte-1" : {
            fr : "Le garde, d'abord menaçant, est maintenant hors de contrôle.",
            en : "-"
        },
        "ville-porte-insulter-texte-2" : {
            fr : "&laquo; Tu crois que c'est évident de travailler dans la fonction publique ?!",
            en : "-"
        },
        "ville-porte-insulter-texte-3" : {
            fr : "Je vais t'apprendre à respecter mon travail, avorton ! &raquo;",
            en : "-"
        },

        "ville-porte-insulter-2-texte-1" : {
            fr : "Votre adversaire s’écroule devant vous, libérant le passage de tout gêneur.",
            en : "-"
        },
        "ville-porte-insulter-2-texte-2" : {
            fr : "Vous pouvez passer.",
            en : "-"
        },

        "ville-porte-insulter-3-texte-1" : {
            fr : "Vous franchissez à peine la porte que deux autres gardes vous barrent le chemin.",
            en : "-"
        },
        "ville-porte-insulter-3-texte-2" : {
            fr : "&laquo; Hep hep hep, on ne passe pas !",
            en : "-"
        },
        "ville-porte-insulter-3-texte-3" : {
            fr : "Tu crois que tu peux te débarrasser de la garde de la ville aussi facilement ? &raquo;",
            en : "-"
        },

        "ville-porte-insulter-4-texte-1" : {
            fr : "Vos adversaires s'écroulent devant vous.",
            en : "-"
        },
        "ville-porte-insulter-4-texte-2" : {
            fr : "Ils l'avaient bien cherché...",
            en : "-"
        },

        /**
        * Contournement
        **/
        "ville-porte-contourner-reussite-texte-1" : {
            fr : "Vous cherchez longuement autour du gros mur, sans grand espoir, quand...",
            en : "-"
        },
        "ville-porte-contourner-reussite-texte-2" : {
            fr : "Enfin, la chance vous sourit ! Vous découvrez une légère faille, juste l'espace de s'y glisser !",
            en : "-"
        },
        "ville-porte-contourner-reussite-texte-3" : {
            fr : "Parfait ! Personne ne vous remarquera ici !",
            en : "-"
        },
        "ville-porte-contourner-echec-texte-1" : {
            fr : "Vous marchez de longues heures pour, au final, vous retrouver au même point.",
            en : "-"
        },
        "ville-porte-contourner-echec-texte-2" : {
            fr : "À part de légères failles, beaucoup trop petite pour s'y glisser, vous ne trouvez rien.",
            en : "-"
        },
        "ville-porte-contourner-echec-texte-3" : {
            fr : "Ce mur est infranchissable. La porte semble être le seul moyen de passer...",
            en : "-"
        },
        "ville-porte-contourner-echec-texte-4" : {
            fr : "Résolu, vous vous dirigez de nouveau vers le garde.",
            en : "-"
        },

        /**
        * Retour apres la quête des bandits
        **/
        "ville-porte-retour-texte-1" : {
            fr : "Après vous être perdu une ou deux fois, vous voici de retour devant les portes de la ville.",
            en : "-"
        },
        "ville-porte-retour-texte-2" : {
            fr : "Le garde, toujours menaçant, ne vous lâche pas des yeux...",
            en : "-"
        },

        "ville-porte-retour-2-texte-1" : {
            fr : "La méfiance de l'homme disparaît d'un coup.",
            en : "-"
        },
        "ville-porte-retour-2-texte-2" : {
            fr : "&laquo; Tu as réussi ! Nous sommes enfin débarrassés des bandits ! &raquo;",
            en : "-"
        },
        "ville-porte-retour-2-texte-3" : {
            fr : "Il contemple le trophée, le visage émerveillé, mais se reprend soudain, l'air embêté.",
            en : "-"
        },
        "ville-porte-retour-2-texte-4" : {
            fr : "&laquo; Oh non... Il faut que je fasse un rapport à Son Seigneur Niers, moi, maintenant... &raquo;",
            en : "-"
        },


        "ville-porte-retour-3-texte-1" : {
            fr : "L'homme semble légèrement perdu dans ses pensées.",
            en : "-"
        },
        "ville-porte-retour-3-texte-2" : {
            fr : "&laquo; Oh oui, bien sûr ! Tiens, prends cette lettre, elle porte ma signature.",
            en : "-"
        },
        "ville-porte-retour-3-texte-3" : {
            fr : "Si l'un des gardes de la ville te manque de respect, montre-lui simplement ceci et dis-lui que tu es envoyé par Sobac. Il devrait alors te laisser tranquille. &raquo;",
            en : "-"
        },
        "ville-porte-retour-3-texte-4" : {
            fr : "Le garde ouvre alors la porte et vous laisse passer.",
            en : "-"
        },
        "ville-porte-retour-3-texte-5" : {
            fr : "&laquo; Bonne visite à toi, aventurier ! &raquo;",
            en : "-"
        },
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});