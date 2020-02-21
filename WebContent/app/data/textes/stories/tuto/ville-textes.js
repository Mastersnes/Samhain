'use strict';
define([], function(){
	var data = {
        "reposVille2-texte-1" : {
            fr : "Vous accourez dans le village, au c&oelig;ur de la bataille.",
            en : "You run into the village, at the heart of the battle."
        },
        "reposVille2-texte-2" : {
            fr : "De nombreuses <span key='goule'>goules</span> tentent de dévorer les paysans qui se battent de leur mieux.",
            en : "Many <span key='goule'>ghouls</span> try to worship the peasants who fight at their best."
        },
        "reposVille2-texte-3" : {
            fr : "&laquo; Du nerf&nbsp;! Défendez le village&nbsp;! &raquo; hurle un <span key='garde'>garde</span> non loin de vous.",
            en : "&laquo; Get on your nerves! Defend the village! &raquo; screams a <span key='garde'>guard</span> not far from you."
        },

        "reposVille3-texte-1" : {
            fr : "Vous tuez la dernière <span key='goule'>goule</span> face à vous et retournez voir les <span key='garde'>gardes</span> :",
            en : "You kill the last <span key='goule'>ghoul</span> in front of you and go back to the <span key='garde'>guards</span>:"
        },
        "reposVille3-texte-2" : {
            fr : "&laquo; Que s&rsquo;est-il passé&nbsp;? &raquo;",
            en : "&laquo; What happened? &raquo;"
        },
        "reposVille3-texte-3" : {
            fr : "Un des <span key='garde'>gardes</span> se tourne vers vous :",
            en : "One of the <span key='garde'>guards</span> turns to you:"
        },
        "reposVille3-texte-4" : {
            fr : "&laquo; Les morts&nbsp;! Ils nous ont attaqués&nbsp;!",
            en : "&laquo; The dead! They attacked us!"
        },
        "reposVille3-texte-5" : {
            fr : "Ils ont emporté les enfants dans la forêt &raquo;",
            en : "They took the children into the forest &raquo;"
        },

        "reposVille4-texte-1" : {
            fr : "&laquo; Malheureusement, nous devons nous occuper des blessés.",
            en : "&laquo; Unfortunately, we have to deal with the wounded."
        },
        "reposVille4-texte-2" : {
            fr : "Vous avez l&rsquo;air de savoir vous battre&nbsp;!",
            en : "You look like you know how to fight!"
        },
        "reposVille4-texte-3" : {
            fr : "Vous devez les secourir, demandez de l&rsquo;aide aux autres <span key='villageois'>villageois</span>&nbsp;! &raquo;",
            en : "You must help them, ask for help from other <span key='villageois'>villagers</span>! &raquo;"
        },

        "reposVilleAide-texte-1" : {
            fr : "Vous hochez bravement la tête et",
            en : "You bravely nod your head and"
        },
        "reposVilleAide-texte-2" : {
            fr : "vous vous dirigez vers les <span key='villageois'>villageois</span> paniqués.",
            en : "you're heading for the panicked <span key='villageois'>villagers</span>."
        },
        "reposVilleAide-texte-3" : {
            fr : "John, le forgeron, s&rsquo;approche de vous l&rsquo;air menaçant :",
            en : "John, the blacksmith, approaches you looking threatening:"
        },
        "reposVilleAide-texte-4" : {
            fr : "&laquo; Tiens&nbsp;! Prends cette <span key='epee'>épée</span> et ce <span key='bouclierFer'>bouclier en fer</span>&nbsp;!",
            en : "&laquo; Here you go! Take this <span key='epee'>sword</span> and this <span key='bouclierFer'>iron shield</span>!"
        },
        "reposVilleAide-texte-5" : {
            fr : "Ils pourront t&rsquo;être utiles. &raquo;",
            en : "They can be useful. &raquo;"
        },

        "reposVilleAide1-texte-1" : {
            fr : "Vous saisissez <span key='epee'>l&rsquo;épée</span> et mangez un morceau pour vous préparer.",
            en : "You grab the <span key='epee'>sword</span> and eat something to prepare yourself."
        },
        "reposVilleAide1-texte-2" : {
            fr : "Ces sales monstres n&rsquo;ont qu&rsquo;à bien se tenir&nbsp;!",
            en : "These dirty monsters only have to behave themselves!"
        },
        "reposVilleAide1-texte-3" : {
            fr : "Fier de votre nouvelle arme, vous partez en direction du marais&hellip;",
            en : "Proud of your new weapon, you leave in direction of the swamp&hellip;"
        },

        "reposVilleAide2-texte-1" : {
            fr : "Un vieux monsieur s&rsquo;approche en toussotant :",
            en : "An elderly gentleman approaches by coughing:"
        },
        "reposVilleAide2-texte-2" : {
            fr : "&laquo; Prends au moins cette <span key='potionSante'>potion</span>, mon petit&hellip; ",
            en : "&laquo; Take at least this <span key='potionSante'>potion</span>, my little&hellip; "
        },
        "reposVilleAide2-texte-3" : {
            fr : "Tu ne peux pas y aller sans rien&nbsp;! &raquo;",
            en : "You can't go without nothing! &raquo;"
        },
        "reposVilleAide2-texte-4" : {
            fr : "Vous prenez la fiole et mangez un morceau.",
            en : "You take the vial and eat something."
        },
        "reposVilleAide2-texte-5" : {
            fr : "Une fois prêt, vous vous mettez en route pour le marais&hellip;",
            en : "Once you are ready, you set off for the swamp&hellip;"
        },

        "reposVilleRefus-texte-1" : {
            fr : "&laquo; Dans ce cas, allez-vous-en&nbsp;!",
            en : "&laquo; Then get out of here!"
        },
        "reposVilleRefus-texte-2" : {
            fr : "Nous n&rsquo;avons pas besoin de lâches dans nos rangs&nbsp;! &raquo;",
            en : "We don't need cowards in our ranks! &raquo;"
        },
        "reposVilleRefus-texte-3" : {
            fr : "Les <span key='garde'>gardes</span> sortent leurs épées et vous pousse vers le marais&hellip;",
            en : "The <span key='garde'>guards</span> take out their swords and push you towards the swamp&hellip;"
        },

        "reposVilleTraitre-texte-1" : {
            fr : "Certains <span key='villageois'>villageois</span> s&rsquo;avancent vers vous :",
            en : "Some <span key='villageois'>villagers</span> are coming towards you:"
        },
        "reposVilleTraitre-texte-2" : {
            fr : "&laquo; Traître&nbsp;! C&rsquo;est toi qui as amené la mort sur nous&nbsp;!",
            en : "&laquo; You traitor! You're the one who brought death on us!"
        },
        "reposVilleTraitre-texte-3" : {
            fr : "Tu vas nous le payer&nbsp;! Rends-nous nos enfants&nbsp;! &raquo;",
            en : "You're gonna pay for it! Give us our children back! &raquo;"
        },
        "reposVilleTraitre-texte-4" : {
            fr : "Ils se jettent sur vous&hellip;",
            en : "They throw themselves at you&hellip;"
        },

        "reposVilleTraitre2-texte-1" : {
            fr : "Vous vous dépêtrez du dernier <span key='villageois'>villageois</span> qui a osé vous défier.",
            en : "You'll be relieving yourself of the last <span key='villageois'>villager</span> who dared to defy you."
        },
        "reposVilleTraitre2-texte-2" : {
            fr : "Ces insectes ne valent rien&hellip; Mais, peut-être possèdent-ils quelques",
            en : "These insects are no good-for-nothing&hellip; But, maybe they have some"
        },
        "reposVilleTraitre2-texte-3" : {
            fr : "objets de valeur dans leurs chaumières&nbsp;?",
            en : "valuable objects in their cottages?"
        },

        "reposVilleTraitre3-texte-1" : {
            fr : "Vous vous en allez vers le marais.",
            en : "You're going to the swamp."
        },
        "reposVilleTraitre3-texte-2" : {
            fr : "Ces crétins n&rsquo;ont eu que ce qu&rsquo;ils méritaient&hellip;",
            en : "These cretins only got what they deserved&hellip;"
        },
        "reposVilleTraitre3-texte-3" : {
            fr : "En chemin, vous distinguez des traces sur le sol.",
            en : "On the way, you can see traces on the ground."
        },

        "villeFouilleReussite1-texte-1" : {
            fr : "Vous fouillez les maisons en flammes et trouvez une <span key='potionSante'>potion de santé</span>",
            en : "You search the burning houses and find a <span key='potionSante'>health potion</span>."
        },
        "villeFouilleReussite1-texte-2" : {
            fr : "dans celle du docteur.",
            en : "in the doctor's house."
        },
        "villeFouilleReussite1-texte-3" : {
            fr : "Cela pourra sans doute vous être utile&hellip;",
            en : "This will undoubtedly be useful to you&hellip;"
        },

        "villeFouilleReussite2-texte-1" : {
            fr : "Vous fouillez les maisons en flammes et trouvez une belle <span key='epee'>épée</span>",
            en : "You search the burning houses and find a nice <span key='epee'>sword</span>."
        },
        "villeFouilleReussite2-texte-2" : {
            fr : "et un grand <span key='bouclierFer'>bouclier en fer</span> dans celle du forgeron.",
            en : "and a large iron shield in the blacksmith's house."
        },

        "villeFouilleReussite3-texte-1" : {
            fr : "C&rsquo;est votre jour de chance&nbsp;!",
            en : "This is your lucky day!"
        },
        "villeFouilleReussite3-texte-2" : {
            fr : "En fouillant les maisons en flammes, vous trouvez une belle <span key='epee'>épée</span>",
            en : "When you search the burning houses, you find a beautiful <span key='epee'>sword</span>."
        },
        "villeFouilleReussite3-texte-3" : {
            fr : "ainsi qu'une <span key='potionSante'>potion de santé</span>",
            en : "and a <span key='potionSante'>health potion</span>."
        },

        "villeFouilleEchec-texte-1" : {
            fr : "Malheureusement, les maisons sont vides&hellip;",
            en : "Unfortunately, the houses are empty&hellip;"
        },
        "villeFouilleEchec-texte-2" : {
            fr : "Ces crétins n&rsquo;ont rien laissé&hellip;",
            en : "Those cretins didn't leave anythinghellip;"
        },
        "villeFouilleEchec-texte-3" : {
            fr : "Vous continuez votre route.",
            en : "You're on your way back."
        },

        "villeFouilleEchec2-texte-1" : {
            fr : "En fouillant une des huttes,",
            en : "Searching one of the huts,"
        },
        "villeFouilleEchec2-texte-2" : {
            fr : "vous tombez nez à nez avec une <span key='grosseGoule'>grosse goule</span>&nbsp;!",
            en : "you're falling face to face with a <span key='grosseGoule'>big ghoul</span>!"
        },
        "villeFouilleEchec2-texte-3" : {
            fr : "Sauvez votre peau avant qu&rsquo;elle ne vous la mange&nbsp;!",
            en : "Save your skin before it eats you!"
        },

        "villeFouilleSuite-texte-1" : {
            fr : "En explorant le village, vous remarquez",
            en : "As you explore the village, you will notice"
        },
        "villeFouilleSuite-texte-2" : {
            fr : "que des traces de pas s&rsquo;enfoncent dans le marais&hellip;",
            en : "that footprints sink into the swamp..."
        },
        "villeFouilleSuite-texte-3" : {
            fr : "Peut-être un fuyard&nbsp;?",
            en : "Maybe a deserter?"
        },

        "reposVilleRefus2-texte-1" : {
            fr : "Vous vous en allez vers le marais.",
            en : "You're going to the swamp."
        },
        "reposVilleRefus2-texte-2" : {
            fr : "Ces crétins n&rsquo;auront cas se débrouiller seuls&hellip;",
            en : "Those cretins won't be able to figure it out on their own..."
        },
        "reposVilleRefus2-texte-3" : {
            fr : "En chemin, vous distinguez des traces sur le sol.",
            en : "On the way, you can see traces on the ground."
        },

        "retourVille2-texte-1" : {
            fr : "Le <span key='roiAraignee'>roi des araignées</span> dévore de nombreuses <span key='goule'>goules</span> autour de vous.",
            en : "The <span key='roiAraignee'>king of spiders</span> devours many <span key='goule'>ghouls</span> around you."
        },
        "retourVille2-texte-2" : {
            fr : "Les paysans sont partis se cacher dans leurs chaumières en ruine",
            en : "The peasants have gone to hide in their ruined cottages"
        },
        "retourVille2-texte-3" : {
            fr : "et quelques <span key='garde'>gardes</span> se préparent déjà à attaquer votre nouvel allié&hellip;",
            en : "and some <span key='garde'>guards</span> are already preparing to attack your new ally."
        },

        "retourVilleAideRoi-texte-1" : {
            fr : "L&rsquo;un des <span key='garde'>gardes</span> s&rsquo;adresse à vous :",
            en : "One of the <span key='garde'>guards</span> ask for you:"
        },
        "retourVilleAideRoi-texte-2" : {
            fr : "&laquo; Que dites-vous&nbsp;? Il faut tuer ce monstre&nbsp;! &raquo;",
            en : "&laquo; What are you saying? We have to kill that monster! &raquo;"
        },
        "retourVilleAideRoi-texte-3" : {
            fr : "Vous insistez :",
            en : "You insist :"
        },
        "retourVilleAideRoi-texte-4" : {
            fr : "&laquo; Non&nbsp;! C&rsquo;est le <span key='roiAraignee'>roi des araignées</span>&nbsp;! Il est venu pour nous aider&nbsp;! &raquo;",
            en : "&laquo; No! He's the <span key='roiAraignee'>king of spiders</span>! He came to help us! &raquo;"
        },

        "retourVilleAideRoi2-texte-1" : {
            fr : "Pendant votre discussion, la bataille continuait.",
            en : "During your discussion, the battle continued."
        },
        "retourVilleAideRoi2-texte-2" : {
            fr : "Le <span key='roiAraignee'>roi des araignées</span>, après avoir détruit les dernières <span key='goule'>goules</span>,",
            en : "The <span key='roiAraignee'>king of spiders</span>, after destroying the last <span key='goule'>ghouls</span>,"
        },
        "retourVilleAideRoi2-texte-3" : {
            fr : "s&rsquo;est enfoncé dans le marais à la recherche d&rsquo;autres proies.",
            en : "went deep into the swamp in search of other prey."
        },

        "retourVilleAideRoi3-texte-1" : {
            fr : "&laquo; Trop tard&hellip; Il s&rsquo;est enfui&hellip; Vous là&nbsp;! Qu&rsquo;est-ce qui vous a pris&nbsp;?",
            en : "&laquo; Too late&hellip; He ran away&hellip; You there! What the hell was that about?"
        },
        "retourVilleAideRoi3-texte-2" : {
            fr : "Les morts nous ont attaqués et ils ont emportés nos enfants dans la forêt&nbsp;! &raquo;",
            en : "The dead have attacked us and they took our children into the forest! &raquo;"
        },

        "retourVilleAideGarde-texte-1" : {
            fr : "Vous achevez le <span key='roiAraignee'>roi araignée</span> d&rsquo;un coup.",
            en : "You're killing the <span key='roiAraignee'>spider king</span> all of a sudden."
        },
        "retourVilleAideGarde-texte-2" : {
            fr : "Les <span key='villageois'>villageois</span> commencent déjà à sortir de leurs maisons, rassurés.",
            en : "The villagers are already starting to leave their homes, reassured."
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});