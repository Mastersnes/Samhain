'use strict';
define([], function(){
	var data = {
	        /**
	        * Armes
	        **/
	        "piocher" : {
            	fr : "Piocher une carte",
            	en : "Draw a card",
            	eo : "Eltiri karton"

            },
            "poing" : {
            	fr : "Poing",
            	en : "Fist",
            	eo : "Pugno"
            },
            "poing-action" : {
            	fr : "Coup de Poing",
            	en : "Punch",
            	eo : "Pugnobato"
            },
            "poing-texte" : {
            	fr : "C'est simplement votre poing&hellip; Depuis votre naissance, il ne vous a pas quitté.",
            	en : "It's just your fist&hellip; Since your birth, it hasn't left you.",
            	eo : "Tio estas simple via pugno&hellip; Ekde via naskiĝo, ĝi ne forlasis vin."
            },
            "baton" : {
            	fr : "Bâton",
            	en : "Stick",
            	eo : "Bastono"
            },
            "baton-action" : {
            	fr : "Coup de Bâton",
            	en : "Stick Stroke",
            	eo : "Bastonbato"
            },
            "baton-texte" : {
            	fr : "Un gros bâton qui peut faire très mal&hellip;",
            	en : "A big stick that can be very painful&hellip;",
            	eo : "Granda bastono, kiu povas tre dolorigi&hellip;"
            },
            "dague" : {
            	fr : "Dague",
            	en : "Dagger",
            	eo : "Dago"
            },
            "dague-action" : {
            	fr : "Coup de Dague",
            	en : "Dagger Stroke",
            	eo : "Dagohako"
            },
            "dague-texte" : {
            	fr : "Une belle dague toute brillante. Sa lame semble tranchante comme un rasoir.",
            	en : "A beautiful and shiny dagger. Its blade looks sharp as a razor.",
            	eo : "Bela dago tute brila. Ĝia klingo shajnas akra kiel razilo."
            },
            "epee" : {
            	fr : "Épée",
            	en : "Sword",
            	eo : "Glavo"
            },
            "epee-action" : {
            	fr : "Coup d'Epée",
            	en : "Sword Stroke",
            	eo : "Glavohako"
            },
            "epee-texte" : {
            	fr : "Une grosse épée à une main. Elle est aussi lourde que tranchante&nbsp;!",
            	en : "A big one-handed sword. It's as heavy as sharp!",
            	eo : "Granda unumana glavo. Ĝi estas tiel peza kiel akra!"
            },
            "crocRoi" : {
            	fr : "Croc du roi",
            	en : "King's fang",
            	eo : "Dentego de reĝo"
            },
            "crocRoi-action" : {
            	fr : "Coup de Croc",
            	en : "Fang Stroke",
            	eo : "Dentegohako"
            },
            "crocRoi-texte" : {
            	fr : "Le croc de votre défunt ami&hellip; Il dégage une odeur putride&hellip; Parfait pour une petite balade&nbsp;!",
            	en : "Your deceased friend's fang&hellip; it smells a putrid odour&hellip; Perfect for a short walk!",
            	eo : "La dentego de via mortinta amiko&hellip; Ĝi emanas putran odoron&hellip; Perfekta por eta promenado!"
            }
	};
	
	return {
        name : function() {
            return "Armes.js";
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