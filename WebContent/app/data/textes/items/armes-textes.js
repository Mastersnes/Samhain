'use strict';
define([], function(){
	var data = {
	        /**
	        * Armes
	        **/
	        "piocher" : {
            	fr : "Piocher une carte",
            	en : "Draw a card",
            	eo : "Tiri unu karto"
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
            	eo : "Tio estas simple via pugno&hellip; Ekde via nasko, ĝi ne forlasis vin."
            },
            "baton" : {
            	fr : "Bâton",
            	en : "Stick",
            	eo : "Bastono"
            },
            "baton-action" : {
            	fr : "Coup de Bâton",
            	en : "Stick Stroke",
            	eo : "Bastonobato"
            },
            "baton-texte" : {
            	fr : "Un gros bâton qui peut faire très mal&hellip;",
            	en : "A big stick that can hurt a lot&hellip;"
            },
            "dague" : {
            	fr : "Dague",
            	en : "Dagger"
            },
            "dague-action" : {
            	fr : "Coup de Dague",
            	en : "Dagger Stroke"
            },
            "dague-texte" : {
            	fr : "Une belle dague toute brillante. Sa lame semble tranchante comme un rasoir.",
            	en : "A beautiful and brilliant dagger. Its blade looks sharp as a razor-sharp."
            },
            "epee" : {
            	fr : "Épée",
            	en : "Sword"
            },
            "epee-action" : {
            	fr : "Coup d'Epée",
            	en : "Sword Strike"
            },
            "epee-texte" : {
            	fr : "Une grosse épée à une main. Elle est aussi lourde que tranchante&nbsp;!",
            	en : "A big sword with one hand. It's as heavy as it is sharp!"
            },
            "crocRoi" : {
            	fr : "Croc du roi",
            	en : "King's fang"
            },
            "crocRoi-action" : {
            	fr : "Coup de Croc",
            	en : "Fang Strike"
            },
            "crocRoi-texte" : {
            	fr : "Le croc de votre ancien ami&hellip; Il dégage une odeur putride&hellip; Parfait pour une petite balade&nbsp;!",
            	en : "Your old friend's fang&hellip; It emits a putrid smell&hellip; Perfect for a short walk!"
            }
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