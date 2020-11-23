'use strict';
define([], function(){
	var data = {
	        /**
             * Consommable
             */
            "potionSante" : {
            	fr : "Potion de vie",
            	en : "Life potion",
            	eo : "Vivopocio"
            },
            "potionSante-action" : {
            	fr : "Potion de Vie",
            	en : "Life Potion",
            	eo : "Vivopocio"
            },
            "potionSante-texte" : {
            	fr : "Une drôle de fiole toute rouge. Sur l'étiquette, il est noté&nbsp;: &laquo;&nbsp;Ne pas en abuser, donne la diarrhée.&nbsp;&raquo;",
            	en : "A strange red flask. On the label, it’s noted: &laquo;&nbsp;Don't abuse it, gives diarrhoea.&nbsp;&raquo;",
            	eo : "Stranga ruĝa flakono. Sur la etikedo, ĝi estas skribita: &laquo;&nbsp;Ne trouzu ĝin, donas la diareon.&nbsp;&raquo;"
            },
            "potionMana" : {
            	fr : "Potion de mana",
            	en : "Mana potion",
            	eo : "Magiopocio"
            },
            "potionMana-action" : {
            	fr : "Potion de Mana",
            	en : "Mana Potion",
            	eo : "Magiopocio"
            },
            "potionMana-texte" : {
            	fr : "Une jolie fiole toute bleue. Sur l'étiquette, il est noté : &laquo;&nbsp;Attention, agite les ganglions&nbsp;&raquo;.",
            	en : "A pretty blue flask. On the label, it’s noted: &laquo;&nbsp;Warning, disturbs ganglia.&nbsp;&raquo;",
            	eo : "Bela blua flakono. Sur la etikedo, ĝi estas skribita: &laquo;&nbsp;Atenton, agitas la gangliojn.&nbsp;&raquo;"
            },
            "antidote" : {
            	fr : "Antidote",
            	en : "Antidote",
            	eo : "Antidoto"
            },
            "antidote-action" : {
            	fr : "Antidote",
            	en : "Antidote",
            	eo : "Antidoto"
            },
            "antidote-texte" : {
            	fr : "Une fiole verte visqueuse censée être de l'antipoison. Vu l'odeur, ça risque plutôt de vous empoisonner&nbsp;!",
            	en : "A slimy green flask supposed to be an anti-poison. Judging by the smell, it might poison you!",
            	eo : "Verda viskoza flakono supozita esti kontraŭtokson. Laŭ la odoro, tio riskas toksi vin! "
            },
            "antidote-commentaire" : {
            	fr : "Soigne uniquement l'empoisonnement.",
            	en : "Only treats poisoning.",
            	eo : "Kuracas nur la toksado."
            },
            "fromage" : {
            	fr : "Fromage",
            	en : "Cheese",
            	eo : "Fromaĝo"
            },
            "fromage-action" : {
            	fr : "Manger le Fromage",
            	en : "Eating the Cheese",
            	eo : "Manĝi la Fromaĝo"
            },
            "fromage-texte" : {
            	fr : "Un vieux fromage légèrement moisi&hellip;",
            	en : "An old cheese slightly mouldy&hellip;",
            	eo : "Maljuna iomete ŝima fromaĝo&hellip;"
            },
            "pomme" : {
            	fr : "Pomme",
            	en : "Apple",
            	eo : "Pomo"
            },
            "pomme-action" : {
            	fr : "Croquer la Pomme",
            	en : "Crunch the Apple",
            	eo : "Krakmanĝi la pomo"
            },
            "pomme-texte" : {
            	fr : "Une belle pomme bien rouge&nbsp;! Vous allez vous régaler&nbsp;!",
            	en : "A beautiful red apple! You’ll enjoy this!",
            	eo : "Bela rugâ pomo! Vi frandos ĝin!"
            },
            "venin" : {
            	fr : "Venin",
            	en : "Venom",
            	eo : "Veneno"
            },
            "venin-action" : {
            	fr : "Lancer le Venin",
            	en : "Throwing the Venom",
            	eo : "Ĵeti la Veneno"
            },
            "venin-texte" : {
            	fr : "Une poche de venin prélevée sur une grosse araignée&nbsp;!",
            	en : "A venom bag extracted from a big spider!",
            	eo : "Veneno sako elprenita en granda araneo!"
            },
            "elixir" : {
            	fr : "Élixir",
            	en : "Elixir",
            	eo : "Eliksiro"
            },
            "elixir-action" : {
            	fr : "Élixir",
            	en : "Elixir",
            	eo : "Eliksiro"
            },
            "elixir-texte" : {
            	fr : "Une grosse fiole éclatante de lumière&nbsp;! L’étiquette indique : &laquo;&nbsp;Ne pas boire après minuit, risques d'allergies.&nbsp;&raquo;",
            	en : "A big shining bright flask! The label recommends: &laquo;&nbsp;Don’t drink it after midnight, risk of allergies.&nbsp;&raquo;",
            	eo : "Granda flakono brilanta per lumo! La etikedo indikas: &laquo;&nbsp;Ne trinku ĝin post noktomezo, alergioj riskoj.&nbsp;&raquo;"
            }
	};
	
	return {
        name : function() {
            return "Consos.js";
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