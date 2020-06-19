'use strict';
define([], function(){
	var data = {
	        /**
             * Magie
             */
            "bouleFeu" : {
            	fr : "Boule de feu",
            	en : "Fireball",
            	eo : "Fajrobulo"
            },
            "bouleFeu-action" : {
            	fr : "*Boule de Feu*",
            	en : "*Fireball*",
            	eo : "*Fajrobulo*"
            },
            "bouleFeu-texte" : {
            	fr : "Un sort imparable permettant de lancer une énorme boule de feu&nbsp;!",
            	en : "An unstoppable spell that allows you to cast a huge fireball!",
            	eo : "Nehaltigebla sorĉo ebliganta ĵeti enorma fajrobulo."
            },

            "soin" : {
            	fr : "Soin",
            	en : "Heal",
            	eo : "Kuracado"
            },
            "soin-action" : {
            	fr : "*Soin*",
            	en : "*Heal*",
            	eo : "*Kuracado*"
            },
            "soin-texte" : {
            	fr : "Un sort permettant de se soigner. Le Reiki peut aller se rhabiller&nbsp;!",
            	en : "A spell that allows you to heal yourself. Reiki is no match for this!",
            	eo : "Sorĉo ebliganta kuraci vin. Rejkio ne estas ankaŭ bonege!"
            },

            "guerison" : {
            	fr : "Guérison",
            	en : "Cure",
            	eo : "Resaniĝo"
            },
            "guerison-action" : {
            	fr : "*Guérison*",
            	en : "*Cure*",
            	eo : "*Resaniĝo*"
            },
            "guerison-texte" : {
            	fr : "Un sort permettant de supprimer n'importe quel mal. Attention, ne procure aucun soin&nbsp;!",
            	en : "A spell that allows you to remove any damage. Prudence, this doesn’t provide any heal&nbsp;!",
            	eo : "Sorĉo ebliganta forigi ajna damaĝo. Atenton, ne kuracas!"
            },

            "morsure" : {
            	fr : "Morsure",
            	en : "Bite",
            	eo : "Mordo"
            },
            "morsure-action" : {
            	fr : "*Morsure*",
            	en : "*Bite*",
            	eo : "*Mordo*"
            },
            "morsure-texte" : {
            	fr : "Une vilaine morsure pas très belle à voir. Vous devriez consulter&hellip;",
            	en : "An ugly bite that looks really bad. You should consult a doctor&hellip;",
            	eo : "Fia mordo ne tre bela. Vi devus konsulti&hellip;"
            },

            "araneisme" : {
            	fr : "Aranéisme",
            	en : "Arachnidism",
            	eo : "Araneismo"
            },
            "araneisme-action" : {
            	fr : "*Aranéisme*",
            	en : "*Arachnidism*",
            	eo : "*Araneismo*"
            },
            "araneisme-texte" : {
            	fr : "La morsure préférée de nos amis à huit pattes. Les traces qu'elle engendre vous laisseront une belle cicatrice.",
            	en : "Our eight-legged friends' favourite bite. Traces caused will let you a pretty scar.",
            	eo : "La mordo preferata de niaj ok kruroj amikoj. Spuroj estigitaj postlasos vin belan cikatron."
            },

            "voler" : {
            	fr : "Voler",
            	en : "Steal",
            	eo : "Ŝteli"
            },
            "voler-action" : {
            	fr : "*Voler*",
            	en : "*Steal*",
            	eo : "*Ŝteli*"
            },
            "voler-texte" : {
            	fr : "Un bon moyen de remplir sa bourse. Pas très honnête, mais ô combien efficace&nbsp;!",
            	en : "A good way to fill your purse. Not very honest but so effective!",
            	eo : "Bona maniero plenigi via burso. Ne tre honesta sed nekredeble efika!"
            },

            "doubleAttaque" : {
            	fr : "Double attaque",
            	en : "Double attack",
            	eo : "Duobla atako"
            },
            "doubleAttaque-action" : {
            	fr : "*Double Attaque*",
            	en : "*Double Attack*",
            	eo : "*Duobla Atako*"
            },
            "doubleAttaque-texte" : {
            	fr : "Mieux vaut deux fois qu'une&nbsp;! Non&nbsp;?",
            	en : "Better twice than once! No?",
            	eo : "Pli bone dufoje ol unufoje! Ne?"
            },

            "volDeVie" : {
            	fr : "Vol de vie",
            	en : "Life steal",
            	eo : "Vivoŝtelo"
            },
            "volDeVie-action" : {
            	fr : "*Vol de Vie*",
            	en : "*Life Steal*",
            	eo : "*Vivoŝtelo*"
            },
            "volDeVie-texte" : {
            	fr : "On vole vraiment de tout aujourd'hui&nbsp;! Mais où va le monde&nbsp;?&hellip;",
            	en : "We really steal everything today! What’s the world coming to?&hellip;",
            	eo : "Ĝi ŝtelas vere ajna hodiaŭ. Kien iras la mondo?&hellip;"
            },

            "volDeMana" : {
            	fr : "Vol de mana",
            	en : "Mana steal",
            	eo : "Magioŝtelo"
            },
            "volDeMana-action" : {
            	fr : "*Vol de Mana*",
            	en : "*Mana Steal*",
            	eo : "*Magioŝtelo*"
            },
            "volDeMana-texte" : {
            	fr : "Quand y'en a plus, y'en a encore&nbsp;!",
            	en : "When it’s gone, there still are!",
            	eo : "Kiam nenio restas, ankoraŭ restas!"
            },

            "taillade" : {
            	fr : "Taillade",
            	en : "Slash",
            	eo : "Tranĉado"
            },
            "taillade-action" : {
            	fr : "*Taillade*",
            	en : "*Slash*",
            	eo : "*Tranĉado*"
            },
            "taillade-texte" : {
            	fr : "Et c'est ainsi que l'on finit en rondelles&nbsp;! Enfin, d’après des chaussettes&hellip;",
            	en : "And so it’s that we become a slice! Well, according to socks&hellip;",
            	eo : "Kaj tiel ĝi finiĝas tranĉaĵoj! Laŭ ŝtrumpetoj&hellip;"
            },

            "pondreAraignee" : {
            	fr : "Ponte",
            	en : "Laying",
            	eo : "Ovodemetado"
            },
            "pondreAraignee-action" : {
            	fr : "*Ponte*",
            	en : "*Laying*",
            	eo : "*Ovodemetado*"
            },
            "pondreAraignee-texte" : {
            	fr : "&laquo;&nbsp;Alien&nbsp;&raquo;, à côté, c'est du pipi de chat&nbsp;!<br/>Invoque une Araignée dans la limite de 3 monstres sur le plateau.",
            	en : "In comparison, &laquo;&nbsp;Alien&nbsp;&raquo; is just chicken feed!<br/>Summon a Spider up to 3 monsters on the board.",
            	eo : "Kompare, “Alieno” estas piso de krokodilo!</br>Alvokas Araneon ĝis 3 monstroj sur la ludtabulo."
            },

            "invoqueGoule" : {
            	fr : "Invoquer goule",
            	en : "Summon ghoul",
            	eo : "Alvoki gulo"
            },
            "invoqueGoule-action" : {
            	fr : "*Invoquer Goule*",
            	en : "*Summon Ghoul*",
            	eo : "*Alvoki Gulo*"
            },
            "invoqueGoule-texte" : {
            	fr : "Le début du cauchemar&hellip;<br/>Invoque une Goule dans la limite de 3 monstres sur le plateau.",
            	en : "The nightmare beginning&hellip;<br/>Summon a Ghoul up to 3 monsters on the board.",
            	eo : "La komenco de la koŝmaro&hellip;</br>Alvokas Gulo ĝis 3 monstroj sur la ludtabulo."
            },

            "invoqueGrosseGoule" : {
            	fr : "Invoquer grosse goule",
            	en : "Summon big ghoul",
            	eo : "Alvoki granda gulo"
            },
            "invoqueGrosseGoule-action" : {
            	fr : "*Invoquer Grosse Goule*",
            	en : "*Summon Big Ghoul*",
            	eo : "*Alvoki Granda Gulo*"
            },
            "invoqueGrosseGoule-texte" : {
            	fr : "Le cauchemar continue&hellip;<br/>Invoque une Grosse Goule dans la limite de 3 monstres sur le plateau.",
            	en : "The nightmare continues&hellip;<br/>Summon a Big Ghoul up to 3 monsters on the board.",
            	eo : "La koŝmaro daŭrigas&hellip;<br/>Alvokas Granda Gulo ĝis 3 monstroj sur la ludtabulo."
            },

            "cannibalisme" : {
            	fr : "Cannibalisme",
            	en : "Cannibalism",
            	eo : "Kanibalismo"
            },
            "cannibalisme-action" : {
            	fr : "*Cannibalisme*",
            	en : "*Cannibalism*",
            	eo : "*Kanibalismo*"
            },
            "cannibalisme-texte" : {
            	fr : "C'est peut-être ça qu'on appelle : ‘donner de sa personne’.",
            	en : "Maybe that’s what we call: ‘giving of himself’.",
            	eo : "Ĉu estas tio ke ĝi vokas: ‘donaci sin’."
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