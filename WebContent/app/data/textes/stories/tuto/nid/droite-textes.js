'use strict';
define([], function(){
	var data = {
        "nidDroite-texte-1" : {
            fr : "Vous arrivez dans une immense salle.",
            en : "You arrive in a huge room."
        },
        "nidDroite-texte-2" : {
            fr : "De nombreuses toiles recouvrent les murs et donnent à l&rsquo;ensemble une ambiance sinistre.",
            en : "Numerous cobwebs cover the walls and give a sinister atmosphere."
        },
        "nidDroite-texte-3" : {
            fr : "Une forme semble bouger lentement au fond de la pi&egrave;ce, dans l&rsquo;obscurit&eacute;.",
            en : "A shape seems to move slowly in the dark at the bottom of the room."
        },

        "roiAraigneePotion-texte-1" : {
            fr : "En vous approchant, vous apercevez une <span key='roiAraignee'>gigantesque araign&eacute;e</span> dans le noir.",
            en : "As you approach, you see a <span key='roiAraignee'>gigantic spider</span> in the dark."
        },
        "roiAraigneePotion-texte-2" : {
            fr : "Mal en point, elle s&rsquo;avance doucement vers vous.",
            en : "In a Bad way, she's slowly walking towards you."
        },
        "roiAraigneePotion-texte-3" : {
            fr : "Elle semble vouloir quelque chose&hellip;",
            en : "She seems to want something&hellip;"
        },

        "roiAraigneePotion2-texte-1" : {
            fr : "La cr&eacute;ature s&rsquo;arr&ecirc;te net et s&rsquo;exclame d&rsquo;une voix caverneuse :",
            en : "The creature stops neatly and exclaims in a cavernous voice:"
        },
        "roiAraigneePotion2-texte-2" : {
            fr : "&laquo; Qui es-tu, jeune aventurier, pour oser p&eacute;n&eacute;trer",
            en : "&laquo; Who are you, young adventurer, to dare to enter"
        },
        "roiAraigneePotion2-texte-3" : {
            fr : "dans l'antre du <span key='roiAraignee'>roi des araignees</span>&nbsp;?! &raquo;",
            en : "the <span key='roiAraignee'>spider king's</span> den?! &raquo;"
        },

        "roiAraigneePotionQui-texte-1" : {
            fr : "&laquo; Je suis Aros&nbsp;! Le roi arachnide&nbsp;!",
            en : "&laquo; I'm Aros! The arachnid king!"
        },
        "roiAraigneePotionQui-texte-2" : {
            fr : "Je r&eacute;gnais sur ce royaume jusqu&rsquo;à aujourd&rsquo;hui, mais&hellip;",
            en : "I reigned over this kingdom until today, but&hellip;"
        },
        "roiAraigneePotionQui-texte-3" : {
            fr : "D&rsquo;horribles cr&eacute;atures ont assassin&eacute; mes enfants&nbsp;!",
            en : "Horrible creatures murdered my children!"
        },
        "roiAraigneePotionQui-texte-4" : {
            fr : "M&rsquo;aiderez-vous à me soigner&nbsp;? &raquo;",
            en : "Will you help me treat myself? &raquo;"
        },

        "donner-potion" : {
            fr : "Donner la potion",
            en : "Give the potion"
        },
        "donner-fromage" : {
            fr : "Donner le fromage",
            en : "Give the cheese"
        },

        "roiAraigneePotionAmi-texte-1" : {
            fr : "&laquo; Vraiment&nbsp;? Si ce que vous dites est vrai,",
            en : "&laquo; Really? If what you're saying is true,"
        },
        "roiAraigneePotionAmi-texte-2" : {
            fr : "pourriez-vous aider un bon ami en le soignant&nbsp;? &raquo;",
            en : "could you help a good friend by taking care of him? &raquo;"
        },

        "roiAraigneeGuerit-texte-1" : {
            fr : "&laquo; Je vous remercie mon ami&nbsp;!",
            en : "&laquo; Thank you, my friend!"
        },
        "roiAraigneeGuerit-texte-2" : {
            fr : "Je me sens beaucoup mieux&nbsp;!",
            en : "I feel so much better!"
        },
        "roiAraigneeGuerit-texte-3" : {
            fr : "Malheureusement, vous &ecirc;tes arriv&eacute; un peu tard&hellip;",
            en : "Unfortunately, you arrived a little late&hellip;"
        },
        "roiAraigneeGuerit-texte-4" : {
            fr : "Mon peuple a &eacute;t&eacute; d&eacute;cim&eacute;. &raquo;",
            en : "My people have been decimated. &raquo;"
        },

        "qui-fait-ca" : {
            fr : "&laquo; Qui a fait &ccedil;a&nbsp;? &raquo;",
            en : "&laquo; Who has done it&nbsp;? &raquo;"
        },

        "roiAraigneeGuerit2-texte-1" : {
            fr : "&laquo; Ils sont apparu sans pr&eacute;venir du c&oelig;ur des t&eacute;n&egrave;bres,",
            en : "&laquo; They appeared without warning of the heart of darkness,"
        },
        "roiAraigneeGuerit2-texte-2" : {
            fr : "leur r&acirc;le sombre les pr&eacute;c&eacute;dant.",
            en : "their dark rail before them."
        },
        "roiAraigneeGuerit2-texte-3" : {
            fr : "Des spectres, des <span key='goule'>goules</span>, des cr&eacute;atures de l&rsquo;autre monde&hellip; &raquo;",
            en : "Ghost, ghouls, creatures of the other world&hellip; &raquo;"
        },

        "comment" : {
            fr : "&laquo; Comment&nbsp;?! &raquo;",
            en : "&laquo; How&nbsp;?! &raquo;"
        },

        "roiAraigneeGuerit3-texte-1" : {
            fr : "&laquo; Ils ont tu&eacute; mes enfants&nbsp;! Ces monstres&nbsp;!",
            en : "&laquo; They killed my children! Those monsters!"
        },
        "roiAraigneeGuerit3-texte-2" : {
            fr : "Je dois les venger&nbsp;! &raquo;",
            en : "I must avenge them&nbsp;! &raquo;"
        },
        "roiAraigneeGuerit3-texte-3" : {
            fr : "Le roi se jette au-dessus de vous et se dirige vers la sortie.",
            en : "The king throws himself over you and heads for the exit."
        },

        "ou-aller-vous" : {
            fr : "&laquo; O&ugrave; allez-vous&nbsp;? &raquo;",
            en : "&laquo; Where are you going&nbsp;? &raquo;"
        },
        "laisser-partir" : {
            fr : "Le laisser partir",
            en : "Let him go"
        },

        "roiAraigneeGuerit4-texte-1" : {
            fr : "&laquo; Ils sont partis attaquer votre village&nbsp;!",
            en : "&laquo; They've gone to attack your village!"
        },
        "roiAraigneeGuerit4-texte-2" : {
            fr : "Les laisserez-vous donc faire&nbsp;?!",
            en : "Will you let them do it?!"
        },
        "roiAraigneeGuerit4-texte-3" : {
            fr : "Je dois venger les miens&nbsp;! En route&nbsp;! &raquo;",
            en : "I must avenge mine! Let's go&nbsp;! &raquo;"
        },
        "roiAraigneeGuerit4-texte-4" : {
            fr : "Le roi s&rsquo;enfonce dans les t&eacute;n&egrave;bres de la grotte.",
            en : "The king is sinking into the darkness of the cave."
        },

        "aller-ville" : {
            fr : "Aller au village",
            en : "Go to the village"
        },

        "roiAraigneeParti-texte-1" : {
            fr : "et vous laisse seul dans sa demeure&hellip;",
            en : "and leaves you alone in his home&hellip;"
        },

        "roiAraigneeFouilleGrotte-texte-1" : {
            fr : "Malheureusement, vous ne trouvez rien d&rsquo;int&eacute;ressant.",
            en : "Unfortunately, you find nothing interesting."
        },
        "roiAraigneeFouilleGrotte-texte-2" : {
            fr : "De nombreux cadavres d&rsquo;arachnides jonchent le sol.",
            en : "Many dead arachnid bodies litter the ground."
        },

        "roiAraigneeRefus-texte-1" : {
            fr : "&laquo; Tu n&rsquo;es donc pas notre ami&hellip;",
            en : "&laquo; So you are not our friend&hellip;"
        },
        "roiAraigneeRefus-texte-2" : {
            fr : "Tu ne vaux pas mieux que ceux qui ont tu&eacute; mes enfants&hellip;",
            en : "You are no better than those who killed my children&hellip;"
        },
        "roiAraigneeRefus-texte-3" : {
            fr : "Pars&nbsp;! Sors de ma demeure&hellip; Laisse-moi mourir en paix. &raquo;",
            en : "Go away! Get out of my house&hellip; let me die in peace. &raquo;"
        },

        "roiAraigneeAgonie-texte-1" : {
            fr : "&laquo; Pourquoi&nbsp;?&hellip;",
            en : "&laquo; Why?&hellip;"
        },
        "roiAraigneeAgonie-texte-2" : {
            fr : "Je vous maudis, vous et votre race&nbsp;!",
            en : "I curse you and your race!"
        },
        "roiAraigneeAgonie-texte-3" : {
            fr : "Ils vous an&eacute;antiront tous, la mort aux dents&hellip; &raquo;",
            en : "They'll kill you all, death to the teeth&hellip; &raquo;"
        },
        "roiAraigneeAgonie-texte-4" : {
            fr : "Le roi s&rsquo;&eacute;croule devant vous, dans une marre de sang vert.",
            en : "The King falls before you in a pool of green blood."
        },
        "roiAraigneeAgonie-texte-5" : {
            fr : "Vous vous demandez ce qu&rsquo;il a voulu dire&hellip;",
            en : "You wonder what he meant by&hellip;"
        },

        "roiAraigneeAgonieFouille-texte-1" : {
            fr : "Rien d&rsquo;int&eacute;ressant dans la pi&egrave;ce.",
            en : "Nothing of interest in the room."
        },
        "roiAraigneeAgonieFouille-texte-2" : {
            fr : "Mais, vous trouvez sur le roi une <span key='venin'>poche de venin</span>&nbsp;!",
            en : "But you find on the king a <span key='venin'>pocket of venom</span>&nbsp;!"
        },
        "roiAraigneeAgonieFouille-texte-3" : {
            fr : "Elle pourra vous &ecirc;tre utile en combat.",
            en : "It can be useful in combat."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});