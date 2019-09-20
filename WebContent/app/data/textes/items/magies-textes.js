'use strict';
define([], function(){
	var data = {
	        /**
             * Magie
             */
            "bouleFeu" : {
                fr : "Boule de feu",
                en : "Fireball"
            },
            "bouleFeu-action" : {
                fr : "*Boule de Feu*",
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

            "morsure" : {
                fr : "Morsure",
                en : "Bite"
            },
            "morsure-action" : {
                fr : "*Morsure*",
                en : "*Bite*"
            },
            "morsure-texte" : {
                fr : "Une vilaine morsure pas très belle à voir. Vous devriez consulter...",
                en : "A nasty bite not very beautiful to see. You should consult..."
            },

            "araneisme" : {
                fr : "Aranéisme",
                en : "Araneism"
            },
            "araneisme-action" : {
                fr : "*Aranéisme*",
                en : "*Araneism*"
            },
            "araneisme-texte" : {
                fr : "La morsure préférée de nos amis à huit pattes. Les traces qu'elle engendre sont bien plus difficile à faire partir !",
                en : "Our eight-legged friends' favorite bite. The traces it generates are much harder to get out!"
            },

            "voler" : {
                fr : "Voler",
                en : "Steal"
            },
            "voler-action" : {
                fr : "*Voler*",
                en : "*Steal*"
            },
            "voler-texte" : {
                fr : "Un bon moyen de remplir sa bourse. Pas très honnête mais ô combien efficace !",
                en : "A good way to fill your purse. Not very honest but so effective!"
            },

            "doubleAttaque" : {
                fr : "Double Attaque",
                en : "Double Attack"
            },
            "doubleAttaque-action" : {
                fr : "*Double Attaque*",
                en : "*Double Attack*"
            },
            "doubleAttaque-texte" : {
                fr : "Mieux vaut deux fois qu'une ! Non ?",
                en : "Better twice than once! No?"
            },

            "volDeVie" : {
                fr : "Vol de Vie",
                en : "Life Steal"
            },
            "volDeVie-action" : {
                fr : "*Vol de Vie*",
                en : "*Life Steal*"
            },
            "volDeVie-texte" : {
                fr : "On vole vraiment de tout aujourd'hui ! Mais où va le monde ?...",
                en : "We really steal everything today! Where is the world going?..."
            },

            "volDeMana" : {
                fr : "Vol de Mana",
                en : "Mana Steal"
            },
            "volDeMana-action" : {
                fr : "*Vol de Mana*",
                en : "*Mana Steal*"
            },
            "volDeMana-texte" : {
                fr : "Quand y'en a plus, y'en a encore !",
                en : "Even when there's none left, there's still some more!"
            },

            "taillade" : {
                fr : "Taillade",
                en : "Cutting"
            },
            "taillade-action" : {
                fr : "*Taillade*",
                en : "*Cutting*"
            },
            "taillade-texte" : {
                fr : "Et c'est ainsi que l'on finis en rondelle ! Enfin, d’après des chaussettes...",
                en : "And that's how we end up in a slice! Well, according to socks..."
            },

            "pondreAraignee" : {
                fr : "Ponte",
                en : "Laying"
            },
            "pondreAraignee-action" : {
                fr : "*Ponte*",
                en : "*Laying*"
            },
            "pondreAraignee-texte" : {
                fr : "Alien, à côté, c'est du pipi de chat !<br/>Invoque une Araignée dans la limite de 3 monstres sur le plateau.",
                en : "Alien, in comparison, it's cat pee!<br/>Summon a Spider up to 3 monsters on the board."
            },

            "invoqueGoule" : {
                fr : "Invoquer Goule",
                en : "Invoke Ghoul"
            },
            "invoqueGoule-action" : {
                fr : "*Invoquer Goule*",
                en : "*Invoke Ghoul*"
            },
            "invoqueGoule-texte" : {
                fr : "Le début du cauchemar...<br/>Invoque une Goule dans la limite de 3 monstres sur le plateau.",
                en : "The beginning of the nightmare...<br/>Summon a Ghoul up to 3 monsters on the board."
            },

            "invoqueGrosseGoule" : {
                fr : "Invoquer Grosse Goule",
                en : "Invoke Big Ghoul"
            },
            "invoqueGrosseGoule-action" : {
                fr : "*Invoquer Grosse Goule*",
                en : "*Invoke Big Ghoul*"
            },
            "invoqueGrosseGoule-texte" : {
                fr : "Le cauchemar continue...<br/>Invoque une Grosse Goule dans la limite de 3 monstres sur le plateau.",
                en : "The nightmare continue...<br/>Summon a Big Ghoul up to 3 monsters on the board."
            },

            "cannibalisme" : {
                fr : "Cannibalisme",
                en : "Cannibalism"
            },
            "cannibalisme-action" : {
                fr : "*Cannibalisme*",
                en : "*Cannibalism*"
            },
            "cannibalisme-texte" : {
                fr : "C'est peut-être ça qu'on appel : 'donner de sa personne'.",
                en : "Maybe that's what we call : 'giving a lot of yourself'."
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});