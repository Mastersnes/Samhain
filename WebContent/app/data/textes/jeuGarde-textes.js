'use strict';
define([], function(){
	var data = {
	        /**
	        * PokGard
	        **/
            "pokgard-debut" : {
                fr : "Allons-y mon gars, j’espère que t'es prêt !",
                en : "Let's go, I hope you're ready!"
            },
            "pokgard-win" : {
                fr : "Bien joué ! T'en referas bien une ? Non ?",
                en : "Well played! You' re gonna do another one, aren't you?"
            },

            /**
            * Legende
            **/
            "legende" : {
                fr : "Légende :",
                en : "Caption :"
            },
            "action-legende" : {
                fr : "Action :",
                en : "Action:"
            },
            "pomme-legende" : {
                fr : "Pomme :",
                en : "Apple:"
            },
            "fromage-legende" : {
                fr : "Fromage :",
                en : "Cheese:"
            },
            "potion-legende" : {
                fr : "Potion :",
                en : "Potion:"
            },
            "points" : {
                fr : "Points",
                en : "Points"
            },
            "score" : {
                fr : "Score :",
                en : "Score:"
            },
            "victoires" : {
                fr : "Victoires :",
                en : "Victories:"
            },
            "bourse" : {
                fr : "Bourse :",
                en : "Purse:"
            },
            "abandonner-legend" : {
                fr : "Abandonner ?",
                en : "Give up?"
            },
            "abandonner-confirm" : {
                fr : "Désirez-vous réellement abandonner la partie ?",
                en : "Do you really want to give up the game?"
            },
            "regles" : {
                fr : "Voir les règles",
                en : "See the rules"
            },

            /**
            * Alertes
            **/
            "garde-begin" : {
                fr : "Le garde commence la partie",
                en : "-"
            },
            "player-begin" : {
                fr : "Vous commencez la partie.</br><b>Misez</b> ou <b>passez votre tour</b>.",
                en : "-"
            },
            "garde-turn" : {
                fr : "C'est le tour du garde.",
                en : "-"
            },
            "player-turn" : {
                fr : "C'est votre tour.</br><b>Misez</b> ou <b>passez votre tour</b>.",
                en : "-"
            },
            "player-turn-2" : {
                fr : "Vous pouvez maintenant <b>piocher</b> ou <b>utiliser une action</b>.",
                en : "-"
            },
            "player-impossible" : {
                fr : "Vous n'avez plus assez pour <b>miser</b>.<br/>Veuillez <b>passer votre tour</b>.",
                en : "-"
            },
            "garde-use" : {
                fr : "Le garde utilise l'action <b>?</b>.",
                en : "-"
            },
            "player-use" : {
                fr : "Choisissez une <b>carte adverse</b> pour <b>utiliser votre action</b>.",
                en : "-"
            },
            "garde-mise" : {
                fr : "Le garde mise <b>?po</b>.",
                en : "-"
            },
            "garde-non-mise" : {
                fr : "Le garde passe son tour.",
                en : "-"
            },
            "player-win" : {
                fr : "Félicitations, vous raflez la mise !</br><b>Cliquez pour continuer</b>.",
                en : "-"
            },
            "player-lose" : {
                fr : "Vous perdez de <b>?</b> points contre <b>?</b>...</br>Le garde rafle la mise</br><b>Cliquez pour continuer</b>.",
                en : "-"
            },
            "match-nul" : {
                fr : "Match nul...</br><b>Cliquez pour continuer</b>.",
                en : "-"
            },

            /**
            * Actions
            **/
            "pokgard-voir-action" : {
                fr : "Action : Voir la carte",
                en : "Action : See the card"
            },
            "pokgard-voler-action" : {
                fr : "Action : Voler la carte",
                en : "Action : Steal the card"
            },
            "pokgard-detruire-action" : {
                fr : "Action : Détruire la carte",
                en : "Action : Destroy the card"
            },

            /**
            * Tuto
            **/
            "pokgard-tuto-0" : {
                fr : "Tu vas voir, les règles sont très simples.</br><b>Clique ici</b>, je vais t'expliquer...",
                en : ""
            },
            "pokgard-tuto-1" : {
                fr : "Normalement, le premier joueur est <b>tiré au sort</b>.</br>Pour cette partie, je te laisse <b>commencer</b>.",
                en : ""
            },
            "pokgard-tuto-2" : {
                fr : "Pour ce <b>premier tour</b>, la <b>mise</b> initiale est de <b>100po</b>.</br>Elle <b>augmentera</b> ensuite tout au long de la partie.",
                en : ""
            },
            "pokgard-tuto-3" : {
                fr : "Tu es obligé de <b>miser</b> pour pouvoir jouer.</br>Si tu ne peux pas, il te faudra <b>passer ton tour</b>.",
                en : ""
            },
            "pokgard-tuto-4" : {
                fr : "<b>Clique</b> sur <b>'Miser'</b> pour continuer.",
                en : ""
            },

            "pokgard-tuto-5" : {
                fr : "Bien joué.</br>Maintenant que tu as <b>misé</b>, trois choix s'offrent à toi.",
                en : ""
            },
            "pokgard-tuto-6" : {
                fr : "Tu peux <b>miser</b> de nouveau et ainsi <b>augmenter la mise</b> que doivent verser les joueurs <b>à chaque tour</b>.",
                en : ""
            },
            "pokgard-tuto-7" : {
                fr : "Tu peux <b>passer ton tour</b> et donc abandonner ton droit de jouer cette fois-ci.",
                en : ""
            },
            "pokgard-tuto-8" : {
                fr : "Ou bien, tu peux <b>piocher</b> pour tenter d'obtenir des points.",
                en : ""
            },
            "pokgard-tuto-9" : {
                fr : "Vas-y, <b>pioche</b> une carte.",
                en : ""
            },

            "pokgard-tuto-10" : {
                fr : "Félicitations, tu as <b>pioché</b> ta première carte ! Cela a automatiquement <b>passé ton tour</b>.",
                en : ""
            },
            "pokgard-tuto-11" : {
                fr : "J'en ai donc profité pour <b>jouer</b> et <b>piocher</b> également.",
                en : ""
            },
            "pokgard-tuto-12" : {
                fr : "Il est possible de <b>piocher</b> deux types de cartes : <b>les points</b> et <b>les actions</b>.",
                en : ""
            },
            "pokgard-tuto-13" : {
                fr : "La <b>pomme</b> vaut <b>1 point</b>,</br>Le <b>fromage</b> en vaut <b>2</b>,</br>Et la <b>potion</b> en vaut <b>3</b>.",
                en : ""
            },
            "pokgard-tuto-14" : {
                fr : "Garde-les précieusement. Plus tu as de <b>points</b>, plus tu as de chance de <b>gagner la partie</b> !",
                en : ""
            },
            "pokgard-tuto-15" : {
                fr : "Les <b>actions</b> sont des cartes qui te permettent de <b>voir</b>, <b>voler</b> ou même <b>détruire</b> les cartes adverses.",
                en : ""
            },
            "pokgard-tuto-16" : {
                fr : "Tu en as justement une. <b>Clique</b> dessus et <b>utilise</b> là sur ma carte !",
                en : ""
            },

            "pokgard-tuto-17" : {
                fr : "Bien joué !</br>Les <b>actions</b> te permettront de renverser la situation et d'amasser <b>plus de points</b>.",
                en : ""
            },
            "pokgard-tuto-18" : {
                fr : "Bien, maintenant, c'est à toi de <b>jouer</b> !</br>N'oublie pas : ne <b>mise</b> jamais plus que ce que tu possèdes !",
                en : ""
            },
            "pokgard-tuto-18-2" : {
                fr : "Bien, maintenant, reprenons notre <b>partie</b> !</br>N'oublie pas : ne <b>mise</b> jamais plus que ce que tu possèdes !",
                en : ""
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});