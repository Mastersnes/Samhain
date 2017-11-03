'use strict';
define(["jquery"], function($){
	var data = {
	        /**
	         * Menu
	         */
			"bienvenue" : {
				fr : "Bienvenue",
				en : "Wellcome"
			},
			"guest" : {
				fr : "Invité",
				en : "Guest"
			},
	        "newgame" : {
                fr : "Nouveau Periple",
                en : "New Journey"
            },
            "continue" : {
                fr : "Continuer",
                en : "Continue"
            },
            "option" : {
                fr : "Option",
                en : "Option"
            },
            "credits" : {
                fr : "Crédits",
                en : "Credits"
            },
            "illustration" : {
                fr : "Illustrations",
                en : "Illustrations"
            },
            "developpement" : {
                fr : "D&eacuteveloppement",
                en : "Development"
            },
            "textes" : {
                fr : "Textes",
                en : "Texts"
            },
	        "langage" : {
	            fr : "Langage :",
	            en : "Language :"
	        },
	        "fullscreen" : {
	            fr : "Plein &eacutecran (appuyez sur echap pour revenir)",
	            en : "Fullscreen (press escape for return)"
	        },
	        "copyright-licence" : {
	            fr : "Cette oeuvre est sous license ",
	            en : "This work is licensed by "
	        },
	        "copyright-donot" : {
	            fr : "Merci de ne pas la modifier ou la partager de fa&ccedil;on commerciale sans notre accord.",
	            en : "Please don't modify and share it commercially without our consent."
	        },
	        "followUs" : {
	            fr : "Suivez-nous sur <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> ou <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>.",
	            en : "Follow us on <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> or <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>."
	        },
	        "followUs2" : {
	            fr : "Soutenez-nous sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
	            en : "Support us on <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>."
	        },
	        "followUs3" : {
	            fr : "Nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
	            en : "Our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
	        },
	        /**
	         * Jeu
	         */
	        "inventaire" : {
	            fr : "Inventaire",
	            en : "Inventory"
	        },
	        "lvl" : {
                fr : "Niv.",
                en : "Lvl."
            },
	        
	        /**
	         * Glossaire
	         */
	        "vie" : {
	            fr : "Vie",
	            en : "Life"
	        },
	        "attack" : {
	            fr : "Attaque",
	            en : "Attack"
	        },
	        "defense" : {
	            fr : "Défense",
	            en : "Defense"
	        },
	        "experienceGain" : {
	            fr : "Gain d'expérience",
	            en : "Experience gained"
	        },
	        "argentGain" : {
	            fr : "Gain d'argent",
	            en : "Income"
	        },
	        "lifeGain" : {
	            fr : "Gain de vie",
	            en : "Gain of life"
	        },
	        "attackGain" : {
	            fr : "Gain d'attaque",
	            en : "Attack gain"
	        },
	        "defenseGain" : {
	            fr : "Gain de défense",
	            en : "Defense gain"
	        },
	        
	        /**
	         * Monstres
	         */
	        "araignee" : {
                fr : "Araignée",
                en : "Spider"
            },
            "araignee-texte" : {
                fr : "Cette horrible créature vit souvent en groupe. De petite taille, elles grouillent par milliers dans l'obscurité.",
                en : "This horrible creature often lives in a group. Small in size, they swarm by the thousands in the darkness."
            },
            "bandit" : {
                fr : "Bandit",
                en : "Bandit"
            },
            "bandit-texte" : {
                fr : "Ils errent dans les vieilles tombes à la recherche de trésors ou de babioles. N'essayez jamais de voler leurs biens, ils sont plutôt grincheux.",
                en : "They wander through old tombs in search of treasures or trinkets. Never try to steal their belongings, they're rather cranky."
            },
            "roiAraigneeBlesse" : {
                fr : "Roi des araignées",
                en : "King of Spiders"
            },
            "roiAraigneeBlesse-texte" : {
                fr : "Il reigne sur le royaume des araignées. Il est blessé mais protégera toujours ses enfants. Restez sur vos gardes, Vous pourriez le regretter !",
                en : "He reigns over the kingdom of spiders. He's hurt, but he'll always protect his children. Stay on your toes, you might regret it !"
            },
            "goule" : {
                fr : "Goule",
                en : "Ghoul"
            },
            "goule-texte" : {
                fr : "Un cadavre en décomposition, réveillé par la magie d'un mage noir. Il a un besoin instinctif de se repaître de chair fraîche.",
                en : "A decaying corpse, awakened by the magic of a black magician. He has an instinctive need to feed on fresh flesh."
            },
            "garde" : {
                fr : "Garde",
                en : "Guard"
            },
            "garde-texte" : {
                fr : "Garde de la ville. Un peu lent à la détente, mais redoutable à l'épée !",
                en : "City guard. A little slow to relax, but fearful by the sword!"
            },
            "villageois" : {
                fr : "Villageois",
                en : "Villagers"
            },
            "villageois-texte" : {
                fr : "Un courageux villageois prêt à tout pour défendre ses terres. Attention, sa fourche pourrait piquer un peu...",
                en : "A courageous villager who will do anything to defend his land. Be careful, his fork might sting a little..."
            },
            "grosseGoule" : {
                fr : "Grosse goule",
                en : "Big Ghoul"
            },
            "grosseGoule-texte" : {
                fr : "Un cadavre putréfié, relevé par un mage noir puissant. Sa force a été décuplé par de sombres sortilèges.",
                en : "A rotten corpse, raised by a powerful black magician. His strength has been multiplied tenfold by dark spells."
            },
            "squelette" : {
                fr : "Squelette",
                en : "Skeleton"
            },
            "squelette-texte" : {
                fr : "Un tas d'os qui marche. Aucune défense, mais une sacré épée entre les mains !",
                en : "A bunch of bones walking. No defense, but a hell of a sword in his hands!"
            },
            "squeletteManchot" : {
                fr : "Squelette manchot",
                en : "one-armed skeleton"
            },
            "squeletteManchot-texte" : {
                fr : "Un squelette avec une main en moins. C'est presque trop facile...",
                en : "A skeleton with one hand less. It's almost too easy..."
            },
            "experience" : {
                fr : "Expérience",
                en : "Experience"
            },
            "experience-texte" : {
                fr : "L'infâme expérience d'un sorcier fou. Elle ressemble à un enfant blanc comme un cadavre. Ses bras sont anormalement longs et couverts de coupures. De ses doigts sortent de grandes tiges de fer...",
                en : "The infamous experience of a mad wizard. She looks like a child as white as a corpse. His arms are abnormally long and covered with cuts. From his fingers come out large rods of iron..."
            },
            "necromancien" : {
                fr : "Nécrom ' l'ancien",
                en : "Necrom ancient"
            },
            "necromancien-texte" : {
                fr : "Un horrible sorcier usant de magie noir ! Il ressemble à un vieillard et tiens à peine sur ses jambes...",
                en : "A horrible wizard using black magic! He looks like an old man and barely stands on his legs..."
            },
            "liche" : {
                fr : "Liche",
                en : "Lich"
            },
            "liche-texte" : {
                fr : "Un spectre tout droit sortie de l'au-delà ! Une aura néfaste l'entoure, laissant présager de sa puissance...",
                en : "A spectrum straight out of the afterlife! A harmful aura surrounds it, letting us imagine its power..."
            },
            
            /**
             * Suffixes
             */
            "grognon" : {
                fr : "Grognon",
                en : "Grumpy"
            },
            "hargneux-m" : {
                fr : "Hargneux",
                en : "Snarly"
            },
            "hargneux-f" : {
                fr : "Hargneuse",
                en : "Snarly"
            },
            "debile" : {
                fr : "Débile",
                en : "Dummy"
            },
            "borgne" : {
                fr : "Borgne",
                en : "One-eyed"
            },
            "timide" : {
                fr : "Timide",
                en : "Shy"
            },
            "freluquet" : {
                fr : "Freluquet",
                en : "Whippersnapper"
            },
            "bourrin-m" : {
                fr : "Bourrin",
                en : "Lout"
            },
            "bourrin-f" : {
                fr : "Bourrine",
                en : "Lout"
            },
            "costaud" : {
                fr : "Costaud",
                en : "Strong"
            },
            "fairplay" : {
                fr : "Fair-play",
                en : "Fair-play"
            },
            "mignon-m" : {
                fr : "Mignon",
                en : "Cute"
            },
            "mignon-f" : {
                fr : "Mignonne",
                en : "Cute"
            },
            "terrifiant-m" : {
                fr : "Terrifiant",
                en : "Terrifying"
            },
            "terrifiant-f" : {
                fr : "Terrifiante",
                en : "Terrifying"
            },
            "cruel-m" : {
                fr : "Cruel",
                en : "Cruel"
            },
            "cruel-f" : {
                fr : "Cruelle",
                en : "Cruel"
            },
            "original-m" : {
                fr : "Original",
                en : "Original"
            },
            "original-f" : {
                fr : "Originale",
                en : "Original"
            },
            "malade" : {
                fr : "Malade",
                en : "Sick"
            },
            "feroce" : {
                fr : "Féroce",
                en : "Fierce"
            },
            "glouton-m" : {
                fr : "Glouton",
                en : "Glutton"
            },
            "glouton-f" : {
                fr : "Gloutonne",
                en : "Glutton"
            },
            "illumine-m" : {
                fr : "Illuminé",
                en : "Visionary"
            },
            "illumine-f" : {
                fr : "Illuminée",
                en : "Visionary"
            },
            "savant-m" : {
                fr : "Savant",
                en : "Savant"
            },
            "savant-f" : {
                fr : "Savante",
                en : "Savant"
            },
            "fouFurieux-m" : {
                fr : "Fou furieux",
                en : "Raving lunatic"
            },
            "fouFurieux-f" : {
                fr : "Folle furieuse",
                en : "Raving lunatic"
            },
            "fragile" : {
                fr : "Fragile",
                en : "Frail"
            },
            "pleunirchard-m" : {
                fr : "Pleunirchard",
                en : "Whiny"
            },
            "pleunirchard-f" : {
                fr : "Pleunircharde",
                en : "Whiny"
            },
            "pauvre" : {
                fr : "Pauvre",
                en : "Poor"
            },
            "riche" : {
                fr : "Riche",
                en : "Rich"
            },
            
            /**
             * Armes
             */
            "piocher" : {
                fr : "Piocher",
                en : "Draw"
            },
            "poing" : {
                fr : "Poing",
                en : "Fist"
            },
            "poing-action" : {
                fr : "Coup de poing",
                en : "Punch"
            },
            "poing-texte" : {
                fr : "C'est simplement votre poing... Depuis votre naissance il ne vous a pas quitté.",
                en : "It's just your fist... Since your birth he hasn't left you."
            },
            "baton" : {
                fr : "Bâton",
                en : "Stick"
            },
            "baton-action" : {
                fr : "Coup de bâton",
                en : "Stick stroke"
            },
            "baton-texte" : {
                fr : "Un gros bâton qui peut faire très mal...",
                en : "A big stick that can hurt a lot..."
            },
            "dague" : {
                fr : "Dague",
                en : "Dagger"
            },
            "dague-action" : {
                fr : "Coup de dague",
                en : "Dagger stroke"
            },
            "dague-texte" : {
                fr : "Une belle dague toute brillante. Sa lame semble tranchante comme un rasoir.",
                en : "A beautiful and brilliant dagger. Its blade looks sharp as a razor-sharp."
            },
            "epee" : {
                fr : "Épée",
                en : "Sword"
            },
            "epee-action" : {
                fr : "Coup d'épée",
                en : "Sword strike"
            },
            "epee-texte" : {
                fr : "Une grosse épée à une main. Elle est aussi lourde que tranchante !",
                en : "A big sword with one hand. It's as heavy as it is sharp!"
            },
            "crocRoi" : {
                fr : "Croc du roi",
                en : "King's fang"
            },
            "crocRoi-action" : {
                fr : "Coup de croc",
                en : "Fang strike"
            },
            "crocRoi-texte" : {
                fr : "Le croc de votre ancien ami... Il dégage une odeur putride... Parfait pour une petite balade !",
                en : "Your old friend's fang... It emits a putrid smell... Perfect for a short walk!"
            },
            
            /**
             * Armures
             */
            "bras" : {
                fr : "Bras",
                en : "Arm"
            },
            "bras-action" : {
                fr : "Bloquer avec son bras",
                en : "Block with arm"
            },
            "bras-texte" : {
                fr : "Votre bras... Tout simplement... Vous pouvez en être fier !",
                en : "Your arm... Quite simply... You can be proud of it!"
            },
            "bouclierBois" : {
                fr : "Bouclier de bois",
                en : "Wooden Shield"
            },
            "bouclierBois-action" : {
                fr : "Parer avec le bouclier",
                en : "Parry with the shield"
            },
            "bouclierBois-texte" : {
                fr : "Un bouclier en bois assez banale. Il semble plutôt résistant.",
                en : "A fairly commonplace wooden shield. He seems pretty resilient."
            },
            "bouclierFer" : {
                fr : "Bouclier en fer",
                en : "Iron Shield"
            },
            "bouclierFer-action" : {
                fr : "Contrer avec le bouclier",
                en : "Countering with the shield"
            },
            "bouclierFer-texte" : {
                fr : "Un grand bouclier en fer ! Il est très résistant.",
                en : "A big iron shield! It is very resistant."
            },
            
            /**
             * Consommable
             */
            "potionSante" : {
                fr : "Potion de vie",
                en : "Potion of life"
            },
            "potionSante-action" : {
                fr : "Boire la potion de vie",
                en : "Drinking the potion of life"
            },
            "potionSante-texte" : {
                fr : "Une drôle de fiole toute rouge. Sur l'étiquette, il est noté : &laquo; Ne pas en abuser, donne la diarrhée &raquo;.",
                en : "That's a funny red vial. On the label, it is noted: &laquo; Don't abuse it, gives diarrhea &raquo;."
            },
            "fromage" : {
                fr : "Fromage",
                en : "Cheese"
            },
            "fromage-action" : {
                fr : "Manger le fromage",
                en : "Eating cheese"
            },
            "fromage-texte" : {
                fr : "Un vieux fromage légèrement moisi...",
                en : "An old slightly mouldy cheese..."
            },
            "pomme" : {
                fr : "Pomme",
                en : "Apple"
            },
            "pomme-action" : {
                fr : "Croquer la pomme",
                en : "Chew the apple"
            },
            "pomme-texte" : {
                fr : "Une belle pomme bien rouge ! Vous allez vous régaler !",
                en : "A beautiful red apple! It's delicious!"
            },
            "venin" : {
                fr : "Venin",
                en : "Venom"
            },
            "venin-action" : {
                fr : "Lancer le venin",
                en : "Throwing the venom"
            },
            "venin-texte" : {
                fr : "Une poche de venin prélevée sur une grosse araignée !",
                en : "A pocket of venom from a big spider!"
            },
            "elixir" : {
                fr : "Élixir",
                en : "Elixir"
            },
            "elixir-action" : {
                fr : "Boire l'élixir",
                en : "Drinking the elixir"
            },
            "elixir-texte" : {
                fr : "Une grosse fiole éclatante de lumière ! Une étiquette indique : &laquo; Ne pas boire après minuit, risque d'allergie &raquo;.",
                en : "A big, bright vial of light! A label says: &laquo; Do not drink after midnight, risk of allergy &raquo;."
            },
            
            /**
             * Magie
             */
            "bouleFeu" : {
                fr : "Boule de feu",
                en : "Fireball"
            },
            "bouleFeu-action" : {
                fr : "*Boule de feu*",
                en : "*Fireball*"
            },
            "bouleFeu-texte" : {
                fr : "Un sort imparable permettant de lancer une énorme boule de feu !",
                en : "An unstoppable spell to cast a huge ball of fire!"
            },
            "soin" : {
                fr : "Soin",
                en : "Heal"
            },
            "soin-action" : {
                fr : "*Soin*",
                en : "*Heal*"
            },
            "soin-texte" : {
                fr : "Un sort permettant de se soigner. Le reiki peut aller se r'habiller !",
                en : "A spell for healing. The reiki can go back where he came from!"
            },
            
            /**
             * Clef
             */
            "bougie" : {
                fr : "Bougie",
                en : "Candle"
            },
            "bougie-texte" : {
                fr : "Une vieille bougie accompagné du matériel nécessaire pour l'allumer.",
                en : "An old candle with the necessary equipment to light it."
            },
            "clefS2" : {
                fr : "Clef de la salle 2",
                en : "Key of the room 2"
            },
            "clefS2-texte" : {
                fr : "Une simple clef.",
                en : "A simple key."
            },
            
            /**
             * Histoire
             */
            "gagne-texte-1" : {
                fr : "Félicitation, vous avez terminé le jeu !",
                en : "Congratulations, you have finished the game!"
            },
            "retry" : {
                fr : "Vous pouvez aussi retenter votre chance en lancant une nouvelle partie.",
                en : "You can also try your luck again by starting a new game."
            },
            "restart-action" : {
                fr : "Recommencer",
                en : "Restart"
            },
            "retry-action" : {
                fr : "Réessayer",
                en : "Retry"
            },
            
            "perdu-texte-1" : {
                fr : "Oh non ! vous avez perdu !",
                en : "Oh no! you lost!"
            },
            
            "start-texte-1" : {
                fr : "Une nouvelle journée se termine.",
                en : "A new day ends."
            },
            "start-texte-2" : {
                fr : "La douceur de l'automne caresse les feuilles qui virevoltent aux alentours.",
                en : "The sweetness of autumn caresses the leaves that twirl around."
            },
            "start-texte-3" : {
                fr : "Ayant terminé votre dur labeur un peu plus tôt,",
                en : "Having finished your hard work a little sooner,"
            },
            "start-texte-4" : {
                fr : "Vous décidez de vous reposer au pied d'un des géants feuillus.",
                en : "You decide to rest at the foot of one of the deciduous giants."
            },

            "suivant" : {
                fr : "Suivant",
                en : "Next"
            },

            "repos2-texte-1" : {
                fr : "Vous fermez les yeux pour mieux apprécier la brise.",
                en : "You close your eyes to better appreciate the breeze."
            },
            "repos2-texte-2" : {
                fr : "Au loin, il vous semble entendre des bruits de pattes...",
                en : "In the distance, you seem to hear the sounds of legs..."
            },
            "repos2-texte-3" : {
                fr : "Vous vous levez en sursaut quand deux <span key='araignee'>araignées</span> vous sautent dessus !",
                en : "You get up in a jolt when two <span key='araignee'>spiders</span> jump on you!"
            },
            
            "combattre" : {
                fr : "Combattre",
                en : "Fight"
            },
            "fuir" : {
                fr : "Fuir en courant",
                en : "Running away"
            },

            "reposCombat-texte-1" : {
                fr : "Après avoir défait vos adversaires à la force de vos <span key='poing'>poings</span>,",
                en : "After defeating your opponents with the strength of your <span key='poing'>fist</span>,"
            },
            "reposCombat-texte-2" : {
                fr : "Vous faites une pause pour reprendre vos esprits :",
                en : "You're taking a break to come to your senses:"
            },

            "examine-alentours" : {
                fr : "Examiner les alentours",
                en : "Look around"
            },
            "fouille-corps" : {
                fr : "Fouiller les corps",
                en : "Searching bodies"
            },
            "retour" : {
                fr : "Retour",
                en : "Returns"
            },

            "reposFouille-texte-1" : {
                fr : "Berk ! Pourquoi fouiller une <span key='araignee'>araignée</span> ?",
                en : "Berk! Why search a <span key='araignee'>spider</span>?"
            },
            "reposFouille-texte-2" : {
                fr : "Vous espériez vraiment y trouver quelque chose ?",
                en : "Did you really expect to find anything in it?"
            },

            "reposExamine-texte-1" : {
                fr : "En vous penchant, vous remarquez que les traces de vos adversaires remontent vers une caverne non loin.",
                en : "When you lean down, you notice that your opponents' tracks go back to a nearby cave."
            },
            "reposExamine-texte-2" : {
                fr : "On peut clairement y entendre grouiller divers insectes.",
                en : "You can clearly hear various insects swarming around."
            },
            "reposExamine-texte-3" : {
                fr : "On se lance ?",
                en : "Shall we get started?"
            },

            "en-avant" : {
                fr : "En avant !",
                en : "Forward!"
            },
            "rentrer-ville" : {
                fr : "Rentrer en ville",
                en : "Getting back into town"
            },

            "nid-texte-1" : {
                fr : "Vous arrivez dans une cavit&eacute; plut&ocirc;t sombre et silencieuse.",
                en : "You arrive in a dark and silent cavity."
            },
            "nid-texte-2" : {
                fr : "Une odeur naus&eacute;abonde monte &agrave; votre nez.",
                en : "An unpleasant smell rises to your nose."
            },
            "nid-texte-3" : {
                fr : "En y regardant de plus pr&eacute;s, de nombreux cadavres <span key='araignee'>d&rsquo;araign&eacute;es</span> recouvrent le sol.",
                en : "Looking at it more closely, many <span key='araignee'>spider</span> carcasses cover the ground."
            },

            "examine-sol" : {
                fr : "Examiner le sol",
                en : "Examining the soil"
            },

            "nidExamine-texte-1" : {
                fr : "En fouillant les cadavres, vous trouvez une belle <span key='dague'>dague</span> qui semble abandonn&eacute;e.",
                en : "As you search the corpses, you find a beautiful <span key='dague'>dagger</span> which seems abandoned."
            },
            "nidExamine-texte-2" : {
                fr : "Vous vous penchez pour la saisir, quand&hellip;",
                en : "You bend over to grab it, when&hellip;"
            },

            "nidDague-texte-1" : {
                fr : "Vous n'avez pas le temps d'esquiver !",
                en : "You don't have time to dodge!"
            },
            "nidDague-texte-2" : {
                fr : "Un gros <span key='poing'>poing</span> vous &eacute;crase le visage et vous fait tomber au sol.",
                en : "A big <span key='poing'>fist</span> crushes your face and makes you fall to the ground."
            },
            "nidDague-texte-3" : {
                fr : "En vous relevant, vous distinguez un <span key='bandit'>bandit</span> pr&ecirc;t &agrave; vous d&eacute;trousser !",
                en : "When you stand up, you see a <span key='bandit'>bandit</span> ready to rob you!"
            },
            "nidDague-texte-4" : {
                fr : "Allez-vous le laisser s&rsquo;en sortir vivant ?!",
                en : "Are you gonna let him get away alive?!"
            },

            "se-battre" : {
                fr : "Se battre",
                en : "Fight"
            },
            "fuir-grotte" : {
                fr : "Fuir dans la grotte",
                en : "Running into the cave"
            },

            "nid2-texte-1" : {
                fr : "En regardant bien, vous distinguez un <span key='bandit'>bandit</span> qui se cache dans la p&eacute;nombre.",
                en : "If you look closely, you can see a <span key='bandit'>bandit</span> hiding in the darkness."
            },
            "nid2-texte-2" : {
                fr : "Il s&rsquo;approche en souriant pour entamer le combat.",
                en : "He approaches with a smile to start the fight."
            },
            "nid2-texte-3" : {
                fr : "Allez-vous le laisser s&rsquo;en sortir vivant ?!",
                en : "Are you gonna let him get away alive?!"
            },

            "nid3-texte-1" : {
                fr : "Le combat se termine et votre adversaire s&rsquo;&eacute;croule sur le sol.",
                en : "The fight ends and your opponent collapses on the ground."
            },
            "nid3-texte-2" : {
                fr : "Dans le feu de l&rsquo;action, vous en profitez pour :",
                en : "In the heat of the moment, you take advantage of it:"
            },
            "fouille-corp" : {
                fr : "Fouiller le corps",
                en : "Searching the body"
            },

            "nid3Fouille-texte-1" : {
                fr : "En d&eacute;troussant le d&eacute;trousseur, vous trouvez un gros morceau de <span key='fromage'>fromage</span> !",
                en : "While Robbing the robber, you find a big piece of <span key='fromage'>cheese</span>!"
            },
            "nid3Fouille-texte-2" : {
                fr : "Allez-vous vous régaler ou le garder sagement ?",
                en : "Are you going to enjoy yourself or keep it wisely?"
            },
            
            "mange-continue" : {
                fr : "Manger et continuer",
                en : "Eat and continue"
            },

            "nid3TrouveDague-texte-1" : {
                fr : "Vous avez la bonne id&eacute;e de continuer les recherches.",
                en : "You have a good idea to continue the research."
            },
            "nid3TrouveDague-texte-2" : {
                fr : "En dessous du bonhomme se trouvait une superbe <span key='dague'>dague</span> !",
                en : "Below the man was a superb <span key='dague'>dagger</span>!"
            },
            "nid3TrouveDague-texte-3" : {
                fr : "Un bon outil qui vous sera bien utile.",
                en : "A good tool that will be useful to you."
            },

            "nid4-texte-1" : {
                fr : "Vous vous enfoncez de plus en plus dans l&rsquo;obscurit&eacute; et n&rsquo;y voyez pas grand chose.",
                en : "You are getting deeper and deeper into the darkness and don't see much of it."
            },
            "nid4-texte-2" : {
                fr : "Soudain, le tunnel se s&eacute;pare en deux.",
                en : "Suddenly, the tunnel splits in half."
            },
            "nid4-texte-3" : {
                fr : "Deux choix s&rsquo;offrent donc &agrave; vous :",
                en : "Two choices are available:"
            },

            "go-left" : {
                fr : "Aller &agrave; gauche",
                en : "Go to the left"
            },
            "go-right" : {
                fr : "Aller &agrave; droite",
                en : "Go to the right"
            },
            "go-face" : {
            	fr : "Aller en face",
            	en : "Go in front"
            },
            "revenir-pas" : {
            	fr : "Revenir sur vos pas",
            	en : "Retrace your steps"
            },
            
            "nidGauche-texte-1" : {
                fr : "La lumiére semble faiblir davantage, mais vous distinguez au loin une faible lueur.",
                en : "The light seems to fade more, but you can see a faint glow in the distance."
            },
            "nidGauche-texte-2" : {
                fr : "En vous approchant, vous apercevez un &eacute;norme coffre.",
                en : "As you approach, you see a huge trunk."
            },

            "try-open" : {
                fr : "Essayer de l&apos;ouvrir",
                en : "Try to open it"
            },
            "retour-arriere" : {
                fr : "Retourner en arriere",
                en : "Return backward"
            },

            "coffre-texte-1" : {
                fr : "Le coffre est solidement ferm&eacute;.",
                en : "The trunk is securely closed."
            },
            "coffre-texte-2" : {
                fr : "Peut-&ecirc;tre qu&rsquo;en for&ccedil;ant un peu avec la <span key='dague'>dague</span>,",
                en : "Maybe by forcing a little with the <span key='dague'>dagger</span>,"
            },
            "coffre-texte-3" : {
                fr : "vous pourriez r&eacute;ussir &agrave; l&rsquo;ouvrir ?",
                en : "you might be able to open it ?"
            },

            "forcer-coffre" : {
                fr : "Forcer le coffre",
                en : "Forcing the trunk"
            },
            "abandonner" : {
                fr : "Abandonner",
                en : "Give up"
            },

            "coffreReussite1-texte-1" : {
                fr : "Le coffre coince, mais en for&ccedil;ant un peu&hellip;",
                en : "The trunk gets stuck, but by forcing a little&hellip;"
            },
            "coffreReussite1-texte-2" : {
                fr : "Super ! Vous r&eacute;ussissez &agrave; l&rsquo;ouvrir en grand !",
                en : "Awesome! You managed to open it wide!"
            },
            "coffreReussite1-texte-3" : {
                fr : "Une belle <span key='potionSante'>potion de couleur rouge</span> et un <span key='bouclierBois'>bouclier en bois</span> vous font face.",
                en : "A beautiful <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span> face you."
            },

            "tout-prendre" : {
                fr : "Tout prendre",
                en : "Take everything"
            },
            
            "coffreReussite12-texte-1" : {
                fr : "Fier de votre butin,",
                en : "Proud of your spoils,"
            },
            "coffreReussite12-texte-2" : {
                fr : "vous retournez à l'intersection et prenez la direction de droite.",
                en : "you go back to the intersection and turn right."
            },

            "coffreReussite2-texte-1" : {
                fr : "La <span key='dague'>dague</span> &eacute;clate en morceaux et le coffre se renverse sur le sol.",
                en : "The dagger breaks apart and the trunk falls on the floor."
            },
            "coffreReussite2-texte-2" : {
                fr : "Dans le chantier, vous discernez une <span key='potionSante'>potion rouge</span> et un <span key='bouclierBois'>bouclier en bois</span>.",
                en : "In the mess, you can see a <span key='potionSante'>red potion</span> and a <span key='bouclierBois'>wooden shield</span>."
            },

            "coffreReussite21-texte-1" : {
                fr : "Fier de votre butin, mais un peu nostalgique de votre belle <span key='dague'>dague</span>,",
                en : "Proud of your spoils, but a little nostalgic for your beautiful <span key='dague'>dagger</span>,"
            },

            "coffreEchec1-texte-1" : {
                fr : "Non, impossible ! Il ne bouge pas d&rsquo;un poil.",
                en : "No, impossible! He's not moving a bit."
            },

            "insister" : {
                fr : "Insister",
                en : "Insist"
            },
            "laisser-tomber" : {
                fr : "Laisser tomber",
                en : "Drop out"
            },
            
            "coffreEchec12-texte-1" : {
                fr : "Un peu d&eacute;&ccedil;u,",
                en : "A little disappointed,"
            },
            
            "coffreEchec2-texte-1" : {
                fr : "Bam ! La <span key='dague'>dague</span> &eacute;clate dans vos mains !",
                en : "Bam! The dagger bursts in your hands!"
            },
            "coffreEchec2-texte-2" : {
                fr : "Un filet de sang coule doucement sur le sol.",
                en : "A dash of blood flows slowly on the ground."
            },
            "coffreEchec2-texte-3" : {
                fr : "Le coffre, lui, vous regarde impassible&hellip;",
                en : "The trunk, on the other hand, looks impassive&hellip;"
            },

            "pas-la-peine" : {
                fr : "Il n&rsquo;en vaut pas la peine&hellip;",
                en : "It's not worth it&hellip;"
            },
            
            "coffreEchec21-texte-1" : {
                fr : "Avec un mal de chien,",
                en : "With a dog sickness,"
            },
            "coffreEchecSimple-texte-1" : {
                fr : "Impossible de l&rsquo;ouvrir&hellip;",
                en : "Impossible to open it&hellip;"
            },

            "tant-pis" : {
                fr : "Tant pis&hellip;",
                en : "Too bad&hellip;"
            },

            "coffreRetourSimple-texte-1" : {
                fr : "Tranquillement,",
                en : "Quietly, quietly,"
            },

            "nidDroite-texte-1" : {
                fr : "Vous arrivez dans une immense salle.",
                en : "You arrive in a huge room."
            },
            "nidDroite-texte-2" : {
                fr : "De nombreuses toiles recouvrent les murs et donnent &agrave; l&rsquo;ensemble une ambiance sinistre.",
                en : "Numerous cobwebs cover the walls and give a sinister atmosphere."
            },
            "nidDroite-texte-3" : {
                fr : "Une forme semble bouger lentement au fond de la pi&egrave;ce, dans l&rsquo;obscurit&eacute;.",
                en : "A shape seems to move slowly in the dark at the bottom of the room."
            },

            "avancer" : {
                fr : "S&apos;avancer",
                en : "Step forward"
            },
            
            "roiAraigneePotion-texte-1" : {
                fr : "En vous approchant, vous apercevez une <span key='roiAraigneeBlesse'>gigantesque araign&eacute;e</span> dans le noir.",
                en : "As you approach, you see a <span key='roiAraigneeBlesse'>gigantic spider</span> in the dark."
            },
            "roiAraigneePotion-texte-2" : {
                fr : "Mal en point, elle s&rsquo;avance doucement vers vous.",
                en : "In a Bad way, she's slowly walking towards you."
            },
            "roiAraigneePotion-texte-3" : {
                fr : "Elle semble vouloir quelque chose&hellip;",
                en : "She seems to want something&hellip;"
            },
            "attaquer" : {
                fr : "L&apos;attaquer",
                en : "Attack her"
            },
            "stop" : {
                fr : "&laquo; Stop ! &raquo;",
                en : "&laquo; Stop ! &raquo;"
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
                fr : "dans l'antre du <span key='roiAraigneeBlesse'>roi des araignees</span> ?! &raquo;",
                en : "the <span key='roiAraigneeBlesse'>spider king's</span> den?! &raquo;"
            },

            "death" : {
                fr : "&laquo; La mort ! &raquo;",
                en : "&laquo; Death ! &raquo;"
            },
            "ami" : {
                fr : "&laquo; Un ami &raquo;",
                en : "&laquo; A friend &raquo;"
            },
            "who-are-you" : {
                fr : "&laquo; Qui &ecirc;tes-vous ? &raquo;",
                en : "&laquo; Who are you? &raquo;"
            },
            "jai-rien" : {
                fr : "&laquo; Je n&rsquo;ai rien &raquo;",
                en : "&laquo; I have nothing &raquo;"
            },
            
            "roiAraigneePotionQui-texte-1" : {
                fr : "&laquo; Je suis Aros ! Le roi arachnide !",
                en : "&laquo; I'm Aros! The arachnid king!"
            },
            "roiAraigneePotionQui-texte-2" : {
                fr : "Je r&eacute;gnais sur ce royaume jusqu&rsquo;&agrave; aujourd&rsquo;hui, mais&hellip;",
                en : "I reigned over this kingdom until today, but&hellip;"
            },
            "roiAraigneePotionQui-texte-3" : {
                fr : "D&rsquo;horribles cr&eacute;atures ont assassin&eacute; mes enfants !",
                en : "Horrible creatures murdered my children!"
            },
            "roiAraigneePotionQui-texte-4" : {
                fr : "M&rsquo;aiderez-vous &agrave; me soigner ? &raquo;",
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
            "refuser" : {
                fr : "Refuser",
                en : "Refuse"
            },
            
            "roiAraigneePotionAmi-texte-1" : {
                fr : "&laquo; Vraiment ? Si ce que vous dites est vrai,",
                en : "&laquo; Really? If what you're saying is true,"
            },
            "roiAraigneePotionAmi-texte-2" : {
                fr : "pourriez-vous aider un bon ami en le soignant ? &raquo;",
                en : "could you help a good friend by taking care of him? &raquo;"
            },
            
            "roiAraigneeGuerit-texte-1" : {
                fr : "&laquo; Je vous remercie mon ami !",
                en : "&laquo; Thank you, my friend!"
            },
            "roiAraigneeGuerit-texte-2" : {
                fr : "Je me sens beaucoup mieux !",
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
                fr : "&laquo; Qui a fait &ccedil;a ? &raquo;",
                en : "&laquo; Who has done it ? &raquo;"
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
                fr : "&laquo; Comment ?! &raquo;",
                en : "&laquo; How ?! &raquo;"
            },
            
            "roiAraigneeGuerit3-texte-1" : {
                fr : "&laquo; Ils ont tu&eacute; mes enfants ! Ces monstres !",
                en : "&laquo; They killed my children! Those monsters!"
            },
            "roiAraigneeGuerit3-texte-2" : {
                fr : "Je dois les venger ! &raquo;",
                en : "I must avenge them ! &raquo;"
            },
            "roiAraigneeGuerit3-texte-3" : {
                fr : "Le roi se jette au-dessus de vous et se dirige vers la sortie.",
                en : "The king throws himself over you and heads for the exit."
            },

            "ou-aller-vous" : {
                fr : "&laquo; O&ugrave; allez-vous ? &raquo;",
                en : "&laquo; Where are you going ? &raquo;"
            },
            "laisser-partir" : {
                fr : "Le laisser partir",
                en : "Let him go"
            },
            
            "roiAraigneeGuerit4-texte-1" : {
                fr : "&laquo; Ils sont partis attaquer votre village !",
                en : "&laquo; They've gone to attack your village!"
            },
            "roiAraigneeGuerit4-texte-2" : {
                fr : "Les laisserez-vous donc faire ?!",
                en : "Will you let them do it?!"
            },
            "roiAraigneeGuerit4-texte-3" : {
                fr : "Je dois venger les miens ! En route ! &raquo;",
                en : "I must avenge mine! Let's go ! &raquo;"
            },
            "roiAraigneeGuerit4-texte-4" : {
                fr : "Le roi s&rsquo;enfonce dans les t&eacute;n&egrave;bres de la grotte.",
                en : "The king is sinking into the darkness of the cave."
            },

            "fouiller-lieux" : {
                fr : "Fouiller les lieux",
                en : "Search the places"
            },
            "aller-ville" : {
                fr : "Aller en ville",
                en : "Go to town"
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
                fr : "Pars ! Sors de ma demeure&hellip; Laisse-moi mourir en paix. &raquo;",
                en : "Go away! Get out of my house&hellip; let me die in peace. &raquo;"
            },

            "let-him" : {
                fr : "Le laisser",
                en : "Leaving him"
            },
            
            "roiAraigneeAgonie-texte-1" : {
                fr : "&laquo; Pourquoi ?&hellip;",
                en : "&laquo; Why ?&hellip;"
            },
            "roiAraigneeAgonie-texte-2" : {
                fr : "Je vous maudis, vous et votre race !",
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

            "fouiller" : {
                fr : "Fouiller",
                en : "Search"
            },
            
            "roiAraigneeAgonieFouille-texte-1" : {
                fr : "Rien d&rsquo;int&eacute;ressant dans la pi&egrave;ce.",
                en : "Nothing of interest in the room."
            },
            "roiAraigneeAgonieFouille-texte-2" : {
                fr : "Mais, vous trouvez sur le roi une <span key='venin'>poche de venin</span> !",
                en : "But you find on the king a <span key='venin'>pocket of venom</span> !"
            },
            "roiAraigneeAgonieFouille-texte-3" : {
                fr : "Elle pourra vous &ecirc;tre utile en combat.",
                en : "It can be useful in combat."
            },

            "reposVille-texte-1" : {
                fr : "Vous arrivez aux abords du village, devant la ferme du vieux Tom.",
                en : "You arrive at the outskirts of the village, in front of the old Tom's farm."
            },
            "reposVille-texte-2" : {
                fr : "Au loin, des bruits de combats acharn&eacute;s se font entendre.",
                en : "In the distance, fierce fighting sounds are heard."
            },
            "reposVille-texte-3" : {
                fr : "Un vent de panique vous submerge&hellip;",
                en : "A wind of panic overwhelms you&hellip;"
            },

            "courir-ville" : {
                fr : "Courir &agrave; la ville",
                en : "Running to the city"
            },
            "examiner-lieux" : {
                fr : "Examiner les lieux",
                en : "Examine the place"
            },
            
            "fermeExaminer-texte-1" : {
                fr : "Il s&rsquo;agit d&rsquo;une vieille grange mal entretenue&hellip;",
                en : "This is a poorly maintained old barn;"
            },
            "fermeExaminer-texte-2" : {
                fr : "Elle semble abandonn&eacute;e et un <span key='baton'>gros b&acirc;ton</span> permet de caler la porte.",
                en : "She seems to give up and a <span key='baton'>big stick</span> makes it possible to stall the door."
            },
            "fermeExaminer-texte-3" : {
                fr : "Peut-&ecirc;tre en cas d&rsquo;orage ?",
                en : "Maybe in the event of a storm?"
            },

            "retirer-baton" : {
                fr : "Retirer le b&acirc;ton",
                en : "Remove the stick"
            },
            "casser-baton" : {
                fr : "Casser le b&acirc;ton",
                en : "Break the stick"
            },
            
            "fermeExaminer2-texte-1" : {
                fr : "Elle semble abandonn&eacute;e.",
                en : "It seems abandoned."
            },
            "fermeExaminer2-texte-2" : {
                fr : "Le corps d&rsquo;une <span key='goule'>goule</span> g&icirc;t devant la porte grande ouverte.",
                en : "A <span key='goule'>ghoul's</span> body lies in front of the wide open door."
            },

            "entrer-grange" : {
                fr : "Entrer dans la grange",
                en : "Enter the barn"
            },
            
            "batonSaisieReussite1-texte-1" : {
                fr : "En for&ccedil;ant un peu, vous parvenez &agrave; d&eacute;bloquer le <span key='baton'>b&acirc;ton</span>.",
                en : "By forcing a little, you can unlock the <span key='baton'>stick</span>."
            },
            "batonSaisieReussite1-texte-2" : {
                fr : "Dans une roulade arri&egrave;re, vous avez juste le temps d&rsquo;esquiver",
                en : "In backward roll, you have just enough time to dodge"
            },
            "batonSaisieReussite2-texte-1" : {
                fr : "Malheureusement vous n&rsquo;avez pas le temps d&rsquo;&eacute;viter",
                en : "Unfortunately, you don't have time to avoid"
            },
            "batonSaisieReussite2-texte-2" : {
                fr : "et vous fait tomber &agrave; la renverse&hellip;",
                en : "and knocked you over..."
            },
            "batonSaisieReussite1-texte-3" : {
                fr : "la grosse porte de la grange qui s&rsquo;ouvre avec fracas&hellip;",
                en : "the big door of the barn that opens with a crashing sound..."
            },

            "garder-baton" : {
                fr : "Garder le b&acirc;ton",
                en : "Keeping the stick"
            },
            
            "batonSaisieEchec-texte-1" : {
                fr : "Impossible de le faire bouger&hellip;",
                en : "Impossible to make it move&hellip;"
            },
            "batonSaisieEchec-texte-2" : {
                fr : "Le <span key='baton'>b&acirc;ton</span> est trop bien enfonc&eacute;.",
                en : "The <span key='baton'>stick</span> is too deep."
            },
            "batonSaisieEchec-texte-3" : {
                fr : "Au loin, la bataille fait rage&hellip;",
                en : "In the distance, the battle rages&hellip;"
            },

            "batonPousse-texte-1" : {
                fr : "Vous donnez un puissant coup de pied dans le <span key='baton'>b&acirc;ton</span> qui &eacute;clate en morceaux.",
                en : "You made a powerful kick in the <span key='baton'>stick</span> that burst into pieces."
            },
            "batonPousse-texte-2" : {
                fr : "La porte de la grange s&rsquo;ouvre avec fracas&hellip;",
                en : "The door of the barn opens with a crashing sound..."
            },

            "fermeGoule-texte-1" : {
                fr : "Une horrible <span key='goule'>goule</span> bondit hors de la grange !",
                en : "A horrible <span key='goule'>ghoul</span> leaps out of the barn!"
            },
            "fermeGoule-texte-2" : {
                fr : "Elle vous observe un moment, comme si vous &eacute;tiez un en-cas,",
                en : "She watches you for a while, like you're a snack,"
            },
            "fermeGoule-texte-3" : {
                fr : "puis se jette sur vous !",
                en : "and then throws himself on you!"
            },

            "fermeGoule2-texte-1" : {
                fr : "Qu&rsquo;est-ce que ce monstre faisait l&agrave; ?",
                en : "What did this monster do here ?"
            },
            "fermeGoule2-texte-2" : {
                fr : "Vous vous remettez de vos &eacute;motions et&hellip;",
                en : "You recover from your emotions and&hellip;"
            },

            "fouillerGoule-texte-1" : {
                fr : "Rien&hellip;",
                en : "Nothing&hellip;"
            },
            "fouillerGoule-texte-2" : {
                fr : "Juste un cadavre &agrave; moiti&eacute; d&eacute;compos&eacute;.",
                en : "Just a corpse half-decomposed."
            },

            "grange-texte-1" : {
                fr : "La grange est sombre et sent le renferm&eacute;.",
                en : "The barn is dark and smells of containment."
            },
            "grange-texte-2" : {
                fr : "Une grosse table est pos&eacute;e au fond.",
                en : "A large table is set in the back."
            },

            "fouiller-table" : {
                fr : "Fouiller la table",
                en : "Search the table"
            },
            "examine-grange" : {
                fr : "Examiner la grange",
                en : "Examine the barn"
            },
            
            "grangeFouilleTable-texte-1" : {
                fr : "La table est recouverte de paperasses en pagaille.",
                en : "The table is covered in clutterful paperwork."
            },
            "grangeFouilleTable-texte-2" : {
                fr : "Une vieille <span key='bougie'>bougie</span> presque us&eacute;e est pos&eacute;e dans un coin.",
                en : "An old <span key='bougie'>candle</span> almost worn out is placed in a corner."
            },
            
            "prendre-bougie" : {
                fr : "Prendre la bougie",
                en : "Take the candle"
            },
            
            "grangeFouilleTable2-texte-1" : {
                fr : "Vous prenez la <span key='bougie'>bougie</span> et le n&eacute;cessaire pour l&rsquo;allumer si besoin.",
                en : "You take the candle and light it if necessary."
            },
            "grangeFouilleTable2-texte-2" : {
                fr : "Il est temps de continuer l&rsquo;aventure :",
                en : "It is time to continue the adventure:"
            },

            "grangeExamine-texte-1" : {
                fr : "Une grande b&acirc;tisse recouverte de poussi&egrave;re&hellip;",
                en : "A large building covered with dust&hellip;"
            },
            "grangeExamine-texte-2" : {
                fr : "De la paille est pr&eacute;sente partout o&ugrave; vous mettez les pieds.",
                en : "Straw is present wherever you set foot."
            },

            "grangeFouilleTable3-texte-1" : {
                fr : "Elle aurait besoin d&rsquo;un bon nettoyage&hellip;",
                en : "It would need a good cleaning&hellip;"
            },

            "reposVille2-texte-1" : {
                fr : "Vous accourez dans le village, au c&oelig;ur de la bataille.",
                en : "You run into the village, at the heart of the battle."
            },
            "reposVille2-texte-2" : {
                fr : "De nombreuses <span key='goule'>goules</span> tentent de d&eacute;vorer les paysans qui se battent de leur mieux.",
                en : "Many <span key='goule'>ghouls</span> try to worship the peasants who fight at their best."
            },
            "reposVille2-texte-3" : {
                fr : "&laquo; Du nerf ! D&eacute;fendez la ville ! &raquo; hurle un <span key='garde'>garde</span> non loin de vous.",
                en : "&laquo; Get on your nerves! Defend the city! &raquo; screams a <span key='garde'>guard</span> not far from you."
            },

            "defendre-ville" : {
                fr : "D&eacute;fendre la ville",
                en : "Defending the city"
            },
            
            "reposVille3-texte-1" : {
                fr : "Vous tuez la derni&egrave;re <span key='goule'>goule</span> face &agrave; vous et retournez voir les <span key='garde'>gardes</span> :",
                en : "You kill the last <span key='goule'>ghoul</span> in front of you and go back to the <span key='garde'>guards</span>:"
            },
            "reposVille3-texte-2" : {
                fr : "&laquo; Que s&rsquo;est-il pass&eacute; ? &raquo;",
                en : "&laquo; What happened? &raquo;"
            },
            "reposVille3-texte-3" : {
                fr : "Un des <span key='garde'>gardes</span> se tourne vers vous :",
                en : "One of the <span key='garde'>guards</span> turns to you:"
            },
            "reposVille3-texte-4" : {
                fr : "&laquo; Les morts ! Ils nous ont attaqu&eacute;s !",
                en : "&laquo; The dead! They attacked us!"
            },
            "reposVille3-texte-5" : {
                fr : "Ils ont emport&eacute;s les enfants dans la foret &raquo;",
                en : "They took the children into the forest &raquo;"
            },

            "reposVille4-texte-1" : {
                fr : "&laquo; Malheureusement, nous devons nous occuper des bless&eacute;s.",
                en : "&laquo; Unfortunately, we have to deal with the wounded."
            },
            "reposVille4-texte-2" : {
                fr : "Vous avez l&rsquo;air de savoir vous battre !",
                en : "You look like you know how to fight!"
            },
            "reposVille4-texte-3" : {
                fr : "Vous devez les secourir, demandez de l&rsquo;aide aux autres <span key='villageois'>villageois</span> ! &raquo;",
                en : "You must help them, ask for help from other <span key='villageois'>villagers</span>! &raquo;"
            },

            "aider" : {
                fr : "Aider",
                en : "Help Them"
            },
            
            "reposVilleAide-texte-1" : {
                fr : "Vous hochez bravement la t&ecirc;te et",
                en : "You bravely nod your head and"
            },
            "reposVilleAide-texte-2" : {
                fr : "vous vous dirigez vers les <span key='villageois'>villageois</span> paniqu&eacute;s.",
                en : "you're heading for the panicked <span key='villageois'>villagers</span>."
            },
            "reposVilleAide-texte-3" : {
                fr : "John, le forgeron, s&rsquo;approche de vous l&rsquo;air mena&ccedil;ant :",
                en : "John, the blacksmith, approaches you looking threatening:"
            },
            "reposVilleAide-texte-4" : {
                fr : "&laquo; Tiens ! Prends cette <span key='epee'>&eacute;p&eacute;e</span> et ce <span key='bouclierFer'>bouclier en fer</span> !",
                en : "&laquo; Here you go! Take this <span key='epee'>sword</span> and this <span key='bouclierFer'>iron shield</span>!"
            },
            "reposVilleAide-texte-5" : {
                fr : "Ils pourront t&rsquo;&ecirc;tre utiles. &raquo;",
                en : "They can be useful. &raquo;"
            },

            "prendre-arme" : {
                fr : "Prendre les armes",
                en : "Take up arms"
            },
            "non-merci" : {
                fr : "Non Merci",
                en : "No Thanks"
            },
            
            "reposVilleAide1-texte-1" : {
                fr : "Vous saisissez <span key='epee'>l&rsquo;&eacute;p&eacute;e</span> et mangez un morceau pour vous pr&eacute;parer.",
                en : "You grab the <span key='epee'>sword</span> and eat something to prepare yourself."
            },
            "reposVilleAide1-texte-2" : {
                fr : "Ces sales monstres n&rsquo;ont qu&rsquo;&agrave; bien se tenir !",
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
                fr : "&laquo; Prend au moins cette <span key='potionSante'>potion</span> mon petit&hellip; ",
                en : "&laquo; Take at least this <span key='potionSante'>potion</span>, my little&hellip; "
            },
            "reposVilleAide2-texte-3" : {
                fr : "Tu ne peux pas y aller sans rien ! &raquo;",
                en : "You can't go without nothing! &raquo;"
            },
            "reposVilleAide2-texte-4" : {
                fr : "Vous prenez la fiole et mangez un morceau.",
                en : "You take the vial and eat something."
            },
            "reposVilleAide2-texte-5" : {
                fr : "Une fois pr&ecirc;t vous vous mettez en route pour le marais&hellip;",
                en : "Once you are ready, you set off for the swamp&hellip;"
            },

            "reposVilleRefus-texte-1" : {
                fr : "&laquo; Dans ce cas, allez-vous-en !",
                en : "&laquo; Then get out of here!"
            },
            "reposVilleRefus-texte-2" : {
                fr : "Nous n&rsquo;avons pas besoin de l&acirc;ches dans nos rang ! &raquo;",
                en : "We don't need cowards in our ranks! &raquo;"
            },
            "reposVilleRefus-texte-3" : {
                fr : "Les <span key='garde'>gardes</span> sortent leurs &eacute;p&eacute;es et vous pousse vers le marais&hellip;",
                en : "The <span key='garde'>guards</span> take out their swords and push you towards the swamp&hellip;"
            },

            "venger-affront" : {
                fr : "Venger cet affront",
                en : "Putting up this affront"
            },
            "sen-aller" : {
                fr : "S&rsquo;en aller",
                en : "Leave"
            },
            
            "reposVilleTraitre-texte-1" : {
                fr : "Certains <span key='villageois'>villageois</span> s&rsquo;avancent vers vous :",
                en : "Some <span key='villageois'>villagers</span> are coming towards you:"
            },
            "reposVilleTraitre-texte-2" : {
                fr : "&laquo; Tra&icirc;tre ! C&rsquo;est toi qui as amen&eacute; la mort sur nous !",
                en : "&laquo; You traitor! You're the one who brought death on us!"
            },
            "reposVilleTraitre-texte-3" : {
                fr : "Tu vas nous le payer ! Rend-nous nos enfants ! &raquo;",
                en : "You're gonna pay for it! Give us our children back! &raquo;"
            },
            "reposVilleTraitre-texte-4" : {
                fr : "Ils se jettent sur vous&hellip;",
                en : "They throw themselves at you&hellip;"
            },

            "reposVilleTraitre2-texte-1" : {
                fr : "Vous vous d&eacute;p&ecirc;trez du dernier <span key='villageois'>villageois</span> qui a os&eacute; vous d&eacute;fier.",
                en : "You'll be relieving yourself of the last <span key='villageois'>villager</span> who dared to defy you."
            },
            "reposVilleTraitre2-texte-2" : {
                fr : "Ces insectes ne valent rien&hellip; Mais, peut-&ecirc;tre poss&egrave;dent-ils quelques",
                en : "These insects are no good-for-nothing&hellip; But, maybe they have some"
            },
            "reposVilleTraitre2-texte-3" : {
                fr : "objets de valeur dans leurs chaumi&egrave;res ?",
                en : "valuable objects in their cottages?"
            },

            "fouiller-maison" : {
                fr : "Fouiller les maisons",
                en : "Searching houses"
            },
            
            "reposVilleTraitre3-texte-1" : {
                fr : "Vous vous en allez vers le marais.",
                en : "You're going to the swamp."
            },
            "reposVilleTraitre3-texte-2" : {
                fr : "Ces cr&eacute;tins n&rsquo;ont eu que ce qu&rsquo;ils meritaient&hellip;",
                en : "These cretins only got what they deserved&hellip;"
            },
            "reposVilleTraitre3-texte-3" : {
                fr : "En chemin, vous distinguez des traces sur le sol.",
                en : "On the way, you can see traces on the ground."
            },

            "suivre-trace" : {
                fr : "Suivre les traces",
                en : "Follow the tracks"
            },
            
            "villeFouilleReussite1-texte-1" : {
                fr : "Vous fouillez les maisons en flammes et trouvez une <span key='potionSante'>potion de sant&eacute;</span>",
                en : "You search the burning houses and find a <span key='potionSante'>health potion</span>."
            },
            "villeFouilleReussite1-texte-2" : {
            	fr : "dans celle du docteur.",
            	en : "in the doctor's house."
            },
            "villeFouilleReussite1-texte-3" : {
            	fr : "Cela pourra sans doute vous &ecirc;tre utile&hellip;",
            	en : "This will undoubtedly be useful to you&hellip;"
            },

            "prendre" : {
            	fr : "Prendre",
            	en : "Take it"
            },
            
            "villeFouilleReussite2-texte-1" : {
            	fr : "Vous fouillez les maisons en flammes et trouvez une belle <span key='epee'>&eacute;p&eacute;e</span>",
            	en : "You search the burning houses and find a nice <span key='epee'>sword</span>."
            },
            "villeFouilleReussite2-texte-2" : {
            	fr : "et un grand <span key='bouclierFer'>bouclier en fer</span> dans celle du forgeron.",
            	en : "and a large iron shield in the blacksmith's house."
            },

            "laisser" : {
            	fr : "Laisser",
            	en : "Leave it"
            },
            
            "villeFouilleReussite3-texte-1" : {
            	fr : "C&rsquo;est votre jour de chance !",
            	en : "This is your lucky day!"
            },
            "villeFouilleReussite3-texte-2" : {
            	fr : "En fouillant les maisons en flammes, vous trouvez une belle <span key='epee'>&eacute;p&eacute;e</span>",
            	en : "When you search the burning houses, you find a beautiful <span key='epee'>sword</span>."
            },
            "villeFouilleReussite3-texte-3" : {
            	fr : "ainsi qu'une <span key='potionSante'>potion de sant&eacute;</span>",
            	en : "and a <span key='potionSante'>health potion</span>."
            },

            "laisser-arme" : {
            	fr : "Laisser les armes",
            	en : "Leave the weapons"
            },
            
            "villeFouilleEchec-texte-1" : {
            	fr : "Malheureusement, les maisons sont vides&hellip;",
            	en : "Unfortunately, the houses are empty&hellip;"
            },
            "villeFouilleEchec-texte-2" : {
            	fr : "Ces cr&eacute;tins n&rsquo;ont rien laiss&eacute;&hellip;",
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
            	fr : "vous tombez nez &agrave; nez avec une <span key='grosseGoule'>grosse goule</span> !",
            	en : "you're falling face to face with a <span key='grosseGoule'>big ghoul</span>!"
            },
            "villeFouilleEchec2-texte-3" : {
            	fr : "Sauvez votre peau avant qu&rsquo;elle ne vous la mange !",
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
            	fr : "Peut-&ecirc;tre un fuyard ?",
            	en : "Maybe a deserter?"
            },

            "reposVilleRefus2-texte-1" : {
            	fr : "Vous vous en allez vers le marais.",
            	en : "You're going to the swamp."
            },
            "reposVilleRefus2-texte-2" : {
            	fr : "Ces cr&eacute;tins n&rsquo;auront cas se d&eacute;brouiller seul&hellip;",
            	en : "Those cretins won't be able to figure it out on their own..."
            },
            "reposVilleRefus2-texte-3" : {
            	fr : "En chemin, vous distinguez des traces sur le sol.",
            	en : "On the way, you can see traces on the ground."
            },

            "retourVille2-texte-1" : {
            	fr : "Le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> d&eacute;vore de nombreuses <span key='goule'>goules</span> autour de vous.",
            	en : "The <span key='roiAraigneeBlesse'>king of spiders</span> devours many <span key='goule'>ghouls</span> around you."
            },
            "retourVille2-texte-2" : {
            	fr : "Les paysans sont partis se cacher dans leurs chaumi&egrave;res en ruine",
            	en : "The peasants have gone to hide in their ruined cottages"
            },
            "retourVille2-texte-3" : {
            	fr : "et quelques <span key='garde'>gardes</span> se pr&eacute;parent d&eacute;j&agrave; &agrave; attaquer votre nouvel alli&eacute;&hellip;",
            	en : "and some <span key='garde'>guards</span> are already preparing to attack your new ally."
            },

            "arreter" : {
            	fr : "&laquo; Arretez ! &raquo;",
            	en : "&laquo; Stop it! &raquo;"
            },
            "help-guard" : {
            	fr : "Aider les gardes",
            	en : "Helping the guards"
            },
            
            "retourVilleAideRoi-texte-1" : {
            	fr : "L&rsquo;un des <span key='garde'>gardes</span> s&rsquo;adresse &agrave; vous :",
            	en : "One of the <span key='garde'>guards</span> ask for you:"
            },
            "retourVilleAideRoi-texte-2" : {
            	fr : "&laquo; Que dites-vous ? Il faut tuer ce monstre ! &raquo;",
            	en : "&laquo; What are you saying? We have to kill that monster! &raquo;"
            },
            "retourVilleAideRoi-texte-3" : {
            	fr : "Vous insistez :",
            	en : "You insist :"
            },
            "retourVilleAideRoi-texte-4" : {
            	fr : "&laquo; Non ! C&rsquo;est le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span> ! Il est venu pour nous aider ! &raquo;",
            	en : "&laquo; No! He's the <span key='roiAraigneeBlesse'>king of spiders</span>! He came to help us! &raquo;"
            },

            "retourVilleAideRoi2-texte-1" : {
            	fr : "Pendant votre discussion, la bataille continuait.",
            	en : "During your discussion, the battle continued."
            },
            "retourVilleAideRoi2-texte-2" : {
            	fr : "Le <span key='roiAraigneeBlesse'>roi des araign&eacute;es</span>, apr&egrave;s avoir d&eacute;truit les derni&egrave;res <span key='goule'>goules</span>,",
            	en : "The <span key='roiAraigneeBlesse'>king of spiders</span>, after destroying the last <span key='goule'>ghouls</span>,"
            },
            "retourVilleAideRoi2-texte-3" : {
            	fr : "s&rsquo;est enfonc&eacute; dans le marais &agrave; la recherche d&rsquo;autres proies.",
            	en : "went deep into the swamp in search of other prey."
            },

            "retourVilleAideRoi3-texte-1" : {
            	fr : "&laquo; Trop tard&hellip; Il s&rsquo;est enfuit&hellip; Vous l&agrave; ! Qu&rsquo;est-ce qui vous a pris ?",
            	en : "&laquo; Too late&hellip; He ran away&hellip; You there! What the hell was that about?"
            },
            "retourVilleAideRoi3-texte-2" : {
            	fr : "Les morts nous ont attaqu&eacute;s et ils ont emport&eacute; nos enfants dans la for&ecirc;t ! &raquo;",
            	en : "The dead have attacked us and they took our children into the forest! &raquo;"
            },

            "retourVilleAideGarde-texte-1" : {
            	fr : "Vous achevez le <span key='roiAraigneeBlesse'>roi araign&eacute;e</span> d&rsquo;un coup.",
            	en : "You're killing the <span key='roiAraigneeBlesse'>spider king</span> all of a sudden."
            },
            "retourVilleAideGarde-texte-2" : {
            	fr : "Les <span key='villageois'>villageois</span> commencent d&eacute;j&agrave; &agrave; sortir de leurs maisons, rassur&eacute;s.",
            	en : "The villagers are already starting to leave their homes, reassured."
            },

            "marais-texte-1" : {
            	fr : "Vous vous enfoncez profond&eacute;ment dans le marais,",
            	en : "You're sinking deep into the swamp,"
            },
            "marais-texte-2" : {
            	fr : "suivant les traces que vous apercevez au sol.",
            	en : "following the tracks you see on the ground."
            },
            "marais-texte-3" : {
            	fr : "Vous arrivez bient&ocirc;t devant une vieille b&acirc;tisse.",
            	en : "You'll soon arrive in front of an old building."
            },
            "marais-texte-4" : {
            	fr : "Elle para&icirc;t gigantesque, mais est en tr&eacute;s mauvais &eacute;tat.",
            	en : "It looks gigantic, but is in very bad condition."
            },

            "entrer" : {
            	fr : "Entrer",
            	en : "Enter"
            },
            "contourner" : {
            	fr : "Contourner",
            	en : "Bypass"
            },
            
            "maraisRoi-texte-1" : {
            	fr : "La porte est grande ouverte et &agrave; moiti&eacute; explos&eacute;e.",
            	en : "The door is wide open and half blown open."
            },

            "necroTrou-texte-1" : {
            	fr : "Vous contournez le grand b&acirc;timent quand,",
            	en : "You bypass the large building when,"
            },
            "necroTrou-texte-2" : {
            	fr : "&agrave; un tournant, vous tombez sur un mur en ruine.",
            	en : "at a turning point, you fall on a ruined wall."
            },
            "necroTrou-texte-3" : {
            	fr : "Un gros trou permet de p&eacute;netrer dans une pi&egrave;ce sombre.",
            	en : "A large hole makes it possible to penetrate into a dark room."
            },

            "necroS3-texte-1" : {
            	fr : "Vous p&eacute;netrez dans une vieille salle en ruine.",
            	en : "You enter into an old, ruined room."
            },
            "necroS3-texte-2" : {
            	fr : "Apparement, elle servait de biblioth&egrave;que de fortune.",
            	en : "Apparently, it was used as a makeshift library."
            },
            "necroS3-texte-3" : {
            	fr : "Vous d&eacute;couvrez de nombreux ouvrages et parchemins dispers&eacute;s un peu partout sur le sol.",
            	en : "You will discover many books and scrolls scattered all over the ground."
            },
            "necroS3-texte-4" : {
            	fr : "Une porte permet d&rsquo;acc&eacute;der &agrave; une autre partie du b&acirc;timent.",
            	en : "A door gives access to another part of the building."
            },

            "ouvrir-porte" : {
            	fr : "Ouvrir la porte",
            	en : "Open the door"
            },            
            "lire-parchemin" : {
            	fr : "Lire les parchemins",
            	en : "Read Scrolls"
            },
            
            "necroS3Fouille-texte-1" : {
            	fr : "Il semblerait qu&rsquo;il s&rsquo;agisse de trait&eacute;s sur la magie.",
            	en : "Looks like it's about drafts on magic."
            },
            "necroS3Fouille-texte-2" : {
            	fr : "Beaucoup sont dans une langue incompréhensible,",
            	en : "Many are in an incomprehensible language,"
            },
            "necroS3Fouille-texte-3" : {
            	fr : "mais vous parvenez &agrave; comprendre certains mots.",
            	en : "but you can understand some words."
            },
            "necroS3Fouille-texte-4" : {
            	fr : "Cela parle d&rsquo;une fusion entre les &eacute;l&eacute;ments&hellip;",
            	en : "It speaks of a fusion between elements&hellip;"
            },
            "necroS3Fouille-texte-5" : {
            	fr : "Vous vous relevez et vous dirigez vers la porte.",
            	en : "You get up and head for the door."
            },

            "necroPorte-texte-1" : {
            	fr : "La porte est immense et semble ferm&eacute; &agrave; clef.",
            	en : "The door is huge and seems to be locked."
            },
            "necroPorte-texte-2" : {
            	fr : "Vous avez beau forcer, vous n&rsquo;arrivez pas &agrave; la d&eacute;placer&hellip;",
            	en : "No matter how hard you force, you can't move it&hellip;"
            },

            "necroS1Roi-texte-1" : {
            	fr : "Vous p&eacute;n&eacute;trez prudemment dans la pi&egrave;ce.",
            	en : "You enter the room carefully."
            },
            "necroS1Roi-texte-2" : {
            	fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol et une tra&icirc;n&eacute;e de sang vert",
            	en : "Two dead <span key='goule'>ghouls</span> lie on the ground and a green blood trail"
            },
            "necroS1Roi-texte-3" : {
            	fr : "continue vers une seconde porte en face de vous&hellip;",
            	en : "continues towards a second door in front of you&hellip;"
            },

            "fouiller-piece" : {
            	fr : "Fouiller la pi&egrave;ce",
            	en : "Search the room"
            },
            
            "necroS1-texte-1" : {
            	fr : "Vous p&eacute;n&eacute;trez dans une petite pi&egrave;ce vide.",
            	en : "You enter a small empty room."
            },
            "necroS1-texte-2" : {
            	fr : "Deux cadavres de <span key='goule'>goules</span> gisent sur le sol.",
            	en : "Two dead <span key='goule'>ghouls</span> lie on the ground."
            },

            "necroS1Fight-texte-1" : {
            	fr : "Deux <span key='goule'>goules</span> vous observent, le regard vitreux.",
            	en : "Two <span key='goule'>ghouls</span> look at you, glassy eyes."
            },

            "necroS1Fight2-texte-1" : {
            	fr : "Vous abattez ces larves !",
            	en : "You're killing those larvae!"
            },
            "necroS1Fight2-texte-2" : {
            	fr : "Elles ont failli vous d&eacute;coiffer&hellip;",
            	en : "They almost blew your hair&hellip;"
            },
            "necroS1Fight2-texte-3" : {
            	fr : "Il est temps de continuer !",
            	en : "It's time to continue!"
            },

            "necroS1Fouille-texte-1" : {
            	fr : "La salle est compl&egrave;tement vide hormis un petit paillasson",
            	en : "The room is completely empty except for a doormat."
            },
            "necroS1Fouille-texte-2" : {
            	fr : "devant l&rsquo;entr&eacute;e inscrit &laquo; HellCome &raquo;.",
            	en : "in front of the entrance marked &laquo; HellCome &raquo;."
            },
            "necroS1Fouille-texte-3" : {
            	fr : "En le soulevant, vous d&eacute;couvrez une petite <span key='clefS2'>clef</span>&hellip;",
            	en : "By lifting it, you discover a small <span key='clefS2'>key</span>&hellip;"
            },
            "necroS1Fouille-texte-4" : {
            	fr : "Vous la prenez et vous dirigez vers la porte&hellip;",
            	en : "You take it and head for the door&hellip;"
            },

            "necroGSFight-texte-1" : {
            	fr : "Vous p&eacute;n&eacute;trez dans une tr&egrave;s grande crypte.",
            	en : "You enter a very large crypt."
            },
            "necroGSFight-texte-2" : {
            	fr : "&Agrave; votre arriv&eacute;e, le gardien des lieux, une <span key='grosseGoule'>grosse goule</span> se dirige vers vous.",
            	en : "On your arrival, the caretaker of the place, a <span key='grosseGoule'>big ghoul</span> is heading towards you."
            },
            "necroGSFight-texte-3" : {
            	fr : "Sur le c&ocirc;t&eacute;, deux <span key='squelette'>squelettes</span> sortent lentement de leurs cercueils&hellip;",
            	en : "On the side, two <span key='squelette'>skeletons</span> slowly come out of their coffins&hellip;"
            },

            "necroGSFight2-texte-1" : {
            	fr : "Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat.",
            	en : "You stand up painfully after this difficult fight."
            },
            "necroGSFight2-texte-2" : {
            	fr : "Encore sous le choc, vous observez la pi&egrave;ce autour de vous&hellip;",
            	en : "Still in shock, you watch the room around you&hellip;"
            },

            "necroGSRoiFight-texte-1" : {
            	fr : "Le <span key='roiAraigneeBlesse'>roi araign&eacute;e</span> est couch&eacute; au centre, inconscient, une <span key='grosseGoule'>grosse goule</span> morte dans la gueule&hellip;",
            	en : "The <span key='roiAraigneeBlesse'>spider king</span> lies unconscious in the middle with a <span key='grosseGoule'>big dead ghoul</span> in his mouth&hellip;"
            },

            "necroGSRoiFight2-texte-1" : {
            	fr : "Vous vous relevez p&eacute;niblement apr&egrave;s ce difficile combat et vous dirigez vers votre ami.",
            	en : "You stand up painfully after this difficult fight and you are heading towards your friend."
            },
            "necroGSRoiFight2-texte-2" : {
            	fr : "Le roi, &agrave; l&rsquo;agonie, vous exprime son dernier souhait :",
            	en : "The king, in agony, expresses his last wish to you:"
            },
            "necroGSRoiFight2-texte-3" : {
            	fr : "&laquo; Merci, noble aventurier. Je me meurs&hellip; Mais vous, vous pouvez encore sauver votre esp&egrave;ce.",
            	en : "&laquo; Thank you, noble adventurer. I'm dying&hellip; But you can still save your species."
            },
            "necroGSRoiFight2-texte-4" : {
            	fr : "Vengez-nous, combattez pour l&rsquo;araign&eacute;e ! &raquo;",
            	en : "Revenge us, fight for the spider ! &raquo;"
            },
            "necroGSRoiFight2-texte-5" : {
            	fr : "Avant de mourir, le roi s&rsquo;arrache un <span key='crocRoi'>croc</span> et le jette &agrave; vos pieds.",
            	en : "Before he dies, the king tears off a <span key='crocRoi'>fang</span> and throws it at your feet."
            },

            "prendre-croc" : {
            	fr : "Prendre le croc",
            	en : "Take the fang"
            },
            "laisser-croc" : {
            	fr : "Laisser le croc",
            	en : "Leave the fang"
            },
            
            "necroGSFight3Oui-texte-1" : {
            	fr : "Vous prenez l&rsquo;arme en souvenir de votre ami.",
            	en : "You take the fang as a souvenir of your friend."
            },
            "necroGSFight3Oui-texte-2" : {
            	fr : "Elle fera certainement une alli&eacute;e pr&eacute;cieuse !",
            	en : "It will certainly make a valuable ally!"
            },

            "necroGSFight3Non-texte-1" : {
            	fr : "Vous laissez l&rsquo;arme devant votre ami.",
            	en : "You leave the fang in front of your friend."
            },
            "necroGSFight3Non-texte-2" : {
            	fr : "Esp&eacute;rant qu&rsquo;elle l&rsquo;accompagne dans l&rsquo;au-del&agrave;.",
            	en : "Hoping that she will accompany him to the afterlife."
            },

            "necroGS-texte-1" : {
            	fr : "Vous vous trouvez dans une gigantesque salle aux allures de crypte.",
            	en : "You are in a gigantic room looking like a crypt."
            },
            "necroGS-texte-2" : {
            	fr : "Quelques cercueils sont &eacute;parpill&eacute;s un peu partout.",
            	en : "Some coffins are scattered all over the place."
            },
            "necroGS-texte-3" : {
            	fr : "Vous remarquez trois portes : &agrave; gauche, en face et &agrave; droite&hellip;",
            	en : "You notice three doors: on the left, in front of you and on the right&hellip;"
            },

            "fouiller-cercueil" : {
            	fr : "Fouiller les cercueils",
            	en : "Searching coffins"
            },
            "fouiller-salle" : {
            	fr : "Fouiller la salle",
            	en : "Search the room"
            },
            
            "necroGSFouilleCercueil-texte-1" : {
            	fr : "Avec d&eacute;go&ucirc;t, vous fouillez les cercueils.",
            	en : "Disgustingly, you search the coffins."
            },
            "necroGSFouilleCercueil-texte-2" : {
            	fr : "Les deux premiers sont vides, mais dans le troisi&eacute;me,",
            	en : "The first two are empty, but in the third,"
            },
            "necroGSFouilleCercueil-texte-3" : {
            	fr : "vous apercevez une lueur jaune sous un tas d&rsquo;os&hellip;",
            	en : "you see a yellow glow under a pile of bones&hellip;"
            },
            
            "necroGSFouilleCercueil2-texte-1" : {
            	fr : "Vous saisissez un authentique <span key='elixir'>&eacute;lixir</span> !",
            	en : "You grasp an authentic <span key='elixir'>elixir</span>!"
            },
            "necroGSFouilleCercueil2-texte-2" : {
            	fr : "Malheureusement, vous n&rsquo;&ecirc;tes pas le seul sur le coup&hellip;",
            	en : "Unfortunately, you're not the only one the case&hellip;"
            },
            "necroGSFouilleCercueil2-texte-3" : {
            	fr : "Une main osseuse vous tient fermement le poignet.",
            	en : "A bony hand holds your wrist firmly."
            },
            "necroGSFouilleCercueil2-texte-4" : {
            	fr : "Vous vous &eacute;cartez brusquement, emportant la main avec vous,",
            	en : "You suddenly step aside, taking the hand with you,"
            },
            "necroGSFouilleCercueil2-texte-5" : {
            	fr : "pendant qu&rsquo;un <span key='squeletteManchot'>squelette manchot</span> sort difficilement de son cercueil&hellip;",
            	en : "while a one-armed skeleton hardly comes out of its coffin&hellip;"
            },

            "necroGSFouilleCercueil3-texte-1" : {
            	fr : "Vous vous d&eacute;barassez facilement de votre adversaire.",
            	en : "You easily kill off your opponent."
            },
            "necroGSFouilleCercueil3-texte-2" : {
            	fr : "Il est temps de continuer votre aventure !",
            	en : "It's time to continue your adventure!"
            },

            "necroGSFouilleSalle-texte-1" : {
            	fr : "Il s&rsquo;agit d&rsquo;une grande salle ressemblant &agrave; s&rsquo;y m&eacute;prendre &agrave; une crypte.",
            	en : "It is a large room that look like a crypt."
            },
            "necroGSFouilleSalle-texte-2" : {
            	fr : "Les murs sont suintants d&rsquo;humidit&eacute; et un froid intense la parcourt.",
            	en : "The walls are oozing with humidity and an intense cold runs through it."
            },
            "necroGSFouilleSalle-texte-3" : {
            	fr : "Deux torches se trouvent accroch&eacute;es sur le mur du fond&hellip;",
            	en : "Two torches are hung on the back wall&hellip;"
            },

            "voir-torche-gauche" : {
            	fr : "Voir la torche &agrave; gauche",
            	en : "See the torch on the left"
            },
            "voir-torche-droite" : {
            	fr : "Voir la torche &agrave; droite",
            	en : "See the torch on the right"
            },
            
            "necroGSTorcheG-texte-1" : {
            	fr : "Vous vous approchez de la torche sur le mur de gauche.",
            	en : "You approach the torch on the left wall."
            },
            "necroGSTorcheG-texte-2" : {
            	fr : "Celle-ci est &eacute;teinte.",
            	en : "This one is off."
            },
            "necroGSTorcheG-texte-3" : {
            	fr : "Vous ne trouvez pas qu&rsquo;il fait sombre ? Pourquoi ne pas l&rsquo;allumer ?",
            	en : "Don't you think it's dark? Why don't you light it?"
            },

            "utiliser-bougie" : {
            	fr : "Utiliser la bougie",
            	en : "Use the candle"
            },
            "lancer-boule-feu" : {
            	fr : "Lancer une boule de feu",
            	en : "Throwing a fireball"
            },
            "impossible" : {
            	fr : "Impossible",
            	en : "Impossible"
            },
            
            "necroGSTorcheD-texte-1" : {
            	fr : "Vous vous approchez de la torche sur le mur de droite.",
            	en : "You are approaching the torch on the right wall."
            },
            "necroGSTorcheD-texte-2" : {
            	fr : "Vous ne trouvez pas qu&rsquo;il fait froid ? Pourquoi ne pas se rechauffer un peu ?",
            	en : "Don't you think it's cold? Why don't we just warm up a little?"
            },

            "necroGSTorcheOK-texte-1" : {
            	fr : "Vous allumez consciencieusement la torche en prenant soin de ne pas vous br&ucirc;ler.",
            	en : "You light the torch conscientiously, taking care not to burn yourself."
            },
            "necroGSTorcheOK-texte-2" : {
            	fr : "Soudain, vous entendez un syst&egrave;me d&rsquo;engrenages s&rsquo;enclencher&hellip;",
            	en : "Suddenly, you hear a gear system engage&hellip;"
            },
            "necroGSTorcheOK-texte-3" : {
            	fr : "Il semblerait qu&rsquo;une porte se soit ouverte quelque part.",
            	en : "Looks like a door opened somewhere."
            },

            "necroGSTorcheKO-texte-1" : {
            	fr : "Vous lancez votre plus belle <span key='bouleFeu'>boule de feu</span> !",
            	en : "You throw your most beautiful <span key='bouleFeu'>fireball</span>!"
            },
            "necroGSTorcheKO-texte-2" : {
            	fr : "Celle-ci &eacute;clate violemment sur le mur et explose la torche.",
            	en : "This one bursts violently on the wall and explodes the torch."
            },
            "necroGSTorcheKO-texte-3" : {
            	fr : "Il ne reste plus qu&rsquo;une vieille tige en souvenir.",
            	en : "There's only one old stem left to remember."
            },
            "necroGSTorcheKO-texte-4" : {
            	fr : "R.I.P la torche&hellip;",
            	en : "R.I.P torch&hellip;"
            },

            "necroGSTorcheAllume-texte-1" : {
            	fr : "La torche brille de mille feux !",
            	en : "The torch shines brightly!"
            },
            "necroGSTorcheAllume-texte-2" : {
            	fr : "Ne la regardez pas trop longtemps, &ccedil;a pourrait br&ucirc;ler !",
            	en : "Don't look at her too long, it could burn!"
            },

            "necroGSTorcheExplose-texte-1" : {
            	fr : "Une vieille tige carbonis&eacute;e se dresse fi&egrave;rement sur le mur.",
            	en : "An old charred stem stands proudly on the wall."
            },
            "necroGSTorcheExplose-texte-2" : {
            	fr : "Elle n&rsquo;avait pourtant rien fait de mal&hellip;",
            	en : "She had done nothing wrong&hellip;"
            },

            "necroGSS2-texte-1" : {
            	fr : "Vous faites face &agrave; une petite porte ferm&eacute;e &agrave; clef.",
            	en : "You're facing a small locked door."
            },
            "necroGSS2-texte-2" : {
            	fr : "Elle semble tr&egrave;s r&eacute;sistante&hellip;",
            	en : "It seems very resistant&hellip;"
            },
            "necroGSS2-texte-3" : {
            	fr : "En tendant l&rsquo;oreille, vous entendez des cris &agrave; l&rsquo;int&eacute;rieur,",
            	en : "When you hold your ear out, you hear screams inside,"
            },
            "necroGSS2-texte-4" : {
            	fr : "comme si une personne essayait de se d&eacute;battre.",
            	en : "as if someone is trying to fight."
            },

            "utiliser-clef" : {
            	fr : "Utiliser la clef",
            	en : "Use the key"
            },
            "ouvrir" : {
            	fr : "Ouvrir",
            	en : "Open"
            },
            
            "necroS2-texte-1" : {
            	fr : "Vous ouvrez la porte et entrez doucement dans la pi&egrave;ce.",
            	en : "You open the door and enter the room slowly."
            },
            "necroS2-texte-2" : {
            	fr : "Les cris se font de plus en plus pressants et s&rsquo;arr&ecirc;tent d&rsquo;un coup.",
            	en : "The screams are getting louder and louder and stop suddenly."
            },
            "necroS2-texte-3" : {
            	fr : "Vous apercevez une ombre dans le fond de la pi&egrave;ce.",
            	en : "You see a shadow in the background of the room."
            },
            "necroS2-texte-4" : {
            	fr : "Elle vous parle d&rsquo;une voix enfantine :",
            	en : "She speaks to you in a childish voice:"
            },
            "necroS2-texte-5" : {
            	fr : "&laquo; Qui est l&agrave; ? J&rsquo;ai peur&hellip; J&rsquo;ai faim&hellip; &raquo;",
            	en : "&laquo; Who's out there? I'm scared&hellip; I'm hungry&hellip; &raquo;"
            },

            "necroS2Retour-texte-1" : {
            	fr : "L&rsquo;ombre dans le fond de la pi&egrave;ce vous regarde toujours sans bouger.",
            	en : "The shadow in the background of the room always looks at you without moving."
            },
            "necroS2Retour-texte-2" : {
            	fr : "Elle vous parle d&rsquo;une voix enfantine, calmement :",
            	en : "She speaks to you in a childlike voice, calmly:"
            },
            "necroS2Retour-texte-3" : {
            	fr : "&laquo; Te revoil&agrave; ? Tu viens jouer ? &raquo;",
            	en : "&laquo; Are you back again? Are you coming to play? &raquo;"
            },

            "necroS22-texte-1" : {
            	fr : "Vous vous approchez tout doucement pour ne pas l&rsquo;effrayer&hellip;",
            	en : "You approach slowly so as not to frighten him&hellip;"
            },
            "necroS22-texte-2" : {
            	fr : "La silhouette s&rsquo;enfonce un peu plus dans l&rsquo;obscurit&eacute;.",
            	en : "The silhouette sinks a little deeper into the darkness."
            },
            "necroS22-texte-3" : {
            	fr : "Vous entendez soudain une voix criarde :",
            	en : "You suddenly hear a screaming voice:"
            },
            "necroS22-texte-4" : {
            	fr : "&laquo; C&rsquo;est un m&eacute;chant ! Tue-le ! Tue-le, d&eacute;chet ! &raquo;",
            	en : "&laquo; He's a bad guy! Kill him! Kill him, you trash! &raquo;"
            },
            "necroS22-texte-5" : {
            	fr : "Puis, la voix enfantine :",
            	en : "Then the childish voice:"
            },
            "necroS22-texte-6" : {
            	fr : "&laquo; Non&hellip; Il ne faut pas&hellip; &raquo;",
            	en : "&laquo; No&hellip; You mustn' t&hellip; &raquo;"
            },

            "parler" : {
            	fr : "Parler",
            	en : "Speak"
            },
            "approcher" : {
            	fr : "Approcher",
            	en : "Approach"
            },
            
            "necroS2Parle-texte-1" : {
            	fr : "Vous essayez de rassurer l&rsquo;enfant d&rsquo;une voix douce.",
            	en : "You are trying to reassure the child with a soft voice."
            },
            "necroS2Parle-texte-2" : {
            	fr : "Mais, c&rsquo;est &agrave; nouveau la voix criarde qui vous r&eacute;pond :",
            	en : "But it is again the screaming voice that responds to you:"
            },
            "necroS2Parle-texte-3" : {
            	fr : "&laquo; Silence ! Insecte inutile ! Il ne t&rsquo;&eacute;coutera pas !",
            	en : "&laquo; Quiet! Insect useless! He won't listen to you!"
            },
            "necroS2Parle-texte-4" : {
            	fr : "Maintenant, tue-le o&ugrave; tu souffriras de nouveau ! &raquo;",
            	en : "Now kill him or you'll suffer again! &raquo;"
            },
            "necroS2Parle-texte-5" : {
            	fr : "Vous voyez dans le noir deux points brillants&hellip;",
            	en : "You see in the dark two bright spots&hellip;"
            },

            "necroS2Approche-texte-1" : {
            	fr : "L&rsquo;ombre vous regarde fixement et s&rsquo;avance doucement vers vous.",
            	en : "The shadow stares at you and slowly advances towards you."
            },
            "necroS2Approche-texte-2" : {
            	fr : "La porte derri&egrave;re vous claque violemment et vous entendez l&rsquo;enfant rire&hellip;",
            	en : "The back door slams you hard and you hear the child laughing&hellip;"
            },
            "necroS2Approche-texte-3" : {
            	fr : "&laquo; Tu aurais d&ucirc; t&rsquo;enfuir tant que tu le pouvais&hellip; &raquo;",
            	en : "&laquo; You should have run away while you could&hellip; &raquo;"
            },
            "necroS2Approche-texte-4" : {
            	fr : "&Agrave; mesure que la forme s&rsquo;approche, vous la discernez mieux&hellip;",
            	en : "As the shape approaches, you can see it better&hellip;"
            },

            "necroS2Enfant-texte-1" : {
            	fr : "Un enfant s&rsquo;avance lentement, blanc comme un linge.",
            	en : "A child advances slowly, white as a sheet."
            },
            "necroS2Enfant-texte-2" : {
            	fr : "Ses bras sont anormalement longs et couverts de coupures.",
            	en : "His arms are abnormally long and covered with cuts."
            },
            "necroS2Enfant-texte-3" : {
            	fr : "De ses doigts sortent de grandes tiges de fer&hellip;",
            	en : "From his fingers come out large rods of iron&hellip;"
            },
            "necroS2Enfant-texte-4" : {
            	fr : "En avan&ccedil;ant, il se met &agrave; ricaner.",
            	en : "As he moves on, he starts giggling."
            },
            "necroS2Enfant-texte-5" : {
            	fr : "Ses dents, pointues comme les crocs d&rsquo;un loup, brillent d&rsquo;une couleur rouge&acirc;tre.",
            	en : "Its teeth, pointed like a wolf's fangs, shine red."
            },

            "necroS2Enfant2-texte-1" : {
            	fr : "Mais quelle &eacute;tait cette horreur ?!",
            	en : "But what was that horror?!"
            },
            "necroS2Enfant2-texte-2" : {
            	fr : "Les enfants captur&eacute;s servaient &agrave; fabriquer ce monstre ?!",
            	en : "The captured children were used to make this monster?!"
            },
            "necroS2Enfant2-texte-3" : {
            	fr : "Vous r&eacute;alisez soudain que d&rsquo;autres enfants doivent subir le m&ecirc;me sort &agrave; l&rsquo;heure qu&rsquo;il est !",
            	en : "Suddenly you realize that other children have to suffer the same fate now!"
            },
            "necroS2Enfant2-texte-4" : {
            	fr : "Il n&rsquo;est peut-&ecirc;tre pas trop tard !",
            	en : "It may not be too late!"
            },
            "necroS2Enfant2-texte-5" : {
            	fr : "Vous reprenez vos esprits et repartez &agrave; l&rsquo;aventure.",
            	en : "You come to your senses and go back to adventure."
            },

            "necroS2Fouille-texte-1" : {
            	fr : "La salle se compose simplement d&rsquo;une &eacute;tag&egrave;re remplie de vieux parchemins.",
            	en : "The room is simply a shelf filled with old scrolls."
            },
            "necroS2Fouille-texte-2" : {
            	fr : "En en lisant quelques-uns, vous d&eacute;couvrez qu&rsquo;il est possible, avec la formule ad&eacute;quate",
            	en : "By reading a few of them, you will discover that it is possible, with the appropriate formula"
            },
            "necroS2Fouille-texte-3" : {
            	fr : "et un peu de concentration, de lancer une terrible <span key='bouleFeu'>boule de feu</span> !",
            	en : "and a little concentration, to throw a terrible <span key='bouleFeu'>fireball</span>!"
            },
            "necroS2Fouille-texte-4" : {
            	fr : "Il est temps de retourner dans la grande salle ! L&rsquo;aventure n&rsquo;attend pas !",
            	en : "It's time to go back to the big room! The adventure does not wait!"
            },

            "necroS2Clean-texte-1" : {
            	fr : "La salle est vide&hellip; Seul reste au sol cette <span key='experience'>exp&eacute;rience</span> rat&eacute;e.",
            	en : "The room is empty&hellip; Only this failed <span key='experience'>experiment</span> remains on the ground."
            },
            "necroS2Clean-texte-2" : {
            	fr : "Vous vous demandez quel &ecirc;tre immonde a pu op&eacute;rer telle transformation&hellip;",
            	en : "You're wondering what a disgusting thing it is to be could have done such a transformation&hellip;"
            },

            "necroCouloir-texte-1" : {
            	fr : "Vous entrez dans un long couloir &eacute;clair&eacute; par de nombreuses torches.",
            	en : "You enter a long corridor lit by many torches."
            },
            "necroCouloir-texte-2" : {
            	fr : "Une ambiance calme et presque conviviale vous invite &agrave; avancer&hellip;",
            	en : "A calm and almost convivial atmosphere invites you to move forward&hellip;"
            },
            "necroCouloir-texte-3" : {
            	fr : "Une grande porte de ch&ecirc;ne vous fait face et deux portes plus petites",
            	en : "A large oak door facing you and two smaller doors"
            },
            "necroCouloir-texte-4" : {
            	fr : "se trouvent de chaque c&ocirc;t&eacute; du couloir&hellip;",
            	en : "are on either side of the hallway&hellip;"
            },

            "necroSalleFerme-texte-1" : {
            	fr : "Vous approchez de la porte, mais remarquez qu&rsquo;elle ne possede ni poign&eacute;e ni serrure&hellip;",
            	en : "You approach the door, but notice that it has no handle or lock&hellip;"
            },
            "necroSalleFerme-texte-2" : {
            	fr : "Pas tr&egrave;s pratique tout de m&ecirc;me.",
            	en : "Not very practical all the same."
            },
            "necroSalleFerme-texte-3" : {
            	fr : "Vous essayez de forcer un peu pour l&rsquo;ouvrir, mais impossible de la faire bouger.",
            	en : "You try to force a little bit to open it, but you can't make it move."
            },

            "necroS4-texte-1" : {
            	fr : "Vous entrez dans une pi&egrave;ce aux allures de prison.",
            	en : "You walk into a room looking like a prison."
            },
            "necroS4-texte-2" : {
            	fr : "De nombreux enfants sont agglutin&eacute;s dans un coin.",
            	en : "Many children are clustered in a corner."
            },
            "necroS4-texte-3" : {
            	fr : "Lorsqu&rsquo;ils s&rsquo;enfuient &agrave; votre demande, l&rsquo;un d&rsquo;eux vous tend une <span key='potionSante'>fiole rouge</span>.",
            	en : "When they run away at your request, one of them hands you a <span key='potionSante'>red vial</span>."
            },
            "necroS4-texte-4" : {
            	fr : "&Ccedil;a peut toujours aider&hellip;",
            	en : "It can always help&hellip;"
            },

            "necroS5-texte-1" : {
            	fr : "Vous entrez dans une belle biblioth&egrave;que pleine de livres anciens.",
            	en : "You enter a beautiful library full of old books."
            },
            "necroS5-texte-2" : {
            	fr : "Vous en lisez quelques-uns qui vous apprennent qu&rsquo;il est possible,",
            	en : "You read a few of them that tell you that it is possible,"
            },
            "necroS5-texte-3" : {
            	fr : "en se concentrant, de faire sortir de l&rsquo;&eacute;nergie de son corps afin de se <span key='soin'>soigner</span>.",
            	en : "by concentrating, to take energy out of your body in order to <span key='soin'>heal</span> yourself."
            },

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

            "tousser" : {
            	fr : "Toussoter",
            	en : "Give a discreet cough"
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
            	fr : "Lorsque vous voyez son visage, vous ne pouvez que r&eacute;prouver un fort d&eacute;go&ucirc;t :",
            	en : "This one is covered with pustules and lets us glimpse its skull in several places."
            },
            "bossParle-texte-5" : {
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
            	fr : "Peut-&ecirc;tre d&rsquo;autres qu&ecirc;tes valent-elles la peine d&rsquo;&ecirc;tre v&eacute;cues&hellip;",
            	en : "Perhaps other quests are worth living&hellip;"
            },

            "terminer" : {
            	fr : "Terminer",
            	en : "Finish"
            }
            
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			if (!this.local) {
				this.local = navigator.language || navigator.userLanguage;
			}
			var text = $.extend(true, {}, data[key]);
			if (!text[this.local]) return key;
			else return text[this.local];
		}
	};
});