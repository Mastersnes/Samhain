'use strict';
define([], function(){
	var data = {
	    /**
	    * Actions basiques
	    **/
	    "oui" : {
        	fr : "Oui",
        	en : "Yes",
        	eo : "Jes"
        },
        "non" : {
        	fr : "Non",
        	en : "No",
        	eo : "Ne"
        },
        "suivant" : {
        	fr : "Suivant",
        	en : "Next",
        	eo : "Sekva"
        },
        "retour" : {
        	fr : "Retour",
        	en : "Back",
        	eo : "Reveno"
        },
        "retour-menu" : {
        	fr : "Retour au menu",
        	en : "Back to the menu",
        	eo : "Reveno al menuo"
        },
        "restart-action" : {
        	fr : "Recommencer",
        	en : "Restart",
        	eo : "Rekomenci"
        },
        "reessayer" : {
        	fr : "Réessayer",
        	en : "Retry",
        	eo : "Reprovi"
        },
        "abandonner" : {
        	fr : "Abandonner",
        	en : "Give up",
        	eo : "Forlasi"
        },
        "impossible" : {
        	fr : "Impossible",
        	en : "Impossible",
        	eo : "Neebla"
        },
        "terminer" : {
        	fr : "Terminer",
        	en : "Finish",
        	eo : "Fini"
        },

        /**
        * Combat
        **/
        "lattaquer-m" : {
        	fr : "L'attaquer",
        	en : "Attack him",
        	eo : "Ataki lin"
        },
        "lattaquer-f" : {
        	fr : "L'attaquer",
        	en : "Attack her",
        	eo : "Ataki ŝin"
        },
        "les-attaquer" : {
        	fr : "Les attaquer",
        	en : "Attack them",
        	eo : "Ataki ilin"
        },
        "alattaque" : {
        	fr : "À l'attaque&nbsp;!",
        	en : "Attack!",
        	eo : "Ataku!"
        },
        "combattre" : {
        	fr : "Combattre",
        	en : "Fight",
        	eo : "Batali"
        },
        "se-battre" : {
        	fr : "Se battre",
        	en : "Fight",
        	eo : "Bataliĝi"
        },
        "fuir" : {
        	fr : "Fuir en courant",
        	en : "Running away",
        	eo : "Forkuri"
        },
        "lancer-boule-feu" : {
        	fr : "Lancer une boule de feu",
        	en : "Throwing a fireball",
        	eo : "Lanĉi fajrobulon"
        },
        "lancer-combat" : {
        	fr : "Lancer le combat",
        	en : "Launch the fight",
        	eo : "Lanĉi la batalon"
        },

        /**
        * Inspection d'objets
        **/
        "examine-sol" : {
        	fr : "Examiner le sol",
        	en : "Inspect the ground",
        	eo : "Inspekti la grundon"
        },
        "examiner-lieux" : {
        	fr : "Examiner les lieux",
        	en : "Inspect the places",
        	eo : "Inspekti la lokojn"
        },
        "fouiller-lieux" : {
        	fr : "Fouiller les lieux",
        	en : "Search the places",
        	eo : "Esplori la lokojn"
        },
        "fouille-corp" : {
        	fr : "Fouiller le corps",
        	en : "Search the corpse",
        	eo : "Priserĉi la korpon"
        },
        "fouille-corps" : {
        	fr : "Fouiller les corps",
        	en : "Search the corpses",
        	eo : "Priserĉi la korpojn"
        },
        "fouiller" : {
        	fr : "Fouiller",
        	en : "Search",
        	eo : "Inspekti"
        },
        "fouiller-piece" : {
        	fr : "Fouiller la pièce",
        	en : "Search the room",
        	eo : "Esplori la ĉambron"
        },
        "fouiller-salle" : {
        	fr : "Fouiller la salle",
        	en : "Search the hall",
        	eo : "Esplori la halon"
        },
        "laisser" : {
        	fr : "Laisser",
        	en : "Leave it",
        	eo : "Lasi"
        },
        "fouiller-cercueil" : {
        	fr : "Fouiller les cercueils",
        	en : "Search the coffins",
        	eo : "Priserĉi la ĉerkojn"
        },
        "voir-torche-gauche" : {
        	fr : "Voir la torche de gauche",
        	en : "Look at the left torch",
        	eo : "Vidi la maldekstran torĉon"
        },
        "voir-torche-droite" : {
        	fr : "Voir la torche de droite",
        	en : "Look at the right torch",
        	eo : "Vidi la dekstran torĉon"
        },
        "forcer-coffre" : {
        	fr : "Forcer le coffre",
        	en : "Forcing the trunk",
        	eo : "Enrompi la kofron"
        },
        "examine-alentours" : {
        	fr : "Examiner les alentours",
        	en : "Look around",
        	eo : "Inspekti ĉirkaŭaĵon"
        },
        "fouiller-table" : {
        	fr : "Fouiller la table",
        	en : "Search the table",
        	eo : "Priserĉi la tablon"
        },
        "examine-grange" : {
        	fr : "Examiner la grange",
        	en : "Examine the barn",
        	eo : "Esplori la garbejon"
        },
        "fouiller-maison" : {
        	fr : "Fouiller les maisons",
        	en : "Search the houses",
        	eo : "Inspekti la domojn"
        },

        /**
        * Action sur les objets
        **/
        "utiliser-bougie" : {
        	fr : "Utiliser la bougie",
        	en : "Use the candle",
        	eo : "Uzi la kandelon"
        },
        "prendre-bougie" : {
        	fr : "Prendre la bougie",
        	en : "Take the candle",
        	eo : "Preni la kandelon"
        },
        "prendre-croc" : {
        	fr : "Prendre le croc",
        	en : "Take the fang",
        	eo : "Preni la dentegon"
        },
        "laisser-croc" : {
        	fr : "Laisser le croc",
        	en : "Leave the fang",
        	eo : "Lasi la dentegon"
        },
        "try-open" : {
        	fr : "Essayer de l'ouvrir",
        	en : "Try to open it",
        	eo : "Provi malfermi ĝin"
        },
        "prendre" : {
        	fr : "Prendre",
        	en : "Take it",
        	eo : "Preni"
        },
        "tout-prendre" : {
        	fr : "Tout prendre",
        	en : "Take everything",
        	eo : "Ĉion preni"
        },
        "ouvrir-porte" : {
        	fr : "Ouvrir la porte",
        	en : "Open the door",
        	eo : "Malfermi la pordon"
        },
        "diriger-porte" : {
        	fr : "Se diriger vers la porte",
        	en : "Head for the door",
        	eo : "Sin direkti al la pordo"
        },
        "ouvrir" : {
        	fr : "Ouvrir",
        	en : "Open",
        	eo : "Malfermi"
        },
        "utiliser-clef" : {
        	fr : "Utiliser la clef",
        	en : "Use the key",
        	eo : "Uzi la ŝlosilon"
        },
        "prendre-parchemin" : {
        	fr : "Prendre les parchemins",
        	en : "Take the scrolls",
        	eo : "Preni la pergamenojn"
        },
        "mange-continue" : {
        	fr : "Manger et continuer",
        	en : "Eat and continue",
        	eo : "Manĝi kaj daŭrigi"
        },
        "retirer-baton" : {
        	fr : "Retirer le bâton",
        	en : "Remove the stick",
        	eo : "Eltiri la bastonon"
        },
        "casser-baton" : {
        	fr : "Casser le bâton",
        	en : "Break the stick",
        	eo : "Rompi la bastonon"
        },
        "garder-baton" : {
        	fr : "Garder le bâton",
        	en : "Keep the stick",
        	eo : "Konservi la bastonon"
        },
        "prendre-arme" : {
        	fr : "Prendre les armes",
        	en : "Take the weapons",
        	eo : "Preni la armilojn"
        },
        "laisser-arme" : {
        	fr : "Laisser les armes",
        	en : "Leave the weapons",
        	eo : "Lasi la armilojn"
        },
        "se-servir" : {
        	fr : "Se servir",
        	en : "Serve yourself",
        	eo : "Sin provizi"
        },
        "chercher-faille" : {
        	fr : "Chercher une faille",
        	en : "Search for a flaw",
        	eo : "Serĉi mankon"
        },
        "chercher-indice" : {
        	fr : "Chercher des indices",
        	en : "Search for clues",
        	eo : "Serĉi indikojn"
        },
        "chercher" : {
        	fr : "Chercher",
        	en : "Search",
        	eo : "Serĉi"
        },
        "escalader" : {
        	fr : "Escalader",
        	en : "Climb",
        	eo : "Grimpi"
        },
        "continuer-infiltration" : {
        	fr : "Continuer l'infiltration",
        	en : "Continue the infiltration",
        	eo : "Daŭrigi la kaŝeniĝadon"
        },
        "consulter" : {
        	fr : "Consulter",
        	en : "Consult",
        	eo : "Konsulti"
        },
        "lattraper" : {
        	fr : "L'attraper",
        	en : "Catch it",
        	eo : "Kapti ĝin"
        },
        "linterroger" : {
        	fr : "L'interroger",
        	en : "Ask him",
        	eo : "Pridemandi lin"
        },

        /**
        * Interaction avec des gens ou objets
        **/
        "insister" : {
        	fr : "Insister",
        	en : "Insist",
        	eo : "Insisti"
        },
        "venger-affront" : {
        	fr : "Venger cet affront",
        	en : "Avenge this affront",
        	eo : "Venĝi ĉi tiun ofendon"
        },
        "laisser-tomber" : {
        	fr : "Laisser tomber",
        	en : "Give up",
        	eo : "Rezigni"
        },
        "tomber" : {
        	fr : "Tomber",
        	en : "Fall",
        	eo : "Fali"
        },
        "let-him" : {
        	fr : "Le laisser",
        	en : "Leave him",
        	eo : "Lasi lin"
        },
        "refuser" : {
        	fr : "Refuser",
        	en : "Refuse",
        	eo : "Malakcepti"
        },
        "accepter" : {
        	fr : "Accepter",
        	en : "Accept",
        	eo : "Akcepti"
        },
        "aider" : {
        	fr : "Les aider",
        	en : "Help them",
        	eo : "Helpi ilin"
        },
        "aider-guarde" : {
        	fr : "Aider les gardes",
        	en : "Help the guards",
        	eo : "Helpi la gardistojn"
        },
        "parler" : {
        	fr : "Parler",
        	en : "Speak",
        	eo : "Paroli"
        },
        "tousser" : {
        	fr : "Toussoter",
        	en : "Have a slight cough",
        	eo : "Tusi diskrete"
        },
        "laisser-partir" : {
        	fr : "Le laisser partir",
        	en : "Let him go",
        	eo : "Lasi lin foriri"
        },
        "donner-potion" : {
        	fr : "Donner la potion",
        	en : "Give the potion",
        	eo : "Doni la pocion"
        },
        "donner-fromage" : {
        	fr : "Donner le fromage",
        	en : "Give the cheese",
        	eo : "Doni la fromaĝon"
        },
        "defendre-village" : {
        	fr : "Défendre le village",
        	en : "Defende the village",
        	eo : "Defendi la vilaĝon"
        },
        "demander-entrer" : {
        	fr : "Demander pour entrer",
        	en : "Ask to enter",
        	eo : "Peti por eniri"
        },
        "demander-travail" : {
        	fr : "Demander du travail",
        	en : "Ask for work",
        	eo : "Peti pri laboron"
        },
        "linsulter-m" : {
        	fr : "L'insulter",
        	en : "Insult him",
        	eo : "Insulti lin"
        },
        "linsulter-f" : {
        	fr : "L'insulter",
        	en : "Insult her",
        	eo : "Insulti ŝin"
        },
        "forcer-passage" : {
        	fr : "Forcer le passage",
        	en : "Force the way",
        	eo : "Perforte trairi"
        },
        "montrer-anneau" : {
        	fr : "Montrer l'anneau",
        	en : "Show the ring",
        	eo : "Montri la ringon"
        },
        "montrer-lettre" : {
        	fr : "Montrer la lettre",
        	en : "Show the letter",
        	eo : "Montri la leteron"
        },
        "demander-recompense" : {
        	fr : "Demander la récompense",
        	en : "Ask for the reward",
        	eo : "Peti la rekompencon"
        },
        "travailler" : {
        	fr : "Travailler",
        	en : "Work",
        	eo : "Labori"
        },
        "apprendre" : {
        	fr : "Apprendre",
        	en : "Learn",
        	eo : "Lerni"
        },
        "se-reposer" : {
        	fr : "Se reposer",
        	en : "Have a rest",
        	eo : "Ripozi"
        },
        "castagner" : {
        	fr : "Castagner",
        	en : "Beat up",
        	eo : "Interbatali"
        },
        "miser" : {
        	fr : "Miser",
        	en : "Bet",
        	eo : "Veti"
        },
        "passer" : {
        	fr : "Passer son tour",
        	en : "Pass your turn",
        	eo : "Rezigni sian vicon"
        },
        "trop-cher" : {
        	fr : "Trop cher",
        	en : "Too expensive",
        	eo : "Trop multekosta"
        },
        "sannoncer" : {
        	fr : "S'annoncer",
        	en : "Proclaim yourself",
        	eo : "Anonciĝi"
        },
        "observer" : {
        	fr : "Observer",
        	en : "Look at",
        	eo : "Observi"
        },
        "regarde-leau" : {
        	fr : "Regarder l'eau",
        	en : "Look at water",
        	eo : "Observi la akvon"
        },
        "lassassiner" : {
        	fr : "L'assassiner",
        	en : "Kill him",
        	eo : "Murdi lin"
        },
        "questionner-fermier" : {
        	fr : "Questionner le fermier",
        	en : "Question the farmer",
        	eo : "Demandi la farmiston"
        },
        "interroger-paysans" : {
        	fr : "Interroger les paysans",
        	en : "Ask the peasants",
        	eo : "Pridemandi la kamparanojn"
        },
        "questionner-tavernier" : {
        	fr : "Questionner le tavernier",
        	en : "Question the innkeeper",
        	eo : "Demandi la tavernestron"
        },
        "menacer" : {
        	fr : "Les menacer",
        	en : "Threaten them",
        	eo : "Minaci ilin"
        },
        "soudoyer-10" : {
        	fr : "Les soudoyer</br>(10po)",
        	en : "Bribe them</br>(10gold)",
        	eo : "Subaĉeti ilin</br>(10oro)"
        },
        "le-rattraper" : {
        	fr : "Le rattraper",
        	en : "Recapture it",
        	eo : "Rekapti ĝin"
        },
        "prendre-verre" : {
        	fr : "Prendre un verre",
        	en : "Have a drink",
        	eo : "Trinki glason"
        },
        "sauver-poule" : {
        	fr : "Sauver la poule",
        	en : "Save the chicken",
        	eo : "Savi la kokinon"
        },
        "mettre-abris" : {
        	fr : "Se mettre à l'abri",
        	en : "Take shelter",
        	eo : "̈Ŝirmi sin"
        },
        "faire-rapport" : {
        	fr : "Faire votre rapport",
        	en : "Make your report",
        	eo : "Fari vian raporton"
        },
        "marchander" : {
            fr : "Marchander",
            en : "Merchandise",
            eo : "Marĉandi"
        },

        /**
        * Dialogue
        **/
        "lamort" : {
        	fr : "La Mort&nbsp;!",
        	en : "The Death!",
        	eo : "La Morto!"
        },
        "quietesvous" : {
        	fr : "Qui êtes-vous&nbsp;?",
        	en : "Who are you?",
        	eo : "Kiu vi estas?"
        },
        "evidemment" : {
        	fr : "Évidemment&nbsp;!",
        	en : "Obviously!",
        	eo : "Evidente"
        },
        "non-merci" : {
        	fr : "Non merci",
        	en : "No, thanks",
        	eo : "Ne, dankon"
        },
        "unami" : {
        	fr : "Un ami",
        	en : "A friend",
        	eo : "Amiko"
        },
        "jairien" : {
        	fr : "Je n'ai rien",
        	en : "I have nothing",
        	eo : "Mi havas nenion"
        },
        "stop" : {
        	fr : "Stop&nbsp;!",
        	en : "Stop!",
        	eo : "Haltu!"
        },
        "arretez" : {
        	fr : "Arrêtez&nbsp;!",
        	en : "Stop it!",
        	eo : "Haltu tion!"
        },
        "comment" : {
        	fr : "Comment&nbsp;?!",
        	en : "What?!",
        	eo : "Pardonu?!"
        },
        "ou-aller-vous" : {
        	fr : "Où allez-vous&nbsp;?",
        	en : "Where are you going?",
        	eo : "Kien vi iras?"
        },
        "pourquoi" : {
        	fr : "Pourquoi&nbsp;?",
        	en : "Why?",
        	eo : "Kial?"
        },
        "qui-fait-ca" : {
        	fr : "Qui a fait ça&nbsp;?",
        	en : "Who has done it?",
        	eo : "Kiu faris tion?"
        },
        "tant-pis" : {
        	fr : "Tant pis&hellip;",
        	en : "Too bad&hellip;",
        	eo : "Ne gravas&hellip;"
        },
        "quel-recompense" : {
        	fr : "Quelle est la récompense&nbsp;?",
        	en : "What's the reward?",
        	eo : "Kiu estas la rekompenco?"
        },
        "agitation" : {
        	fr : "De l'agitation&nbsp;?",
        	en : "Some unrest?",
        	eo : "Iom da agitado?"
        },
        "quest-ce-que-gagne" : {
        	fr : "Qu'est-ce que j'y gagne&nbsp;?",
        	en : "What's my reward?",
        	eo : "Kiu estas mia rekompenco?"
        },
        "la-quete" : {
        	fr : "La quête",
        	en : "The quest",
        	eo : "La serĉado"
        },
        "les-poulets" : {
        	fr : "Les poulets&nbsp;?",
        	en : "The chicken?",
        	eo : "La kokidoj?"
        },

        /**
        * Achat
        **/
        "faire-achat" : {
        	fr : "Faire des achats",
        	en : "Make some purchases",
        	eo : "Fari iom aĉetadoj"
        },
        "acheter" : {
        	fr : "Acheter",
        	en : "Buy",
        	eo : "Aĉeti"
        },
        "vendre" : {
        	fr : "Vendre",
        	en : "Sell",
        	eo : "Vendi"
        },
        "quitter-boutique" : {
        	fr : "Quitter la boutique",
        	en : "Leave the shop",
        	eo : "Eliri el la butiko"
        },

        /**
        * Direction
        **/
        "en-route" : {
        	fr : "En route&nbsp;!",
        	en : "Let's go!",
        	eo : "Ek!"
        },
        "left" : {
        	fr : "Gauche",
        	en : "Left",
        	eo : "Maldekstra"
        },
        "go-left" : {
        	fr : "Aller à gauche",
        	en : "Go to the left",
        	eo : "Iri maldekstren"
        },
        "right" : {
        	fr : "Droite",
        	en : "Right",
        	eo : "Dekstra"
        },
        "go-right" : {
        	fr : "Aller à droite",
        	en : "Go to the right",
        	eo : "Iri dekstren"
        },
        "go-face" : {
        	fr : "Aller en face",
        	en : "Go to front",
        	eo : "Iri rekte antaŭen"
        },
        "avancer" : {
        	fr : "S'avancer",
        	en : "Move forward",
        	eo : "Antaŭeniĝi"
        },
        "approcher" : {
        	fr : "Approcher",
        	en : "Get closer",
        	eo : "Proksimigi"
        },
        "sapprocher" : {
        	fr : "S'approcher",
        	en : "Get closer",
        	eo : "Proksimiĝi"
        },
        "entrer" : {
        	fr : "Entrer",
        	en : "Enter",
        	eo : "Eniri"
        },
        "suivre-trace" : {
        	fr : "Suivre les traces",
        	en : "Follow the tracks",
        	eo : "Sekvi la spurojn"
        },
        "suivre-direction" : {
        	fr : "Suivre la direction",
        	en : "Follow the direction",
        	eo : "Sekvi la direkton"
        },
        "revenir-pas" : {
        	fr : "Revenir sur vos pas",
        	en : "Turn back",
        	eo : "Reveni malantaŭen"
        },
        "retour-arriere" : {
        	fr : "Retourner en arrière",
        	en : "Turn back",
        	eo : "Reveni malantaŭen"
        },
        "sen-aller" : {
        	fr : "S'en aller",
        	en : "Go away",
        	eo : "Foriri"
        },
        "contourner" : {
        	fr : "Contourner",
        	en : "Bypass",
        	eo : "Ĉirkaŭiri"
        },
        "continue-adventure" : {
        	fr : "Continuer l'aventure",
        	en : "Continue the adventure",
        	eo : "Daŭrigi la aventuron"
        },
        "aller-village" : {
        	fr : "Aller au village",
        	en : "Go to the village",
        	eo : "Iri al la vilaĝo"
        },
        "rentrer-village" : {
        	fr : "Rentrer au village",
        	en : "Go back to village",
        	eo : "Reiri al la vilaĝo"
        },
        "courir-village" : {
        	fr : "Courir au village",
        	en : "Run to the village",
        	eo : "Kuri al la vilaĝo"
        },
        "fuir-grotte" : {
        	fr : "Fuir dans la grotte",
        	en : "Flee into the cave",
        	eo : "Forkuri en la kavernon"
        },
        "en-avant" : {
        	fr : "En avant&nbsp;!",
        	en : "Forward!",
        	eo : "Ek!"
        },
        "entrer-grange" : {
        	fr : "Entrer dans la grange",
        	en : "Enter the barn",
        	eo : "Eniri en la garbejon"
        },
        "entrer-ville" : {
        	fr : "Entrer dans la ville",
        	en : "Enter the city",
        	eo : "Eniri en la urbon"
        },
        "entrer-arene" : {
        	fr : "Entrer dans l’arène",
        	en : "Enter the arena",
        	eo : "Eniri en la arenon"
        },
        "retour-ville" : {
        	fr : "Retour en ville",
        	en : "Back to the city",
        	eo : "Reiri al la urbo"
        },
        "panneau-quete" : {
        	fr : "Panneau des quêtes",
        	en : "Quests board",
        	eo : "Serĉpanelo"
        },
        "boutiques" : {
        	fr : "Boutiques",
        	en : "Shops",
        	eo : "Butikoj"
        },
        "poste-garde" : {
        	fr : "Poste de garde",
        	en : "Guard post",
        	eo : "Gardposteno"
        },
        "ruelle-sombre" : {
        	fr : "Ruelle sombre",
        	en : "Dark alley",
        	eo : "Malhela strateto"
        },
        "palais-justice" : {
        	fr : "Palais de justice",
        	en : "Law court",
        	eo : "Juĝejo"
        },
        "affichage-quetes" : {
        	fr : "Affichage des quêtes",
        	en : "Quests display",
        	eo : "Afiŝado de la serĉoj"
        },
        "partir" : {
        	fr : "Partir",
        	en : "Leave",
        	eo : "Foriri"
        },
        "alchimiste" : {
        	fr : "Alchimiste",
        	en : "Alchemist",
        	eo : "Alĥemiisto"
        },
        "taverne" : {
        	fr : "Taverne",
        	en : "Inn",
        	eo : "Taverno"
        },
        "infiltrer-foule" : {
        	fr : "Infiltrer la foule",
        	en : "Infiltrate the crowd",
        	eo : "Kaŝeniĝi la homamason"
        },
        "contourner-foule" : {
        	fr : "Contourner la foule",
        	en : "Bypass the crowd",
        	eo : "Ĉirkaŭiri la homamason"
        },
        "aller-champs" : {
        	fr : "Aller aux champs",
        	en : "Go to the fields",
        	eo : "Iri al la kampoj"
        },
        "se-rendre-ville" : {
        	fr : "Se rendre en ville",
        	en : "Go to the city",
        	eo : "Iri al la urbo"
        },
        "aller-taverne" : {
        	fr : "Aller à la taverne",
        	en : "Go to the inn",
        	eo : "Iri al la taverno"
        },
        "visiter-cuisine" : {
        	fr : "Visiter les cuisines",
        	en : "Visit the kitchen",
        	eo : "Viziti la kuirejojn"
        },
        "rentrer-ville" : {
        	fr : "Rentrer à la ville",
        	en : "Go back to the city",
        	eo : "Reiri al la urbo"
        },
        "rentrer" : {
        	fr : "Rentrer",
        	en : "Go back",
        	eo : "Reveni"
        },
        "monter" : {
        	fr : "Monter",
        	en : "Climb",
        	eo : "Supreniri"
        }
	};
	
	return {
        name : function() {
            return "Boutons.js";
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