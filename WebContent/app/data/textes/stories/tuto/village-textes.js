'use strict';
define([], function(){
	var data = {
        "reposVillage2-texte-1" : {
        	fr : "Vous accourez dans le village, au cœur de la bataille.",
        	en : "You rush to the village, at the heart of the battle.",
        	eo : "Vi kuras en la vilaĝon, en la koro de la batalo."
        },
        "reposVillage2-texte-2" : {
        	fr : "De nombreuses <span key='goule'>goules</span> tentent de dévorer les paysans qui se battent de leur mieux.",
        	en : "Many <span key='goule'>ghouls</span> try to devour the peasants who fight as best as they can.",
        	eo : "Multaj <span key='goule'>guloj</span> provas vori la kamparanojn, kiuj batalas iliaj plej bone."
        },
        "reposVillage2-texte-3" : {
        	fr : "&laquo;&nbsp;Du nerf&nbsp;! Défendez le village&nbsp;!&nbsp;&raquo; hurle un <span key='garde'>garde</span> non loin de vous.",
        	en : "&laquo;&nbsp;Put some effort into it! Defend the village!&nbsp;&raquo; screams a <span key='garde'>guard</span> not far from you.",
        	eo : "&laquo;&nbsp;Ek! Defendu la vilaĝon!&nbsp;&raquo; krias <span key='garde'>gardisto</span> prokisma de vi."
        },

        "reposVillage3-texte-1" : {
        	fr : "Vous tuez la dernière <span key='goule'>goule</span> face à vous et retournez voir les <span key='garde'>gardes</span>&nbsp;:",
        	en : "You kill the last <span key='goule'>ghoul</span> in front of you and go back to the <span key='garde'>guards</span>:",
        	eo : "Vi mortigas la lastan <span key='goule'>gulon</span> fronte al vi kaj vi revenas al la <span key='garde'>gardistoj</span>:"
        },
        "reposVillage3-texte-2" : {
        	fr : "&laquo;&nbsp;Que s'est-il passé&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What happened?&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Kio okazis?&nbsp;&raquo;"
        },
        "reposVillage3-texte-3" : {
        	fr : "Un des <span key='garde'>gardes</span> se tourne vers vous&nbsp;:",
        	en : "One of the <span key='garde'>guards</span> turns to you:",
        	eo : "Unu el la <span key='garde'>gardistoj</span> turniĝas al vi:"
        },
        "reposVillage3-texte-4" : {
        	fr : "&laquo;&nbsp;Les morts&nbsp;! Ils nous ont attaqués&nbsp;!",
        	en : "&laquo;&nbsp;The dead! They attacked us!",
        	eo : "&laquo;&nbsp;La mortintoj! Ili atakis nin!"
        },
        "reposVillage3-texte-5" : {
        	fr : "Ils ont emporté les enfants dans la forêt&nbsp;&raquo;",
        	en : "They took the children into the forest&nbsp;&raquo;",
        	eo : "Ili forportis la infanojn en la arbaro&nbsp;&raquo;"
        },

        "reposVillage4-texte-1" : {
        	fr : "&laquo;&nbsp;Malheureusement, nous devons nous occuper des blessés.",
        	en : "&laquo;&nbsp;Unfortunately, we have to take care of the wounded persons.",
        	eo : "&laquo;&nbsp;Bedaŭrinde, ni devas flegi la vunditojn."
        },
        "reposVillage4-texte-2" : {
        	fr : "Vous avez l'air de savoir vous battre&nbsp;!",
        	en : "You look like you know how to fight!",
        	eo : "Ŝajne vi scias batali!"
        },
        "reposVillage4-texte-3" : {
        	fr : "Vous devez les secourir&nbsp;! Demandez de l'aide aux autres <span key='villageois'>villageois</span>&nbsp;!&nbsp;&raquo;",
        	en : "You have to help them! Ask other <span key='villageois'>villagers</span> for help!&nbsp;&raquo;",
        	eo : "Vi devas sukuri ilin! Petu helpon al la aliaj <span key='villageois'>vilaĝanoj</span>!&nbsp;&raquo;"
        },

        "reposVillageAide-texte-1" : {
        	fr : "Vous hochez bravement la tête et",
        	en : "You bravely nod and",
        	eo : "Vi brave kapjesas kaj"
        },
        "reposVillageAide-texte-2" : {
        	fr : "vous vous dirigez vers les <span key='villageois'>villageois</span> paniqués.",
        	en : "you head for the panicked <span key='villageois'>villagers</span>.",
        	eo : "vi iras al la panikitaj <span key='villageois'>vilaĝanoj</span>."
        },
        "reposVillageAide-texte-3" : {
        	fr : "John, le forgeron, s'approche de vous l'air menaçant&nbsp;:",
        	en : "John, the blacksmith, approaches you, looking threatening:",
        	eo : "John, la forĝisto, alproskimiĝas al vin, ŝajnas minaca:"
        },
        "reposVillageAide-texte-4" : {
        	fr : "&laquo;&nbsp;Tiens&nbsp;! Prends cette <span key='epee'>épée</span> et ce <span key='bouclierFer'>bouclier en fer</span>&nbsp;!",
        	en : "&laquo;&nbsp;Here! Take this <span key='epee'>sword</span> and this <span key='bouclierFer'>iron shield</span>!",
        	eo : "&laquo;&nbsp;Jen! Prenu ĉi tiun <span key='epee'>glavon</span> kaj ĉi tiun <span key='bouclierFer'>ŝildon el fero</span>!"
        },
        "reposVillageAide-texte-5" : {
        	fr : "Ils pourront t'être utiles.&nbsp;&raquo;",
        	en : "They may be useful.&nbsp;&raquo;",
        	eo : "Ili estos utilaj al vi.&nbsp;&raquo;"
        },

        "reposVillageAide1-texte-1" : {
        	fr : "Vous saisissez <span key='epee'>l'épée</span> et mangez un morceau pour vous préparer.",
        	en : "You grasp the <span key='epee'>sword</span> and eat something to prepare yourself.",
        	eo : "Vi prenas la <span key='epee'>glavon</span> kaj iomete manĝas por prepari vin."
        },
        "reposVillageAide1-texte-2" : {
        	fr : "Ces sales monstres n'ont qu'à bien se tenir&nbsp;!",
        	en : "These dirty monsters only have to behave themselves!",
        	eo : "Tiuj monstroj devos bone konduti!"
        },
        "reposVillageAide1-texte-3" : {
        	fr : "Fier de votre nouvelle arme, vous partez en direction du marais&hellip;",
        	en : "Proud of your new weapon, you go in direction of the swamp&hellip;",
        	eo : "Fiera pri via nova armilo, vi iras en direkton de la marĉo&hellip;"
        },

        "reposVillageAide2-texte-1" : {
        	fr : "Un vieux monsieur s'approche en toussotant&nbsp;:",
        	en : "An old man approaches by coughing:",
        	eo : "Maljuna homo alproksimiĝas tusante:"
        },
        "reposVillageAide2-texte-2" : {
        	fr : "&laquo;&nbsp;Prends au moins cette <span key='potionSante'>potion</span>, mon petit&hellip; ",
        	en : "&laquo;&nbsp;Take at least this <span key='potionSante'>potion</span>, young man&hellip; ",
        	eo : "&laquo;&nbsp;Almenaŭ prenu ĉi tiun <span key='potionSante'>pocion</span>, mia kara&hellip; "
        },
        "reposVillageAide2-texte-3" : {
        	fr : "Tu ne peux pas y aller sans rien&nbsp;!&nbsp;&raquo;",
        	en : "You can't go without taking anything!&nbsp;&raquo;",
        	eo : "Vi ne povas iri tie sen io!&nbsp;&raquo;"
        },
        "reposVillageAide2-texte-4" : {
        	fr : "Vous prenez la fiole et mangez un morceau.",
        	en : "You take the flask and eat something.",
        	eo : "Vi prenas la flakonon kaj iomete manĝas."
        },
        "reposVillageAide2-texte-5" : {
        	fr : "Une fois prêt, vous vous mettez en route pour le marais&hellip;",
        	en : "Once you are ready, you set off for the swamp&hellip;",
        	eo : "Kiam vi pretas, vi ekiras al la marĉo&hellip;"
        },

        "reposVillageRefus-texte-1" : {
        	fr : "&laquo;&nbsp;Dans ce cas, allez-vous-en&nbsp;!",
        	en : "&laquo;&nbsp;Then, go away!",
        	eo : "&laquo;&nbsp;Tiuokaze, foriru!"
        },
        "reposVillageRefus-texte-2" : {
        	fr : "Nous n'avons pas besoin de lâches dans nos rangs&nbsp;!&nbsp;&raquo;",
        	en : "We don't need cowards among us!&nbsp;&raquo;",
        	eo : "Ni ne bezonas timulojn inter ni!&nbsp;&raquo;"
        },
        "reposVillageRefus-texte-3" : {
        	fr : "Les <span key='garde'>gardes</span> sortent leurs épées et vous pousse vers le marais&hellip;",
        	en : "The <span key='garde'>guards</span> take out their swords and push you to the swamp&hellip;",
        	eo : "La <span key='garde'>gardistoj</span> prenas iliajn glavojn kaj puŝas vin al la marĉo&hellip;"
        },

        "reposVillageTraitre-texte-1" : {
        	fr : "Certains <span key='villageois'>villageois</span> s'avancent vers vous&nbsp;:",
        	en : "Some <span key='villageois'>villagers</span> approach you:",
        	eo : "Kelkaj <span key='villageois'>vilaĝanoj</span> alproksimiĝas al vi:"
        },
        "reposVillageTraitre-texte-2" : {
        	fr : "&laquo;&nbsp;Traître&nbsp;! C'est toi qui as amené la mort sur nous&nbsp;!",
        	en : "&laquo;&nbsp;Traitor! You're the one who brought death on us!",
        	eo : "&laquo;&nbsp;Perfidulo! Estas vi, kiu alportis morton ĝis ni!"
        },
        "reposVillageTraitre-texte-3" : {
        	fr : "Tu vas nous le payer&nbsp;! Rends-nous nos enfants&nbsp;!&nbsp;&raquo;",
        	en : "You're going to pay for that! Give our children back!&nbsp;&raquo;",
        	eo : "Tion vi bedaŭros! Redonu niajn infanojn!&nbsp;&raquo;"
        },
        "reposVillageTraitre-texte-4" : {
        	fr : "Ils se jettent sur vous&hellip;",
        	en : "They leap on you&hellip;",
        	eo : "Ili ĵetiĝas sur vi&hellip;"
        },

        "reposVillageTraitre2-texte-1" : {
        	fr : "Vous vous dépêtrez du dernier <span key='villageois'>villageois</span> qui a osé vous défier.",
        	en : "You’re getting rid of the last <span key='villageois'>villager</span> who dared to defy you.",
        	eo : "Vi liberiĝas de la lasta <span key='villageois'>vilaĝano</span>, kiu aŭdacis defii vin."
        },
        "reposVillageTraitre2-texte-2" : {
        	fr : "Ces insectes ne valent rien&hellip; Mais, peut-être possèdent-ils quelques",
        	en : "These insects are worthless&hellip; But, perhaps they have some",
        	eo : "Tiuj insektoj valoras nenion&hellip; Sed, eble ili havas kelkajn"
        },
        "reposVillageTraitre2-texte-3" : {
        	fr : "objets de valeur dans leurs chaumières&nbsp;?",
        	en : "valuable objects in their cottages?",
        	eo : "valoraĵojn en iliaj dometoj?"
        },

        "reposVillageTraitre3-texte-1" : {
        	fr : "Vous vous en allez vers le marais.",
        	en : "You're heading for the swamp.",
        	eo : "Vi foriras al la marĉo."
        },
        "reposVillageTraitre3-texte-2" : {
        	fr : "Ces crétins n'ont eu que ce qu'ils méritaient&hellip;",
        	en : "These idiots only got what they deserved&hellip;",
        	eo : "Tiuj stultuloj nur havis, kion ili meritis&hellip;"
        },
        "reposVillageTraitre3-texte-3" : {
        	fr : "En chemin, vous distinguez des traces sur le sol.",
        	en : "On the way, you find some traces on the ground.",
        	eo : "Survoje, vi rimarkas spurojn sur la grundo."
        },

        "villageFouilleReussite1-texte-1" : {
        	fr : "Vous fouillez les maisons en flammes et trouvez une <span key='potionSante'>potion de vie</span>",
        	en : "You search the burning houses and find a <span key='potionSante'>life potion</span>",
        	eo : "Vi esploras la brulantajn domojn kaj trovas <span key='potionSante'>vivopocion</span>"
        },
        "villageFouilleReussite1-texte-2" : {
        	fr : "dans celle du docteur.",
        	en : "in the doctor's one.",
        	eo : "en tiu de la kuracisto."
        },
        "villageFouilleReussite1-texte-3" : {
        	fr : "Cela pourra sans doute vous être utile&hellip;",
        	en : "This will certainly be useful to you&hellip;",
        	eo : "Tio sendube estos utila al vi&hellip;"
        },

        "villageFouilleReussite2-texte-1" : {
        	fr : "Vous fouillez les maisons en flammes et trouvez une belle <span key='epee'>épée</span>",
        	en : "You search the burning houses and find a nice <span key='epee'>sword</span>",
        	eo : "Vi esploras la brulantajn domojn kaj trovas belan <span key='epee'>glavon</span>"
        },
        "villageFouilleReussite2-texte-2" : {
        	fr : "et un grand <span key='bouclierFer'>bouclier en fer</span> dans celle du forgeron.",
        	en : "and a large <span key='bouclierFer'>iron shield</span> in the blacksmith's one.",
        	eo : "kaj grandan <span key='bouclierFer'>ŝildon el fero</span> en tiu de la forĝisto."
        },

        "villageFouilleReussite3-texte-1" : {
        	fr : "C'est votre jour de chance&nbsp;!",
        	en : "It's your lucky day!",
        	eo : "Tio estas via bonŝanca tago!"
        },
        "villageFouilleReussite3-texte-2" : {
        	fr : "En fouillant les maisons en flammes, vous trouvez une belle <span key='epee'>épée</span>",
        	en : "By searching the burning houses, you find a beautiful <span key='epee'>sword</span>",
        	eo : "Esplorante la brulantajn domojn, vi trovas belan <span key='epee'>glavon</span>"
        },
        "villageFouilleReussite3-texte-3" : {
        	fr : "ainsi qu'une <span key='potionSante'>potion de vie</span>",
        	en : "and a <span key='potionSante'>life potion</span>.",
        	eo : "kaj <span key='potionSante'>vivopocion</span>."
        },

        "villageFouilleEchec-texte-1" : {
        	fr : "Malheureusement, les maisons sont vides&hellip;",
        	en : "Unfortunately, the houses are empty&hellip;",
        	eo : "Bedaŭrinde, la domoj estas malplenaj&hellip;"
        },
        "villageFouilleEchec-texte-2" : {
        	fr : "Ces crétins n'ont rien laissé&hellip;",
        	en : "Those cretins didn't leave anythinghellip;",
        	eo : "Tiuj stultuloj lasis nenionhellip;"
        },
        "villageFouilleEchec-texte-3" : {
        	fr : "Vous continuez votre route.",
        	en : "You continue on your way.",
        	eo : "Vi daŭrigas vian vojon."
        },

        "villageFouilleEchec2-texte-1" : {
        	fr : "En fouillant une des huttes,",
        	en : "By searching one of the huts,",
        	eo : "Esplorante unu el la kabanoj,"
        },
        "villageFouilleEchec2-texte-2" : {
        	fr : "vous tombez nez à nez avec une <span key='grosseGoule'>grosse goule</span>&nbsp;!",
        	en : "you're coming face to face with a <span key='grosseGoule'>big ghoul</span>!",
        	eo : "vi falas vidalvide kun span key='grosseGoule'>gulego</span>!"
        },
        "villageFouilleEchec2-texte-3" : {
        	fr : "Sauvez votre peau avant qu'elle ne vous la mange&nbsp;!",
        	en : "Save your skin before it eats yours!",
        	eo : "Savu vian haŭton antaŭ ol ŝi manĝas ĝin!"
        },

        "villageFouilleSuite-texte-1" : {
        	fr : "En explorant le village, vous remarquez",
        	en : "As you explore the village, you notice",
        	eo : "Esplorante la vilaĝon, vi rimarkas,"
        },
        "villageFouilleSuite-texte-2" : {
        	fr : "que des traces de pas s'enfoncent dans le marais&hellip;",
        	en : "that steps traces sink into the swamp&hellip;",
        	eo : "ke la piedospuroj foririĝas en la marĉo&hellip;"
        },
        "villageFouilleSuite-texte-3" : {
        	fr : "Peut-être un fuyard&nbsp;?",
        	en : "Maybe a deserter?",
        	eo : "Eble fuĝanto?"
        },

        "reposVillageRefus2-texte-1" : {
        	fr : "Vous vous en allez vers le marais.",
        	en : "You're heading for the swamp.",
        	eo : "Vi foriras al la marĉo."
        },
        "reposVillageRefus2-texte-2" : {
        	fr : "Ces crétins n'auront cas se débrouiller seuls&hellip;",
        	en : "Those cretins will have to get by on their own&hellip;",
        	eo : "Tiuj stultuloj elturniĝos solaj&hellip;"
        },
        "reposVillageRefus2-texte-3" : {
        	fr : "En chemin, vous distinguez des traces sur le sol.",
        	en : "On the way, you notice traces on the ground.",
        	eo : "Survoje, vi rimarkas spurojn sur la grundo."
        },

        "retourVillage2-texte-1" : {
        	fr : "Le <span key='roiAraignee'>roi des araignées</span> dévore de nombreuses <span key='goule'>goules</span> autour de vous.",
        	en : "The <span key='roiAraignee'>king of spiders</span> devours many <span key='goule'>ghouls</span> around you.",
        	eo : "La <span key='roiAraignee'>reĝo de araneoj</span> voras multajn gulojn ĉirkaŭ vi."
        },
        "retourVillage2-texte-2" : {
        	fr : "Les paysans sont partis se cacher dans leurs chaumières en ruine",
        	en : "The peasants left to hide in their ruined cottages",
        	eo : "La kamparanoj foriris kaŝiĝi en iliajn ruinaj dometojn"
        },
        "retourVillage2-texte-3" : {
        	fr : "et quelques <span key='garde'>gardes</span> se préparent déjà à attaquer votre nouvel allié&hellip;",
        	en : "and some <span key='garde'>guards</span> are preparing to attack your new ally&hellip;",
        	eo : "kaj kelkaj gardistoj jam prepariĝas por ataki vian novan aliancanon&hellip;"
        },

        "retourVillageAideRoi-texte-1" : {
        	fr : "L'un des <span key='garde'>gardes</span> s'adresse à vous&nbsp;:",
        	en : "One of the <span key='garde'>guards</span> ask for you:",
        	eo : "Unu el la gardistoj alparolas vin:"
        },
        "retourVillageAideRoi-texte-2" : {
        	fr : "&laquo;&nbsp;Que dites-vous&nbsp;? Il faut tuer ce monstre&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What are you talking about? We have to kill that monster!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Kion vi diras? Ni devas mordigi ĉi tiun monstron!&nbsp;&raquo;"
        },
        "retourVillageAideRoi-texte-3" : {
        	fr : "Vous insistez&nbsp;:",
        	en : "You insist:",
        	eo : "Vi insistas:"
        },
        "retourVillageAideRoi-texte-4" : {
        	fr : "&laquo;&nbsp;Non&nbsp;! C'est le <span key='roiAraignee'>roi des araignées</span>&nbsp;! Il est venu pour nous aider&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;No! It's the <span key='roiAraignee'>king of spiders</span>! He came to help us!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Ne! Tiu estas la <span key='roiAraignee'>reĝo de araneoj</span>! Li venis por helpi nin!&nbsp;&raquo;"
        },

        "retourVillageAideRoi2-texte-1" : {
        	fr : "Pendant votre discussion, la bataille continuait.",
        	en : "During your discussion, the battle continued.",
        	eo : "Dum via diskuto, la batalo daŭris."
        },
        "retourVillageAideRoi2-texte-2" : {
        	fr : "Le <span key='roiAraignee'>roi des araignées</span>, après avoir détruit les dernières <span key='goule'>goules</span>,",
        	en : "The <span key='roiAraignee'>king of spiders</span>, after destroying the last <span key='goule'>ghouls</span>,",
        	eo : "La <span key='roiAraignee'>reĝo de araneoj</span>, mortiginta la lastan <span key='goule'>gulojn</span>"
        },
        "retourVillageAideRoi2-texte-3" : {
        	fr : "s'est enfoncé dans le marais à la recherche d'autres proies.",
        	en : "sank into the swamp in search of others preys.",
        	eo : "foriris en la marĉo por serĉi aliajn predojn."
        },

        "retourVillageAideRoi3-texte-1" : {
        	fr : "&laquo;&nbsp;Trop tard&hellip; Il s'est enfui&hellip; Vous là&nbsp;! Qu'est-ce qui vous a pris&nbsp;?",
        	en : "&laquo;&nbsp;Too late&hellip; He ran away&hellip; You there! What the hell was wrong with you?",
        	eo : "&laquo;&nbsp;Tro malfrue&hellip; Li fuĝis&hellip; Vi tie! Kion vi faras?"
        },
        "retourVillageAideRoi3-texte-2" : {
        	fr : "Les morts nous ont attaqués et ils ont emportés nos enfants dans la forêt&nbsp;!&nbsp;&raquo;",
        	en : "The dead attacked us and they took our children into the forest!&nbsp;&raquo;",
        	eo : "La mortintoj atakis nin kaj forportis la infanojn en la arbaro!&nbsp;&raquo;"
        },

        "retourVillageAideGarde-texte-1" : {
        	fr : "Vous achevez le <span key='roiAraignee'>roi araignée</span> d'un coup.",
        	en : "You're finishing the <span key='roiAraignee'>king of spiders</span> with one stroke.",
        	eo : "Vi donas al la  <span key='roiAraignee'>reĝo de la araneojn</span> la fatalan baton."
        },
        "retourVillageAideGarde-texte-2" : {
        	fr : "Les <span key='villageois'>villageois</span> commencent déjà à sortir de leurs maisons, rassurés.",
        	en : "The <span key='villageois'>villagers</span> already start to leave their homes, reassured.",
        	eo : "La <span key='villageois'>vilaĝanoj</span> jam komencas eliri el iliaj domoj, trankviliĝitaj."
        }
	};
	
	return {
        name : function() {
            return "Tuto Village.js";
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