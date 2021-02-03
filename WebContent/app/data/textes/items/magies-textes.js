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
            	eo : "Nehaltigebla sorĉo ebliganta ĵeti enorman fajrobulon."
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
            	eo : "Sorĉo ebliganta kuraci vin. Rejkio ne estas ankaŭ bonega!"
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
            	eo : "Sorĉo ebliganta forigi ajnan damaĝon. Atenton, ĝi ne kuracas!"
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
            	eo : "Aranemordo"
            },
            "araneisme-action" : {
            	fr : "*Aranéisme*",
            	en : "*Arachnidism*",
            	eo : "*Aranemordo*"
            },
            "araneisme-texte" : {
            	fr : "La morsure préférée de nos amis à huit pattes. Les traces qu'elle engendre vous laisseront une belle cicatrice.",
            	en : "Our eight-legged friends' favourite bite. Traces caused will let you a pretty scar.",
            	eo : "La mordo preferata de niaj okkruraj amikoj. Spuroj estigitaj postlasos al vi belan cikatron."
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
            	eo : "Bona maniero plenigi vian burson. Ne tre honesta sed nekredeble efika!"
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
            	en : "Better twice than once! Isn't?",
            	eo : "Pli bone dufoje ol unufoje! Ĉu ne?"
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
            	eo : "Oni vere ŝtelas ion ajn hodiaŭ. Kien iras la mondo?&hellip;"
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
            	eo : "Kaj tiel oni finiĝas kiel tranĉaĵoj! Almenaŭ, laŭ ŝtrumpetoj&hellip;"
            },

            "pondreAraignee" : {
            	fr : "Ponte",
            	en : "Laying",
            	eo : "Ovumado"
            },
            "pondreAraignee-action" : {
            	fr : "*Ponte*",
            	en : "*Laying*",
            	eo : "*Ovumado*"
            },
            "pondreAraignee-texte" : {
            	fr : "&laquo;&nbsp;Alien&nbsp;&raquo;, à côté, c'est du pipi de chat&nbsp;!<br/>Invoque une Araignée dans la limite de 3 monstres sur le plateau.",
            	en : "In comparison, &laquo;&nbsp;Alien&nbsp;&raquo; is just chicken feed!<br/>Summon a Spider up to 3 monsters on the board.",
            	eo : "Kompare, “Alieno” estas piso de krokodilo!</br>Alvokas Araneon ĝis 3 monstroj sur la ludtabulo."
            },

            "invoqueGoule" : {
            	fr : "Invoquer goule",
            	en : "Summon ghoul",
            	eo : "Alvoki gulon"
            },
            "invoqueGoule-action" : {
            	fr : "*Invoquer Goule*",
            	en : "*Summon Ghoul*",
            	eo : "*Alvoki Gulon*"
            },
            "invoqueGoule-texte" : {
            	fr : "Le début du cauchemar&hellip;<br/>Invoque une Goule dans la limite de 3 monstres sur le plateau.",
            	en : "The nightmare beginning&hellip;<br/>Summon a Ghoul up to 3 monsters on the board.",
            	eo : "La komenco de la koŝmaro&hellip;</br>Alvokas Gulon ĝis 3 monstroj sur la ludtabulo."
            },

            "invoqueGrosseGoule" : {
            	fr : "Invoquer grosse goule",
            	en : "Summon big ghoul",
            	eo : "Alvoki grandan gulon"
            },
            "invoqueGrosseGoule-action" : {
            	fr : "*Invoquer Grosse Goule*",
            	en : "*Summon Big Ghoul*",
            	eo : "*Alvoki Grandan Gulon*"
            },
            "invoqueGrosseGoule-texte" : {
            	fr : "Le cauchemar continue&hellip;<br/>Invoque une Grosse Goule dans la limite de 3 monstres sur le plateau.",
            	en : "The nightmare continues&hellip;<br/>Summon a Big Ghoul up to 3 monsters on the board.",
            	eo : "La koŝmaro daŭras&hellip;<br/>Alvokas Grandan Gulon ĝis 3 monstroj sur la ludtabulo."
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
            	eo : "Eble estas tio, kion oni nomas: ‘donaci sin’."
            },
	};
	
	return {
        name : function() {
            return "Magies.js";
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