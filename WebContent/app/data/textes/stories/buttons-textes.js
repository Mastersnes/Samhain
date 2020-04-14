'use strict';
define([], function(){
	var data = {
	    /**
	    * Boutons generiques
	    * Action basique
	    **/
	    "oui" : {
            fr : "Oui",
            en : "Yes"
        },
        "non" : {
            fr : "Non",
            en : "No"
        },
        "suivant" : {
            fr : "Suivant",
            en : "Next"
        },
        "retour" : {
            fr : "Retour",
            en : "Returns"
        },
        "retour-menu" : {
            fr : "Retour au menu",
            en : "Returns to the menu"
        },
        "restart-action" : {
            fr : "Recommencer",
            en : "Restart"
        },
        "retry-action" : {
            fr : "Réessayer",
            en : "Retry"
        },
        "abandonner" : {
            fr : "Abandonner",
            en : "Give up"
        },
        "impossible" : {
            fr : "Impossible",
            en : "Impossible"
        },
        "terminer" : {
            fr : "Terminer",
            en : "Finish"
        },
        "reessayer" : {
            fr : "Réessayer",
            en : "Retry"
        },

        /**
        * Combat
        **/
        "lattaquer-m" : {
            fr : "L'attaquer",
            en : "Attack him"
        },
        "lattaquer-f" : {
            fr : "L'attaquer",
            en : "Attack her"
        },
        "les-attaquer" : {
            fr : "Les attaquer",
            en : "Attack them"
        },
        "alattaque" : {
            fr : "À l'attaque&nbsp;!",
            en : "Attack!"
        },
        "combattre" : {
            fr : "Combattre",
            en : "Fight"
        },
        "se-battre" : {
            fr : "Se battre",
            en : "Fight"
        },
        "fuir" : {
            fr : "Fuir en courant",
            en : "Running away"
        },
        "lancer-boule-feu" : {
            fr : "Lancer une boule de feu",
            en : "Throwing a fireball"
        },
        "lancer-combat" : {
            fr : "Lancer le combat",
            en : "-"
        },

        /**
        * Inspection d'objets
        **/
        "examine-sol" : {
            fr : "Examiner le sol",
            en : "Examining the soil"
        },
        "examiner-lieux" : {
            fr : "Examiner les lieux",
            en : "Examine the place"
        },
        "fouiller-lieux" : {
            fr : "Fouiller les lieux",
            en : "Search the places"
        },
        "fouille-corp" : {
            fr : "Fouiller le corps",
            en : "Searching the body"
        },
        "fouiller" : {
            fr : "Fouiller",
            en : "Search"
        },
        "fouiller-piece" : {
            fr : "Fouiller la pièce",
            en : "Search the room"
        },
        "fouiller-salle" : {
            fr : "Fouiller la salle",
            en : "Search the room"
        },
        "laisser" : {
            fr : "Laisser",
            en : "Leave it"
        },
        "fouiller-cercueil" : {
            fr : "Fouiller les cercueils",
            en : "Searching coffins"
        },
        "voir-torche-gauche" : {
            fr : "Voir la torche à gauche",
            en : "See the torch on the left"
        },
        "voir-torche-droite" : {
            fr : "Voir la torche à droite",
            en : "See the torch on the right"
        },
        "forcer-coffre" : {
            fr : "Forcer le coffre",
            en : "Forcing the trunk"
        },
        "examine-alentours" : {
            fr : "Examiner les alentours",
            en : "Look around"
        },
        "fouille-corps" : {
            fr : "Fouiller les corps",
            en : "Searching bodies"
        },
        "fouiller-table" : {
            fr : "Fouiller la table",
            en : "Search the table"
        },
        "examine-grange" : {
            fr : "Examiner la grange",
            en : "Examine the barn"
        },
        "fouiller-maison" : {
            fr : "Fouiller les maisons",
            en : "Searching houses"
        },

        /**
        * Action sur les objets
        **/
        "utiliser-bougie" : {
            fr : "Utiliser la bougie",
            en : "Use the candle"
        },
        "prendre-bougie" : {
            fr : "Prendre la bougie",
            en : "Take the candle"
        },
        "prendre-croc" : {
            fr : "Prendre le croc",
            en : "Take the fang"
        },
        "laisser-croc" : {
            fr : "Laisser le croc",
            en : "Leave the fang"
        },
        "try-open" : {
            fr : "Essayer de l'ouvrir",
            en : "Try to open it"
        },
        "prendre" : {
            fr : "Prendre",
            en : "Take it"
        },
        "tout-prendre" : {
            fr : "Tout prendre",
            en : "Take everything"
        },
        "ouvrir-porte" : {
            fr : "Ouvrir la porte",
            en : "Open the door"
        },
        "ouvrir" : {
            fr : "Ouvrir",
            en : "Open"
        },
        "utiliser-clef" : {
            fr : "Utiliser la clef",
            en : "Use the key"
        },
        "prendre-parchemin" : {
            fr : "Prendre les parchemins",
            en : "Take the Scrolls"
        },
        "mange-continue" : {
            fr : "Manger et continuer",
            en : "Eat and continue"
        },
        "retirer-baton" : {
            fr : "Retirer le bâton",
            en : "Remove the stick"
        },
        "casser-baton" : {
            fr : "Casser le bâton",
            en : "Break the stick"
        },
        "garder-baton" : {
            fr : "Garder le bâton",
            en : "Keeping the stick"
        },
        "prendre-arme" : {
            fr : "Prendre les armes",
            en : "Take up arms"
        },
        "laisser-arme" : {
            fr : "Laisser les armes",
            en : "Leave the weapons"
        },
        "se-servir" : {
            fr : "Se servir",
            en : "Help yourself"
        },

        /**
        * Interaction avec des gens ou objets
        **/
        "insister" : {
            fr : "Insister",
            en : "Insist"
        },
        "venger-affront" : {
            fr : "Venger cet affront",
            en : "Putting up this affront"
        },
        "laisser-tomber" : {
            fr : "Laisser tomber",
            en : "Drop out"
        },
        "let-him" : {
            fr : "Le laisser",
            en : "Leaving him"
        },
        "refuser" : {
            fr : "Refuser",
            en : "Refuse"
        },
        "accepter" : {
            fr : "Accepter",
            en : "Accept"
        },
        "aider" : {
            fr : "Aider",
            en : "Help Them"
        },
        "aider-guarde" : {
            fr : "Aider les gardes",
            en : "Helping the guards"
        },
        "parler" : {
            fr : "Parler",
            en : "Speak"
        },
        "tousser" : {
            fr : "Toussoter",
            en : "Give a discreet cough"
        },
        "laisser-partir" : {
            fr : "Le laisser partir",
            en : "Let him go"
        },
        "donner-potion" : {
            fr : "Donner la potion",
            en : "Give the potion"
        },
        "donner-fromage" : {
            fr : "Donner le fromage",
            en : "Give the cheese"
        },
        "defendre-village" : {
            fr : "Défendre le village",
            en : "Defende the city"
        },
        "demander-entrer" : {
            fr : "Demander à entrer",
            en : "Ask to enter"
        },
        "demander-travail" : {
            fr : "Demander du travail",
            en : "Ask for work"
        },
        "linsulter-m" : {
            fr : "L'insulter",
            en : "Insult him"
        },
        "linsulter-f" : {
            fr : "L'insulter",
            en : "Insult her"
        },
        "forcer-passage" : {
            fr : "Forcer le passage",
            en : "Force the way"
        },
        "montrer-anneau" : {
            fr : "Montrer l'anneau",
            en : "Show the ring"
        },
        "montrer-lettre" : {
            fr : "Montrer la lettre",
            en : "Show letter"
        },
        "demander-recompense" : {
            fr : "Demander la récompense",
            en : "Ask for the reward"
        },
        "travailler" : {
            fr : "Travailler",
            en : "Work"
        },
        "apprendre" : {
            fr : "Apprendre",
            en : "Learn"
        },
        "se-reposer" : {
            fr : "Se reposer",
            en : "Resting"
        },
        "castagner" : {
            fr : "Castagner",
            en : "Beat up"
        },

        /**
        * Dialogue
        **/
        "lamort" : {
            fr : "La mort&nbsp;!",
            en : "Death!"
        },
        "quietesvous" : {
            fr : "Qui êtes-vous&nbsp;?",
            en : "Who are you?"
        },
        "evidemment" : {
            fr : "Évidemment&nbsp;!",
            en : "Obviously!"
        },
        "non-merci" : {
            fr : "Non merci",
            en : "No thanks"
        },
        "unami" : {
            fr : "Un ami",
            en : "A friend"
        },
        "jairien" : {
            fr : "Je n'ai rien",
            en : "I have nothing"
        },
        "stop" : {
            fr : "Stop&nbsp;!",
            en : "Stop!"
        },
        "arretez" : {
            fr : "Arrêtez&nbsp;!",
            en : "Stop it!"
        },
        "comment" : {
            fr : "Comment&nbsp;?!",
            en : "How!"
        },
        "ou-aller-vous" : {
            fr : "Où allez-vous&nbsp;?",
            en : "Where are you going?"
        },
        "pourquoi" : {
            fr : "Pourquoi&nbsp;?",
            en : "Why?"
        },
        "qui-fait-ca" : {
            fr : "Qui a fait ça&nbsp;?",
            en : "Who has done it?"
        },
        "tant-pis" : {
            fr : "Tant pis&hellip;",
            en : "Too bad&hellip;"
        },
        "quel-recompense" : {
            fr : "Quel est la récompense&nbsp;?",
            en : "What's the reward?"
        },
        "agitation" : {
            fr : "De l'agitation&nbsp;?",
            en : "Some unrest?"
        },

        /**
        * Achat
        **/
        "faire-achat" : {
            fr : "Faire des achats",
            en : "Make purchases"
        },
        "acheter" : {
            fr : "Acheter",
            en : "Buy"
        },
        "vendre" : {
            fr : "Vendre",
            en : "Sell"
        },
        "quitter-boutique" : {
            fr : "Quitter la boutique",
            en : "Leave the shop"
        },

        /**
        * Direction
        **/
        "en-route" : {
            fr : "En route !",
            en : "Let's go!"
        },
        "left" : {
            fr : "Gauche",
            en : "Left"
        },
        "go-left" : {
            fr : "Aller à gauche",
            en : "Go to the left"
        },
        "right" : {
            fr : "Droite",
            en : "Right"
        },
        "go-right" : {
            fr : "Aller à droite",
            en : "Go to the right"
        },
        "go-face" : {
            fr : "Aller en face",
            en : "Go in front"
        },
        "avancer" : {
            fr : "S'avancer",
            en : "Step forward"
        },
        "approcher" : {
            fr : "Approcher",
            en : "Approach"
        },
        "entrer" : {
            fr : "Entrer",
            en : "Enter"
        },
        "suivre-trace" : {
            fr : "Suivre les traces",
            en : "Follow the tracks"
        },
        "revenir-pas" : {
            fr : "Revenir sur vos pas",
            en : "Retrace your steps"
        },
        "retour-arriere" : {
            fr : "Retourner en arrière",
            en : "Return backward"
        },
        "sen-aller" : {
            fr : "S'en aller",
            en : "Leave"
        },
        "contourner" : {
            fr : "Contourner",
            en : "Bypass"
        },
        "continue-adventure" : {
            fr : "Continuer l'aventure",
            en : "Continue the adventure"
        },
        "aller-village" : {
            fr : "Aller au village",
            en : "Go to the village"
        },
        "rentrer-village" : {
            fr : "Rentrer au village",
            en : "Go back to village"
        },
        "courir-village" : {
            fr : "Courir au village",
            en : "Running to the village"
        },
        "fuir-grotte" : {
            fr : "Fuir dans la grotte",
            en : "Running into the cave"
        },
        "en-avant" : {
            fr : "En avant&nbsp;!",
            en : "Forward!"
        },
        "entrer-grange" : {
            fr : "Entrer dans la grange",
            en : "Enter the barn"
        },
        "entrer-ville" : {
            fr : "Entrer dans la ville",
            en : "Enter the city"
        },
        "retour-ville" : {
            fr : "Retour en ville",
            en : "Back to the city"
        },
        "panneau-quete" : {
            fr : "Panneau des quêtes",
            en : "Quests panel"
        },
        "boutiques" : {
            fr : "Boutiques",
            en : "Shops"
        },
        "poste-garde" : {
            fr : "Poste de garde",
            en : "Guard post"
        },
        "ruelle-sombre" : {
            fr : "Ruelle sombre",
            en : "Dark alley"
        },
        "palais-justice" : {
            fr : "Palais de justice",
            en : "Courthouse"
        },
        "affichage-quetes" : {
            fr : "Affichage des quêtes",
            en : "Display of quests"
        },
        "partir" : {
            fr : "Partir",
            en : "Leave"
        },
        "alchimiste" : {
            fr : "Alchimiste",
            en : "Alchemist"
        },
        "taverne" : {
            fr : "Taverne",
            en : "Tavern"
        },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});