'use strict';
define([], function(){
	var data = {
	    "quete1" : {
        	fr : "La Quête Des Poulets",
        	en : "The Chickens Quest",
        	eo : "La Kokidoj Defio"
        },

        "quete1-description-1" : {
        	fr : "Toutes mes poules ont disparu&nbsp;!",
        	en : "All my chickens have disappeared!",
        	eo : "Ĉiuj miaj kokinoj malaperis!"
        },
        "quete1-description-2" : {
        	fr : "Belle récompense à qui me les ramènera.",
        	en : "Great reward for whom will bring them back to me.",
        	eo : "Bona rekompenco al kiu retrovos ilin."
        },
        "quete1-description-3" : {
        	fr : "PS&nbsp;:&nbsp;vivantes si possible, merci&hellip;",
        	en : "PS: alive please, thank you&hellip;",
        	eo : "PS: vivantaj bonvolu, dankon&hellip;"
        },

        /**
        * Début
        **/
        "quete1-debut-texte-1" : {
        	fr : "Une belle quête bien facile&nbsp;!",
        	en : "A nice quest quite easy!",
        	eo : "Bela tre facila defio!"
        },
        "quete1-debut-texte-2" : {
        	fr : "Intéressé par une si bonne affaire, vous décrochez l'annonce et vous rendez aux abords de la ferme.",
        	en : "Interested in such a good deal, you take the ad down and go to the outskirts of the farm.",
        	eo : "Interesata pri tia bona afero, vi dekroĉas la anoncon kaj vi iras al la ĉirkaŭaĵo de la fermo."
        },
        "quete1-debut-texte-3" : {
        	fr : "Tout ceci ne devrait être qu'une simple formalité pour un héros de votre envergure&hellip;",
        	en : "All of this should be a simple formality for a great hero like you&hellip;",
        	eo : "̈Ĉio ĉi devus esti simpla formalaĵo por heroo tiel vi&hellip;"
        },

        "quete1-debut-2-texte-1" : {
        	fr : "Grâce à un petit raccourci bien pratique, vous arrivez bien vite devant la chaumière de paille.",
        	en : "Thanks to a little shortcut, you quickly arrive in front of the straw cottage.",
        	eo : "Danke al eta ŝparvojo bone pratika, vi rapida alvenas antaŭ la kabano el pajlo."
        },
        "quete1-debut-2-texte-2" : {
        	fr : "La basse-cour, lieu du crime, doit encore être flambante d'indices.",
        	en : "The farmyard, the crime scene, must still be full of clues.",
        	eo : "La birdokorto, krimloko, devas esti ankoraŭ indicoplena.j"
        },
        "quete1-debut-2-texte-3" : {
        	fr : "Mais peut-être vaudrait-il mieux commencer par interroger votre client&nbsp;?",
        	en : "But perhaps, it would be better to start by asking your client?",
        	eo : "Sed, eble ke estus pli bone komenci pridemandi via kliento?"
        },

        /**
        * Debut - Question au fermier
        **/
        "quete1-debut-fermier-texte-1" : {
        	fr : "Après avoir retiré la poussière de votre tunique, vous frappez à la porte du pauvre fermier, plein d'assurance.",
        	en : "After pulling the dust out of your tunic, you knock on the poor farmer’s door, full of self-confidence.",
        	eo : "Post foriginta la polvon sur vian tunikon, vi frapas al la pordo de la povra farmisto, plena je memfido."
        },
        "quete1-debut-fermier-texte-2" : {
        	fr : "Un gros bonhomme tout sale ouvre en trombe et vous toise de haut en bas.",
        	en : "A big dirty man opens the door like a shot and looks at you up and down.",
        	eo : "Malpura dika viro malfermas la pordo bruske kaj rigardegas vin."
        },
        "quete1-debut-fermier-texte-3" : {
        	fr : "&laquo;&nbsp;Ouais, c'est pourquoi&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Yeah, it’s for what?&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Jes, kio estas?&nbsp;?&nbsp;&raquo;"
        },

        "quete1-debut-fermier-2-texte-1" : {
        	fr : "&laquo;&nbsp;Alors c'est toi qui vas retrouver mes <span key='poulet'>poulettes</span>&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Oh, so it’s you who’s going to find my <span key='poulet'>chickens</span>?&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Ho, nu tiu estas vi, kiu iras trovi miajn <span key='poulet'>kokidinojn</span>?&nbsp;&raquo;"
        },
        "quete1-debut-fermier-2-texte-2" : {
        	fr : "Il n'a pas l'air convaincu. Après un crachat sur le côté, il continue :",
        	en : "He doesn’t seem convinced. After a spit, he continues:",
        	eo : "Li ne aspektas konvinkita. Post kraĉaĵo flanke, li daŭrigas:"
        },
        "quete1-debut-fermier-2-texte-3" : {
        	fr : "&laquo;&nbsp;T'as pas l'air très futé, mais tu peux faire l'affaire.",
        	en : "&laquo;&nbsp;You don’t seem very smart, but you can do the job.",
        	eo : "&laquo;&nbsp;Vi ne aspektas tre ruza, sed vi povas fari la aferon."
        },
        "quete1-debut-fermier-2-texte-4" : {
        	fr : "T'auras ta récompense quand tu les auras retrouvées, pas avant&nbsp;!&nbsp;&raquo;",
        	en : "You’ll get the reward when you find them, not before!&nbsp;&raquo;",
        	eo : "Vi havos la rekompencon, kiam vi estas trovota ilin, ne antaŭ!&nbsp;&raquo;"
        },

        "quete1-debut-fermier-3-texte-1" : {
        	fr : "Toujours intéressé par l'idée que cet or soit dans votre poche, vous commencez les interrogatoires.",
        	en : "Still interested in the thought of this gold in your pocket, you start the questioning.",
        	eo : "Ĉiam interesata pri la ideo, ke tiu oro estu en via poŝo, vi komencas la pridemandadoj."
        },
        "quete1-debut-fermier-3-texte-2" : {
        	fr : "&laquo;&nbsp;Elles se sont complètement évaporées dans la nuit, j'ai rien pu voir&nbsp;!",
        	en : "&laquo;&nbsp;They’ve all disappeared in the night, I couldn’t see anything!",
        	eo : "&laquo;&nbsp;Ili komplete forvaporiĝis nokte, mi nenion povis vidi!"
        },
        "quete1-debut-fermier-3-texte-3" : {
        	fr : "M'étonnerait pas qu'elles se soient perdues dans les champs, gueulardes comme elles sont&hellip;&nbsp;&raquo;",
        	en : "I wouldn’t be surprised that they got lost in the fields, gluttonous like they are&hellip;&nbsp;&raquo;",
        	eo : "Tio ne surprizus min, ke ili estus perdiĝitaj en la kampoj, glutemaj kiel ili estas&hellip;&nbsp;&raquo;"
        },

        "quete1-debut-fermier-4-texte-1" : {
        	fr : "Le fermier commence à s'impatienter.",
        	en : "The farmer starts to get impatient.",
        	eo : "La farmisto komencas senpacienciĝi. "
        },
        "quete1-debut-fermier-4-texte-2" : {
        	fr : "&laquo;&nbsp;C'est pas tout ça, mais y'en a qui ont du boulot si tu vois ce que j'veux dire.",
        	en : "&laquo;&nbsp;Well, some people have work to do if you see what I mean.",
        	eo : "&laquo;&nbsp;Nu, mi havas laboron se vi komprenas, kion mi celas."
        },
        "quete1-debut-fermier-4-texte-3" : {
        	fr : "Retrouve mes petites et t'auras ton or&nbsp;!&nbsp;&raquo;",
        	en : "Find my babies and you’ll get your gold!&nbsp;&raquo;",
        	eo : "Trovu miajn etuletojn kaj vi havos viajn oron&nbsp;!&nbsp;&raquo;"
        },
        "quete1-debut-fermier-4-texte-4" : {
        	fr : "D'un signe de tête, il vous salue et ferme la porte aussi violemment qu'il l'a ouverte.",
        	en : "With a nod, he greets you and closes the door as violently as he opened it before.",
        	eo : "Li kapsalutas vin kaj fermas la pordon, same fortege kiel li malfermis ĝin."
        },

        /**
        * Debut - Chercher des indices
        **/
        "quete1-debut-indice-texte-1" : {
        	fr : "Vous pénétrez dans la basse-cour, à l’affût du moindre signe suspect&hellip;",
        	en : "You enter into the farmyard, on lookup for the smallest suspicious sign&hellip;",
        	eo : "Vi eniras en la birdokordo, gvatanta la plej eta signo suspektebla&hellip;"
        },
        "quete1-debut-indice-texte-2" : {
        	fr : "Le lieu est couvert de boue et sent la vieille chaussette, idéal pour commencer l'enquête&nbsp;!",
        	en : "The place is covered with mud and smells like an old sock, perfect for starting the investigation!",
        	eo : "La loko estas kovrita de ŝlimo kaj malbonodoras la malnovan ŝtrumpeton, ideala por komenci la enketo&nbsp;!"
        },

        "quete1-debut-indice-2-texte-1" : {
        	fr : "Après de longues et pénibles recherches, vous finissez par découvrir un trou dans le grillage.",
        	en : "After long and difficult researches, you finally discover a hole in the fence.",
        	eo : "Post longaj horoj kaj penigaj serĉoj, vi finfine malkovras truon en la barilo."
        },
        "quete1-debut-indice-2-texte-2" : {
        	fr : "Des traces de pattes boueuses s'enfoncent dans les hautes herbes.",
        	en : "Traces of muddy chicken's legs sink into the tall grass.",
        	eo : "La ŝlimaj piedospuroj enprofundiĝas en la altaj herboj."
        },
        "quete1-debut-indice-2-texte-3" : {
        	fr : "C'est certain, les <span key='poulet'>volailles</span> se sont enfuies par là&nbsp;!",
        	en : "For sure, the <span key='poulet'>poultry</span> ran away by that way!",
        	eo : "Tio estas certa, la <span key='poulet'> koltobirdoj</span> fuĝis tie for!"
        },

        "quete1-debut-indice-3-texte-1" : {
        	fr : "Scrupuleusement, la tête au sol, vous suivez la piste des fuyardes.",
        	en : "Scrupulously, your head in front of the ground, you follow the fugitives’ traces.",
        	eo : "Skrupule, la kapo antaŭ la grundo, vi sekvas la spurojn de la fuĝantojn"
        },
        "quete1-debut-indice-3-texte-2" : {
        	fr : "Votre traque s’arrête au cœur d'une gigantesque culture de maïs.",
        	en : "Your tracking stops at the heart of a giant corn crop.",
        	eo : "Via postsekvo haltiĝas al la koro de giganta maizo kultivado."
        },
        "quete1-debut-indice-3-texte-3" : {
        	fr : "Ici, il semblerait qu'elles se soient séparées en 2 groupes&hellip;",
        	en : "Here, it seems like they split in 2 groups&hellip;",
        	eo : "Ĉi tie ŝajnus, ke ili estu disiĝitaj en 2 grupoj&hellip;"
        },

        /**
        * Chercher des indices - Gauche
        **/
        "quete1-debut-indice-gauche-texte-1" : {
        	fr : "Vous suivez les traces de gauche, continuant votre périple à travers champs.",
        	en : "You follow the traces on the left, continuing your journey through the fields.",
        	eo : "Vi sekvas la spurojn maldekstran, daŭriganta via periplo tra kampoj."
        },
        "quete1-debut-indice-gauche-texte-2" : {
        	fr : "Là, devant vous, une clairière semble doucement se dessiner.",
        	en : "Here, in front of you, a clearing appears slowly.",
        	eo : "Tie, antaŭ vi, maldensejo sâjnas aperi malrapide."
        },

        "quete1-debut-indice-gauche-2-texte-1" : {
        	fr : "Vous vous approchez prudemment, prêt à surprendre l'ennemi, quand&hellip;",
        	en : "You approach prudently, ready to surprise the enemy, when&hellip;",
        	eo : "Vi proksimiĝas singarde, preta por surprizi la malamiko, kiam&hellip;"
        },
        "quete1-debut-indice-gauche-2-texte-2" : {
        	fr : "À vos pieds, complètement repue, une des <span key='poulet'>poulettes</span> essaie de s'enfuir en roulant sur elle-même.",
        	en : "At your feet, completely full, one of the <span key='poulet'>chickens</span> tries to flee by rolling on itself.",
        	eo : "Ĉe viaj piedoj, komplete sata, unu el <span key='poulet'>kokidinoj</span> provas fuĝi ruliĝanta sur ŝi mem."
        },
        "quete1-debut-indice-gauche-2-texte-3" : {
        	fr : "Bizarres ces poulets&hellip;",
        	en : "Really weirds these chickens&hellip;",
        	eo : "Strangaj tiuj kokidoj&hellip;"
        },

        "quete1-debut-indice-gauche-3-texte-1" : {
        	fr : "Vous saisissez la gourmande et lui trouvez une place confortable dans votre sac.",
        	en : "You grasp the gourmand and find a comfortable place for it in your bag.",
        	eo : "Vi kaptas la manĝegeman kaj trovas al ŝi komfortan lokon en via sako."
        },
        "quete1-debut-indice-gauche-3-texte-2" : {
        	fr : "Vous êtes maintenant prêt à continuer votre quête.",
        	en : "Now, you’re ready to continue your quest.",
        	eo : "Nun, vi estas preta por daŭrigi via defio."
        },
        "quete1-debut-indice-gauche-3-texte-3" : {
        	fr : "Vers où partaient les autres empreintes déjà&nbsp;?",
        	en : "Where the other traces were going, again?",
        	eo : "Al kie iris la aliaj spuroj jam?"
        },

        /**
        * Chercher indices - droite
        **/
        "quete1-debut-indice-droite-texte-1" : {
        	fr : "Vous suivez les traces de droite jusqu'à ce qu'elles s'estompent sur un chemin de terre.",
        	en : "You follow the traces on the right until they fade off on a dirt road.",
        	eo : "Vi skevas la dekstrajn spurojn ĝis ili vanuas sur la vojo."
        },
        //"quete1-champ-texte-2"

        /**
        * En direction des champs
        **/
        "quete1-champ-texte-1" : {
        	fr : "Vous suivez le sentier de terre, dans la direction indiquée.",
        	en : "You follow the dirt way in the indicate direction.",
        	eo : "Vi sekvas la vojeton en la direkton indikitan."
        },
        "quete1-champ-texte-2" : {
        	fr : "Les paysans, au loin, s’attellent au travail des champs sans vous apporter aucune attention.",
        	en : "The peasants, in the distance, get down to the farm work without giving you any attention.",
        	eo : "La kamparanoj, fore, daŭrigas ilian laboron en la kampoj sen zorgi pri vi."
        },

        "quete1-champ-2-texte-1" : {
        	fr : "Vous prenez votre air le plus vaillant et vous dirigez vers les travailleurs.",
        	en : "You take on your bravest air and head for the workers.",
        	eo : "Vi prenas vian mienon la plej brava kaj vi iras al la laboristoj."
        },
        "quete1-champ-2-texte-2" : {
        	fr : "Ceux-ci, impassibles, ne lèvent même pas la tête.",
        	en : "These, impassive, don’t even raise their heads.",
        	eo : "Ĉi tiuj, flegmaj, mem ne levas la kapon."
        },
        "quete1-champ-2-texte-3" : {
        	fr : "Accueillant&hellip;",
        	en : "Hospitable&hellip;",
        	eo : "Gastama&hellip;"
        },

        "quete1-champ-3-texte-1" : {
        	fr : "Voyant leur manque de réaction, vous toussez pour vous faire remarquer.",
        	en : "Seeing their lack of reaction, you cough to stand out.",
        	eo : "Vidante ilia manko de reakcio, vi tusas por altiri la atento."
        },
        "quete1-champ-3-texte-2" : {
        	fr : "L'un d'eux, sans doute le chef, vous regarde et lance&nbsp;:",
        	en : "One of them, probably the chief, looks at you and fling:",
        	eo : "Unu el ili, sendube la ĉefo, rigardas vin kaj lanĉas:"
        },
        "quete1-champ-3-texte-3" : {
        	fr : "&laquo;&nbsp;Tu veux quoi toi&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;What do you want?&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Kion vi volas?&nbsp;&raquo;"
        },

        "quete1-champ-4-texte-1" : {
        	fr : "Un sourire se dessine doucement sur ses lèvres.",
        	en : "A smile slowly appears on his face.",
        	eo : "Rideto kunturiĝas malrapide sur viaj lipoj."
        },
        "quete1-champ-4-texte-2" : {
        	fr : "&laquo;&nbsp;Des poulets&nbsp;? Mouais, ptêt bien qu'on les a vus&hellip; Ou ptêt pas.",
        	en : "&laquo;&nbsp;Chickens? Well, maybe we saw them&hellip; Or maybe not.",
        	eo : "&laquo;&nbsp;Kokidojn? Nu, eble oni vidis ilin&hellip; Aŭ ne eble."
        },
        "quete1-champ-4-texte-3" : {
        	fr : "Ma mémoire me joue des tours en ce moment, tu comprends non&nbsp;?&nbsp;&raquo;",
        	en : "My memory is acting up these days. You understand, no?&nbsp;&raquo;",
        	eo : "Mia memoro trompetas min, momente. Vi komprenas, ne?&nbsp;&raquo;"
        },
        "quete1-champ-4-texte-4" : {
        	fr : "Il semble attendre une réaction de votre part.",
        	en : "He seems to be waiting for a reaction from you.",
        	eo : "Li ŝajnas atendi reakcio de vi."
        },

        /**
        * Abandonner
        **/
        "quete1-abandon-texte-1" : {
        	fr : "Sans piste supplémentaire, vous êtes forcé de rentrer à la ferme faire votre rapport&hellip;",
        	en : "Without another track, you’re forced to go back to the farm to make your report&hellip;",
        	eo : "Sen indicoj pliaj, vi estas devigita de reveni al la farmo por fari via raporto.&hellip;"
        },

        /**
        * Champs - Menace des paysans
        **/
        "quete1-champ-menacer-texte-1" : {
        	fr : "Son sourire s’efface net.",
        	en : "His smile fades suddenly.",
        	eo : "Lia rideto forviŝiĝas subite."
        },
        "quete1-champ-menacer-texte-2" : {
        	fr : "&laquo;&nbsp;Tu crois vraiment que tu vas nous faire peur avec ces petits bras&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Do you really expect to scare us with these little arms?&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Vi kredas vere, ke vi timigontas al ni kun ĉi tiu etaj brakoj?&nbsp;&raquo;"
        },
        "quete1-champ-menacer-texte-3" : {
        	fr : "Les <span key='villageois'>trois paysans</span> se lèvent et s'avancent vers vous. Ça va faire mal&hellip;",
        	en : "The <span key='villageois'>three peasants</span> stand up and come forward to you. It’s going to hurt&hellip;",
        	eo : "La <span key='villageois'>tri kamparanoj</span> leviĝas kaj alpaĝas al vi. Tio doloros&hellip;"
        },

        "quete1-champ-menacer-2-texte-1" : {
        	fr : "Les brutes s'écroulent au sol. Maintenant, ils ont l'air bien intimidés.",
        	en : "The brutes collapse on the ground. Now, they seem really intimidate.",
        	eo : "La kruduoj detruiĝas sur la grundo. Nun, ili ŝajnas bone timigitaj."
        },
        "quete1-champ-menacer-2-texte-2" : {
        	fr : "Le chef, encore conscient, semble beaucoup plus enclin à vous aider maintenant :",
        	en : "The chief, still conscious, seems to be more disposed to help you now.",
        	eo : "La ĉefo, ankoraŭ konscia, ŝajnas multe pli inklina helpi vin nune."
        },
        "quete1-champ-menacer-2-texte-3" : {
        	fr : "&laquo;&nbsp;On a compris, ne nous tape plus&nbsp;! Ils sont partis vers la ville, là-bas.&nbsp;&raquo;",
        	en : "&laquo;&nbsp;We understood, don’t hit us anymore! They went to this city over there.&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Oni komprenas, ne plu frapas nin! Ili iris al la urbo, ĉi tie.&nbsp;&raquo;"
        },
        "quete1-champ-menacer-2-texte-4" : {
        	fr : "La violence&hellip; Il n'y a que ça de vrai&hellip;",
        	en : "the violence&hellip; There is nothing like this&hellip;",
        	eo : "La violento&hellip; Estas nenio pli bona.&hellip;"
        },

        /**
        * Champs - Soudoiement des paysans
        **/
        "quete1-champ-soudoyer-texte-1" : {
        	fr : "Son sourire se transforme en rire et les pièces disparaissent bien vite dans sa poche.",
        	en : "His smile turns into laughter and the coins quickly disappear into his pocket.",
        	eo : "Lia rideto ŝanĝiĝas rido kaj la moneroj malaperas rapide en lia poŝo."
        },
        "quete1-champ-soudoyer-texte-2" : {
        	fr : "&laquo;&nbsp;Ah, en v'la un d'homme intelligent&nbsp;!",
        	en : "&laquo;&nbsp;Ah, that is really a smart guy!",
        	eo : "&laquo;&nbsp;Ah, jen inteligenta homo!"
        },
        "quete1-champ-soudoyer-texte-3" : {
        	fr : "Ça me revient maintenant, on les a bien vu tes poulets mon gars.",
        	en : "It’s coming back to me now, we’ve seen your chickens, man.",
        	eo : "Ĝi revenas al mi nune, oni vidis ilin viajn kokidojn, ulo."
        },
        "quete1-champ-soudoyer-texte-4" : {
        	fr : "Ils sont partis vers la ville, dans cette direction&nbsp;!&nbsp;&raquo;",
        	en : "They went to the city, in this direction!&nbsp;&raquo;",
        	eo : "Ili foriris al la urbo, en ĉi tiu direkton!&nbsp;&raquo;"
        },
        "quete1-champ-soudoyer-texte-5" : {
        	fr : "Rien de mieux que la diplomatie&hellip;",
        	en : "Nothing is better than diplomacy&hellip;",
        	eo : "Nenio pli bona, ke la diplomatio&hellip;"
        },

        /**
        * Berge
        **/
        "quete1-berge-texte-1" : {
        	fr : "Vous suivez le chemin indiqué par vos nouveaux amis et arrivez au bord d'un fleuve.",
        	en : "You follow the way indicated by your new friends and arrive at the edge of a river.",
        	eo : "Vi sekvas la vojon indikitan de viajn novajn amikojn kaj vi alvenas apud riverego."
        },
        "quete1-berge-texte-2" : {
        	fr : "Le son de l'eau calme, qui ruisselle lentement sur les pierres effilées, n'est perturbé que par le doux ronflement du vent.",
        	en : "Only the soft snoring of the wind perturbs the sound of calm water, slowly flowing on the sharpen stones.",
        	eo : "La sono de la trankvila akvo, kiu rojas malrapide sur la akrigaj ŝtonoj, ne estas pertubita, ke pro la pacema ronkado de la vento."
        },

        "quete1-berge-2-texte-1" : {
        	fr : "Ronflement&nbsp;?! Intrigué par ce bruit, vous vous penchez au-dessus du pont pour en vérifier la source.",
        	en : "Snoring?! Intrigued by this sound, you lean out of the bridge to verify the origin of it.",
        	eo : "Ronkado?! Intrigita pri la bruo, vi kliniĝas super la ponto por kontroli la deveno."
        },
        "quete1-berge-2-texte-2" : {
        	fr : "L'une des <span key='poulet'>poulettes</span>, délicatement nichée entre deux pierres, a profité du silence du lieu pour piquer un petit somme.",
        	en : "One of the <span key='poulet'>pullets</span>, tenderly nestled between two stones, took advantage of the silence to have a little nap.",
        	eo : "Unu el <span key='poulet'>kokidinoj</span>, delikate nestita inter du ŝtonoj, profitis silento de la loko por fari dormeto."
        },

        "quete1-berge-3-texte-1" : {
        	fr : "Le bel oiseau se laisse cueillir comme une fleur et en profite même pour se blottir sous votre manteau.",
        	en : "The beautiful bird lets itself pick like a flower and even snuggle under your coat.",
        	eo : "La bela birdo lasiĝas pluki kiel floron kaj profitas mem por elpremiĝi sub via mantelo."
        },
        "quete1-berge-3-texte-2" : {
        	fr : "Comment résister à tant de tendresse&nbsp;?",
        	en : "How to fight against so much softness?",
        	eo : "Kiel rezisti tiom tenereco?"
        },

        /**
        * Arrivé en ville
        **/
        "quete1-ville-texte-1" : {
        	fr : "Tout reposé par cette expérience sensorielle, vous poursuivez votre route en direction de la civilisation.",
        	en : "Completely recharged by this sensory experience, you continue on your way in the direction of the civilization.",
        	eo : "Komplete ripozita pro ĉi tiu sensa sperto, vi daŭrigas vian vojo en direkton de la civilizecon."
        },
        "quete1-ville-texte-2" : {
        	fr : "Depuis le chemin, vous apercevez déjà une foule se former autour du clocher.",
        	en : "From the path, you can already see a crowd forming around the bell tower.",
        	eo : "De la vojo, vi ekvidas jam homamason formiĝi ĉirkaŭ la sonorilturo."
        },
        "quete1-ville-texte-3" : {
        	fr : "Qu'est-ce qui se passe encore&nbsp;?",
        	en : "What’s going on again?",
        	eo : "Kio okazas ankoraŭ?"
        },

        "quete1-ville-2-texte-1" : {
        	fr : "Suivant les doigts dirigés vers le ciel, vous levez la tête et recevez une plume sur le bout du nez.",
        	en : "Following the fingers pointing to the sky direction, you look up and receive a feather on the tip of your nose.",
        	eo : "Sekvanta la fingojn indikitajn al la ĉielo, vi levas la kapon kaj vi recevas plumon sur la nazopinton."
        },
        "quete1-ville-2-texte-2" : {
        	fr : "Un des <span key='poulet'>volatiles</span> s'est niché sur la cloche du bâtiment et semble bien vouloir y rester.",
        	en : "One of the <span key='poulet'>birds</span> has nested on the bell of the building and seems to want to stay there.",
        	eo : "Unu el <span key='poulet'>birdo</span> estas nestiĝita sur la sonorilo de la konstruaĵo kaj ŝajnas bone voli resti tie."
        },
        "quete1-ville-2-texte-3" : {
        	fr : "Comment a-t-il bien pu faire pour monter là-haut&hellip;",
        	en : "But how the hell did he get up there&hellip;",
        	eo : "Kiel ĝi bone povis supreniri ĉi tie&hellip;"
        },

        "quete1-ville-3-texte-1" : {
        	fr : "Vous vous frayez un chemin parmi les curieux et atteignez l’arrière du bâtiment.",
        	en : "You make your way through the curious and reach the back of the building.",
        	eo : "Vi trabatas vojon inter la scivolemajn kaj atingas la malantaŭon de la konstruaĵon."
        },
        "quete1-ville-3-texte-2" : {
        	fr : "Ici, un grand escalier grimpe tout autour jusqu'à son sommet.",
        	en : "Here, a big staircase climbs all around to the top.",
        	eo : "Ĉi tie, granda ŝtuparo ŝtuparas ĉirkaŭe ĝis sia supro."
        },
        "quete1-ville-3-texte-3" : {
        	fr : "Vous n'avez pas le vertige, non&nbsp;?",
        	en : "You aren’t afraid of heights, no?",
        	eo : "Vi ne havas la vertiĝo, ne?"
        },

        "quete1-ville-4-texte-1" : {
        	fr : "Vous prenez une grande respiration et commencez à grimper les marches poussiéreuses.",
        	en : "You take a deep breath and start to climb the dusty steps.",
        	eo : "Vi prenas grandan spiron kaj vi komencas ŝtupari la polvajn ŝtupojn."
        },
        "quete1-ville-4-texte-2" : {
        	fr : "Apparemment, le lieu n'est pas souvent fréquenté.",
        	en : "Apparently, this place is not often visited.",
        	eo : "Ŝajne, ĉi tiu loko ne estas ofte vizitadita."
        },
        "quete1-ville-4-texte-3" : {
        	fr : "À mi-parcourt, vous sentez déjà le vent vous chahuter les cheveux&hellip;",
        	en : "At the halfway stage, you already feel the wind heckling your hair&hellip;",
        	eo : "Duonvoje, vi sentas jam la venton taŭzi viajn harojn&hellip;"
        },

        "quete1-ville-5-texte-1" : {
        	fr : "Ne pas regarder en bas&hellip;",
        	en : "Don’t look down&hellip;",
        	eo : "Ne rigardi malsupren&hellip;"
        },
        "quete1-ville-5-texte-2" : {
        	fr : "Vous continuez votre ascension en gardant cette idée en tête.",
        	en : "You continue your ascent by keeping this idea in your mind.",
        	eo : "Vi daŭrigas vian supreniron konservante ĉi tiun ideon en via kapo."
        },
        "quete1-ville-5-texte-3" : {
        	fr : "Une fois au sommet, vous tentez un léger coup d'œil discret.",
        	en : "Once at the top, you try a little glance.",
        	eo : "Foje al la supro, vi provas diskretan ekrigardeton."
        },
        "quete1-ville-5-texte-4" : {
        	fr : "Et là, c'est le drame&hellip;",
        	en : "And, here is the drama&hellip;",
        	eo : "Kaj tie, tio estas la dramo&hellip;"
        },

        "quete1-ville-6-texte-1" : {
        	fr : "Le sol vous parait à des kilomètres en dessous et pourtant il vous attire fortement.",
        	en : "The ground seems to be far below you and yet it attracts you strongly.",
        	eo : "La grundo ŝajnas kilometroj for sub vi kaj tamen ĝi alitiras vin forte."
        },
        "quete1-ville-6-texte-2" : {
        	fr : "Vous vacillez et vous cognez sur la cloche qui trône fièrement devant vous.",
        	en : "You stagger and bang on the bell that stands proudly in front of you.",
        	eo : "Vi ŝanceliĝas kaj vi frapiĝas sur la sonorilo kiu tronas fiere antaŭ vi."
        },
        "quete1-ville-6-texte-3" : {
        	fr : "L'oiseau, apeuré, s'envole dans vos cheveux et vous fait tomber à la renverse.",
        	en : "The bird, afraid, flies in your hairs and knocks you down backwards.",
        	eo : "La birdo, timigita, flugiĝas en via haroj kaj faras vin fali dorsen."
        },
        "quete1-ville-6-texte-4" : {
        	fr : "Ça y est, cette fois-ci, c'est la fin&hellip;",
        	en : "That’s it, now, it’s the end&hellip;",
        	eo : "Jen, ĉi tiu foje, tio estas la fino.&hellip;"
        },

        "quete1-ville-7-texte-1" : {
        	fr : "Point de destin pour les braves qui n'en ont pas besoin.",
        	en : "No destiny for the braves who don’t need it.",
        	eo : "Ne sorto por la bravaj kiu ne bezonas ĝin."
        },
        "quete1-ville-7-texte-2" : {
        	fr : "Vous dévalez l'escalier qui était derrière vous, sur les fesses.",
        	en : "You hurtle down the stairs behind you, on your buttocks.",
        	eo : "Vi rulfalas la ŝtuparo kiu estis malantaŭ vi, sur la pugo."
        },
        "quete1-ville-7-texte-3" : {
        	fr : "La douleur est atroce, mais au moins, vous êtes toujours en vie.",
        	en : "The pain is horrible, but at least, you’re still alive.",
        	eo : "La doloro estas terura, sed almenaŭ, vi estas ankoraŭ vivante."
        },
        "quete1-ville-7-texte-4" : {
        	fr : "C'est déjà ça&nbsp;!",
        	en : "That’s a start!",
        	eo : "Jam ne estas malbona!"
        },

        "quete1-ville-8-texte-1" : {
        	fr : "Vous vous relevez, les muscles encore endoloris par cette terrible chute.",
        	en : "You get back on your feet, your muscles still painful after this terrible fall.",
        	eo : "Vi releviĝas vin, la muskoloj ankoraŭ endolorigas pro ĉi tiu terura falo."
        },
        "quete1-ville-8-texte-2" : {
        	fr : "L'animal, bien perché sur votre tête, ne compte pas y bouger de si tôt.",
        	en : "The animal, well perched on your head, doesn’t intend to move for a while.",
        	eo : "La besto, bone sidita sur via kapo, ne deziras movi dum momente."
        },
        "quete1-ville-8-texte-3" : {
        	fr : "Épuisé par cette longue journée de recherches, vous décidez de faire un passage par la taverne.",
        	en : "Exhausted by this long day of research, you decide to stop by the inn.",
        	eo : "Elĉerpita pro ĉi tiu longa tago de serĉoj, vi decidas iri al la taverno."
        },
        "quete1-ville-8-texte-4" : {
        	fr : "Vous l'avez bien mérité&nbsp;!",
        	en : "You really deserved it!",
        	eo : "Vi havas bone merititan ĝin!"
        },

        /**
        * Abandon du clochet
        **/
        "quete1-ville-abandon-texte-1" : {
        	fr : "Il n'aura qu'à se débrouiller seul, vous êtes décidément trop vieux pour ces conneries&hellip;",
        	en : "He will only have to fend for himself, you’re definitely too old for these stupidities&hellip;",
        	eo : "Ĝi nur havos elturniĝi solan, vi estas rezolute tro maljuna por tiuj stultecoj&hellip;"
        },
        "quete1-ville-abandon-texte-2" : {
        	fr : "Épuisé par cette longue journée de recherche, vous décidez de faire un passage par la taverne, histoire de vous rincer le gosier.",
        	en : "Exhausted by this long day of research, you decide to stop by the inn to take a drink.",
        	eo : "Elĉerpita pro ĉi tiu longa tago de serĉoj, vi decidas iri al la taverno por vi tralavi la gorĝon."
        },

        /**
        * Taverne
        **/
        "quete1-taverne-texte-1" : {
        	fr : "Suivant les ruelles et les allées, vous arrivez bien vite devant le lieu tant désiré.",
        	en : "Following the lanes and alleys, you soon arrive in front of the desired place.",
        	eo : "Sekvanta la stratetojn kaj aleojn, vi alvenas rapide antaŭ la tiel dezira loko."
        },
        "quete1-taverne-texte-2" : {
        	fr : "Déjà, le tintement des verres qui cognent les uns contre les autres vous ravit les oreilles.",
        	en : "Already, the jingling of the glasses banging against each other gives you a real pleasure.",
        	eo : "Jam, la tinto de glasoj kiu frapas la unuj kontraŭ la aliaj ravas viajn orelojn."
        },

        "quete1-taverne-2-texte-1" : {
        	fr : "Vous entrez dans le bâtiment, vous préparant au brouhaha&hellip;",
        	en : "You enter the room, preparing for the hubbub&hellip;",
        	eo : "Vi eniras en la konstruaĵo, vi prepariĝanta pro la bruo&hellip;"
        },
        "quete1-taverne-2-texte-2" : {
        	fr : "Mais, étrangement, tout est très calme.",
        	en : "But, strangely, all is very calm.",
        	eo : "Sed, strange, ĉio estas tre trankvila."
        },
        "quete1-taverne-2-texte-3" : {
        	fr : "Le tavernier, occupé à essuyer les brocs, vous salue d'un signe de tête.",
        	en : "The innkeeper, busy wiping the jugs, greeting you by a nod.",
        	eo : "La albergisto, okupata viŝi la kruĉoj, kapsalutas vin."
        },

        "quete1-taverne-3-texte-1" : {
        	fr : "L'homme est pris d'une toux, surpris par votre question.",
        	en : "The man coughs, surprised by your question.",
        	eo : "La homo tusas, surprizita pri via demando."
        },
        "quete1-taverne-3-texte-2" : {
        	fr : "&laquo;&nbsp;Des pou- quoi&nbsp;? Euh non, y'a pas d'poulets ici,  non&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Chick- what? Uh no, there is no chickens here, no&hellip;&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Koki- kio? O ne, estas neniu kokidoj ĉi tie, ne&hellip;&nbsp;&raquo;"
        },
        "quete1-taverne-3-texte-3" : {
        	fr : "Alors qu'il termine sa phrase, vous entendez piailler derrière lui.",
        	en : "As he finishes his sentence, you hear something chirping behind him.",
        	eo : "Dum li finas lian frazon, vi aŭdas pepi malantaŭ lin."
        },
        "quete1-taverne-3-texte-4" : {
        	fr : "&laquo;&nbsp;J'vois pas ce que ça peut être&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;I really don’t see what it can be&hellip;&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Mi ne vidas vere, kio ĝi povas esti&hellip;&nbsp;&raquo;"
        },

        "quete1-taverne-4-texte-1" : {
        	fr : "Laissant le patron à son bar, vous vous levez et allez discrètement jeter un œil en cuisine.",
        	en : "Letting the boss at his bar, you get up and discreetly go to have a look to the kitchen.",
        	eo : "Lasanta la mastro al sia trinkejo, vi leviĝas kaj iras diskrete jeti okulo en la kuirejo."
        },
        "quete1-taverne-4-texte-2" : {
        	fr : "Devant vos yeux ébahis, une scène d'horreur&nbsp;:",
        	en : "Before your astonished eyes, a horror scene:",
        	eo : "Antaŭ viaj okuloj miregigita, horora sceno."
        },
        "quete1-taverne-4-texte-3" : {
        	fr : "Le <span key='villageois'>cuisinier</span> est en train de plumer votre <span key='poulet'>protégée</span>&nbsp;!",
        	en : "The <span key='villageois'>cook</span> is plucking your <span key='poulet'>protégé</span>!",
        	eo : "La <span key='villageois'>kuiristo</span> estas senplumigata via <span key='poulet'>protektatino</span>!"
        },
        "quete1-taverne-4-texte-4" : {
        	fr : "Vite, c'est maintenant ou jamais&nbsp;!",
        	en : "Quick, it’s now or never!",
        	eo : "Ek, tio estas nun aŭ neniam!"
        },

        "quete1-taverne-5-texte-1" : {
        	fr : "C’était tout juste&nbsp;!",
        	en : "It was just in time!",
        	eo : "Ĝustatempe!"
        },
        "quete1-taverne-5-texte-2" : {
        	fr : "Vous profitez du fait que le cuistot soit encore inconscient pour attraper la poulette et filer comme une crème (à l'anglaise).",
        	en : "You take advantage that the cook is still unconscious to catch the pullet and run away.",
        	eo : "Vi profitas, ke la kuiristo estu ankoraŭ senkonscia por ekkapti la kokidino kaj forkuri."
        },

        /**
        * Taverne - Prendre un verre
        **/
        "quete1-taverne-verre-texte-1" : {
        	fr : "Détendu, vous buvez tranquillement votre menthe à l'eau, uniquement gêné par les piaillements d'un oiseau au loin&hellip;",
        	en : "Relaxed, you quietly drink your mint in the water, only bothered by the chirping of a distant bird&hellip;",
        	eo : "Malstreĉita, vi trinkas trankvile vian mentakvon, nur ĝenita pro la pepadoj de birdo fore."
        },
        "quete1-taverne-verre-texte-2" : {
        	fr : "Votre quête commence vraiment à vous peser sur l'esprit.",
        	en : "You quest really starts to weigh on your mind.",
        	eo : "Via defio komencas vere pezi vin sur la menso."
        },
        "quete1-taverne-verre-texte-3" : {
        	fr : "Il est grand temps d'en finir&hellip;",
        	en : "It’s high time to get it over with&hellip;",
        	eo : "Ĝi estas granda tempo de fini ĝin&hellip;"
        },

        /**
        * Retour à la ferme
        **/
        "quete1-retour-texte-1" : {
        	fr : "La journée se termine et le soleil commence à s’éteindre à l'horizon.",
        	en : "The day ends and the sun begins to fade on the horizon.",
        	eo : "La tago finigas kaj la suno komencas estingiĝi al la horizonto."
        },
        "quete1-retour-texte-2" : {
        	fr : "Satisfait de vos recherches, vous vous mettez en route vers la maison de votre client, prêt à lui faire votre rapport.",
        	en : "Satisfied by your research, you set off to your client’s house, ready to make your report.",
        	eo : "Kontenta pri viaj serĉoj, vi ekiras al la domo de via kliento, preta por fari lin via raporto."
        },
        "quete1-retour-texte-3" : {
        	fr : "Tout travail mérite salaire et vous aimeriez bien avoir le vôtre&nbsp;!",
        	en : "All work deserves payment and you’d really like to have yours!",
        	eo : "̈Ĉiu laboro meritas salajron kaj vi ŝatus bone havas la vian!"
        },

        "quete1-retour-2-texte-1" : {
        	fr : "Vous repensez aux aventures du jour, perdu dans vos pensées&hellip;",
        	en : "You think back about the day adventures, lost in your thoughts&hellip;",
        	eo : "Vi repensas pri la aventuroj de la tago, perdita en viaj pensadoj&hellip;"
        },
        "quete1-retour-2-texte-2" : {
        	fr : "Mais soudain, là, à quelques pas, une des <span key='poulet'>fuyardes</span> vous fait face.",
        	en : "But suddenly, there, a few steps away, one of the <span key='poulet'>fugitives</span> faces you.",
        	eo : "Sed subita, ĉi tie, al kelkaj paŝoj, unu el <span key='poulet'>fuĝantojn frontas</span> vin."
        },
        "quete1-retour-2-texte-3" : {
        	fr : "Son bec est vert de rage, elle veut venger et libérer ses amis.",
        	en : "Her beak is incandescent with rage, She wants to avenge and releases their friends",
        	eo : "Sia beko estas tremanta de kolerego, ŝi volas venĝi kaj liberigi siajn amikojn."
        },
        "quete1-retour-2-texte-4" : {
        	fr : "L'affrontement s'annonce épique&nbsp;!",
        	en : "The battle promises to be epic!",
        	eo : "La frontiĝo estos epopea!"
        },

        "quete1-retour-3-texte-1" : {
        	fr : "Elle lance l'assaut, prête à vous picorer comme il se doit.",
        	en : "She launches the assault, ready to peck you as it should be.",
        	eo : "Ŝi lanĉas la atakon, pretas beki vin konvene."
        },
        "quete1-retour-3-texte-2" : {
        	fr : "Malheureusement, aveuglée par sa colère, elle ne voit pas les vaches qui, ayant fini leur broutement quotidien, traversent comme des folles le chemin pour rentrer chez elles.",
        	en : "Unfortunately, blinded by her rage, she doesn’t see the cows, having finished their daily grazing, traversing the path, to going back to their home like crazy.",
        	eo : "Bedaŭrinde, blindigita pro ŝia kolerego, ŝi ne vidas la bovinojn, kiu estas fininta iliaj paŝtado ĉiutage, trapasas la vojon kiel frenezaj por reniri al iliaj domo."
        },
        "quete1-retour-3-texte-3" : {
        	fr : "Vite&nbsp;! Il faut agir&nbsp;!",
        	en : "Quick! You have to do something!",
        	eo : "Ek! Vi devas agi!"
        },

        "quete1-retour-4-texte-1" : {
        	fr : "Vous vous jetez sur la misérable et la protégez comme vous pouvez.",
        	en : "You throw yourself on the wretched one and protect it as you can.",
        	eo : "Vi jetas vin sur la mizera kaj protektas ŝin kiel vi povas."
        },
        "quete1-retour-4-texte-2" : {
        	fr : "Des tremblements, des meuglements puis, plus rien&hellip;",
        	en : "Quakes, moos, then nothing even more&hellip;",
        	eo : "Tremadoj, muĝadoj kaj, plu nenio&hellip;"
        },
        "quete1-retour-4-texte-3" : {
        	fr : "Vous vous relevez, endoloris par la ruée encaissée.",
        	en : "You get up, sore by rush.",
        	eo : "Vi releviĝas vin, endolorigas pro la kurego."
        },
        "quete1-retour-4-texte-4" : {
        	fr : "La poulette, encore dans vos bras, vous observe avec un air reconnaissant.",
        	en : "The pullet, still in your arms, looks at you with a grateful air.",
        	eo : "La kokidino, ankoraŭ en viaj brakoj, observas vin, dankema."
        },

        /**
        * Abandon lors de l'assaut des vaches
        **/
        "quete1-retour-abandon-texte-1" : {
        	fr : "Vous sautez dans les buissons proches et vous protégez la tête.",
        	en : "You jump in the closest bush and protect your head.",
        	eo : "Vi saltas en la proksimaj arbustoj kaj protektas vin la kapon."
        },
        //"quete1-retour-4-texte-2"
        "quete1-retour-abandon-texte-3" : {
        	fr : "La poussière se dissipe, vous laissant constater la scène.",
        	en : "The dust dissipates, letting you see the scene.",
        	eo : "La polvo dispolviĝas, laĉanta vin konstati la scenon."
        },
        "quete1-retour-abandon-texte-4" : {
        	fr : "La poulette a disparu, profitant certainement de la ruée pour s’évaporer&hellip;",
        	en : "The pullet has disappeared, certainly taking advantage of the rush to evaporate&hellip;",
        	eo : "La kokidino malaperis, profitante certe de la kurego per forvaporiĝi&hellip;"
        },

        /**
        * Fin - 0 Poulets
        **/
        "quete1-fin-0-texte-1" : {
        	fr : "Vous arrivez enfin devant la maison, pas très à l'aise.",
        	en : "You finally arrive in front of the house, not really comfortable.",
        	eo : "Vi alvenas finfine antaŭ la domo, ne tre komforta."
        },
        "quete1-fin-0-texte-2" : {
        	fr : "Le fermier, furieux, vous attend devant sa porte.",
        	en : "The farmer, furious, wait for you at his door.",
        	eo : "La farmisto, furioza, atendas vin antaŭ sia pordo."
        },
        "quete1-fin-0-texte-3" : {
        	fr : "&laquo;&nbsp;Tu te fous d'moi&nbsp;?! T'oses te pointer ici les mains vides&nbsp;!",
        	en : "&laquo;&nbsp;You’re kidding me?! You dare to show up here empty-handed!",
        	eo : "&laquo;&nbsp;Vi mokas mi?! Vi aŭdacas montriĝi vin ĉi tien la malplenajn manojn!"
        },
        "quete1-fin-0-texte-4" : {
        	fr : "Dégage de là, tu mérites rien&nbsp;! Je les retrouverai moi-même.&nbsp;&raquo;",
        	en : "Move from here, you deserve nothing! I’ll find them by myself.&nbsp;&raquo;",
        	eo : "Foriru de tie, vi meritas nenio! Mi retrovos ilin mi mem.&nbsp;&raquo;"
        },
        "quete1-fin-0-texte-5" : {
        	fr : "Tant pis&hellip; Au moins, c’était marrant&hellip;",
        	en : "Never mind&hellip; At least, it was fun&hellip;",
        	eo : "Ne grava&hellip; Almenaŭ, tio estis amuza&hellip;"
        },

        /**
        * Fin - 1 poulet
        **/
        //"quete1-fin-0-texte-1"
        //"quete1-fin-0-texte-2"
        "quete1-fin-1-texte-3" : {
        	fr : "&laquo;&nbsp;Une seule poulette&nbsp;? Qu'est-ce que tu veux que je fasse avec une pauvre petite poulette&nbsp;?!",
        	en : "&laquo;&nbsp;Only one pullet? What do you want me to do with only one poor little pullet?!",
        	eo : "&laquo;&nbsp;Nur unu kokidino? Kio vi volas, ke mi faru kun nur unu mizera eta kokidino?!"
        },
        "quete1-fin-1-texte-4" : {
        	fr : "Prends ton pécule et va-t'en&nbsp;! Je retrouverai les autres moi-même.&nbsp;&raquo;",
        	en : "Well, take your nest egg and go away! I’ll find the others by myself.&nbsp;&raquo;",
        	eo : "Prenu via mono kaj foriru! Mi retrovos la aliajn mi mem.&nbsp;&raquo;"
        },
        "quete1-fin-1-texte-5" : {
        	fr : "C'est toujours mieux que rien&hellip;",
        	en : "Well, it’s still better than nothing&hellip;",
        	eo : "Tio estas ĉiam pli bona ol nenio&hellip;"
        },

        /**
        * Fin - 2 Poulets
        **/
        //"quete1-fin-0-texte-1"
        //"quete1-fin-0-texte-2"
        "quete1-fin-2-texte-3" : {
        	fr : "&laquo;&nbsp;Seulement deux poulettes&nbsp;? Qu'est-ce que tu veux que je fasse avec deux pauvres petites poulettes&nbsp;?!",
        	en : "&laquo;&nbsp;Only two pullets? What do you want me to do with only two poor little pullets?!",
        	eo : "&laquo;&nbsp;Nur du kokidinoj?Kio vi volas, ke mi faru kun nur du mizeraj etaj kokidinoj?!"
        },
        //"quete1-fin-1-texte-4"
        //"quete1-fin-1-texte-5"

        /**
        * Fin - 3 et 4 poulets
        **/
        "quete1-fin-34-texte-1" : {
        	fr : "Vous arrivez enfin devant la maison, satisfait.",
        	en : "You finally arrive in front of the house, satisfied.",
        	eo : "Vi alvenas finfine antaŭ la domo, kontenta."
        },
        "quete1-fin-34-texte-2" : {
        	fr : "Le fermier, rassuré, court à votre rencontre.",
        	en : "The farmer, reassured, runs to meet you.",
        	eo : "La farmisto, trankviligita, kuras al via renkonto."
        },
        "quete1-fin-34-texte-3" : {
        	fr : "&laquo;&nbsp;Mes poulettes&nbsp;! Tu les as presque toutes retrouvées&nbsp;! Merci l'aventurier&nbsp;!",
        	en : "&laquo;&nbsp;My pullets! You found almost all of them! Thank you adventurer!",
        	eo : "&laquo;&nbsp;Mian kokidinojn! Vi havas ilin preskaŭ ĉiuj retrovitaj! Dankegon la aventurulon!"
        },
        "quete1-fin-34-texte-4" : {
        	fr : "Prend cet or, tu le mérites amplement&nbsp;!&nbsp;&raquo;",
        	en : "Take this gold, you largely deserve it!&nbsp;&raquo;",
        	eo : "Prenu tiun oron, vi meritas ĝin amplekse!&nbsp;&raquo;"
        },
        "quete1-fin-34-texte-5" : {
        	fr : "C'est toujours plaisant d'aider les autres, surtout quand ça rapporte&nbsp;!",
        	en : "It’s always a pleasure to help someone, especially when it pays off!",
        	eo : "Tio estas ĉiam agrabla helpi la aliaj, precipe kiam ĝi pagas!"
        },

        /**
        * Fin - 5 Poulets
        **/
        "quete1-fin-5-texte-1" : {
        	fr : "Vous arrivez enfin devant la maison du fermier, sûr de vous.",
        	en : "You finally arrive in front of the house, sure of yourself.",
        	eo : "Vi alvenas finfine antaŭ la domo de la farmisto, certa de vi."
        },
        //"quete1-fin-34-texte-2"
        "quete1-fin-5-texte-3" : {
        	fr : "&laquo;&nbsp;Mes poulettes&nbsp;! Tu les as toutes retrouvées&nbsp;!",
        	en : "&laquo;&nbsp;My pullets! You found all of them!",
        	eo : "&laquo;&nbsp;Mian kokidinojn! Vi havas ilin ĉiuj retrovitaj! "
        },
        "quete1-fin-5-texte-4" : {
        	fr : "Merci beaucoup l'aventurier, je t'en dois une&nbsp;!",
        	en : "Thank you very much adventurer, I owe you!",
        	eo : "Dankegon la aventurulo, mi ŝuldas al vi!"
        },
        "quete1-fin-5-texte-5" : {
        	fr : "Tiens, prends le double de la récompense, tu le mérites&nbsp;!&nbsp;&raquo;",
        	en : "Here, take the double of the reward, you deserve it!&nbsp;&raquo;",
        	eo : "Prenu la doublan rekonpencon, vi meritas ĝin!&nbsp;&raquo;"
        },
        //"quete1-fin-34-texte-5"
	};

	return {
        name : function() {
            return "Quete1.js";
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