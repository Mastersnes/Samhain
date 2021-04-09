'use strict';
define([], function(){
	var data = {
	    "necroSB-texte-1" : {
        	fr : "Plein de confiance, vous pénétrez fièrement dans la dernière salle.",
        	en : "Full of confidence, you proudly enter the last room.",
        	eo : "Fidante, vi fiere eniras en la lastan ĉambron."
        },
        "necroSB-texte-2" : {
        	fr : "Celle-ci est ronde et centrée sur un grand puits d'eau verte.",
        	en : "This one is circular and centred on a large well full of green water.",
        	eo : "Ĉi tiu estas ronda kaj centrita sur granda puto de verda akvo."
        },
        "necroSB-texte-3" : {
        	fr : "Un vieil homme y est penché, prononçant d'étranges incantations.",
        	en : "An old man is leaning over it, pronouncing strange incantations.",
        	eo : "Maljuna viro kliniĝas super ĝin, prononcante strangajn sorĉojn."
        },

        "bossTousse-texte-1" : {
        	fr : "Vous toussez légèrement pour attirer son attention,",
        	en : "You lightly cough to get him attention,",
        	eo : "Vi iomete tusas por altiri lian atenton,"
        },
        "bossTousse-texte-2" : {
        	fr : "mais êtes soudain pris d'une quinte plus forte.",
        	en : "but are suddenly taken from a stronger coughing.",
        	eo : "sed subite vi havas pli fortan tusadon."
        },
        "bossTousse-texte-3" : {
        	fr : "Le vieux, toujours penché, n'a pas bougé d'un poil&hellip;",
        	en : "The old man, still leaning, didn’t move a bit&hellip;",
        	eo : "La maljunulo, ankoraŭ kliniĝante, ne moviĝis&hellip;"
        },

        "bossParle-texte-1" : {
        	fr : "&laquo;&nbsp;Je suis venu pour les enfants&nbsp;! Où sont-ils&nbsp;?&nbsp;&raquo;",
        	en : "&laquo;&nbsp;I came for the children! Where are they?&nbsp;&raquo;",
        	eo : "&laquo;&nbspMi venis por la infanoj! Kie estas ili?&nbsp;&raquo;"
        },
        "bossParle-texte-2" : {
        	fr : "Le vieux se retourne alors lentement en souriant&hellip;",
        	en : "Then, the old man slowly turns around and smiles&hellip;",
        	eo : "La maljunulo malrapide turniĝas ridetante&hellip;"
        },
        "bossParle-texte-3" : {
        	fr : "Lorsque vous voyez son visage, vous ressentez un fort dégoût&nbsp;:",
        	en : "When you see his face, you feel a strong disgust:",
        	eo : "Ĉiam vi vidas lian visaĝon, vi sentas fortan naŭzon:"
        },
        "bossParle-texte-4" : {
        	fr : "De nombreux vers circulent dans la peau de son cou et descendent sous son ample manteau.",
        	en : "Many worms circulate in his neck’s skin and descend under his wide overcoat.",
        	eo : "Multaj vermoj cirkulas en la haŭto de lia kolo kaj malsupreniras sub lian larĝan mantelon."
        },

        "bossAvance-texte-1" : {
        	fr : "Vous avancez vers le vieil homme et posez une main sur son épaule.",
        	en : "You head for the old man and put a hand on his shoulder.",
        	eo : "Vi marŝas al la maljuna viro kaj metas vian manon sur lian ŝultron."
        },
        "bossAvance-texte-2" : {
        	fr : "Il se retourne alors lentement en souriant&hellip;",
        	en : "Then, he slowly turns around and smiles&hellip;",
        	eo : "Li malrapide turniĝas ridetante&hellip;"
        },

        "bossAvance2-texte-1" : {
        	fr : "&laquo;&nbsp;Bienvenue, jeune homme&hellip; Je suis le maître de ces lieux.&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Welcome, young man&hellip; I am the master of these places.&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Bonvenon, juna viro&hellip; Mi estas la mastro de ĉi tiuj lokoj.&nbsp;&raquo;"
        },
        "bossAvance2-texte-2" : {
        	fr : "Il vous regarde, mais ses yeux renvoient le vide.",
        	en : "He looks at you, but his eyes send back the void.",
        	eo : "Li rigardas vin, sed lia rigardo estas malplena."
        },
        "bossAvance2-texte-3" : {
        	fr : "&laquo;&nbsp;Vous avez certainement vu mes créations&nbsp;?",
        	en : "&laquo;&nbsp;You've probably seen my creations?",
        	eo : "Vi certe vidis miajn kreaĵojn, ĉu ne?"
        },
        "bossAvance2-texte-4" : {
        	fr : "Si ce n'est pas le cas, laissez-moi vous les présenter&hellip;&nbsp;&raquo;",
        	en : "If that’s not the case, let me introduce them to you&hellip;&nbsp;&raquo;",
        	eo : "Alie, lasu min prezenti ilin al vi&hellip;&nbsp;&raquo;"
        },
        "bossAvance2-texte-5" : {
        	fr : "Il ricane doucement, alors que deux <span key='experience'>monstres</span> sortent du puits.",
        	en : "He softly sneers, as two <span key='experience'>monsters</span> emerge from the well.",
        	eo : "Li mallaŭte rikanas, dum du <span key='experience'>monstroj</span> eliras el la puto."
        },
        "bossAvance2-texte-6" : {
        	fr : "Ils ressemblent à des enfants, mais n'en ont plus que l'apparence&hellip;",
        	en : "They look like children, but they only have theirs appearance&hellip;",
        	eo : "Ili aspektas kiel infanoj, sed ili nur havas iliaj aspekto&hellip;","
        },

        "boss2-texte-1" : {
        	fr : "Vous tuez à contrecœur ces abominations&hellip;",
        	en : "Regretfully, you kill these abominations&hellip;",
        	eo : "Vi bedaŭre mortigas ĉi tiujn abomenaĵojn&hellip;"
        },
        "boss2-texte-2" : {
        	fr : "&laquo;&nbsp;Nonnnn&nbsp;!! Qu'avez-vous fait à mes perles&nbsp;! Vous allez le regretter&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Nooooo!! What have you done to my gems! You'll regret it!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Neeee!! Kio vi faris al miaj perloj! Vi bedaŭros tion!&nbsp;&raquo;"
        },
        "boss2-texte-3" : {
        	fr : "Le <span key='necromancien'>vieux</span> s'approche en titubant et tend les bras en avant.",
        	en : "The <span key='necromancien'>old man</span> approaches staggeringly and stretches his arms forward.",
        	eo : "La maljunulo <span key='necromancien'>alproksimiĝas</span> ŝanciliĝante kaj streĉas liajn brakoj antaŭen."
        },
        "boss2-texte-4" : {
        	fr : "Le combat risque d'être facile&hellip;",
        	en : "The fight seems to be easy&hellip;",
        	eo : "La batalo estos facila&hellip;"
        },

        "boss3-texte-1" : {
        	fr : "Le vieux avait de la ressource&nbsp;!",
        	en : "The old man had some answers!",
        	eo : "La maljuno ne estis tiel malforta!"
        },
        "boss3-texte-2" : {
        	fr : "Vous finissez le combat en lui transperçant le cœur, puis repartez.",
        	en : "You finish the fight by piercing his heart, then leave the places.",
        	eo : "Vi finas la batalon trapikante lian koron, kaj foriras."
        },
        "boss3-texte-3" : {
        	fr : "Les enfants seront au moins libérés de ce monstre&hellip;",
        	en : "At least, children will be free from this monster&hellip;",
        	eo : "La infanoj almenaŭ estos liberigitaj de ĉi tiu monstro&hellip;"
        },
        "boss3-texte-4" : {
        	fr : "Alors que vous vous apprêtez à ouvrir la porte pour sortir,",
        	en : "As you're about to open the door to get out,",
        	eo : "Malfermante la pordon por eliri,"
        },
        "boss3-texte-5" : {
        	fr : "vous entendez rire derrière vous&hellip;",
        	en : "you hear laughters behind you&hellip;",
        	eo : "vi aŭdas ridon malantaŭ vi&hellip;"
        },

        "boss4-texte-1" : {
        	fr : "Une voix caverneuse résonne dans la pièce&nbsp;:",
        	en : "A cavernous voice resonate in the room:",
        	eo : "Raŭka voĉo resonas en la ĉambro:"
        },
        "boss4-texte-2" : {
        	fr : "&laquo;&nbsp;Hahaha&nbsp;! Tu pensais vraiment me battre ainsi&nbsp;?!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Hahaha! Did you really think you could beat me like that?!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Hahaha! Ĉu vi vere pensis, ke vi venkos min tiel?!&nbsp;&raquo;"
        },
        "boss4-texte-3" : {
        	fr : "Une dalle vole vers vous et s'écrase sur le mur.",
        	en : "A slab flies towards you and crashes on the wall.",
        	eo : "Kahelo flugas al vi kaj kraŝas sur la muron."
        },
        "boss4-texte-4" : {
        	fr : "&laquo;&nbsp;Tu n'as fait que me libérer, pauvre mortel&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;All you did was to set me free, poor mortal!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp; Vi nur liberigis min, mizera mortemulo!&nbsp;&raquo;"
        },
        "boss4-texte-5" : {
        	fr : "Les dalles dansent dans la salle et un tourbillon se forme dans le puits.",
        	en : "The slabs dance in the room and a vortex appears in the well.",
        	eo : "Kaheloj dancas en la ĉambro kaj kirlo formiĝas en la puto."
        },

        "boss5-texte-1" : {
        	fr : "&laquo;&nbsp;Les enfants sont à moi&nbsp;! Ils sont si faciles à manipuler, à torturer&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;The children are mine! They are so easy to manipulate, to torture&hellip;&nbsp;&raquo;",
        	eo : "&laquo;&nbsp; La infanoj estas miaj! Ili estas tiel facile manipuleblaj, totrtureblaj&hellip;&nbsp;&raquo;"
        },
        "boss5-texte-2" : {
        	fr : "Le tourbillon grandit et sort violemment du puits pour s'écraser sur le cadavre du vieux.",
        	en : "The vortex grows and violently comes out of the well to crash on the old man's corpse.",
        	eo : "La kirlo kreskas kaj subite eliras el la puto por kraŝi sur la kadavron de la majunulo. "
        },
        "boss5-texte-3" : {
        	fr : "&laquo;&nbsp;Ils sont mon armée&nbsp;! Tu n'es pas en mesure de nous arrêter&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;They are my army! You can't stop us!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Ili estas mia armeo! Vi ne povos haltigi nin!&nbsp;&raquo;"
        },
        "boss5-texte-4" : {
        	fr : "Le corps du vieillard se relève et vole dans l'air comme une marionnette.",
        	en : "The old man's body lifts up and flies in the air like a puppet.",
        	eo : "La korpo de la maljunulo leviĝas kaj flugas en la aero kiel marioneto."
        },
        "boss5-texte-5" : {
        	fr : "&laquo;&nbsp;Maintenant, observe ta fin&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Now, watch your end!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Nun, observu vian finon!&nbsp;&raquo;"
        },
        "boss5-texte-6" : {
        	fr : "Le <span key='liche'>vieux</span> se redresse d'un coup et se jette sur vous avec agilité&nbsp;!",
        	en : "The <span key='liche'>old man</span> straightens up suddenly and leaps on you with agility!",
        	eo : "La <span key='liche'>maljunulo</span> subite leviĝas kaj ĵetiĝas sur vin kun lerteco!"
        },

        "boss6-texte-1" : {
        	fr : "Vous exterminez ce démon sans remords&nbsp;!",
        	en : "You exterminate this evil without regret!",
        	eo : "Vi ekstermas ĉi tiun demonon sen bedaŭroj!"
        },
        "boss6-texte-2" : {
        	fr : "Son âme s'envole dans la pièce, emportant avec elle le liquide vert infâme.",
        	en : "His soul flies into the room, carrying with him the unfame green liquid.",
        	eo : "Ĝia animo flugas en la ĉambron, forprenante kun ĝi la abomena verda likvaĵo."
        },
        "boss6-texte-3" : {
        	fr : "Mais&hellip; Personne ne le saura jamais&hellip;",
        	en : "But&hellip; Nobody will ever know&hellip;",
        	eo : "Sed&hellip; Neniu iam scios&hellip;"
        },
        "boss6-texte-4" : {
        	fr : "Vous, pauvre aventurier, avez sauvé le village et certainement le monde.",
        	en : "You, poor adventurer, have saved the village and certainly the world.",
        	eo : "Vi, kompatinda aventurulo, savis la vilaĝon kaj certe la mondo."
        },
        "boss6-texte-5" : {
        	fr : "Avec noblesse, vous vous retournez et partez vers de nouvelles aventures.",
        	en : "With grandeur, you turn around and set off on new adventures.",
        	eo : "Kun nobleco, vi turniĝas kaj ekiras al novaj aventuroj."
        },
        "boss6-texte-6" : {
        	fr : "Peut-être d'autres quêtes valent-elles la peine d'être vécues&hellip;",
        	en : "Perhaps other quests are worth living&hellip;",
        	eo : "Eble, ke iliaj defioj indas esti vivataj&hellip;"
        }
	};
	
	return {
        name : function() {
            return "Tuto Crypte Boss.js";
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
        },
    };
});