'use strict';
define([], function(){
	var data = {
        "necroSB-texte-1" : {
            fr : "Plein de confiance, vous p&eacute;n&eacute;trez fi&egrave;rement dans la derni&egrave;re salle.",
            en : "Full of confidence, you proudly enter the last room."
        },
        "necroSB-texte-2" : {
            fr : "Celle-ci est ronde et centr&eacute;e sur un grand puits d&rsquo;eau verte.",
            en : "It is round and centred on a large well of green water."
        },
        "necroSB-texte-3" : {
            fr : "Un vieil homme y est pench&eacute;, pronon&ccedil;ant d&rsquo;&eacute;tranges incantations.",
            en : "An old man is bent over there, pronouncing strange incantations."
        },

        "bossTousse-texte-1" : {
            fr : "Vous toussez l&eacute;g&egrave;rement pour attirer l&rsquo;attention du vieil homme,",
            en : "You're coughing lightly to get the old man's attention,"
        },
        "bossTousse-texte-2" : {
            fr : "mais &ecirc;tes soudain pris d&rsquo;une quinte plus forte.",
            en : "but are suddenly taken from a stronger coughing."
        },
        "bossTousse-texte-3" : {
            fr : "Le vieux, toujours pench&eacute;, n&rsquo;a pas boug&eacute; d&rsquo;un poil&hellip;",
            en : "The old man, always leaning, did not move a bit&hellip;"
        },

        "bossParle-texte-1" : {
            fr : "&laquo; Je suis venu pour les enfants ! O&ugrave; sont-ils ? &raquo;",
            en : "&laquo; I came for the children! Where are they? &raquo;"
        },
        "bossParle-texte-2" : {
            fr : "Le vieux se retourne alors lentement en souriant&hellip;",
            en : "The old man then turns slowly and smiles&hellip;"
        },
        "bossParle-texte-3" : {
            fr : "Lorsque vous voyez son visage, vous ne pouvez que r&eacute;prouver un fort d&eacute;go&ucirc;t :",
            en : "When you see his face, you can only condemn a strong disgust:"
        },
        "bossParle-texte-4" : {
            fr : "De nombreux vers circulent dans la peau de son cou et descendent sous son ample manteau.",
            en : "Many worms circulate in the skin of her neck and descend under her large mantle."
        },

        "bossAvance-texte-1" : {
            fr : "Vous avancez vers le vieil homme et posez une main sur son &eacute;paule.",
            en : "You walk towards the old man and put a hand on his shoulder."
        },
        "bossAvance-texte-2" : {
            fr : "Il se retourne alors lentement en souriant&hellip;",
            en : "He then turns slowly and smiles&hellip;"
        },

        "bossAvance2-texte-1" : {
            fr : "&laquo; Bienvenue, jeune homme&hellip; Je suis le ma&icirc;tre de ces lieux. &raquo;",
            en : "&laquo; Welcome, young man&hellip; I am the master of these places. &raquo;"
        },
        "bossAvance2-texte-2" : {
            fr : "Il vous regarde, mais ses yeux renvoient le vide.",
            en : "He looks at you, but his eyes send back the void."
        },
        "bossAvance2-texte-3" : {
            fr : "&laquo; Vous avez certainement vu mes cr&eacute;ations ?",
            en : "&laquo; You've probably seen my creations ?"
        },
        "bossAvance2-texte-4" : {
            fr : "Si ce n&rsquo;est pas le cas, laissez moi vous les pr&eacute;senter&hellip; &raquo;",
            en : "If not, let me introduce them to you&hellip; &raquo;"
        },
        "bossAvance2-texte-5" : {
            fr : "Il ricane doucement, alors que deux <span key='experience'>monstres</span> sortent du puits.",
            en : "He sneers softly, as two <span key='experience'>monsters</span> emerge from the well."
        },
        "bossAvance2-texte-6" : {
            fr : "Ils ressemblent &agrave; des enfants, mais n&rsquo;en ont plus que l&rsquo;apparence&hellip;",
            en : "They look like children, but they only have theirs appareance&hellip;"
        },

        "boss2-texte-1" : {
            fr : "Vous tuez &agrave; contrec&oelig;ur ces abominations&hellip;",
            en : "You grudgingly kill these abominations&hellip;"
        },
        "boss2-texte-2" : {
            fr : "&laquo; Nonnnn !! Qu&rsquo;avez-vous fait &agrave; mes perles ! Vous allez le regretter ! &raquo;",
            en : "&laquo; Nooooo!! What have you done to my pearls! You'll regret it! &raquo;"
        },
        "boss2-texte-3" : {
            fr : "Le <span key='necromancien'>vieux</span> s&rsquo;approche en titubant et tend les bras en avant.",
            en : "The <span key='necromancien'>old man</span> approaches staggeringly and stretches his arms forward."
        },
        "boss2-texte-4" : {
            fr : "Le combat risque d&rsquo;&ecirc;tre facile&hellip;",
            en : "The fight is likely to be easy&hellip;"
        },

        "boss3-texte-1" : {
            fr : "Le vieux avait de la ressource !",
            en : "The old man had resources!"
        },
        "boss3-texte-2" : {
            fr : "Vous finissez le combat en lui transper&ccedil;ant le c&oelig;ur, puis repartez.",
            en : "You finish the fight by piercing his heart, then going back."
        },
        "boss3-texte-3" : {
            fr : "Les enfants seront au moins lib&eacute;r&eacute;s de ce monstre&hellip;",
            en : "Children will at least be free from this monster&hellip;"
        },
        "boss3-texte-4" : {
            fr : "Alors que vous vous appr&ecirc;tez &agrave; ouvrir la porte pour sortir,",
            en : "As you're about to open the door to get out,"
        },
        "boss3-texte-5" : {
            fr : "vous entendez rire derri&egrave;re vous&hellip;",
            en : "You hear laughter behind you&hellip;"
        },

        "boss4-texte-1" : {
            fr : "Une voix caverneuse r&eacute;sonne dans la pi&egrave;ce :",
            en : "A cavernous voice resounds in the room:"
        },
        "boss4-texte-2" : {
            fr : "&laquo; Hahaha ! Tu pensais vraiment me battre ainsi ?! &raquo;",
            en : "&laquo; Hahaha! Did you really think you'd beat me like that?! &raquo;"
        },
        "boss4-texte-3" : {
            fr : "Une dalle de la pi&egrave;ce vole vers vous et s&rsquo;&eacute;crase sur le mur.",
            en : "A slab of the room flies towards you and crashes on the wall."
        },
        "boss4-texte-4" : {
            fr : "&laquo; Tu n&rsquo;as fait que me lib&eacute;rer, pauvre mortel ! &raquo;",
            en : "&laquo; All you did was set me free, you mortal bastard! &raquo;"
        },
        "boss4-texte-5" : {
            fr : "Les dalles dansent dans la salle et un tourbillon se forme dans le puits.",
            en : "The slabs dance in the room and a whirlpool is formed in the well."
        },

        "boss5-texte-1" : {
            fr : "&laquo; Les enfants sont &agrave; moi ! Ils sont si faciles &agrave; manipuler, &agrave; torturer&hellip; &raquo;",
            en : "&laquo; The children are mine! They are so easy to manipulate, to torture&hellip; &raquo;"
        },
        "boss5-texte-2" : {
            fr : "Le tourbillon grandit et sort violemment du puits pour s&rsquo;&eacute;craser sur le cadavre du vieux.",
            en : "The vortex grows and violently comes out of the well to crash on the old man's corpse."
        },
        "boss5-texte-3" : {
            fr : "&laquo; Ils sont mon arm&eacute;e ! Tu n&rsquo;es pas en mesure de nous arr&ecirc;ter ! &raquo;",
            en : "&laquo; They're my army! You can't stop us! &raquo;"
        },
        "boss5-texte-4" : {
            fr : "Le corps du vieillard se rel&egrave;ve et vole dans l&rsquo;air comme une marionnette.",
            en : "The old man's body lifts up and flies in the air like a puppet."
        },
        "boss5-texte-5" : {
            fr : "&laquo; Maintenant, observe ta fin ! &raquo;",
            en : "&laquo; Now, watch your end! &raquo;"
        },
        "boss5-texte-6" : {
            fr : "Le <span key='liche'>vieux</span> se redresse d&rsquo;un coup et se jette sur vous avec agilit&eacute; !",
            en : "The <span key='liche'>old man</span> straightens up suddenly and throws himself on you with agility!"
        },

        "boss6-texte-1" : {
            fr : "Vous exterminez ce d&eacute;mon sans remords !",
            en : "You exterminate this evil without remorse!"
        },
        "boss6-texte-2" : {
            fr : "Son &acirc;me s&rsquo;envole dans la pi&egrave;ce, emportant avec elle le liquide vert inf&acirc;me.",
            en : "His soul flies into the room, carrying with it the unfame green liquid."
        },
        "boss6-texte-3" : {
            fr : "Mais&hellip; Personne ne le saura jamais&hellip;",
            en : "But&hellip; Nobody will ever know&hellip;"
        },
        "boss6-texte-4" : {
            fr : "Vous, pauvre aventurier, avez sauv&eacute; le village et certainement le monde.",
            en : "You poor adventurer saved the village and certainly the world."
        },
        "boss6-texte-5" : {
            fr : "Avec noblesse, vous vous retournez et partez vers de nouvelles aventures.",
            en : "With nobility, you turn around and set off on new adventures."
        },
        "boss6-texte-6" : {
            fr : "Peut-être d'autres quêtes valent-elles la peine d'être vécues&hellip;",
            en : "Perhaps other quests are worth living&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});