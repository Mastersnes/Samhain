'use strict';
define([], function(){
	var data = {
	    /**
        * Castagne
        **/
        "ville-ruelle-taverne-castagne-1-texte-1" : {
            fr : "Dong ! Le brouhaha cesse, le calme s'installe...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-1-texte-2" : {
            fr : "&laquo; Mes amis, le premier combat désarmé va pouvoir commencer !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-1-texte-3" : {
            fr : "À ma gauche, not' nouveau challenger : L'étranger !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-1-texte-4" : {
            fr : "À ma droite, le <span key='villageois' suffixe='costaud'>cogneur</span> du dimanche !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-1-texte-5" : {
            fr : "Combattez bravement messieurs ! &raquo;",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-2-texte-1" : {
            fr : "Votre adversaire s'écroule, fatigué de prendre des coups.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-2-texte-2" : {
            fr : "&laquo; Eh bien ! Not' nouveau challenger s'en sort plutôt bien pour son premier combat !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-2-texte-3" : {
            fr : "Mais, l'prochain s'ra d'un tout autre niveau. V'nant du nord, veuillez accueillir comme y s'doit : <span key='villageois' suffixe='bourrin'>Les frères moustaches</span> ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-2-texte-4" : {
            fr : "La foule est en délire. Espérons que leur force soit aussi ridicule que leur nom...",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-3-texte-1" : {
            fr : "Les deux moustachus s'enfuient en hurlant. Rien de bien terrible jusqu'ici...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-3-texte-2" : {
            fr : "&laquo; C'est une seconde réussite pour not' champion, mais interdiction de s'arrêter en si bon chemin !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-3-texte-3" : {
            fr : "Le sud nous envoie lui aussi ses merveilles, veuillez faire une ovation pour : <span key='bandit' suffixe='terrifiant'>Les terreurs des sables</span> ! &raquo;",
            en : "-"
        },


        "ville-ruelle-taverne-castagne-4-texte-1" : {
            fr : "Les bandits tombent, vous leur avez fait manger leur sable...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-4-texte-2" : {
            fr : "&laquo; Impressionnant ! C'est de mieux en mieux dites donc !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-4-texte-3" : {
            fr : "Le prochain combat opposera not' vainqueur aux <span key='bandit' suffixe='cruel'>teigneux</span> accompagnés d'leur grand frère <span key='bandit' suffixe='raoul'>Raoul</span> !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-4-texte-4" : {
            fr : "Qui sera le vainqueur ? &raquo;",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-5-texte-1" : {
            fr : "Vos trois adversaires s'écroulent, épuisés. Vous avez encore gagné.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-5-texte-2" : {
            fr : "&laquo; Quel beau match ! Quel échange de coups ! C'était magnifique !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-5-texte-3" : {
            fr : "Mais mais mais, que vois-je au fond d'la salle ? <span key='villageois' suffixe='viscerole'>Viscerole</span>, not' bourreau des coeurs s'avance !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-5-texte-4" : {
            fr : "Une chose est sûre, ça va commencer à saigner ! &raquo;",
            en : "-"
        },

        /**
        * Castagne, premiere phase de victoire
        **/
        "ville-ruelle-taverne-castagne-win1-texte-1" : {
            fr : "La foule vous acclame. C'est une sacrée victoire !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win1-texte-2" : {
            fr : "Le patron du lieu vient vers vous, un sac d'or à la main :",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win1-texte-3" : {
            fr : "&laquo; Eh bien, messire l'étranger ! Ça c'est d'la baston ! Voici un beau pactole en récompense !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win1-texte-4" : {
            fr : "Vous pouvez vous arrêter là et reprendre à ce niveau la prochaine fois...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win1-texte-5" : {
            fr : "ou continuer à nous en mettre plein la vue ! Alors ? &raquo;",
            en : "-"
        },

        /**
        * Castagne suite
        **/
        "ville-ruelle-taverne-castagne-6-texte-1" : {
            fr : "La foule, en délire, vous applaudit abondamment. C'est votre jour !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-6-texte-2" : {
            fr : "&laquo; Les combats peuvent reprendre et nous augmentons encore la difficulté...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-6-texte-3" : {
            fr : "Interdiction d'utiliser vos objets, seuls vos poings comptent.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-6-texte-4" : {
            fr : "Pour c'nouveau combat, faites entrer \"<span key='bandit' suffixe='precis'>l'accusé</span>\" ! Attention, il peut être violent ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-6-texte-5" : {
            fr : "Vous retroussez vos manches. Là, ça commence à devenir sérieux.",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-7-texte-1" : {
            fr : "Votre adversaire tombe à terre mais ne semble pas encore K.O...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-7-texte-2" : {
            fr : "&laquo; Tu pensais m'avoir si facilement gamin ? Haha, laisse-moi rire ! Tu m'as tout juste servi d'échauffement ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-7-texte-3" : {
            fr : "Crachant du sang, <span key='bandit' suffixe='dechaine'>il</span> se relève, sûr de lui. Il est temps d'en découdre pour de bon !",
            en : "-"
        },


        "ville-ruelle-taverne-castagne-8-texte-1" : {
            fr : "Le criminel s'écroule, cette fois-ci pour de bon. Il ne fallait pas vous chercher...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-8-texte-2" : {
            fr : "&laquo; Incroyable !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-8-texte-3" : {
            fr : "Quel combat intense ! L'étranger, j'pense que vous allez finir par attirer l'attention des plus grands !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-8-texte-4" : {
            fr : "D'ailleurs, veuillez accueillir \"<span key='garde' suffixe='kraken'>Kraken</span>\", le mastodonte des tavernes ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-8-texte-5" : {
            fr : "Le sol tremble sous vos pieds et un colosse apparaît devant vous... Ça va pas être de la tarte.",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-9-texte-1" : {
            fr : "Le géant tombe à genoux, presque inconscient.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-9-texte-2" : {
            fr : "Vous vous apprêtez à le finir lorsque deux zigotos vous en empêchent...",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-9-texte-3" : {
            fr : "&laquo; Quel retournement d'situation ! Y semblerait que les <span key='garde'>camarades</span> d'not' Kraken veuillent participer !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-9-texte-4" : {
            fr : "Eh bien, soit ! Ce n'est pas contraire au règlement ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-9-texte-5" : {
            fr : "Le <span key='garde' suffixe='kraken-blesse'>mastodonte</span> se relève, prêt pour un second round. Un de plus, un de moins...",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-10-texte-1" : {
            fr : "Les deux brutes fuient en traînant leur collègue à bout de bras.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-10-texte-2" : {
            fr : "&laquo; C'est encore une victoire ! Que de spectacles dans ma taverne !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-10-texte-3" : {
            fr : "Mais vient maintenant l'heure du dernier combat ! L'étranger, va falloir me montrer vos tripes ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-10-texte-4" : {
            fr : "Le <span key='villageois' suffixe='tavernier'>tavernier</span>, jusqu'ici simple annonceur, s’amène au centre de la pièce, prêt à combattre.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-10-texte-5" : {
            fr : "&laquo; Allez-y l'étranger, vous pouvez taper, j'suis pas en mousse... &raquo;",
            en : "-"
        },

        /**
        * Castagne victoire absolue
        **/
        "ville-ruelle-taverne-castagne-win2-texte-1" : {
            fr : "Votre dernier adversaire tombe à genoux, le visage en sang, puis... éclate de rire ?",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-texte-2" : {
            fr : "&laquo; Ahaha ! Eh bah ! La raclée que j'ai eue, l'étranger ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-texte-3" : {
            fr : "Il se relève et sort de sa poche un artefact doré.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-texte-4" : {
            fr : "&laquo; Prenez c'talisman mon vieux ! Il se transmet depuis des générations aux castagneurs les plus chevronnées !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-texte-5" : {
            fr : "Avec lui, j'vous assure que z'allez tabasser à la vitesse du son ! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-texte-6" : {
            fr : "Alliant le geste à la parole, il vous attache le bracelet qui se soude magiquement à votre poignet.",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-win2-2-texte-1" : {
            fr : "&laquo; Hésitez pas à rev'nir nous voir si z'avez envie d'cogner ! On s'ra toujours partant !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-win2-2-texte-2" : {
            fr : "Et surtout, n'oubliez jamais la première règle de La Castagne... &raquo;",
            en : "-"
        },

        /**
        * Castagne Repos
        **/
        "ville-ruelle-taverne-castagne-repos-texte-1" : {
            fr : "&laquo; Mes amis, not' challenger a bien mérité un petit repos !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-repos-texte-2" : {
            fr : "Nous verrons donc ses prochains combats à la prochaine session de La Castagne !!! &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-repos-texte-3" : {
            fr : "Vous sortez tranquillement de la taverne sous les applaudissements de vos fans.",
            en : "-"
        },

        /**
        * Castagne Random
        **/
        "ville-ruelle-taverne-castagne-random-texte-1" : {
            fr : "Vous vous rendez au centre de la pièce, prêt à combattre.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-random-texte-2" : {
            fr : "&laquo; L'étranger ! Vous êtes maintenant l'castagneur le plus fort des environs !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-random-texte-3" : {
            fr : "Pour plus de piquant, vos prochains combats seront tirés au sort. &raquo;",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-random-texte-4" : {
            fr : "Ce disant, il amène une corbeille pleine de papiers.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-random-texte-5" : {
            fr : "Eh bien... Plus qu'à piocher...",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-random-relance-texte-1" : {
            fr : "&laquo; Bien joué, l'étranger ! Alors, on r'tente sa chance ? &raquo;",
            en : "-"
        },

        "ville-ruelle-taverne-castagne-random-unique-texte-1" : {
            fr : "Votre adversaire prend place devant vous et se prépare à se battre de toutes ses forces.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-random-multi-texte-1" : {
            fr : "Vos adversaires prennent place devant vous et se préparent à se battre de toutes leurs forces.",
            en : "-"
        },

        /**
        * Castagne Defaite
        **/

        "ville-ruelle-taverne-castagne-defaite-texte-1" : {
            fr : "Vous dévalez la salle et roulez en dehors de la taverne.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-defaite-texte-2" : {
            fr : "Eh bah, ils n'y sont pas allés de main morte !",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-defaite-texte-3" : {
            fr : "Vous voici donc de retour dans la ruelle.",
            en : "-"
        },
        "ville-ruelle-taverne-castagne-defaite-texte-4" : {
            fr : "Prêt à retenter votre chance ?",
            en : "-"
        }
	};

	return {
        get : function(key) {
            return data[key];
        }
    };
});