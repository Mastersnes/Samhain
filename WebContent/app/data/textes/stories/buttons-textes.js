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

        /**
        * Combat
        **/
        "attaquer" : {
            fr : "L'attaquer",
            en : "Attack her"
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
        "lire-parchemin" : {
            fr : "Lire les parchemins",
            en : "Read Scrolls"
        },
        "mange-continue" : {
            fr : "Manger et continuer",
            en : "Eat and continue"
        },
        "retirer-baton" : {
            fr : "Retirer le b&acirc;ton",
            en : "Remove the stick"
        },
        "casser-baton" : {
            fr : "Casser le b&acirc;ton",
            en : "Break the stick"
        },
        "garder-baton" : {
            fr : "Garder le b&acirc;ton",
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
        "defendre-ville" : {
            fr : "Défendre le village",
            en : "Defending the city"
        },

        /**
        * Dialogue
        **/
        "lamort" : {
            fr : "La mort&nbsp!",
            en : "Death&nbsp!"
        },
        "quietesvous" : {
            fr : "Qui êtes-vous&nbsp?",
            en : "Who are you&nbsp?"
        },
        "evidemment" : {
            fr : "Évidemment&nbsp!",
            en : "Obviously&nbsp!"
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
            en : "How&nbsp;?!"
        },
        "ou-aller-vous" : {
            fr : "Où allez-vous&nbsp;?",
            en : "Where are you going&nbsp;?"
        },
        "qui-fait-ca" : {
            fr : "Qui a fait &ccedil;a&nbsp;?",
            en : "Who has done it&nbsp;?"
        },
        "tant-pis" : {
            fr : "Tant pis&hellip;",
            en : "Too bad&hellip;"
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
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});