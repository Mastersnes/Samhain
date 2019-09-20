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

        /**
        * Inspection
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
        "laisser" : {
            fr : "Laisser",
            en : "Leave it"
        },

        /**
        * Interaction
        **/
        "insister" : {
            fr : "Insister",
            en : "Insist"
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
        "non-merci" : {
            fr : "Non Merci",
            en : "No Thanks"
        },
        "aider" : {
            fr : "Aider",
            en : "Help Them"
        },
        "parler" : {
            fr : "Parler",
            en : "Speak"
        },
        "tousser" : {
            fr : "Toussoter",
            en : "Give a discreet cough"
        },

        /**
        * Direction
        **/
        "go-left" : {
            fr : "Aller à gauche",
            en : "Go to the left"
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
            fr : "Retourner en arriere",
            en : "Return backward"
        },
        "sen-aller" : {
            fr : "S'en aller",
            en : "Leave"
        },
        "contourner" : {
            fr : "Contourner",
            en : "Bypass"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});