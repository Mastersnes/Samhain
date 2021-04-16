'use strict';
define([], function(){
	var data = {
        "ville-porte-start-texte-1" : {
            fr : "Encouragé par votre succès encore récent, vous vous rendez à la ville la plus proche.",
            en : "Encouraged by your recent success, you go to the nearest town.",
            eo : "Kuraĝigita pro via lasta sukceso, vi iras al la plej proksimala urbo."
        },
        "ville-porte-start-texte-2" : {
            fr : "Les gens ont toujours besoin d'un héros, et les héros ont toujours besoin d'argent&nbsp;!",
            en : "Peoples always need heroes, and heroes always need gold!",
            eo : "La homoj ĉiam bezonas heroon, kaj la herooj ĉiam bezonas monon!"
        },
        "ville-porte-start-texte-3" : {
            fr : "Après quelques heures de marche, vous vous retrouvez enfin devant les lourdes portes de pierres.",
            en : "After a few hours of walking, you finally arrive in front of the heavy stone doors.",
            eo : "Post kelkaj horoj da marŝado, vi fine estas antaŭ la pordegoj el ŝtonoj."
        },
        "ville-porte-start-texte-4" : {
            fr : "Un garde vous fait face, l'air menaçant&hellip;",
            en : "A guard is facing you, with a menacing air&hellip;",
            eo : "Gardisto frontas vin, aspektante minaca&hellip;"
        },

        "ville-porte-retour-achat-texte-1" : {
            fr : "Fier de vos affaires, vous reprenez la discussion là où vous l'aviez commencée.",
            en : "Proud of your deals, you continue the discussion where you had begun it.",
            eo : "Fiera pri via aferoj, vi daŭrigas la diskutadon, kie vi komencis ĝin."
        },

        /**
        * Demander à entrer
        **/
        "ville-porte-demander-texte-1" : {
            fr : "Vous vous annoncez comme étant un héros de passage,",
            en : "You announce yourself as a passing through hero,",
            eo : "Vi annonciĝas kiel estas pasanta heroo,"
        },
        "ville-porte-demander-texte-2" : {
            fr : "offrant volontiers vos services pour peu que la récompense soit suffisante.",
            en : "gladly offering your services as long as the reward is sufficient.",
            eo : "volonte donacante viajn servojn kondiĉe ke la rekompenco estus sufiĉa."
        },
        "ville-porte-demander-texte-3" : {
            fr : "Le garde, plus calme, vous jauge puis vous répond&nbsp;:",
            en : "The guard, calmer, looks at you and answers:",
            eo : "La gardisto, pli trankvila, taksas vin kaj respondas al vi:"
        },
        "ville-porte-demander-texte-4" : {
            fr : "&laquo;&nbsp;Impossible d'entrer, la ville est confinée sous la haute protection de Sa Seigneurie Niers&nbsp;!",
            en : "&laquo;&nbsp;Impossible to enter, the city is confined under the high protection of His Lord Niers!",
            eo : "&laquo;&nbsp;Neebla eniro, la urbo estas ĉirkaŭbarita sub alta protekto de Lia Moŝtro Niers!"
        },
        "ville-porte-demander-texte-5" : {
            fr : "Toute personne voulant y entrer ou en sortir doit posséder une autorisation officielle.&nbsp;&raquo;",
            en : "Anyone who wants to enter or leave the city needs an official authorization.&nbsp;&raquo;",
            eo : "Ĉiu persono volanta eniri aŭ eliri devas posedi oficialan permeson.&nbsp;&raquo;"
        },

        "ville-porte-demander-2-texte-1" : {
            fr : "&laquo;&nbsp;Les bandits&hellip; Ils sèment le chaos dans le coin.",
            en : "&laquo;&nbsp;The bandits&hellip; They spread the terror in the area.",
            eo : "&laquo;&nbsp;La banditoj&hellip;  Ili disvastigas la ĥaoso ĉi tien."
        },
        "ville-porte-demander-2-texte-2" : {
            fr : "Crois-moi que, s'ils n'avaient pas été si nombreux, je leur aurais moi-même réglé leur compte&nbsp;!&nbsp;&raquo;",
            en : "Believe me, if they hadn’t been so many of them, I would have killed them myself!&nbsp;&raquo;",
            eo : "Kredu min, ke se ili ne estus tiom multaj, mi mem mortigus ilin!&nbsp;&raquo;"
        },
        "ville-porte-demander-2-texte-3" : {
            fr : "L'homme vous toise de nouveau, il semble réfléchir un peu puis ajoute&nbsp;:",
            en : "The man looks at you again, he seems to think a little then adds:",
            eo : "La viro denove taksas vin, li ŝajnas iomete pripensi kaj aldiri:"
        },
        "ville-porte-demander-2-texte-4" : {
            fr : "&laquo;&nbsp;Eh mais, si t'es bien un héros, tu pourrais nous en débarrasser, non&nbsp;?&nbsp;&raquo;",
            en : "&laquo;&nbsp;Hey but, if you’re really a hero, you could rid ourselves of them, no?&nbsp;&raquo;",
            eo : "&laquo;&nbsp;He sed, se vi estas heroo, vi povus liberigi nin, ĉu ne?&nbsp;&raquo"
        },

        "ville-porte-demander-3-texte-1" : {
            fr : "Il réfléchit longuement et annonce&nbsp;:",
            en : "He thinks for a long and announces:",
            eo : "Li longe pripensas kaj annoncas:"
        },
        "ville-porte-demander-3-texte-2" : {
            fr : "&laquo;&nbsp;Eh bien, ma rente n'est pas très élevée mais&hellip;",
            en : "&laquo;&nbsp;Well, my income is not really high but&hellip;",
            eo : "&laquo;&nbsp;Nu, mia rento ne estas tre granda sed&hellip;"
        },
        "ville-porte-demander-3-texte-3" : {
            fr : "Si tu nous débarrasses de ces avortons, mes collègues et moi nous fermerons les yeux.",
            en : "If you rid ourselves of this little runt, my colleagues and I will close our eyes.",
            eo : "Se vi liberigos nin de ĉi tiuj abortuloj, miaj kolegoj kaj mi, ni fermos la okulojn."
        },
        "ville-porte-demander-3-texte-4" : {
            fr : "Tu auras accès à toute la ville, parole de garde&nbsp;!&nbsp;&raquo;",
            en : "You’ll have access to the whole city, word of guard!&nbsp;&raquo;",
            eo : "Vi havos aliron al tuta la urbo, promeso de gardisto!&nbsp;&raquo;"
        },

        "ville-porte-demander-4-texte-1" : {
            fr : "&laquo;&nbsp;Bien, ça me paraît être un bon deal&nbsp;!",
            en : "&laquo;&nbsp;Well, that sounds like a good deal for me!",
            eo : "&laquo;&nbsp;Nu, ŝajnas al mi bona afero!"
        },
        "ville-porte-demander-4-texte-2" : {
            fr : "Pour prouver ta réussite, apporte-moi <span key='anneau-bandit'>l'anneau</span> que leur chef porte à son oreille.",
            en : "To prove your success, bring me <span key='anneau-bandit'>the ring</span> that their chief wears at his ear.",
            eo : "Por pruvi vian sukceson, alportu al mi <span key='anneau-bandit'>la ringo</span>, kiun ilia ĉefo metas sur lia orelo."
        },
        "ville-porte-demander-4-texte-3" : {
            fr : "Je pense que cela devrait être plutôt évocateur&hellip;&nbsp;&raquo;",
            en : "I think it should be quite suggestive&hellip;&nbsp;&raquo;",
            eo : "Mi pensas, ke tiu estus sufiĉe elvokiva&hellip;&nbsp;&raquo;"
        },

        /**
        * Refus de la mission du garde
        **/
        "ville-porte-demander-refus-texte-1" : {
            fr : "Il a l'air déçu.",
            en : "He seems disappointed.",
            eo : "Li ŝajnas seniluzigita."
        },
        "ville-porte-demander-refus-texte-2" : {
            fr : "&laquo;&nbsp;C'est bien dommage&hellip;",
            en : "&laquo;&nbsp;It’s pretty too bad&hellip;",
            eo : "&laquo;&nbsp;Estas bedaŭrinde&hellip;"
        },
        "ville-porte-demander-refus-texte-3" : {
            fr : "Trouve-toi une autre ville pour passer la nuit, j'ai assez bavassé avec toi.&nbsp;&raquo;",
            en : "Find another city to rest this night, I've lost enough time with you.&nbsp;&raquo;",
            eo : "Trovu vin alia urbo por pasigi la nokton, mi sufiĉe babilis kun vi.&nbsp;&raquo;"
        },

        /**
        * Attaquer le garde
        **/
        "ville-porte-attaquer-texte-1" : {
            fr : "Voyant votre air menaçant, le garde réagit au quart de tour et sonne l'alarme.",
            en : "Seeing your menacing air, the guard reacts very quickly and sounds the alarm.",
            eo : "Rimarkante vian minacan aspekton, la gardisto rapide reagas kaj sonoras la alarmon."
        },
        "ville-porte-attaquer-texte-2" : {
            fr : "Un, puis deux, c'est maintenant quatre gardes bien armés qui se trouvent face à vous&nbsp;!",
            en : "One, then two, there are now four well-armed guards in front of you!",
            eo : "Unu, kaj du, estas nun kvar gardistoj bone armitaj, kiuj estas fronte al vi!"
        },
        "ville-porte-attaquer-texte-3" : {
            fr : "Bien&hellip; Une fois vaincu, plus personne ne devrait vous bloquer le passage après tout.",
            en : "Well&hellip; Once they’ll have been defeated, no one shouldn’t block the way anymore after all.",
            eo : "Bone&hellip; Post venkita, neniu devus bloki la vojon al vi."
        },

        "ville-porte-attaquer-2-texte-1" : {
            fr : "Vos adversaires s’écroulent devant vous.",
            en : "Your opponents collapse in front of you.",
            eo : "Viaj kontraŭuloj kolapsas antaŭ vi."
        },
        "ville-porte-attaquer-2-texte-2" : {
            fr : "Qui sont-ils pour vous donner des ordres&nbsp;?",
            en : "Who are they to give you orders?",
            eo : "Kiuj estas ili por ordoni al vi?"
        },
        "ville-porte-attaquer-2-texte-3" : {
            fr : "Le chemin est maintenant libéré de tout gêneur. Vous pouvez passer.",
            en : "The path is now free of any nuisance. You can pass.",
            eo : "La vojo nun estas liberita. Vi povas pasi."
        },

        /**
        * Insulter le garde
        **/
        "ville-porte-insulter-texte-1" : {
            fr : "Le garde, d'abord menaçant, est maintenant hors de contrôle.",
            en : "The guard, at first menacing, is now out of control.",
            eo : "La gardisto, unue minaca, nun estas furioza."
        },
        "ville-porte-insulter-texte-2" : {
            fr : "&laquo;&nbsp;Tu crois que c'est évident de travailler dans la fonction publique&nbsp;?!",
            en : "&laquo;&nbsp;Do you think that it’s easy to work in the public fonction?!",
            eo : "&laquo;&nbsp;Ĉu vi kredas, ke labori en la ŝtatoficistaro estas facile?!"
        },
        "ville-porte-insulter-texte-3" : {
            fr : "Je vais t'apprendre à respecter mon travail, avorton&nbsp;!&nbsp;&raquo;",
            en : "I’m going to teach you how to respect my work, little runt!&nbsp;&raquo;",
            eo : "Mi instruos vin respekti mian laboron, abortulo!&nbsp;&raquo;"
        },

        "ville-porte-insulter-2-texte-1" : {
            fr : "Votre adversaire s’écroule devant vous, libérant le passage de tout gêneur.",
            en : "Your opponent collapses in front of you, freeing the path of any nuisance.",
            eo : "Via kontraŭulo kolapasas antaŭ vi, liberigante la vojon."
        },
        "ville-porte-insulter-2-texte-2" : {
            fr : "Vous pouvez passer.",
            en : "You can pass.",
            eo : "Vi povas pasi."
        },

        "ville-porte-insulter-3-texte-1" : {
            fr : "Vous franchissez à peine la porte que deux autres gardes vous barrent le chemin.",
            en : "Once you pass the door, two guards block your way.",
            eo : "Vi transiras la pordon, kiam du aliaj gardistoj baras vian vojon."
        },
        "ville-porte-insulter-3-texte-2" : {
            fr : "&laquo;&nbsp;Hep hep hep, on ne passe pas&nbsp;!",
            en : "Hey hey hey, we don’t pass!",
            eo : "He he he, ne pasu!"
        },
        "ville-porte-insulter-3-texte-3" : {
            fr : "Tu crois que tu peux te débarrasser de la garde de la ville aussi facilement&nbsp;?&nbsp;&raquo;",
            en : "You think that you can get rid of the city guards so easily?&nbsp;&raquo;",
            eo : "Vi kredas, ke vi povas tiel facile mortigi la gvardio de la urbo?&nbsp;&raquo;"
        },

        "ville-porte-insulter-4-texte-1" : {
            fr : "Vos adversaires s'écroulent devant vous.",
            en : "Your opponents collapse in front of you.",
            eo : "Viaj kontraŭuloj kolapsas antaŭ vi."
        },
        "ville-porte-insulter-4-texte-2" : {
            fr : "Ils l'avaient bien cherché&hellip;",
            en : "They’ve deserved it&hellip;",
            eo : "Ili meritis ĝin&hellip;"
        },

        /**
        * Contournement
        **/
        "ville-porte-contourner-reussite-texte-1" : {
            fr : "Vous cherchez longuement autour du gros mur, sans grand espoir, quand&hellip;",
            en : "You search for a long time around the large wall, without much hope, when&hellip;",
            eo : "Vi longe serĉas ĉirkaŭ la granda muro, sen multe da espero, kiam&hellip;"
        },
        "ville-porte-contourner-reussite-texte-2" : {
            fr : "Enfin, la chance vous sourit&nbsp;! Vous découvrez une légère faille, juste l'espace de s'y glisser&nbsp;!",
            en : "Finally, the luck is with you! You discover a little crack, just the space to slip in!",
            eo : "Finfine, bonŝanco estas kun vi! Vi trovas malgrandan breĉon, nur la spaco por engliti!"
        },
        "ville-porte-contourner-reussite-texte-3" : {
            fr : "Parfait&nbsp;! Personne ne vous remarquera ici&nbsp;!",
            en : "Perfect! No one will notice you here!",
            eo : "Perfektan! Neniu rimarkos vin ĉi tie!"
        },
        "ville-porte-contourner-echec-texte-1" : {
            fr : "Vous marchez de longues heures pour, au final, vous retrouver au même point.",
            en : "You walk long hours to, finally, get back to the same point.",
            eo : "Vi marŝas dum longaj horoj por, finfine, esti en la sama loko."
        },
        "ville-porte-contourner-echec-texte-2" : {
            fr : "À part de légères failles, beaucoup trop petite pour s'y glisser, vous ne trouvez rien.",
            en : "Except some slight crack, pretty too small to slip in, you find nothing.",
            eo : "Krom malgrandaj breĉoj, multe tro malgrandaj por engliti, vi trovas nenion."
        },
        "ville-porte-contourner-echec-texte-3" : {
            fr : "Ce mur est infranchissable. La porte semble être le seul moyen de passer&hellip;",
            en : "This wall is impassable. The door seems to be the only way to pass&hellip;",
            eo : "Ĉi tiu muro estas netrasnirebla. La pordo ŝajnas esti la sola maniero por pasi&hellip;"
        },
        "ville-porte-contourner-echec-texte-4" : {
            fr : "Résolu, vous vous dirigez de nouveau vers le garde.",
            en : "Determined, you head back to the guard.",
            eo : "Rezoluta, vi denove iras al la gardito."
        },

        /**
        * Retour apres la quête des bandits
        **/
        "ville-porte-retour-texte-1" : {
            fr : "Après vous être perdu une ou deux fois, vous voici de retour devant les portes de la ville.",
            en : "After getting lost once or twice, here you are back in front of the city doors.",
            eo : "Perdinte vin unu aŭ dufoje, vi fine denove estas antaŭ la pordoj de la urbo."
        },
        "ville-porte-retour-texte-2" : {
            fr : "Le garde, toujours menaçant, ne vous lâche pas des yeux&hellip;",
            en : "The guard, still menacing, doesn’t let you out of his sight&hellip;",
            eo : "La gardisto, ĉiam minaca, ne deturnas de vi sian rigardon&hellip;"
        },

        "ville-porte-retour-2-texte-1" : {
            fr : "La méfiance de l'homme disparaît d'un coup.",
            en : "The man’s suspicion disappears suddenly.",
            eo : "La malfido de la viro subite malaperas."
        },
        "ville-porte-retour-2-texte-2" : {
            fr : "&laquo;&nbsp;Tu as réussi&nbsp;! Nous sommes enfin débarrassés des bandits&nbsp;!&nbsp;&raquo;",
            en : "&laquo;&nbsp;You did it! We are finally rid of the bandits!&nbsp;&raquo;",
            eo : "&laquo;&nbsp; Vi sukcesas! Ni finfine estas liberaj de la banditoj!&nbsp;&raquo;"
        },
        "ville-porte-retour-2-texte-3" : {
            fr : "Il contemple le trophée, le visage émerveillé, mais se reprend soudain, l'air embêté.",
            en : "He gazes at the trophy, amazed, but then suddenly regains his composure, looking annoyed.",
            eo : "Li kontemplas la trofeon, ravita, sed subite retrankviliĝas, ŝajne ĝenita."
        },
        "ville-porte-retour-2-texte-4" : {
            fr : "&laquo;&nbsp;Oh non&hellip; Il faut que je fasse un rapport à Son Seigneur Niers, moi, maintenant&hellip;&nbsp;&raquo;",
            en : "&laquo;&nbsp;Oh no&hellip; I have to make a report to His Lord Niers, me, now&hellip;&nbsp;&raquo;",
            eo : "&laquo;&nbsp;Ho ne! Mi devas fari raporton al Lia Moŝtro Niers, me, nun&hellip;&nbsp;&raquo;"
        },


        "ville-porte-retour-3-texte-1" : {
            fr : "L'homme semble légèrement perdu dans ses pensées.",
            en : "The man seems to be lost in his thoughts.",
            eo : "Li vrio ŝajnas iomete perdita en siaj pensoj."
        },
        "ville-porte-retour-3-texte-2" : {
            fr : "&laquo;&nbsp;Oh oui, bien sûr&nbsp;! Tiens, prends cette lettre, elle porte ma signature.",
            en : "&laquo;&nbsp;Oh yes, of course! Here, take this letter, it has my signature.",
            eo : "&laquo;&nbsp; Ho jes, certe! Prenu ĉi tiun leteron, mi subskribis ĝin."
        },
        "ville-porte-retour-3-texte-3" : {
            fr : "Si l'un des gardes de la ville te manque de respect, montre-lui simplement ceci et dis-lui que tu es envoyé par Sobac. Il devrait alors te laisser tranquille.&nbsp;&raquo;",
            en : "If one of the city guards doesn’t respect you, just show him this and tell him that you’re sent by Sobac. Then, he should leave you alone.&nbsp;&raquo;",
            eo : "Se unu el gardisto de la urbo malrespektas vin, simple donu ĉi tiun kaj diru al li, ke vi estas sendita de Sobac. Tiam li devos lasi vin trankvila.&nbsp;&raquo;"
        },
        "ville-porte-retour-3-texte-4" : {
            fr : "Le garde ouvre alors la porte et vous laisse passer.",
            en : "Then, the guard open the door and let you in.",
            eo : "La gardisto malfermas la pordon kaj lasas vin pasi."
        },
        "ville-porte-retour-3-texte-5" : {
            fr : "&laquo;&nbsp;Bonne visite à toi, aventurier&nbsp;!&nbsp;&raquo;",
            en : "&laquo;&nbsp;Good visit to you, adventurer!&nbsp;&raquo;",
            eo : "&laquo;&nbsp; Bonan viziton al vi, aventurulo!&nbsp;&raquo;"
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