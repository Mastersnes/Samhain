'use strict';
define([], function(){
	var data = {
	        /**
             * Consommable
             */
            "potionSante" : {
                fr : "Potion de vie",
                en : "Potion of life"
            },
            "potionSante-action" : {
                fr : "Potion de Vie",
                en : "Potion of Life"
            },
            "potionSante-texte" : {
                fr : "Une drôle de fiole toute rouge. Sur l'étiquette, il est noté : &laquo; Ne pas en abuser, donne la diarrhée &raquo;.",
                en : "That's a funny red vial. On the label, it is noted: &laquo; Don't abuse it, gives diarrhea &raquo;."
            },
            "potionMana" : {
                fr : "Potion de mana",
                en : "Potion of mana"
            },
            "potionMana-action" : {
                fr : "Potion de Mana",
                en : "Potion of Mana"
            },
            "potionMana-texte" : {
                fr : "Une jolie fiole toute bleue. Sur l'étiquette, il est noté : &laquo; Attention, agite les ganglions &raquo;.",
                en : "-"
            },
            "antidote" : {
                fr : "Antidote",
                en : "Antidote"
            },
            "antidote-action" : {
                fr : "Antidote",
                en : "Antidote"
            },
            "antidote-texte" : {
                fr : "Une fiole verte visqueuse, censée être de l'antipoison. Vu l'odeur, ça risque plutôt de vous empoisonner&nbsp;!<br/>(Soigne uniquement l'empoisonnement)",
                en : "A slimy green vial supposed to be anti-poison. From the smell of it, it's more likely to poison you!<br/>(Only treats poison)"
            },
            "fromage" : {
                fr : "Fromage",
                en : "Cheese"
            },
            "fromage-action" : {
                fr : "Manger le Fromage",
                en : "Eating Cheese"
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
                fr : "Croquer la Pomme",
                en : "Chew the Apple"
            },
            "pomme-texte" : {
                fr : "Une belle pomme bien rouge&nbsp;! Vous allez vous régaler&nbsp;!",
                en : "A beautiful red apple! It's delicious!"
            },
            "venin" : {
                fr : "Venin",
                en : "Venom"
            },
            "venin-action" : {
                fr : "Lancer le Venin",
                en : "Throwing the Venom"
            },
            "venin-texte" : {
                fr : "Une poche de venin prélevée sur une grosse araignée&nbsp;!",
                en : "A pocket of venom from a big spider!"
            },
            "elixir" : {
                fr : "Élixir",
                en : "Elixir"
            },
            "elixir-action" : {
                fr : "Élixir",
                en : "Elixir"
            },
            "elixir-texte" : {
                fr : "Une grosse fiole éclatante de lumière&nbsp;! Une étiquette indique : &laquo; Ne pas boire après minuit, risque d'allergie &raquo;.",
                en : "A big, bright vial of light! A label says: &laquo; Do not drink after midnight, risk of allergy &raquo;."
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});