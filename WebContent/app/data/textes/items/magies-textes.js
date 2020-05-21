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
                fr : "Un sort imparable permettant de lancer une énorme boule de feu&nbsp;!",
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
                fr : "Un sort permettant de se soigner. Le Reiki peut aller se rhabiller&nbsp;!",
                en : "A spell for healing. The reiki can go back where he came from!"
            },

            "guerison" : {
                fr : "Guérison",
                en : "Cure"
            },
            "guerison-action" : {
                fr : "*Guérison*",
                en : "*Cure*"
            },
            "guerison-texte" : {
                fr : "Un sort permettant de supprimer n'importe quel malus. Attention, ne procure aucun soin&nbsp;!",
                en : "-"
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
                fr : "Une vilaine morsure pas très belle à voir. Vous devriez consulter&hellip;",
                en : "A nasty bite not very beautiful to see. You should consult&hellip;"
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
                fr : "La morsure préférée de nos amis à huit pattes. Les traces qu'elle engendre sont bien plus difficiles à faire partir&nbsp;!",
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
                fr : "Un bon moyen de remplir sa bourse. Pas très honnête, mais ô combien efficace&nbsp;!",
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
                fr : "Mieux vaut deux fois qu'une&nbsp;! Non&nbsp;?",
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
                fr : "On vole vraiment de tout aujourd'hui&nbsp;! Mais où va le monde&nbsp;?&hellip;",
                en : "We really steal everything today! Where is the world going?&hellip;"
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
                fr : "Quand y'en a plus, y'en a encore&nbsp;!",
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
                fr : "Et c'est ainsi que l'on finit en rondelle&nbsp;! Enfin, d’après des chaussettes&hellip;",
                en : "And that's how we end up in a slice! Well, according to socks&hellip;"
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
                fr : "Alien, à côté, c'est du pipi de chat&nbsp;!<br/>Invoque une Araignée dans la limite de 3 monstres sur le plateau.",
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
                fr : "Le début du cauchemar&hellip;<br/>Invoque une Goule dans la limite de 3 monstres sur le plateau.",
                en : "The beginning of the nightmare&hellip;<br/>Summon a Ghoul up to 3 monsters on the board."
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
                fr : "Le cauchemar continue&hellip;<br/>Invoque une Grosse Goule dans la limite de 3 monstres sur le plateau.",
                en : "The nightmare continue&hellip;<br/>Summon a Big Ghoul up to 3 monsters on the board."
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
                fr : "C'est peut-être ça qu'on appelle : 'donner de sa personne'.",
                en : "Maybe that's what we call : 'giving a lot of yourself'."
            },
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});