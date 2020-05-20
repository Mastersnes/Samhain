'use strict';
define([], function(){
	var data = {
        "nidDroite-texte-1" : {
            fr : "Vous arrivez dans une immense salle.",
            en : "You arrive in a huge room."
        },
        "nidDroite-texte-2" : {
            fr : "De nombreuses toiles recouvrent les murs et donnent à l'ensemble une ambiance sinistre.",
            en : "Numerous cobwebs cover the walls and give a sinister atmosphere."
        },
        "nidDroite-texte-3" : {
            fr : "Une forme semble bouger lentement au fond de la pièce, dans l'obscurité.",
            en : "A shape seems to move slowly in the dark at the bottom of the room."
        },

        "roiAraigneePotion-texte-1" : {
            fr : "En vous approchant, vous apercevez une <span key='roiAraignee'>gigantesque araignée</span> dans le noir.",
            en : "As you approach, you see a <span key='roiAraignee'>gigantic spider</span> in the dark."
        },
        "roiAraigneePotion-texte-2" : {
            fr : "Mal en point, elle s'avance doucement vers vous.",
            en : "In a Bad way, she's slowly walking towards you."
        },
        "roiAraigneePotion-texte-3" : {
            fr : "Elle semble vouloir quelque chose&hellip;",
            en : "She seems to want something&hellip;"
        },

        "roiAraigneePotion2-texte-1" : {
            fr : "La créature s'arrête net et s'exclame d'une voix caverneuse :",
            en : "The creature stops neatly and exclaims in a cavernous voice:"
        },
        "roiAraigneePotion2-texte-2" : {
            fr : "&laquo;&nbsp;Qui es-tu, jeune aventurier, pour oser pénétrer",
            en : "&laquo;&nbsp;Who are you, young adventurer, to dare to enter"
        },
        "roiAraigneePotion2-texte-3" : {
            fr : "dans l'antre du <span key='roiAraignee'>roi des araignées</span>&nbsp;?!&nbsp;&raquo;",
            en : "the <span key='roiAraignee'>spider king's</span> den?!&nbsp;&raquo;"
        },

        "roiAraigneePotionQui-texte-1" : {
            fr : "&laquo;&nbsp;Je suis Aros&nbsp;! Le roi arachnide&nbsp;!",
            en : "&laquo;&nbsp;I'm Aros! The arachnid king!"
        },
        "roiAraigneePotionQui-texte-2" : {
            fr : "Je régnais sur ce royaume jusqu'à aujourd'hui, mais&hellip;",
            en : "I reigned over this kingdom until today, but&hellip;"
        },
        "roiAraigneePotionQui-texte-3" : {
            fr : "D'horribles créatures ont assassiné mes enfants&nbsp;!",
            en : "Horrible creatures murdered my children!"
        },
        "roiAraigneePotionQui-texte-4" : {
            fr : "M'aiderez-vous à me soigner&nbsp;?&nbsp;&raquo;",
            en : "Will you help me treat myself?&nbsp;&raquo;"
        },

        "roiAraigneePotionAmi-texte-1" : {
            fr : "&laquo;&nbsp;Vraiment&nbsp;? Si ce que vous dites est vrai,",
            en : "&laquo;&nbsp;Really? If what you're saying is true,"
        },
        "roiAraigneePotionAmi-texte-2" : {
            fr : "pourriez-vous aider un bon ami en le soignant&nbsp;?&nbsp;&raquo;",
            en : "could you help a good friend by taking care of him?&nbsp;&raquo;"
        },

        "roiAraigneeGuerit-texte-1" : {
            fr : "&laquo;&nbsp;Je vous remercie mon ami&nbsp;!",
            en : "&laquo;&nbsp;Thank you, my friend!"
        },
        "roiAraigneeGuerit-texte-2" : {
            fr : "Je me sens beaucoup mieux&nbsp;!",
            en : "I feel so much better!"
        },
        "roiAraigneeGuerit-texte-3" : {
            fr : "Malheureusement, vous êtes arrivé un peu tard&hellip;",
            en : "Unfortunately, you arrived a little late&hellip;"
        },
        "roiAraigneeGuerit-texte-4" : {
            fr : "Mon peuple a été décimé.&nbsp;&raquo;",
            en : "My people have been decimated.&nbsp;&raquo;"
        },

        "roiAraigneeGuerit2-texte-1" : {
            fr : "&laquo;&nbsp;Ils sont apparus sans prévenir du c&oelig;ur des ténèbres,",
            en : "&laquo;&nbsp;They appeared without warning of the heart of darkness,"
        },
        "roiAraigneeGuerit2-texte-2" : {
            fr : "leur râle sombre les précédant.",
            en : "their dark rail before them."
        },
        "roiAraigneeGuerit2-texte-3" : {
            fr : "Des spectres, des <span key='goule'>goules</span>, des créatures de l'autre monde&hellip;&nbsp;&raquo;",
            en : "Ghost, ghouls, creatures of the other world&hellip;&nbsp;&raquo;"
        },

        "roiAraigneeGuerit3-texte-1" : {
            fr : "&laquo;&nbsp;Ils ont tué mes enfants&nbsp;! Ces monstres&nbsp;!",
            en : "&laquo;&nbsp;They killed my children! Those monsters!"
        },
        "roiAraigneeGuerit3-texte-2" : {
            fr : "Je dois les venger&nbsp;!&nbsp;&raquo;",
            en : "I must avenge them&nbsp;!&nbsp;&raquo;"
        },
        "roiAraigneeGuerit3-texte-3" : {
            fr : "Le roi se jette au-dessus de vous et se dirige vers la sortie.",
            en : "The king throws himself over you and heads for the exit."
        },

        "roiAraigneeGuerit4-texte-1" : {
            fr : "&laquo;&nbsp;Ils sont partis attaquer votre village&nbsp;!",
            en : "&laquo;&nbsp;They've gone to attack your village!"
        },
        "roiAraigneeGuerit4-texte-2" : {
            fr : "Les laisserez-vous donc faire&nbsp;?!",
            en : "Will you let them do it?!"
        },
        "roiAraigneeGuerit4-texte-3" : {
            fr : "Je dois venger les miens&nbsp;! En route&nbsp;!&nbsp;&raquo;",
            en : "I must avenge mine! Let's go&nbsp;!&nbsp;&raquo;"
        },
        "roiAraigneeGuerit4-texte-4" : {
            fr : "Le roi s'enfonce dans les ténèbres de la grotte.",
            en : "The king is sinking into the darkness of the cave."
        },

        "roiAraigneeParti-texte-1" : {
            fr : "et vous laisse seul dans sa demeure&hellip;",
            en : "and leaves you alone in his home&hellip;"
        },

        "roiAraigneeFouilleGrotte-texte-1" : {
            fr : "Malheureusement, vous ne trouvez rien d'intéressant.",
            en : "Unfortunately, you find nothing interesting."
        },
        "roiAraigneeFouilleGrotte-texte-2" : {
            fr : "De nombreux cadavres d'arachnides jonchent le sol.",
            en : "Many dead arachnid bodies litter the ground."
        },

        "roiAraigneeRefus-texte-1" : {
            fr : "&laquo;&nbsp;Tu n'es donc pas notre ami&hellip;",
            en : "&laquo;&nbsp;So you are not our friend&hellip;"
        },
        "roiAraigneeRefus-texte-2" : {
            fr : "Tu ne vaux pas mieux que ceux qui ont tué mes enfants&hellip;",
            en : "You are no better than those who killed my children&hellip;"
        },
        "roiAraigneeRefus-texte-3" : {
            fr : "Pars&nbsp;! Sors de ma demeure&hellip; Laisse-moi mourir en paix.&nbsp;&raquo;",
            en : "Go away! Get out of my house&hellip; let me die in peace.&nbsp;&raquo;"
        },

        "roiAraigneeAgonie-texte-1" : {
            fr : "&laquo;&nbsp;Pourquoi&nbsp;?&hellip;",
            en : "&laquo;&nbsp;Why?&hellip;"
        },
        "roiAraigneeAgonie-texte-2" : {
            fr : "Je vous maudis, vous et votre race&nbsp;!",
            en : "I curse you and your race!"
        },
        "roiAraigneeAgonie-texte-3" : {
            fr : "Ils vous anéantiront tous, la mort aux dents&hellip;&nbsp;&raquo;",
            en : "They'll kill you all, death to the teeth&hellip;&nbsp;&raquo;"
        },
        "roiAraigneeAgonie-texte-4" : {
            fr : "Le roi s'écroule devant vous, dans une marre de sang vert.",
            en : "The King falls before you in a pool of green blood."
        },
        "roiAraigneeAgonie-texte-5" : {
            fr : "Vous vous demandez ce qu'il a voulu dire&hellip;",
            en : "You wonder what he meant by&hellip;"
        },

        "roiAraigneeAgonieFouille-texte-1" : {
            fr : "Rien d'intéressant dans la pièce.",
            en : "Nothing of interest in the room."
        },
        "roiAraigneeAgonieFouille-texte-2" : {
            fr : "Mais, vous trouvez sur le roi une <span key='venin'>poche de venin</span>&nbsp;!",
            en : "But you find on the king a <span key='venin'>pocket of venom</span>&nbsp;!"
        },
        "roiAraigneeAgonieFouille-texte-3" : {
            fr : "Elle pourra vous être utile en combat.",
            en : "It can be useful in combat."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});