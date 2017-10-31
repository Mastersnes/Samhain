'use strict';
define(["jquery"], function($){
	var data = {
	        /**
	         * Menu
	         */
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
            "rentrer-ville" : {
                fr : "Rentrer en ville",
                en : "Getting back into town"
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
            "roiAraigneeGuerit3-texte-2" : {
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
            "villeFouilleReussite2-texte-1" : {
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