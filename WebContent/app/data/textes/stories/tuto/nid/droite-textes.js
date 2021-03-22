'use strict';
define([], function(){
	var data = {
	    "nidDroite-texte-1" : {
        	fr : "Vous arrivez dans une immense salle.",
        	en : "You arrive in a huge room.",
        	eo : "Vi alvenas en grandega ĉambro."
        },
        "nidDroite-texte-2" : {
        	fr : "De nombreuses toiles recouvrent les murs et donnent à l'ensemble une ambiance sinistre.",
        	en : "Several spiderwebs cover the walls and give a sinister atmosphere.",
        	eo : "La etoso estas sinistra kaj multaj araneaĵoj kovras la murojn."
        },
        "nidDroite-texte-3" : {
        	fr : "Une forme semble bouger lentement au fond de la pièce, dans l'obscurité.",
        	en : "A shape seems to move slowly in the dark at the bottom of the room.",
        	eo : "Formo ŝajnas malrapide moviĝi funde de la ĉambro, en la mallumo."
        },

        "roiAraigneePotion-texte-1" : {
        	fr : "En vous approchant, vous apercevez une <span key='roiAraignee'>gigantesque araignée</span> dans le noir.",
        	en : "As you approach, you see a <span key='roiAraignee'>gigantic spider</span> in the dark.",
        	eo : "Alproksimiĝante, vi ekvidas <span key='roiAraignee'>gigantan araneon</span> en la mallumo."
        },
        "roiAraigneePotion-texte-2" : {
        	fr : "Mal en point, elle s'avance doucement vers vous.",
        	en : "In a bad way, she's slowly comes toward you.",
        	eo : "Vundita, ŝi malrapide antaŭeniras al vi."
        },
        "roiAraigneePotion-texte-3" : {
        	fr : "Elle semble vouloir quelque chose&hellip;",
        	en : "She seems to want something&hellip;",
        	eo : "Ŝi ŝajnas voli ion&hellip;"
        },

        "roiAraigneePotion2-texte-1" : {
        	fr : "La créature s'arrête net et s'exclame d'une voix caverneuse&nbsp;:",
        	en : "The creature stops neatly and exclaims in a cavernous voice:",
        	eo : "La kreaĵo subite haltas kaj ekkrias per raŭka voĉo:"
        },
        "roiAraigneePotion2-texte-2" : {
        	fr : "&laquo;&nbsp;Qui es-tu, jeune aventurier, pour oser pénétrer",
        	en : "&laquo;&nbsp;Who are you, young adventurer, to dare to enter",
        	eo : "&laquo;&nbsp;Kiu vi estas, juna aventurulo, por aŭdaci eniri"
        },
        "roiAraigneePotion2-texte-3" : {
        	fr : "dans l'antre du <span key='roiAraignee'>roi des araignées</span>&nbsp;?!&nbsp;&raquo;",
        	en : "the <span key='roiAraignee'>king of spiders</span> den?!&nbsp;&raquo;",
        	eo : "en la nestegon de la <span key='roiAraignee'>reĝo de la araneoj</span>?!&nbsp;&raquo;"
        },

        "roiAraigneePotionQui-texte-1" : {
        	fr : "&laquo;&nbsp;Je suis Aros&nbsp;! Le roi arachnide&nbsp;!",
        	en : "&laquo;&nbsp;I'm Aros! The arachnid king!",
        	eo : "&laquo;&nbsp;Mi estas Aros! La aranea reĝo!"
        },
        "roiAraigneePotionQui-texte-2" : {
        	fr : "Je régnais sur ce royaume jusqu'à aujourd'hui, mais&hellip;",
        	en : "I reigned over this kingdom until today, but&hellip;",
        	eo : "Mi reĝis tiun reĝlandon ĝis hodiaŭ, sed&hellip;"
        },
        "roiAraigneePotionQui-texte-3" : {
        	fr : "D'horribles créatures ont assassiné mes enfants&nbsp;!",
        	en : "Horrible creatures murdered my children!",
        	eo : "Abomenaj kreaĵoj mortigis miajn infanojn."
        },
        "roiAraigneePotionQui-texte-4" : {
        	fr : "M'aiderez-vous à me soigner&nbsp;?&nbsp;&raquo;",
        	en : "Will you help me treat myself?&nbsp;&raquo;",
        	eo : "Ĉu vi helpos kuraci min?&nbsp;&raquo;"
        },

        "roiAraigneePotionAmi-texte-1" : {
        	fr : "&laquo;&nbsp;Vraiment&nbsp;? Si ce que vous dites est vrai,",
        	en : "&laquo;&nbsp;Really? If what you're saying is true,",
        	eo : "&laquo;&nbsp;Vere? Se tio, kion vi diras estas vera,"
        },
        "roiAraigneePotionAmi-texte-2" : {
        	fr : "pourriez-vous aider un bon ami en le soignant&nbsp;?&nbsp;&raquo;",
        	en : "could you help a good friend by treating him?&nbsp;&raquo;",
        	eo : "ĉu vi povos helpi bonan amikon kuracante lin?&nbsp;&raquo"
        },

        "roiAraigneeGuerit-texte-1" : {
        	fr : "&laquo;&nbsp;Je vous remercie mon ami&nbsp;!",
        	en : "&laquo;&nbsp;Thank you, my friend!",
        	eo : "&laquo;&nbsp;Dankegon, mia amiko!"
        },
        "roiAraigneeGuerit-texte-2" : {
        	fr : "Je me sens beaucoup mieux&nbsp;!",
        	en : "I feel so much better!",
        	eo : "Mi sentas min pli bone!"
        },
        "roiAraigneeGuerit-texte-3" : {
        	fr : "Malheureusement, vous êtes arrivé un peu tard&hellip;",
        	en : "Unfortunately, you arrived a little late&hellip;",
        	eo : "Bedaŭrinde, vi alvenis iom malfrue&hellip;"
        },
        "roiAraigneeGuerit-texte-4" : {
        	fr : "Mon peuple a été décimé.&nbsp;&raquo;",
        	en : "My people have been decimated.&nbsp;&raquo;",
        	eo : "Mia popolo estis ekstermita.&nbsp;&raquo;"
        },

        "roiAraigneeGuerit2-texte-1" : {
        	fr : "&laquo;&nbsp;Ils sont apparus sans prévenir du c&oelig;ur des ténèbres,",
        	en : "&laquo;&nbsp;They appeared suddenly from the heart of darkness,",
        	eo : "&laquo;&nbsp;Ili aperis senaverte el la tenebroj,"
        },
        "roiAraigneeGuerit2-texte-2" : {
        	fr : "leur râle sombre les précédant.",
        	en : "their dark wheeze before them.",
        	eo : "antaŭitaj de ilia timiga stertoro."
        },
        "roiAraigneeGuerit2-texte-3" : {
        	fr : "Des spectres, des <span key='goule'>goules</span>, des créatures de l'autre monde&hellip;&nbsp;&raquo;",
        	en : "Ghosts, <span key='goule'>ghouls</span>, creatures of the other world&hellip;&nbsp;&raquo;",
        	eo : "Fantomoj, <span key='goule'>guloj</span>, kreaĵoj de la alia mondo.&hellip;&nbsp;&raquo;"
        },

        "roiAraigneeGuerit3-texte-1" : {
        	fr : "&laquo;&nbsp;Ils ont tué mes enfants&nbsp;! Ces monstres&nbsp;!",
        	en : "&laquo;&nbsp;They killed my children! Those monsters!",
        	eo : "&laquo;&nbsp;Ĉi tiuj monstroj mortigis miajn infanojn!"
        },
        "roiAraigneeGuerit3-texte-2" : {
        	fr : "Je dois les venger&nbsp;!&nbsp;&raquo;",
        	en : "I must avenge them&nbsp;!&nbsp;&raquo;",
        	eo : "Mi devas venĝi ilin!&nbsp;!&nbsp;&raquo;"
        },
        "roiAraigneeGuerit3-texte-3" : {
        	fr : "Le roi se jette au-dessus de vous et se dirige vers la sortie.",
        	en : "The king leaps over you and heads for the exit.",
        	eo : "La reĝo ĵetas sin super vi kaj sin direktas al la elirejo."
        },

        "roiAraigneeGuerit4-texte-1" : {
        	fr : "&laquo;&nbsp;Ils sont partis attaquer votre village&nbsp;!",
        	en : "&laquo;&nbsp;They've gone to attack your village!",
        	eo : "&laquo;&nbsp;Ili foriris ataki vian vilaĝon!"
        },
        "roiAraigneeGuerit4-texte-2" : {
        	fr : "Les laisserez-vous donc faire&nbsp;?!",
        	en : "Will you let them do it?!",
        	eo : "Ĉu vi lasos ilin fari ĉi tion?!"
        },
        "roiAraigneeGuerit4-texte-3" : {
        	fr : "Je dois venger les miens&nbsp;! En route&nbsp;!&nbsp;&raquo;",
        	en : "I must avenge mine! Let's go!&nbsp;&raquo;",
        	eo : "Mi devas venĝi mian popolon! Ek!&nbsp;&raquo;"
        },
        "roiAraigneeGuerit4-texte-4" : {
        	fr : "Le roi s'enfonce dans les ténèbres de la grotte",
        	en : "The king sinks into the darkness of the cave",
        	eo : "La reĝo foririĝas en la tenebron de la groton"
        },

        "roiAraigneeParti-texte-1" : {
        	fr : "et vous laisse seul dans sa demeure&hellip;",
        	en : "and leaves you alone in his home&hellip;",
        	eo : "kaj lasas vin sola en sia domo&hellip;"
        },

        "roiAraigneeFouilleGrotte-texte-1" : {
        	fr : "Malheureusement, vous ne trouvez rien d'intéressant.",
        	en : "Unfortunately, you find nothing interesting.",
        	eo : "Bedaŭrinde, vi trovas nenion interesan."
        },
        "roiAraigneeFouilleGrotte-texte-2" : {
        	fr : "De nombreux cadavres d'arachnides jonchent le sol.",
        	en : "Many dead arachnid bodies cover the ground.",
        	eo : "Multaj kadavroj de araneuloj kovras la grundon."
        },

        "roiAraigneeRefus-texte-1" : {
        	fr : "&laquo;&nbsp;Tu n'es donc pas notre ami&hellip;",
        	en : "&laquo;&nbsp;So you’re not our friend&hellip;",
        	eo : "&laquo;&nbsp;Do, vi ne estas nia amiko&hellip;"
        },
        "roiAraigneeRefus-texte-2" : {
        	fr : "Tu ne vaux pas mieux que ceux qui ont tué mes enfants&hellip;",
        	en : "You’re no better than those who killed my children&hellip;",
        	eo : "Vi ne valoras pli bone, ol tiuj kiuj mortigis miajn infanojn&hellip;"
        },
        "roiAraigneeRefus-texte-3" : {
        	fr : "Pars&nbsp;! Sors de ma demeure&hellip; Laisse-moi mourir en paix.&nbsp;&raquo;",
        	en : "Go away! Get out of my house&hellip; let me die in peace.&nbsp;&raquo;",
        	eo : "Foriru! Foriru el mia domo&hellip;Lasu min pace morti.&nbsp;&raquo;"
        },

        "roiAraigneeAgonie-texte-1" : {
        	fr : "&laquo;&nbsp;Pourquoi&nbsp;?&hellip;",
        	en : "&laquo;&nbsp;Why?&hellip;",
        	eo : "&laquo;&nbsp;Kial?&hellip;"
        },
        "roiAraigneeAgonie-texte-2" : {
        	fr : "Je vous maudis, vous et votre race&nbsp;!",
        	en : "I curse you and your breed!",
        	eo : "Mi malbenas vin, vin kaj vian rason!"
        },
        "roiAraigneeAgonie-texte-3" : {
        	fr : "Ils vous anéantiront tous, la mort aux dents&hellip;&nbsp;&raquo;",
        	en : "They'll kill you all, death to the teeth&hellip;&nbsp;&raquo;",
        	eo : "Ili ekstermos vin ĉiujn per mortigaj dentoj&hellip;&nbsp;&raquo;"
        },
        "roiAraigneeAgonie-texte-4" : {
        	fr : "Le roi s'écroule devant vous, dans une mare de sang vert.",
        	en : "The king is falling down in front of you in a pool of green blood.",
        	eo : "La reĝo falas antaŭ vi, en marĉeto el verda sango."
        },
        "roiAraigneeAgonie-texte-5" : {
        	fr : "Vous vous demandez ce qu'il a voulu dire&hellip;",
        	en : "You wonder what he meant&hellip;",
        	eo : "Vi scivolas, kion li volis diri&hellip;"
        },

        "roiAraigneeAgonieFouille-texte-1" : {
        	fr : "Rien d'intéressant dans la pièce.",
        	en : "Nothing interesting in the room.",
        	eo : "Nenio interesa en la ĉambro."
        },
        "roiAraigneeAgonieFouille-texte-2" : {
        	fr : "Mais, vous trouvez sur le roi une <span key='venin'>poche de venin</span>&nbsp;!",
        	en : "But, you find on the king a <span key='venin'>gland of venom</span>&nbsp;!",
        	eo : "Sed, vi trovas sur la reĝo <span key='venin'>venenglando</span>&nbsp;!"
        },
        "roiAraigneeAgonieFouille-texte-3" : {
        	fr : "Elle pourra vous être utile en combat.",
        	en : "It can be useful in combat.",
        	eo : "Ĝi povas esti utila al vi dum batalo."
        }
	};
	
	return {
        name : function() {
            return "Tuto Nid Droite.js";
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