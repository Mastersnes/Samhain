'use strict';
define([], function(){
	var data = {
            /**
            * PokGard
            **/
            "pokgard-debut" : {
            	fr : "Allons-y mon gars, j’espère que t'es prêt&nbsp;!",
            	en : "Let's go dude, I hope you're ready!",
            	eo : "Ek! Ulo! Mi esperas, ke vi estas preta!"
            },
            "pokgard-win" : {
            	fr : "Bien joué&nbsp;! T'en referas bien une&nbsp;? Non&nbsp;?",
            	en : "Well played! You’re gonna do another one, don’t you?",
            	eo : "Bonege! Vi ja faros alian ludpartion? Ĉu ne?"
            },

            /**
            * Legende
            **/
            "legende" : {
            	fr : "Légende&nbsp;:",
            	en : "Caption:",
            	eo : "Klarigo:"
            },
            "action-legende" : {
            	fr : "Action&nbsp;:",
            	en : "Action:",
            	eo : "Ago:"
            },
            "pomme-legende" : {
            	fr : "Pomme&nbsp;:",
            	en : "Apple:",
            	eo : "Pomo:"
            },
            "fromage-legende" : {
            	fr : "Fromage&nbsp;:",
            	en : "Cheese:",
            	eo : "Fromaĝo:"
            },
            "potion-legende" : {
            	fr : "Potion&nbsp;:",
            	en : "Potion:",
            	eo : "Pocio:"
            },
            "points" : {
            	fr : "Points",
            	en : "Points",
            	eo : "Poentoj"
            },
            "score" : {
            	fr : "Score&nbsp;:",
            	en : "Score:",
            	eo : "Poentaro:"
            },
            "victoires" : {
            	fr : "Victoires&nbsp;:",
            	en : "Victories:",
            	eo : "Venkoj:"
            },
            "bourse" : {
            	fr : "Bourse&nbsp;:",
            	en : "Purse:",
            	eo : "Burso:"
            },
            "abandonner-legend" : {
            	fr : "Abandonner&nbsp;?",
            	en : "Give up?",
            	eo : "Rezigni?"
            },
            "abandonner-confirm" : {
            	fr : "Désirez-vous réellement abandonner la partie&nbsp;?",
            	en : "Do you really want to give up the game?",
            	eo : "Ĉu vi vere volas rezigni la ludon?"
            },
            "regles" : {
            	fr : "Voir les règles",
            	en : "See the rules",
            	eo : "Vidi la regulojn"
            },

            /**
            * Alertes
            **/
            "garde-begin" : {
            	fr : "Le garde commence la partie.",
            	en : "Guard begins the game.",
            	eo : "La gardisto komencas la ludon."
            },
            "player-begin" : {
            	fr : "Vous commencez la partie.</br><b>Misez</b> ou <b>passez votre tour</b>.",
            	en : "You begin the game.</br><b>Bet</b> or <b>pass your turn</b>.",
            	eo : "Vi komencas la ludon.</br><b>Vetu</b> aŭ <b>rezignu vian vicon</b>."
            },
            "garde-turn" : {
            	fr : "C'est le tour du garde.",
            	en : "It’s the guard’s turn.",
            	eo : "Tio estas la vico de la gardisto."
            },
            "player-turn" : {
            	fr : "C'est votre tour.</br><b>Misez</b> ou <b>passez votre tour</b>.",
            	en : "It’s your turn.</br><b>Bet</b> or <b>pass your turn</b>.",
            	eo : "Tio estas via vico.</br><b>Vetu</b> aŭ <b>rezignu vian vicon</b>."
            },
            "player-turn-2" : {
            	fr : "Vous pouvez maintenant <b>piocher</b> ou <b>utiliser une action</b>.",
            	en : "Now, you can <b>draw</b> or <b>use an action</b>.",
            	eo : "Nun vi povas <b>eltiri karton</b> aŭ <b>uzi agon</b>."
            },
            "player-impossible" : {
            	fr : "Vous n'avez plus assez pour <b>miser</b>.<br/>Veuillez <b>passer votre tour</b>.",
            	en : "You don’t have enough left to <b>bet</b>.<br/>Please, <b>pass your turn</b>.",
            	eo : "Vi ne plu havas sufiĉe por <b>veti</b>.<br/>Bonvolu <b>rezigni vian vicon</b>."
            },
            "garde-use" : {
            	fr : "Le garde utilise l'action <b>?</b>.",
            	en : "Guard uses the action <b>?</b>.",
            	eo : "La gardisto uzas la ago <b>?</b>."
            },
            "player-use" : {
            	fr : "Choisissez une <b>carte adverse</b> pour <b>utiliser votre action</b>.",
            	en : "Choose an <b>adverse card</b> to <b>use your action</b>.",
            	eo : "Elektu <b>adversan karton</b> por <b>uzi via ago</b>."
            },
            "garde-mise" : {
            	fr : "Le garde mise <b>?po</b>.",
            	en : "Guard bets <b>?gold</b>.",
            	eo : "La gardisto vetas <b>?oron</b>."
            },
            "garde-non-mise" : {
            	fr : "Le garde passe son tour.",
            	en : "Guard passes his turn.",
            	eo : "La gardisto rezignas sian vicon."
            },
            "player-win" : {
            	fr : "Félicitations, vous raflez la mise&nbsp;!</br><b>Cliquez pour continuer</b>.",
            	en : "Congratulations, you take the pot!</br><b>Click to continue</b>.",
            	eo : "Gratulon! Vi gajnas la veton!</br><b>Kliku por daŭrigi</b>."
            },
            "player-lose" : {
            	fr : "Vous perdez de <b>?</b> points contre <b>?</b>&hellip;</br>Le garde rafle la mise.</br><b>Cliquez pour continuer</b>.",
            	en : "You lose up to <b>?</b> points against <b>?</b>&hellip;</br>Guard takes the pot.</br><b>Click to continue</b>.",
            	eo : "Vi malgajnas da <b>?</b> poentoj kontraŭ <b>?</b>&hellip;</br>La gardisto gajnas la veton.</br><b>Kliku por daŭrigi</b>."
            },
            "match-nul" : {
            	fr : "Match nul&hellip;</br><b>Cliquez pour continuer</b>.",
            	en : "Draw&hellip;</br><b>Click to continue</b>.",
            	eo : "Nula matĉo&hellip;</br><b>Kliku por daŭrigi</b>."
            },

            /**
            * Actions
            **/
            "pokgard-voir-action" : {
            	fr : "Action&nbsp;: Voir la carte",
            	en : "Action: Look at the card",
            	eo : "Ago: Vidi la karton"
            },
            "pokgard-voler-action" : {
            	fr : "Action&nbsp;: Voler la carte",
            	en : "Action: Steal the card",
            	eo : "Ago: Ŝteli la karton"
            },
            "pokgard-detruire-action" : {
            	fr : "Action&nbsp;: Détruire la carte",
            	en : "Action: Destroy the card",
            	eo : "Ago: Detrui la karton"
            },

            /**
            * Tuto
            **/
            "pokgard-tuto-0" : {
            	fr : "Tu vas voir, les règles sont très simples.</br><b>Clique ici</b>, je vais t'expliquer&hellip;",
            	en : "You’re gonna see, rules are very simple.</br><b>Click here</b>, I’m going to explain it to you&hellip;",
            	eo : "Vi estas vidonta, la reguloj estas tre simplaj.</br><b>Kliku ĉi tie</b>, mi estas klarigonta al vi&hellip;"
            },
            "pokgard-tuto-1" : {
            	fr : "Normalement, le premier joueur est <b>tiré au sort</b>.</br>Mais pour cette partie, je te laisse <b>commencer</b>.",
            	en : "Usually, the first player is <b>randomly chosen</b>.</br>But for this game, I let you <b>begin</b>.",
            	eo : "Kutime, la unua ludanto estas <b>lotita</b>.</br>Sed pri ĉi tiu ludo, mi lasas vin <b>komenci</b>."
            },
            "pokgard-tuto-2" : {
            	fr : "Pour ce <b>premier tour</b>, la <b>mise</b> initiale est de <b>100po</b>.</br>Elle <b>augmentera</b> ensuite tout au long de la partie.",
            	en : "For this <b>first turn</b>, the starting <b>bet</b> is <b>100gold</b>.</br>Then, it’ll <b>increase</b> during the game.",
            	eo : "Pri ĉi tiu <b>unua vico</b>, la eka <b>veto</b> estas da <b>100oro</b>.</br>Poste, ĝi <b>pliiĝos</b> dum la ludo."
            },
            "pokgard-tuto-3" : {
            	fr : "Tu es obligé de <b>miser</b> pour pouvoir jouer.</br>Si tu ne peux pas, il te faudra <b>passer ton tour</b>.",
            	en : "You must <b>bet</b> to be able to play.</br>If you can’t, you’ll have to <b>pass your turn</b>.",
            	eo : "Vi estas devigata <b>veti</b> por rajti ludi.</br>Se vi ne povas, vi devos <b>rezigni vian vicon</b>."
            },
            "pokgard-tuto-4" : {
            	fr : "<b>Clique</b> sur <b>'Miser'</b> pour continuer.",
            	en : "<b>Click</b> on <b>'Bet'</b> to continue.",
            	eo : "<b>Kliku</b> sur <b>'Veti'</b> por daŭrigi."
            },

            "pokgard-tuto-5" : {
            	fr : "Bien joué&nbsp;!</br>Maintenant que tu as <b>misé</b>, trois choix s'offrent à toi.",
            	en : "Well played!</br>Now that you have <b>bet</b>, you got three choices.",
            	eo : "Bonege!</br>Nun ke vi estas <b>vetinta</b>, vi havas tri elektojn."
            },
            "pokgard-tuto-6" : {
            	fr : "Tu peux <b>miser</b> de nouveau et ainsi <b>augmenter la mise</b> que doivent verser les joueurs <b>à chaque tour</b>.",
            	en : "You’re able <b>to bet</b> again and thus <b>increase the bet</b> that players have to pay <b>each turn</b>.",
            	eo : "Vi povas <b>veti</b> denove kaj tiel <b>pliigi la veton</b>, kiun devas pagi la ludantoj dum <b>ĉiu vico</b>."
            },
            "pokgard-tuto-7" : {
            	fr : "Tu peux <b>passer ton tour</b> et donc abandonner ton droit de jouer cette fois-ci.",
            	en : "You’re able to <b>pass your turn</b> and so give up your right to play this time.",
            	eo : "Vi povas <b>rezigni vian vicon</b> kaj do rezigni vian rajton ludi ĉi tiun fojon."
            },
            "pokgard-tuto-8" : {
            	fr : "Ou bien, tu peux <b>piocher</b> pour tenter d'obtenir des points.",
            	en : "Or you may <b>draw</b> and try to earn some points.",
            	eo : "Aŭ vi povas <b>eltiri karton</b> por provi gajni poentojn."
            },
            "pokgard-tuto-9" : {
            	fr : "Vas-y, <b>pioche</b> une carte.",
            	en : "Come on, <b>draw</b> a card.",
            	eo : "Ek, <b>eltiru</b> karton."
            },

            "pokgard-tuto-10" : {
            	fr : "Félicitations, tu as <b>pioché</b> ta première carte&nbsp;! Cela a automatiquement <b>passé ton tour</b>.",
            	en : "Congratulations, you <b>drew</b> your first card! This has automatically <b>past your turn</b>.",
            	eo : "Gratulon! Vi estas <b>eltirinta</b> vian unuan karton! Tio aŭtomate <b>nuligis via vico</b>."
            },
            "pokgard-tuto-11" : {
            	fr : "J'en ai donc profité pour <b>jouer</b> et <b>piocher</b> également.",
            	en : "So I took the opportunity to <b>play</b> and <b>draw</b> too.",
            	eo : "Do, ankaŭ mi estas profitinta por <b>ludi</b> kaj <b>eltiri karton</b>."
            },
            "pokgard-tuto-12" : {
            	fr : "Il est possible de <b>piocher</b> deux types de cartes : <b>les points</b> et <b>les actions</b>.",
            	en : "It’s possible to draw two types of cards: <b>points</b> and <b>actions</b>.",
            	eo : "Eblas eltiri du kartotipojn: <b>poentojn</b> kaj <b>agojn</b>."
            },
            "pokgard-tuto-13" : {
            	fr : "La <b>pomme</b> vaut <b>1 point</b>,</br>Le <b>fromage</b> en vaut <b>2</b>,</br>Et la <b>potion</b> en vaut <b>3</b>.",
            	en : "The <b>apple</b> worth <b>1 point</b>,</br>The <b>cheese</b> worth <b>2 points</b>,</br>And the <b>potion</b> worth <b>3 points</b>.",
            	eo : "La <b>pomo</b> valoras <b>1 poenton</b>,</br>La <b>fromaĝo</b> valoras <b>2 poentojn</b>,</br>Kaj la <b>pocio</b> valoras <b>3 poentojn</b>."
            },
            "pokgard-tuto-14" : {
            	fr : "Garde-les précieusement. Plus tu as de <b>points</b>, plus tu as de chance de <b>gagner la partie</b>&nbsp;!",
            	en : "Treasure them. The more <b>points</b> you have the more chance you have to <b>win the game</b>!",
            	eo : "Zorge konservu ilin. Ju pli vi havas <b>poentojn</b>, des pli vi havas ŝancojn <b>gagni la ludon</b>!"
            },
            "pokgard-tuto-15" : {
            	fr : "Les <b>actions</b> permettent de <b>voir</b>, <b>voler</b> ou même <b>détruire</b> les cartes adverses.",
            	en : "The <b>actions</b> allow you to <b>see</b>, <b>steal</b> or <b>destroy</b> adverse cards.",
            	eo : "La <b>agoj</b> ebligas <b>vidi</b>, <b>ŝteli</b> aŭ <b>detrui</b> adversajn kartojn."
            },
            "pokgard-tuto-16" : {
            	fr : "Tu en as justement une. <b>Clique</b> dessus et <b>utilise</b> la sur ma carte&nbsp;!",
            	en : "Actually, you got one. <b>Click</b> on it and <b>use</b> it on my card!",
            	eo : "Ĝuste nun, vi havas unu. <b>Kliku</b> sur ĝin kaj <b>uzu</b> ĝin sur mia karto!"
            },

            "pokgard-tuto-17" : {
            	fr : "Bien joué&nbsp;!</br>Les <b>actions</b> te permettront de renverser la situation et d'amasser <b>plus de points</b>.",
            	en : "Well played! The <b>actions</b> will allow you to reverse the situation and to amass <b>more points</b>.",
            	eo : "Bonege! La <b>agoj</b> ebligos vin inversigi la situacion kaj amasigi <b>pliajn poentojn</b>."
            },
            "pokgard-tuto-18" : {
            	fr : "Bien, maintenant, c'est à toi de <b>jouer</b>&nbsp;!</br>N'oublie pas : ne <b>mise</b> jamais plus que ce que tu possèdes&nbsp;!",
            	en : "Good, now it’s your <b>turn</b>!</br>Don’t forget: Never <b>bet</b> more than you possess!",
            	eo : "Bone, nun tio estas via <b>vico</b>!</br>Ne forgesu: neniam <b>vetu</b> pli ol vi posedas!"
            },
            "pokgard-tuto-18-2" : {
            	fr : "Bien, maintenant, reprenons notre <b>partie</b>&nbsp;!</br>N'oublie pas : ne <b>mise</b> jamais plus que ce que tu possèdes&nbsp;!",
            	en : "Good, now let’s continue our <b>game</b>!</br>Don’t forget: Never <b>bet</b> more than you possess!",
            	eo : "Bone, nun daŭrigu nian <b>ludon</b>!</br>Ne forgesu: neniam <b>vetu</b> pli ol vi posedas!"
            }
	};
	
	return {
        name : function() {
            return "JeuGarde.js";
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